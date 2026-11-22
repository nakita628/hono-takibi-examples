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

export function getApplicationKey() {
  return ['application'] as const
}

export function getAuthorizeKey() {
  return ['authorize'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getGithubKey() {
  return ['github'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getLogsSocketKey() {
  return ['logs-socket'] as const
}

export function getNewsfeedsKey() {
  return ['newsfeeds'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOpenapiTypeKey() {
  return ['openapi.{type}'] as const
}

export function getOrganisationsKey() {
  return ['organisations'] as const
}

export function getPasswordForgottenKey() {
  return ['password_forgotten'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSelfKey() {
  return ['self'] as const
}

export function getSummaryKey() {
  return ['summary'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getVendorKey() {
  return ['vendor'] as const
}

export function getOpenapiQueryKey() {
  return ['', '//openapi'] as const
}

export function getOpenapiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
          >,
          ReturnType<typeof getOpenapiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.openapi.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApplicationAppIdEnvironmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.application)[':appId']['environment']['$get']>
  >,
) {
  return ['application', '/application/:appId/environment', toValue(args)] as const
}

export function getApplicationAppIdEnvironmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.application)[':appId']['environment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationAppIdEnvironmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.application[':appId'].environment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationAppIdEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.application)[':appId']['environment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
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
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationAppIdEnvironmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.application[':appId'].environment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApplicationAppIdEnvironmentMutationKey() {
  return ['application', '/application/:appId/environment', 'PUT'] as const
}

export function getPutApplicationAppIdEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationAppIdEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
    ) {
      return parseResponse(client.application[':appId'].environment.$put(args, options))
    },
  })
}

export function usePutApplicationAppIdEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
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
  const mutationDefaults = getPutApplicationAppIdEnvironmentMutationOptions<
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

export function getPostAuthorizeMutationKey() {
  return ['authorize', '/authorize', 'POST'] as const
}

export function getPostAuthorizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizeMutationKey(),
    async mutationFn() {
      return parseResponse(client.authorize.$post(undefined, options))
    },
  })
}

export function usePostAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthorizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsEventSocketQueryKey() {
  return ['events', '/events/event-socket'] as const
}

export function getEventsEventSocketQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventsEventSocketQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['event-socket'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventSocketQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventSocketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventsEventSocketQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.events['event-socket'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubQueryKey() {
  return ['github', '/github'] as const
}

export function getGithubQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGithubQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGithub<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
          ReturnType<typeof getGithubQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGithubQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.github.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubApplicationsQueryKey() {
  return ['github', '/github/applications'] as const
}

export function getGithubApplicationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGithubApplicationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGithubApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
            >
          >,
          ReturnType<typeof getGithubApplicationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGithubApplicationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.github.applications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubCallbackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.callback.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['github', '/github/callback', keyArgs] as const
}

export function getGithubCallbackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.callback.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGithubCallbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.callback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGithubCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.callback.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>
            >
          >,
          ReturnType<typeof getGithubCallbackQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubCallbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGithubCallbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.github.callback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubEmailsQueryKey() {
  return ['github', '/github/emails'] as const
}

export function getGithubEmailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGithubEmailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGithubEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
          >,
          ReturnType<typeof getGithubEmailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGithubEmailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.github.emails.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubKeysQueryKey() {
  return ['github', '/github/keys'] as const
}

export function getGithubKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGithubKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGithubKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
          >,
          ReturnType<typeof getGithubKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGithubKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.github.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubLinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.link.$get>>,
) {
  return ['github', '/github/link', toValue(args)] as const
}

export function getGithubLinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.link.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGithubLinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.link.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGithubLink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.link.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
          >,
          ReturnType<typeof getGithubLinkQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubLinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGithubLinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.github.link.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGithubLinkMutationKey() {
  return ['github', '/github/link', 'DELETE'] as const
}

export function getDeleteGithubLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteGithubLinkMutationKey(),
    async mutationFn() {
      return parseResponse(client.github.link.$delete(undefined, options))
    },
  })
}

export function useDeleteGithubLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteGithubLinkMutationOptions<TError, TOnMutateResult>(
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

export function getGithubLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.login.$get>>,
) {
  return ['github', '/github/login', toValue(args)] as const
}

export function getGithubLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.login.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGithubLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.login.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGithubLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.login.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
          >,
          ReturnType<typeof getGithubLoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGithubLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.github.login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGithubRedeployMutationKey() {
  return ['github', '/github/redeploy', 'POST'] as const
}

export function getPostGithubRedeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.github.redeploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGithubRedeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.github.redeploy.$post>) {
      return parseResponse(client.github.redeploy.$post(args, options))
    },
  })
}

export function usePostGithubRedeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.github.redeploy.$post>,
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
  const mutationDefaults = getPostGithubRedeployMutationOptions<TError, TOnMutateResult>(
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

export function getGithubSignupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.signup.$get>>,
) {
  return ['github', '/github/signup', toValue(args)] as const
}

export function getGithubSignupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.signup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGithubSignupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.signup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGithubSignup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github.signup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
          >,
          ReturnType<typeof getGithubSignupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubSignupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGithubSignupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.github.signup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGithubSignupMutationKey() {
  return ['github', '/github/signup', 'POST'] as const
}

export function getPostGithubSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.github.signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGithubSignupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.github.signup.$post>) {
      return parseResponse(client.github.signup.$post(args, options))
    },
  })
}

export function usePostGithubSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.github.signup.$post>,
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
  const mutationDefaults = getPostGithubSignupMutationOptions<TError, TOnMutateResult>(
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

export function getGithubUsernameQueryKey() {
  return ['github', '/github/username'] as const
}

export function getGithubUsernameQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGithubUsernameQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github.username.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGithubUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>
            >
          >,
          ReturnType<typeof getGithubUsernameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGithubUsernameQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.github.username.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsSocketAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>>,
) {
  return ['logs-socket', '/logs-socket/:appId', toValue(args)] as const
}

export function getLogsSocketAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsSocketAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['logs-socket'][':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsSocketAppIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsSocketAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsSocketAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['logs-socket'][':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsDrainsQueryKey() {
  return ['logs', '/logs/drains'] as const
}

export function getLogsDrainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLogsDrainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.drains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogsDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
          >,
          ReturnType<typeof getLogsDrainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsDrainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLogsDrainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.drains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLogsDrainsDrainIdMutationKey() {
  return ['logs', '/logs/drains/:drainId', 'PUT'] as const
}

export function getPutLogsDrainsDrainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLogsDrainsDrainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>) {
      return parseResponse(client.logs.drains[':drainId'].$put(args, options))
    },
  })
}

export function usePutLogsDrainsDrainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
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
  const mutationDefaults = getPutLogsDrainsDrainIdMutationOptions<TError, TOnMutateResult>(
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

export function getLogsLogsChunkedAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>,
) {
  return ['logs', '/logs/logs-chunked/:appId', toValue(args)] as const
}

export function getLogsLogsChunkedAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLogsChunkedAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs['logs-chunked'][':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLogsChunkedAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
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
          Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLogsChunkedAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs['logs-chunked'][':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsLogsSocketAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>>,
) {
  return ['logs', '/logs/logs-socket/:appId', toValue(args)] as const
}

export function getLogsLogsSocketAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLogsSocketAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs['logs-socket'][':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
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
          Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLogsSocketAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs['logs-socket'][':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['$get']>>,
) {
  return ['logs', '/logs/:appId', toValue(args)] as const
}

export function getLogsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
            >
          >,
          ReturnType<typeof getLogsAppIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsAppIdDrainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>>,
) {
  return ['logs', '/logs/:appId/drains', toValue(args)] as const
}

export function getLogsAppIdDrainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsAppIdDrainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':appId'].drains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsAppIdDrainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdDrainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsAppIdDrainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':appId'].drains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLogsAppIdDrainsMutationKey() {
  return ['logs', '/logs/:appId/drains', 'POST'] as const
}

export function getPostLogsAppIdDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLogsAppIdDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>) {
      return parseResponse(client.logs[':appId'].drains.$post(args, options))
    },
  })
}

export function usePostLogsAppIdDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
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
  const mutationDefaults = getPostLogsAppIdDrainsMutationOptions<TError, TOnMutateResult>(
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

export function getLogsAppIdDrainsIdOrUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>
  >,
) {
  return ['logs', '/logs/:appId/drains/:idOrUrl', toValue(args)] as const
}

export function getLogsAppIdDrainsIdOrUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsAppIdDrainsIdOrUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':appId'].drains[':idOrUrl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsAppIdDrainsIdOrUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':appId'].drains[':idOrUrl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLogsAppIdDrainsIdOrUrlMutationKey() {
  return ['logs', '/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function getDeleteLogsAppIdDrainsIdOrUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogsAppIdDrainsIdOrUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    ) {
      return parseResponse(client.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
    },
  })
}

export function useDeleteLogsAppIdDrainsIdOrUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
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
  const mutationDefaults = getDeleteLogsAppIdDrainsIdOrUrlMutationOptions<TError, TOnMutateResult>(
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

export function getLogsAppIdSseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>>,
) {
  return ['logs', '/logs/:appId/sse', toValue(args)] as const
}

export function getLogsAppIdSseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsAppIdSseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':appId'].sse.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsAppIdSse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsAppIdSseQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdSseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsAppIdSseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':appId'].sse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewsfeedsBlogQueryKey() {
  return ['newsfeeds', '/newsfeeds/blog'] as const
}

export function getNewsfeedsBlogQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNewsfeedsBlogQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.newsfeeds.blog.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNewsfeedsBlog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
          >,
          ReturnType<typeof getNewsfeedsBlogQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsfeedsBlogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNewsfeedsBlogQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.newsfeeds.blog.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewsfeedsEngineeringQueryKey() {
  return ['newsfeeds', '/newsfeeds/engineering'] as const
}

export function getNewsfeedsEngineeringQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNewsfeedsEngineeringQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.newsfeeds.engineering.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNewsfeedsEngineering<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
            >
          >,
          ReturnType<typeof getNewsfeedsEngineeringQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsfeedsEngineeringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNewsfeedsEngineeringQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.newsfeeds.engineering.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsEmailhooksOwnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>
  >,
) {
  return ['notifications', '/notifications/emailhooks/:ownerId', toValue(args)] as const
}

export function getNotificationsEmailhooksOwnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsEmailhooksOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.emailhooks[':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsEmailhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsEmailhooksOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.emailhooks[':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNotificationsEmailhooksOwnerIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId', 'POST'] as const
}

export function getPostNotificationsEmailhooksOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsEmailhooksOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
    ) {
      return parseResponse(client.notifications.emailhooks[':ownerId'].$post(args, options))
    },
  })
}

export function usePostNotificationsEmailhooksOwnerId<
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
                Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
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
  const mutationDefaults = getPostNotificationsEmailhooksOwnerIdMutationOptions<
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

export function getPutNotificationsEmailhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'PUT'] as const
}

export function getPutNotificationsEmailhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsEmailhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications.emailhooks[':ownerId'][':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsEmailhooksOwnerIdId<
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
                  ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
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
  const mutationDefaults = getPutNotificationsEmailhooksOwnerIdIdMutationOptions<
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

export function getDeleteNotificationsEmailhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'DELETE'] as const
}

export function getDeleteNotificationsEmailhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsEmailhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.notifications.emailhooks[':ownerId'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNotificationsEmailhooksOwnerIdId<
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
                  ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteNotificationsEmailhooksOwnerIdIdMutationOptions<
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

export function getNotificationsInfoEventsQueryKey() {
  return ['notifications', '/notifications/info/events'] as const
}

export function getNotificationsInfoEventsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsInfoEventsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.info.events.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsInfoEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.info.events.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.info.events.$get>>
              >
            >
          >,
          ReturnType<typeof getNotificationsInfoEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsInfoEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsInfoEventsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.info.events.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsInfoWebhookformatsQueryKey() {
  return ['notifications', '/notifications/info/webhookformats'] as const
}

export function getNotificationsInfoWebhookformatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsInfoWebhookformatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.info.webhookformats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsInfoWebhookformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
              >
            >
          >,
          ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
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
          Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsInfoWebhookformatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.info.webhookformats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsWebhooksOwnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>
  >,
) {
  return ['notifications', '/notifications/webhooks/:ownerId', toValue(args)] as const
}

export function getNotificationsWebhooksOwnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsWebhooksOwnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.webhooks[':ownerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsWebhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsWebhooksOwnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.webhooks[':ownerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNotificationsWebhooksOwnerIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId', 'POST'] as const
}

export function getPostNotificationsWebhooksOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsWebhooksOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'].$post(args, options))
    },
  })
}

export function usePostNotificationsWebhooksOwnerId<
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
                Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
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
  const mutationDefaults = getPostNotificationsWebhooksOwnerIdMutationOptions<
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

export function getPutNotificationsWebhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'PUT'] as const
}

export function getPutNotificationsWebhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsWebhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'][':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsWebhooksOwnerIdId<
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
                  ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
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
  const mutationDefaults = getPutNotificationsWebhooksOwnerIdIdMutationOptions<
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

export function getDeleteNotificationsWebhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'DELETE'] as const
}

export function getDeleteNotificationsWebhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsWebhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationsWebhooksOwnerIdId<
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
                  ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteNotificationsWebhooksOwnerIdIdMutationOptions<
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

export function getPostOauthAccessTokenMutationKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function getPostOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token.$post>) {
      return parseResponse(client.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.access_token.$post>,
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
  const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthAccessTokenQueryMutationKey() {
  return ['oauth', '/oauth/access_token_query', 'POST'] as const
}

export function getPostOauthAccessTokenQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token_query.$post>) {
      return parseResponse(client.oauth.access_token_query.$post(args, options))
    },
  })
}

export function usePostOauthAccessTokenQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.access_token_query.$post>,
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
  const mutationDefaults = getPostOauthAccessTokenQueryMutationOptions<TError, TOnMutateResult>(
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

export function getOauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['oauth', '/oauth/authorize', keyArgs] as const
}

export function getOauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getOauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthAuthorizeMutationKey() {
  return ['oauth', '/oauth/authorize', 'POST'] as const
}

export function getPostOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.authorize.$post>) {
      return parseResponse(client.oauth.authorize.$post(args, options))
    },
  })
}

export function usePostOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.authorize.$post>,
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
  const mutationDefaults = getPostOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRequestTokenMutationKey() {
  return ['oauth', '/oauth/request_token', 'POST'] as const
}

export function getPostOauthRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token.$post>) {
      return parseResponse(client.oauth.request_token.$post(args, options))
    },
  })
}

export function usePostOauthRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.request_token.$post>,
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
  const mutationDefaults = getPostOauthRequestTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRequestTokenQueryMutationKey() {
  return ['oauth', '/oauth/request_token_query', 'POST'] as const
}

export function getPostOauthRequestTokenQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token_query.$post>) {
      return parseResponse(client.oauth.request_token_query.$post(args, options))
    },
  })
}

export function usePostOauthRequestTokenQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.request_token_query.$post>,
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
  const mutationDefaults = getPostOauthRequestTokenQueryMutationOptions<TError, TOnMutateResult>(
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

export function getOauthRightsQueryKey() {
  return ['oauth', '/oauth/rights'] as const
}

export function getOauthRightsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauthRightsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.rights.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauthRights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
          >,
          ReturnType<typeof getOauthRightsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthRightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauthRightsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.rights.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiType2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['openapi.:type']['$get']>>,
) {
  return ['openapi.:type', '/openapi.:type', toValue(args)] as const
}

export function getOpenapiType2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['openapi.:type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOpenapiType2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.:type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOpenapiType2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['openapi.:type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiType2QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiType2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOpenapiType2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.:type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organisations.$get>>,
) {
  return ['organisations', '/organisations', toValue(args)] as const
}

export function getOrganisationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organisations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organisations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
          >,
          ReturnType<typeof getOrganisationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsMutationKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function getPostOrganisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organisations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organisations.$post>) {
      return parseResponse(client.organisations.$post(args, options))
    },
  })
}

export function usePostOrganisations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organisations.$post>,
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
  const mutationDefaults = getPostOrganisationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['$get']>>,
) {
  return ['organisations', '/organisations/:id', toValue(args)] as const
}

export function getOrganisationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdMutationKey() {
  return ['organisations', '/organisations/:id', 'PUT'] as const
}

export function getPutOrganisationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':id']['$put']>) {
      return parseResponse(client.organisations[':id'].$put(args, options))
    },
  })
}

export function usePutOrganisationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['$put']>,
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
  const mutationDefaults = getPutOrganisationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganisationsIdMutationKey() {
  return ['organisations', '/organisations/:id', 'DELETE'] as const
}

export function getDeleteOrganisationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':id']['$delete']>) {
      return parseResponse(client.organisations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteOrganisationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdAddonprovidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders', toValue(args)] as const
}

export function getOrganisationsIdAddonprovidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addonproviders.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdAddonproviders<
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
                Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', toValue(args)] as const
}

export function getOrganisationsIdAddonprovidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
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
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonprovidersProviderIdMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'PUT'] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonprovidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdAddonprovidersProviderId<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
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
  const mutationDefaults = getPutOrganisationsIdAddonprovidersProviderIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderId<
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
                      (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdAddonprovidersProviderIdMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonprovidersProviderIdFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonprovidersProviderIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
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
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features',
    'POST',
  ] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonprovidersProviderIdFeatures<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features/:featureId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features[':featureId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
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
    getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonprovidersProviderIdPlansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonprovidersProviderIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
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
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonprovidersProviderIdPlans<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdPlansMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
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
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutOrganisationsIdAddonprovidersProviderIdPlansPlanId<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
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
  const mutationDefaults = getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanId<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
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
    getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
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

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
          ':featureName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
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
    getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
          ':featureName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
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
    getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/sso',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonprovidersProviderIdSsoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].sso.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonprovidersProviderIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
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
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].sso.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/tags',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonprovidersProviderIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonprovidersProviderIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
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
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/testers', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].testers.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonprovidersProviderIdTesters<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdTestersMutationOptions<
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

export function getOrganisationsIdAddonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>>,
) {
  return ['organisations', '/organisations/:id/addons', toValue(args)] as const
}

export function getOrganisationsIdAddonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonsMutationKey() {
  return ['organisations', '/organisations/:id/addons', 'POST'] as const
}

export function getPostOrganisationsIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addons.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganisationsIdAddonsPreordersMutationKey() {
  return ['organisations', '/organisations/:id/addons/preorders', 'POST'] as const
}

export function getPostOrganisationsIdAddonsPreordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsPreordersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addons.preorders.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdAddonsPreorders<
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
                  ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdAddonsPreordersMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId', toValue(args)] as const
}

export function getOrganisationsIdAddonsAddonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
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
                  ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonsAddonIdMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'PUT'] as const
}

export function getPutOrganisationsIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].addons[':addonId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdAddonsAddonId<
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
                  ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
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
  const mutationDefaults = getPutOrganisationsIdAddonsAddonIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonsAddonIdMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].addons[':addonId'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdAddonsAddonId<
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
                  ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
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
  const mutationDefaults = getDeleteOrganisationsIdAddonsAddonIdMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdApplicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/applications',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonsAddonIdApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
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
              (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/env', toValue(args)] as const
}

export function getOrganisationsIdAddonsAddonIdEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
    >
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/instances', toValue(args)] as const
}

export function getOrganisationsIdAddonsAddonIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
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
              (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/instances/:instanceId',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
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
              (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdMigrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
    >
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', toValue(args)] as const
}

export function getOrganisationsIdAddonsAddonIdMigrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdMigrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
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
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdMigrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', 'POST'] as const
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsAddonIdMigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonsAddonIdMigrations<
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonsAddonIdMigrationsMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/migrations/:migrationId',
    toValue(args),
  ] as const
}

export function getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdMigrationsMigrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
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
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdSsoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/sso', toValue(args)] as const
}

export function getOrganisationsIdAddonsAddonIdSsoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdSsoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].sso.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdSsoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].sso.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/tags', toValue(args)] as const
}

export function getOrganisationsIdAddonsAddonIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdAddonsAddonIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdAddonsAddonIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].addons[':addonId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags[':tag'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdAddonsAddonIdTagsTag<
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
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
  const mutationDefaults = getPutOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
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

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags[':tag'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonsAddonIdTagsTag<
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
                    (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
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

export function getOrganisationsIdApplicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/applications', toValue(args)] as const
}

export function getOrganisationsIdApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdApplicationsMutationKey() {
  return ['organisations', '/organisations/:id/applications', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].applications.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdApplications<
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
                Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdApplicationsMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId', toValue(args)] as const
}

export function getOrganisationsIdApplicationsAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
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
                  ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['$put']
      >,
    ) {
      return parseResponse(client.organisations[':id'].applications[':appId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdApplicationsAppId<
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
                  ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppId<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdAddonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
    >
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons', toValue(args)] as const
}

export function getOrganisationsIdApplicationsAppIdAddonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdApplicationsAppIdAddonsMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/addons', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsAppIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsAppIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdApplicationsAppIdAddons<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
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
  const mutationDefaults = getPostOrganisationsIdApplicationsAppIdAddonsMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/addons/env',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdAddonsEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].addons.env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/addons/:addonId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons[':addonId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdAddonsAddonId<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdBranchMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/branch', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].branch.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdBranch<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdBranchMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/branches',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/buildflavor', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdBuildflavorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].buildflavor.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdBuildflavor<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdBuildflavorMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdDependenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdDependenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdDependenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdDependenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/env',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdDependenciesEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies.env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies.env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdDependenciesDependencyId<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
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
    getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyId<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
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
    getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdDependentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependents',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdDependentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdDependentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdDependentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].dependents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments[
          ':deploymentId'
        ].instances.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
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
    getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/env', toValue(args)] as const
}

export function getOrganisationsIdApplicationsAppIdEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
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
                    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdEnvMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdEnv<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdEnvMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env[':envName'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdEnvEnvName<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env[':envName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdEnvEnvName<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/exposed_env',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdExposedEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].exposed_env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].exposed_env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdExposedEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].exposed_env.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdExposedEnv<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdExposedEnvMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/instances',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdApplicationsAppIdInstancesMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdApplicationsAppIdInstances<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
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
  const mutationDefaults = getPostOrganisationsIdApplicationsAppIdInstancesMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdInstancesMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdInstances<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdInstancesMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/instances/:instanceId',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/tags', toValue(args)] as const
}

export function getOrganisationsIdApplicationsAppIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
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
                    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags[':tag'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdTagsTag<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags[':tag'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdTagsTag<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdVhostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
    >
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts', toValue(args)] as const
}

export function getOrganisationsIdApplicationsAppIdVhostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdVhostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdVhostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
    >
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    toValue(args),
  ] as const
}

export function getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
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
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdVhostsFavourite<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdVhostsFavourite<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts[':domain'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdVhostsDomain<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/:domain',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts[':domain'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdVhostsDomain<
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
                    (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
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

export function getPutOrganisationsIdAvatarMutationKey() {
  return ['organisations', '/organisations/:id/avatar', 'PUT'] as const
}

export function getPutOrganisationsIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].avatar.$put(args, options))
    },
  })
}

export function usePutOrganisationsIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
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
  const mutationDefaults = getPutOrganisationsIdAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdConsumersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/consumers', toValue(args)] as const
}

export function getOrganisationsIdConsumersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdConsumersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].consumers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdConsumers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdConsumersQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdConsumersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].consumers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdConsumersMutationKey() {
  return ['organisations', '/organisations/:id/consumers', 'POST'] as const
}

export function getPostOrganisationsIdConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdConsumersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdConsumersMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdConsumersKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/consumers/:key', toValue(args)] as const
}

export function getOrganisationsIdConsumersKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdConsumersKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].consumers[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>
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
                  ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdConsumersKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].consumers[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdConsumersKeyMutationKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'PUT'] as const
}

export function getPutOrganisationsIdConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdConsumersKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers[':key'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
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
  const mutationDefaults = getPutOrganisationsIdConsumersKeyMutationOptions<
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

export function getDeleteOrganisationsIdConsumersKeyMutationKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'DELETE'] as const
}

export function getDeleteOrganisationsIdConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdConsumersKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers[':key'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdConsumersKey<
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
                  ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
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
  const mutationDefaults = getDeleteOrganisationsIdConsumersKeyMutationOptions<
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

export function getOrganisationsIdConsumersKeySecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/consumers/:key/secret', toValue(args)] as const
}

export function getOrganisationsIdConsumersKeySecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdConsumersKeySecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].consumers[':key'].secret.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
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
                    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
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
                    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdConsumersKeySecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].consumers[':key'].secret.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdConsumptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/consumptions', toValue(args)] as const
}

export function getOrganisationsIdConsumptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdConsumptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].consumptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdConsumptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdConsumptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].consumptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdCreditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>>,
) {
  return ['organisations', '/organisations/:id/credits', toValue(args)] as const
}

export function getOrganisationsIdCreditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/deployments', toValue(args)] as const
}

export function getOrganisationsIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/instances', toValue(args)] as const
}

export function getOrganisationsIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['members']['$get']>>,
) {
  return ['organisations', '/organisations/:id/members', toValue(args)] as const
}

export function getOrganisationsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organisations)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdMembersMutationKey() {
  return ['organisations', '/organisations/:id/members', 'POST'] as const
}

export function getPostOrganisationsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].members.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrganisationsIdMembersUserIdMutationKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'PUT'] as const
}

export function getPutOrganisationsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].members[':userId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdMembersUserId<
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
                  ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
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
  const mutationDefaults = getPutOrganisationsIdMembersUserIdMutationOptions<
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

export function getDeleteOrganisationsIdMembersUserIdMutationKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].members[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdMembersUserId<
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
                  ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
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
  const mutationDefaults = getDeleteOrganisationsIdMembersUserIdMutationOptions<
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

export function getOrganisationsIdPaymentInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payment-info', toValue(args)] as const
}

export function getOrganisationsIdPaymentInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id']['payment-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id']['payment-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsBillingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings', toValue(args)] as const
}

export function getOrganisationsIdPaymentsBillingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsBillingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.billings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsBillings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
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
                  ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsBillingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.billings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdPaymentsBillingsMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings', 'POST'] as const
}

export function getPostOrganisationsIdPaymentsBillingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdPaymentsBillingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].payments.billings.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdPaymentsBillings<
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
                  ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdPaymentsBillingsMutationOptions<
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

export function getOrganisationsIdPaymentsBillingsUnpaidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/unpaid', toValue(args)] as const
}

export function getOrganisationsIdPaymentsBillingsUnpaidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsBillingsUnpaidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.billings.unpaid.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsBillingsUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
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
                    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
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
                    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
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
              (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsBillingsUnpaidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.billings.unpaid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsBillingsBidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid', toValue(args)] as const
}

export function getOrganisationsIdPaymentsBillingsBidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsBillingsBidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
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
                    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
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
                    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsBillingsBidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.billings[':bid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdPaymentsBillingsBidMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdPaymentsBillingsBid<
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
                    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
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
  const mutationDefaults = getPutOrganisationsIdPaymentsBillingsBidMutationOptions<
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

export function getDeleteOrganisationsIdPaymentsBillingsBidMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdPaymentsBillingsBid<
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
                    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdPaymentsBillingsBidMutationOptions<
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

export function getOrganisationsIdPaymentsBillingsBidPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
    >
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid.pdf', toValue(args)] as const
}

export function getOrganisationsIdPaymentsBillingsBidPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsBillingsBidPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid.pdf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
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
                    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
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
                    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
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
              (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsBillingsBidPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.billings[':bid.pdf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsFullpricePriceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
    >
  >,
) {
  return ['organisations', '/organisations/:id/payments/fullprice/:price', toValue(args)] as const
}

export function getOrganisationsIdPaymentsFullpricePriceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsFullpricePriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.fullprice[':price'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
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
                    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
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
                    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
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
              (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsFullpricePriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.fullprice[':price'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/methods', toValue(args)] as const
}

export function getOrganisationsIdPaymentsMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.methods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
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
                  ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.methods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganisationsIdPaymentsMethodsMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods', 'POST'] as const
}

export function getPostOrganisationsIdPaymentsMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdPaymentsMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].payments.methods.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdPaymentsMethods<
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
                  ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
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
  const mutationDefaults = getPostOrganisationsIdPaymentsMethodsMutationOptions<
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

export function getOrganisationsIdPaymentsMethodsDefaultQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/methods/default', toValue(args)] as const
}

export function getOrganisationsIdPaymentsMethodsDefaultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsMethodsDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.methods.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
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
                    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
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
                    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
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
              (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsMethodsDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.methods.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdPaymentsMethodsDefaultMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods/default', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsMethodsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsMethodsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
      >,
    ) {
      return parseResponse(client.organisations[':id'].payments.methods.default.$put(args, options))
    },
  })
}

export function usePutOrganisationsIdPaymentsMethodsDefault<
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
                    (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
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
  const mutationDefaults = getPutOrganisationsIdPaymentsMethodsDefaultMutationOptions<
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

export function getDeleteOrganisationsIdPaymentsMethodsMIdMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods/:mId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsMethodsMIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsMethodsMIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.methods[':mId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdPaymentsMethodsMId<
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
                    (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdPaymentsMethodsMIdMutationOptions<
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

export function getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice', toValue(args)] as const
}

export function getOrganisationsIdPaymentsMonthlyinvoiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.monthlyinvoice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
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
                    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
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
                    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
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
            ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.monthlyinvoice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationKey() {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.monthlyinvoice.maxcredit.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdPaymentsMonthlyinvoiceMaxcredit<
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
                    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
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
  const mutationDefaults = getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationOptions<
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

export function getOrganisationsIdPaymentsRecurringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
  >,
) {
  return ['organisations', '/organisations/:id/payments/recurring', toValue(args)] as const
}

export function getOrganisationsIdPaymentsRecurringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganisationsIdPaymentsRecurringQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organisations[':id'].payments.recurring.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganisationsIdPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
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
                  ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
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
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganisationsIdPaymentsRecurringQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organisations[':id'].payments.recurring.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganisationsIdPaymentsRecurringMutationKey() {
  return ['organisations', '/organisations/:id/payments/recurring', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsRecurringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsRecurringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['recurring']['$delete']
      >,
    ) {
      return parseResponse(client.organisations[':id'].payments.recurring.$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdPaymentsRecurring<
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
                    (typeof client.organisations)[':id']['payments']['recurring']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organisations)[':id']['payments']['recurring']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdPaymentsRecurringMutationOptions<
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

export function getPasswordForgottenQueryKey() {
  return ['password_forgotten', '/password_forgotten'] as const
}

export function getPasswordForgottenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPasswordForgottenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.password_forgotten.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePasswordForgotten<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>
            >
          >,
          ReturnType<typeof getPasswordForgottenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordForgottenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPasswordForgottenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.password_forgotten.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPasswordForgottenMutationKey() {
  return ['password_forgotten', '/password_forgotten', 'POST'] as const
}

export function getPostPasswordForgottenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.password_forgotten.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordForgottenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password_forgotten.$post>) {
      return parseResponse(client.password_forgotten.$post(args, options))
    },
  })
}

export function usePostPasswordForgotten<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.password_forgotten.$post>,
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
  const mutationDefaults = getPostPasswordForgottenMutationOptions<TError, TOnMutateResult>(
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

export function getPasswordForgottenKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.password_forgotten)[':key']['$get']>>,
) {
  return ['password_forgotten', '/password_forgotten/:key', toValue(args)] as const
}

export function getPasswordForgottenKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.password_forgotten)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPasswordForgottenKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.password_forgotten[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePasswordForgottenKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.password_forgotten)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPasswordForgottenKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordForgottenKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPasswordForgottenKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.password_forgotten[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPasswordForgottenKeyMutationKey() {
  return ['password_forgotten', '/password_forgotten/:key', 'POST'] as const
}

export function getPostPasswordForgottenKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordForgottenKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.password_forgotten)[':key']['$post']>) {
      return parseResponse(client.password_forgotten[':key'].$post(args, options))
    },
  })
}

export function usePostPasswordForgottenKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
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
  const mutationDefaults = getPostPasswordForgottenKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentsAssetsPayButtonTokenButtonPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
  >,
) {
  return ['payments', '/payments/assets/pay_button/:token/button.png', toValue(args)] as const
}

export function getPaymentsAssetsPayButtonTokenButtonPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsAssetsPayButtonTokenButtonPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.assets.pay_button[':token']['button.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsAssetsPayButtonTokenButtonPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
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
                    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
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
                    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
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
            ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsAssetsPayButtonTokenButtonPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.assets.pay_button[':token']['button.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentsCouponsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments.coupons)[':name']['$get']>>,
) {
  return ['payments', '/payments/coupons/:name', toValue(args)] as const
}

export function getPaymentsCouponsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments.coupons)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsCouponsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.coupons[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsCouponsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments.coupons)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentsCouponsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsCouponsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsCouponsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.coupons[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentsProvidersQueryKey() {
  return ['payments', '/payments/providers'] as const
}

export function getPaymentsProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPaymentsProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>
            >
          >,
          ReturnType<typeof getPaymentsProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPaymentsProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentsTokensStripeQueryKey() {
  return ['payments', '/payments/tokens/stripe'] as const
}

export function getPaymentsTokensStripeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPaymentsTokensStripeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.tokens.stripe.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsTokensStripe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
            >
          >,
          ReturnType<typeof getPaymentsTokensStripeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsTokensStripeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPaymentsTokensStripeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.tokens.stripe.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentsBidEndStripeMutationKey() {
  return ['payments', '/payments/:bid/end/stripe', 'POST'] as const
}

export function getPostPaymentsBidEndStripeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsBidEndStripeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
    ) {
      return parseResponse(client.payments[':bid'].end.stripe.$post(args, options))
    },
  })
}

export function usePostPaymentsBidEndStripe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
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
  const mutationDefaults = getPostPaymentsBidEndStripeMutationOptions<TError, TOnMutateResult>(
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

export function getProductsAddonprovidersQueryKey() {
  return ['products', '/products/addonproviders'] as const
}

export function getProductsAddonprovidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsAddonprovidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.addonproviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
            >
          >,
          ReturnType<typeof getProductsAddonprovidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsAddonprovidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.addonproviders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsAddonprovidersProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>
  >,
) {
  return ['products', '/products/addonproviders/:provider_id', toValue(args)] as const
}

export function getProductsAddonprovidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsAddonprovidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.addonproviders[':provider_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsAddonprovidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.addonproviders[':provider_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsAddonprovidersProviderIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
  >,
) {
  return ['products', '/products/addonproviders/:provider_id/versions', toValue(args)] as const
}

export function getProductsAddonprovidersProviderIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsAddonprovidersProviderIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.addonproviders[':provider_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsAddonprovidersProviderIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
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
                    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
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
                    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
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
            ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsAddonprovidersProviderIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.addonproviders[':provider_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsCountriesQueryKey() {
  return ['products', '/products/countries'] as const
}

export function getProductsCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>
            >
          >,
          ReturnType<typeof getProductsCountriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsCountrycodesQueryKey() {
  return ['products', '/products/countrycodes'] as const
}

export function getProductsCountrycodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsCountrycodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.countrycodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsCountrycodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
            >
          >,
          ReturnType<typeof getProductsCountrycodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsCountrycodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsCountrycodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.countrycodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.instances.$get>>,
) {
  return ['products', '/products/instances', toValue(args)] as const
}

export function getProductsInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>
            >
          >,
          ReturnType<typeof getProductsInstancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsInstancesTypeVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>
  >,
) {
  return ['products', '/products/instances/:type-:version', toValue(args)] as const
}

export function getProductsInstancesTypeVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsInstancesTypeVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.instances[':type-:version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsInstancesTypeVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsInstancesTypeVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.instances[':type-:version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsMfaKindsQueryKey() {
  return ['products', '/products/mfa_kinds'] as const
}

export function getProductsMfaKindsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsMfaKindsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.mfa_kinds.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsMfaKinds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>
            >
          >,
          ReturnType<typeof getProductsMfaKindsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsMfaKindsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsMfaKindsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.mfa_kinds.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsPackagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.packages.$get>>,
) {
  return ['products', '/products/packages', toValue(args)] as const
}

export function getProductsPackagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.packages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsPackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.packages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>
            >
          >,
          ReturnType<typeof getProductsPackagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsPackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsPricesQueryKey() {
  return ['products', '/products/prices'] as const
}

export function getProductsPricesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsPricesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.prices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProductsPrices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>
            >
          >,
          ReturnType<typeof getProductsPricesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsPricesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.prices.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsZonesQueryKey() {
  return ['products', '/products/zones'] as const
}

export function getProductsZonesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProductsZonesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.zones.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProductsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
          >,
          ReturnType<typeof getProductsZonesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProductsZonesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.products.zones.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfQueryKey() {
  return ['self', '/self'] as const
}

export function getSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
          ReturnType<typeof getSelfQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfMutationKey() {
  return ['self', '/self', 'PUT'] as const
}

export function getPutSelfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
    TError,
    InferRequestType<typeof client.self.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.$put>) {
      return parseResponse(client.self.$put(args, options))
    },
  })
}

export function usePutSelf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
          TError,
          InferRequestType<typeof client.self.$put>,
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
  const mutationDefaults = getPutSelfMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSelfMutationKey() {
  return ['self', '/self', 'DELETE'] as const
}

export function getDeleteSelfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.$delete(undefined, options))
    },
  })
}

export function useDeleteSelf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteSelfMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSelfAddonsQueryKey() {
  return ['self', '/self/addons'] as const
}

export function getSelfAddonsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfAddonsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.addons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
          >,
          ReturnType<typeof getSelfAddonsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfAddonsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.addons.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfAddonsMutationKey() {
  return ['self', '/self/addons', 'POST'] as const
}

export function getPostSelfAddonsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>>,
    TError,
    InferRequestType<typeof client.self.addons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfAddonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.addons.$post>) {
      return parseResponse(client.self.addons.$post(args, options))
    },
  })
}

export function usePostSelfAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.self.addons.$post>,
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
  const mutationDefaults = getPostSelfAddonsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSelfAddonsPreordersMutationKey() {
  return ['self', '/self/addons/preorders', 'POST'] as const
}

export function getPostSelfAddonsPreordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.self.addons.preorders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfAddonsPreordersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.addons.preorders.$post>) {
      return parseResponse(client.self.addons.preorders.$post(args, options))
    },
  })
}

export function usePostSelfAddonsPreorders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.self.addons.preorders.$post>,
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
  const mutationDefaults = getPostSelfAddonsPreordersMutationOptions<TError, TOnMutateResult>(
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

export function getSelfAddonsAddonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['$get']>>,
) {
  return ['self', '/self/addons/:addonId', toValue(args)] as const
}

export function getSelfAddonsAddonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfAddonsAddonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.addons[':addonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfAddonsAddonIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfAddonsAddonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.addons[':addonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfAddonsAddonIdMutationKey() {
  return ['self', '/self/addons/:addonId', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.addons)[':addonId']['$put']>) {
      return parseResponse(client.self.addons[':addonId'].$put(args, options))
    },
  })
}

export function usePutSelfAddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
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
  const mutationDefaults = getPutSelfAddonsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfAddonsAddonIdMutationKey() {
  return ['self', '/self/addons/:addonId', 'DELETE'] as const
}

export function getDeleteSelfAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfAddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>) {
      return parseResponse(client.self.addons[':addonId'].$delete(args, options))
    },
  })
}

export function useDeleteSelfAddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
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
  const mutationDefaults = getDeleteSelfAddonsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function getSelfAddonsAddonIdApplicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>
  >,
) {
  return ['self', '/self/addons/:addonId/applications', toValue(args)] as const
}

export function getSelfAddonsAddonIdApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfAddonsAddonIdApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.addons[':addonId'].applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfAddonsAddonIdApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.addons[':addonId'].applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfAddonsAddonIdEnvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>>,
) {
  return ['self', '/self/addons/:addonId/env', toValue(args)] as const
}

export function getSelfAddonsAddonIdEnvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfAddonsAddonIdEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.addons[':addonId'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
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
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfAddonsAddonIdEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.addons[':addonId'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfAddonsAddonIdPlanMutationKey() {
  return ['self', '/self/addons/:addonId/plan', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].plan.$put(args, options))
    },
  })
}

export function usePutSelfAddonsAddonIdPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
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
  const mutationDefaults = getPutSelfAddonsAddonIdPlanMutationOptions<TError, TOnMutateResult>(
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

export function getSelfAddonsAddonIdSsoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>>,
) {
  return ['self', '/self/addons/:addonId/sso', toValue(args)] as const
}

export function getSelfAddonsAddonIdSsoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfAddonsAddonIdSsoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.addons[':addonId'].sso.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
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
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfAddonsAddonIdSsoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.addons[':addonId'].sso.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfAddonsAddonIdTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>>,
) {
  return ['self', '/self/addons/:addonId/tags', toValue(args)] as const
}

export function getSelfAddonsAddonIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfAddonsAddonIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.addons[':addonId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfAddonsAddonIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.addons[':addonId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfAddonsAddonIdTagsTagMutationKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].tags[':tag'].$put(args, options))
    },
  })
}

export function usePutSelfAddonsAddonIdTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
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
  const mutationDefaults = getPutSelfAddonsAddonIdTagsTagMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfAddonsAddonIdTagsTagMutationKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function getDeleteSelfAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].tags[':tag'].$delete(args, options))
    },
  })
}

export function useDeleteSelfAddonsAddonIdTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
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
  const mutationDefaults = getDeleteSelfAddonsAddonIdTagsTagMutationOptions<
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

export function getSelfApplicationsQueryKey() {
  return ['self', '/self/applications'] as const
}

export function getSelfApplicationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfApplicationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>
            >
          >,
          ReturnType<typeof getSelfApplicationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfApplicationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfApplicationsMutationKey() {
  return ['self', '/self/applications', 'POST'] as const
}

export function getPostSelfApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.applications.$post>) {
      return parseResponse(client.self.applications.$post(args, options))
    },
  })
}

export function usePostSelfApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.self.applications.$post>,
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
  const mutationDefaults = getPostSelfApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfApplicationsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.applications)[':appId']['$get']>>,
) {
  return ['self', '/self/applications/:appId', toValue(args)] as const
}

export function getSelfApplicationsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.applications)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.applications)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdMutationKey() {
  return ['self', '/self/applications/:appId', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.applications)[':appId']['$put']>) {
      return parseResponse(client.self.applications[':appId'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfApplicationsAppIdMutationKey() {
  return ['self', '/self/applications/:appId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
    ) {
      return parseResponse(client.self.applications[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteSelfApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getSelfApplicationsAppIdAddonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/addons', toValue(args)] as const
}

export function getSelfApplicationsAppIdAddonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfApplicationsAppIdAddonsMutationKey() {
  return ['self', '/self/applications/:appId/addons', 'POST'] as const
}

export function getPostSelfApplicationsAppIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsAppIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
    ) {
      return parseResponse(client.self.applications[':appId'].addons.$post(args, options))
    },
  })
}

export function usePostSelfApplicationsAppIdAddons<
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
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
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
  const mutationDefaults = getPostSelfApplicationsAppIdAddonsMutationOptions<
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

export function getSelfApplicationsAppIdAddonsEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/addons/env', toValue(args)] as const
}

export function getSelfApplicationsAppIdAddonsEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdAddonsEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].addons.env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
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
                  ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdAddonsEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].addons.env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdMutationKey() {
  return ['self', '/self/applications/:appId/addons/:addonId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].addons[':addonId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdAddonsAddonId<
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
                    (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdAddonsAddonIdMutationOptions<
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

export function getPutSelfApplicationsAppIdBranchMutationKey() {
  return ['self', '/self/applications/:appId/branch', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].branch.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdBranch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdBranchMutationOptions<
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

export function getSelfApplicationsAppIdBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/branches', toValue(args)] as const
}

export function getSelfApplicationsAppIdBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdBuildflavorMutationKey() {
  return ['self', '/self/applications/:appId/buildflavor', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdBuildflavorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdBuildflavorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].buildflavor.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdBuildflavor<
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
                  ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdBuildflavorMutationOptions<
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

export function getSelfApplicationsAppIdDependenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/dependencies', toValue(args)] as const
}

export function getSelfApplicationsAppIdDependenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdDependenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].dependencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
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
                  ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdDependenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].dependencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdDependenciesEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/dependencies/env', toValue(args)] as const
}

export function getSelfApplicationsAppIdDependenciesEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdDependenciesEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].dependencies.env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
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
                    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
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
                    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
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
            ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdDependenciesEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].dependencies.env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].dependencies[':dependencyId'].$put(args, options),
      )
    },
  })
}

export function usePutSelfApplicationsAppIdDependenciesDependencyId<
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
                    (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
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
  const mutationDefaults = getPutSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].dependencies[':dependencyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdDependenciesDependencyId<
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
                    (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getSelfApplicationsAppIdDependentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/dependents', toValue(args)] as const
}

export function getSelfApplicationsAppIdDependentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdDependentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].dependents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>
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
                  ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdDependentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].dependents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/deployments', toValue(args)] as const
}

export function getSelfApplicationsAppIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>
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
                  ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
    >
  >,
) {
  return ['self', '/self/applications/:appId/deployments/:deploymentId', toValue(args)] as const
}

export function getSelfApplicationsAppIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].deployments[':deploymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
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
              (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].deployments[':deploymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey() {
  return [
    'self',
    '/self/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].deployments[':deploymentId'].instances.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances<
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
                    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
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
    getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
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

export function getSelfApplicationsAppIdEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/env', toValue(args)] as const
}

export function getSelfApplicationsAppIdEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdEnvMutationKey() {
  return ['self', '/self/applications/:appId/env', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].env.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdEnv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdEnvMutationOptions<TError, TOnMutateResult>(
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

export function getPutSelfApplicationsAppIdEnvEnvNameMutationKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['env'][':envName']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].env[':envName'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdEnvEnvName<
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
                  ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getDeleteSelfApplicationsAppIdEnvEnvNameMutationKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].env[':envName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdEnvEnvName<
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
                    (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getSelfApplicationsAppIdExposedEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/exposed_env', toValue(args)] as const
}

export function getSelfApplicationsAppIdExposedEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdExposedEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].exposed_env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
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
                  ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdExposedEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].exposed_env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdExposedEnvMutationKey() {
  return ['self', '/self/applications/:appId/exposed_env', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdExposedEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdExposedEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].exposed_env.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdExposedEnv<
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
                  ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdExposedEnvMutationOptions<
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

export function getSelfApplicationsAppIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/instances', toValue(args)] as const
}

export function getSelfApplicationsAppIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>
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
                  ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfApplicationsAppIdInstancesMutationKey() {
  return ['self', '/self/applications/:appId/instances', 'POST'] as const
}

export function getPostSelfApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
    ) {
      return parseResponse(client.self.applications[':appId'].instances.$post(args, options))
    },
  })
}

export function usePostSelfApplicationsAppIdInstances<
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
                  ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
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
  const mutationDefaults = getPostSelfApplicationsAppIdInstancesMutationOptions<
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

export function getDeleteSelfApplicationsAppIdInstancesMutationKey() {
  return ['self', '/self/applications/:appId/instances', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
    ) {
      return parseResponse(client.self.applications[':appId'].instances.$delete(args, options))
    },
  })
}

export function useDeleteSelfApplicationsAppIdInstances<
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
                  ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdInstancesMutationOptions<
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

export function getSelfApplicationsAppIdInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
    >
  >,
) {
  return ['self', '/self/applications/:appId/instances/:instanceId', toValue(args)] as const
}

export function getSelfApplicationsAppIdInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].instances[':instanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
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
                    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
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
                    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
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
              (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].instances[':instanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/tags', toValue(args)] as const
}

export function getSelfApplicationsAppIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdTagsTagMutationKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].tags[':tag'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdTagsTag<
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
                  ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
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
  const mutationDefaults = getPutSelfApplicationsAppIdTagsTagMutationOptions<
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

export function getDeleteSelfApplicationsAppIdTagsTagMutationKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].tags[':tag'].$delete(args, options))
    },
  })
}

export function useDeleteSelfApplicationsAppIdTagsTag<
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
                  ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdTagsTagMutationOptions<
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

export function getSelfApplicationsAppIdVhostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/vhosts', toValue(args)] as const
}

export function getSelfApplicationsAppIdVhostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdVhostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
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
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdVhostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].vhosts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdVhostsFavouriteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
  >,
) {
  return ['self', '/self/applications/:appId/vhosts/favourite', toValue(args)] as const
}

export function getSelfApplicationsAppIdVhostsFavouriteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfApplicationsAppIdVhostsFavouriteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.favourite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
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
                    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
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
                    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
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
            ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfApplicationsAppIdVhostsFavouriteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.applications[':appId'].vhosts.favourite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdVhostsFavouriteMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].vhosts.favourite.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdVhostsFavourite<
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
                    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
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
  const mutationDefaults = getPutSelfApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getDeleteSelfApplicationsAppIdVhostsFavouriteMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.favourite.$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdVhostsFavourite<
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
                    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getPutSelfApplicationsAppIdVhostsDomainMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].vhosts[':domain'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdVhostsDomain<
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
                    (typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']
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
  const mutationDefaults = getPutSelfApplicationsAppIdVhostsDomainMutationOptions<
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

export function getDeleteSelfApplicationsAppIdVhostsDomainMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].vhosts[':domain'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdVhostsDomain<
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
                    (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdVhostsDomainMutationOptions<
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

export function getPutSelfAvatarMutationKey() {
  return ['self', '/self/avatar', 'PUT'] as const
}

export function getPutSelfAvatarMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>>,
    TError,
    InferRequestType<typeof client.self.avatar.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAvatarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.avatar.$put>) {
      return parseResponse(client.self.avatar.$put(args, options))
    },
  })
}

export function usePutSelfAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.self.avatar.$put>,
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
  const mutationDefaults = getPutSelfAvatarMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSelfChangePasswordMutationKey() {
  return ['self', '/self/change_password', 'PUT'] as const
}

export function getPutSelfChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfChangePasswordMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.change_password.$put(undefined, options))
    },
  })
}

export function usePutSelfChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutSelfChangePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getSelfCliTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.cli_tokens.$get>>,
) {
  return ['self', '/self/cli_tokens', toValue(args)] as const
}

export function getSelfCliTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.cli_tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfCliTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.cli_tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfCliTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.cli_tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>
            >
          >,
          ReturnType<typeof getSelfCliTokensQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfCliTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfCliTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.cli_tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfConfirmationEmailQueryKey() {
  return ['self', '/self/confirmation_email'] as const
}

export function getSelfConfirmationEmailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfConfirmationEmailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.confirmation_email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfConfirmationEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
            >
          >,
          ReturnType<typeof getSelfConfirmationEmailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConfirmationEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfConfirmationEmailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.confirmation_email.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfConsumersQueryKey() {
  return ['self', '/self/consumers'] as const
}

export function getSelfConsumersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfConsumersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.consumers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
          >,
          ReturnType<typeof getSelfConsumersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfConsumersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.consumers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfConsumersMutationKey() {
  return ['self', '/self/consumers', 'POST'] as const
}

export function getPostSelfConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self.consumers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfConsumersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.consumers.$post>) {
      return parseResponse(client.self.consumers.$post(args, options))
    },
  })
}

export function usePostSelfConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.self.consumers.$post>,
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
  const mutationDefaults = getPostSelfConsumersMutationOptions<TError, TOnMutateResult>(
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

export function getSelfConsumersKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.consumers)[':key']['$get']>>,
) {
  return ['self', '/self/consumers/:key', toValue(args)] as const
}

export function getSelfConsumersKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.consumers)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfConsumersKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.consumers[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.consumers)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfConsumersKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfConsumersKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.consumers[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfConsumersKeyMutationKey() {
  return ['self', '/self/consumers/:key', 'PUT'] as const
}

export function getPutSelfConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfConsumersKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.consumers)[':key']['$put']>) {
      return parseResponse(client.self.consumers[':key'].$put(args, options))
    },
  })
}

export function usePutSelfConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
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
  const mutationDefaults = getPutSelfConsumersKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfConsumersKeyMutationKey() {
  return ['self', '/self/consumers/:key', 'DELETE'] as const
}

export function getDeleteSelfConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfConsumersKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.consumers)[':key']['$delete']>) {
      return parseResponse(client.self.consumers[':key'].$delete(args, options))
    },
  })
}

export function useDeleteSelfConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteSelfConsumersKeyMutationOptions<TError, TOnMutateResult>(
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

export function getSelfConsumersKeySecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>
  >,
) {
  return ['self', '/self/consumers/:key/secret', toValue(args)] as const
}

export function getSelfConsumersKeySecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfConsumersKeySecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.consumers[':key'].secret.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfConsumersKeySecretQueryKey>
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
          Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersKeySecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfConsumersKeySecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.consumers[':key'].secret.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfConsumptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.consumptions.$get>>,
) {
  return ['self', '/self/consumptions', toValue(args)] as const
}

export function getSelfConsumptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.consumptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfConsumptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.consumptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfConsumptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.consumptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>
            >
          >,
          ReturnType<typeof getSelfConsumptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfConsumptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.consumptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfCreditsQueryKey() {
  return ['self', '/self/credits'] as const
}

export function getSelfCreditsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfCreditsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.credits.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
          >,
          ReturnType<typeof getSelfCreditsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfCreditsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.credits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfEmailsQueryKey() {
  return ['self', '/self/emails'] as const
}

export function getSelfEmailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfEmailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
          >,
          ReturnType<typeof getSelfEmailsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfEmailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.emails.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfEmailsEmailMutationKey() {
  return ['self', '/self/emails/:email', 'PUT'] as const
}

export function getPutSelfEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.emails)[':email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfEmailsEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.emails)[':email']['$put']>) {
      return parseResponse(client.self.emails[':email'].$put(args, options))
    },
  })
}

export function usePutSelfEmailsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.emails)[':email']['$put']>,
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
  const mutationDefaults = getPutSelfEmailsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfEmailsEmailMutationKey() {
  return ['self', '/self/emails/:email', 'DELETE'] as const
}

export function getDeleteSelfEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfEmailsEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.emails)[':email']['$delete']>) {
      return parseResponse(client.self.emails[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSelfEmailsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
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
  const mutationDefaults = getDeleteSelfEmailsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getSelfIdQueryKey() {
  return ['self', '/self/id'] as const
}

export function getSelfIdQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfIdQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.id.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
          >,
          ReturnType<typeof getSelfIdQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfIdQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.id.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfInstancesQueryKey() {
  return ['self', '/self/instances'] as const
}

export function getSelfInstancesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfInstancesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.instances.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
          >,
          ReturnType<typeof getSelfInstancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfInstancesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.instances.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfKeysQueryKey() {
  return ['self', '/self/keys'] as const
}

export function getSelfKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
          >,
          ReturnType<typeof getSelfKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfKeysKeyMutationKey() {
  return ['self', '/self/keys/:key', 'PUT'] as const
}

export function getPutSelfKeysKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.keys)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.keys)[':key']['$put']>) {
      return parseResponse(client.self.keys[':key'].$put(args, options))
    },
  })
}

export function usePutSelfKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.self.keys)[':key']['$put']>,
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
  const mutationDefaults = getPutSelfKeysKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSelfKeysKeyMutationKey() {
  return ['self', '/self/keys/:key', 'DELETE'] as const
}

export function getDeleteSelfKeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.keys)[':key']['$delete']>) {
      return parseResponse(client.self.keys[':key'].$delete(args, options))
    },
  })
}

export function useDeleteSelfKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteSelfKeysKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPutSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'PUT'] as const
}

export function getPutSelfMfaKindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$put']>) {
      return parseResponse(client.self.mfa[':kind'].$put(args, options))
    },
  })
}

export function usePutSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
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
  const mutationDefaults = getPutSelfMfaKindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'POST'] as const
}

export function getPostSelfMfaKindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$post']>) {
      return parseResponse(client.self.mfa[':kind'].$post(args, options))
    },
  })
}

export function usePostSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
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
  const mutationDefaults = getPostSelfMfaKindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'DELETE'] as const
}

export function getDeleteSelfMfaKindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>) {
      return parseResponse(client.self.mfa[':kind'].$delete(args, options))
    },
  })
}

export function useDeleteSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
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
  const mutationDefaults = getDeleteSelfMfaKindMutationOptions<TError, TOnMutateResult>(
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

export function getSelfMfaKindBackupcodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>
  >,
) {
  return ['self', '/self/mfa/:kind/backupcodes', toValue(args)] as const
}

export function getSelfMfaKindBackupcodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfMfaKindBackupcodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.mfa[':kind'].backupcodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfMfaKindBackupcodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
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
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfMfaKindBackupcodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.mfa[':kind'].backupcodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfMfaKindConfirmationMutationKey() {
  return ['self', '/self/mfa/:kind/confirmation', 'POST'] as const
}

export function getPostSelfMfaKindConfirmationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMfaKindConfirmationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
    ) {
      return parseResponse(client.self.mfa[':kind'].confirmation.$post(args, options))
    },
  })
}

export function usePostSelfMfaKindConfirmation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
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
  const mutationDefaults = getPostSelfMfaKindConfirmationMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentInfoQueryKey() {
  return ['self', '/self/payment-info'] as const
}

export function getSelfPaymentInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self['payment-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self['payment-info'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfPaymentsBillingsQueryKey() {
  return ['self', '/self/payments/billings'] as const
}

export function getSelfPaymentsBillingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentsBillingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.billings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsBillings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
            >
          >,
          ReturnType<typeof getSelfPaymentsBillingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentsBillingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.billings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfPaymentsBillingsMutationKey() {
  return ['self', '/self/payments/billings', 'POST'] as const
}

export function getPostSelfPaymentsBillingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSelfPaymentsBillingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.billings.$post(undefined, options))
    },
  })
}

export function usePostSelfPaymentsBillings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSelfPaymentsBillingsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsBillingsBidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>>,
) {
  return ['self', '/self/payments/billings/:bid', toValue(args)] as const
}

export function getSelfPaymentsBillingsBidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfPaymentsBillingsBidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.billings[':bid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
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
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfPaymentsBillingsBidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.billings[':bid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfPaymentsBillingsBidMutationKey() {
  return ['self', '/self/payments/billings/:bid', 'PUT'] as const
}

export function getPutSelfPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
    ) {
      return parseResponse(client.self.payments.billings[':bid'].$put(args, options))
    },
  })
}

export function usePutSelfPaymentsBillingsBid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
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
  const mutationDefaults = getPutSelfPaymentsBillingsBidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfPaymentsBillingsBidMutationKey() {
  return ['self', '/self/payments/billings/:bid', 'DELETE'] as const
}

export function getDeleteSelfPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
    ) {
      return parseResponse(client.self.payments.billings[':bid'].$delete(args, options))
    },
  })
}

export function useDeleteSelfPaymentsBillingsBid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
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
  const mutationDefaults = getDeleteSelfPaymentsBillingsBidMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsBillingsBidPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>
  >,
) {
  return ['self', '/self/payments/billings/:bid.pdf', toValue(args)] as const
}

export function getSelfPaymentsBillingsBidPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfPaymentsBillingsBidPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.billings[':bid.pdf'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfPaymentsBillingsBidPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.billings[':bid.pdf'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfPaymentsFullpricePriceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>
  >,
) {
  return ['self', '/self/payments/fullprice/:price', toValue(args)] as const
}

export function getSelfPaymentsFullpricePriceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfPaymentsFullpricePriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.fullprice[':price'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
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
          Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfPaymentsFullpricePriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.fullprice[':price'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfPaymentsMethodsQueryKey() {
  return ['self', '/self/payments/methods'] as const
}

export function getSelfPaymentsMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentsMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
            >
          >,
          ReturnType<typeof getSelfPaymentsMethodsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentsMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.methods.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelfPaymentsMethodsMutationKey() {
  return ['self', '/self/payments/methods', 'POST'] as const
}

export function getPostSelfPaymentsMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSelfPaymentsMethodsMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.methods.$post(undefined, options))
    },
  })
}

export function usePostSelfPaymentsMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSelfPaymentsMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsMethodsDefaultQueryKey() {
  return ['self', '/self/payments/methods/default'] as const
}

export function getSelfPaymentsMethodsDefaultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentsMethodsDefaultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.methods.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentsMethodsDefaultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.methods.default.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfPaymentsMethodsDefaultMutationKey() {
  return ['self', '/self/payments/methods/default', 'PUT'] as const
}

export function getPutSelfPaymentsMethodsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsMethodsDefaultMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.methods.default.$put(undefined, options))
    },
  })
}

export function usePutSelfPaymentsMethodsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutSelfPaymentsMethodsDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfPaymentsMethodsMIdMutationKey() {
  return ['self', '/self/payments/methods/:mId', 'DELETE'] as const
}

export function getDeleteSelfPaymentsMethodsMIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsMethodsMIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
    ) {
      return parseResponse(client.self.payments.methods[':mId'].$delete(args, options))
    },
  })
}

export function useDeleteSelfPaymentsMethodsMId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
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
  const mutationDefaults = getDeleteSelfPaymentsMethodsMIdMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsMonthlyinvoiceQueryKey() {
  return ['self', '/self/payments/monthlyinvoice'] as const
}

export function getSelfPaymentsMonthlyinvoiceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentsMonthlyinvoiceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.monthlyinvoice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentsMonthlyinvoiceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.monthlyinvoice.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationKey() {
  return ['self', '/self/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.monthlyinvoice.maxcredit.$put(undefined, options))
    },
  })
}

export function usePutSelfPaymentsMonthlyinvoiceMaxcredit<
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
                Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationOptions<
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

export function getSelfPaymentsRecurringQueryKey() {
  return ['self', '/self/payments/recurring'] as const
}

export function getSelfPaymentsRecurringQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentsRecurringQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.recurring.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
            >
          >,
          ReturnType<typeof getSelfPaymentsRecurringQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsRecurringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentsRecurringQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.recurring.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSelfPaymentsRecurringMutationKey() {
  return ['self', '/self/payments/recurring', 'DELETE'] as const
}

export function getDeleteSelfPaymentsRecurringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsRecurringMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.recurring.$delete(undefined, options))
    },
  })
}

export function useDeleteSelfPaymentsRecurring<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteSelfPaymentsRecurringMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsTokensStripeQueryKey() {
  return ['self', '/self/payments/tokens/stripe'] as const
}

export function getSelfPaymentsTokensStripeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfPaymentsTokensStripeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.payments.tokens.stripe.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfPaymentsTokensStripe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>
              >
            >
          >,
          ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfPaymentsTokensStripeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.payments.tokens.stripe.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfTokensQueryKey() {
  return ['self', '/self/tokens'] as const
}

export function getSelfTokensQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfTokensQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelfTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
          >,
          ReturnType<typeof getSelfTokensQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfTokensQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.self.tokens.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSelfTokensMutationKey() {
  return ['self', '/self/tokens', 'DELETE'] as const
}

export function getDeleteSelfTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfTokensMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.tokens.$delete(undefined, options))
    },
  })
}

export function useDeleteSelfTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteSelfTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfTokensTokenMutationKey() {
  return ['self', '/self/tokens/:token', 'DELETE'] as const
}

export function getDeleteSelfTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfTokensTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.tokens)[':token']['$delete']>) {
      return parseResponse(client.self.tokens[':token'].$delete(args, options))
    },
  })
}

export function useDeleteSelfTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
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
  const mutationDefaults = getDeleteSelfTokensTokenMutationOptions<TError, TOnMutateResult>(
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

export function getSelfValidateEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.validate_email.$get>>,
) {
  return ['self', '/self/validate_email', toValue(args)] as const
}

export function getSelfValidateEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.validate_email.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfValidateEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.self.validate_email.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfValidateEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.self.validate_email.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
            >
          >,
          ReturnType<typeof getSelfValidateEmailQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfValidateEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfValidateEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.self.validate_email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSummaryQueryKey() {
  return ['summary', '/summary'] as const
}

export function getSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.summary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
          >,
          ReturnType<typeof getSummaryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  return ['users', '/users/:id', toValue(args)] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['applications']['$get']>>,
) {
  return ['users', '/users/:id/applications', toValue(args)] as const
}

export function getUsersIdApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['applications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['applications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdGitInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>>,
) {
  return ['users', '/users/:userId/git-info', toValue(args)] as const
}

export function getUsersUserIdGitInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdGitInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId']['git-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdGitInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdGitInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGitInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdGitInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId']['git-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ProvidersAddonMatomoResourcesMutationKey() {
  return ['v2', '/v2/providers/addon-matomo/resources', 'POST'] as const
}

export function getPostV2ProvidersAddonMatomoResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProvidersAddonMatomoResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.providers['addon-matomo'].resources.$post(args, options))
    },
  })
}

export function usePostV2ProvidersAddonMatomoResources<
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
                  ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
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
  const mutationDefaults = getPostV2ProvidersAddonMatomoResourcesMutationOptions<
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

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationKey() {
  return ['v2', '/v2/providers/addon-matomo/resources/:matomoId', 'DELETE'] as const
}

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.providers['addon-matomo'].resources[':matomoId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ProvidersAddonMatomoResourcesMatomoId<
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
                    (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
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
  const mutationDefaults = getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationOptions<
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

export function getV3LogsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.logs)[':appId']['$get']>>,
) {
  return ['v3', '/v3/logs/:appId', toValue(args)] as const
}

export function getV3LogsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.logs)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3LogsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.logs[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3LogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.logs)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
            >
          >,
          ReturnType<typeof getV3LogsAppIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3LogsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.logs[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3LogsAppIdDrainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>>,
) {
  return ['v3', '/v3/logs/:appId/drains', toValue(args)] as const
}

export function getV3LogsAppIdDrainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3LogsAppIdDrainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.logs[':appId'].drains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3LogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3LogsAppIdDrainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.logs[':appId'].drains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3LogsAppIdDrainsMutationKey() {
  return ['v3', '/v3/logs/:appId/drains', 'POST'] as const
}

export function getPostV3LogsAppIdDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogsAppIdDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>) {
      return parseResponse(client.v3.logs[':appId'].drains.$post(args, options))
    },
  })
}

export function usePostV3LogsAppIdDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
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
  const mutationDefaults = getPostV3LogsAppIdDrainsMutationOptions<TError, TOnMutateResult>(
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

export function getV3LogsAppIdDrainsIdOrUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>
  >,
) {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', toValue(args)] as const
}

export function getV3LogsAppIdDrainsIdOrUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3LogsAppIdDrainsIdOrUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.logs[':appId'].drains[':idOrUrl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3LogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3LogsAppIdDrainsIdOrUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.logs[':appId'].drains[':idOrUrl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlMutationKey() {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3LogsAppIdDrainsIdOrUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    ) {
      return parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
    },
  })
}

export function useDeleteV3LogsAppIdDrainsIdOrUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
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
  const mutationDefaults = getDeleteV3LogsAppIdDrainsIdOrUrlMutationOptions<
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

export function getV3LogsAppIdLogsChunkedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>
  >,
) {
  return ['v3', '/v3/logs/:appId/logs-chunked', toValue(args)] as const
}

export function getV3LogsAppIdLogsChunkedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3LogsAppIdLogsChunkedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.logs[':appId']['logs-chunked'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3LogsAppIdLogsChunked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3LogsAppIdLogsChunkedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.logs[':appId']['logs-chunked'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3LogsAppIdLogsSocketQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>
  >,
) {
  return ['v3', '/v3/logs/:appId/logs-socket', toValue(args)] as const
}

export function getV3LogsAppIdLogsSocketQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3LogsAppIdLogsSocketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.logs[':appId']['logs-socket'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3LogsAppIdLogsSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3LogsAppIdLogsSocketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.logs[':appId']['logs-socket'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
    >
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/addons/:matomoId', toValue(args)] as const
}

export function getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4AddonProvidersAddonMatomoAddonsMatomoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
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
                    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
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
                    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
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
              (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4AddonProvidersAddonMatomoTokenValidateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
    >
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/token/validate', toValue(args)] as const
}

export function getV4AddonProvidersAddonMatomoTokenValidateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4AddonProvidersAddonMatomoTokenValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4['addon-providers']['addon-matomo'].token.validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4AddonProvidersAddonMatomoTokenValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
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
                    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
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
                    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
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
              (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4AddonProvidersAddonMatomoTokenValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4['addon-providers']['addon-matomo'].token.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId',
    toValue(args),
  ] as const
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV4AddonProvidersConfigProviderAddonsConfigurationProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
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
                    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
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
                    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
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
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    toValue(args),
  ] as const
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
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
                    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
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
                    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey
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
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4['addon-providers']['config-provider'].addons[
            ':configurationProviderId'
          ].env.$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationKey() {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    'PUT',
  ] as const
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
      >,
    ) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
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
                    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
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
    getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
    >
  >,
) {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', toValue(args)] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationKey() {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', 'POST'] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups.$post(args, options),
      )
    },
  })
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
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
  const mutationDefaults = getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
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
                      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationOptions<
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

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers',
    'POST',
  ] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
          'external-peers'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeers<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
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
    getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationOptions<
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

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers/:peerId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
          'external-peers'
        ][':peerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerId<
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
                      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].members.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    'POST',
  ] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].members.$post(args, options),
      )
    },
  })
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
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
    getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
          ':memberId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members[':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
          ':memberId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
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
                      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].peers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].peers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
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
                      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].wireguard.configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].wireguard.configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration/stream',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].wireguard.configuration.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].wireguard.configuration.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
    >
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/stream',
    toValue(args),
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].stream.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
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
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVendorAddonsMutationKey() {
  return ['vendor', '/vendor//addons', 'POST'] as const
}

export function getPostVendorAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostVendorAddonsMutationKey(),
    async mutationFn() {
      return parseResponse(client.vendor.addons.$post(undefined, options))
    },
  })
}

export function usePostVendorAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostVendorAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getVendorAppsAddonIdLogscollectorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>
  >,
) {
  return ['vendor', '/vendor//apps/:addonId/logscollector', toValue(args)] as const
}

export function getVendorAppsAddonIdLogscollectorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVendorAppsAddonIdLogscollectorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vendor.apps[':addonId'].logscollector.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVendorAppsAddonIdLogscollector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>
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
                  ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
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
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVendorAppsAddonIdLogscollectorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vendor.apps[':addonId'].logscollector.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVendorAppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vendor.apps.$get>>,
) {
  return ['vendor', '/vendor/apps', toValue(args)] as const
}

export function getVendorAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vendor.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVendorAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vendor.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVendorApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vendor.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
          >,
          ReturnType<typeof getVendorAppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVendorAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVendorAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vendor.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVendorAppsAddonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>>,
) {
  return ['vendor', '/vendor/apps/:addonId', toValue(args)] as const
}

export function getVendorAppsAddonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVendorAppsAddonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vendor.apps[':addonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVendorAppsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVendorAppsAddonIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVendorAppsAddonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVendorAppsAddonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vendor.apps[':addonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVendorAppsAddonIdMutationKey() {
  return ['vendor', '/vendor/apps/:addonId', 'PUT'] as const
}

export function getPutVendorAppsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVendorAppsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>) {
      return parseResponse(client.vendor.apps[':addonId'].$put(args, options))
    },
  })
}

export function usePutVendorAppsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
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
  const mutationDefaults = getPutVendorAppsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostVendorAppsAddonIdConsumptionsMutationKey() {
  return ['vendor', '/vendor/apps/:addonId/consumptions', 'POST'] as const
}

export function getPostVendorAppsAddonIdConsumptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVendorAppsAddonIdConsumptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
    ) {
      return parseResponse(client.vendor.apps[':addonId'].consumptions.$post(args, options))
    },
  })
}

export function usePostVendorAppsAddonIdConsumptions<
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
                  ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
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
  const mutationDefaults = getPostVendorAppsAddonIdConsumptionsMutationOptions<
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

export function getPutVendorAppsAddonIdMigrationCallbackMutationKey() {
  return ['vendor', '/vendor/apps/:addonId/migration_callback', 'PUT'] as const
}

export function getPutVendorAppsAddonIdMigrationCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVendorAppsAddonIdMigrationCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
    ) {
      return parseResponse(client.vendor.apps[':addonId'].migration_callback.$put(args, options))
    },
  })
}

export function usePutVendorAppsAddonIdMigrationCallback<
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
                  ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
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
  const mutationDefaults = getPutVendorAppsAddonIdMigrationCallbackMutationOptions<
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
