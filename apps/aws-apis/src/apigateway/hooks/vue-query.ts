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

export function getApikeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apikeys.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apikeys', '/apikeys', keyArgs] as const
}

export function getApikeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apikeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApikeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apikeys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApikeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apikeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>
          >,
          ReturnType<typeof getApikeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApikeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apikeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apikeys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.apikeys.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/authorizers', keyArgs] as const
}

export function getRestapisRestapiIdAuthorizersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdAuthorizersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdAuthorizersQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdAuthorizersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdAuthorizersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].authorizers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domainnames', '/domainnames/:domain_name/basepathmappings', keyArgs] as const
}

export function getDomainnamesDomainNameBasepathmappingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainnamesDomainNameBasepathmappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domainnames[':domain_name'].basepathmappings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
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
                    (typeof client.domainnames)[':domain_name']['basepathmappings']['$get']
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
                    (typeof client.domainnames)[':domain_name']['basepathmappings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDomainnamesDomainNameBasepathmappingsQueryKey>
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
            ReturnType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainnamesDomainNameBasepathmappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainnamesDomainNameBasepathmappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domainnames[':domain_name'].basepathmappings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domainnames)[':domain_name']['basepathmappings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.domainnames)[':domain_name']['basepathmappings']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/deployments', keyArgs] as const
}

export function getRestapisRestapiIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/documentation/parts', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdDocumentationPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.parts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
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
                    (typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']
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
                    (typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdDocumentationPartsQueryKey>
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
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdDocumentationPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].documentation.parts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/documentation/versions', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdDocumentationVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
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
                    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
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
                    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdDocumentationVersionsQueryKey>
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
            ReturnType<(typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdDocumentationVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].documentation.versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDomainnamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domainnames.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domainnames', '/domainnames', keyArgs] as const
}

export function getDomainnamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domainnames.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainnamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domainnames.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domainnames.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>
          >,
          ReturnType<typeof getDomainnamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainnamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainnamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domainnames.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainnames.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domainnames.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/models', keyArgs] as const
}

export function getRestapisRestapiIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/requestvalidators', keyArgs] as const
}

export function getRestapisRestapiIdRequestvalidatorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdRequestvalidatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].requestvalidators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdRequestvalidatorsQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdRequestvalidatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdRequestvalidatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].requestvalidators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getRestapisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restapis.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis', keyArgs] as const
}

export function getRestapisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restapis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestapis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restapis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>
          >,
          ReturnType<typeof getRestapisQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRestapisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restapis.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.restapis.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/stages', keyArgs] as const
}

export function getRestapisRestapiIdStagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdStagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].stages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdStagesQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['stages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdStagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].stages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsageplansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.usageplans.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['usageplans', '/usageplans', keyArgs] as const
}

export function getUsageplansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.usageplans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageplansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usageplans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsageplans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.usageplans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>
          >,
          ReturnType<typeof getUsageplansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsageplansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageplansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usageplans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usageplans.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.usageplans.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['usageplans', '/usageplans/:usageplanId/keys', keyArgs] as const
}

export function getUsageplansUsageplanIdKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageplansUsageplanIdKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usageplans[':usageplanId'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsageplansUsageplanIdKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageplansUsageplanIdKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usageplans[':usageplanId'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getVpclinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vpclinks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vpclinks', '/vpclinks', keyArgs] as const
}

export function getVpclinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vpclinks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpclinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpclinks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVpclinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vpclinks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>
          >,
          ReturnType<typeof getVpclinksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVpclinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpclinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpclinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpclinks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vpclinks.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apikeys', '/apikeys/:api_Key', keyArgs] as const
}

export function getApikeysApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApikeysApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apikeys[':api_Key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApikeysApiKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
            >
          >,
          ReturnType<typeof getApikeysApiKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApikeysApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApikeysApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apikeys[':api_Key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apikeys)[':api_Key']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/authorizers/:authorizer_id', keyArgs] as const
}

export function getRestapisRestapiIdAuthorizersAuthorizerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].authorizers[':authorizer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey>
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
              (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdAuthorizersAuthorizerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].authorizers[':authorizer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domainnames', '/domainnames/:domain_name/basepathmappings/:base_path', keyArgs] as const
}

export function getDomainnamesDomainNameBasepathmappingsBasePathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainnamesDomainNameBasepathmappingsBasePathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domainnames[':domain_name'].basepathmappings[':base_path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
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
                    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
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
                    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDomainnamesDomainNameBasepathmappingsBasePathQueryKey>
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
              (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainnamesDomainNameBasepathmappingsBasePathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainnamesDomainNameBasepathmappingsBasePathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domainnames[':domain_name'].basepathmappings[':base_path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clientcertificates', '/clientcertificates/:clientcertificate_id', keyArgs] as const
}

export function getClientcertificatesClientcertificateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientcertificatesClientcertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clientcertificates[':clientcertificate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClientcertificatesClientcertificateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientcertificatesClientcertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientcertificatesClientcertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clientcertificates[':clientcertificate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/deployments/:deployment_id', keyArgs] as const
}

export function getRestapisRestapiIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdDeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].deployments[':deployment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdDeploymentsDeploymentIdQueryKey>
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
              (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdDeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].deployments[':deployment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/documentation/parts/:part_id', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationPartsPartIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdDocumentationPartsPartIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.parts[':part_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdDocumentationPartsPartIdQueryKey>
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
              (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationPartsPartIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdDocumentationPartsPartIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].documentation.parts[':part_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/documentation/versions/:doc_version', keyArgs] as const
}

export function getRestapisRestapiIdDocumentationVersionsDocVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].documentation.versions[':doc_version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
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
                    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
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
                    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey>
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
              (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdDocumentationVersionsDocVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].documentation.versions[':doc_version'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domainnames', '/domainnames/:domain_name', keyArgs] as const
}

export function getDomainnamesDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainnamesDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domainnames[':domain_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainnamesDomainNameQueryKey>
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
          Awaited<ReturnType<(typeof client.domainnames)[':domain_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainnamesDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainnamesDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domainnames[':domain_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/gatewayresponses/:response_type', keyArgs] as const
}

export function getRestapisRestapiIdGatewayresponsesResponseTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses[':response_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
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
                    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
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
                    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey>
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
              (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdGatewayresponsesResponseTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].gatewayresponses[':response_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey
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
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[
          ':http_method'
        ].integration.responses[':status_code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].integration.responses[':status_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey>
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
              (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'restapis',
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
          ':status_code'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].methods[
            ':http_method'
          ].responses[':status_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/models/:model_name', keyArgs] as const
}

export function getRestapisRestapiIdModelsModelNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdModelsModelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].models[':model_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
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
                    (typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']
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
                    (typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdModelsModelNameQueryKey>
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
            ReturnType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdModelsModelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdModelsModelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].models[':model_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'restapis',
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey>
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
              (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/resources/:resource_id', keyArgs] as const
}

export function getRestapisRestapiIdResourcesResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdResourcesResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].resources[':resource_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
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
                    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdResourcesResourceIdQueryKey>
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
            ReturnType<(typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdResourcesResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].resources[':resource_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id', keyArgs] as const
}

export function getRestapisRestapiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestapisRestapiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name', keyArgs] as const
}

export function getRestapisRestapiIdStagesStageNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdStagesStageNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
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
                    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']
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
                    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdStagesStageNameQueryKey>
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
            ReturnType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesStageNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdStagesStageNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['usageplans', '/usageplans/:usageplanId', keyArgs] as const
}

export function getUsageplansUsageplanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageplansUsageplanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usageplans[':usageplanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsageplansUsageplanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsageplansUsageplanIdQueryKey>
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
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageplansUsageplanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usageplans[':usageplanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['usageplans', '/usageplans/:usageplanId/keys/:keyId', keyArgs] as const
}

export function getUsageplansUsageplanIdKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageplansUsageplanIdKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usageplans[':usageplanId'].keys[':keyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsageplansUsageplanIdKeysKeyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageplansUsageplanIdKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usageplans[':usageplanId'].keys[':keyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vpclinks', '/vpclinks/:vpclink_id', keyArgs] as const
}

export function getVpclinksVpclinkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpclinksVpclinkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpclinks[':vpclink_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVpclinksVpclinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVpclinksVpclinkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpclinks)[':vpclink_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpclinksVpclinkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpclinksVpclinkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpclinks[':vpclink_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.clientcertificates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clientcertificates', '/clientcertificates', keyArgs] as const
}

export function getClientcertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clientcertificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientcertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clientcertificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientcertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clientcertificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>
            >
          >,
          ReturnType<typeof getClientcertificatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clientcertificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientcertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientcertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clientcertificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account', '/account', keyArgs] as const
}

export function getAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$patch>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'restapis',
    '/restapis/:restapi_id/stages/:stage_name/exports/:export_type',
    keyArgs,
  ] as const
}

export function getRestapisRestapiIdStagesStageNameExportsExportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].exports[':export_type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
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
                    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
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
                    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey>
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
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdStagesStageNameExportsExportTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].exports[':export_type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestapisRestapiIdGatewayresponsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/gatewayresponses', keyArgs] as const
}

export function getRestapisRestapiIdGatewayresponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdGatewayresponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].gatewayresponses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdGatewayresponsesQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdGatewayresponsesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdGatewayresponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].gatewayresponses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/models/:model_name/default_template', keyArgs] as const
}

export function getRestapisRestapiIdModelsModelNameDefaultTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].models[':model_name'].default_template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
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
                    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
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
                    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey>
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
              (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdModelsModelNameDefaultTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].models[':model_name'].default_template.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRestapisRestapiIdResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/resources', keyArgs] as const
}

export function getRestapisRestapiIdResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.restapis)[':restapi_id']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['restapis', '/restapis/:restapi_id/stages/:stage_name/sdks/:sdk_type', keyArgs] as const
}

export function getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restapis[':restapi_id'].stages[':stage_name'].sdks[':sdk_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
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
                    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
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
                    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey>
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
              (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestapisRestapiIdStagesStageNameSdksSdkTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restapis[':restapi_id'].stages[':stage_name'].sdks[':sdk_type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSdktypesSdktypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sdktypes', '/sdktypes/:sdktype_id', keyArgs] as const
}

export function getSdktypesSdktypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSdktypesSdktypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sdktypes[':sdktype_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSdktypesSdktypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSdktypesSdktypeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sdktypes)[':sdktype_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSdktypesSdktypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSdktypesSdktypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sdktypes[':sdktype_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSdktypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sdktypes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sdktypes', '/sdktypes', keyArgs] as const
}

export function getSdktypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sdktypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSdktypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sdktypes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSdktypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sdktypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>
          >,
          ReturnType<typeof getSdktypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sdktypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSdktypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSdktypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sdktypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resource_arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resource_arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resource_arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resource_arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resource_arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource_arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resource_arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['usageplans', '/usageplans/:usageplanId/usage#startDate&endDate', keyArgs] as const
}

export function getUsageplansUsageplanIdUsageStartDateEndDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageplansUsageplanIdUsageStartDateEndDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usageplans[':usageplanId']['usage#startDate&endDate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']>
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
                    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
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
                    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsageplansUsageplanIdUsageStartDateEndDateQueryKey>
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
              (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageplansUsageplanIdUsageStartDateEndDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageplansUsageplanIdUsageStartDateEndDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usageplans[':usageplanId']['usage#startDate&endDate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
