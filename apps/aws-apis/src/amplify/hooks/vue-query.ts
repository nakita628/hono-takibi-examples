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

export function getAppsKey() {
  return ['apps'] as const
}

export function getArtifactsKey() {
  return ['artifacts'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAppsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps', keyArgs] as const
}

export function getAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          ReturnType<typeof getAppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsMutationKey() {
  return ['apps', '/apps', 'POST'] as const
}

export function getPostAppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apps.$post>) {
      return parseResponse(client.apps.$post(args, options))
    },
  })
}

export function usePostApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
          TError,
          InferRequestType<typeof client.apps.$post>,
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
  const mutationDefaults = getPostAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppIdBackendenvironmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/backendenvironments', keyArgs] as const
}

export function getAppsAppIdBackendenvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBackendenvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].backendenvironments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBackendenvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['backendenvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['backendenvironments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['backendenvironments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBackendenvironmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['backendenvironments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBackendenvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBackendenvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].backendenvironments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdBackendenvironmentsMutationKey() {
  return ['apps', '/apps/:appId/backendenvironments', 'POST'] as const
}

export function getPostAppsAppIdBackendenvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['backendenvironments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBackendenvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].backendenvironments.$post(args, options))
    },
  })
}

export function usePostAppsAppIdBackendenvironments<
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
                Awaited<ReturnType<(typeof client.apps)[':appId']['backendenvironments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdBackendenvironmentsMutationOptions<
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

export function getAppsAppIdBranchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['branches']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/branches', keyArgs] as const
}

export function getAppsAppIdBranchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['branches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['branches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['branches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['branches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['branches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdBranchesMutationKey() {
  return ['apps', '/apps/:appId/branches', 'POST'] as const
}

export function getPostAppsAppIdBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['branches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['branches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBranchesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['branches']['$post']>) {
      return parseResponse(client.apps[':appId'].branches.$post(args, options))
    },
  })
}

export function usePostAppsAppIdBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['branches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['branches']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdBranchesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdBranchesBranchNameDeploymentsMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName/deployments', 'POST'] as const
}

export function getPostAppsAppIdBranchesBranchNameDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBranchesBranchNameDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].deployments.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdBranchesBranchNameDeployments<
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['$post']
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
  const mutationDefaults = getPostAppsAppIdBranchesBranchNameDeploymentsMutationOptions<
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

export function getAppsAppIdDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['domains']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/domains', keyArgs] as const
}

export function getAppsAppIdDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['domains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['domains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['domains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['domains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['domains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdDomainsMutationKey() {
  return ['apps', '/apps/:appId/domains', 'POST'] as const
}

export function getPostAppsAppIdDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdDomainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['domains']['$post']>) {
      return parseResponse(client.apps[':appId'].domains.$post(args, options))
    },
  })
}

export function usePostAppsAppIdDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['domains']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['domains']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['webhooks']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/webhooks', keyArgs] as const
}

export function getAppsAppIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdWebhooksMutationKey() {
  return ['apps', '/apps/:appId/webhooks', 'POST'] as const
}

export function getPostAppsAppIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['webhooks']['$post']>) {
      return parseResponse(client.apps[':appId'].webhooks.$post(args, options))
    },
  })
}

export function usePostAppsAppIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['webhooks']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId', keyArgs] as const
}

export function getAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
            >
          >,
          ReturnType<typeof getAppsAppIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdMutationKey() {
  return ['apps', '/apps/:appId', 'POST'] as const
}

export function getPostAppsAppIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['$post']>) {
      return parseResponse(client.apps[':appId'].$post(args, options))
    },
  })
}

export function usePostAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdMutationKey() {
  return ['apps', '/apps/:appId', 'DELETE'] as const
}

export function getDeleteAppsAppIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['$delete']>) {
      return parseResponse(client.apps[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['$delete']>,
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
  const mutationDefaults = getDeleteAppsAppIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppIdBackendenvironmentsEnvironmentNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/backendenvironments/:environmentName', keyArgs] as const
}

export function getAppsAppIdBackendenvironmentsEnvironmentNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBackendenvironmentsEnvironmentNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].backendenvironments[':environmentName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBackendenvironmentsEnvironmentName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
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
                    (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
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
                    (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBackendenvironmentsEnvironmentNameQueryKey>
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
              (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBackendenvironmentsEnvironmentNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBackendenvironmentsEnvironmentNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].backendenvironments[':environmentName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdBackendenvironmentsEnvironmentNameMutationKey() {
  return ['apps', '/apps/:appId/backendenvironments/:environmentName', 'DELETE'] as const
}

export function getDeleteAppsAppIdBackendenvironmentsEnvironmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdBackendenvironmentsEnvironmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].backendenvironments[':environmentName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAppsAppIdBackendenvironmentsEnvironmentName<
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
                    (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$delete']
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
  const mutationDefaults = getDeleteAppsAppIdBackendenvironmentsEnvironmentNameMutationOptions<
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

export function getAppsAppIdBranchesBranchNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/branches/:branchName', keyArgs] as const
}

export function getAppsAppIdBranchesBranchNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBranchesBranchNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBranchesBranchName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBranchesBranchNameQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBranchesBranchNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBranchesBranchNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].branches[':branchName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdBranchesBranchNameMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName', 'POST'] as const
}

export function getPostAppsAppIdBranchesBranchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBranchesBranchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].branches[':branchName'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdBranchesBranchName<
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
                  ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdBranchesBranchNameMutationOptions<
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

export function getDeleteAppsAppIdBranchesBranchNameMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName', 'DELETE'] as const
}

export function getDeleteAppsAppIdBranchesBranchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdBranchesBranchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].branches[':branchName'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdBranchesBranchName<
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
                  ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$delete']>,
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
  const mutationDefaults = getDeleteAppsAppIdBranchesBranchNameMutationOptions<
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

export function getAppsAppIdDomainsDomainNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/domains/:domainName', keyArgs] as const
}

export function getAppsAppIdDomainsDomainNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdDomainsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].domains[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdDomainsDomainNameQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdDomainsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdDomainsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].domains[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdDomainsDomainNameMutationKey() {
  return ['apps', '/apps/:appId/domains/:domainName', 'POST'] as const
}

export function getPostAppsAppIdDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdDomainsDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].domains[':domainName'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdDomainsDomainNameMutationOptions<
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

export function getDeleteAppsAppIdDomainsDomainNameMutationKey() {
  return ['apps', '/apps/:appId/domains/:domainName', 'DELETE'] as const
}

export function getDeleteAppsAppIdDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdDomainsDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].domains[':domainName'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdDomainsDomainName<
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
                  ReturnType<(typeof client.apps)[':appId']['domains'][':domainName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$delete']>,
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
  const mutationDefaults = getDeleteAppsAppIdDomainsDomainNameMutationOptions<
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

export function getAppsAppIdBranchesBranchNameJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/branches/:branchName/jobs/:jobId', keyArgs] as const
}

export function getAppsAppIdBranchesBranchNameJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBranchesBranchNameJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBranchesBranchNameJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBranchesBranchNameJobsJobIdQueryKey>
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
              (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBranchesBranchNameJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBranchesBranchNameJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].branches[':branchName'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdBranchesBranchNameJobsJobIdMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName/jobs/:jobId', 'DELETE'] as const
}

export function getDeleteAppsAppIdBranchesBranchNameJobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdBranchesBranchNameJobsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].jobs[':jobId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAppsAppIdBranchesBranchNameJobsJobId<
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$delete']
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
  const mutationDefaults = getDeleteAppsAppIdBranchesBranchNameJobsJobIdMutationOptions<
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

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['webhooks', '/webhooks/:webhookId', keyArgs] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'POST'] as const
}

export function getPostWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$post']>) {
      return parseResponse(client.webhooks[':webhookId'].$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdAccesslogsMutationKey() {
  return ['apps', '/apps/:appId/accesslogs', 'POST'] as const
}

export function getPostAppsAppIdAccesslogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accesslogs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accesslogs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccesslogsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accesslogs']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].accesslogs.$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccesslogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['accesslogs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['accesslogs']['$post']>,
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
  const mutationDefaults = getPostAppsAppIdAccesslogsMutationOptions<TError, TOnMutateResult>(
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

export function getArtifactsArtifactIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artifacts)[':artifactId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['artifacts', '/artifacts/:artifactId', keyArgs] as const
}

export function getArtifactsArtifactIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artifacts)[':artifactId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtifactsArtifactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.artifacts[':artifactId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtifactsArtifactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.artifacts)[':artifactId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.artifacts)[':artifactId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artifacts)[':artifactId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.artifacts)[':artifactId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArtifactsArtifactIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.artifacts)[':artifactId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtifactsArtifactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtifactsArtifactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.artifacts[':artifactId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdBranchesBranchNameJobsJobIdArtifactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/branches/:branchName/jobs/:jobId/artifacts', keyArgs] as const
}

export function getAppsAppIdBranchesBranchNameJobsJobIdArtifactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBranchesBranchNameJobsJobIdArtifactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].jobs[':jobId'].artifacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBranchesBranchNameJobsJobIdArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBranchesBranchNameJobsJobIdArtifactsQueryKey>
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
              (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBranchesBranchNameJobsJobIdArtifactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBranchesBranchNameJobsJobIdArtifactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].branches[':branchName'].jobs[':jobId'].artifacts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdBranchesBranchNameJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps', '/apps/:appId/branches/:branchName/jobs', keyArgs] as const
}

export function getAppsAppIdBranchesBranchNameJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBranchesBranchNameJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdBranchesBranchNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']>
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBranchesBranchNameJobsQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBranchesBranchNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBranchesBranchNameJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].branches[':branchName'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppsAppIdBranchesBranchNameJobsMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName/jobs', 'POST'] as const
}

export function getPostAppsAppIdBranchesBranchNameJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBranchesBranchNameJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].branches[':branchName'].jobs.$post(args, options))
    },
  })
}

export function usePostAppsAppIdBranchesBranchNameJobs<
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$post']
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
  const mutationDefaults = getPostAppsAppIdBranchesBranchNameJobsMutationOptions<
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

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdBranchesBranchNameDeploymentsStartMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName/deployments/start', 'POST'] as const
}

export function getPostAppsAppIdBranchesBranchNameDeploymentsStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBranchesBranchNameDeploymentsStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].deployments.start.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdBranchesBranchNameDeploymentsStart<
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['start']['$post']
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
  const mutationDefaults = getPostAppsAppIdBranchesBranchNameDeploymentsStartMutationOptions<
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

export function getDeleteAppsAppIdBranchesBranchNameJobsJobIdStopMutationKey() {
  return ['apps', '/apps/:appId/branches/:branchName/jobs/:jobId/stop', 'DELETE'] as const
}

export function getDeleteAppsAppIdBranchesBranchNameJobsJobIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['stop']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['stop']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdBranchesBranchNameJobsJobIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['stop']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].branches[':branchName'].jobs[':jobId'].stop.$delete(args, options),
      )
    },
  })
}

export function useDeleteAppsAppIdBranchesBranchNameJobsJobIdStop<
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
                    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['stop']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['stop']['$delete']
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
  const mutationDefaults = getDeleteAppsAppIdBranchesBranchNameJobsJobIdStopMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
