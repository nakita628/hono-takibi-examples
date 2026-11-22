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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2ApisQueryKey(args: InferRequestType<typeof client.v2.apis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis', keyArgs] as const
}

export function getV2ApisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.apis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ApisQueryKey>
  >({
    queryKey: getV2ApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Apis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.apis.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2ApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ApisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Apis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.apis.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2ApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ApisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2ApisMutationKey() {
  return ['v2', '/v2/apis', 'PUT'] as const
}

export function getPutV2ApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$put>>>>>,
    TError,
    InferRequestType<typeof client.v2.apis.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apis.$put>) {
      return parseResponse(client.v2.apis.$put(args, options))
    },
  })
}

export function usePutV2Apis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$put>>>>>,
        TError,
        InferRequestType<typeof client.v2.apis.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2ApisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2ApisMutationKey() {
  return ['v2', '/v2/apis', 'POST'] as const
}

export function getPostV2ApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apis.$post>) {
      return parseResponse(client.v2.apis.$post(args, options))
    },
  })
}

export function usePostV2Apis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$post>>>>>,
        TError,
        InferRequestType<typeof client.v2.apis.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2DomainnamesDomainNameApimappingsQueryKey(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames/:domainName/apimappings', keyArgs] as const
}

export function getV2DomainnamesDomainNameApimappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainnamesDomainNameApimappingsQueryKey>
  >({
    queryKey: getV2DomainnamesDomainNameApimappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domainnames[':domainName'].apimappings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DomainnamesDomainNameApimappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesDomainNameApimappingsQueryKey>
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
      ...getV2DomainnamesDomainNameApimappingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DomainnamesDomainNameApimappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesDomainNameApimappingsQueryKey>
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
      ...getV2DomainnamesDomainNameApimappingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2DomainnamesDomainNameApimappingsMutationKey() {
  return ['v2', '/v2/domainnames/:domainName/apimappings', 'POST'] as const
}

export function getPostV2DomainnamesDomainNameApimappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainnamesDomainNameApimappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>,
    ) {
      return parseResponse(client.v2.domainnames[':domainName'].apimappings.$post(args, options))
    },
  })
}

export function usePostV2DomainnamesDomainNameApimappings<
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
                ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DomainnamesDomainNameApimappingsMutationOptions<
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

export function getV2ApisApiIdAuthorizersQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/authorizers', keyArgs] as const
}

export function getV2ApisApiIdAuthorizersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdAuthorizersQueryKey>
  >({
    queryKey: getV2ApisApiIdAuthorizersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].authorizers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdAuthorizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdAuthorizersQueryKey>
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
      ...getV2ApisApiIdAuthorizersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdAuthorizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdAuthorizersQueryKey>
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
      ...getV2ApisApiIdAuthorizersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ApisApiIdAuthorizersMutationKey() {
  return ['v2', '/v2/apis/:apiId/authorizers', 'POST'] as const
}

export function getPostV2ApisApiIdAuthorizersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdAuthorizersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].authorizers.$post(args, options))
    },
  })
}

export function usePostV2ApisApiIdAuthorizers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisApiIdAuthorizersMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/deployments', keyArgs] as const
}

export function getV2ApisApiIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdDeploymentsQueryKey>
  >({
    queryKey: getV2ApisApiIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdDeploymentsQueryKey>
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
      ...getV2ApisApiIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdDeploymentsQueryKey>
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
      ...getV2ApisApiIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ApisApiIdDeploymentsMutationKey() {
  return ['v2', '/v2/apis/:apiId/deployments', 'POST'] as const
}

export function getPostV2ApisApiIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].deployments.$post(args, options))
    },
  })
}

export function usePostV2ApisApiIdDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisApiIdDeploymentsMutationOptions<TError, TOnMutateResult>(
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

export function getV2DomainnamesQueryKey(
  args: InferRequestType<typeof client.v2.domainnames.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames', keyArgs] as const
}

export function getV2DomainnamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.domainnames.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainnamesQueryKey>
  >({
    queryKey: getV2DomainnamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domainnames.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Domainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.domainnames.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2DomainnamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Domainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.domainnames.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2DomainnamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2DomainnamesMutationKey() {
  return ['v2', '/v2/domainnames', 'POST'] as const
}

export function getPostV2DomainnamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.domainnames.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainnamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.domainnames.$post>) {
      return parseResponse(client.v2.domainnames.$post(args, options))
    },
  })
}

export function usePostV2Domainnames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.domainnames.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DomainnamesMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdIntegrationsQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/integrations', keyArgs] as const
}

export function getV2ApisApiIdIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdIntegrationsQueryKey>
  >({
    queryKey: getV2ApisApiIdIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdIntegrationsQueryKey>
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
      ...getV2ApisApiIdIntegrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdIntegrationsQueryKey>
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
      ...getV2ApisApiIdIntegrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ApisApiIdIntegrationsMutationKey() {
  return ['v2', '/v2/apis/:apiId/integrations', 'POST'] as const
}

export function getPostV2ApisApiIdIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].integrations.$post(args, options))
    },
  })
}

export function usePostV2ApisApiIdIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisApiIdIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryKey(
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

export function getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryKey>
  >({
    queryKey: getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryKey>
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
      ...getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryKey>
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
      ...getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesMutationKey() {
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId/integrationresponses', 'POST'] as const
}

export function getPostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses<
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
                  (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
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
    getPostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesMutationOptions<
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

export function getV2ApisApiIdModelsQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/models', keyArgs] as const
}

export function getV2ApisApiIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdModelsQueryKey>
  >({
    queryKey: getV2ApisApiIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ApisApiIdModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ApisApiIdModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ApisApiIdModelsMutationKey() {
  return ['v2', '/v2/apis/:apiId/models', 'POST'] as const
}

export function getPostV2ApisApiIdModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$post']>) {
      return parseResponse(client.v2.apis[':apiId'].models.$post(args, options))
    },
  })
}

export function usePostV2ApisApiIdModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisApiIdModelsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdRoutesQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes', keyArgs] as const
}

export function getV2ApisApiIdRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdRoutesQueryKey>
  >({
    queryKey: getV2ApisApiIdRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ApisApiIdRoutesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ApisApiIdRoutesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ApisApiIdRoutesMutationKey() {
  return ['v2', '/v2/apis/:apiId/routes', 'POST'] as const
}

export function getPostV2ApisApiIdRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdRoutesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$post']>) {
      return parseResponse(client.v2.apis[':apiId'].routes.$post(args, options))
    },
  })
}

export function usePostV2ApisApiIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisApiIdRoutesMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdRoutesRouteIdRouteresponsesQueryKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses', keyArgs] as const
}

export function getV2ApisApiIdRoutesRouteIdRouteresponsesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdRoutesRouteIdRouteresponsesQueryKey>
  >({
    queryKey: getV2ApisApiIdRoutesRouteIdRouteresponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdRoutesRouteIdRouteresponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesRouteIdRouteresponsesQueryKey>
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
      ...getV2ApisApiIdRoutesRouteIdRouteresponsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdRoutesRouteIdRouteresponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesRouteIdRouteresponsesQueryKey>
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
      ...getV2ApisApiIdRoutesRouteIdRouteresponsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ApisApiIdRoutesRouteIdRouteresponsesMutationKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses', 'POST'] as const
}

export function getPostV2ApisApiIdRoutesRouteIdRouteresponsesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdRoutesRouteIdRouteresponsesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$post(args, options),
      )
    },
  })
}

export function usePostV2ApisApiIdRoutesRouteIdRouteresponses<
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
                  (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
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
  const mutationDefaults = getPostV2ApisApiIdRoutesRouteIdRouteresponsesMutationOptions<
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

export function getV2ApisApiIdStagesQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/stages', keyArgs] as const
}

export function getV2ApisApiIdStagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdStagesQueryKey>
  >({
    queryKey: getV2ApisApiIdStagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].stages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ApisApiIdStagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ApisApiIdStagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ApisApiIdStagesMutationKey() {
  return ['v2', '/v2/apis/:apiId/stages', 'POST'] as const
}

export function getPostV2ApisApiIdStagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ApisApiIdStagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$post']>) {
      return parseResponse(client.v2.apis[':apiId'].stages.$post(args, options))
    },
  })
}

export function usePostV2ApisApiIdStages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ApisApiIdStagesMutationOptions<TError, TOnMutateResult>(
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

export function getV2VpclinksQueryKey(args: InferRequestType<typeof client.v2.vpclinks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/vpclinks', keyArgs] as const
}

export function getV2VpclinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.vpclinks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VpclinksQueryKey>
  >({
    queryKey: getV2VpclinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vpclinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Vpclinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.vpclinks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2VpclinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2VpclinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Vpclinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.vpclinks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2VpclinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2VpclinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2VpclinksMutationKey() {
  return ['v2', '/v2/vpclinks', 'POST'] as const
}

export function getPostV2VpclinksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.vpclinks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VpclinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vpclinks.$post>) {
      return parseResponse(client.v2.vpclinks.$post(args, options))
    },
  })
}

export function usePostV2Vpclinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.vpclinks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2VpclinksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdStagesStageNameAccesslogsettingsMutationKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName/accesslogsettings', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdStagesStageNameAccesslogsettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdStagesStageNameAccesslogsettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].stages[':stageName'].accesslogsettings.$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdStagesStageNameAccesslogsettings<
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
                    (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
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
  const mutationDefaults = getDeleteV2ApisApiIdStagesStageNameAccesslogsettingsMutationOptions<
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

export function getV2ApisApiIdQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId', keyArgs] as const
}

export function getV2ApisApiIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdQueryKey>
  >({
    queryKey: getV2ApisApiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2ApisApiId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ApisApiIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ApisApiId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ApisApiIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2ApisApiIdMutationKey() {
  return ['v2', '/v2/apis/:apiId', 'PUT'] as const
}

export function getPutV2ApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['$put']>) {
      return parseResponse(client.v2.apis[':apiId'].$put(args, options))
    },
  })
}

export function usePutV2ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2ApisApiIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdMutationKey() {
  return ['v2', '/v2/apis/:apiId', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['$delete']>) {
      return parseResponse(client.v2.apis[':apiId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ApisApiIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2ApisApiIdMutationKey() {
  return ['v2', '/v2/apis/:apiId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['$patch']>) {
      return parseResponse(client.v2.apis[':apiId'].$patch(args, options))
    },
  })
}

export function usePatchV2ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2ApisApiIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2DomainnamesDomainNameApimappingsApiMappingIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames/:domainName/apimappings/:apiMappingId', keyArgs] as const
}

export function getV2DomainnamesDomainNameApimappingsApiMappingIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2DomainnamesDomainNameApimappingsApiMappingIdQueryKey>
  >({
    queryKey: getV2DomainnamesDomainNameApimappingsApiMappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DomainnamesDomainNameApimappingsApiMappingId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesDomainNameApimappingsApiMappingIdQueryKey>
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
      ...getV2DomainnamesDomainNameApimappingsApiMappingIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DomainnamesDomainNameApimappingsApiMappingId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesDomainNameApimappingsApiMappingIdQueryKey>
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
      ...getV2DomainnamesDomainNameApimappingsApiMappingIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2DomainnamesDomainNameApimappingsApiMappingIdMutationKey() {
  return ['v2', '/v2/domainnames/:domainName/apimappings/:apiMappingId', 'DELETE'] as const
}

export function getDeleteV2DomainnamesDomainNameApimappingsApiMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainnamesDomainNameApimappingsApiMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2DomainnamesDomainNameApimappingsApiMappingId<
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
                    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
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
  const mutationDefaults = getDeleteV2DomainnamesDomainNameApimappingsApiMappingIdMutationOptions<
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

export function getPatchV2DomainnamesDomainNameApimappingsApiMappingIdMutationKey() {
  return ['v2', '/v2/domainnames/:domainName/apimappings/:apiMappingId', 'PATCH'] as const
}

export function getPatchV2DomainnamesDomainNameApimappingsApiMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2DomainnamesDomainNameApimappingsApiMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2DomainnamesDomainNameApimappingsApiMappingId<
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
                  (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
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
  const mutationDefaults = getPatchV2DomainnamesDomainNameApimappingsApiMappingIdMutationOptions<
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

export function getV2ApisApiIdAuthorizersAuthorizerIdQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/authorizers/:authorizerId', keyArgs] as const
}

export function getV2ApisApiIdAuthorizersAuthorizerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdAuthorizersAuthorizerIdQueryKey>
  >({
    queryKey: getV2ApisApiIdAuthorizersAuthorizerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].authorizers[':authorizerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdAuthorizersAuthorizerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdAuthorizersAuthorizerIdQueryKey>
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
      ...getV2ApisApiIdAuthorizersAuthorizerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdAuthorizersAuthorizerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdAuthorizersAuthorizerIdQueryKey>
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
      ...getV2ApisApiIdAuthorizersAuthorizerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdAuthorizersAuthorizerIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/authorizers/:authorizerId', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdAuthorizersAuthorizerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdAuthorizersAuthorizerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].authorizers[':authorizerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdAuthorizersAuthorizerId<
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
                    (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']
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
  const mutationDefaults = getDeleteV2ApisApiIdAuthorizersAuthorizerIdMutationOptions<
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

export function getPatchV2ApisApiIdAuthorizersAuthorizerIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/authorizers/:authorizerId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdAuthorizersAuthorizerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdAuthorizersAuthorizerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].authorizers[':authorizerId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2ApisApiIdAuthorizersAuthorizerId<
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
                  (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']
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
  const mutationDefaults = getPatchV2ApisApiIdAuthorizersAuthorizerIdMutationOptions<
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

export function getDeleteV2ApisApiIdCorsMutationKey() {
  return ['v2', '/v2/apis/:apiId/cors', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdCorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdCorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>) {
      return parseResponse(client.v2.apis[':apiId'].cors.$delete(args, options))
    },
  })
}

export function useDeleteV2ApisApiIdCors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ApisApiIdCorsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdDeploymentsDeploymentIdQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/deployments/:deploymentId', keyArgs] as const
}

export function getV2ApisApiIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getV2ApisApiIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdDeploymentsDeploymentIdQueryKey>
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
      ...getV2ApisApiIdDeploymentsDeploymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdDeploymentsDeploymentIdQueryKey>
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
      ...getV2ApisApiIdDeploymentsDeploymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdDeploymentsDeploymentIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/deployments/:deploymentId', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].deployments[':deploymentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdDeploymentsDeploymentId<
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
                    (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']
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
  const mutationDefaults = getDeleteV2ApisApiIdDeploymentsDeploymentIdMutationOptions<
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

export function getPatchV2ApisApiIdDeploymentsDeploymentIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/deployments/:deploymentId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].deployments[':deploymentId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2ApisApiIdDeploymentsDeploymentId<
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
                  (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']
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
  const mutationDefaults = getPatchV2ApisApiIdDeploymentsDeploymentIdMutationOptions<
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

export function getV2DomainnamesDomainNameQueryKey(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames/:domainName', keyArgs] as const
}

export function getV2DomainnamesDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainnamesDomainNameQueryKey>
  >({
    queryKey: getV2DomainnamesDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domainnames[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesDomainNameQueryKey>
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
      ...getV2DomainnamesDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainnamesDomainNameQueryKey>
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
      ...getV2DomainnamesDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2DomainnamesDomainNameMutationKey() {
  return ['v2', '/v2/domainnames/:domainName', 'DELETE'] as const
}

export function getDeleteV2DomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.domainnames)[':domainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$delete']>,
    ) {
      return parseResponse(client.v2.domainnames[':domainName'].$delete(args, options))
    },
  })
}

export function useDeleteV2DomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.domainnames)[':domainName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2DomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2DomainnamesDomainNameMutationKey() {
  return ['v2', '/v2/domainnames/:domainName', 'PATCH'] as const
}

export function getPatchV2DomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.domainnames)[':domainName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2DomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$patch']>,
    ) {
      return parseResponse(client.v2.domainnames[':domainName'].$patch(args, options))
    },
  })
}

export function usePatchV2DomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.domainnames)[':domainName']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2DomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdIntegrationsIntegrationIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId', keyArgs] as const
}

export function getV2ApisApiIdIntegrationsIntegrationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdIntegrationsIntegrationIdQueryKey>
  >({
    queryKey: getV2ApisApiIdIntegrationsIntegrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdIntegrationsIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdIntegrationsIntegrationIdQueryKey>
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
      ...getV2ApisApiIdIntegrationsIntegrationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdIntegrationsIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdIntegrationsIntegrationIdQueryKey>
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
      ...getV2ApisApiIdIntegrationsIntegrationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdIntegrationsIntegrationIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdIntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdIntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdIntegrationsIntegrationId<
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
                    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
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
  const mutationDefaults = getDeleteV2ApisApiIdIntegrationsIntegrationIdMutationOptions<
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

export function getPatchV2ApisApiIdIntegrationsIntegrationIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdIntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdIntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2ApisApiIdIntegrationsIntegrationId<
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
                  (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']
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
  const mutationDefaults = getPatchV2ApisApiIdIntegrationsIntegrationIdMutationOptions<
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

export function getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryKey(
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

export function getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryKey
    >
  >({
    queryKey:
      getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
          ':integrationResponseId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryKey
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
      ...getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryKey
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
      ...getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationKey() {
  return [
    'v2',
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses/:integrationResponseId',
    'DELETE',
  ] as const
}

export function getDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
          ':integrationResponseId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
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
                    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
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
    getDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationOptions<
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

export function getPatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationKey() {
  return [
    'v2',
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses/:integrationResponseId',
    'PATCH',
  ] as const
}

export function getPatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
          ':integrationResponseId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
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
                  (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
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
    getPatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdMutationOptions<
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

export function getV2ApisApiIdModelsModelIdQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/models/:modelId', keyArgs] as const
}

export function getV2ApisApiIdModelsModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdModelsModelIdQueryKey>
  >({
    queryKey: getV2ApisApiIdModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].models[':modelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdModelsModelIdQueryKey>
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
      ...getV2ApisApiIdModelsModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdModelsModelIdQueryKey>
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
      ...getV2ApisApiIdModelsModelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdModelsModelIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/models/:modelId', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].models[':modelId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ApisApiIdModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ApisApiIdModelsModelIdMutationOptions<
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

export function getPatchV2ApisApiIdModelsModelIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/models/:modelId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].models[':modelId'].$patch(args, options))
    },
  })
}

export function usePatchV2ApisApiIdModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2ApisApiIdModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdRoutesRouteIdQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes/:routeId', keyArgs] as const
}

export function getV2ApisApiIdRoutesRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdRoutesRouteIdQueryKey>
  >({
    queryKey: getV2ApisApiIdRoutesRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdRoutesRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesRouteIdQueryKey>
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
      ...getV2ApisApiIdRoutesRouteIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdRoutesRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesRouteIdQueryKey>
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
      ...getV2ApisApiIdRoutesRouteIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdRoutesRouteIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdRoutesRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdRoutesRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ApisApiIdRoutesRouteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ApisApiIdRoutesRouteIdMutationOptions<
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

export function getPatchV2ApisApiIdRoutesRouteIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdRoutesRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdRoutesRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$patch(args, options))
    },
  })
}

export function usePatchV2ApisApiIdRoutesRouteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2ApisApiIdRoutesRouteIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyMutationKey() {
  return [
    'v2',
    '/v2/apis/:apiId/routes/:routeId/requestparameters/:requestParameterKey',
    'DELETE',
  ] as const
}

export function getDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].requestparameters[
          ':requestParameterKey'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKey<
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
                    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
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
    getDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyMutationOptions<
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

export function getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId', keyArgs] as const
}

export function getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryKey>
  >({
    queryKey: getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryKey>
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
      ...getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryKey>
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
      ...getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationKey() {
  return [
    'v2',
    '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId',
    'DELETE',
  ] as const
}

export function getDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
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
                    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
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
    getDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationOptions<
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

export function getPatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId', 'PATCH'] as const
}

export function getPatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
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
                  (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
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
    getPatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdMutationOptions<
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

export function getDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyMutationKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName/routesettings/:routeKey', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].stages[':stageName'].routesettings[':routeKey'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKey<
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
                    (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
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
  const mutationDefaults = getDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyMutationOptions<
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

export function getV2ApisApiIdStagesStageNameQueryKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/stages/:stageName', keyArgs] as const
}

export function getV2ApisApiIdStagesStageNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdStagesStageNameQueryKey>
  >({
    queryKey: getV2ApisApiIdStagesStageNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].stages[':stageName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdStagesStageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdStagesStageNameQueryKey>
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
      ...getV2ApisApiIdStagesStageNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdStagesStageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdStagesStageNameQueryKey>
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
      ...getV2ApisApiIdStagesStageNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdStagesStageNameMutationKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdStagesStageNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdStagesStageNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$delete(args, options))
    },
  })
}

export function useDeleteV2ApisApiIdStagesStageName<
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
                  ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ApisApiIdStagesStageNameMutationOptions<
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

export function getPatchV2ApisApiIdStagesStageNameMutationKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName', 'PATCH'] as const
}

export function getPatchV2ApisApiIdStagesStageNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ApisApiIdStagesStageNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>,
    ) {
      return parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$patch(args, options))
    },
  })
}

export function usePatchV2ApisApiIdStagesStageName<
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
                ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2ApisApiIdStagesStageNameMutationOptions<
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

export function getV2VpclinksVpcLinkIdQueryKey(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/vpclinks/:vpcLinkId', keyArgs] as const
}

export function getV2VpclinksVpcLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VpclinksVpcLinkIdQueryKey>
  >({
    queryKey: getV2VpclinksVpcLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vpclinks[':vpcLinkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2VpclinksVpcLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VpclinksVpcLinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2VpclinksVpcLinkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2VpclinksVpcLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VpclinksVpcLinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2VpclinksVpcLinkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2VpclinksVpcLinkIdMutationKey() {
  return ['v2', '/v2/vpclinks/:vpcLinkId', 'DELETE'] as const
}

export function getDeleteV2VpclinksVpcLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VpclinksVpcLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>) {
      return parseResponse(client.v2.vpclinks[':vpcLinkId'].$delete(args, options))
    },
  })
}

export function useDeleteV2VpclinksVpcLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2VpclinksVpcLinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2VpclinksVpcLinkIdMutationKey() {
  return ['v2', '/v2/vpclinks/:vpcLinkId', 'PATCH'] as const
}

export function getPatchV2VpclinksVpcLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2VpclinksVpcLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>) {
      return parseResponse(client.v2.vpclinks[':vpcLinkId'].$patch(args, options))
    },
  })
}

export function usePatchV2VpclinksVpcLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2VpclinksVpcLinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ApisApiIdExportsSpecificationOutputTypeQueryKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/exports/:specification#outputType', keyArgs] as const
}

export function getV2ApisApiIdExportsSpecificationOutputTypeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdExportsSpecificationOutputTypeQueryKey>
  >({
    queryKey: getV2ApisApiIdExportsSpecificationOutputTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].exports[':specification#outputType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdExportsSpecificationOutputType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdExportsSpecificationOutputTypeQueryKey>
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
      ...getV2ApisApiIdExportsSpecificationOutputTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdExportsSpecificationOutputType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdExportsSpecificationOutputTypeQueryKey>
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
      ...getV2ApisApiIdExportsSpecificationOutputTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2ApisApiIdStagesStageNameCacheAuthorizersMutationKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName/cache/authorizers', 'DELETE'] as const
}

export function getDeleteV2ApisApiIdStagesStageNameCacheAuthorizersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ApisApiIdStagesStageNameCacheAuthorizersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.apis[':apiId'].stages[':stageName'].cache.authorizers.$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ApisApiIdStagesStageNameCacheAuthorizers<
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
                    (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
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
  const mutationDefaults = getDeleteV2ApisApiIdStagesStageNameCacheAuthorizersMutationOptions<
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

export function getV2ApisApiIdModelsModelIdTemplateQueryKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/models/:modelId/template', keyArgs] as const
}

export function getV2ApisApiIdModelsModelIdTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ApisApiIdModelsModelIdTemplateQueryKey>
  >({
    queryKey: getV2ApisApiIdModelsModelIdTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apis[':apiId'].models[':modelId'].template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ApisApiIdModelsModelIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdModelsModelIdTemplateQueryKey>
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
      ...getV2ApisApiIdModelsModelIdTemplateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ApisApiIdModelsModelIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2ApisApiIdModelsModelIdTemplateQueryKey>
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
      ...getV2ApisApiIdModelsModelIdTemplateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/tags/:resource-arn', keyArgs] as const
}

export function getV2TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TagsResourceArnQueryKey>
  >({
    queryKey: getV2TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tags[':resource-arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2TagsResourceArnMutationKey() {
  return ['v2', '/v2/tags/:resource-arn', 'POST'] as const
}

export function getPostV2TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.v2.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostV2TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.tags)[':resource-arn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2TagsResourceArnTagKeysMutationKey() {
  return ['v2', '/v2/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteV2TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v2.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV2TagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2TagsResourceArnTagKeysMutationOptions<
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
