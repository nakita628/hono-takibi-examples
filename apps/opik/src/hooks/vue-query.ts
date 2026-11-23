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

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getIsAliveKey() {
  return ['is-alive'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOpikKey() {
  return ['opik'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getOauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
) {
  return ['oauth', '/oauth/authorize', toValue(args)] as const
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

export function getOauthAuthorizeContextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.context.$get>>,
) {
  return ['oauth', '/oauth/authorize/context', toValue(args)] as const
}

export function getOauthAuthorizeContextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.context.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAuthorizeContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.authorize.context.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAuthorizeContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.context.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
            >
          >,
          ReturnType<typeof getOauthAuthorizeContextQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAuthorizeContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.authorize.context.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellKnownOauthAuthorizationServerQueryKey() {
  return ['.well-known', '/.well-known/oauth-authorization-server'] as const
}

export function getWellKnownOauthAuthorizationServerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWellKnownOauthAuthorizationServerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known']['oauth-authorization-server'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWellKnownOauthAuthorizationServer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>>
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
                Awaited<
                  ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>
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
                  ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWellKnownOauthAuthorizationServerQueryKey>
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
          Awaited<ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownOauthAuthorizationServerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWellKnownOauthAuthorizationServerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known']['oauth-authorization-server'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthRegisterMutationKey() {
  return ['oauth', '/oauth/register', 'POST'] as const
}

export function getPostOauthRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.register.$post>) {
      return parseResponse(client.oauth.register.$post(args, options))
    },
  })
}

export function usePostOauthRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.register.$post>,
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
  const mutationDefaults = getPostOauthRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRevokeMutationKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function getPostOauthRevokeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.revoke.$post>) {
      return parseResponse(client.oauth.revoke.$post(args, options))
    },
  })
}

export function usePostOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.revoke.$post>,
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
  const mutationDefaults = getPostOauthRevokeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
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
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOpikAuthOauthMutationKey() {
  return ['opik', '/opik/auth-oauth', 'POST'] as const
}

export function getPostOpikAuthOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.opik)['auth-oauth']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.opik)['auth-oauth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOpikAuthOauthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.opik)['auth-oauth']['$post']>) {
      return parseResponse(client.opik['auth-oauth'].$post(args, options))
    },
  })
}

export function usePostOpikAuthOauth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.opik)['auth-oauth']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.opik)['auth-oauth']['$post']>,
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
  const mutationDefaults = getPostOpikAuthOauthMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1InternalAgentInsightsEnrollmentMutationKey() {
  return ['v1', '/v1/internal/agent-insights/enrollment', 'POST'] as const
}

export function getPostV1InternalAgentInsightsEnrollmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InternalAgentInsightsEnrollmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>,
    ) {
      return parseResponse(client.v1.internal['agent-insights'].enrollment.$post(args, options))
    },
  })
}

export function usePostV1InternalAgentInsightsEnrollment<
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
                  ReturnType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>,
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
  const mutationDefaults = getPostV1InternalAgentInsightsEnrollmentMutationOptions<
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

export function getPostV1InternalAnalyticsQueriesProjectsProjectIdMutationKey() {
  return ['v1', '/v1/internal/analytics-queries/projects/:projectId', 'POST'] as const
}

export function getPostV1InternalAnalyticsQueriesProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1InternalAnalyticsQueriesProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.internal['analytics-queries'].projects[':projectId'].$post(args, options),
      )
    },
  })
}

export function usePostV1InternalAnalyticsQueriesProjectsProjectId<
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
                    (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
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
  const mutationDefaults = getPostV1InternalAnalyticsQueriesProjectsProjectIdMutationOptions<
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

export function getPostV1InternalAnalyticsQueriesMutationKey() {
  return ['v1', '/v1/internal/analytics-queries', 'POST'] as const
}

export function getPostV1InternalAnalyticsQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal)['analytics-queries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.internal)['analytics-queries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InternalAnalyticsQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.internal)['analytics-queries']['$post']>,
    ) {
      return parseResponse(client.v1.internal['analytics-queries'].$post(args, options))
    },
  })
}

export function usePostV1InternalAnalyticsQueries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.internal)['analytics-queries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.internal)['analytics-queries']['$post']>,
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
  const mutationDefaults = getPostV1InternalAnalyticsQueriesMutationOptions<
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

export function getPostV1InternalDashboardSavedQueriesMutationKey() {
  return ['v1', '/v1/internal/dashboard-saved-queries', 'POST'] as const
}

export function getPostV1InternalDashboardSavedQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InternalDashboardSavedQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>,
    ) {
      return parseResponse(client.v1.internal['dashboard-saved-queries'].$post(args, options))
    },
  })
}

export function usePostV1InternalDashboardSavedQueries<
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
                Awaited<ReturnType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>,
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
  const mutationDefaults = getPostV1InternalDashboardSavedQueriesMutationOptions<
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

export function getV1InternalDashboardSavedQueriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/internal/dashboard-saved-queries/:id', toValue(args)] as const
}

export function getV1InternalDashboardSavedQueriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InternalDashboardSavedQueriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal['dashboard-saved-queries'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalDashboardSavedQueriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1InternalDashboardSavedQueriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalDashboardSavedQueriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InternalDashboardSavedQueriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal['dashboard-saved-queries'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1InternalUsageProjectsMutationKey() {
  return ['v1', '/v1/internal/usage/projects', 'POST'] as const
}

export function getPostV1InternalUsageProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.internal.usage.projects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.internal.usage.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InternalUsageProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.internal.usage.projects.$post>) {
      return parseResponse(client.v1.internal.usage.projects.$post(args, options))
    },
  })
}

export function usePostV1InternalUsageProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.internal.usage.projects.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.internal.usage.projects.$post>,
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
  const mutationDefaults = getPostV1InternalUsageProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getV1InternalUsageBiDatasetsQueryKey() {
  return ['v1', '/v1/internal/usage/bi-datasets'] as const
}

export function getV1InternalUsageBiDatasetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InternalUsageBiDatasetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['bi-datasets'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageBiDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageBiDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageBiDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageBiDatasetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['bi-datasets'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InternalUsageBiExperimentsQueryKey() {
  return ['v1', '/v1/internal/usage/bi-experiments'] as const
}

export function getV1InternalUsageBiExperimentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InternalUsageBiExperimentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['bi-experiments'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageBiExperiments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageBiExperimentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageBiExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageBiExperimentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['bi-experiments'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InternalUsageBiSpansQueryKey() {
  return ['v1', '/v1/internal/usage/bi-spans'] as const
}

export function getV1InternalUsageBiSpansQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InternalUsageBiSpansQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['bi-spans'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageBiSpans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageBiSpansQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageBiSpansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageBiSpansQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['bi-spans'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InternalUsageWorkspaceSpanCountsBreakdownQueryKey() {
  return ['v1', '/v1/internal/usage/workspace-span-counts-breakdown'] as const
}

export function getV1InternalUsageWorkspaceSpanCountsBreakdownQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getV1InternalUsageWorkspaceSpanCountsBreakdownQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['workspace-span-counts-breakdown'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageWorkspaceSpanCountsBreakdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']>
        >
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
                Awaited<
                  ReturnType<
                    (typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']
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
                    (typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageWorkspaceSpanCountsBreakdownQueryKey>
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
            ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageWorkspaceSpanCountsBreakdownQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageWorkspaceSpanCountsBreakdownQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['workspace-span-counts-breakdown'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InternalUsageWorkspaceSpanCountsQueryKey() {
  return ['v1', '/v1/internal/usage/workspace-span-counts'] as const
}

export function getV1InternalUsageWorkspaceSpanCountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InternalUsageWorkspaceSpanCountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['workspace-span-counts'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageWorkspaceSpanCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>>
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
                Awaited<
                  ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>
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
                  ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageWorkspaceSpanCountsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageWorkspaceSpanCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageWorkspaceSpanCountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['workspace-span-counts'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InternalUsageBiTracesQueryKey() {
  return ['v1', '/v1/internal/usage/bi-traces'] as const
}

export function getV1InternalUsageBiTracesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InternalUsageBiTracesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['bi-traces'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageBiTraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageBiTracesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageBiTracesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageBiTracesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['bi-traces'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InternalUsageWorkspaceTraceCountsQueryKey() {
  return ['v1', '/v1/internal/usage/workspace-trace-counts'] as const
}

export function getV1InternalUsageWorkspaceTraceCountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InternalUsageWorkspaceTraceCountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.internal.usage['workspace-trace-counts'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InternalUsageWorkspaceTraceCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>>
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
                Awaited<
                  ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>
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
                  ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1InternalUsageWorkspaceTraceCountsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InternalUsageWorkspaceTraceCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InternalUsageWorkspaceTraceCountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.internal.usage['workspace-trace-counts'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAgentConfigsBlueprintsMutationKey() {
  return ['v1', '/v1/private/agent-configs/blueprints', 'POST'] as const
}

export function getPostV1PrivateAgentConfigsBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentConfigsBlueprintsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>,
    ) {
      return parseResponse(client.v1.private['agent-configs'].blueprints.$post(args, options))
    },
  })
}

export function usePostV1PrivateAgentConfigsBlueprints<
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
                  ReturnType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAgentConfigsBlueprintsMutationOptions<
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

export function getPatchV1PrivateAgentConfigsBlueprintsMutationKey() {
  return ['v1', '/v1/private/agent-configs/blueprints', 'PATCH'] as const
}

export function getPatchV1PrivateAgentConfigsBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateAgentConfigsBlueprintsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>,
    ) {
      return parseResponse(client.v1.private['agent-configs'].blueprints.$patch(args, options))
    },
  })
}

export function usePatchV1PrivateAgentConfigsBlueprints<
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
                  ReturnType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateAgentConfigsBlueprintsMutationOptions<
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

export function getPostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdMutationKey() {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/projects/:project_id/masks/:mask_id',
    'POST',
  ] as const
}

export function getPostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.projects[':project_id'].masks[
          ':mask_id'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskId<
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
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
    getPostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdMutationOptions<
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

export function getPostV1PrivateAgentConfigsBlueprintsEnvironmentsMutationKey() {
  return ['v1', '/v1/private/agent-configs/blueprints/environments', 'POST'] as const
}

export function getPostV1PrivateAgentConfigsBlueprintsEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentConfigsBlueprintsEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.environments.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAgentConfigsBlueprintsEnvironments<
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
                      (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
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
  const mutationDefaults = getPostV1PrivateAgentConfigsBlueprintsEnvironmentsMutationOptions<
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

export function getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id',
    toValue(args),
  ] as const
}

export function getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
          ':project_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdQueryKey
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
              (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
            ':project_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationKey() {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id',
    'PUT',
  ] as const
}

export function getPutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
          ':project_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
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
                      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
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
    getPutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationOptions<
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

export function getDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationKey() {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id',
    'DELETE',
  ] as const
}

export function getDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
          ':project_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
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
                      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
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
    getDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdMutationOptions<
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

export function getV1PrivateAgentConfigsBlueprintsBlueprintIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/agent-configs/blueprints/:blueprint_id', toValue(args)] as const
}

export function getV1PrivateAgentConfigsBlueprintsBlueprintIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAgentConfigsBlueprintsBlueprintIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints[':blueprint_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAgentConfigsBlueprintsBlueprintId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentConfigsBlueprintsBlueprintIdQueryKey>
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
              (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentConfigsBlueprintsBlueprintIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAgentConfigsBlueprintsBlueprintIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-configs'].blueprints[':blueprint_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/projects/:project_id/names/:name',
    toValue(args),
  ] as const
}

export function getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.projects[':project_id'].names[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameQueryKey>
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
              (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-configs'].blueprints.projects[':project_id'].names[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/history/projects/:project_id',
    toValue(args),
  ] as const
}

export function getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.history.projects[':project_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdQueryKey>
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
              (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-configs'].blueprints.history.projects[':project_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/agent-configs/blueprints/:blueprint_id/deltas', toValue(args)] as const
}

export function getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints[':blueprint_id'].deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAgentConfigsBlueprintsBlueprintIdDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasQueryKey>
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
              (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-configs'].blueprints[':blueprint_id'].deltas.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/latest/projects/:project_id',
    toValue(args),
  ] as const
}

export function getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints.latest.projects[':project_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PrivateAgentConfigsBlueprintsLatestProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
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
                    (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdQueryKey>
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
              (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-configs'].blueprints.latest.projects[':project_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAgentConfigsBlueprintsRemoveKeysMutationKey() {
  return ['v1', '/v1/private/agent-configs/blueprints/remove-keys', 'POST'] as const
}

export function getPostV1PrivateAgentConfigsBlueprintsRemoveKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentConfigsBlueprintsRemoveKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-configs'].blueprints['remove-keys'].$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAgentConfigsBlueprintsRemoveKeys<
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
                      (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
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
  const mutationDefaults = getPostV1PrivateAgentConfigsBlueprintsRemoveKeysMutationOptions<
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

export function getV1PrivateAgentInsightsJobsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
  >,
) {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId', toValue(args)] as const
}

export function getV1PrivateAgentInsightsJobsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAgentInsightsJobsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-insights'].jobs[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAgentInsightsJobsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
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
                    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']
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
                    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentInsightsJobsProjectIdQueryKey>
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
            ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentInsightsJobsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAgentInsightsJobsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAgentInsightsJobsProjectIdMutationKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId', 'POST'] as const
}

export function getPostV1PrivateAgentInsightsJobsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentInsightsJobsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-insights'].jobs[':projectId'].$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAgentInsightsJobsProjectId<
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
                    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']
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
  const mutationDefaults = getPostV1PrivateAgentInsightsJobsProjectIdMutationOptions<
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

export function getPatchV1PrivateAgentInsightsJobsProjectIdMutationKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId', 'PATCH'] as const
}

export function getPatchV1PrivateAgentInsightsJobsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateAgentInsightsJobsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-insights'].jobs[':projectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivateAgentInsightsJobsProjectId<
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
                    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']
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
  const mutationDefaults = getPatchV1PrivateAgentInsightsJobsProjectIdMutationOptions<
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

export function getPostV1PrivateAgentInsightsJobsProjectIdTriggerMutationKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId/trigger', 'POST'] as const
}

export function getPostV1PrivateAgentInsightsJobsProjectIdTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentInsightsJobsProjectIdTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-insights'].jobs[':projectId'].trigger.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAgentInsightsJobsProjectIdTrigger<
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
                    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
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
  const mutationDefaults = getPostV1PrivateAgentInsightsJobsProjectIdTriggerMutationOptions<
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

export function getPutV1PrivateAgentInsightsJobsProjectIdGuidanceMutationKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId/guidance', 'PUT'] as const
}

export function getPutV1PrivateAgentInsightsJobsProjectIdGuidanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateAgentInsightsJobsProjectIdGuidanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-insights'].jobs[':projectId'].guidance.$put(args, options),
      )
    },
  })
}

export function usePutV1PrivateAgentInsightsJobsProjectIdGuidance<
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
                    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
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
  const mutationDefaults = getPutV1PrivateAgentInsightsJobsProjectIdGuidanceMutationOptions<
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

export function getV1PrivateAgentInsightsIssuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>
  >,
) {
  return ['v1', '/v1/private/agent-insights/issues', toValue(args)] as const
}

export function getV1PrivateAgentInsightsIssuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAgentInsightsIssuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-insights'].issues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAgentInsightsIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentInsightsIssuesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentInsightsIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAgentInsightsIssuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-insights'].issues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAgentInsightsIssuesMutationKey() {
  return ['v1', '/v1/private/agent-insights/issues', 'POST'] as const
}

export function getPostV1PrivateAgentInsightsIssuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAgentInsightsIssuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$post']>,
    ) {
      return parseResponse(client.v1.private['agent-insights'].issues.$post(args, options))
    },
  })
}

export function usePostV1PrivateAgentInsightsIssues<
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
                    ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAgentInsightsIssuesMutationOptions<
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

export function getV1PrivateAgentInsightsIssuesIssueIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']>
  >,
) {
  return ['v1', '/v1/private/agent-insights/issues/:issue_id', toValue(args)] as const
}

export function getV1PrivateAgentInsightsIssuesIssueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAgentInsightsIssuesIssueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['agent-insights'].issues[':issue_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAgentInsightsIssuesIssueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']>
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
                    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
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
                    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAgentInsightsIssuesIssueIdQueryKey>
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
            ReturnType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAgentInsightsIssuesIssueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAgentInsightsIssuesIssueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['agent-insights'].issues[':issue_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateAgentInsightsIssuesIssueIdMutationKey() {
  return ['v1', '/v1/private/agent-insights/issues/:issue_id', 'PATCH'] as const
}

export function getPatchV1PrivateAgentInsightsIssuesIssueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateAgentInsightsIssuesIssueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private['agent-insights'].issues[':issue_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivateAgentInsightsIssuesIssueId<
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
                      (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']
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
  const mutationDefaults = getPatchV1PrivateAgentInsightsIssuesIssueIdMutationOptions<
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

export function getV1PrivateAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.alerts.$get>>,
) {
  return ['v1', '/v1/private/alerts', toValue(args)] as const
}

export function getV1PrivateAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAlerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateAlertsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAlertsMutationKey() {
  return ['v1', '/v1/private/alerts', 'POST'] as const
}

export function getPostV1PrivateAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private.alerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.alerts.$post>) {
      return parseResponse(client.v1.private.alerts.$post(args, options))
    },
  })
}

export function usePostV1PrivateAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.alerts.$post>,
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
  const mutationDefaults = getPostV1PrivateAlertsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateAlertsDeleteMutationKey() {
  return ['v1', '/v1/private/alerts/delete', 'POST'] as const
}

export function getPostV1PrivateAlertsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.alerts.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAlertsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.alerts.delete.$post>) {
      return parseResponse(client.v1.private.alerts.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateAlertsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.alerts.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.alerts.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateAlertsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateAlertsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/alerts/:id', toValue(args)] as const
}

export function getV1PrivateAlertsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAlertsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.alerts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAlertsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAlertsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAlertsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAlertsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.alerts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateAlertsIdMutationKey() {
  return ['v1', '/v1/private/alerts/:id', 'PUT'] as const
}

export function getPutV1PrivateAlertsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.alerts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateAlertsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.alerts)[':id']['$put']>) {
      return parseResponse(client.v1.private.alerts[':id'].$put(args, options))
    },
  })
}

export function usePutV1PrivateAlertsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.alerts)[':id']['$put']>,
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
  const mutationDefaults = getPutV1PrivateAlertsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateAlertsWebhooksExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>>,
) {
  return ['v1', '/v1/private/alerts/webhooks/examples', toValue(args)] as const
}

export function getV1PrivateAlertsWebhooksExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAlertsWebhooksExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.alerts.webhooks.examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAlertsWebhooksExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAlertsWebhooksExamplesQueryKey>
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
          Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAlertsWebhooksExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAlertsWebhooksExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.alerts.webhooks.examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAlertsWebhooksTestsMutationKey() {
  return ['v1', '/v1/private/alerts/webhooks/tests', 'POST'] as const
}

export function getPostV1PrivateAlertsWebhooksTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.tests.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.alerts.webhooks.tests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAlertsWebhooksTestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.alerts.webhooks.tests.$post>) {
      return parseResponse(client.v1.private.alerts.webhooks.tests.$post(args, options))
    },
  })
}

export function usePostV1PrivateAlertsWebhooksTests<
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
                Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.tests.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.alerts.webhooks.tests.$post>,
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
  const mutationDefaults = getPostV1PrivateAlertsWebhooksTestsMutationOptions<
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

export function getPostV1PrivateAnnotationQueuesIdItemsAddMutationKey() {
  return ['v1', '/v1/private/annotation-queues/:id/items/add', 'POST'] as const
}

export function getPostV1PrivateAnnotationQueuesIdItemsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAnnotationQueuesIdItemsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['annotation-queues'][':id'].items.add.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAnnotationQueuesIdItemsAdd<
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
                      (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
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
  const mutationDefaults = getPostV1PrivateAnnotationQueuesIdItemsAddMutationOptions<
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

export function getV1PrivateAnnotationQueuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>>,
) {
  return ['v1', '/v1/private/annotation-queues', toValue(args)] as const
}

export function getV1PrivateAnnotationQueuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAnnotationQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['annotation-queues'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAnnotationQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAnnotationQueuesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAnnotationQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAnnotationQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['annotation-queues'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAnnotationQueuesMutationKey() {
  return ['v1', '/v1/private/annotation-queues', 'POST'] as const
}

export function getPostV1PrivateAnnotationQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['annotation-queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAnnotationQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['annotation-queues']['$post']>,
    ) {
      return parseResponse(client.v1.private['annotation-queues'].$post(args, options))
    },
  })
}

export function usePostV1PrivateAnnotationQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['annotation-queues']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAnnotationQueuesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateAnnotationQueuesBatchMutationKey() {
  return ['v1', '/v1/private/annotation-queues/batch', 'POST'] as const
}

export function getPostV1PrivateAnnotationQueuesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAnnotationQueuesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>,
    ) {
      return parseResponse(client.v1.private['annotation-queues'].batch.$post(args, options))
    },
  })
}

export function usePostV1PrivateAnnotationQueuesBatch<
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
                    ReturnType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAnnotationQueuesBatchMutationOptions<
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

export function getPostV1PrivateAnnotationQueuesDeleteMutationKey() {
  return ['v1', '/v1/private/annotation-queues/delete', 'POST'] as const
}

export function getPostV1PrivateAnnotationQueuesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAnnotationQueuesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>,
    ) {
      return parseResponse(client.v1.private['annotation-queues'].delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateAnnotationQueuesDelete<
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
                    ReturnType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAnnotationQueuesDeleteMutationOptions<
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

export function getV1PrivateAnnotationQueuesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/private/annotation-queues/:id', toValue(args)] as const
}

export function getV1PrivateAnnotationQueuesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAnnotationQueuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['annotation-queues'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAnnotationQueuesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAnnotationQueuesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAnnotationQueuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAnnotationQueuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['annotation-queues'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateAnnotationQueuesIdMutationKey() {
  return ['v1', '/v1/private/annotation-queues/:id', 'PATCH'] as const
}

export function getPatchV1PrivateAnnotationQueuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateAnnotationQueuesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>,
    ) {
      return parseResponse(client.v1.private['annotation-queues'][':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateAnnotationQueuesId<
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
                    ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateAnnotationQueuesIdMutationOptions<
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

export function getV1PrivateAnnotationQueuesQueueIdLocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']>
  >,
) {
  return ['v1', '/v1/private/annotation-queues/:queueId/locks', toValue(args)] as const
}

export function getV1PrivateAnnotationQueuesQueueIdLocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAnnotationQueuesQueueIdLocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['annotation-queues'][':queueId'].locks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAnnotationQueuesQueueIdLocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']>
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
                    (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
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
                    (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAnnotationQueuesQueueIdLocksQueryKey>
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
            ReturnType<(typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAnnotationQueuesQueueIdLocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAnnotationQueuesQueueIdLocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['annotation-queues'][':queueId'].locks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateAnnotationQueuesQueueIdItemsItemIdLockMutationKey() {
  return ['v1', '/v1/private/annotation-queues/:queueId/items/:itemId/lock', 'PUT'] as const
}

export function getPutV1PrivateAnnotationQueuesQueueIdItemsItemIdLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateAnnotationQueuesQueueIdItemsItemIdLockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.private['annotation-queues'][':queueId'].items[':itemId'].lock.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1PrivateAnnotationQueuesQueueIdItemsItemIdLock<
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
                    (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
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
  const mutationDefaults = getPutV1PrivateAnnotationQueuesQueueIdItemsItemIdLockMutationOptions<
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

export function getPostV1PrivateAnnotationQueuesIdItemsDeleteMutationKey() {
  return ['v1', '/v1/private/annotation-queues/:id/items/delete', 'POST'] as const
}

export function getPostV1PrivateAnnotationQueuesIdItemsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAnnotationQueuesIdItemsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['annotation-queues'][':id'].items.delete.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAnnotationQueuesIdItemsDelete<
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
                      (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
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
  const mutationDefaults = getPostV1PrivateAnnotationQueuesIdItemsDeleteMutationOptions<
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

export function getPostV1PrivateAnnotationQueuesIdItemsSearchMutationKey() {
  return ['v1', '/v1/private/annotation-queues/:id/items/search', 'POST'] as const
}

export function getPostV1PrivateAnnotationQueuesIdItemsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAnnotationQueuesIdItemsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['annotation-queues'][':id'].items.search.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateAnnotationQueuesIdItemsSearch<
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
                    (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
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
  const mutationDefaults = getPostV1PrivateAnnotationQueuesIdItemsSearchMutationOptions<
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

export function getPutV1PrivateAssertionResultsMutationKey() {
  return ['v1', '/v1/private/assertion-results', 'PUT'] as const
}

export function getPutV1PrivateAssertionResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['assertion-results']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['assertion-results']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateAssertionResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['assertion-results']['$put']>,
    ) {
      return parseResponse(client.v1.private['assertion-results'].$put(args, options))
    },
  })
}

export function usePutV1PrivateAssertionResults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private)['assertion-results']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['assertion-results']['$put']>,
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
  const mutationDefaults = getPutV1PrivateAssertionResultsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateAttachmentListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.attachment.list.$get>>,
) {
  return ['v1', '/v1/private/attachment/list', toValue(args)] as const
}

export function getV1PrivateAttachmentListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.attachment.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAttachmentListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.attachment.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAttachmentList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.attachment.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAttachmentListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAttachmentListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAttachmentListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.attachment.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAttachmentUploadCompleteMutationKey() {
  return ['v1', '/v1/private/attachment/upload-complete', 'POST'] as const
}

export function getPostV1PrivateAttachmentUploadCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.attachment)['upload-complete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.attachment)['upload-complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAttachmentUploadCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.attachment)['upload-complete']['$post']>,
    ) {
      return parseResponse(client.v1.private.attachment['upload-complete'].$post(args, options))
    },
  })
}

export function usePostV1PrivateAttachmentUploadComplete<
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
                    ReturnType<(typeof client.v1.private.attachment)['upload-complete']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.attachment)['upload-complete']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAttachmentUploadCompleteMutationOptions<
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

export function getPostV1PrivateAttachmentDeleteMutationKey() {
  return ['v1', '/v1/private/attachment/delete', 'POST'] as const
}

export function getPostV1PrivateAttachmentDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.attachment.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.attachment.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAttachmentDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.attachment.delete.$post>) {
      return parseResponse(client.v1.private.attachment.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateAttachmentDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.attachment.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.attachment.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateAttachmentDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateAttachmentDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.attachment.download.$get>>,
) {
  return ['v1', '/v1/private/attachment/download', toValue(args)] as const
}

export function getV1PrivateAttachmentDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.attachment.download.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAttachmentDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.attachment.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAttachmentDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.attachment.download.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAttachmentDownloadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAttachmentDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAttachmentDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.attachment.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAttachmentUploadStartMutationKey() {
  return ['v1', '/v1/private/attachment/upload-start', 'POST'] as const
}

export function getPostV1PrivateAttachmentUploadStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.attachment)['upload-start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.attachment)['upload-start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAttachmentUploadStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.attachment)['upload-start']['$post']>,
    ) {
      return parseResponse(client.v1.private.attachment['upload-start'].$post(args, options))
    },
  })
}

export function usePostV1PrivateAttachmentUploadStart<
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
                Awaited<ReturnType<(typeof client.v1.private.attachment)['upload-start']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.attachment)['upload-start']['$post']>,
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
  const mutationDefaults = getPostV1PrivateAttachmentUploadStartMutationOptions<
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

export function getPutV1PrivateAttachmentUploadMutationKey() {
  return ['v1', '/v1/private/attachment/upload', 'PUT'] as const
}

export function getPutV1PrivateAttachmentUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.upload.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.attachment.upload.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateAttachmentUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.attachment.upload.$put>) {
      return parseResponse(client.v1.private.attachment.upload.$put(args, options))
    },
  })
}

export function usePutV1PrivateAttachmentUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.attachment.upload.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.attachment.upload.$put>,
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
  const mutationDefaults = getPutV1PrivateAttachmentUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateAuthMutationKey() {
  return ['v1', '/v1/private/auth', 'POST'] as const
}

export function getPostV1PrivateAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.auth.$post>) {
      return parseResponse(client.v1.private.auth.$post(args, options))
    },
  })
}

export function usePostV1PrivateAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.auth.$post>,
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
  const mutationDefaults = getPostV1PrivateAuthMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateAuthWorkspaceQueryKey() {
  return ['v1', '/v1/private/auth/workspace'] as const
}

export function getV1PrivateAuthWorkspaceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateAuthWorkspaceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.auth.workspace.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAuthWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>>
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
                Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAuthWorkspaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAuthWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateAuthWorkspaceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.auth.workspace.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateAutomationsEvaluatorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.automations.evaluators.$get>>,
) {
  return ['v1', '/v1/private/automations/evaluators', toValue(args)] as const
}

export function getV1PrivateAutomationsEvaluatorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.automations.evaluators.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAutomationsEvaluatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.automations.evaluators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAutomationsEvaluators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.automations.evaluators.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateAutomationsEvaluatorsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAutomationsEvaluatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAutomationsEvaluatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.automations.evaluators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateAutomationsEvaluatorsMutationKey() {
  return ['v1', '/v1/private/automations/evaluators', 'POST'] as const
}

export function getPostV1PrivateAutomationsEvaluatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.automations.evaluators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAutomationsEvaluatorsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.automations.evaluators.$post>,
    ) {
      return parseResponse(client.v1.private.automations.evaluators.$post(args, options))
    },
  })
}

export function usePostV1PrivateAutomationsEvaluators<
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
                Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.automations.evaluators.$post>,
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
  const mutationDefaults = getPostV1PrivateAutomationsEvaluatorsMutationOptions<
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

export function getPostV1PrivateAutomationsEvaluatorsDeleteMutationKey() {
  return ['v1', '/v1/private/automations/evaluators/delete', 'POST'] as const
}

export function getPostV1PrivateAutomationsEvaluatorsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.automations.evaluators.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.automations.evaluators.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateAutomationsEvaluatorsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.automations.evaluators.delete.$post>,
    ) {
      return parseResponse(client.v1.private.automations.evaluators.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateAutomationsEvaluatorsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.automations.evaluators.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.automations.evaluators.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateAutomationsEvaluatorsDeleteMutationOptions<
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

export function getV1PrivateAutomationsEvaluatorsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/private/automations/evaluators/:id', toValue(args)] as const
}

export function getV1PrivateAutomationsEvaluatorsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAutomationsEvaluatorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.automations.evaluators[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAutomationsEvaluatorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>
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
                  ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAutomationsEvaluatorsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAutomationsEvaluatorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAutomationsEvaluatorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.automations.evaluators[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateAutomationsEvaluatorsIdMutationKey() {
  return ['v1', '/v1/private/automations/evaluators/:id', 'PATCH'] as const
}

export function getPatchV1PrivateAutomationsEvaluatorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateAutomationsEvaluatorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.private.automations.evaluators[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateAutomationsEvaluatorsId<
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
                    ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateAutomationsEvaluatorsIdMutationOptions<
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

export function getV1PrivateAutomationsEvaluatorsIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/private/automations/evaluators/:id/logs', toValue(args)] as const
}

export function getV1PrivateAutomationsEvaluatorsIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateAutomationsEvaluatorsIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.automations.evaluators[':id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateAutomationsEvaluatorsIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
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
                    (typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']
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
                    (typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateAutomationsEvaluatorsIdLogsQueryKey>
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
            ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateAutomationsEvaluatorsIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateAutomationsEvaluatorsIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.automations.evaluators[':id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateChatCompletionsMutationKey() {
  return ['v1', '/v1/private/chat/completions', 'POST'] as const
}

export function getPostV1PrivateChatCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.chat.completions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.chat.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateChatCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.chat.completions.$post>) {
      return parseResponse(client.v1.private.chat.completions.$post(args, options))
    },
  })
}

export function usePostV1PrivateChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.chat.completions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.chat.completions.$post>,
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
  const mutationDefaults = getPostV1PrivateChatCompletionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateDashboardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.dashboards.$get>>,
) {
  return ['v1', '/v1/private/dashboards', toValue(args)] as const
}

export function getV1PrivateDashboardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.dashboards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDashboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.dashboards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.dashboards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateDashboardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDashboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.dashboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateDashboardsMutationKey() {
  return ['v1', '/v1/private/dashboards', 'POST'] as const
}

export function getPostV1PrivateDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.dashboards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.dashboards.$post>) {
      return parseResponse(client.v1.private.dashboards.$post(args, options))
    },
  })
}

export function usePostV1PrivateDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.dashboards.$post>,
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
  const mutationDefaults = getPostV1PrivateDashboardsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateDashboardsDashboardIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>
  >,
) {
  return ['v1', '/v1/private/dashboards/:dashboardId', toValue(args)] as const
}

export function getV1PrivateDashboardsDashboardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDashboardsDashboardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.dashboards[':dashboardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateDashboardsDashboardIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDashboardsDashboardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDashboardsDashboardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.dashboards[':dashboardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateDashboardsDashboardIdMutationKey() {
  return ['v1', '/v1/private/dashboards/:dashboardId', 'DELETE'] as const
}

export function getDeleteV1PrivateDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>,
    ) {
      return parseResponse(client.v1.private.dashboards[':dashboardId'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateDashboardsDashboardId<
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
                    ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateDashboardsDashboardIdMutationOptions<
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

export function getPatchV1PrivateDashboardsDashboardIdMutationKey() {
  return ['v1', '/v1/private/dashboards/:dashboardId', 'PATCH'] as const
}

export function getPatchV1PrivateDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>,
    ) {
      return parseResponse(client.v1.private.dashboards[':dashboardId'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateDashboardsDashboardId<
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
                Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateDashboardsDashboardIdMutationOptions<
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

export function getPostV1PrivateDashboardsDeleteBatchMutationKey() {
  return ['v1', '/v1/private/dashboards/delete-batch', 'POST'] as const
}

export function getPostV1PrivateDashboardsDeleteBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDashboardsDeleteBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>,
    ) {
      return parseResponse(client.v1.private.dashboards['delete-batch'].$post(args, options))
    },
  })
}

export function usePostV1PrivateDashboardsDeleteBatch<
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
                    ReturnType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDashboardsDeleteBatchMutationOptions<
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

export function getPostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryMutationKey() {
  return ['v1', '/v1/private/dashboards/:dashboardId/widgets/:widgetId/query', 'POST'] as const
}

export function getPostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.dashboards[':dashboardId'].widgets[':widgetId'].query.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQuery<
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
                    (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
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
  const mutationDefaults = getPostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryMutationOptions<
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

export function getPostV1PrivateDatasetsIdItemsChangesMutationKey() {
  return ['v1', '/v1/private/datasets/:id/items/changes', 'POST'] as const
}

export function getPostV1PrivateDatasetsIdItemsChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private.datasets)[':id']['items']['changes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['changes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsIdItemsChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':id']['items']['changes']['$post']
      >,
    ) {
      return parseResponse(client.v1.private.datasets[':id'].items.changes.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsIdItemsChanges<
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
                    (typeof client.v1.private.datasets)[':id']['items']['changes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['changes']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDatasetsIdItemsChangesMutationOptions<
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

export function getPatchV1PrivateDatasetsItemsBatchMutationKey() {
  return ['v1', '/v1/private/datasets/items/batch', 'PATCH'] as const
}

export function getPatchV1PrivateDatasetsItemsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.datasets.items.batch.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.datasets.items.batch.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateDatasetsItemsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.items.batch.$patch>) {
      return parseResponse(client.v1.private.datasets.items.batch.$patch(args, options))
    },
  })
}

export function usePatchV1PrivateDatasetsItemsBatch<
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
                  Awaited<ReturnType<typeof client.v1.private.datasets.items.batch.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.datasets.items.batch.$patch>,
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
  const mutationDefaults = getPatchV1PrivateDatasetsItemsBatchMutationOptions<
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

export function getV1PrivateDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.datasets.$get>>,
) {
  return ['v1', '/v1/private/datasets', toValue(args)] as const
}

export function getV1PrivateDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateDatasetsMutationKey() {
  return ['v1', '/v1/private/datasets', 'POST'] as const
}

export function getPostV1PrivateDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.$post>) {
      return parseResponse(client.v1.private.datasets.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.datasets.$post>,
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
  const mutationDefaults = getPostV1PrivateDatasetsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1PrivateDatasetsItemsMutationKey() {
  return ['v1', '/v1/private/datasets/items', 'PUT'] as const
}

export function getPutV1PrivateDatasetsItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.items.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.datasets.items.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateDatasetsItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.items.$put>) {
      return parseResponse(client.v1.private.datasets.items.$put(args, options))
    },
  })
}

export function usePutV1PrivateDatasetsItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.datasets.items.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.datasets.items.$put>,
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
  const mutationDefaults = getPutV1PrivateDatasetsItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateDatasetsItemsFromCsvMutationKey() {
  return ['v1', '/v1/private/datasets/items/from-csv', 'POST'] as const
}

export function getPostV1PrivateDatasetsItemsFromCsvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsItemsFromCsvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>,
    ) {
      return parseResponse(client.v1.private.datasets.items['from-csv'].$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsItemsFromCsv<
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
                Awaited<ReturnType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDatasetsItemsFromCsvMutationOptions<
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

export function getPostV1PrivateDatasetsItemsFromJsonMutationKey() {
  return ['v1', '/v1/private/datasets/items/from-json', 'POST'] as const
}

export function getPostV1PrivateDatasetsItemsFromJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets.items)['from-json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets.items)['from-json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsItemsFromJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets.items)['from-json']['$post']>,
    ) {
      return parseResponse(client.v1.private.datasets.items['from-json'].$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsItemsFromJson<
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
                Awaited<ReturnType<(typeof client.v1.private.datasets.items)['from-json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.datasets.items)['from-json']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDatasetsItemsFromJsonMutationOptions<
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

export function getPostV1PrivateDatasetsDatasetIdItemsFromSpansMutationKey() {
  return ['v1', '/v1/private/datasets/:dataset_id/items/from-spans', 'POST'] as const
}

export function getPostV1PrivateDatasetsDatasetIdItemsFromSpansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsDatasetIdItemsFromSpansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.datasets[':dataset_id'].items['from-spans'].$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateDatasetsDatasetIdItemsFromSpans<
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
                      (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
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
  const mutationDefaults = getPostV1PrivateDatasetsDatasetIdItemsFromSpansMutationOptions<
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

export function getPostV1PrivateDatasetsDatasetIdItemsFromTracesMutationKey() {
  return ['v1', '/v1/private/datasets/:dataset_id/items/from-traces', 'POST'] as const
}

export function getPostV1PrivateDatasetsDatasetIdItemsFromTracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsDatasetIdItemsFromTracesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.datasets[':dataset_id'].items['from-traces'].$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateDatasetsDatasetIdItemsFromTraces<
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
                      (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
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
  const mutationDefaults = getPostV1PrivateDatasetsDatasetIdItemsFromTracesMutationOptions<
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

export function getV1PrivateDatasetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/datasets/:id', toValue(args)] as const
}

export function getV1PrivateDatasetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateDatasetsIdMutationKey() {
  return ['v1', '/v1/private/datasets/:id', 'PUT'] as const
}

export function getPutV1PrivateDatasetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateDatasetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$put']>) {
      return parseResponse(client.v1.private.datasets[':id'].$put(args, options))
    },
  })
}

export function usePutV1PrivateDatasetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.datasets)[':id']['$put']>,
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
  const mutationDefaults = getPutV1PrivateDatasetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PrivateDatasetsIdMutationKey() {
  return ['v1', '/v1/private/datasets/:id', 'DELETE'] as const
}

export function getDeleteV1PrivateDatasetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateDatasetsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.private.datasets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateDatasetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.datasets)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateDatasetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateDatasetsDeleteMutationKey() {
  return ['v1', '/v1/private/datasets/delete', 'POST'] as const
}

export function getPostV1PrivateDatasetsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.datasets.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.delete.$post>) {
      return parseResponse(client.v1.private.datasets.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.datasets.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.datasets.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateDatasetsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateDatasetsItemsDeleteMutationKey() {
  return ['v1', '/v1/private/datasets/items/delete', 'POST'] as const
}

export function getPostV1PrivateDatasetsItemsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.datasets.items.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.datasets.items.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsItemsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.items.delete.$post>) {
      return parseResponse(client.v1.private.datasets.items.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsItemsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.datasets.items.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.datasets.items.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateDatasetsItemsDeleteMutationOptions<
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

export function getPostV1PrivateDatasetsDeleteBatchMutationKey() {
  return ['v1', '/v1/private/datasets/delete-batch', 'POST'] as const
}

export function getPostV1PrivateDatasetsDeleteBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)['delete-batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)['delete-batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsDeleteBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets)['delete-batch']['$post']>,
    ) {
      return parseResponse(client.v1.private.datasets['delete-batch'].$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsDeleteBatch<
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
                  Awaited<ReturnType<(typeof client.v1.private.datasets)['delete-batch']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.datasets)['delete-batch']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDatasetsDeleteBatchMutationOptions<
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

export function getV1PrivateDatasetsExportJobsJobIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/datasets/export-jobs/:jobId/download', toValue(args)] as const
}

export function getV1PrivateDatasetsExportJobsJobIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsExportJobsJobIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets['export-jobs'][':jobId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsExportJobsJobIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
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
                    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
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
                    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsExportJobsJobIdDownloadQueryKey>
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
              (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsExportJobsJobIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsExportJobsJobIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets['export-jobs'][':jobId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateDatasetsIdExpansionsMutationKey() {
  return ['v1', '/v1/private/datasets/:id/expansions', 'POST'] as const
}

export function getPostV1PrivateDatasetsIdExpansionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsIdExpansionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>,
    ) {
      return parseResponse(client.v1.private.datasets[':id'].expansions.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsIdExpansions<
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
                  ReturnType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDatasetsIdExpansionsMutationOptions<
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

export function getV1PrivateDatasetsIdItemsExperimentsItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/datasets/:id/items/experiments/items', toValue(args)] as const
}

export function getV1PrivateDatasetsIdItemsExperimentsItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdItemsExperimentsItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].items.experiments.items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsIdItemsExperimentsItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdItemsExperimentsItemsQueryKey>
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
              (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdItemsExperimentsItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdItemsExperimentsItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].items.experiments.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateDatasetsRetrieveMutationKey() {
  return ['v1', '/v1/private/datasets/retrieve', 'POST'] as const
}

export function getPostV1PrivateDatasetsRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.retrieve.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.datasets.retrieve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsRetrieveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.retrieve.$post>) {
      return parseResponse(client.v1.private.datasets.retrieve.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsRetrieve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.datasets.retrieve.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.datasets.retrieve.$post>,
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
  const mutationDefaults = getPostV1PrivateDatasetsRetrieveMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateDatasetsIdItemsExperimentsItemsStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/datasets/:id/items/experiments/items/stats', toValue(args)] as const
}

export function getV1PrivateDatasetsIdItemsExperimentsItemsStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdItemsExperimentsItemsStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].items.experiments.items.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsIdItemsExperimentsItemsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdItemsExperimentsItemsStatsQueryKey>
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
              (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdItemsExperimentsItemsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdItemsExperimentsItemsStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].items.experiments.items.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateDatasetsExportJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
  >,
) {
  return ['v1', '/v1/private/datasets/export-jobs/:jobId', toValue(args)] as const
}

export function getV1PrivateDatasetsExportJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsExportJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets['export-jobs'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsExportJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
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
                  ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsExportJobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsExportJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsExportJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets['export-jobs'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateDatasetsExportJobsQueryKey() {
  return ['v1', '/v1/private/datasets/export-jobs'] as const
}

export function getV1PrivateDatasetsExportJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateDatasetsExportJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets['export-jobs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsExportJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsExportJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsExportJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateDatasetsExportJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets['export-jobs'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateDatasetsItemsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>
  >,
) {
  return ['v1', '/v1/private/datasets/items/:itemId', toValue(args)] as const
}

export function getV1PrivateDatasetsItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets.items[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsItemsItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets.items[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateDatasetsItemsItemIdMutationKey() {
  return ['v1', '/v1/private/datasets/items/:itemId', 'PATCH'] as const
}

export function getPatchV1PrivateDatasetsItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateDatasetsItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>,
    ) {
      return parseResponse(client.v1.private.datasets.items[':itemId'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateDatasetsItemsItemId<
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
                    ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateDatasetsItemsItemIdMutationOptions<
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

export function getV1PrivateDatasetsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>
  >,
) {
  return ['v1', '/v1/private/datasets/:id/items', toValue(args)] as const
}

export function getV1PrivateDatasetsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/datasets/:id/items/experiments/items/output/columns',
    toValue(args),
  ] as const
}

export function getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].items.experiments.items.output.columns.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PrivateDatasetsIdItemsExperimentsItemsOutputColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsQueryKey>
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
              (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].items.experiments.items.output.columns.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateDatasetsExportJobsJobIdMarkViewedMutationKey() {
  return ['v1', '/v1/private/datasets/export-jobs/:jobId/mark-viewed', 'PUT'] as const
}

export function getPutV1PrivateDatasetsExportJobsJobIdMarkViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateDatasetsExportJobsJobIdMarkViewedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.private.datasets['export-jobs'][':jobId']['mark-viewed'].$put(args, options),
      )
    },
  })
}

export function usePutV1PrivateDatasetsExportJobsJobIdMarkViewed<
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
                      (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
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
  const mutationDefaults = getPutV1PrivateDatasetsExportJobsJobIdMarkViewedMutationOptions<
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

export function getPostV1PrivateDatasetsIdExportMutationKey() {
  return ['v1', '/v1/private/datasets/:id/export', 'POST'] as const
}

export function getPostV1PrivateDatasetsIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.datasets)[':id']['export']['$post']>,
    ) {
      return parseResponse(client.v1.private.datasets[':id'].export.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.datasets)[':id']['export']['$post']>,
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
  const mutationDefaults = getPostV1PrivateDatasetsIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateDatasetsItemsStreamMutationKey() {
  return ['v1', '/v1/private/datasets/items/stream', 'POST'] as const
}

export function getPostV1PrivateDatasetsItemsStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.datasets.items.stream.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.datasets.items.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsItemsStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.datasets.items.stream.$post>) {
      return parseResponse(client.v1.private.datasets.items.stream.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsItemsStream<
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
                Awaited<ReturnType<typeof client.v1.private.datasets.items.stream.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.datasets.items.stream.$post>,
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
  const mutationDefaults = getPostV1PrivateDatasetsItemsStreamMutationOptions<
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

export function getV1PrivateDatasetsIdVersionsDiffQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
  >,
) {
  return ['v1', '/v1/private/datasets/:id/versions/diff', toValue(args)] as const
}

export function getV1PrivateDatasetsIdVersionsDiffQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdVersionsDiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].versions.diff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsIdVersionsDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
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
                  ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdVersionsDiffQueryKey>
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
            ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdVersionsDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdVersionsDiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].versions.diff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateDatasetsIdVersionsHashVersionHashTagsMutationKey() {
  return ['v1', '/v1/private/datasets/:id/versions/hash/:versionHash/tags', 'POST'] as const
}

export function getPostV1PrivateDatasetsIdVersionsHashVersionHashTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsIdVersionsHashVersionHashTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.datasets[':id'].versions.hash[':versionHash'].tags.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateDatasetsIdVersionsHashVersionHashTags<
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
                      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
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
  const mutationDefaults = getPostV1PrivateDatasetsIdVersionsHashVersionHashTagsMutationOptions<
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

export function getDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTagMutationKey() {
  return ['v1', '/v1/private/datasets/:id/versions/:versionHash/tags/:tag', 'DELETE'] as const
}

export function getDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.private.datasets[':id'].versions[':versionHash'].tags[':tag'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTag<
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
                      (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
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
  const mutationDefaults = getDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTagMutationOptions<
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

export function getV1PrivateDatasetsIdVersionsHashVersionHashQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/datasets/:id/versions/hash/:versionHash', toValue(args)] as const
}

export function getV1PrivateDatasetsIdVersionsHashVersionHashQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdVersionsHashVersionHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].versions.hash[':versionHash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsIdVersionsHashVersionHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
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
                    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdVersionsHashVersionHashQueryKey>
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
              (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdVersionsHashVersionHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdVersionsHashVersionHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].versions.hash[':versionHash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateDatasetsIdVersionsHashVersionHashMutationKey() {
  return ['v1', '/v1/private/datasets/:id/versions/hash/:versionHash', 'PATCH'] as const
}

export function getPatchV1PrivateDatasetsIdVersionsHashVersionHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateDatasetsIdVersionsHashVersionHashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private.datasets[':id'].versions.hash[':versionHash'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivateDatasetsIdVersionsHashVersionHash<
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
                    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
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
  const mutationDefaults = getPatchV1PrivateDatasetsIdVersionsHashVersionHashMutationOptions<
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

export function getV1PrivateDatasetsIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/private/datasets/:id/versions', toValue(args)] as const
}

export function getV1PrivateDatasetsIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateDatasetsIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.datasets[':id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateDatasetsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateDatasetsIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateDatasetsIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateDatasetsIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.datasets[':id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateDatasetsIdVersionsRestoreMutationKey() {
  return ['v1', '/v1/private/datasets/:id/versions/restore', 'POST'] as const
}

export function getPostV1PrivateDatasetsIdVersionsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsIdVersionsRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']
      >,
    ) {
      return parseResponse(client.v1.private.datasets[':id'].versions.restore.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsIdVersionsRestore<
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
                    (typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']
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
  const mutationDefaults = getPostV1PrivateDatasetsIdVersionsRestoreMutationOptions<
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

export function getPostV1PrivateDatasetsIdVersionsRetrieveMutationKey() {
  return ['v1', '/v1/private/datasets/:id/versions/retrieve', 'POST'] as const
}

export function getPostV1PrivateDatasetsIdVersionsRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateDatasetsIdVersionsRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']
      >,
    ) {
      return parseResponse(client.v1.private.datasets[':id'].versions.retrieve.$post(args, options))
    },
  })
}

export function usePostV1PrivateDatasetsIdVersionsRetrieve<
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
                    (typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']
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
  const mutationDefaults = getPostV1PrivateDatasetsIdVersionsRetrieveMutationOptions<
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

export function getV1PrivateEnvironmentsQueryKey() {
  return ['v1', '/v1/private/environments'] as const
}

export function getV1PrivateEnvironmentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateEnvironmentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.environments.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateEnvironmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateEnvironmentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.environments.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateEnvironmentsMutationKey() {
  return ['v1', '/v1/private/environments', 'POST'] as const
}

export function getPostV1PrivateEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.environments.$post>) {
      return parseResponse(client.v1.private.environments.$post(args, options))
    },
  })
}

export function usePostV1PrivateEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.environments.$post>,
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
  const mutationDefaults = getPostV1PrivateEnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateEnvironmentsDeleteMutationKey() {
  return ['v1', '/v1/private/environments/delete', 'POST'] as const
}

export function getPostV1PrivateEnvironmentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.environments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.environments.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateEnvironmentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.environments.delete.$post>) {
      return parseResponse(client.v1.private.environments.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateEnvironmentsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.environments.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.environments.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateEnvironmentsDeleteMutationOptions<
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

export function getV1PrivateEnvironmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/environments/:id', toValue(args)] as const
}

export function getV1PrivateEnvironmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateEnvironmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.environments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateEnvironmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateEnvironmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateEnvironmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateEnvironmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.environments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateEnvironmentsIdMutationKey() {
  return ['v1', '/v1/private/environments/:id', 'PATCH'] as const
}

export function getPatchV1PrivateEnvironmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.environments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateEnvironmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.environments)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.private.environments[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateEnvironmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.environments)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateEnvironmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateExperimentsBatchMutationKey() {
  return ['v1', '/v1/private/experiments/batch', 'PATCH'] as const
}

export function getPatchV1PrivateExperimentsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.batch.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.batch.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateExperimentsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.batch.$patch>) {
      return parseResponse(client.v1.private.experiments.batch.$patch(args, options))
    },
  })
}

export function usePatchV1PrivateExperimentsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.experiments.batch.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.batch.$patch>,
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
  const mutationDefaults = getPatchV1PrivateExperimentsBatchMutationOptions<
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

export function getPutV1PrivateExperimentsCancelMutationKey() {
  return ['v1', '/v1/private/experiments/cancel', 'PUT'] as const
}

export function getPutV1PrivateExperimentsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.cancel.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.cancel.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateExperimentsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.cancel.$put>) {
      return parseResponse(client.v1.private.experiments.cancel.$put(args, options))
    },
  })
}

export function usePutV1PrivateExperimentsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.experiments.cancel.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.cancel.$put>,
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
  const mutationDefaults = getPutV1PrivateExperimentsCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateExperimentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.experiments.$get>>,
) {
  return ['v1', '/v1/private/experiments', toValue(args)] as const
}

export function getV1PrivateExperimentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.experiments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateExperimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.experiments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateExperiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.experiments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateExperimentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateExperimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateExperimentsMutationKey() {
  return ['v1', '/v1/private/experiments', 'POST'] as const
}

export function getPostV1PrivateExperimentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.experiments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.$post>) {
      return parseResponse(client.v1.private.experiments.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperiments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.experiments.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateExperimentsItemsMutationKey() {
  return ['v1', '/v1/private/experiments/items', 'POST'] as const
}

export function getPostV1PrivateExperimentsItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.items.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.items.$post>) {
      return parseResponse(client.v1.private.experiments.items.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.experiments.items.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.items.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateExperimentsItemsDeleteMutationKey() {
  return ['v1', '/v1/private/experiments/items/delete', 'POST'] as const
}

export function getPostV1PrivateExperimentsItemsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.items.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.items.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsItemsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.experiments.items.delete.$post>,
    ) {
      return parseResponse(client.v1.private.experiments.items.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsItemsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.experiments.items.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.items.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsItemsDeleteMutationOptions<
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

export function getPostV1PrivateExperimentsDeleteMutationKey() {
  return ['v1', '/v1/private/experiments/delete', 'POST'] as const
}

export function getPostV1PrivateExperimentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.delete.$post>) {
      return parseResponse(client.v1.private.experiments.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.experiments.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsDeleteMutationOptions<
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

export function getPostV1PrivateExperimentsExecuteMutationKey() {
  return ['v1', '/v1/private/experiments/execute', 'POST'] as const
}

export function getPostV1PrivateExperimentsExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.experiments.execute.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.experiments.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.execute.$post>) {
      return parseResponse(client.v1.private.experiments.execute.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsExecute<
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
                Awaited<ReturnType<typeof client.v1.private.experiments.execute.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.experiments.execute.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsExecuteMutationOptions<
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

export function getPutV1PrivateExperimentsItemsBulkMutationKey() {
  return ['v1', '/v1/private/experiments/items/bulk', 'PUT'] as const
}

export function getPutV1PrivateExperimentsItemsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.items.bulk.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.items.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateExperimentsItemsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.items.bulk.$put>) {
      return parseResponse(client.v1.private.experiments.items.bulk.$put(args, options))
    },
  })
}

export function usePutV1PrivateExperimentsItemsBulk<
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
                  Awaited<ReturnType<typeof client.v1.private.experiments.items.bulk.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.items.bulk.$put>,
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
  const mutationDefaults = getPutV1PrivateExperimentsItemsBulkMutationOptions<
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

export function getV1PrivateExperimentsFeedbackScoresNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
  >,
) {
  return ['v1', '/v1/private/experiments/feedback-scores/names', toValue(args)] as const
}

export function getV1PrivateExperimentsFeedbackScoresNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateExperimentsFeedbackScoresNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.experiments['feedback-scores'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateExperimentsFeedbackScoresNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
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
                    (typeof client.v1.private.experiments)['feedback-scores']['names']['$get']
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
                    (typeof client.v1.private.experiments)['feedback-scores']['names']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateExperimentsFeedbackScoresNamesQueryKey>
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
            ReturnType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateExperimentsFeedbackScoresNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateExperimentsFeedbackScoresNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.experiments['feedback-scores'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateExperimentsGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.experiments.groups.$get>>,
) {
  return ['v1', '/v1/private/experiments/groups', toValue(args)] as const
}

export function getV1PrivateExperimentsGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.experiments.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateExperimentsGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.experiments.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateExperimentsGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.experiments.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateExperimentsGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateExperimentsGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateExperimentsGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.experiments.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateExperimentsGroupsAggregationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>
  >,
) {
  return ['v1', '/v1/private/experiments/groups/aggregations', toValue(args)] as const
}

export function getV1PrivateExperimentsGroupsAggregationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateExperimentsGroupsAggregationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.experiments.groups.aggregations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateExperimentsGroupsAggregations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateExperimentsGroupsAggregationsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateExperimentsGroupsAggregationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateExperimentsGroupsAggregationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.experiments.groups.aggregations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateExperimentsFinishMutationKey() {
  return ['v1', '/v1/private/experiments/finish', 'POST'] as const
}

export function getPostV1PrivateExperimentsFinishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.finish.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.experiments.finish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsFinishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.finish.$post>) {
      return parseResponse(client.v1.private.experiments.finish.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsFinish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.experiments.finish.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.experiments.finish.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsFinishMutationOptions<
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

export function getV1PrivateExperimentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/experiments/:id', toValue(args)] as const
}

export function getV1PrivateExperimentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateExperimentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.experiments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateExperimentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateExperimentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateExperimentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateExperimentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.experiments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateExperimentsIdMutationKey() {
  return ['v1', '/v1/private/experiments/:id', 'PATCH'] as const
}

export function getPatchV1PrivateExperimentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.experiments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateExperimentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.experiments)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.private.experiments[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateExperimentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.experiments)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateExperimentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateExperimentsItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/private/experiments/items/:id', toValue(args)] as const
}

export function getV1PrivateExperimentsItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateExperimentsItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.experiments.items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateExperimentsItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateExperimentsItemsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateExperimentsItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateExperimentsItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.experiments.items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateExperimentsItemsStreamMutationKey() {
  return ['v1', '/v1/private/experiments/items/stream', 'POST'] as const
}

export function getPostV1PrivateExperimentsItemsStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.experiments.items.stream.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.experiments.items.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsItemsStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.experiments.items.stream.$post>,
    ) {
      return parseResponse(client.v1.private.experiments.items.stream.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsItemsStream<
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
                Awaited<ReturnType<typeof client.v1.private.experiments.items.stream.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.experiments.items.stream.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsItemsStreamMutationOptions<
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

export function getPostV1PrivateExperimentsStreamMutationKey() {
  return ['v1', '/v1/private/experiments/stream', 'POST'] as const
}

export function getPostV1PrivateExperimentsStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.stream.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.experiments.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateExperimentsStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.experiments.stream.$post>) {
      return parseResponse(client.v1.private.experiments.stream.$post(args, options))
    },
  })
}

export function usePostV1PrivateExperimentsStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.experiments.stream.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.experiments.stream.$post>,
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
  const mutationDefaults = getPostV1PrivateExperimentsStreamMutationOptions<
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

export function getV1PrivateFeedbackDefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>
  >,
) {
  return ['v1', '/v1/private/feedback-definitions', toValue(args)] as const
}

export function getV1PrivateFeedbackDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateFeedbackDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['feedback-definitions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateFeedbackDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateFeedbackDefinitionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateFeedbackDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateFeedbackDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['feedback-definitions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateFeedbackDefinitionsMutationKey() {
  return ['v1', '/v1/private/feedback-definitions', 'POST'] as const
}

export function getPostV1PrivateFeedbackDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateFeedbackDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$post']>,
    ) {
      return parseResponse(client.v1.private['feedback-definitions'].$post(args, options))
    },
  })
}

export function usePostV1PrivateFeedbackDefinitions<
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
                Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['feedback-definitions']['$post']>,
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
  const mutationDefaults = getPostV1PrivateFeedbackDefinitionsMutationOptions<
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

export function getV1PrivateFeedbackDefinitionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/private/feedback-definitions/:id', toValue(args)] as const
}

export function getV1PrivateFeedbackDefinitionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateFeedbackDefinitionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['feedback-definitions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateFeedbackDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateFeedbackDefinitionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateFeedbackDefinitionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateFeedbackDefinitionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['feedback-definitions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateFeedbackDefinitionsIdMutationKey() {
  return ['v1', '/v1/private/feedback-definitions/:id', 'PUT'] as const
}

export function getPutV1PrivateFeedbackDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateFeedbackDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.private['feedback-definitions'][':id'].$put(args, options))
    },
  })
}

export function usePutV1PrivateFeedbackDefinitionsId<
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
                    ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>,
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
  const mutationDefaults = getPutV1PrivateFeedbackDefinitionsIdMutationOptions<
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

export function getDeleteV1PrivateFeedbackDefinitionsIdMutationKey() {
  return ['v1', '/v1/private/feedback-definitions/:id', 'DELETE'] as const
}

export function getDeleteV1PrivateFeedbackDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateFeedbackDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.private['feedback-definitions'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateFeedbackDefinitionsId<
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
                    ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateFeedbackDefinitionsIdMutationOptions<
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

export function getPostV1PrivateFeedbackDefinitionsDeleteMutationKey() {
  return ['v1', '/v1/private/feedback-definitions/delete', 'POST'] as const
}

export function getPostV1PrivateFeedbackDefinitionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['feedback-definitions']['delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateFeedbackDefinitionsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['delete']['$post']>,
    ) {
      return parseResponse(client.v1.private['feedback-definitions'].delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateFeedbackDefinitionsDelete<
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
                      (typeof client.v1.private)['feedback-definitions']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['feedback-definitions']['delete']['$post']>,
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
  const mutationDefaults = getPostV1PrivateFeedbackDefinitionsDeleteMutationOptions<
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

export function getV1PrivateGuardrailsPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.guardrails.policies.$get>>,
) {
  return ['v1', '/v1/private/guardrails/policies', toValue(args)] as const
}

export function getV1PrivateGuardrailsPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.guardrails.policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateGuardrailsPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.guardrails.policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateGuardrailsPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.guardrails.policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateGuardrailsPoliciesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateGuardrailsPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateGuardrailsPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.guardrails.policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateGuardrailsPoliciesMutationKey() {
  return ['v1', '/v1/private/guardrails/policies', 'POST'] as const
}

export function getPostV1PrivateGuardrailsPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.guardrails.policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateGuardrailsPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.guardrails.policies.$post>) {
      return parseResponse(client.v1.private.guardrails.policies.$post(args, options))
    },
  })
}

export function usePostV1PrivateGuardrailsPolicies<
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
                Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.guardrails.policies.$post>,
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
  const mutationDefaults = getPostV1PrivateGuardrailsPoliciesMutationOptions<
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

export function getV1PrivateGuardrailsPoliciesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/private/guardrails/policies/:id', toValue(args)] as const
}

export function getV1PrivateGuardrailsPoliciesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateGuardrailsPoliciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.guardrails.policies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateGuardrailsPoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateGuardrailsPoliciesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateGuardrailsPoliciesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateGuardrailsPoliciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.guardrails.policies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateGuardrailsPoliciesIdMutationKey() {
  return ['v1', '/v1/private/guardrails/policies/:id', 'PUT'] as const
}

export function getPutV1PrivateGuardrailsPoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateGuardrailsPoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>,
    ) {
      return parseResponse(client.v1.private.guardrails.policies[':id'].$put(args, options))
    },
  })
}

export function usePutV1PrivateGuardrailsPoliciesId<
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
                  Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>,
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
  const mutationDefaults = getPutV1PrivateGuardrailsPoliciesIdMutationOptions<
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

export function getDeleteV1PrivateGuardrailsPoliciesIdMutationKey() {
  return ['v1', '/v1/private/guardrails/policies/:id', 'DELETE'] as const
}

export function getDeleteV1PrivateGuardrailsPoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateGuardrailsPoliciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.private.guardrails.policies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateGuardrailsPoliciesId<
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
                    ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateGuardrailsPoliciesIdMutationOptions<
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

export function getPostV1PrivateGuardrailsMutationKey() {
  return ['v1', '/v1/private/guardrails', 'POST'] as const
}

export function getPostV1PrivateGuardrailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.guardrails.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.guardrails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateGuardrailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.guardrails.$post>) {
      return parseResponse(client.v1.private.guardrails.$post(args, options))
    },
  })
}

export function usePostV1PrivateGuardrails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.guardrails.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.guardrails.$post>,
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
  const mutationDefaults = getPostV1PrivateGuardrailsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateGuardrailsValidationsMutationKey() {
  return ['v1', '/v1/private/guardrails/validations', 'POST'] as const
}

export function getPostV1PrivateGuardrailsValidationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.guardrails.validations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.guardrails.validations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateGuardrailsValidationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.guardrails.validations.$post>,
    ) {
      return parseResponse(client.v1.private.guardrails.validations.$post(args, options))
    },
  })
}

export function usePostV1PrivateGuardrailsValidations<
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
                Awaited<ReturnType<typeof client.v1.private.guardrails.validations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.guardrails.validations.$post>,
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
  const mutationDefaults = getPostV1PrivateGuardrailsValidationsMutationOptions<
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

export function getV1PrivateInsightsViewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['insights-views']['$get']>>,
) {
  return ['v1', '/v1/private/insights-views', toValue(args)] as const
}

export function getV1PrivateInsightsViewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['insights-views']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateInsightsViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['insights-views'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateInsightsViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['insights-views']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateInsightsViewsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateInsightsViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateInsightsViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['insights-views'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateInsightsViewsMutationKey() {
  return ['v1', '/v1/private/insights-views', 'POST'] as const
}

export function getPostV1PrivateInsightsViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['insights-views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateInsightsViewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['insights-views']['$post']>,
    ) {
      return parseResponse(client.v1.private['insights-views'].$post(args, options))
    },
  })
}

export function usePostV1PrivateInsightsViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['insights-views']['$post']>,
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
  const mutationDefaults = getPostV1PrivateInsightsViewsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateInsightsViewsInsightsViewIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
  >,
) {
  return ['v1', '/v1/private/insights-views/:insightsViewId', toValue(args)] as const
}

export function getV1PrivateInsightsViewsInsightsViewIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateInsightsViewsInsightsViewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['insights-views'][':insightsViewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateInsightsViewsInsightsViewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
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
                    (typeof client.v1.private)['insights-views'][':insightsViewId']['$get']
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
                    (typeof client.v1.private)['insights-views'][':insightsViewId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateInsightsViewsInsightsViewIdQueryKey>
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
            ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateInsightsViewsInsightsViewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateInsightsViewsInsightsViewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['insights-views'][':insightsViewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateInsightsViewsInsightsViewIdMutationKey() {
  return ['v1', '/v1/private/insights-views/:insightsViewId', 'DELETE'] as const
}

export function getDeleteV1PrivateInsightsViewsInsightsViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateInsightsViewsInsightsViewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.private['insights-views'][':insightsViewId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1PrivateInsightsViewsInsightsViewId<
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
                      (typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']
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
  const mutationDefaults = getDeleteV1PrivateInsightsViewsInsightsViewIdMutationOptions<
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

export function getPatchV1PrivateInsightsViewsInsightsViewIdMutationKey() {
  return ['v1', '/v1/private/insights-views/:insightsViewId', 'PATCH'] as const
}

export function getPatchV1PrivateInsightsViewsInsightsViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateInsightsViewsInsightsViewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private['insights-views'][':insightsViewId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivateInsightsViewsInsightsViewId<
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
                    (typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']
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
  const mutationDefaults = getPatchV1PrivateInsightsViewsInsightsViewIdMutationOptions<
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

export function getPostV1PrivateInsightsViewsDeleteBatchMutationKey() {
  return ['v1', '/v1/private/insights-views/delete-batch', 'POST'] as const
}

export function getPostV1PrivateInsightsViewsDeleteBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['insights-views']['delete-batch']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['insights-views']['delete-batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateInsightsViewsDeleteBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['insights-views']['delete-batch']['$post']>,
    ) {
      return parseResponse(client.v1.private['insights-views']['delete-batch'].$post(args, options))
    },
  })
}

export function usePostV1PrivateInsightsViewsDeleteBatch<
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
                      (typeof client.v1.private)['insights-views']['delete-batch']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['insights-views']['delete-batch']['$post']>,
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
  const mutationDefaults = getPostV1PrivateInsightsViewsDeleteBatchMutationOptions<
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

export function getPostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryMutationKey() {
  return [
    'v1',
    '/v1/private/insights-views/:insightsViewId/widgets/:widgetId/query',
    'POST',
  ] as const
}

export function getPostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['insights-views'][':insightsViewId'].widgets[':widgetId'].query.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQuery<
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
                    (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
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
    getPostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryMutationOptions<
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

export function getV1PrivateLlmModelsQueryKey() {
  return ['v1', '/v1/private/llm/models'] as const
}

export function getV1PrivateLlmModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateLlmModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.llm.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLlmModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateLlmModelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLlmModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateLlmModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.llm.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateLlmModelsProfilesQueryKey() {
  return ['v1', '/v1/private/llm/models/profiles'] as const
}

export function getV1PrivateLlmModelsProfilesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateLlmModelsProfilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.llm.models.profiles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLlmModelsProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>>
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
                Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateLlmModelsProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLlmModelsProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateLlmModelsProfilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.llm.models.profiles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateLlmProviderKeyDeleteMutationKey() {
  return ['v1', '/v1/private/llm-provider-key/delete', 'POST'] as const
}

export function getPostV1PrivateLlmProviderKeyDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLlmProviderKeyDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>,
    ) {
      return parseResponse(client.v1.private['llm-provider-key'].delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateLlmProviderKeyDelete<
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
                    ReturnType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>,
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
  const mutationDefaults = getPostV1PrivateLlmProviderKeyDeleteMutationOptions<
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

export function getV1PrivateLlmProviderKeyQueryKey() {
  return ['v1', '/v1/private/llm-provider-key'] as const
}

export function getV1PrivateLlmProviderKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateLlmProviderKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['llm-provider-key'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLlmProviderKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateLlmProviderKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLlmProviderKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateLlmProviderKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['llm-provider-key'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateLlmProviderKeyMutationKey() {
  return ['v1', '/v1/private/llm-provider-key', 'POST'] as const
}

export function getPostV1PrivateLlmProviderKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['llm-provider-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLlmProviderKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['llm-provider-key']['$post']>,
    ) {
      return parseResponse(client.v1.private['llm-provider-key'].$post(args, options))
    },
  })
}

export function usePostV1PrivateLlmProviderKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['llm-provider-key']['$post']>,
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
  const mutationDefaults = getPostV1PrivateLlmProviderKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateLlmProviderKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/private/llm-provider-key/:id', toValue(args)] as const
}

export function getV1PrivateLlmProviderKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLlmProviderKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['llm-provider-key'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLlmProviderKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateLlmProviderKeyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLlmProviderKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateLlmProviderKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['llm-provider-key'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateLlmProviderKeyIdMutationKey() {
  return ['v1', '/v1/private/llm-provider-key/:id', 'PATCH'] as const
}

export function getPatchV1PrivateLlmProviderKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateLlmProviderKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>,
    ) {
      return parseResponse(client.v1.private['llm-provider-key'][':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateLlmProviderKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateLlmProviderKeyIdMutationOptions<
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

export function getPostV1PrivateLlmProviderKeyAuthConfigTestMutationKey() {
  return ['v1', '/v1/private/llm-provider-key/auth-config/test', 'POST'] as const
}

export function getPostV1PrivateLlmProviderKeyAuthConfigTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLlmProviderKeyAuthConfigTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['llm-provider-key']['auth-config'].test.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLlmProviderKeyAuthConfigTest<
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
                    (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
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
  const mutationDefaults = getPostV1PrivateLlmProviderKeyAuthConfigTestMutationOptions<
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

export function getV1PrivateLocalRunnersJobsJobIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/logs', toValue(args)] as const
}

export function getV1PrivateLocalRunnersJobsJobIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLocalRunnersJobsJobIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['local-runners'].jobs[':jobId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLocalRunnersJobsJobIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']>
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
                    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
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
                    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateLocalRunnersJobsJobIdLogsQueryKey>
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
              (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLocalRunnersJobsJobIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateLocalRunnersJobsJobIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['local-runners'].jobs[':jobId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateLocalRunnersJobsJobIdLogsMutationKey() {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/logs', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersJobsJobIdLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersJobsJobIdLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'].jobs[':jobId'].logs.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersJobsJobIdLogs<
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
                      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersJobsJobIdLogsMutationOptions<
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

export function getPostV1PrivateLocalRunnersJobsJobIdCancelMutationKey() {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/cancel', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'].jobs[':jobId'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersJobsJobIdCancel<
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
                      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersJobsJobIdCancelMutationOptions<
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

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/bridge/commands', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].bridge.commands.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersRunnerIdBridgeCommands<
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsMutationOptions<
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

export function getPostV1PrivateLocalRunnersJobsMutationKey() {
  return ['v1', '/v1/private/local-runners/jobs', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['local-runners']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['local-runners']['jobs']['$post']>,
    ) {
      return parseResponse(client.v1.private['local-runners'].jobs.$post(args, options))
    },
  })
}

export function usePostV1PrivateLocalRunnersJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['local-runners']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['local-runners']['jobs']['$post']>,
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
  const mutationDefaults = getPostV1PrivateLocalRunnersJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateLocalRunnersRunnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>
  >,
) {
  return ['v1', '/v1/private/local-runners/:runnerId', toValue(args)] as const
}

export function getV1PrivateLocalRunnersRunnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLocalRunnersRunnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLocalRunnersRunnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>
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
                  ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateLocalRunnersRunnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLocalRunnersRunnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateLocalRunnersRunnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['local-runners'][':runnerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateLocalRunnersRunnerIdMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId', 'DELETE'] as const
}

export function getDeleteV1PrivateLocalRunnersRunnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateLocalRunnersRunnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>,
    ) {
      return parseResponse(client.v1.private['local-runners'][':runnerId'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateLocalRunnersRunnerId<
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
                    ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateLocalRunnersRunnerIdMutationOptions<
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

export function getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/local-runners/:runnerId/bridge/commands/:commandId',
    toValue(args),
  ] as const
}

export function getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdQueryKey>
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
              (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateLocalRunnersJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
  >,
) {
  return ['v1', '/v1/private/local-runners/jobs/:jobId', toValue(args)] as const
}

export function getV1PrivateLocalRunnersJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLocalRunnersJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['local-runners'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLocalRunnersJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
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
                  ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateLocalRunnersJobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLocalRunnersJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateLocalRunnersJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['local-runners'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateLocalRunnersRunnerIdHeartbeatsMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/heartbeats', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersRunnerIdHeartbeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersRunnerIdHeartbeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].heartbeats.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersRunnerIdHeartbeats<
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersRunnerIdHeartbeatsMutationOptions<
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

export function getV1PrivateLocalRunnersRunnerIdJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
  >,
) {
  return ['v1', '/v1/private/local-runners/:runnerId/jobs', toValue(args)] as const
}

export function getV1PrivateLocalRunnersRunnerIdJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLocalRunnersRunnerIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLocalRunnersRunnerIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateLocalRunnersRunnerIdJobsQueryKey>
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
            ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLocalRunnersRunnerIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateLocalRunnersRunnerIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['local-runners'][':runnerId'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateLocalRunnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['local-runners']['$get']>>,
) {
  return ['v1', '/v1/private/local-runners', toValue(args)] as const
}

export function getV1PrivateLocalRunnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['local-runners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateLocalRunnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['local-runners'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateLocalRunners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['local-runners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateLocalRunnersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateLocalRunnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateLocalRunnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['local-runners'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsNextMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/bridge/commands/next', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsNextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsNextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].bridge.commands.next.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersRunnerIdBridgeCommandsNext<
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsNextMutationOptions<
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

export function getPostV1PrivateLocalRunnersRunnerIdJobsNextMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/jobs/next', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersRunnerIdJobsNextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersRunnerIdJobsNextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].jobs.next.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersRunnerIdJobsNext<
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
                    (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersRunnerIdJobsNextMutationOptions<
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

export function getPatchV1PrivateLocalRunnersRunnerIdChecklistMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/checklist', 'PATCH'] as const
}

export function getPatchV1PrivateLocalRunnersRunnerIdChecklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateLocalRunnersRunnerIdChecklistMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].checklist.$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivateLocalRunnersRunnerIdChecklist<
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
                      (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
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
  const mutationDefaults = getPatchV1PrivateLocalRunnersRunnerIdChecklistMutationOptions<
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

export function getPutV1PrivateLocalRunnersRunnerIdAgentsMutationKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/agents', 'PUT'] as const
}

export function getPutV1PrivateLocalRunnersRunnerIdAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateLocalRunnersRunnerIdAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].agents.$put(args, options),
      )
    },
  })
}

export function usePutV1PrivateLocalRunnersRunnerIdAgents<
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
                      (typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']
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
  const mutationDefaults = getPutV1PrivateLocalRunnersRunnerIdAgentsMutationOptions<
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

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsMutationKey() {
  return [
    'v1',
    '/v1/private/local-runners/:runnerId/bridge/commands/:commandId/results',
    'POST',
  ] as const
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].results.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResults<
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
                      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
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
    getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsMutationOptions<
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

export function getPostV1PrivateLocalRunnersJobsJobIdResultsMutationKey() {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/results', 'POST'] as const
}

export function getPostV1PrivateLocalRunnersJobsJobIdResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateLocalRunnersJobsJobIdResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private['local-runners'].jobs[':jobId'].results.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateLocalRunnersJobsJobIdResults<
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
                      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
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
  const mutationDefaults = getPostV1PrivateLocalRunnersJobsJobIdResultsMutationOptions<
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

export function getPostV1PrivateManualEvaluationSpansMutationKey() {
  return ['v1', '/v1/private/manual-evaluation/spans', 'POST'] as const
}

export function getPostV1PrivateManualEvaluationSpansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateManualEvaluationSpansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>,
    ) {
      return parseResponse(client.v1.private['manual-evaluation'].spans.$post(args, options))
    },
  })
}

export function usePostV1PrivateManualEvaluationSpans<
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
                  ReturnType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>,
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
  const mutationDefaults = getPostV1PrivateManualEvaluationSpansMutationOptions<
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

export function getPostV1PrivateManualEvaluationThreadsMutationKey() {
  return ['v1', '/v1/private/manual-evaluation/threads', 'POST'] as const
}

export function getPostV1PrivateManualEvaluationThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateManualEvaluationThreadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>,
    ) {
      return parseResponse(client.v1.private['manual-evaluation'].threads.$post(args, options))
    },
  })
}

export function usePostV1PrivateManualEvaluationThreads<
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
                  ReturnType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>,
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
  const mutationDefaults = getPostV1PrivateManualEvaluationThreadsMutationOptions<
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

export function getPostV1PrivateManualEvaluationTracesMutationKey() {
  return ['v1', '/v1/private/manual-evaluation/traces', 'POST'] as const
}

export function getPostV1PrivateManualEvaluationTracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateManualEvaluationTracesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>,
    ) {
      return parseResponse(client.v1.private['manual-evaluation'].traces.$post(args, options))
    },
  })
}

export function usePostV1PrivateManualEvaluationTraces<
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
                  ReturnType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>,
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
  const mutationDefaults = getPostV1PrivateManualEvaluationTracesMutationOptions<
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

export function getPostV1PrivateOllamaModelsMutationKey() {
  return ['v1', '/v1/private/ollama/models', 'POST'] as const
}

export function getPostV1PrivateOllamaModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollama.models.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.ollama.models.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateOllamaModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.ollama.models.$post>) {
      return parseResponse(client.v1.private.ollama.models.$post(args, options))
    },
  })
}

export function usePostV1PrivateOllamaModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.ollama.models.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.ollama.models.$post>,
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
  const mutationDefaults = getPostV1PrivateOllamaModelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateOllamaTestConnectionMutationKey() {
  return ['v1', '/v1/private/ollama/test-connection', 'POST'] as const
}

export function getPostV1PrivateOllamaTestConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.ollama)['test-connection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.ollama)['test-connection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateOllamaTestConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.ollama)['test-connection']['$post']>,
    ) {
      return parseResponse(client.v1.private.ollama['test-connection'].$post(args, options))
    },
  })
}

export function usePostV1PrivateOllamaTestConnection<
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
                Awaited<ReturnType<(typeof client.v1.private.ollama)['test-connection']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.ollama)['test-connection']['$post']>,
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
  const mutationDefaults = getPostV1PrivateOllamaTestConnectionMutationOptions<
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

export function getV1PrivateOllieStateQueryKey() {
  return ['v1', '/v1/private/ollie/state'] as const
}

export function getV1PrivateOllieStateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateOllieStateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.ollie.state.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateOllieState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateOllieStateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateOllieStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateOllieStateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.ollie.state.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateOllieStateMutationKey() {
  return ['v1', '/v1/private/ollie/state', 'PUT'] as const
}

export function getPutV1PrivateOllieStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.ollie.state.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateOllieStateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.ollie.state.$put>) {
      return parseResponse(client.v1.private.ollie.state.$put(args, options))
    },
  })
}

export function usePutV1PrivateOllieState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.ollie.state.$put>,
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
  const mutationDefaults = getPutV1PrivateOllieStateMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PrivateOllieStateMutationKey() {
  return ['v1', '/v1/private/ollie/state', 'DELETE'] as const
}

export function getDeleteV1PrivateOllieStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateOllieStateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.private.ollie.state.$delete(undefined, options))
    },
  })
}

export function useDeleteV1PrivateOllieState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.ollie.state.$delete>>
                >
              >
            >
          | undefined,
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
  const mutationDefaults = getDeleteV1PrivateOllieStateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateOtelV1TracesMutationKey() {
  return ['v1', '/v1/private/otel/v1/traces', 'POST'] as const
}

export function getPostV1PrivateOtelV1TracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.otel.v1.traces.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.otel.v1.traces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateOtelV1TracesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.otel.v1.traces.$post>) {
      return parseResponse(client.v1.private.otel.v1.traces.$post(args, options))
    },
  })
}

export function usePostV1PrivateOtelV1Traces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.otel.v1.traces.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.otel.v1.traces.$post>,
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
  const mutationDefaults = getPostV1PrivateOtelV1TracesMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateOptimizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.optimizations.$get>>,
) {
  return ['v1', '/v1/private/optimizations', toValue(args)] as const
}

export function getV1PrivateOptimizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.optimizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateOptimizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.optimizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateOptimizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.optimizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateOptimizationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateOptimizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateOptimizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.optimizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateOptimizationsMutationKey() {
  return ['v1', '/v1/private/optimizations', 'PUT'] as const
}

export function getPutV1PrivateOptimizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.optimizations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateOptimizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.optimizations.$put>) {
      return parseResponse(client.v1.private.optimizations.$put(args, options))
    },
  })
}

export function usePutV1PrivateOptimizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.optimizations.$put>,
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
  const mutationDefaults = getPutV1PrivateOptimizationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateOptimizationsMutationKey() {
  return ['v1', '/v1/private/optimizations', 'POST'] as const
}

export function getPostV1PrivateOptimizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.optimizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateOptimizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.optimizations.$post>) {
      return parseResponse(client.v1.private.optimizations.$post(args, options))
    },
  })
}

export function usePostV1PrivateOptimizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.optimizations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.optimizations.$post>,
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
  const mutationDefaults = getPostV1PrivateOptimizationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateOptimizationsDeleteMutationKey() {
  return ['v1', '/v1/private/optimizations/delete', 'POST'] as const
}

export function getPostV1PrivateOptimizationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.optimizations.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.optimizations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateOptimizationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.optimizations.delete.$post>) {
      return parseResponse(client.v1.private.optimizations.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateOptimizationsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.optimizations.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.optimizations.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateOptimizationsDeleteMutationOptions<
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

export function getV1PrivateOptimizationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/optimizations/:id', toValue(args)] as const
}

export function getV1PrivateOptimizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateOptimizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.optimizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateOptimizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateOptimizationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateOptimizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateOptimizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.optimizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateOptimizationsIdMutationKey() {
  return ['v1', '/v1/private/optimizations/:id', 'PUT'] as const
}

export function getPutV1PrivateOptimizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.optimizations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateOptimizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$put']>,
    ) {
      return parseResponse(client.v1.private.optimizations[':id'].$put(args, options))
    },
  })
}

export function usePutV1PrivateOptimizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.optimizations)[':id']['$put']>,
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
  const mutationDefaults = getPutV1PrivateOptimizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateOptimizationsStudioIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/private/optimizations/studio/:id/logs', toValue(args)] as const
}

export function getV1PrivateOptimizationsStudioIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateOptimizationsStudioIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.optimizations.studio[':id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateOptimizationsStudioIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
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
                  ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateOptimizationsStudioIdLogsQueryKey>
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
            ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateOptimizationsStudioIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateOptimizationsStudioIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.optimizations.studio[':id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivatePairingSessionsSessionIdActivateMutationKey() {
  return ['v1', '/v1/private/pairing/sessions/:sessionId/activate', 'POST'] as const
}

export function getPostV1PrivatePairingSessionsSessionIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePairingSessionsSessionIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.pairing.sessions[':sessionId'].activate.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivatePairingSessionsSessionIdActivate<
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
                    (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
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
  const mutationDefaults = getPostV1PrivatePairingSessionsSessionIdActivateMutationOptions<
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

export function getPostV1PrivatePairingSessionsMutationKey() {
  return ['v1', '/v1/private/pairing/sessions', 'POST'] as const
}

export function getPostV1PrivatePairingSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.pairing.sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.pairing.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePairingSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.pairing.sessions.$post>) {
      return parseResponse(client.v1.private.pairing.sessions.$post(args, options))
    },
  })
}

export function usePostV1PrivatePairingSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.pairing.sessions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.pairing.sessions.$post>,
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
  const mutationDefaults = getPostV1PrivatePairingSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateProjectsProjectIdAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/alerts', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>
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
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsProjectIdDashboardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/dashboards', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdDashboardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdDashboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].dashboards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
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
                    (typeof client.v1.private.projects)[':projectId']['dashboards']['$get']
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
                    (typeof client.v1.private.projects)[':projectId']['dashboards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdDashboardsQueryKey>
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
            ReturnType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdDashboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].dashboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsProjectIdDatasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/datasets', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdDatasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
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
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsProjectIdExperimentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/experiments', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdExperimentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdExperimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].experiments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdExperiments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
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
                    (typeof client.v1.private.projects)[':projectId']['experiments']['$get']
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
                    (typeof client.v1.private.projects)[':projectId']['experiments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdExperimentsQueryKey>
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
            ReturnType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdExperimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsProjectIdOptimizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/optimizations', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdOptimizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdOptimizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].optimizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdOptimizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
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
                    (typeof client.v1.private.projects)[':projectId']['optimizations']['$get']
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
                    (typeof client.v1.private.projects)[':projectId']['optimizations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdOptimizationsQueryKey>
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
            ReturnType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdOptimizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdOptimizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].optimizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsProjectIdPromptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/prompts', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdPromptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdPromptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].prompts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdPrompts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
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
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdPromptsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdPromptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdPromptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].prompts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.projects.$get>>,
) {
  return ['v1', '/v1/private/projects', toValue(args)] as const
}

export function getV1PrivateProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateProjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateProjectsMutationKey() {
  return ['v1', '/v1/private/projects', 'POST'] as const
}

export function getPostV1PrivateProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.projects.$post>) {
      return parseResponse(client.v1.private.projects.$post(args, options))
    },
  })
}

export function usePostV1PrivateProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.projects.$post>,
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
  const mutationDefaults = getPostV1PrivateProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateProjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/projects/:id', toValue(args)] as const
}

export function getV1PrivateProjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateProjectsIdMutationKey() {
  return ['v1', '/v1/private/projects/:id', 'DELETE'] as const
}

export function getDeleteV1PrivateProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateProjectsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.projects)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.private.projects[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.projects)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateProjectsIdMutationKey() {
  return ['v1', '/v1/private/projects/:id', 'PATCH'] as const
}

export function getPatchV1PrivateProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.projects)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.projects)[':id']['$patch']>) {
      return parseResponse(client.v1.private.projects[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.projects)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateProjectsDeleteMutationKey() {
  return ['v1', '/v1/private/projects/delete', 'POST'] as const
}

export function getPostV1PrivateProjectsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.projects.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.projects.delete.$post>) {
      return parseResponse(client.v1.private.projects.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateProjectsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.projects.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.projects.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateProjectsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateProjectsFeedbackScoresNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/feedback-scores/names', toValue(args)] as const
}

export function getV1PrivateProjectsFeedbackScoresNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsFeedbackScoresNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects['feedback-scores'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsFeedbackScoresNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
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
                    (typeof client.v1.private.projects)['feedback-scores']['names']['$get']
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
                    (typeof client.v1.private.projects)['feedback-scores']['names']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsFeedbackScoresNamesQueryKey>
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
            ReturnType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsFeedbackScoresNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsFeedbackScoresNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects['feedback-scores'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateProjectsIdTokenUsageNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:id/token-usage/names', toValue(args)] as const
}

export function getV1PrivateProjectsIdTokenUsageNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsIdTokenUsageNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':id']['token-usage'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsIdTokenUsageNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
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
                    (typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']
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
                    (typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsIdTokenUsageNamesQueryKey>
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
            ReturnType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsIdTokenUsageNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsIdTokenUsageNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':id']['token-usage'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateProjectsIdKpiCardsMutationKey() {
  return ['v1', '/v1/private/projects/:id/kpi-cards', 'POST'] as const
}

export function getPostV1PrivateProjectsIdKpiCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsIdKpiCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>,
    ) {
      return parseResponse(client.v1.private.projects[':id']['kpi-cards'].$post(args, options))
    },
  })
}

export function usePostV1PrivateProjectsIdKpiCards<
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
                  ReturnType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>,
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
  const mutationDefaults = getPostV1PrivateProjectsIdKpiCardsMutationOptions<
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

export function getPostV1PrivateProjectsIdMetricsMutationKey() {
  return ['v1', '/v1/private/projects/:id/metrics', 'POST'] as const
}

export function getPostV1PrivateProjectsIdMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsIdMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>,
    ) {
      return parseResponse(client.v1.private.projects[':id'].metrics.$post(args, options))
    },
  })
}

export function usePostV1PrivateProjectsIdMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>,
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
  const mutationDefaults = getPostV1PrivateProjectsIdMetricsMutationOptions<
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

export function getV1PrivateProjectsStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.projects.stats.$get>>,
) {
  return ['v1', '/v1/private/projects/stats', toValue(args)] as const
}

export function getV1PrivateProjectsStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.projects.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.projects.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateProjectsRetrieveMutationKey() {
  return ['v1', '/v1/private/projects/retrieve', 'POST'] as const
}

export function getPostV1PrivateProjectsRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.retrieve.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.projects.retrieve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsRetrieveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.projects.retrieve.$post>) {
      return parseResponse(client.v1.private.projects.retrieve.$post(args, options))
    },
  })
}

export function usePostV1PrivateProjectsRetrieve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.projects.retrieve.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.projects.retrieve.$post>,
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
  const mutationDefaults = getPostV1PrivateProjectsRetrieveMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivatePromptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.prompts.$get>>,
) {
  return ['v1', '/v1/private/prompts', toValue(args)] as const
}

export function getV1PrivatePromptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.prompts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivatePromptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.prompts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivatePrompts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.prompts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivatePromptsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivatePromptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivatePromptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.prompts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivatePromptsMutationKey() {
  return ['v1', '/v1/private/prompts', 'POST'] as const
}

export function getPostV1PrivatePromptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private.prompts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.prompts.$post>) {
      return parseResponse(client.v1.private.prompts.$post(args, options))
    },
  })
}

export function usePostV1PrivatePrompts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.prompts.$post>,
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
  const mutationDefaults = getPostV1PrivatePromptsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivatePromptsVersionsMutationKey() {
  return ['v1', '/v1/private/prompts/versions', 'POST'] as const
}

export function getPostV1PrivatePromptsVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.versions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.prompts.versions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.prompts.versions.$post>) {
      return parseResponse(client.v1.private.prompts.versions.$post(args, options))
    },
  })
}

export function usePostV1PrivatePromptsVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.prompts.versions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.prompts.versions.$post>,
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
  const mutationDefaults = getPostV1PrivatePromptsVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivatePromptsVersionsMutationKey() {
  return ['v1', '/v1/private/prompts/versions', 'PATCH'] as const
}

export function getPatchV1PrivatePromptsVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.prompts.versions.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.prompts.versions.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivatePromptsVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.prompts.versions.$patch>) {
      return parseResponse(client.v1.private.prompts.versions.$patch(args, options))
    },
  })
}

export function usePatchV1PrivatePromptsVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.prompts.versions.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.prompts.versions.$patch>,
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
  const mutationDefaults = getPatchV1PrivatePromptsVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivatePromptsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/prompts/:id', toValue(args)] as const
}

export function getV1PrivatePromptsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivatePromptsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.prompts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivatePromptsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivatePromptsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivatePromptsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivatePromptsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.prompts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivatePromptsIdMutationKey() {
  return ['v1', '/v1/private/prompts/:id', 'PUT'] as const
}

export function getPutV1PrivatePromptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.prompts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivatePromptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$put']>) {
      return parseResponse(client.v1.private.prompts[':id'].$put(args, options))
    },
  })
}

export function usePutV1PrivatePromptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.prompts)[':id']['$put']>,
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
  const mutationDefaults = getPutV1PrivatePromptsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PrivatePromptsIdMutationKey() {
  return ['v1', '/v1/private/prompts/:id', 'DELETE'] as const
}

export function getDeleteV1PrivatePromptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.prompts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivatePromptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$delete']>) {
      return parseResponse(client.v1.private.prompts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivatePromptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.prompts)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivatePromptsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivatePromptsDeleteMutationKey() {
  return ['v1', '/v1/private/prompts/delete', 'POST'] as const
}

export function getPostV1PrivatePromptsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.prompts.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.prompts.delete.$post>) {
      return parseResponse(client.v1.private.prompts.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivatePromptsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.prompts.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.prompts.delete.$post>,
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
  const mutationDefaults = getPostV1PrivatePromptsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivatePromptsByCommitCommitQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>
  >,
) {
  return ['v1', '/v1/private/prompts/by-commit/:commit', toValue(args)] as const
}

export function getV1PrivatePromptsByCommitCommitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivatePromptsByCommitCommitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.prompts['by-commit'][':commit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivatePromptsByCommitCommit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>
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
                  ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivatePromptsByCommitCommitQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivatePromptsByCommitCommitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivatePromptsByCommitCommitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.prompts['by-commit'][':commit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivatePromptsVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>
  >,
) {
  return ['v1', '/v1/private/prompts/versions/:versionId', toValue(args)] as const
}

export function getV1PrivatePromptsVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivatePromptsVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.prompts.versions[':versionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivatePromptsVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>
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
                  ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivatePromptsVersionsVersionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivatePromptsVersionsVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivatePromptsVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.prompts.versions[':versionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/private/prompts/:promptId/versions/by-number/:versionNumber',
    toValue(args),
  ] as const
}

export function getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.prompts[':promptId'].versions['by-number'][':versionNumber'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PrivatePromptsPromptIdVersionsByNumberVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
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
                    (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
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
                    (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberQueryKey>
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
              (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.prompts[':promptId'].versions['by-number'][':versionNumber'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivatePromptsIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/private/prompts/:id/versions', toValue(args)] as const
}

export function getV1PrivatePromptsIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivatePromptsIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.prompts[':id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivatePromptsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivatePromptsIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivatePromptsIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivatePromptsIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.prompts[':id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivatePromptsRetrieveByCommitsMutationKey() {
  return ['v1', '/v1/private/prompts/retrieve-by-commits', 'POST'] as const
}

export function getPostV1PrivatePromptsRetrieveByCommitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsRetrieveByCommitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>,
    ) {
      return parseResponse(client.v1.private.prompts['retrieve-by-commits'].$post(args, options))
    },
  })
}

export function usePostV1PrivatePromptsRetrieveByCommits<
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
                  ReturnType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>,
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
  const mutationDefaults = getPostV1PrivatePromptsRetrieveByCommitsMutationOptions<
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

export function getPostV1PrivatePromptsPromptIdVersionsVersionIdRestoreMutationKey() {
  return ['v1', '/v1/private/prompts/:promptId/versions/:versionId/restore', 'POST'] as const
}

export function getPostV1PrivatePromptsPromptIdVersionsVersionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsPromptIdVersionsVersionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.prompts[':promptId'].versions[':versionId'].restore.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivatePromptsPromptIdVersionsVersionIdRestore<
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
                    (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
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
  const mutationDefaults = getPostV1PrivatePromptsPromptIdVersionsVersionIdRestoreMutationOptions<
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

export function getPostV1PrivatePromptsVersionsRetrieveMutationKey() {
  return ['v1', '/v1/private/prompts/versions/retrieve', 'POST'] as const
}

export function getPostV1PrivatePromptsVersionsRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.prompts.versions.retrieve.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.prompts.versions.retrieve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsVersionsRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.prompts.versions.retrieve.$post>,
    ) {
      return parseResponse(client.v1.private.prompts.versions.retrieve.$post(args, options))
    },
  })
}

export function usePostV1PrivatePromptsVersionsRetrieve<
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
                Awaited<ReturnType<typeof client.v1.private.prompts.versions.retrieve.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.prompts.versions.retrieve.$post>,
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
  const mutationDefaults = getPostV1PrivatePromptsVersionsRetrieveMutationOptions<
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

export function getPostV1PrivatePromptsVersionsRetrieveByIdsMutationKey() {
  return ['v1', '/v1/private/prompts/versions/retrieve-by-ids', 'POST'] as const
}

export function getPostV1PrivatePromptsVersionsRetrieveByIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivatePromptsVersionsRetrieveByIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.prompts.versions['retrieve-by-ids'].$post(args, options),
      )
    },
  })
}

export function usePostV1PrivatePromptsVersionsRetrieveByIds<
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
                    (typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']>,
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
  const mutationDefaults = getPostV1PrivatePromptsVersionsRetrieveByIdsMutationOptions<
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

export function getPatchV1PrivatePromptsVersionsVersionIdEnvironmentsMutationKey() {
  return ['v1', '/v1/private/prompts/versions/:versionId/environments', 'PATCH'] as const
}

export function getPatchV1PrivatePromptsVersionsVersionIdEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivatePromptsVersionsVersionIdEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private.prompts.versions[':versionId'].environments.$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivatePromptsVersionsVersionIdEnvironments<
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
                      (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
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
  const mutationDefaults = getPatchV1PrivatePromptsVersionsVersionIdEnvironmentsMutationOptions<
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

export function getV1PrivateProjectsProjectIdActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/activities', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
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
                    (typeof client.v1.private.projects)[':projectId']['activities']['$get']
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
                    (typeof client.v1.private.projects)[':projectId']['activities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdActivitiesQueryKey>
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
            ReturnType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateReportFailuresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['report-failures']['$get']>>,
) {
  return ['v1', '/v1/private/report-failures', toValue(args)] as const
}

export function getV1PrivateReportFailuresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['report-failures']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateReportFailuresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['report-failures'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateReportFailures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private)['report-failures']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateReportFailuresQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateReportFailuresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateReportFailuresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['report-failures'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateReportFailuresMutationKey() {
  return ['v1', '/v1/private/report-failures', 'POST'] as const
}

export function getPostV1PrivateReportFailuresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private)['report-failures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateReportFailuresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['report-failures']['$post']>,
    ) {
      return parseResponse(client.v1.private['report-failures'].$post(args, options))
    },
  })
}

export function usePostV1PrivateReportFailures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private)['report-failures']['$post']>,
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
  const mutationDefaults = getPostV1PrivateReportFailuresMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateProjectsProjectIdReportsReportIdCompleteMutationKey() {
  return ['v1', '/v1/private/projects/:projectId/reports/:reportId/complete', 'POST'] as const
}

export function getPostV1PrivateProjectsProjectIdReportsReportIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsProjectIdReportsReportIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.projects[':projectId'].reports[':reportId'].complete.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateProjectsProjectIdReportsReportIdComplete<
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
                      (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
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
  const mutationDefaults = getPostV1PrivateProjectsProjectIdReportsReportIdCompleteMutationOptions<
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

export function getPostV1PrivateProjectsProjectIdReportsGenerateMutationKey() {
  return ['v1', '/v1/private/projects/:projectId/reports/generate', 'POST'] as const
}

export function getPostV1PrivateProjectsProjectIdReportsGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateProjectsProjectIdReportsGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.projects[':projectId'].reports.generate.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateProjectsProjectIdReportsGenerate<
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
                    (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
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
  const mutationDefaults = getPostV1PrivateProjectsProjectIdReportsGenerateMutationOptions<
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

export function getV1PrivateProjectsProjectIdReportsPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/reports/preferences', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdReportsPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdReportsPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].reports.preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdReportsPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
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
                    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
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
                    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdReportsPreferencesQueryKey>
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
              (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdReportsPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdReportsPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].reports.preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateProjectsProjectIdReportsPreferencesMutationKey() {
  return ['v1', '/v1/private/projects/:projectId/reports/preferences', 'PUT'] as const
}

export function getPutV1PrivateProjectsProjectIdReportsPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateProjectsProjectIdReportsPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.private.projects[':projectId'].reports.preferences.$put(args, options),
      )
    },
  })
}

export function usePutV1PrivateProjectsProjectIdReportsPreferences<
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
                    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
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
  const mutationDefaults = getPutV1PrivateProjectsProjectIdReportsPreferencesMutationOptions<
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

export function getV1PrivateProjectsProjectIdReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/reports', toValue(args)] as const
}

export function getV1PrivateProjectsProjectIdReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateProjectsProjectIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.projects[':projectId'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateProjectsProjectIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
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
                  ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateProjectsProjectIdReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateProjectsProjectIdReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateProjectsProjectIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.projects[':projectId'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateRetentionRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.retention.rules.$get>>,
) {
  return ['v1', '/v1/private/retention/rules', toValue(args)] as const
}

export function getV1PrivateRetentionRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.retention.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateRetentionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.retention.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateRetentionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.retention.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateRetentionRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateRetentionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateRetentionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.retention.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateRetentionRulesMutationKey() {
  return ['v1', '/v1/private/retention/rules', 'POST'] as const
}

export function getPostV1PrivateRetentionRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.retention.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateRetentionRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.retention.rules.$post>) {
      return parseResponse(client.v1.private.retention.rules.$post(args, options))
    },
  })
}

export function usePostV1PrivateRetentionRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.retention.rules.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.retention.rules.$post>,
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
  const mutationDefaults = getPostV1PrivateRetentionRulesMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateRetentionRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>
  >,
) {
  return ['v1', '/v1/private/retention/rules/:ruleId', toValue(args)] as const
}

export function getV1PrivateRetentionRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateRetentionRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.retention.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateRetentionRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateRetentionRulesRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateRetentionRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateRetentionRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.retention.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateRetentionRulesRuleIdMutationKey() {
  return ['v1', '/v1/private/retention/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteV1PrivateRetentionRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateRetentionRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>,
    ) {
      return parseResponse(client.v1.private.retention.rules[':ruleId'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateRetentionRulesRuleId<
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
                    ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateRetentionRulesRuleIdMutationOptions<
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

export function getV1PrivateTogglesQueryKey() {
  return ['v1', '/v1/private/toggles'] as const
}

export function getV1PrivateTogglesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateTogglesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.toggles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateToggles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateTogglesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTogglesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateTogglesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.toggles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateSpansIdCommentsMutationKey() {
  return ['v1', '/v1/private/spans/:id/comments', 'POST'] as const
}

export function getPostV1PrivateSpansIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.spans)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateSpansIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.spans)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.v1.private.spans[':id'].comments.$post(args, options))
    },
  })
}

export function usePostV1PrivateSpansIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.spans)[':id']['comments']['$post']>,
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
  const mutationDefaults = getPostV1PrivateSpansIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1PrivateSpansIdFeedbackScoresMutationKey() {
  return ['v1', '/v1/private/spans/:id/feedback-scores', 'PUT'] as const
}

export function getPutV1PrivateSpansIdFeedbackScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateSpansIdFeedbackScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>,
    ) {
      return parseResponse(client.v1.private.spans[':id']['feedback-scores'].$put(args, options))
    },
  })
}

export function usePutV1PrivateSpansIdFeedbackScores<
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
                    ReturnType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>,
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
  const mutationDefaults = getPutV1PrivateSpansIdFeedbackScoresMutationOptions<
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

export function getPostV1PrivateSpansBatchMutationKey() {
  return ['v1', '/v1/private/spans/batch', 'POST'] as const
}

export function getPostV1PrivateSpansBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.batch.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.spans.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateSpansBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.spans.batch.$post>) {
      return parseResponse(client.v1.private.spans.batch.$post(args, options))
    },
  })
}

export function usePostV1PrivateSpansBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.spans.batch.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.spans.batch.$post>,
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
  const mutationDefaults = getPostV1PrivateSpansBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateSpansBatchMutationKey() {
  return ['v1', '/v1/private/spans/batch', 'PATCH'] as const
}

export function getPatchV1PrivateSpansBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.batch.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.spans.batch.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateSpansBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.spans.batch.$patch>) {
      return parseResponse(client.v1.private.spans.batch.$patch(args, options))
    },
  })
}

export function usePatchV1PrivateSpansBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.spans.batch.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.spans.batch.$patch>,
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
  const mutationDefaults = getPatchV1PrivateSpansBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateSpansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.$get>>,
) {
  return ['v1', '/v1/private/spans', toValue(args)] as const
}

export function getV1PrivateSpansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateSpansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.spans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateSpans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateSpansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateSpansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateSpansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.spans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateSpansMutationKey() {
  return ['v1', '/v1/private/spans', 'POST'] as const
}

export function getPostV1PrivateSpansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private.spans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateSpansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.spans.$post>) {
      return parseResponse(client.v1.private.spans.$post(args, options))
    },
  })
}

export function usePostV1PrivateSpans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.spans.$post>,
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
  const mutationDefaults = getPostV1PrivateSpansMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateSpansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/spans/:id', toValue(args)] as const
}

export function getV1PrivateSpansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateSpansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.spans[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateSpansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateSpansIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateSpansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateSpansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.spans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateSpansIdMutationKey() {
  return ['v1', '/v1/private/spans/:id', 'DELETE'] as const
}

export function getDeleteV1PrivateSpansIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.spans)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateSpansIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.spans)[':id']['$delete']>) {
      return parseResponse(client.v1.private.spans[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateSpansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.spans)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateSpansIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateSpansIdMutationKey() {
  return ['v1', '/v1/private/spans/:id', 'PATCH'] as const
}

export function getPatchV1PrivateSpansIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.spans)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateSpansIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.spans)[':id']['$patch']>) {
      return parseResponse(client.v1.private.spans[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateSpansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.spans)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateSpansIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateSpansCommentsDeleteMutationKey() {
  return ['v1', '/v1/private/spans/comments/delete', 'POST'] as const
}

export function getPostV1PrivateSpansCommentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.spans.comments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.spans.comments.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateSpansCommentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.spans.comments.delete.$post>) {
      return parseResponse(client.v1.private.spans.comments.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateSpansCommentsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.spans.comments.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.spans.comments.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateSpansCommentsDeleteMutationOptions<
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

export function getPostV1PrivateSpansIdFeedbackScoresDeleteMutationKey() {
  return ['v1', '/v1/private/spans/:id/feedback-scores/delete', 'POST'] as const
}

export function getPostV1PrivateSpansIdFeedbackScoresDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateSpansIdFeedbackScoresDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.spans[':id']['feedback-scores'].delete.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateSpansIdFeedbackScoresDelete<
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
                      (typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']
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
  const mutationDefaults = getPostV1PrivateSpansIdFeedbackScoresDeleteMutationOptions<
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

export function getV1PrivateSpansFeedbackScoresNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
  >,
) {
  return ['v1', '/v1/private/spans/feedback-scores/names', toValue(args)] as const
}

export function getV1PrivateSpansFeedbackScoresNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateSpansFeedbackScoresNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.spans['feedback-scores'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateSpansFeedbackScoresNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
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
                  ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateSpansFeedbackScoresNamesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateSpansFeedbackScoresNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateSpansFeedbackScoresNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.spans['feedback-scores'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateSpansSpanIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']>
  >,
) {
  return ['v1', '/v1/private/spans/:spanId/comments/:commentId', toValue(args)] as const
}

export function getV1PrivateSpansSpanIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateSpansSpanIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.spans[':spanId'].comments[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateSpansSpanIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']>
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
                    (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
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
                    (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateSpansSpanIdCommentsCommentIdQueryKey>
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
              (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateSpansSpanIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateSpansSpanIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.spans[':spanId'].comments[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateSpansStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.stats.$get>>,
) {
  return ['v1', '/v1/private/spans/stats', toValue(args)] as const
}

export function getV1PrivateSpansStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateSpansStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.spans.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateSpansStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateSpansStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateSpansStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateSpansStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.spans.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateSpansFeedbackScoresMutationKey() {
  return ['v1', '/v1/private/spans/feedback-scores', 'PUT'] as const
}

export function getPutV1PrivateSpansFeedbackScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateSpansFeedbackScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['$put']>,
    ) {
      return parseResponse(client.v1.private.spans['feedback-scores'].$put(args, options))
    },
  })
}

export function usePutV1PrivateSpansFeedbackScores<
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
                  Awaited<ReturnType<(typeof client.v1.private.spans)['feedback-scores']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['$put']>,
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
  const mutationDefaults = getPutV1PrivateSpansFeedbackScoresMutationOptions<
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

export function getPostV1PrivateSpansSearchMutationKey() {
  return ['v1', '/v1/private/spans/search', 'POST'] as const
}

export function getPostV1PrivateSpansSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.spans.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateSpansSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.spans.search.$post>) {
      return parseResponse(client.v1.private.spans.search.$post(args, options))
    },
  })
}

export function usePostV1PrivateSpansSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.spans.search.$post>,
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
  const mutationDefaults = getPostV1PrivateSpansSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateSpansExistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.exists.$get>>,
) {
  return ['v1', '/v1/private/spans/exists', toValue(args)] as const
}

export function getV1PrivateSpansExistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.exists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateSpansExistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.spans.exists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateSpansExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.spans.exists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateSpansExistsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateSpansExistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateSpansExistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.spans.exists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateSpansCommentsCommentIdMutationKey() {
  return ['v1', '/v1/private/spans/comments/:commentId', 'PATCH'] as const
}

export function getPatchV1PrivateSpansCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateSpansCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>,
    ) {
      return parseResponse(client.v1.private.spans.comments[':commentId'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateSpansCommentsCommentId<
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
                    ReturnType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateSpansCommentsCommentIdMutationOptions<
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

export function getPostV1PrivateTracesThreadsIdCommentsMutationKey() {
  return ['v1', '/v1/private/traces/threads/:id/comments', 'POST'] as const
}

export function getPostV1PrivateTracesThreadsIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesThreadsIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.v1.private.traces.threads[':id'].comments.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesThreadsIdComments<
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
                  ReturnType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>,
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
  const mutationDefaults = getPostV1PrivateTracesThreadsIdCommentsMutationOptions<
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

export function getPostV1PrivateTracesIdCommentsMutationKey() {
  return ['v1', '/v1/private/traces/:id/comments', 'POST'] as const
}

export function getPostV1PrivateTracesIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.traces)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.v1.private.traces[':id'].comments.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.traces)[':id']['comments']['$post']>,
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
  const mutationDefaults = getPostV1PrivateTracesIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1PrivateTracesIdFeedbackScoresMutationKey() {
  return ['v1', '/v1/private/traces/:id/feedback-scores', 'PUT'] as const
}

export function getPutV1PrivateTracesIdFeedbackScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateTracesIdFeedbackScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>,
    ) {
      return parseResponse(client.v1.private.traces[':id']['feedback-scores'].$put(args, options))
    },
  })
}

export function usePutV1PrivateTracesIdFeedbackScores<
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
                    ReturnType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>,
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
  const mutationDefaults = getPutV1PrivateTracesIdFeedbackScoresMutationOptions<
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

export function getPostV1PrivateTracesBatchMutationKey() {
  return ['v1', '/v1/private/traces/batch', 'POST'] as const
}

export function getPostV1PrivateTracesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.batch.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.batch.$post>) {
      return parseResponse(client.v1.private.traces.batch.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.traces.batch.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.batch.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateTracesBatchMutationKey() {
  return ['v1', '/v1/private/traces/batch', 'PATCH'] as const
}

export function getPatchV1PrivateTracesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.batch.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.batch.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateTracesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.batch.$patch>) {
      return parseResponse(client.v1.private.traces.batch.$patch(args, options))
    },
  })
}

export function usePatchV1PrivateTracesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.traces.batch.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.batch.$patch>,
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
  const mutationDefaults = getPatchV1PrivateTracesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateTracesThreadsBatchMutationKey() {
  return ['v1', '/v1/private/traces/threads/batch', 'PATCH'] as const
}

export function getPatchV1PrivateTracesThreadsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.batch.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.batch.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateTracesThreadsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.threads.batch.$patch>) {
      return parseResponse(client.v1.private.traces.threads.batch.$patch(args, options))
    },
  })
}

export function usePatchV1PrivateTracesThreadsBatch<
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
                  Awaited<ReturnType<typeof client.v1.private.traces.threads.batch.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.batch.$patch>,
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
  const mutationDefaults = getPatchV1PrivateTracesThreadsBatchMutationOptions<
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

export function getPutV1PrivateTracesThreadsCloseMutationKey() {
  return ['v1', '/v1/private/traces/threads/close', 'PUT'] as const
}

export function getPutV1PrivateTracesThreadsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.close.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.close.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateTracesThreadsCloseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.threads.close.$put>) {
      return parseResponse(client.v1.private.traces.threads.close.$put(args, options))
    },
  })
}

export function usePutV1PrivateTracesThreadsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.traces.threads.close.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.close.$put>,
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
  const mutationDefaults = getPutV1PrivateTracesThreadsCloseMutationOptions<
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

export function getV1PrivateTracesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.$get>>,
) {
  return ['v1', '/v1/private/traces', toValue(args)] as const
}

export function getV1PrivateTracesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTraces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateTracesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateTracesMutationKey() {
  return ['v1', '/v1/private/traces', 'POST'] as const
}

export function getPostV1PrivateTracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.private.traces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.$post>) {
      return parseResponse(client.v1.private.traces.$post(args, options))
    },
  })
}

export function usePostV1PrivateTraces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.traces.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateTracesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>>,
) {
  return ['v1', '/v1/private/traces/:id', toValue(args)] as const
}

export function getV1PrivateTracesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1PrivateTracesIdMutationKey() {
  return ['v1', '/v1/private/traces/:id', 'DELETE'] as const
}

export function getDeleteV1PrivateTracesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateTracesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.traces)[':id']['$delete']>) {
      return parseResponse(client.v1.private.traces[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PrivateTracesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PrivateTracesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1PrivateTracesIdMutationKey() {
  return ['v1', '/v1/private/traces/:id', 'PATCH'] as const
}

export function getPatchV1PrivateTracesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateTracesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.private.traces)[':id']['$patch']>) {
      return parseResponse(client.v1.private.traces[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateTracesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateTracesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateTracesThreadsCommentsDeleteMutationKey() {
  return ['v1', '/v1/private/traces/threads/comments/delete', 'POST'] as const
}

export function getPostV1PrivateTracesThreadsCommentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.comments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.comments.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesThreadsCommentsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.traces.threads.comments.delete.$post>,
    ) {
      return parseResponse(client.v1.private.traces.threads.comments.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesThreadsCommentsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.traces.threads.comments.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.comments.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesThreadsCommentsDeleteMutationOptions<
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

export function getPostV1PrivateTracesThreadsFeedbackScoresDeleteMutationKey() {
  return ['v1', '/v1/private/traces/threads/feedback-scores/delete', 'POST'] as const
}

export function getPostV1PrivateTracesThreadsFeedbackScoresDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesThreadsFeedbackScoresDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.traces.threads['feedback-scores'].delete.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateTracesThreadsFeedbackScoresDelete<
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
                      (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
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
  const mutationDefaults = getPostV1PrivateTracesThreadsFeedbackScoresDeleteMutationOptions<
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

export function getPostV1PrivateTracesCommentsDeleteMutationKey() {
  return ['v1', '/v1/private/traces/comments/delete', 'POST'] as const
}

export function getPostV1PrivateTracesCommentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.comments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.comments.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesCommentsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.traces.comments.delete.$post>,
    ) {
      return parseResponse(client.v1.private.traces.comments.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesCommentsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.traces.comments.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.comments.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesCommentsDeleteMutationOptions<
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

export function getPostV1PrivateTracesIdFeedbackScoresDeleteMutationKey() {
  return ['v1', '/v1/private/traces/:id/feedback-scores/delete', 'POST'] as const
}

export function getPostV1PrivateTracesIdFeedbackScoresDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesIdFeedbackScoresDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.private.traces[':id']['feedback-scores'].delete.$post(args, options),
      )
    },
  })
}

export function usePostV1PrivateTracesIdFeedbackScoresDelete<
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
                      (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
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
  const mutationDefaults = getPostV1PrivateTracesIdFeedbackScoresDeleteMutationOptions<
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

export function getPostV1PrivateTracesThreadsDeleteMutationKey() {
  return ['v1', '/v1/private/traces/threads/delete', 'POST'] as const
}

export function getPostV1PrivateTracesThreadsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesThreadsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.threads.delete.$post>) {
      return parseResponse(client.v1.private.traces.threads.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesThreadsDelete<
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
                  Awaited<ReturnType<typeof client.v1.private.traces.threads.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesThreadsDeleteMutationOptions<
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

export function getPostV1PrivateTracesDeleteMutationKey() {
  return ['v1', '/v1/private/traces/delete', 'POST'] as const
}

export function getPostV1PrivateTracesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.delete.$post>) {
      return parseResponse(client.v1.private.traces.delete.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.traces.delete.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.delete.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateTracesFeedbackScoresNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
  >,
) {
  return ['v1', '/v1/private/traces/feedback-scores/names', toValue(args)] as const
}

export function getV1PrivateTracesFeedbackScoresNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesFeedbackScoresNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces['feedback-scores'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesFeedbackScoresNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
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
                  ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesFeedbackScoresNamesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesFeedbackScoresNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesFeedbackScoresNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces['feedback-scores'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateTracesThreadsFeedbackScoresNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']>
  >,
) {
  return ['v1', '/v1/private/traces/threads/feedback-scores/names', toValue(args)] as const
}

export function getV1PrivateTracesThreadsFeedbackScoresNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesThreadsFeedbackScoresNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.threads['feedback-scores'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesThreadsFeedbackScoresNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']>
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
                    (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
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
                    (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesThreadsFeedbackScoresNamesQueryKey>
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
              (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesThreadsFeedbackScoresNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesThreadsFeedbackScoresNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.threads['feedback-scores'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateTracesStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.stats.$get>>,
) {
  return ['v1', '/v1/private/traces/stats', toValue(args)] as const
}

export function getV1PrivateTracesStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateTracesStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateTracesThreadsThreadIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/traces/threads/:threadId/comments/:commentId', toValue(args)] as const
}

export function getV1PrivateTracesThreadsThreadIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesThreadsThreadIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.threads[':threadId'].comments[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesThreadsThreadIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
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
                    (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
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
                    (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesThreadsThreadIdCommentsCommentIdQueryKey>
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
              (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesThreadsThreadIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesThreadsThreadIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.threads[':threadId'].comments[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateTracesThreadsStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.threads.stats.$get>>,
) {
  return ['v1', '/v1/private/traces/threads/stats', toValue(args)] as const
}

export function getV1PrivateTracesThreadsStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.threads.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesThreadsStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.threads.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesThreadsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.threads.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesThreadsStatsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesThreadsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesThreadsStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.threads.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PrivateTracesTraceIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
    >
  >,
) {
  return ['v1', '/v1/private/traces/:traceId/comments/:commentId', toValue(args)] as const
}

export function getV1PrivateTracesTraceIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesTraceIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces[':traceId'].comments[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesTraceIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
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
                    (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
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
                    (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesTraceIdCommentsCommentIdQueryKey>
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
              (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesTraceIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesTraceIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces[':traceId'].comments[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateTracesThreadsRetrieveMutationKey() {
  return ['v1', '/v1/private/traces/threads/retrieve', 'POST'] as const
}

export function getPostV1PrivateTracesThreadsRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.traces.threads.retrieve.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.retrieve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesThreadsRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.traces.threads.retrieve.$post>,
    ) {
      return parseResponse(client.v1.private.traces.threads.retrieve.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesThreadsRetrieve<
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
                Awaited<ReturnType<typeof client.v1.private.traces.threads.retrieve.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.retrieve.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesThreadsRetrieveMutationOptions<
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

export function getV1PrivateTracesThreadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.threads.$get>>,
) {
  return ['v1', '/v1/private/traces/threads', toValue(args)] as const
}

export function getV1PrivateTracesThreadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.threads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.threads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.threads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateTracesThreadsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.threads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateTracesThreadsOpenMutationKey() {
  return ['v1', '/v1/private/traces/threads/open', 'PUT'] as const
}

export function getPutV1PrivateTracesThreadsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.open.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.open.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateTracesThreadsOpenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.threads.open.$put>) {
      return parseResponse(client.v1.private.traces.threads.open.$put(args, options))
    },
  })
}

export function usePutV1PrivateTracesThreadsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v1.private.traces.threads.open.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.open.$put>,
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
  const mutationDefaults = getPutV1PrivateTracesThreadsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1PrivateTracesThreadsFeedbackScoresMutationKey() {
  return ['v1', '/v1/private/traces/threads/feedback-scores', 'PUT'] as const
}

export function getPutV1PrivateTracesThreadsFeedbackScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateTracesThreadsFeedbackScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>,
    ) {
      return parseResponse(client.v1.private.traces.threads['feedback-scores'].$put(args, options))
    },
  })
}

export function usePutV1PrivateTracesThreadsFeedbackScores<
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
                    ReturnType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>,
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
  const mutationDefaults = getPutV1PrivateTracesThreadsFeedbackScoresMutationOptions<
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

export function getPutV1PrivateTracesFeedbackScoresMutationKey() {
  return ['v1', '/v1/private/traces/feedback-scores', 'PUT'] as const
}

export function getPutV1PrivateTracesFeedbackScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateTracesFeedbackScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['$put']>,
    ) {
      return parseResponse(client.v1.private.traces['feedback-scores'].$put(args, options))
    },
  })
}

export function usePutV1PrivateTracesFeedbackScores<
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
                  Awaited<ReturnType<(typeof client.v1.private.traces)['feedback-scores']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['$put']>,
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
  const mutationDefaults = getPutV1PrivateTracesFeedbackScoresMutationOptions<
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

export function getPostV1PrivateTracesThreadsSearchMutationKey() {
  return ['v1', '/v1/private/traces/threads/search', 'POST'] as const
}

export function getPostV1PrivateTracesThreadsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.traces.threads.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.traces.threads.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesThreadsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.threads.search.$post>) {
      return parseResponse(client.v1.private.traces.threads.search.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesThreadsSearch<
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
                Awaited<ReturnType<typeof client.v1.private.traces.threads.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.traces.threads.search.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesThreadsSearchMutationOptions<
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

export function getPostV1PrivateTracesSearchMutationKey() {
  return ['v1', '/v1/private/traces/search', 'POST'] as const
}

export function getPostV1PrivateTracesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.traces.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateTracesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.traces.search.$post>) {
      return parseResponse(client.v1.private.traces.search.$post(args, options))
    },
  })
}

export function usePostV1PrivateTracesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.traces.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.traces.search.$post>,
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
  const mutationDefaults = getPostV1PrivateTracesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateTracesExistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.exists.$get>>,
) {
  return ['v1', '/v1/private/traces/exists', toValue(args)] as const
}

export function getV1PrivateTracesExistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.exists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PrivateTracesExistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.traces.exists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateTracesExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.private.traces.exists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
            >
          >,
          ReturnType<typeof getV1PrivateTracesExistsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateTracesExistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PrivateTracesExistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.traces.exists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PrivateTracesThreadsThreadModelIdMutationKey() {
  return ['v1', '/v1/private/traces/threads/:threadModelId', 'PATCH'] as const
}

export function getPatchV1PrivateTracesThreadsThreadModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces.threads)[':threadModelId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces.threads)[':threadModelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateTracesThreadsThreadModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces.threads)[':threadModelId']['$patch']>,
    ) {
      return parseResponse(client.v1.private.traces.threads[':threadModelId'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateTracesThreadsThreadModelId<
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
                      (typeof client.v1.private.traces.threads)[':threadModelId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces.threads)[':threadModelId']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateTracesThreadsThreadModelIdMutationOptions<
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

export function getPatchV1PrivateTracesThreadsCommentsCommentIdMutationKey() {
  return ['v1', '/v1/private/traces/threads/comments/:commentId', 'PATCH'] as const
}

export function getPatchV1PrivateTracesThreadsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateTracesThreadsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.private.traces.threads.comments[':commentId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1PrivateTracesThreadsCommentsCommentId<
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
                      (typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']
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
  const mutationDefaults = getPatchV1PrivateTracesThreadsCommentsCommentIdMutationOptions<
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

export function getPatchV1PrivateTracesCommentsCommentIdMutationKey() {
  return ['v1', '/v1/private/traces/comments/:commentId', 'PATCH'] as const
}

export function getPatchV1PrivateTracesCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PrivateTracesCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>,
    ) {
      return parseResponse(client.v1.private.traces.comments[':commentId'].$patch(args, options))
    },
  })
}

export function usePatchV1PrivateTracesCommentsCommentId<
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
                    ReturnType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>,
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
  const mutationDefaults = getPatchV1PrivateTracesCommentsCommentIdMutationOptions<
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

export function getV1PrivateWelcomeWizardQueryKey() {
  return ['v1', '/v1/private/welcome-wizard'] as const
}

export function getV1PrivateWelcomeWizardQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateWelcomeWizardQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['welcome-wizard'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateWelcomeWizard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateWelcomeWizardQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateWelcomeWizardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateWelcomeWizardQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['welcome-wizard'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateWelcomeWizardMutationKey() {
  return ['v1', '/v1/private/welcome-wizard', 'POST'] as const
}

export function getPostV1PrivateWelcomeWizardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.private)['welcome-wizard']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWelcomeWizardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.private)['welcome-wizard']['$post']>,
    ) {
      return parseResponse(client.v1.private['welcome-wizard'].$post(args, options))
    },
  })
}

export function usePostV1PrivateWelcomeWizard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.private)['welcome-wizard']['$post']>,
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
  const mutationDefaults = getPostV1PrivateWelcomeWizardMutationOptions<TError, TOnMutateResult>(
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

export function getV1PrivateWorkspacePermissionsQueryKey() {
  return ['v1', '/v1/private/workspace-permissions'] as const
}

export function getV1PrivateWorkspacePermissionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateWorkspacePermissionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private['workspace-permissions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateWorkspacePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
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
                Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateWorkspacePermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateWorkspacePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateWorkspacePermissionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private['workspace-permissions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PrivateWorkspacesCostsSummariesMutationKey() {
  return ['v1', '/v1/private/workspaces/costs/summaries', 'POST'] as const
}

export function getPostV1PrivateWorkspacesCostsSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.costs.summaries.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.workspaces.costs.summaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWorkspacesCostsSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.workspaces.costs.summaries.$post>,
    ) {
      return parseResponse(client.v1.private.workspaces.costs.summaries.$post(args, options))
    },
  })
}

export function usePostV1PrivateWorkspacesCostsSummaries<
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
                Awaited<ReturnType<typeof client.v1.private.workspaces.costs.summaries.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.workspaces.costs.summaries.$post>,
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
  const mutationDefaults = getPostV1PrivateWorkspacesCostsSummariesMutationOptions<
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

export function getV1PrivateWorkspacesConfigurationsQueryKey() {
  return ['v1', '/v1/private/workspaces/configurations'] as const
}

export function getV1PrivateWorkspacesConfigurationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PrivateWorkspacesConfigurationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.private.workspaces.configurations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PrivateWorkspacesConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
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
                Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PrivateWorkspacesConfigurationsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PrivateWorkspacesConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PrivateWorkspacesConfigurationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.private.workspaces.configurations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PrivateWorkspacesConfigurationsMutationKey() {
  return ['v1', '/v1/private/workspaces/configurations', 'PUT'] as const
}

export function getPutV1PrivateWorkspacesConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.workspaces.configurations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PrivateWorkspacesConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.workspaces.configurations.$put>,
    ) {
      return parseResponse(client.v1.private.workspaces.configurations.$put(args, options))
    },
  })
}

export function usePutV1PrivateWorkspacesConfigurations<
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
                Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.workspaces.configurations.$put>,
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
  const mutationDefaults = getPutV1PrivateWorkspacesConfigurationsMutationOptions<
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

export function getDeleteV1PrivateWorkspacesConfigurationsMutationKey() {
  return ['v1', '/v1/private/workspaces/configurations', 'DELETE'] as const
}

export function getDeleteV1PrivateWorkspacesConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$delete>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PrivateWorkspacesConfigurationsMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.private.workspaces.configurations.$delete(undefined, options))
    },
  })
}

export function useDeleteV1PrivateWorkspacesConfigurations<
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
                  Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$delete>>
                >
              >
            >
          | undefined,
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
  const mutationDefaults = getDeleteV1PrivateWorkspacesConfigurationsMutationOptions<
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

export function getPostV1PrivateWorkspacesCostsMutationKey() {
  return ['v1', '/v1/private/workspaces/costs', 'POST'] as const
}

export function getPostV1PrivateWorkspacesCostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.workspaces.costs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.workspaces.costs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWorkspacesCostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.workspaces.costs.$post>) {
      return parseResponse(client.v1.private.workspaces.costs.$post(args, options))
    },
  })
}

export function usePostV1PrivateWorkspacesCosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.workspaces.costs.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.workspaces.costs.$post>,
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
  const mutationDefaults = getPostV1PrivateWorkspacesCostsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PrivateWorkspacesMetricsMutationKey() {
  return ['v1', '/v1/private/workspaces/metrics', 'POST'] as const
}

export function getPostV1PrivateWorkspacesMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.workspaces.metrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWorkspacesMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.private.workspaces.metrics.$post>) {
      return parseResponse(client.v1.private.workspaces.metrics.$post(args, options))
    },
  })
}

export function usePostV1PrivateWorkspacesMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.workspaces.metrics.$post>,
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
  const mutationDefaults = getPostV1PrivateWorkspacesMetricsMutationOptions<
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

export function getPostV1PrivateWorkspacesMetricsSpansMutationKey() {
  return ['v1', '/v1/private/workspaces/metrics/spans', 'POST'] as const
}

export function getPostV1PrivateWorkspacesMetricsSpansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.spans.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.workspaces.metrics.spans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWorkspacesMetricsSpansMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.workspaces.metrics.spans.$post>,
    ) {
      return parseResponse(client.v1.private.workspaces.metrics.spans.$post(args, options))
    },
  })
}

export function usePostV1PrivateWorkspacesMetricsSpans<
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
                Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.spans.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.workspaces.metrics.spans.$post>,
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
  const mutationDefaults = getPostV1PrivateWorkspacesMetricsSpansMutationOptions<
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

export function getPostV1PrivateWorkspacesTokenUsageNamesMutationKey() {
  return ['v1', '/v1/private/workspaces/token-usage/names', 'POST'] as const
}

export function getPostV1PrivateWorkspacesTokenUsageNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.private.workspaces)['token-usage']['names']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.private.workspaces)['token-usage']['names']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWorkspacesTokenUsageNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.private.workspaces)['token-usage']['names']['$post']
      >,
    ) {
      return parseResponse(client.v1.private.workspaces['token-usage'].names.$post(args, options))
    },
  })
}

export function usePostV1PrivateWorkspacesTokenUsageNames<
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
                  ReturnType<(typeof client.v1.private.workspaces)['token-usage']['names']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.private.workspaces)['token-usage']['names']['$post']>,
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
  const mutationDefaults = getPostV1PrivateWorkspacesTokenUsageNamesMutationOptions<
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

export function getPostV1PrivateWorkspacesMetricsSummariesMutationKey() {
  return ['v1', '/v1/private/workspaces/metrics/summaries', 'POST'] as const
}

export function getPostV1PrivateWorkspacesMetricsSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.summaries.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.private.workspaces.metrics.summaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PrivateWorkspacesMetricsSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.private.workspaces.metrics.summaries.$post>,
    ) {
      return parseResponse(client.v1.private.workspaces.metrics.summaries.$post(args, options))
    },
  })
}

export function usePostV1PrivateWorkspacesMetricsSummaries<
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
                Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.summaries.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.private.workspaces.metrics.summaries.$post>,
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
  const mutationDefaults = getPostV1PrivateWorkspacesMetricsSummariesMutationOptions<
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

export function getV1SessionRedirectDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.datasets.$get>>,
) {
  return ['v1', '/v1/session/redirect/datasets', toValue(args)] as const
}

export function getV1SessionRedirectDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SessionRedirectDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.session.redirect.datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SessionRedirectDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>
              >
            >
          >,
          ReturnType<typeof getV1SessionRedirectDatasetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SessionRedirectDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SessionRedirectDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.session.redirect.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SessionRedirectExperimentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.experiments.$get>>,
) {
  return ['v1', '/v1/session/redirect/experiments', toValue(args)] as const
}

export function getV1SessionRedirectExperimentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.experiments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SessionRedirectExperimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.session.redirect.experiments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SessionRedirectExperiments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.experiments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
              >
            >
          >,
          ReturnType<typeof getV1SessionRedirectExperimentsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SessionRedirectExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SessionRedirectExperimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.session.redirect.experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SessionRedirectOptimizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.optimizations.$get>>,
) {
  return ['v1', '/v1/session/redirect/optimizations', toValue(args)] as const
}

export function getV1SessionRedirectOptimizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.optimizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SessionRedirectOptimizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.session.redirect.optimizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SessionRedirectOptimizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.optimizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1SessionRedirectOptimizationsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SessionRedirectOptimizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SessionRedirectOptimizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.session.redirect.optimizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SessionRedirectProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.projects.$get>>,
) {
  return ['v1', '/v1/session/redirect/projects', toValue(args)] as const
}

export function getV1SessionRedirectProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SessionRedirectProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.session.redirect.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SessionRedirectProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.session.redirect.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>
              >
            >
          >,
          ReturnType<typeof getV1SessionRedirectProjectsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SessionRedirectProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SessionRedirectProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.session.redirect.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIsAlivePingQueryKey() {
  return ['is-alive', '/is-alive/ping'] as const
}

export function getIsAlivePingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIsAlivePingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['is-alive'].ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIsAlivePing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
            >
          >,
          ReturnType<typeof getIsAlivePingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIsAlivePingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIsAlivePingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['is-alive'].ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIsAliveVerQueryKey() {
  return ['is-alive', '/is-alive/ver'] as const
}

export function getIsAliveVerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIsAliveVerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['is-alive'].ver.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIsAliveVer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
            >
          >,
          ReturnType<typeof getIsAliveVerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIsAliveVerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIsAliveVerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['is-alive'].ver.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
