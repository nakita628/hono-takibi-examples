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

export function getAccountKey() {
  return ['account'] as const
}

export function getApikeysKey() {
  return ['apikeys'] as const
}

export function getApikeysModeImportFormatKey() {
  return ['apikeys#mode=import&format'] as const
}

export function getClientcertificatesKey() {
  return ['clientcertificates'] as const
}

export function getDomainnamesKey() {
  return ['domainnames'] as const
}

export function getRestapisKey() {
  return ['restapis'] as const
}

export function getRestapisModeImportKey() {
  return ['restapis#mode=import'] as const
}

export function getSdktypesKey() {
  return ['sdktypes'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUsageplansKey() {
  return ['usageplans'] as const
}

export function getVpclinksKey() {
  return ['vpclinks'] as const
}

export function getApikeysQueryKey(args: InferRequestType<typeof client.apikeys.$get>) {
  const { header: _, ...keyArgs } = args
  return ['apikeys', '/apikeys', keyArgs] as const
}

export function getApikeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apikeys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApikeysQueryKey>
  >({
    queryKey: getApikeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apikeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApikeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apikeys.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApikeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApikeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApikeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apikeys.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApikeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApikeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApikeysMutationKey() {
  return ['apikeys', '/apikeys', 'POST'] as const
}

export function getPostApikeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$post>>>>>,
    TError,
    InferRequestType<typeof client.apikeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApikeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apikeys.$post>) {
      return parseResponse(client.apikeys.$post(args, options))
    },
  })
}

export function usePostApikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$post>>>>>,
        TError,
        InferRequestType<typeof client.apikeys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApikeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdAuthorizersQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/authorizers', keyArgs] as const
}

export function getRestapisRestapiIdAuthorizersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdAuthorizersQueryKey>
  >({
    queryKey: getRestapisRestapiIdAuthorizersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdAuthorizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdAuthorizersQueryKey>
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
      ...getRestapisRestapiIdAuthorizersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdAuthorizers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdAuthorizersQueryKey>
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
      ...getRestapisRestapiIdAuthorizersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdAuthorizersMutationKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers', 'POST'] as const
}

export function getPostRestapisRestapiIdAuthorizersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdAuthorizersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>,
    ) {
      return parseResponse(client.restapis[':restapi_id'].authorizers.$post(args, options))
    },
  })
}

export function usePostRestapisRestapiIdAuthorizers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisRestapiIdAuthorizersMutationOptions<
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

export function getDomainnamesDomainNameBasepathmappingsQueryKey(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames/:domain_name/basepathmappings', keyArgs] as const
}

export function getDomainnamesDomainNameBasepathmappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainnamesDomainNameBasepathmappingsQueryKey>
  >({
    queryKey: getDomainnamesDomainNameBasepathmappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domainnames[':domain_name'].basepathmappings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainnamesDomainNameBasepathmappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesDomainNameBasepathmappingsQueryKey>
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
      ...getDomainnamesDomainNameBasepathmappingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainnamesDomainNameBasepathmappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesDomainNameBasepathmappingsQueryKey>
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
      ...getDomainnamesDomainNameBasepathmappingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDomainnamesDomainNameBasepathmappingsMutationKey() {
  return ['domainnames', '/domainnames/:domain_name/basepathmappings', 'POST'] as const
}

export function getPostDomainnamesDomainNameBasepathmappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainnamesDomainNameBasepathmappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domainnames)[':domain_name']['basepathmappings']['$post']
      >,
    ) {
      return parseResponse(client.domainnames[':domain_name'].basepathmappings.$post(args, options))
    },
  })
}

export function usePostDomainnamesDomainNameBasepathmappings<
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
                ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainnamesDomainNameBasepathmappingsMutationOptions<
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

export function getRestapisRestapiIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/deployments', keyArgs] as const
}

export function getRestapisRestapiIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDeploymentsQueryKey>
  >({
    queryKey: getRestapisRestapiIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDeploymentsQueryKey>
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
      ...getRestapisRestapiIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDeploymentsQueryKey>
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
      ...getRestapisRestapiIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdDeploymentsMutationKey() {
  return ['restapis', '/restapis/:restapi_id/deployments', 'POST'] as const
}

export function getPostRestapisRestapiIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>,
    ) {
      return parseResponse(client.restapis[':restapi_id'].deployments.$post(args, options))
    },
  })
}

export function usePostRestapisRestapiIdDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisRestapiIdDeploymentsMutationOptions<
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

export function getRestapisRestapiIdDocumentationPartsQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/parts', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationPartsQueryKey>
  >({
    queryKey: getRestapisRestapiIdDocumentationPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.parts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdDocumentationParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationPartsQueryKey>
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
      ...getRestapisRestapiIdDocumentationPartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdDocumentationParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationPartsQueryKey>
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
      ...getRestapisRestapiIdDocumentationPartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRestapisRestapiIdDocumentationPartsMutationKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts', 'PUT'] as const
}

export function getPutRestapisRestapiIdDocumentationPartsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestapisRestapiIdDocumentationPartsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']
      >,
    ) {
      return parseResponse(client.restapis[':restapi_id'].documentation.parts.$put(args, options))
    },
  })
}

export function usePutRestapisRestapiIdDocumentationParts<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRestapisRestapiIdDocumentationPartsMutationOptions<
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

export function getPostRestapisRestapiIdDocumentationPartsMutationKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts', 'POST'] as const
}

export function getPostRestapisRestapiIdDocumentationPartsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdDocumentationPartsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']
      >,
    ) {
      return parseResponse(client.restapis[':restapi_id'].documentation.parts.$post(args, options))
    },
  })
}

export function usePostRestapisRestapiIdDocumentationParts<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']
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
  const mutationDefaults = getPostRestapisRestapiIdDocumentationPartsMutationOptions<
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

export function getRestapisRestapiIdDocumentationVersionsQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/versions', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationVersionsQueryKey>
  >({
    queryKey: getRestapisRestapiIdDocumentationVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdDocumentationVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationVersionsQueryKey>
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
      ...getRestapisRestapiIdDocumentationVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdDocumentationVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationVersionsQueryKey>
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
      ...getRestapisRestapiIdDocumentationVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdDocumentationVersionsMutationKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/versions', 'POST'] as const
}

export function getPostRestapisRestapiIdDocumentationVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdDocumentationVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions.$post(args, options),
      )
    },
  })
}

export function usePostRestapisRestapiIdDocumentationVersions<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
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
  const mutationDefaults = getPostRestapisRestapiIdDocumentationVersionsMutationOptions<
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

export function getDomainnamesQueryKey(args: InferRequestType<typeof client.domainnames.$get>) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames', keyArgs] as const
}

export function getDomainnamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domainnames.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainnamesQueryKey>
  >({
    queryKey: getDomainnamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domainnames.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domainnames.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainnamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domainnames.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainnamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDomainnamesMutationKey() {
  return ['domainnames', '/domainnames', 'POST'] as const
}

export function getPostDomainnamesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$post>>>>>,
    TError,
    InferRequestType<typeof client.domainnames.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainnamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domainnames.$post>) {
      return parseResponse(client.domainnames.$post(args, options))
    },
  })
}

export function usePostDomainnames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.domainnames.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainnamesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdModelsQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/models', keyArgs] as const
}

export function getRestapisRestapiIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdModelsQueryKey>
  >({
    queryKey: getRestapisRestapiIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdModelsQueryKey>
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
      ...getRestapisRestapiIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdModelsQueryKey>
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
      ...getRestapisRestapiIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdModelsMutationKey() {
  return ['restapis', '/restapis/:restapi_id/models', 'POST'] as const
}

export function getPostRestapisRestapiIdModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$post']>,
    ) {
      return parseResponse(client.restapis[':restapi_id'].models.$post(args, options))
    },
  })
}

export function usePostRestapisRestapiIdModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisRestapiIdModelsMutationOptions<TError, TOnMutateResult>(
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

export function getRestapisRestapiIdRequestvalidatorsQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/requestvalidators', keyArgs] as const
}

export function getRestapisRestapiIdRequestvalidatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdRequestvalidatorsQueryKey>
  >({
    queryKey: getRestapisRestapiIdRequestvalidatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].requestvalidators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdRequestvalidators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdRequestvalidatorsQueryKey>
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
      ...getRestapisRestapiIdRequestvalidatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdRequestvalidators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdRequestvalidatorsQueryKey>
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
      ...getRestapisRestapiIdRequestvalidatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdRequestvalidatorsMutationKey() {
  return ['restapis', '/restapis/:restapi_id/requestvalidators', 'POST'] as const
}

export function getPostRestapisRestapiIdRequestvalidatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdRequestvalidatorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>,
    ) {
      return parseResponse(client.restapis[':restapi_id'].requestvalidators.$post(args, options))
    },
  })
}

export function usePostRestapisRestapiIdRequestvalidators<
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
                ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisRestapiIdRequestvalidatorsMutationOptions<
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

export function getPostRestapisRestapiIdResourcesParentIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/resources/:parent_id', 'POST'] as const
}

export function getPostRestapisRestapiIdResourcesParentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdResourcesParentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':parent_id'].$post(args, options),
      )
    },
  })
}

export function usePostRestapisRestapiIdResourcesParentId<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']
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
  const mutationDefaults = getPostRestapisRestapiIdResourcesParentIdMutationOptions<
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

export function getRestapisQueryKey(args: InferRequestType<typeof client.restapis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis', keyArgs] as const
}

export function getRestapisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.restapis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRestapisQueryKey>
  >({
    queryKey: getRestapisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestapis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.restapis.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRestapisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestapisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestapis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.restapis.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRestapisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestapisQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRestapisMutationKey() {
  return ['restapis', '/restapis', 'POST'] as const
}

export function getPostRestapisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$post>>>>>,
    TError,
    InferRequestType<typeof client.restapis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restapis.$post>) {
      return parseResponse(client.restapis.$post(args, options))
    },
  })
}

export function usePostRestapis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.restapis.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdStagesQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/stages', keyArgs] as const
}

export function getRestapisRestapiIdStagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesQueryKey>
  >({
    queryKey: getRestapisRestapiIdStagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].stages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesQueryKey>
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
      ...getRestapisRestapiIdStagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesQueryKey>
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
      ...getRestapisRestapiIdStagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdStagesMutationKey() {
  return ['restapis', '/restapis/:restapi_id/stages', 'POST'] as const
}

export function getPostRestapisRestapiIdStagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdStagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$post']>,
    ) {
      return parseResponse(client.restapis[':restapi_id'].stages.$post(args, options))
    },
  })
}

export function usePostRestapisRestapiIdStages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisRestapiIdStagesMutationOptions<TError, TOnMutateResult>(
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

export function getUsageplansQueryKey(args: InferRequestType<typeof client.usageplans.$get>) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans', keyArgs] as const
}

export function getUsageplansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.usageplans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsageplansQueryKey>
  >({
    queryKey: getUsageplansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usageplans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsageplans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.usageplans.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsageplansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsageplans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.usageplans.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsageplansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsageplansMutationKey() {
  return ['usageplans', '/usageplans', 'POST'] as const
}

export function getPostUsageplansMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$post>>>>>,
    TError,
    InferRequestType<typeof client.usageplans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsageplansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.usageplans.$post>) {
      return parseResponse(client.usageplans.$post(args, options))
    },
  })
}

export function usePostUsageplans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.usageplans.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsageplansMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsageplansUsageplanIdKeysQueryKey(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId/keys', keyArgs] as const
}

export function getUsageplansUsageplanIdKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdKeysQueryKey>
  >({
    queryKey: getUsageplansUsageplanIdKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usageplans[':usageplanId'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsageplansUsageplanIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdKeysQueryKey>
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
      ...getUsageplansUsageplanIdKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsageplansUsageplanIdKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdKeysQueryKey>
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
      ...getUsageplansUsageplanIdKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsageplansUsageplanIdKeysMutationKey() {
  return ['usageplans', '/usageplans/:usageplanId/keys', 'POST'] as const
}

export function getPostUsageplansUsageplanIdKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsageplansUsageplanIdKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>,
    ) {
      return parseResponse(client.usageplans[':usageplanId'].keys.$post(args, options))
    },
  })
}

export function usePostUsageplansUsageplanIdKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsageplansUsageplanIdKeysMutationOptions<TError, TOnMutateResult>(
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

export function getVpclinksQueryKey(args: InferRequestType<typeof client.vpclinks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vpclinks', '/vpclinks', keyArgs] as const
}

export function getVpclinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vpclinks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVpclinksQueryKey>
  >({
    queryKey: getVpclinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vpclinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVpclinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vpclinks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVpclinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVpclinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVpclinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vpclinks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVpclinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVpclinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVpclinksMutationKey() {
  return ['vpclinks', '/vpclinks', 'POST'] as const
}

export function getPostVpclinksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$post>>>>>,
    TError,
    InferRequestType<typeof client.vpclinks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVpclinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vpclinks.$post>) {
      return parseResponse(client.vpclinks.$post(args, options))
    },
  })
}

export function usePostVpclinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vpclinks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVpclinksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApikeysApiKeyQueryKey(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['apikeys', '/apikeys/:api_Key', keyArgs] as const
}

export function getApikeysApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApikeysApiKeyQueryKey>
  >({
    queryKey: getApikeysApiKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apikeys[':api_Key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApikeysApiKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApikeysApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApikeysApiKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApikeysApiKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApikeysApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApikeysApiKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApikeysApiKeyMutationKey() {
  return ['apikeys', '/apikeys/:api_Key', 'DELETE'] as const
}

export function getDeleteApikeysApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apikeys)[':api_Key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApikeysApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apikeys)[':api_Key']['$delete']>) {
      return parseResponse(client.apikeys[':api_Key'].$delete(args, options))
    },
  })
}

export function useDeleteApikeysApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apikeys)[':api_Key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApikeysApiKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApikeysApiKeyMutationKey() {
  return ['apikeys', '/apikeys/:api_Key', 'PATCH'] as const
}

export function getPatchApikeysApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApikeysApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']>) {
      return parseResponse(client.apikeys[':api_Key'].$patch(args, options))
    },
  })
}

export function usePatchApikeysApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApikeysApiKeyMutationOptions<TError, TOnMutateResult>(
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

export function getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', keyArgs] as const
}

export function getRestapisRestapiIdAuthorizersAuthorizerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey>
  >({
    queryKey: getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers[':authorizer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdAuthorizersAuthorizerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey>
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
      ...getRestapisRestapiIdAuthorizersAuthorizerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdAuthorizersAuthorizerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey>
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
      ...getRestapisRestapiIdAuthorizersAuthorizerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRestapisRestapiIdAuthorizersAuthorizerIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', 'POST'] as const
}

export function getPostRestapisRestapiIdAuthorizersAuthorizerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdAuthorizersAuthorizerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers[':authorizer_id'].$post(args, options),
      )
    },
  })
}

export function usePostRestapisRestapiIdAuthorizersAuthorizerId<
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
                  (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
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
  const mutationDefaults = getPostRestapisRestapiIdAuthorizersAuthorizerIdMutationOptions<
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

export function getDeleteRestapisRestapiIdAuthorizersAuthorizerIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdAuthorizersAuthorizerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdAuthorizersAuthorizerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers[':authorizer_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdAuthorizersAuthorizerId<
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
                  (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdAuthorizersAuthorizerIdMutationOptions<
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

export function getPatchRestapisRestapiIdAuthorizersAuthorizerIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdAuthorizersAuthorizerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdAuthorizersAuthorizerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers[':authorizer_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdAuthorizersAuthorizerId<
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
                  (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdAuthorizersAuthorizerIdMutationOptions<
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

export function getDomainnamesDomainNameBasepathmappingsBasePathQueryKey(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', keyArgs] as const
}

export function getDomainnamesDomainNameBasepathmappingsBasePathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainnamesDomainNameBasepathmappingsBasePathQueryKey>
  >({
    queryKey: getDomainnamesDomainNameBasepathmappingsBasePathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domainnames[':domain_name'].basepathmappings[':base_path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainnamesDomainNameBasepathmappingsBasePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesDomainNameBasepathmappingsBasePathQueryKey>
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
      ...getDomainnamesDomainNameBasepathmappingsBasePathQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainnamesDomainNameBasepathmappingsBasePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesDomainNameBasepathmappingsBasePathQueryKey>
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
      ...getDomainnamesDomainNameBasepathmappingsBasePathQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDomainnamesDomainNameBasepathmappingsBasePathMutationKey() {
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', 'DELETE'] as const
}

export function getDeleteDomainnamesDomainNameBasepathmappingsBasePathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainnamesDomainNameBasepathmappingsBasePathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
      >,
    ) {
      return parseResponse(
        client.domainnames[':domain_name'].basepathmappings[':base_path'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDomainnamesDomainNameBasepathmappingsBasePath<
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
                  (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
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
  const mutationDefaults = getDeleteDomainnamesDomainNameBasepathmappingsBasePathMutationOptions<
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

export function getPatchDomainnamesDomainNameBasepathmappingsBasePathMutationKey() {
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', 'PATCH'] as const
}

export function getPatchDomainnamesDomainNameBasepathmappingsBasePathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDomainnamesDomainNameBasepathmappingsBasePathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
      >,
    ) {
      return parseResponse(
        client.domainnames[':domain_name'].basepathmappings[':base_path'].$patch(args, options),
      )
    },
  })
}

export function usePatchDomainnamesDomainNameBasepathmappingsBasePath<
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
                  (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
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
  const mutationDefaults = getPatchDomainnamesDomainNameBasepathmappingsBasePathMutationOptions<
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

export function getClientcertificatesClientcertificateIdQueryKey(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', keyArgs] as const
}

export function getClientcertificatesClientcertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientcertificatesClientcertificateIdQueryKey>
  >({
    queryKey: getClientcertificatesClientcertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clientcertificates[':clientcertificate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClientcertificatesClientcertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientcertificatesClientcertificateIdQueryKey>
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
      ...getClientcertificatesClientcertificateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClientcertificatesClientcertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientcertificatesClientcertificateIdQueryKey>
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
      ...getClientcertificatesClientcertificateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteClientcertificatesClientcertificateIdMutationKey() {
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', 'DELETE'] as const
}

export function getDeleteClientcertificatesClientcertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientcertificatesClientcertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clientcertificates)[':clientcertificate_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.clientcertificates[':clientcertificate_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteClientcertificatesClientcertificateId<
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
                ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClientcertificatesClientcertificateIdMutationOptions<
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

export function getPatchClientcertificatesClientcertificateIdMutationKey() {
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', 'PATCH'] as const
}

export function getPatchClientcertificatesClientcertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClientcertificatesClientcertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>,
    ) {
      return parseResponse(client.clientcertificates[':clientcertificate_id'].$patch(args, options))
    },
  })
}

export function usePatchClientcertificatesClientcertificateId<
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
                ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClientcertificatesClientcertificateIdMutationOptions<
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

export function getRestapisRestapiIdDeploymentsDeploymentIdQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', keyArgs] as const
}

export function getRestapisRestapiIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getRestapisRestapiIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].deployments[':deployment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDeploymentsDeploymentIdQueryKey>
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
      ...getRestapisRestapiIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDeploymentsDeploymentIdQueryKey>
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
      ...getRestapisRestapiIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdDeploymentsDeploymentIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].deployments[':deployment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdDeploymentsDeploymentId<
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
                  (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdDeploymentsDeploymentIdMutationOptions<
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

export function getPatchRestapisRestapiIdDeploymentsDeploymentIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].deployments[':deployment_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdDeploymentsDeploymentId<
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
                  (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdDeploymentsDeploymentIdMutationOptions<
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

export function getRestapisRestapiIdDocumentationPartsPartIdQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationPartsPartIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationPartsPartIdQueryKey>
  >({
    queryKey: getRestapisRestapiIdDocumentationPartsPartIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.parts[':part_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdDocumentationPartsPartId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationPartsPartIdQueryKey>
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
      ...getRestapisRestapiIdDocumentationPartsPartIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdDocumentationPartsPartId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationPartsPartIdQueryKey>
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
      ...getRestapisRestapiIdDocumentationPartsPartIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdDocumentationPartsPartIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdDocumentationPartsPartIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdDocumentationPartsPartIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.parts[':part_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdDocumentationPartsPartId<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdDocumentationPartsPartIdMutationOptions<
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

export function getPatchRestapisRestapiIdDocumentationPartsPartIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdDocumentationPartsPartIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdDocumentationPartsPartIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.parts[':part_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdDocumentationPartsPartId<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdDocumentationPartsPartIdMutationOptions<
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

export function getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/documentation/versions/:doc_version', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationVersionsDocVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey>
  >({
    queryKey: getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions[':doc_version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdDocumentationVersionsDocVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey>
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
      ...getRestapisRestapiIdDocumentationVersionsDocVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdDocumentationVersionsDocVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey>
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
      ...getRestapisRestapiIdDocumentationVersionsDocVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdDocumentationVersionsDocVersionMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/documentation/versions/:doc_version',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdDocumentationVersionsDocVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdDocumentationVersionsDocVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions[':doc_version'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdDocumentationVersionsDocVersion<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdDocumentationVersionsDocVersionMutationOptions<
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

export function getPatchRestapisRestapiIdDocumentationVersionsDocVersionMutationKey() {
  return ['restapis', '/restapis/:restapi_id/documentation/versions/:doc_version', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdDocumentationVersionsDocVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdDocumentationVersionsDocVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions[':doc_version'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdDocumentationVersionsDocVersion<
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
                  (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdDocumentationVersionsDocVersionMutationOptions<
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

export function getDomainnamesDomainNameQueryKey(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domainnames', '/domainnames/:domain_name', keyArgs] as const
}

export function getDomainnamesDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainnamesDomainNameQueryKey>
  >({
    queryKey: getDomainnamesDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domainnames[':domain_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesDomainNameQueryKey>
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
      ...getDomainnamesDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainnamesDomainNameQueryKey>
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
      ...getDomainnamesDomainNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDomainnamesDomainNameMutationKey() {
  return ['domainnames', '/domainnames/:domain_name', 'DELETE'] as const
}

export function getDeleteDomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domainnames)[':domain_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domainnames)[':domain_name']['$delete']>,
    ) {
      return parseResponse(client.domainnames[':domain_name'].$delete(args, options))
    },
  })
}

export function useDeleteDomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domainnames)[':domain_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDomainnamesDomainNameMutationKey() {
  return ['domainnames', '/domainnames/:domain_name', 'PATCH'] as const
}

export function getPatchDomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domainnames)[':domain_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domainnames)[':domain_name']['$patch']>,
    ) {
      return parseResponse(client.domainnames[':domain_name'].$patch(args, options))
    },
  })
}

export function usePatchDomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domainnames)[':domain_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
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

export function getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', keyArgs] as const
}

export function getRestapisRestapiIdGatewayresponsesResponseTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey>
  >({
    queryKey: getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses[':response_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdGatewayresponsesResponseType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey>
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
      ...getRestapisRestapiIdGatewayresponsesResponseTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdGatewayresponsesResponseType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey>
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
      ...getRestapisRestapiIdGatewayresponsesResponseTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRestapisRestapiIdGatewayresponsesResponseTypeMutationKey() {
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', 'PUT'] as const
}

export function getPutRestapisRestapiIdGatewayresponsesResponseTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestapisRestapiIdGatewayresponsesResponseTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses[':response_type'].$put(args, options),
      )
    },
  })
}

export function usePutRestapisRestapiIdGatewayresponsesResponseType<
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
                  (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
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
  const mutationDefaults = getPutRestapisRestapiIdGatewayresponsesResponseTypeMutationOptions<
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

export function getDeleteRestapisRestapiIdGatewayresponsesResponseTypeMutationKey() {
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdGatewayresponsesResponseTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdGatewayresponsesResponseTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses[':response_type'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdGatewayresponsesResponseType<
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
                  (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdGatewayresponsesResponseTypeMutationOptions<
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

export function getPatchRestapisRestapiIdGatewayresponsesResponseTypeMutationKey() {
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdGatewayresponsesResponseTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdGatewayresponsesResponseTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses[':response_type'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdGatewayresponsesResponseType<
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
                  (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdGatewayresponsesResponseTypeMutationOptions<
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

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey>
  >({
    queryKey: getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    'PUT',
  ] as const
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.$put(args, options),
      )
    },
  })
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
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
    getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationOptions<
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

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
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
    getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationOptions<
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

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    'PATCH',
  ] as const
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
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
    getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationMutationOptions<
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

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey
    >
  >({
    queryKey:
      getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.responses[':status_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    'PUT',
  ] as const
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.responses[':status_code'].$put(args, options),
      )
    },
  })
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
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
    getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationOptions<
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

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.responses[':status_code'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
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
    getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationOptions<
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

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    'PATCH',
  ] as const
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.responses[':status_code'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
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
    getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeMutationOptions<
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

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey>
  >({
    queryKey: getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey>
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey>
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'PUT',
  ] as const
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
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
    getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
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

export function getPostRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'POST',
  ] as const
}

export function getPostRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
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
    getPostRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
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

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
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
    getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
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

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    'PATCH',
  ] as const
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethod<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
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
    getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodMutationOptions<
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

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey
    >
  >({
    queryKey:
      getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
          ':status_code'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey
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
      ...getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    'PUT',
  ] as const
}

export function getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
          ':status_code'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
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
    getPutRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationOptions<
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

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
          ':status_code'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
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
    getDeleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationOptions<
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

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    'PATCH',
  ] as const
}

export function getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
          ':status_code'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
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
    getPatchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeMutationOptions<
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

export function getRestapisRestapiIdModelsModelNameQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/models/:model_name', keyArgs] as const
}

export function getRestapisRestapiIdModelsModelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdModelsModelNameQueryKey>
  >({
    queryKey: getRestapisRestapiIdModelsModelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].models[':model_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdModelsModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdModelsModelNameQueryKey>
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
      ...getRestapisRestapiIdModelsModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdModelsModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdModelsModelNameQueryKey>
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
      ...getRestapisRestapiIdModelsModelNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdModelsModelNameMutationKey() {
  return ['restapis', '/restapis/:restapi_id/models/:model_name', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdModelsModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdModelsModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].models[':model_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdModelsModelName<
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
                  (typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdModelsModelNameMutationOptions<
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

export function getPatchRestapisRestapiIdModelsModelNameMutationKey() {
  return ['restapis', '/restapis/:restapi_id/models/:model_name', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdModelsModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdModelsModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].models[':model_name'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdModelsModelName<
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
                  (typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdModelsModelNameMutationOptions<
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

export function getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey>
  >({
    queryKey: getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey>
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
      ...getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey>
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
      ...getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
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
                  (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
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
    getDeleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationOptions<
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

export function getPatchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    'PATCH',
  ] as const
}

export function getPatchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchRestapisRestapiIdRequestvalidatorsRequestvalidatorId<
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
                  (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
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
    getPatchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdMutationOptions<
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

export function getRestapisRestapiIdResourcesResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', keyArgs] as const
}

export function getRestapisRestapiIdResourcesResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesResourceIdQueryKey>
  >({
    queryKey: getRestapisRestapiIdResourcesResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdResourcesResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdResourcesResourceIdQueryKey>
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
      ...getRestapisRestapiIdResourcesResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdResourcesResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdResourcesResourceIdQueryKey>
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
      ...getRestapisRestapiIdResourcesResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdResourcesResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdResourcesResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdResourcesResourceId<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdResourcesResourceIdMutationOptions<
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

export function getPatchRestapisRestapiIdResourcesResourceIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdResourcesResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdResourcesResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdResourcesResourceId<
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
                  (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdResourcesResourceIdMutationOptions<
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

export function getRestapisRestapiIdQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id', keyArgs] as const
}

export function getRestapisRestapiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdQueryKey>
  >({
    queryKey: getRestapisRestapiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestapisRestapiIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestapisRestapiIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRestapisRestapiIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id', 'PUT'] as const
}

export function getPutRestapisRestapiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestapisRestapiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.restapis)[':restapi_id']['$put']>) {
      return parseResponse(client.restapis[':restapi_id'].$put(args, options))
    },
  })
}

export function usePutRestapisRestapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRestapisRestapiIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRestapisRestapiIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.restapis)[':restapi_id']['$delete']>) {
      return parseResponse(client.restapis[':restapi_id'].$delete(args, options))
    },
  })
}

export function useDeleteRestapisRestapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRestapisRestapiIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRestapisRestapiIdMutationKey() {
  return ['restapis', '/restapis/:restapi_id', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.restapis)[':restapi_id']['$patch']>) {
      return parseResponse(client.restapis[':restapi_id'].$patch(args, options))
    },
  })
}

export function usePatchRestapisRestapiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restapis)[':restapi_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRestapisRestapiIdMutationOptions<TError, TOnMutateResult>(
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

export function getRestapisRestapiIdStagesStageNameQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', keyArgs] as const
}

export function getRestapisRestapiIdStagesStageNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesStageNameQueryKey>
  >({
    queryKey: getRestapisRestapiIdStagesStageNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdStagesStageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesStageNameQueryKey>
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
      ...getRestapisRestapiIdStagesStageNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdStagesStageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesStageNameQueryKey>
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
      ...getRestapisRestapiIdStagesStageNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRestapisRestapiIdStagesStageNameMutationKey() {
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdStagesStageNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdStagesStageNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdStagesStageName<
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
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdStagesStageNameMutationOptions<
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

export function getPatchRestapisRestapiIdStagesStageNameMutationKey() {
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', 'PATCH'] as const
}

export function getPatchRestapisRestapiIdStagesStageNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRestapisRestapiIdStagesStageNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].$patch(args, options),
      )
    },
  })
}

export function usePatchRestapisRestapiIdStagesStageName<
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
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']
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
  const mutationDefaults = getPatchRestapisRestapiIdStagesStageNameMutationOptions<
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

export function getUsageplansUsageplanIdQueryKey(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId', keyArgs] as const
}

export function getUsageplansUsageplanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdQueryKey>
  >({
    queryKey: getUsageplansUsageplanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usageplans[':usageplanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsageplansUsageplanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdQueryKey>
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
      ...getUsageplansUsageplanIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsageplansUsageplanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdQueryKey>
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
      ...getUsageplansUsageplanIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsageplansUsageplanIdMutationKey() {
  return ['usageplans', '/usageplans/:usageplanId', 'DELETE'] as const
}

export function getDeleteUsageplansUsageplanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsageplansUsageplanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$delete']>,
    ) {
      return parseResponse(client.usageplans[':usageplanId'].$delete(args, options))
    },
  })
}

export function useDeleteUsageplansUsageplanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.usageplans)[':usageplanId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsageplansUsageplanIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsageplansUsageplanIdMutationKey() {
  return ['usageplans', '/usageplans/:usageplanId', 'PATCH'] as const
}

export function getPatchUsageplansUsageplanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsageplansUsageplanIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$patch']>) {
      return parseResponse(client.usageplans[':usageplanId'].$patch(args, options))
    },
  })
}

export function usePatchUsageplansUsageplanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.usageplans)[':usageplanId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsageplansUsageplanIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsageplansUsageplanIdKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId', keyArgs] as const
}

export function getUsageplansUsageplanIdKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdKeysKeyIdQueryKey>
  >({
    queryKey: getUsageplansUsageplanIdKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usageplans[':usageplanId'].keys[':keyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsageplansUsageplanIdKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdKeysKeyIdQueryKey>
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
      ...getUsageplansUsageplanIdKeysKeyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsageplansUsageplanIdKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdKeysKeyIdQueryKey>
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
      ...getUsageplansUsageplanIdKeysKeyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsageplansUsageplanIdKeysKeyIdMutationKey() {
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId', 'DELETE'] as const
}

export function getDeleteUsageplansUsageplanIdKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsageplansUsageplanIdKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']
      >,
    ) {
      return parseResponse(client.usageplans[':usageplanId'].keys[':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteUsageplansUsageplanIdKeysKeyId<
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
                ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsageplansUsageplanIdKeysKeyIdMutationOptions<
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

export function getVpclinksVpclinkIdQueryKey(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vpclinks', '/vpclinks/:vpclink_id', keyArgs] as const
}

export function getVpclinksVpclinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpclinksVpclinkIdQueryKey>
  >({
    queryKey: getVpclinksVpclinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vpclinks[':vpclink_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVpclinksVpclinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVpclinksVpclinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVpclinksVpclinkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVpclinksVpclinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVpclinksVpclinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVpclinksVpclinkIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteVpclinksVpclinkIdMutationKey() {
  return ['vpclinks', '/vpclinks/:vpclink_id', 'DELETE'] as const
}

export function getDeleteVpclinksVpclinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVpclinksVpclinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$delete']>) {
      return parseResponse(client.vpclinks[':vpclink_id'].$delete(args, options))
    },
  })
}

export function useDeleteVpclinksVpclinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVpclinksVpclinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchVpclinksVpclinkIdMutationKey() {
  return ['vpclinks', '/vpclinks/:vpclink_id', 'PATCH'] as const
}

export function getPatchVpclinksVpclinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVpclinksVpclinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$patch']>) {
      return parseResponse(client.vpclinks[':vpclink_id'].$patch(args, options))
    },
  })
}

export function usePatchVpclinksVpclinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVpclinksVpclinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRestapisRestapiIdStagesStageNameCacheAuthorizersMutationKey() {
  return [
    'restapis',
    '/restapis/:restapi_id/stages/:stage_name/cache/authorizers',
    'DELETE',
  ] as const
}

export function getDeleteRestapisRestapiIdStagesStageNameCacheAuthorizersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdStagesStageNameCacheAuthorizersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].cache.authorizers.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdStagesStageNameCacheAuthorizers<
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
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdStagesStageNameCacheAuthorizersMutationOptions<
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

export function getDeleteRestapisRestapiIdStagesStageNameCacheDataMutationKey() {
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name/cache/data', 'DELETE'] as const
}

export function getDeleteRestapisRestapiIdStagesStageNameCacheDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRestapisRestapiIdStagesStageNameCacheDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
      >,
    ) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].cache.data.$delete(args, options),
      )
    },
  })
}

export function useDeleteRestapisRestapiIdStagesStageNameCacheData<
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
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
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
  const mutationDefaults = getDeleteRestapisRestapiIdStagesStageNameCacheDataMutationOptions<
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

export function getClientcertificatesQueryKey(
  args: InferRequestType<typeof client.clientcertificates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['clientcertificates', '/clientcertificates', keyArgs] as const
}

export function getClientcertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clientcertificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientcertificatesQueryKey>
  >({
    queryKey: getClientcertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clientcertificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientcertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clientcertificates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientcertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientcertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientcertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clientcertificates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientcertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientcertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostClientcertificatesMutationKey() {
  return ['clientcertificates', '/clientcertificates', 'POST'] as const
}

export function getPostClientcertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.clientcertificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientcertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clientcertificates.$post>) {
      return parseResponse(client.clientcertificates.$post(args, options))
    },
  })
}

export function usePostClientcertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.clientcertificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClientcertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountQueryKey(args: InferRequestType<typeof client.account.$get>) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account', keyArgs] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchAccountMutationKey() {
  return ['account', '/account', 'PATCH'] as const
}

export function getPatchAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>>,
    TError,
    InferRequestType<typeof client.account.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$patch>) {
      return parseResponse(client.account.$patch(args, options))
    },
  })
}

export function usePatchAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'restapis',
    '/restapis/:restapi_id/stages/:stage_name/exports/:export_type',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdStagesStageNameExportsExportTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey>
  >({
    queryKey: getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].exports[':export_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdStagesStageNameExportsExportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey>
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
      ...getRestapisRestapiIdStagesStageNameExportsExportTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdStagesStageNameExportsExportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey>
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
      ...getRestapisRestapiIdStagesStageNameExportsExportTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdGatewayresponsesQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/gatewayresponses', keyArgs] as const
}

export function getRestapisRestapiIdGatewayresponsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdGatewayresponsesQueryKey>
  >({
    queryKey: getRestapisRestapiIdGatewayresponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdGatewayresponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdGatewayresponsesQueryKey>
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
      ...getRestapisRestapiIdGatewayresponsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdGatewayresponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdGatewayresponsesQueryKey>
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
      ...getRestapisRestapiIdGatewayresponsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/models/:model_name/default_template', keyArgs] as const
}

export function getRestapisRestapiIdModelsModelNameDefaultTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey>
  >({
    queryKey: getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].models[':model_name'].default_template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdModelsModelNameDefaultTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey>
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
      ...getRestapisRestapiIdModelsModelNameDefaultTemplateQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdModelsModelNameDefaultTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey>
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
      ...getRestapisRestapiIdModelsModelNameDefaultTemplateQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdResourcesQueryKey(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/resources', keyArgs] as const
}

export function getRestapisRestapiIdResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesQueryKey>
  >({
    queryKey: getRestapisRestapiIdResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdResourcesQueryKey>
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
      ...getRestapisRestapiIdResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdResourcesQueryKey>
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
      ...getRestapisRestapiIdResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name/sdks/:sdk_type', keyArgs] as const
}

export function getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey>
  >({
    queryKey: getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].sdks[':sdk_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestapisRestapiIdStagesStageNameSdksSdkType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey>
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
      ...getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestapisRestapiIdStagesStageNameSdksSdkType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey>
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
      ...getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSdktypesSdktypeIdQueryKey(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sdktypes', '/sdktypes/:sdktype_id', keyArgs] as const
}

export function getSdktypesSdktypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSdktypesSdktypeIdQueryKey>
  >({
    queryKey: getSdktypesSdktypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sdktypes[':sdktype_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSdktypesSdktypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSdktypesSdktypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSdktypesSdktypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSdktypesSdktypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSdktypesSdktypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSdktypesSdktypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSdktypesQueryKey(args: InferRequestType<typeof client.sdktypes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sdktypes', '/sdktypes', keyArgs] as const
}

export function getSdktypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sdktypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSdktypesQueryKey>
  >({
    queryKey: getSdktypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sdktypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSdktypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sdktypes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSdktypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSdktypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSdktypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sdktypes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSdktypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSdktypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource_arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resource_arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resource_arn', 'PUT'] as const
}

export function getPutTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource_arn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resource_arn']['$put']>) {
      return parseResponse(client.tags[':resource_arn'].$put(args, options))
    },
  })
}

export function usePutTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource_arn']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getUsageplansUsageplanIdUsageStartDateEndDateQueryKey(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['usageplans', '/usageplans/:usageplanId/usage#startDate&endDate', keyArgs] as const
}

export function getUsageplansUsageplanIdUsageStartDateEndDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdUsageStartDateEndDateQueryKey>
  >({
    queryKey: getUsageplansUsageplanIdUsageStartDateEndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usageplans[':usageplanId']['usage#startDate&endDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsageplansUsageplanIdUsageStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdUsageStartDateEndDateQueryKey>
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
      ...getUsageplansUsageplanIdUsageStartDateEndDateQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsageplansUsageplanIdUsageStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsageplansUsageplanIdUsageStartDateEndDateQueryKey>
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
      ...getUsageplansUsageplanIdUsageStartDateEndDateQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApikeysModeImportFormatMutationKey() {
  return ['apikeys#mode=import&format', '/apikeys#mode=import&format', 'POST'] as const
}

export function getPostApikeysModeImportFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['apikeys#mode=import&format']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['apikeys#mode=import&format']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApikeysModeImportFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['apikeys#mode=import&format']['$post']>,
    ) {
      return parseResponse(client['apikeys#mode=import&format'].$post(args, options))
    },
  })
}

export function usePostApikeysModeImportFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['apikeys#mode=import&format']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['apikeys#mode=import&format']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApikeysModeImportFormatMutationOptions<TError, TOnMutateResult>(
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

export function getPostRestapisModeImportMutationKey() {
  return ['restapis#mode=import', '/restapis#mode=import', 'POST'] as const
}

export function getPostRestapisModeImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['restapis#mode=import']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['restapis#mode=import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestapisModeImportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['restapis#mode=import']['$post']>) {
      return parseResponse(client['restapis#mode=import'].$post(args, options))
    },
  })
}

export function usePostRestapisModeImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restapis#mode=import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['restapis#mode=import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestapisModeImportMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resource_arn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resource_arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsageplansUsageplanIdKeysKeyIdUsageMutationKey() {
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId/usage', 'PATCH'] as const
}

export function getPatchUsageplansUsageplanIdKeysKeyIdUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUsageplansUsageplanIdKeysKeyIdUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
      >,
    ) {
      return parseResponse(
        client.usageplans[':usageplanId'].keys[':keyId'].usage.$patch(args, options),
      )
    },
  })
}

export function usePatchUsageplansUsageplanIdKeysKeyIdUsage<
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
                  (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
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
  const mutationDefaults = getPatchUsageplansUsageplanIdKeysKeyIdUsageMutationOptions<
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
