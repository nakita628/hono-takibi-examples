import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetOauthAuthorizeKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function useGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthAuthorizeKey() {
  return ['oauth', '/oauth/authorize', 'POST'] as const
}

export function usePostOauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.authorize.$post> }) =>
        parseResponse(client.oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthAuthorizeContextKey(
  args: InferRequestType<typeof client.oauth.authorize.context.$get>,
) {
  return ['oauth', '/oauth/authorize/context', args] as const
}

export function useGetOauthAuthorizeContext<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.context.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauthAuthorizeContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorizeContext<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.context.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauthAuthorizeContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.context.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellKnownOauthAuthorizationServerKey() {
  return ['.well-known', '/.well-known/oauth-authorization-server'] as const
}

export function useGetWellKnownOauthAuthorizationServer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>>
        >
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
        ? getGetWellKnownOauthAuthorizationServerKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['.well-known']['oauth-authorization-server'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownOauthAuthorizationServer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>>
        >
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
        ? getGetWellKnownOauthAuthorizationServerKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['.well-known']['oauth-authorization-server']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['.well-known']['oauth-authorization-server'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOauthRegisterKey() {
  return ['oauth', '/oauth/register', 'POST'] as const
}

export function usePostOauthRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.register.$post> }) =>
        parseResponse(client.oauth.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthRevokeKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function usePostOauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.revoke.$post> }) =>
        parseResponse(client.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOpikAuthOauthKey() {
  return ['opik', '/opik/auth-oauth', 'POST'] as const
}

export function usePostOpikAuthOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.opik)['auth-oauth']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.opik)['auth-oauth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOpikAuthOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.opik)['auth-oauth']['$post']> },
      ) => parseResponse(client.opik['auth-oauth'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InternalAgentInsightsEnrollmentKey() {
  return ['v1', '/v1/internal/agent-insights/enrollment', 'POST'] as const
}

export function usePostV1InternalAgentInsightsEnrollment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.internal)['agent-insights']['enrollment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InternalAgentInsightsEnrollmentKey()
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
            (typeof client.v1.internal)['agent-insights']['enrollment']['$post']
          >
        },
      ) => parseResponse(client.v1.internal['agent-insights'].enrollment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InternalAnalyticsQueriesProjectsProjectIdKey() {
  return ['v1', '/v1/internal/analytics-queries/projects/:projectId', 'POST'] as const
}

export function usePostV1InternalAnalyticsQueriesProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InternalAnalyticsQueriesProjectsProjectIdKey()
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
            (typeof client.v1.internal)['analytics-queries']['projects'][':projectId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.internal['analytics-queries'].projects[':projectId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InternalAnalyticsQueriesKey() {
  return ['v1', '/v1/internal/analytics-queries', 'POST'] as const
}

export function usePostV1InternalAnalyticsQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal)['analytics-queries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.internal)['analytics-queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InternalAnalyticsQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.internal)['analytics-queries']['$post']> },
      ) => parseResponse(client.v1.internal['analytics-queries'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InternalDashboardSavedQueriesKey() {
  return ['v1', '/v1/internal/dashboard-saved-queries', 'POST'] as const
}

export function usePostV1InternalDashboardSavedQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InternalDashboardSavedQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries']['$post']>
        },
      ) => parseResponse(client.v1.internal['dashboard-saved-queries'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InternalDashboardSavedQueriesIdKey(
  args: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>,
) {
  return ['v1', '/v1/internal/dashboard-saved-queries/:id', args] as const
}

export function useGetV1InternalDashboardSavedQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
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
        ? getGetV1InternalDashboardSavedQueriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.internal['dashboard-saved-queries'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalDashboardSavedQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
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
        ? getGetV1InternalDashboardSavedQueriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.internal)['dashboard-saved-queries'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.internal['dashboard-saved-queries'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1InternalUsageProjectsKey() {
  return ['v1', '/v1/internal/usage/projects', 'POST'] as const
}

export function usePostV1InternalUsageProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.internal.usage.projects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.internal.usage.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InternalUsageProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.internal.usage.projects.$post> },
      ) => parseResponse(client.v1.internal.usage.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InternalUsageBiDatasetsKey() {
  return ['v1', '/v1/internal/usage/bi-datasets'] as const
}

export function useGetV1InternalUsageBiDatasets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
        >
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
        ? getGetV1InternalUsageBiDatasetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-datasets'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageBiDatasets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
        >
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
        ? getGetV1InternalUsageBiDatasetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-datasets'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InternalUsageBiExperimentsKey() {
  return ['v1', '/v1/internal/usage/bi-experiments'] as const
}

export function useGetV1InternalUsageBiExperiments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
        >
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
        ? getGetV1InternalUsageBiExperimentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-experiments'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageBiExperiments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
        >
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
        ? getGetV1InternalUsageBiExperimentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-experiments'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InternalUsageBiSpansKey() {
  return ['v1', '/v1/internal/usage/bi-spans'] as const
}

export function useGetV1InternalUsageBiSpans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
        >
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
        ? getGetV1InternalUsageBiSpansKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-spans'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageBiSpans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
        >
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
        ? getGetV1InternalUsageBiSpansKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-spans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-spans'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InternalUsageWorkspaceSpanCountsBreakdownKey() {
  return ['v1', '/v1/internal/usage/workspace-span-counts-breakdown'] as const
}

export function useGetV1InternalUsageWorkspaceSpanCountsBreakdown<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']>
          >
        >
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
        ? getGetV1InternalUsageWorkspaceSpanCountsBreakdownKey()
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
                (typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']
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
          client.v1.internal.usage['workspace-span-counts-breakdown'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageWorkspaceSpanCountsBreakdown<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']>
          >
        >
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
        ? getGetV1InternalUsageWorkspaceSpanCountsBreakdownKey()
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
                (typeof client.v1.internal.usage)['workspace-span-counts-breakdown']['$get']
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
          client.v1.internal.usage['workspace-span-counts-breakdown'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1InternalUsageWorkspaceSpanCountsKey() {
  return ['v1', '/v1/internal/usage/workspace-span-counts'] as const
}

export function useGetV1InternalUsageWorkspaceSpanCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>>
        >
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
        ? getGetV1InternalUsageWorkspaceSpanCountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.internal.usage['workspace-span-counts'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageWorkspaceSpanCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>>
        >
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
        ? getGetV1InternalUsageWorkspaceSpanCountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-span-counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.internal.usage['workspace-span-counts'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1InternalUsageBiTracesKey() {
  return ['v1', '/v1/internal/usage/bi-traces'] as const
}

export function useGetV1InternalUsageBiTraces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
        >
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
        ? getGetV1InternalUsageBiTracesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-traces'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageBiTraces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
        >
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
        ? getGetV1InternalUsageBiTracesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['bi-traces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.internal.usage['bi-traces'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InternalUsageWorkspaceTraceCountsKey() {
  return ['v1', '/v1/internal/usage/workspace-trace-counts'] as const
}

export function useGetV1InternalUsageWorkspaceTraceCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>>
        >
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
        ? getGetV1InternalUsageWorkspaceTraceCountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.internal.usage['workspace-trace-counts'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InternalUsageWorkspaceTraceCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>>
        >
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
        ? getGetV1InternalUsageWorkspaceTraceCountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.internal.usage)['workspace-trace-counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.internal.usage['workspace-trace-counts'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAgentConfigsBlueprintsKey() {
  return ['v1', '/v1/private/agent-configs/blueprints', 'POST'] as const
}

export function usePostV1PrivateAgentConfigsBlueprints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAgentConfigsBlueprintsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$post']>
        },
      ) => parseResponse(client.v1.private['agent-configs'].blueprints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateAgentConfigsBlueprintsKey() {
  return ['v1', '/v1/private/agent-configs/blueprints', 'PATCH'] as const
}

export function usePatchV1PrivateAgentConfigsBlueprints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateAgentConfigsBlueprintsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['agent-configs']['blueprints']['$patch']>
        },
      ) => parseResponse(client.v1.private['agent-configs'].blueprints.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdKey() {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/projects/:project_id/masks/:mask_id',
    'POST',
  ] as const
}

export function usePostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdKey()
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
            (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['masks'][':mask_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-configs'].blueprints.projects[':project_id'].masks[
            ':mask_id'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAgentConfigsBlueprintsEnvironmentsKey() {
  return ['v1', '/v1/private/agent-configs/blueprints/environments', 'POST'] as const
}

export function usePostV1PrivateAgentConfigsBlueprintsEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAgentConfigsBlueprintsEnvironmentsKey()
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
            (typeof client.v1.private)['agent-configs']['blueprints']['environments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-configs'].blueprints.environments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id',
    args,
  ] as const
}

export function useGetV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
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
          client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
            ':project_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$get']
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
          client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
            ':project_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey() {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id',
    'PUT',
  ] as const
}

export function usePutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey()
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
            (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
            ':project_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey() {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id',
    'DELETE',
  ] as const
}

export function useDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdKey()
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
            (typeof client.v1.private)['agent-configs']['blueprints']['environments'][':env_name']['projects'][':project_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-configs'].blueprints.environments[':env_name'].projects[
            ':project_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAgentConfigsBlueprintsBlueprintIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
  >,
) {
  return ['v1', '/v1/private/agent-configs/blueprints/:blueprint_id', args] as const
}

export function useGetV1PrivateAgentConfigsBlueprintsBlueprintId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsBlueprintIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
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
          client.v1.private['agent-configs'].blueprints[':blueprint_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentConfigsBlueprintsBlueprintId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsBlueprintIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['$get']
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
          client.v1.private['agent-configs'].blueprints[':blueprint_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
  >,
) {
  return [
    'v1',
    '/v1/private/agent-configs/blueprints/projects/:project_id/names/:name',
    args,
  ] as const
}

export function useGetV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
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
          client.v1.private['agent-configs'].blueprints.projects[':project_id'].names[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['projects'][':project_id']['names'][':name']['$get']
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
          client.v1.private['agent-configs'].blueprints.projects[':project_id'].names[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
  >,
) {
  return ['v1', '/v1/private/agent-configs/blueprints/history/projects/:project_id', args] as const
}

export function useGetV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
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
          client.v1.private['agent-configs'].blueprints.history.projects[':project_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['history']['projects'][':project_id']['$get']
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
          client.v1.private['agent-configs'].blueprints.history.projects[':project_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
  >,
) {
  return ['v1', '/v1/private/agent-configs/blueprints/:blueprint_id/deltas', args] as const
}

export function useGetV1PrivateAgentConfigsBlueprintsBlueprintIdDeltas<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
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
          client.v1.private['agent-configs'].blueprints[':blueprint_id'].deltas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentConfigsBlueprintsBlueprintIdDeltas<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints'][':blueprint_id']['deltas']['$get']
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
          client.v1.private['agent-configs'].blueprints[':blueprint_id'].deltas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
  >,
) {
  return ['v1', '/v1/private/agent-configs/blueprints/latest/projects/:project_id', args] as const
}

export function useGetV1PrivateAgentConfigsBlueprintsLatestProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
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
          client.v1.private['agent-configs'].blueprints.latest.projects[':project_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentConfigsBlueprintsLatestProjectsProjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdKey(args)
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
                (typeof client.v1.private)['agent-configs']['blueprints']['latest']['projects'][':project_id']['$get']
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
          client.v1.private['agent-configs'].blueprints.latest.projects[':project_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAgentConfigsBlueprintsRemoveKeysKey() {
  return ['v1', '/v1/private/agent-configs/blueprints/remove-keys', 'POST'] as const
}

export function usePostV1PrivateAgentConfigsBlueprintsRemoveKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAgentConfigsBlueprintsRemoveKeysKey()
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
            (typeof client.v1.private)['agent-configs']['blueprints']['remove-keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-configs'].blueprints['remove-keys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAgentInsightsJobsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']
  >,
) {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId', args] as const
}

export function useGetV1PrivateAgentInsightsJobsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
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
        ? getGetV1PrivateAgentInsightsJobsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentInsightsJobsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
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
        ? getGetV1PrivateAgentInsightsJobsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAgentInsightsJobsProjectIdKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId', 'POST'] as const
}

export function usePostV1PrivateAgentInsightsJobsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAgentInsightsJobsProjectIdKey()
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
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateAgentInsightsJobsProjectIdKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId', 'PATCH'] as const
}

export function usePatchV1PrivateAgentInsightsJobsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateAgentInsightsJobsProjectIdKey()
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
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAgentInsightsJobsProjectIdTriggerKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId/trigger', 'POST'] as const
}

export function usePostV1PrivateAgentInsightsJobsProjectIdTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAgentInsightsJobsProjectIdTriggerKey()
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
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['trigger']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].trigger.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateAgentInsightsJobsProjectIdGuidanceKey() {
  return ['v1', '/v1/private/agent-insights/jobs/:projectId/guidance', 'PUT'] as const
}

export function usePutV1PrivateAgentInsightsJobsProjectIdGuidance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateAgentInsightsJobsProjectIdGuidanceKey()
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
            (typeof client.v1.private)['agent-insights']['jobs'][':projectId']['guidance']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-insights'].jobs[':projectId'].guidance.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAgentInsightsIssuesKey(
  args: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>,
) {
  return ['v1', '/v1/private/agent-insights/issues', args] as const
}

export function useGetV1PrivateAgentInsightsIssues<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentInsightsIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['agent-insights'].issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentInsightsIssues<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentInsightsIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['agent-insights'].issues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAgentInsightsIssuesKey() {
  return ['v1', '/v1/private/agent-insights/issues', 'POST'] as const
}

export function usePostV1PrivateAgentInsightsIssues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['agent-insights']['issues']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAgentInsightsIssuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['agent-insights']['issues']['$post']>
        },
      ) => parseResponse(client.v1.private['agent-insights'].issues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAgentInsightsIssuesIssueIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
  >,
) {
  return ['v1', '/v1/private/agent-insights/issues/:issue_id', args] as const
}

export function useGetV1PrivateAgentInsightsIssuesIssueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentInsightsIssuesIssueIdKey(args)
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
                (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
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
          client.v1.private['agent-insights'].issues[':issue_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAgentInsightsIssuesIssueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAgentInsightsIssuesIssueIdKey(args)
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
                (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$get']
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
          client.v1.private['agent-insights'].issues[':issue_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateAgentInsightsIssuesIssueIdKey() {
  return ['v1', '/v1/private/agent-insights/issues/:issue_id', 'PATCH'] as const
}

export function usePatchV1PrivateAgentInsightsIssuesIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateAgentInsightsIssuesIssueIdKey()
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
            (typeof client.v1.private)['agent-insights']['issues'][':issue_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['agent-insights'].issues[':issue_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAlertsKey(
  args: InferRequestType<typeof client.v1.private.alerts.$get>,
) {
  return ['v1', '/v1/private/alerts', args] as const
}

export function useGetV1PrivateAlerts<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAlerts<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAlertsKey() {
  return ['v1', '/v1/private/alerts', 'POST'] as const
}

export function usePostV1PrivateAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.alerts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.alerts.$post> }) =>
        parseResponse(client.v1.private.alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAlertsDeleteKey() {
  return ['v1', '/v1/private/alerts/delete', 'POST'] as const
}

export function usePostV1PrivateAlertsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.alerts.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.alerts.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAlertsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.alerts.delete.$post> },
      ) => parseResponse(client.v1.private.alerts.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAlertsIdKey(
  args: InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>,
) {
  return ['v1', '/v1/private/alerts/:id', args] as const
}

export function useGetV1PrivateAlertsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAlertsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.alerts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAlertsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.alerts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAlertsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.alerts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateAlertsIdKey() {
  return ['v1', '/v1/private/alerts/:id', 'PUT'] as const
}

export function usePutV1PrivateAlertsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.alerts)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.alerts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateAlertsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.alerts)[':id']['$put']> },
      ) => parseResponse(client.v1.private.alerts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAlertsWebhooksExamplesKey(
  args: InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>,
) {
  return ['v1', '/v1/private/alerts/webhooks/examples', args] as const
}

export function useGetV1PrivateAlertsWebhooksExamples<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAlertsWebhooksExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.alerts.webhooks.examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAlertsWebhooksExamples<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.alerts.webhooks.examples.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAlertsWebhooksExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.examples.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.alerts.webhooks.examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAlertsWebhooksTestsKey() {
  return ['v1', '/v1/private/alerts/webhooks/tests', 'POST'] as const
}

export function usePostV1PrivateAlertsWebhooksTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.alerts.webhooks.tests.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.alerts.webhooks.tests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAlertsWebhooksTestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.alerts.webhooks.tests.$post> },
      ) => parseResponse(client.v1.private.alerts.webhooks.tests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAnnotationQueuesIdItemsAddKey() {
  return ['v1', '/v1/private/annotation-queues/:id/items/add', 'POST'] as const
}

export function usePostV1PrivateAnnotationQueuesIdItemsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAnnotationQueuesIdItemsAddKey()
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
            (typeof client.v1.private)['annotation-queues'][':id']['items']['add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['annotation-queues'][':id'].items.add.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAnnotationQueuesKey(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>,
) {
  return ['v1', '/v1/private/annotation-queues', args] as const
}

export function useGetV1PrivateAnnotationQueues<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAnnotationQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['annotation-queues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAnnotationQueues<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAnnotationQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['annotation-queues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAnnotationQueuesKey() {
  return ['v1', '/v1/private/annotation-queues', 'POST'] as const
}

export function usePostV1PrivateAnnotationQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['annotation-queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAnnotationQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private)['annotation-queues']['$post']> },
      ) => parseResponse(client.v1.private['annotation-queues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAnnotationQueuesBatchKey() {
  return ['v1', '/v1/private/annotation-queues/batch', 'POST'] as const
}

export function usePostV1PrivateAnnotationQueuesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAnnotationQueuesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['annotation-queues']['batch']['$post']>
        },
      ) => parseResponse(client.v1.private['annotation-queues'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAnnotationQueuesDeleteKey() {
  return ['v1', '/v1/private/annotation-queues/delete', 'POST'] as const
}

export function usePostV1PrivateAnnotationQueuesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAnnotationQueuesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['annotation-queues']['delete']['$post']>
        },
      ) => parseResponse(client.v1.private['annotation-queues'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAnnotationQueuesIdKey(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>,
) {
  return ['v1', '/v1/private/annotation-queues/:id', args] as const
}

export function useGetV1PrivateAnnotationQueuesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAnnotationQueuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['annotation-queues'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAnnotationQueuesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAnnotationQueuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['annotation-queues'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateAnnotationQueuesIdKey() {
  return ['v1', '/v1/private/annotation-queues/:id', 'PATCH'] as const
}

export function usePatchV1PrivateAnnotationQueuesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateAnnotationQueuesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['annotation-queues'][':id']['$patch']>
        },
      ) => parseResponse(client.v1.private['annotation-queues'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAnnotationQueuesQueueIdLocksKey(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
  >,
) {
  return ['v1', '/v1/private/annotation-queues/:queueId/locks', args] as const
}

export function useGetV1PrivateAnnotationQueuesQueueIdLocks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAnnotationQueuesQueueIdLocksKey(args)
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
                (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
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
          client.v1.private['annotation-queues'][':queueId'].locks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAnnotationQueuesQueueIdLocks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAnnotationQueuesQueueIdLocksKey(args)
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
                (typeof client.v1.private)['annotation-queues'][':queueId']['locks']['$get']
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
          client.v1.private['annotation-queues'][':queueId'].locks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateAnnotationQueuesQueueIdItemsItemIdLockKey() {
  return ['v1', '/v1/private/annotation-queues/:queueId/items/:itemId/lock', 'PUT'] as const
}

export function usePutV1PrivateAnnotationQueuesQueueIdItemsItemIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateAnnotationQueuesQueueIdItemsItemIdLockKey()
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
            (typeof client.v1.private)['annotation-queues'][':queueId']['items'][':itemId']['lock']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['annotation-queues'][':queueId'].items[':itemId'].lock.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAnnotationQueuesIdItemsDeleteKey() {
  return ['v1', '/v1/private/annotation-queues/:id/items/delete', 'POST'] as const
}

export function usePostV1PrivateAnnotationQueuesIdItemsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAnnotationQueuesIdItemsDeleteKey()
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
            (typeof client.v1.private)['annotation-queues'][':id']['items']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['annotation-queues'][':id'].items.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAnnotationQueuesIdItemsSearchKey() {
  return ['v1', '/v1/private/annotation-queues/:id/items/search', 'POST'] as const
}

export function usePostV1PrivateAnnotationQueuesIdItemsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAnnotationQueuesIdItemsSearchKey()
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
            (typeof client.v1.private)['annotation-queues'][':id']['items']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['annotation-queues'][':id'].items.search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateAssertionResultsKey() {
  return ['v1', '/v1/private/assertion-results', 'PUT'] as const
}

export function usePutV1PrivateAssertionResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['assertion-results']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['assertion-results']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateAssertionResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private)['assertion-results']['$put']> },
      ) => parseResponse(client.v1.private['assertion-results'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAttachmentListKey(
  args: InferRequestType<typeof client.v1.private.attachment.list.$get>,
) {
  return ['v1', '/v1/private/attachment/list', args] as const
}

export function useGetV1PrivateAttachmentList<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.attachment.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAttachmentListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.attachment.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAttachmentList<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.attachment.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAttachmentListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.attachment.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAttachmentUploadCompleteKey() {
  return ['v1', '/v1/private/attachment/upload-complete', 'POST'] as const
}

export function usePostV1PrivateAttachmentUploadComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.attachment)['upload-complete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.attachment)['upload-complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAttachmentUploadCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.attachment)['upload-complete']['$post']>
        },
      ) => parseResponse(client.v1.private.attachment['upload-complete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAttachmentDeleteKey() {
  return ['v1', '/v1/private/attachment/delete', 'POST'] as const
}

export function usePostV1PrivateAttachmentDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.attachment.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.attachment.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAttachmentDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.attachment.delete.$post> },
      ) => parseResponse(client.v1.private.attachment.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAttachmentDownloadKey(
  args: InferRequestType<typeof client.v1.private.attachment.download.$get>,
) {
  return ['v1', '/v1/private/attachment/download', args] as const
}

export function useGetV1PrivateAttachmentDownload<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.attachment.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAttachmentDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.attachment.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAttachmentDownload<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.attachment.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAttachmentDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.attachment.download.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.attachment.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAttachmentUploadStartKey() {
  return ['v1', '/v1/private/attachment/upload-start', 'POST'] as const
}

export function usePostV1PrivateAttachmentUploadStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.attachment)['upload-start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.attachment)['upload-start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAttachmentUploadStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.attachment)['upload-start']['$post']>
        },
      ) => parseResponse(client.v1.private.attachment['upload-start'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateAttachmentUploadKey() {
  return ['v1', '/v1/private/attachment/upload', 'PUT'] as const
}

export function usePutV1PrivateAttachmentUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.attachment.upload.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.attachment.upload.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateAttachmentUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.attachment.upload.$put> },
      ) => parseResponse(client.v1.private.attachment.upload.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAuthKey() {
  return ['v1', '/v1/private/auth', 'POST'] as const
}

export function usePostV1PrivateAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.auth.$post> }) =>
        parseResponse(client.v1.private.auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAuthWorkspaceKey() {
  return ['v1', '/v1/private/auth/workspace'] as const
}

export function useGetV1PrivateAuthWorkspace<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>>
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
        ? getGetV1PrivateAuthWorkspaceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.auth.workspace.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAuthWorkspace<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>>
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
        ? getGetV1PrivateAuthWorkspaceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.auth.workspace.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.auth.workspace.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateAutomationsEvaluatorsKey(
  args: InferRequestType<typeof client.v1.private.automations.evaluators.$get>,
) {
  return ['v1', '/v1/private/automations/evaluators', args] as const
}

export function useGetV1PrivateAutomationsEvaluators<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.automations.evaluators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAutomationsEvaluatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.automations.evaluators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAutomationsEvaluators<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.automations.evaluators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAutomationsEvaluatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.automations.evaluators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateAutomationsEvaluatorsKey() {
  return ['v1', '/v1/private/automations/evaluators', 'POST'] as const
}

export function usePostV1PrivateAutomationsEvaluators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.automations.evaluators.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.automations.evaluators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAutomationsEvaluatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.automations.evaluators.$post> },
      ) => parseResponse(client.v1.private.automations.evaluators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateAutomationsEvaluatorsDeleteKey() {
  return ['v1', '/v1/private/automations/evaluators/delete', 'POST'] as const
}

export function usePostV1PrivateAutomationsEvaluatorsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.automations.evaluators.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.automations.evaluators.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateAutomationsEvaluatorsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.private.automations.evaluators.delete.$post> },
      ) => parseResponse(client.v1.private.automations.evaluators.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAutomationsEvaluatorsIdKey(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>,
) {
  return ['v1', '/v1/private/automations/evaluators/:id', args] as const
}

export function useGetV1PrivateAutomationsEvaluatorsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAutomationsEvaluatorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.automations.evaluators[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAutomationsEvaluatorsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateAutomationsEvaluatorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.automations.evaluators[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateAutomationsEvaluatorsIdKey() {
  return ['v1', '/v1/private/automations/evaluators/:id', 'PATCH'] as const
}

export function usePatchV1PrivateAutomationsEvaluatorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateAutomationsEvaluatorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['$patch']>
        },
      ) =>
        parseResponse(client.v1.private.automations.evaluators[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateAutomationsEvaluatorsIdLogsKey(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>,
) {
  return ['v1', '/v1/private/automations/evaluators/:id/logs', args] as const
}

export function useGetV1PrivateAutomationsEvaluatorsIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
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
        ? getGetV1PrivateAutomationsEvaluatorsIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.automations.evaluators[':id'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateAutomationsEvaluatorsIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
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
        ? getGetV1PrivateAutomationsEvaluatorsIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.automations.evaluators)[':id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.automations.evaluators[':id'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateChatCompletionsKey() {
  return ['v1', '/v1/private/chat/completions', 'POST'] as const
}

export function usePostV1PrivateChatCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.chat.completions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.chat.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateChatCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.chat.completions.$post> },
      ) => parseResponse(client.v1.private.chat.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDashboardsKey(
  args: InferRequestType<typeof client.v1.private.dashboards.$get>,
) {
  return ['v1', '/v1/private/dashboards', args] as const
}

export function useGetV1PrivateDashboards<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDashboards<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateDashboardsKey() {
  return ['v1', '/v1/private/dashboards', 'POST'] as const
}

export function usePostV1PrivateDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.dashboards.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.dashboards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.dashboards.$post> },
      ) => parseResponse(client.v1.private.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDashboardsDashboardIdKey(
  args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>,
) {
  return ['v1', '/v1/private/dashboards/:dashboardId', args] as const
}

export function useGetV1PrivateDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDashboardsDashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.dashboards[':dashboardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDashboardsDashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.dashboards[':dashboardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateDashboardsDashboardIdKey() {
  return ['v1', '/v1/private/dashboards/:dashboardId', 'DELETE'] as const
}

export function useDeleteV1PrivateDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateDashboardsDashboardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$delete']>
        },
      ) => parseResponse(client.v1.private.dashboards[':dashboardId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateDashboardsDashboardIdKey() {
  return ['v1', '/v1/private/dashboards/:dashboardId', 'PATCH'] as const
}

export function usePatchV1PrivateDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateDashboardsDashboardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.dashboards)[':dashboardId']['$patch']>
        },
      ) => parseResponse(client.v1.private.dashboards[':dashboardId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDashboardsDeleteBatchKey() {
  return ['v1', '/v1/private/dashboards/delete-batch', 'POST'] as const
}

export function usePostV1PrivateDashboardsDeleteBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDashboardsDeleteBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.dashboards)['delete-batch']['$post']>
        },
      ) => parseResponse(client.v1.private.dashboards['delete-batch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryKey() {
  return ['v1', '/v1/private/dashboards/:dashboardId/widgets/:widgetId/query', 'POST'] as const
}

export function usePostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryKey()
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
            (typeof client.v1.private.dashboards)[':dashboardId']['widgets'][':widgetId']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.dashboards[':dashboardId'].widgets[':widgetId'].query.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsIdItemsChangesKey() {
  return ['v1', '/v1/private/datasets/:id/items/changes', 'POST'] as const
}

export function usePostV1PrivateDatasetsIdItemsChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['changes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsIdItemsChangesKey()
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
            (typeof client.v1.private.datasets)[':id']['items']['changes']['$post']
          >
        },
      ) => parseResponse(client.v1.private.datasets[':id'].items.changes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateDatasetsItemsBatchKey() {
  return ['v1', '/v1/private/datasets/items/batch', 'PATCH'] as const
}

export function usePatchV1PrivateDatasetsItemsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.datasets.items.batch.$patch>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.items.batch.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateDatasetsItemsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.items.batch.$patch> },
      ) => parseResponse(client.v1.private.datasets.items.batch.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsKey(
  args: InferRequestType<typeof client.v1.private.datasets.$get>,
) {
  return ['v1', '/v1/private/datasets', args] as const
}

export function useGetV1PrivateDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsKey() {
  return ['v1', '/v1/private/datasets', 'POST'] as const
}

export function usePostV1PrivateDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.$post> }) =>
        parseResponse(client.v1.private.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateDatasetsItemsKey() {
  return ['v1', '/v1/private/datasets/items', 'PUT'] as const
}

export function usePutV1PrivateDatasetsItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.items.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.items.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateDatasetsItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.items.$put> },
      ) => parseResponse(client.v1.private.datasets.items.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsItemsFromCsvKey() {
  return ['v1', '/v1/private/datasets/items/from-csv', 'POST'] as const
}

export function usePostV1PrivateDatasetsItemsFromCsv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsItemsFromCsvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.datasets.items)['from-csv']['$post']>
        },
      ) => parseResponse(client.v1.private.datasets.items['from-csv'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsItemsFromJsonKey() {
  return ['v1', '/v1/private/datasets/items/from-json', 'POST'] as const
}

export function usePostV1PrivateDatasetsItemsFromJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets.items)['from-json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets.items)['from-json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsItemsFromJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.datasets.items)['from-json']['$post']>
        },
      ) => parseResponse(client.v1.private.datasets.items['from-json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsDatasetIdItemsFromSpansKey() {
  return ['v1', '/v1/private/datasets/:dataset_id/items/from-spans', 'POST'] as const
}

export function usePostV1PrivateDatasetsDatasetIdItemsFromSpans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsDatasetIdItemsFromSpansKey()
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
            (typeof client.v1.private.datasets)[':dataset_id']['items']['from-spans']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets[':dataset_id'].items['from-spans'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsDatasetIdItemsFromTracesKey() {
  return ['v1', '/v1/private/datasets/:dataset_id/items/from-traces', 'POST'] as const
}

export function usePostV1PrivateDatasetsDatasetIdItemsFromTraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsDatasetIdItemsFromTracesKey()
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
            (typeof client.v1.private.datasets)[':dataset_id']['items']['from-traces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets[':dataset_id'].items['from-traces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdKey(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>,
) {
  return ['v1', '/v1/private/datasets/:id', args] as const
}

export function useGetV1PrivateDatasetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.datasets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.datasets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateDatasetsIdKey() {
  return ['v1', '/v1/private/datasets/:id', 'PUT'] as const
}

export function usePutV1PrivateDatasetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateDatasetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.datasets)[':id']['$put']> },
      ) => parseResponse(client.v1.private.datasets[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateDatasetsIdKey() {
  return ['v1', '/v1/private/datasets/:id', 'DELETE'] as const
}

export function useDeleteV1PrivateDatasetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateDatasetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.datasets)[':id']['$delete']> },
      ) => parseResponse(client.v1.private.datasets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsDeleteKey() {
  return ['v1', '/v1/private/datasets/delete', 'POST'] as const
}

export function usePostV1PrivateDatasetsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.delete.$post> },
      ) => parseResponse(client.v1.private.datasets.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsItemsDeleteKey() {
  return ['v1', '/v1/private/datasets/items/delete', 'POST'] as const
}

export function usePostV1PrivateDatasetsItemsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.datasets.items.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.items.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsItemsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.items.delete.$post> },
      ) => parseResponse(client.v1.private.datasets.items.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsDeleteBatchKey() {
  return ['v1', '/v1/private/datasets/delete-batch', 'POST'] as const
}

export function usePostV1PrivateDatasetsDeleteBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)['delete-batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets)['delete-batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsDeleteBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.datasets)['delete-batch']['$post']> },
      ) => parseResponse(client.v1.private.datasets['delete-batch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsExportJobsJobIdDownloadKey(
  args: InferRequestType<
    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
  >,
) {
  return ['v1', '/v1/private/datasets/export-jobs/:jobId/download', args] as const
}

export function useGetV1PrivateDatasetsExportJobsJobIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsExportJobsJobIdDownloadKey(args)
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
                (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
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
          client.v1.private.datasets['export-jobs'][':jobId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsExportJobsJobIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsExportJobsJobIdDownloadKey(args)
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
                (typeof client.v1.private.datasets)['export-jobs'][':jobId']['download']['$get']
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
          client.v1.private.datasets['export-jobs'][':jobId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsIdExpansionsKey() {
  return ['v1', '/v1/private/datasets/:id/expansions', 'POST'] as const
}

export function usePostV1PrivateDatasetsIdExpansions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsIdExpansionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.datasets)[':id']['expansions']['$post']>
        },
      ) => parseResponse(client.v1.private.datasets[':id'].expansions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdItemsExperimentsItemsKey(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
  >,
) {
  return ['v1', '/v1/private/datasets/:id/items/experiments/items', args] as const
}

export function useGetV1PrivateDatasetsIdItemsExperimentsItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsExperimentsItemsKey(args)
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
                (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
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
          client.v1.private.datasets[':id'].items.experiments.items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdItemsExperimentsItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsExperimentsItemsKey(args)
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
                (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['$get']
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
          client.v1.private.datasets[':id'].items.experiments.items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsRetrieveKey() {
  return ['v1', '/v1/private/datasets/retrieve', 'POST'] as const
}

export function usePostV1PrivateDatasetsRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.datasets.retrieve.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.retrieve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.retrieve.$post> },
      ) => parseResponse(client.v1.private.datasets.retrieve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdItemsExperimentsItemsStatsKey(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
  >,
) {
  return ['v1', '/v1/private/datasets/:id/items/experiments/items/stats', args] as const
}

export function useGetV1PrivateDatasetsIdItemsExperimentsItemsStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsExperimentsItemsStatsKey(args)
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
                (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
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
          client.v1.private.datasets[':id'].items.experiments.items.stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdItemsExperimentsItemsStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsExperimentsItemsStatsKey(args)
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
                (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['stats']['$get']
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
          client.v1.private.datasets[':id'].items.experiments.items.stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsExportJobsJobIdKey(
  args: InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>,
) {
  return ['v1', '/v1/private/datasets/export-jobs/:jobId', args] as const
}

export function useGetV1PrivateDatasetsExportJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
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
        ? getGetV1PrivateDatasetsExportJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.datasets['export-jobs'][':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsExportJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
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
        ? getGetV1PrivateDatasetsExportJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)['export-jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.datasets['export-jobs'][':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsExportJobsKey() {
  return ['v1', '/v1/private/datasets/export-jobs'] as const
}

export function useGetV1PrivateDatasetsExportJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
        >
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
        ? getGetV1PrivateDatasetsExportJobsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets['export-jobs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsExportJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
        >
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
        ? getGetV1PrivateDatasetsExportJobsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)['export-jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets['export-jobs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsItemsItemIdKey(
  args: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>,
) {
  return ['v1', '/v1/private/datasets/items/:itemId', args] as const
}

export function useGetV1PrivateDatasetsItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsItemsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets.items[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsItemsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsItemsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets.items[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateDatasetsItemsItemIdKey() {
  return ['v1', '/v1/private/datasets/items/:itemId', 'PATCH'] as const
}

export function usePatchV1PrivateDatasetsItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateDatasetsItemsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.datasets.items)[':itemId']['$patch']>
        },
      ) => parseResponse(client.v1.private.datasets.items[':itemId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdItemsKey(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>,
) {
  return ['v1', '/v1/private/datasets/:id/items', args] as const
}

export function useGetV1PrivateDatasetsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.datasets[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.datasets[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsKey(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
  >,
) {
  return ['v1', '/v1/private/datasets/:id/items/experiments/items/output/columns', args] as const
}

export function useGetV1PrivateDatasetsIdItemsExperimentsItemsOutputColumns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsKey(args)
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
                (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
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
          client.v1.private.datasets[':id'].items.experiments.items.output.columns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdItemsExperimentsItemsOutputColumns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsKey(args)
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
                (typeof client.v1.private.datasets)[':id']['items']['experiments']['items']['output']['columns']['$get']
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
          client.v1.private.datasets[':id'].items.experiments.items.output.columns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateDatasetsExportJobsJobIdMarkViewedKey() {
  return ['v1', '/v1/private/datasets/export-jobs/:jobId/mark-viewed', 'PUT'] as const
}

export function usePutV1PrivateDatasetsExportJobsJobIdMarkViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateDatasetsExportJobsJobIdMarkViewedKey()
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
            (typeof client.v1.private.datasets)['export-jobs'][':jobId']['mark-viewed']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets['export-jobs'][':jobId']['mark-viewed'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsIdExportKey() {
  return ['v1', '/v1/private/datasets/:id/export', 'POST'] as const
}

export function usePostV1PrivateDatasetsIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsIdExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.datasets)[':id']['export']['$post']> },
      ) => parseResponse(client.v1.private.datasets[':id'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsItemsStreamKey() {
  return ['v1', '/v1/private/datasets/items/stream', 'POST'] as const
}

export function usePostV1PrivateDatasetsItemsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.datasets.items.stream.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.datasets.items.stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsItemsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.datasets.items.stream.$post> },
      ) => parseResponse(client.v1.private.datasets.items.stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdVersionsDiffKey(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>,
) {
  return ['v1', '/v1/private/datasets/:id/versions/diff', args] as const
}

export function useGetV1PrivateDatasetsIdVersionsDiff<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
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
        ? getGetV1PrivateDatasetsIdVersionsDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets[':id'].versions.diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdVersionsDiff<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
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
        ? getGetV1PrivateDatasetsIdVersionsDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['diff']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets[':id'].versions.diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsIdVersionsHashVersionHashTagsKey() {
  return ['v1', '/v1/private/datasets/:id/versions/hash/:versionHash/tags', 'POST'] as const
}

export function usePostV1PrivateDatasetsIdVersionsHashVersionHashTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsIdVersionsHashVersionHashTagsKey()
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
            (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets[':id'].versions.hash[':versionHash'].tags.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTagKey() {
  return ['v1', '/v1/private/datasets/:id/versions/:versionHash/tags/:tag', 'DELETE'] as const
}

export function useDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateDatasetsIdVersionsVersionHashTagsTagKey()
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
            (typeof client.v1.private.datasets)[':id']['versions'][':versionHash']['tags'][':tag']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets[':id'].versions[':versionHash'].tags[':tag'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdVersionsHashVersionHashKey(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
  >,
) {
  return ['v1', '/v1/private/datasets/:id/versions/hash/:versionHash', args] as const
}

export function useGetV1PrivateDatasetsIdVersionsHashVersionHash<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdVersionsHashVersionHashKey(args)
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
                (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
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
          client.v1.private.datasets[':id'].versions.hash[':versionHash'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdVersionsHashVersionHash<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdVersionsHashVersionHashKey(args)
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
                (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$get']
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
          client.v1.private.datasets[':id'].versions.hash[':versionHash'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateDatasetsIdVersionsHashVersionHashKey() {
  return ['v1', '/v1/private/datasets/:id/versions/hash/:versionHash', 'PATCH'] as const
}

export function usePatchV1PrivateDatasetsIdVersionsHashVersionHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateDatasetsIdVersionsHashVersionHashKey()
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
            (typeof client.v1.private.datasets)[':id']['versions']['hash'][':versionHash']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets[':id'].versions.hash[':versionHash'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateDatasetsIdVersionsKey(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>,
) {
  return ['v1', '/v1/private/datasets/:id/versions', args] as const
}

export function useGetV1PrivateDatasetsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateDatasetsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateDatasetsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.datasets)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.datasets[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsIdVersionsRestoreKey() {
  return ['v1', '/v1/private/datasets/:id/versions/restore', 'POST'] as const
}

export function usePostV1PrivateDatasetsIdVersionsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsIdVersionsRestoreKey()
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
            (typeof client.v1.private.datasets)[':id']['versions']['restore']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.private.datasets[':id'].versions.restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateDatasetsIdVersionsRetrieveKey() {
  return ['v1', '/v1/private/datasets/:id/versions/retrieve', 'POST'] as const
}

export function usePostV1PrivateDatasetsIdVersionsRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateDatasetsIdVersionsRetrieveKey()
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
            (typeof client.v1.private.datasets)[':id']['versions']['retrieve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.datasets[':id'].versions.retrieve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateEnvironmentsKey() {
  return ['v1', '/v1/private/environments'] as const
}

export function useGetV1PrivateEnvironments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
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
        ? getGetV1PrivateEnvironmentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateEnvironments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
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
        ? getGetV1PrivateEnvironmentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateEnvironmentsKey() {
  return ['v1', '/v1/private/environments', 'POST'] as const
}

export function usePostV1PrivateEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.environments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.environments.$post> },
      ) => parseResponse(client.v1.private.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateEnvironmentsDeleteKey() {
  return ['v1', '/v1/private/environments/delete', 'POST'] as const
}

export function usePostV1PrivateEnvironmentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.environments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.environments.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateEnvironmentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.environments.delete.$post> },
      ) => parseResponse(client.v1.private.environments.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateEnvironmentsIdKey(
  args: InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>,
) {
  return ['v1', '/v1/private/environments/:id', args] as const
}

export function useGetV1PrivateEnvironmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateEnvironmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.environments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateEnvironmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.environments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateEnvironmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.environments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateEnvironmentsIdKey() {
  return ['v1', '/v1/private/environments/:id', 'PATCH'] as const
}

export function usePatchV1PrivateEnvironmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.environments)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.environments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateEnvironmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.environments)[':id']['$patch']> },
      ) => parseResponse(client.v1.private.environments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateExperimentsBatchKey() {
  return ['v1', '/v1/private/experiments/batch', 'PATCH'] as const
}

export function usePatchV1PrivateExperimentsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.batch.$patch>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.batch.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateExperimentsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.batch.$patch> },
      ) => parseResponse(client.v1.private.experiments.batch.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateExperimentsCancelKey() {
  return ['v1', '/v1/private/experiments/cancel', 'PUT'] as const
}

export function usePutV1PrivateExperimentsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.cancel.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.cancel.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateExperimentsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.cancel.$put> },
      ) => parseResponse(client.v1.private.experiments.cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateExperimentsKey(
  args: InferRequestType<typeof client.v1.private.experiments.$get>,
) {
  return ['v1', '/v1/private/experiments', args] as const
}

export function useGetV1PrivateExperiments<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateExperiments<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsKey() {
  return ['v1', '/v1/private/experiments', 'POST'] as const
}

export function usePostV1PrivateExperiments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.$post> },
      ) => parseResponse(client.v1.private.experiments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsItemsKey() {
  return ['v1', '/v1/private/experiments/items', 'POST'] as const
}

export function usePostV1PrivateExperimentsItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.items.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.items.$post> },
      ) => parseResponse(client.v1.private.experiments.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsItemsDeleteKey() {
  return ['v1', '/v1/private/experiments/items/delete', 'POST'] as const
}

export function usePostV1PrivateExperimentsItemsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.items.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.items.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsItemsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.items.delete.$post> },
      ) => parseResponse(client.v1.private.experiments.items.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsDeleteKey() {
  return ['v1', '/v1/private/experiments/delete', 'POST'] as const
}

export function usePostV1PrivateExperimentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.delete.$post> },
      ) => parseResponse(client.v1.private.experiments.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsExecuteKey() {
  return ['v1', '/v1/private/experiments/execute', 'POST'] as const
}

export function usePostV1PrivateExperimentsExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.experiments.execute.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.execute.$post> },
      ) => parseResponse(client.v1.private.experiments.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateExperimentsItemsBulkKey() {
  return ['v1', '/v1/private/experiments/items/bulk', 'PUT'] as const
}

export function usePutV1PrivateExperimentsItemsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.items.bulk.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.items.bulk.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateExperimentsItemsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.items.bulk.$put> },
      ) => parseResponse(client.v1.private.experiments.items.bulk.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateExperimentsFeedbackScoresNamesKey(
  args: InferRequestType<
    (typeof client.v1.private.experiments)['feedback-scores']['names']['$get']
  >,
) {
  return ['v1', '/v1/private/experiments/feedback-scores/names', args] as const
}

export function useGetV1PrivateExperimentsFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.experiments)['feedback-scores']['names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateExperimentsFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.experiments['feedback-scores'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateExperimentsFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.experiments)['feedback-scores']['names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateExperimentsFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.experiments)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.experiments['feedback-scores'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateExperimentsGroupsKey(
  args: InferRequestType<typeof client.v1.private.experiments.groups.$get>,
) {
  return ['v1', '/v1/private/experiments/groups', args] as const
}

export function useGetV1PrivateExperimentsGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.experiments.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.experiments.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateExperimentsGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.experiments.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.experiments.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateExperimentsGroupsAggregationsKey(
  args: InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>,
) {
  return ['v1', '/v1/private/experiments/groups/aggregations', args] as const
}

export function useGetV1PrivateExperimentsGroupsAggregations<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsGroupsAggregationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.experiments.groups.aggregations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateExperimentsGroupsAggregations<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.experiments.groups.aggregations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsGroupsAggregationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.groups.aggregations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.experiments.groups.aggregations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsFinishKey() {
  return ['v1', '/v1/private/experiments/finish', 'POST'] as const
}

export function usePostV1PrivateExperimentsFinish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.experiments.finish.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.finish.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsFinishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.finish.$post> },
      ) => parseResponse(client.v1.private.experiments.finish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateExperimentsIdKey(
  args: InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>,
) {
  return ['v1', '/v1/private/experiments/:id', args] as const
}

export function useGetV1PrivateExperimentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.experiments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateExperimentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.experiments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.experiments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateExperimentsIdKey() {
  return ['v1', '/v1/private/experiments/:id', 'PATCH'] as const
}

export function usePatchV1PrivateExperimentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.experiments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateExperimentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.experiments)[':id']['$patch']> },
      ) => parseResponse(client.v1.private.experiments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateExperimentsItemsIdKey(
  args: InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>,
) {
  return ['v1', '/v1/private/experiments/items/:id', args] as const
}

export function useGetV1PrivateExperimentsItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.experiments.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateExperimentsItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.experiments.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateExperimentsItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.experiments.items)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.experiments.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsItemsStreamKey() {
  return ['v1', '/v1/private/experiments/items/stream', 'POST'] as const
}

export function usePostV1PrivateExperimentsItemsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.experiments.items.stream.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.items.stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsItemsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.items.stream.$post> },
      ) => parseResponse(client.v1.private.experiments.items.stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateExperimentsStreamKey() {
  return ['v1', '/v1/private/experiments/stream', 'POST'] as const
}

export function usePostV1PrivateExperimentsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.experiments.stream.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.experiments.stream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateExperimentsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.experiments.stream.$post> },
      ) => parseResponse(client.v1.private.experiments.stream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateFeedbackDefinitionsKey(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>,
) {
  return ['v1', '/v1/private/feedback-definitions', args] as const
}

export function useGetV1PrivateFeedbackDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateFeedbackDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['feedback-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateFeedbackDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateFeedbackDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['feedback-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateFeedbackDefinitionsKey() {
  return ['v1', '/v1/private/feedback-definitions', 'POST'] as const
}

export function usePostV1PrivateFeedbackDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateFeedbackDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private)['feedback-definitions']['$post']> },
      ) => parseResponse(client.v1.private['feedback-definitions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateFeedbackDefinitionsIdKey(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>,
) {
  return ['v1', '/v1/private/feedback-definitions/:id', args] as const
}

export function useGetV1PrivateFeedbackDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateFeedbackDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['feedback-definitions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateFeedbackDefinitionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateFeedbackDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['feedback-definitions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateFeedbackDefinitionsIdKey() {
  return ['v1', '/v1/private/feedback-definitions/:id', 'PUT'] as const
}

export function usePutV1PrivateFeedbackDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateFeedbackDefinitionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$put']>
        },
      ) => parseResponse(client.v1.private['feedback-definitions'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateFeedbackDefinitionsIdKey() {
  return ['v1', '/v1/private/feedback-definitions/:id', 'DELETE'] as const
}

export function useDeleteV1PrivateFeedbackDefinitionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['feedback-definitions'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateFeedbackDefinitionsIdKey()
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
            (typeof client.v1.private)['feedback-definitions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.private['feedback-definitions'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateFeedbackDefinitionsDeleteKey() {
  return ['v1', '/v1/private/feedback-definitions/delete', 'POST'] as const
}

export function usePostV1PrivateFeedbackDefinitionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['feedback-definitions']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateFeedbackDefinitionsDeleteKey()
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
            (typeof client.v1.private)['feedback-definitions']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.private['feedback-definitions'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateGuardrailsPoliciesKey(
  args: InferRequestType<typeof client.v1.private.guardrails.policies.$get>,
) {
  return ['v1', '/v1/private/guardrails/policies', args] as const
}

export function useGetV1PrivateGuardrailsPolicies<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.guardrails.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateGuardrailsPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.guardrails.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateGuardrailsPolicies<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.guardrails.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateGuardrailsPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.guardrails.policies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateGuardrailsPoliciesKey() {
  return ['v1', '/v1/private/guardrails/policies', 'POST'] as const
}

export function usePostV1PrivateGuardrailsPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.guardrails.policies.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.guardrails.policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateGuardrailsPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.guardrails.policies.$post> },
      ) => parseResponse(client.v1.private.guardrails.policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateGuardrailsPoliciesIdKey(
  args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>,
) {
  return ['v1', '/v1/private/guardrails/policies/:id', args] as const
}

export function useGetV1PrivateGuardrailsPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateGuardrailsPoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.guardrails.policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateGuardrailsPoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateGuardrailsPoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.guardrails.policies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateGuardrailsPoliciesIdKey() {
  return ['v1', '/v1/private/guardrails/policies/:id', 'PUT'] as const
}

export function usePutV1PrivateGuardrailsPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateGuardrailsPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$put']> },
      ) => parseResponse(client.v1.private.guardrails.policies[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateGuardrailsPoliciesIdKey() {
  return ['v1', '/v1/private/guardrails/policies/:id', 'DELETE'] as const
}

export function useDeleteV1PrivateGuardrailsPoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateGuardrailsPoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.guardrails.policies)[':id']['$delete']>
        },
      ) => parseResponse(client.v1.private.guardrails.policies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateGuardrailsKey() {
  return ['v1', '/v1/private/guardrails', 'POST'] as const
}

export function usePostV1PrivateGuardrails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.guardrails.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.guardrails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateGuardrailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.guardrails.$post> },
      ) => parseResponse(client.v1.private.guardrails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateGuardrailsValidationsKey() {
  return ['v1', '/v1/private/guardrails/validations', 'POST'] as const
}

export function usePostV1PrivateGuardrailsValidations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.guardrails.validations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.guardrails.validations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateGuardrailsValidationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.guardrails.validations.$post> },
      ) => parseResponse(client.v1.private.guardrails.validations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateInsightsViewsKey(
  args: InferRequestType<(typeof client.v1.private)['insights-views']['$get']>,
) {
  return ['v1', '/v1/private/insights-views', args] as const
}

export function useGetV1PrivateInsightsViews<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['insights-views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateInsightsViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['insights-views'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateInsightsViews<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['insights-views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateInsightsViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['insights-views'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateInsightsViewsKey() {
  return ['v1', '/v1/private/insights-views', 'POST'] as const
}

export function usePostV1PrivateInsightsViews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['insights-views']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['insights-views']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateInsightsViewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private)['insights-views']['$post']> },
      ) => parseResponse(client.v1.private['insights-views'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateInsightsViewsInsightsViewIdKey(
  args: InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>,
) {
  return ['v1', '/v1/private/insights-views/:insightsViewId', args] as const
}

export function useGetV1PrivateInsightsViewsInsightsViewId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
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
        ? getGetV1PrivateInsightsViewsInsightsViewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private['insights-views'][':insightsViewId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateInsightsViewsInsightsViewId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
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
        ? getGetV1PrivateInsightsViewsInsightsViewIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private['insights-views'][':insightsViewId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateInsightsViewsInsightsViewIdKey() {
  return ['v1', '/v1/private/insights-views/:insightsViewId', 'DELETE'] as const
}

export function useDeleteV1PrivateInsightsViewsInsightsViewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateInsightsViewsInsightsViewIdKey()
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
            (typeof client.v1.private)['insights-views'][':insightsViewId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['insights-views'][':insightsViewId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateInsightsViewsInsightsViewIdKey() {
  return ['v1', '/v1/private/insights-views/:insightsViewId', 'PATCH'] as const
}

export function usePatchV1PrivateInsightsViewsInsightsViewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateInsightsViewsInsightsViewIdKey()
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
            (typeof client.v1.private)['insights-views'][':insightsViewId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['insights-views'][':insightsViewId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateInsightsViewsDeleteBatchKey() {
  return ['v1', '/v1/private/insights-views/delete-batch', 'POST'] as const
}

export function usePostV1PrivateInsightsViewsDeleteBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['insights-views']['delete-batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateInsightsViewsDeleteBatchKey()
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
            (typeof client.v1.private)['insights-views']['delete-batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['insights-views']['delete-batch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryKey() {
  return [
    'v1',
    '/v1/private/insights-views/:insightsViewId/widgets/:widgetId/query',
    'POST',
  ] as const
}

export function usePostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryKey()
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
            (typeof client.v1.private)['insights-views'][':insightsViewId']['widgets'][':widgetId']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['insights-views'][':insightsViewId'].widgets[':widgetId'].query.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLlmModelsKey() {
  return ['v1', '/v1/private/llm/models'] as const
}

export function useGetV1PrivateLlmModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PrivateLlmModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.llm.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLlmModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PrivateLlmModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.llm.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateLlmModelsProfilesKey() {
  return ['v1', '/v1/private/llm/models/profiles'] as const
}

export function useGetV1PrivateLlmModelsProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>>
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
        ? getGetV1PrivateLlmModelsProfilesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.llm.models.profiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLlmModelsProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>>
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
        ? getGetV1PrivateLlmModelsProfilesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.llm.models.profiles.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.llm.models.profiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateLlmProviderKeyDeleteKey() {
  return ['v1', '/v1/private/llm-provider-key/delete', 'POST'] as const
}

export function usePostV1PrivateLlmProviderKeyDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLlmProviderKeyDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['llm-provider-key']['delete']['$post']>
        },
      ) => parseResponse(client.v1.private['llm-provider-key'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLlmProviderKeyKey() {
  return ['v1', '/v1/private/llm-provider-key'] as const
}

export function useGetV1PrivateLlmProviderKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
        >
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
        ? getGetV1PrivateLlmProviderKeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['llm-provider-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLlmProviderKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
        >
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
        ? getGetV1PrivateLlmProviderKeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['llm-provider-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateLlmProviderKeyKey() {
  return ['v1', '/v1/private/llm-provider-key', 'POST'] as const
}

export function usePostV1PrivateLlmProviderKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['llm-provider-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLlmProviderKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private)['llm-provider-key']['$post']> },
      ) => parseResponse(client.v1.private['llm-provider-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLlmProviderKeyIdKey(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>,
) {
  return ['v1', '/v1/private/llm-provider-key/:id', args] as const
}

export function useGetV1PrivateLlmProviderKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLlmProviderKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['llm-provider-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLlmProviderKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLlmProviderKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['llm-provider-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateLlmProviderKeyIdKey() {
  return ['v1', '/v1/private/llm-provider-key/:id', 'PATCH'] as const
}

export function usePatchV1PrivateLlmProviderKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateLlmProviderKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['llm-provider-key'][':id']['$patch']>
        },
      ) => parseResponse(client.v1.private['llm-provider-key'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLlmProviderKeyAuthConfigTestKey() {
  return ['v1', '/v1/private/llm-provider-key/auth-config/test', 'POST'] as const
}

export function usePostV1PrivateLlmProviderKeyAuthConfigTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLlmProviderKeyAuthConfigTestKey()
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
            (typeof client.v1.private)['llm-provider-key']['auth-config']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['llm-provider-key']['auth-config'].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLocalRunnersJobsJobIdLogsKey(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
  >,
) {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/logs', args] as const
}

export function useGetV1PrivateLocalRunnersJobsJobIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersJobsJobIdLogsKey(args)
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
                (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
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
          client.v1.private['local-runners'].jobs[':jobId'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLocalRunnersJobsJobIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersJobsJobIdLogsKey(args)
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
                (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$get']
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
          client.v1.private['local-runners'].jobs[':jobId'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersJobsJobIdLogsKey() {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/logs', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersJobsJobIdLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersJobsJobIdLogsKey()
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
            (typeof client.v1.private)['local-runners']['jobs'][':jobId']['logs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'].jobs[':jobId'].logs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersJobsJobIdCancelKey() {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/cancel', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersJobsJobIdCancelKey()
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
            (typeof client.v1.private)['local-runners']['jobs'][':jobId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'].jobs[':jobId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/bridge/commands', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersRunnerIdBridgeCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].bridge.commands.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersJobsKey() {
  return ['v1', '/v1/private/local-runners/jobs', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['local-runners']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['local-runners']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private)['local-runners']['jobs']['$post']> },
      ) => parseResponse(client.v1.private['local-runners'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLocalRunnersRunnerIdKey(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>,
) {
  return ['v1', '/v1/private/local-runners/:runnerId', args] as const
}

export function useGetV1PrivateLocalRunnersRunnerId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersRunnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['local-runners'][':runnerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLocalRunnersRunnerId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersRunnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['local-runners'][':runnerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateLocalRunnersRunnerIdKey() {
  return ['v1', '/v1/private/local-runners/:runnerId', 'DELETE'] as const
}

export function useDeleteV1PrivateLocalRunnersRunnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateLocalRunnersRunnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['$delete']>
        },
      ) =>
        parseResponse(client.v1.private['local-runners'][':runnerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdKey(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
  >,
) {
  return ['v1', '/v1/private/local-runners/:runnerId/bridge/commands/:commandId', args] as const
}

export function useGetV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdKey(args)
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
                (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
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
          client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdKey(args)
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
                (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['$get']
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
          client.v1.private['local-runners'][':runnerId'].bridge.commands[':commandId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateLocalRunnersJobsJobIdKey(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>,
) {
  return ['v1', '/v1/private/local-runners/jobs/:jobId', args] as const
}

export function useGetV1PrivateLocalRunnersJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
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
        ? getGetV1PrivateLocalRunnersJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['local-runners'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLocalRunnersJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
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
        ? getGetV1PrivateLocalRunnersJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners']['jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['local-runners'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersRunnerIdHeartbeatsKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/heartbeats', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersRunnerIdHeartbeats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersRunnerIdHeartbeatsKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['heartbeats']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].heartbeats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateLocalRunnersRunnerIdJobsKey(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>,
) {
  return ['v1', '/v1/private/local-runners/:runnerId/jobs', args] as const
}

export function useGetV1PrivateLocalRunnersRunnerIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
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
        ? getGetV1PrivateLocalRunnersRunnerIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].jobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLocalRunnersRunnerIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
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
        ? getGetV1PrivateLocalRunnersRunnerIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private)['local-runners'][':runnerId']['jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].jobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateLocalRunnersKey(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['$get']>,
) {
  return ['v1', '/v1/private/local-runners', args] as const
}

export function useGetV1PrivateLocalRunners<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['local-runners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateLocalRunners<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['local-runners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateLocalRunnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['local-runners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['local-runners'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsNextKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/bridge/commands/next', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersRunnerIdBridgeCommandsNext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsNextKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands']['next']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].bridge.commands.next.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersRunnerIdJobsNextKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/jobs/next', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersRunnerIdJobsNext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersRunnerIdJobsNextKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['jobs']['next']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].jobs.next.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateLocalRunnersRunnerIdChecklistKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/checklist', 'PATCH'] as const
}

export function usePatchV1PrivateLocalRunnersRunnerIdChecklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateLocalRunnersRunnerIdChecklistKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['checklist']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].checklist.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateLocalRunnersRunnerIdAgentsKey() {
  return ['v1', '/v1/private/local-runners/:runnerId/agents', 'PUT'] as const
}

export function usePutV1PrivateLocalRunnersRunnerIdAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateLocalRunnersRunnerIdAgentsKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['agents']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].agents.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsKey() {
  return [
    'v1',
    '/v1/private/local-runners/:runnerId/bridge/commands/:commandId/results',
    'POST',
  ] as const
}

export function usePostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResults<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsKey()
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
            (typeof client.v1.private)['local-runners'][':runnerId']['bridge']['commands'][':commandId']['results']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'][':runnerId'].bridge.commands[
            ':commandId'
          ].results.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateLocalRunnersJobsJobIdResultsKey() {
  return ['v1', '/v1/private/local-runners/jobs/:jobId/results', 'POST'] as const
}

export function usePostV1PrivateLocalRunnersJobsJobIdResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateLocalRunnersJobsJobIdResultsKey()
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
            (typeof client.v1.private)['local-runners']['jobs'][':jobId']['results']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private['local-runners'].jobs[':jobId'].results.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateManualEvaluationSpansKey() {
  return ['v1', '/v1/private/manual-evaluation/spans', 'POST'] as const
}

export function usePostV1PrivateManualEvaluationSpans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateManualEvaluationSpansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['manual-evaluation']['spans']['$post']>
        },
      ) => parseResponse(client.v1.private['manual-evaluation'].spans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateManualEvaluationThreadsKey() {
  return ['v1', '/v1/private/manual-evaluation/threads', 'POST'] as const
}

export function usePostV1PrivateManualEvaluationThreads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateManualEvaluationThreadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['manual-evaluation']['threads']['$post']>
        },
      ) => parseResponse(client.v1.private['manual-evaluation'].threads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateManualEvaluationTracesKey() {
  return ['v1', '/v1/private/manual-evaluation/traces', 'POST'] as const
}

export function usePostV1PrivateManualEvaluationTraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateManualEvaluationTracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private)['manual-evaluation']['traces']['$post']>
        },
      ) => parseResponse(client.v1.private['manual-evaluation'].traces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateOllamaModelsKey() {
  return ['v1', '/v1/private/ollama/models', 'POST'] as const
}

export function usePostV1PrivateOllamaModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollama.models.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.ollama.models.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateOllamaModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.ollama.models.$post> },
      ) => parseResponse(client.v1.private.ollama.models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateOllamaTestConnectionKey() {
  return ['v1', '/v1/private/ollama/test-connection', 'POST'] as const
}

export function usePostV1PrivateOllamaTestConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.ollama)['test-connection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.ollama)['test-connection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateOllamaTestConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.ollama)['test-connection']['$post']> },
      ) => parseResponse(client.v1.private.ollama['test-connection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateOllieStateKey() {
  return ['v1', '/v1/private/ollie/state'] as const
}

export function useGetV1PrivateOllieState<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
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
        ? getGetV1PrivateOllieStateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.ollie.state.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateOllieState<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
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
        ? getGetV1PrivateOllieStateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.ollie.state.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateOllieStateKey() {
  return ['v1', '/v1/private/ollie/state', 'PUT'] as const
}

export function usePutV1PrivateOllieState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.ollie.state.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateOllieStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.ollie.state.$put> },
      ) => parseResponse(client.v1.private.ollie.state.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateOllieStateKey() {
  return ['v1', '/v1/private/ollie/state', 'DELETE'] as const
}

export function useDeleteV1PrivateOllieState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.ollie.state.$delete>>>
        >
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
  const swrKey = customKey ?? getDeleteV1PrivateOllieStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.private.ollie.state.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateOtelV1TracesKey() {
  return ['v1', '/v1/private/otel/v1/traces', 'POST'] as const
}

export function usePostV1PrivateOtelV1Traces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.otel.v1.traces.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.otel.v1.traces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateOtelV1TracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.otel.v1.traces.$post> },
      ) => parseResponse(client.v1.private.otel.v1.traces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateOptimizationsKey(
  args: InferRequestType<typeof client.v1.private.optimizations.$get>,
) {
  return ['v1', '/v1/private/optimizations', args] as const
}

export function useGetV1PrivateOptimizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.optimizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.optimizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateOptimizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.optimizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.optimizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateOptimizationsKey() {
  return ['v1', '/v1/private/optimizations', 'PUT'] as const
}

export function usePutV1PrivateOptimizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.optimizations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateOptimizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.optimizations.$put> },
      ) => parseResponse(client.v1.private.optimizations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateOptimizationsKey() {
  return ['v1', '/v1/private/optimizations', 'POST'] as const
}

export function usePostV1PrivateOptimizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.optimizations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.optimizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateOptimizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.optimizations.$post> },
      ) => parseResponse(client.v1.private.optimizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateOptimizationsDeleteKey() {
  return ['v1', '/v1/private/optimizations/delete', 'POST'] as const
}

export function usePostV1PrivateOptimizationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.optimizations.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.optimizations.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateOptimizationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.optimizations.delete.$post> },
      ) => parseResponse(client.v1.private.optimizations.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateOptimizationsIdKey(
  args: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>,
) {
  return ['v1', '/v1/private/optimizations/:id', args] as const
}

export function useGetV1PrivateOptimizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateOptimizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.optimizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateOptimizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateOptimizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.optimizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateOptimizationsIdKey() {
  return ['v1', '/v1/private/optimizations/:id', 'PUT'] as const
}

export function usePutV1PrivateOptimizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.optimizations)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.optimizations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateOptimizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.optimizations)[':id']['$put']> },
      ) => parseResponse(client.v1.private.optimizations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateOptimizationsStudioIdLogsKey(
  args: InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>,
) {
  return ['v1', '/v1/private/optimizations/studio/:id/logs', args] as const
}

export function useGetV1PrivateOptimizationsStudioIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
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
        ? getGetV1PrivateOptimizationsStudioIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.optimizations.studio[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateOptimizationsStudioIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
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
        ? getGetV1PrivateOptimizationsStudioIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.optimizations.studio)[':id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.optimizations.studio[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivatePairingSessionsSessionIdActivateKey() {
  return ['v1', '/v1/private/pairing/sessions/:sessionId/activate', 'POST'] as const
}

export function usePostV1PrivatePairingSessionsSessionIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePairingSessionsSessionIdActivateKey()
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
            (typeof client.v1.private.pairing.sessions)[':sessionId']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.pairing.sessions[':sessionId'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivatePairingSessionsKey() {
  return ['v1', '/v1/private/pairing/sessions', 'POST'] as const
}

export function usePostV1PrivatePairingSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.pairing.sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.pairing.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePairingSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.pairing.sessions.$post> },
      ) => parseResponse(client.v1.private.pairing.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdAlertsKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/alerts', args] as const
}

export function useGetV1PrivateProjectsProjectIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsProjectIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsProjectIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':projectId']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdDashboardsKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/dashboards', args] as const
}

export function useGetV1PrivateProjectsProjectIdDashboards<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].dashboards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdDashboards<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['dashboards']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].dashboards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdDatasetsKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/datasets', args] as const
}

export function useGetV1PrivateProjectsProjectIdDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['datasets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdExperimentsKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/experiments', args] as const
}

export function useGetV1PrivateProjectsProjectIdExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].experiments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['experiments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].experiments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdOptimizationsKey(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['optimizations']['$get']
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/optimizations', args] as const
}

export function useGetV1PrivateProjectsProjectIdOptimizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['optimizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].optimizations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdOptimizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['optimizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['optimizations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].optimizations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdPromptsKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/prompts', args] as const
}

export function useGetV1PrivateProjectsProjectIdPrompts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdPromptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdPrompts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdPromptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['prompts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsKey(
  args: InferRequestType<typeof client.v1.private.projects.$get>,
) {
  return ['v1', '/v1/private/projects', args] as const
}

export function useGetV1PrivateProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateProjectsKey() {
  return ['v1', '/v1/private/projects', 'POST'] as const
}

export function usePostV1PrivateProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.projects.$post> }) =>
        parseResponse(client.v1.private.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsIdKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>,
) {
  return ['v1', '/v1/private/projects/:id', args] as const
}

export function useGetV1PrivateProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateProjectsIdKey() {
  return ['v1', '/v1/private/projects/:id', 'DELETE'] as const
}

export function useDeleteV1PrivateProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.projects)[':id']['$delete']> },
      ) => parseResponse(client.v1.private.projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateProjectsIdKey() {
  return ['v1', '/v1/private/projects/:id', 'PATCH'] as const
}

export function usePatchV1PrivateProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.projects)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.projects)[':id']['$patch']> },
      ) => parseResponse(client.v1.private.projects[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateProjectsDeleteKey() {
  return ['v1', '/v1/private/projects/delete', 'POST'] as const
}

export function usePostV1PrivateProjectsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.projects.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.projects.delete.$post> },
      ) => parseResponse(client.v1.private.projects.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsFeedbackScoresNamesKey(
  args: InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>,
) {
  return ['v1', '/v1/private/projects/feedback-scores/names', args] as const
}

export function useGetV1PrivateProjectsFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateProjectsFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects['feedback-scores'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateProjectsFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects['feedback-scores'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateProjectsIdTokenUsageNamesKey(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']
  >,
) {
  return ['v1', '/v1/private/projects/:id/token-usage/names', args] as const
}

export function useGetV1PrivateProjectsIdTokenUsageNames<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
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
        ? getGetV1PrivateProjectsIdTokenUsageNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':id']['token-usage'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsIdTokenUsageNames<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
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
        ? getGetV1PrivateProjectsIdTokenUsageNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':id']['token-usage']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':id']['token-usage'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateProjectsIdKpiCardsKey() {
  return ['v1', '/v1/private/projects/:id/kpi-cards', 'POST'] as const
}

export function usePostV1PrivateProjectsIdKpiCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsIdKpiCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.projects)[':id']['kpi-cards']['$post']>
        },
      ) => parseResponse(client.v1.private.projects[':id']['kpi-cards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateProjectsIdMetricsKey() {
  return ['v1', '/v1/private/projects/:id/metrics', 'POST'] as const
}

export function usePostV1PrivateProjectsIdMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsIdMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.projects)[':id']['metrics']['$post']>
        },
      ) => parseResponse(client.v1.private.projects[':id'].metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsStatsKey(
  args: InferRequestType<typeof client.v1.private.projects.stats.$get>,
) {
  return ['v1', '/v1/private/projects/stats', args] as const
}

export function useGetV1PrivateProjectsStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.projects.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.projects.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.projects.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.projects.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateProjectsRetrieveKey() {
  return ['v1', '/v1/private/projects/retrieve', 'POST'] as const
}

export function usePostV1PrivateProjectsRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.projects.retrieve.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.projects.retrieve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.projects.retrieve.$post> },
      ) => parseResponse(client.v1.private.projects.retrieve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivatePromptsKey(
  args: InferRequestType<typeof client.v1.private.prompts.$get>,
) {
  return ['v1', '/v1/private/prompts', args] as const
}

export function useGetV1PrivatePrompts<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivatePrompts<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivatePromptsKey() {
  return ['v1', '/v1/private/prompts', 'POST'] as const
}

export function usePostV1PrivatePrompts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.prompts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.prompts.$post> }) =>
        parseResponse(client.v1.private.prompts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivatePromptsVersionsKey() {
  return ['v1', '/v1/private/prompts/versions', 'POST'] as const
}

export function usePostV1PrivatePromptsVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.versions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.prompts.versions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.prompts.versions.$post> },
      ) => parseResponse(client.v1.private.prompts.versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivatePromptsVersionsKey() {
  return ['v1', '/v1/private/prompts/versions', 'PATCH'] as const
}

export function usePatchV1PrivatePromptsVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.prompts.versions.$patch>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.prompts.versions.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivatePromptsVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.prompts.versions.$patch> },
      ) => parseResponse(client.v1.private.prompts.versions.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivatePromptsIdKey(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>,
) {
  return ['v1', '/v1/private/prompts/:id', args] as const
}

export function useGetV1PrivatePromptsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.prompts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivatePromptsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.prompts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivatePromptsIdKey() {
  return ['v1', '/v1/private/prompts/:id', 'PUT'] as const
}

export function usePutV1PrivatePromptsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.prompts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivatePromptsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.prompts)[':id']['$put']> },
      ) => parseResponse(client.v1.private.prompts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivatePromptsIdKey() {
  return ['v1', '/v1/private/prompts/:id', 'DELETE'] as const
}

export function useDeleteV1PrivatePromptsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.prompts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivatePromptsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.prompts)[':id']['$delete']> },
      ) => parseResponse(client.v1.private.prompts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivatePromptsDeleteKey() {
  return ['v1', '/v1/private/prompts/delete', 'POST'] as const
}

export function usePostV1PrivatePromptsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.prompts.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.prompts.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.prompts.delete.$post> },
      ) => parseResponse(client.v1.private.prompts.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivatePromptsByCommitCommitKey(
  args: InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>,
) {
  return ['v1', '/v1/private/prompts/by-commit/:commit', args] as const
}

export function useGetV1PrivatePromptsByCommitCommit<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsByCommitCommitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.prompts['by-commit'][':commit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivatePromptsByCommitCommit<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsByCommitCommitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)['by-commit'][':commit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.prompts['by-commit'][':commit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivatePromptsVersionsVersionIdKey(
  args: InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>,
) {
  return ['v1', '/v1/private/prompts/versions/:versionId', args] as const
}

export function useGetV1PrivatePromptsVersionsVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.prompts.versions[':versionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivatePromptsVersionsVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts.versions)[':versionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.prompts.versions[':versionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivatePromptsPromptIdVersionsByNumberVersionNumberKey(
  args: InferRequestType<
    (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
  >,
) {
  return ['v1', '/v1/private/prompts/:promptId/versions/by-number/:versionNumber', args] as const
}

export function useGetV1PrivatePromptsPromptIdVersionsByNumberVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsPromptIdVersionsByNumberVersionNumberKey(args)
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
                (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
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
          client.v1.private.prompts[':promptId'].versions['by-number'][':versionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivatePromptsPromptIdVersionsByNumberVersionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsPromptIdVersionsByNumberVersionNumberKey(args)
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
                (typeof client.v1.private.prompts)[':promptId']['versions']['by-number'][':versionNumber']['$get']
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
          client.v1.private.prompts[':promptId'].versions['by-number'][':versionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivatePromptsIdVersionsKey(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>,
) {
  return ['v1', '/v1/private/prompts/:id/versions', args] as const
}

export function useGetV1PrivatePromptsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.prompts[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivatePromptsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivatePromptsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.prompts)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.prompts[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivatePromptsRetrieveByCommitsKey() {
  return ['v1', '/v1/private/prompts/retrieve-by-commits', 'POST'] as const
}

export function usePostV1PrivatePromptsRetrieveByCommits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsRetrieveByCommitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.prompts)['retrieve-by-commits']['$post']>
        },
      ) =>
        parseResponse(client.v1.private.prompts['retrieve-by-commits'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivatePromptsPromptIdVersionsVersionIdRestoreKey() {
  return ['v1', '/v1/private/prompts/:promptId/versions/:versionId/restore', 'POST'] as const
}

export function usePostV1PrivatePromptsPromptIdVersionsVersionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsPromptIdVersionsVersionIdRestoreKey()
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
            (typeof client.v1.private.prompts)[':promptId']['versions'][':versionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.prompts[':promptId'].versions[':versionId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivatePromptsVersionsRetrieveKey() {
  return ['v1', '/v1/private/prompts/versions/retrieve', 'POST'] as const
}

export function usePostV1PrivatePromptsVersionsRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.prompts.versions.retrieve.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.prompts.versions.retrieve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsVersionsRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.private.prompts.versions.retrieve.$post> },
      ) => parseResponse(client.v1.private.prompts.versions.retrieve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivatePromptsVersionsRetrieveByIdsKey() {
  return ['v1', '/v1/private/prompts/versions/retrieve-by-ids', 'POST'] as const
}

export function usePostV1PrivatePromptsVersionsRetrieveByIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivatePromptsVersionsRetrieveByIdsKey()
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
            (typeof client.v1.private.prompts.versions)['retrieve-by-ids']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.prompts.versions['retrieve-by-ids'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivatePromptsVersionsVersionIdEnvironmentsKey() {
  return ['v1', '/v1/private/prompts/versions/:versionId/environments', 'PATCH'] as const
}

export function usePatchV1PrivatePromptsVersionsVersionIdEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivatePromptsVersionsVersionIdEnvironmentsKey()
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
            (typeof client.v1.private.prompts.versions)[':versionId']['environments']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.prompts.versions[':versionId'].environments.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdActivitiesKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/activities', args] as const
}

export function useGetV1PrivateProjectsProjectIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].activities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['activities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.projects[':projectId'].activities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateReportFailuresKey(
  args: InferRequestType<(typeof client.v1.private)['report-failures']['$get']>,
) {
  return ['v1', '/v1/private/report-failures', args] as const
}

export function useGetV1PrivateReportFailures<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['report-failures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateReportFailuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['report-failures'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateReportFailures<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private)['report-failures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateReportFailuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['report-failures'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateReportFailuresKey() {
  return ['v1', '/v1/private/report-failures', 'POST'] as const
}

export function usePostV1PrivateReportFailures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['report-failures']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['report-failures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateReportFailuresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private)['report-failures']['$post']> },
      ) => parseResponse(client.v1.private['report-failures'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateProjectsProjectIdReportsReportIdCompleteKey() {
  return ['v1', '/v1/private/projects/:projectId/reports/:reportId/complete', 'POST'] as const
}

export function usePostV1PrivateProjectsProjectIdReportsReportIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsProjectIdReportsReportIdCompleteKey()
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
            (typeof client.v1.private.projects)[':projectId']['reports'][':reportId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.projects[':projectId'].reports[':reportId'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateProjectsProjectIdReportsGenerateKey() {
  return ['v1', '/v1/private/projects/:projectId/reports/generate', 'POST'] as const
}

export function usePostV1PrivateProjectsProjectIdReportsGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateProjectsProjectIdReportsGenerateKey()
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
            (typeof client.v1.private.projects)[':projectId']['reports']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.projects[':projectId'].reports.generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdReportsPreferencesKey(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
  >,
) {
  return ['v1', '/v1/private/projects/:projectId/reports/preferences', args] as const
}

export function useGetV1PrivateProjectsProjectIdReportsPreferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsProjectIdReportsPreferencesKey(args)
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
                (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
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
          client.v1.private.projects[':projectId'].reports.preferences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdReportsPreferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateProjectsProjectIdReportsPreferencesKey(args)
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
                (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$get']
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
          client.v1.private.projects[':projectId'].reports.preferences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateProjectsProjectIdReportsPreferencesKey() {
  return ['v1', '/v1/private/projects/:projectId/reports/preferences', 'PUT'] as const
}

export function usePutV1PrivateProjectsProjectIdReportsPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateProjectsProjectIdReportsPreferencesKey()
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
            (typeof client.v1.private.projects)[':projectId']['reports']['preferences']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.projects[':projectId'].reports.preferences.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateProjectsProjectIdReportsKey(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>,
) {
  return ['v1', '/v1/private/projects/:projectId/reports', args] as const
}

export function useGetV1PrivateProjectsProjectIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateProjectsProjectIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
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
        ? getGetV1PrivateProjectsProjectIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.projects)[':projectId']['reports']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.projects[':projectId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateRetentionRulesKey(
  args: InferRequestType<typeof client.v1.private.retention.rules.$get>,
) {
  return ['v1', '/v1/private/retention/rules', args] as const
}

export function useGetV1PrivateRetentionRules<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.retention.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateRetentionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.retention.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateRetentionRules<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.retention.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateRetentionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.retention.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateRetentionRulesKey() {
  return ['v1', '/v1/private/retention/rules', 'POST'] as const
}

export function usePostV1PrivateRetentionRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.retention.rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.retention.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateRetentionRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.retention.rules.$post> },
      ) => parseResponse(client.v1.private.retention.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateRetentionRulesRuleIdKey(
  args: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>,
) {
  return ['v1', '/v1/private/retention/rules/:ruleId', args] as const
}

export function useGetV1PrivateRetentionRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateRetentionRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.retention.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateRetentionRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateRetentionRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.retention.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateRetentionRulesRuleIdKey() {
  return ['v1', '/v1/private/retention/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteV1PrivateRetentionRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateRetentionRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.retention.rules)[':ruleId']['$delete']>
        },
      ) => parseResponse(client.v1.private.retention.rules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateTogglesKey() {
  return ['v1', '/v1/private/toggles'] as const
}

export function useGetV1PrivateToggles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PrivateTogglesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.toggles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateToggles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PrivateTogglesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.toggles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.toggles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateSpansIdCommentsKey() {
  return ['v1', '/v1/private/spans/:id/comments', 'POST'] as const
}

export function usePostV1PrivateSpansIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.spans)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateSpansIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.spans)[':id']['comments']['$post']> },
      ) => parseResponse(client.v1.private.spans[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateSpansIdFeedbackScoresKey() {
  return ['v1', '/v1/private/spans/:id/feedback-scores', 'PUT'] as const
}

export function usePutV1PrivateSpansIdFeedbackScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateSpansIdFeedbackScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['$put']>
        },
      ) =>
        parseResponse(client.v1.private.spans[':id']['feedback-scores'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateSpansBatchKey() {
  return ['v1', '/v1/private/spans/batch', 'POST'] as const
}

export function usePostV1PrivateSpansBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.batch.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.spans.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateSpansBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.spans.batch.$post> },
      ) => parseResponse(client.v1.private.spans.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateSpansBatchKey() {
  return ['v1', '/v1/private/spans/batch', 'PATCH'] as const
}

export function usePatchV1PrivateSpansBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.batch.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.spans.batch.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateSpansBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.spans.batch.$patch> },
      ) => parseResponse(client.v1.private.spans.batch.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateSpansKey(
  args: InferRequestType<typeof client.v1.private.spans.$get>,
) {
  return ['v1', '/v1/private/spans', args] as const
}

export function useGetV1PrivateSpans<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.spans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PrivateSpansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateSpans<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.spans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PrivateSpansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateSpansKey() {
  return ['v1', '/v1/private/spans', 'POST'] as const
}

export function usePostV1PrivateSpans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.spans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateSpansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.spans.$post> }) =>
        parseResponse(client.v1.private.spans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateSpansIdKey(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>,
) {
  return ['v1', '/v1/private/spans/:id', args] as const
}

export function useGetV1PrivateSpansId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateSpansId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.spans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateSpansIdKey() {
  return ['v1', '/v1/private/spans/:id', 'DELETE'] as const
}

export function useDeleteV1PrivateSpansId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.spans)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateSpansIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.spans)[':id']['$delete']> },
      ) => parseResponse(client.v1.private.spans[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateSpansIdKey() {
  return ['v1', '/v1/private/spans/:id', 'PATCH'] as const
}

export function usePatchV1PrivateSpansId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.spans)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateSpansIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.spans)[':id']['$patch']> },
      ) => parseResponse(client.v1.private.spans[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateSpansCommentsDeleteKey() {
  return ['v1', '/v1/private/spans/comments/delete', 'POST'] as const
}

export function usePostV1PrivateSpansCommentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.spans.comments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.spans.comments.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateSpansCommentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.spans.comments.delete.$post> },
      ) => parseResponse(client.v1.private.spans.comments.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateSpansIdFeedbackScoresDeleteKey() {
  return ['v1', '/v1/private/spans/:id/feedback-scores/delete', 'POST'] as const
}

export function usePostV1PrivateSpansIdFeedbackScoresDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateSpansIdFeedbackScoresDeleteKey()
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
            (typeof client.v1.private.spans)[':id']['feedback-scores']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.spans[':id']['feedback-scores'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateSpansFeedbackScoresNamesKey(
  args: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>,
) {
  return ['v1', '/v1/private/spans/feedback-scores/names', args] as const
}

export function useGetV1PrivateSpansFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateSpansFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.spans['feedback-scores'].names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateSpansFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateSpansFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.spans)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.spans['feedback-scores'].names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateSpansSpanIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
  >,
) {
  return ['v1', '/v1/private/spans/:spanId/comments/:commentId', args] as const
}

export function useGetV1PrivateSpansSpanIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansSpanIdCommentsCommentIdKey(args)
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
                (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
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
          client.v1.private.spans[':spanId'].comments[':commentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateSpansSpanIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansSpanIdCommentsCommentIdKey(args)
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
                (typeof client.v1.private.spans)[':spanId']['comments'][':commentId']['$get']
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
          client.v1.private.spans[':spanId'].comments[':commentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateSpansStatsKey(
  args: InferRequestType<typeof client.v1.private.spans.stats.$get>,
) {
  return ['v1', '/v1/private/spans/stats', args] as const
}

export function useGetV1PrivateSpansStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.spans.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateSpansStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.spans.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateSpansFeedbackScoresKey() {
  return ['v1', '/v1/private/spans/feedback-scores', 'PUT'] as const
}

export function usePutV1PrivateSpansFeedbackScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans)['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateSpansFeedbackScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.spans)['feedback-scores']['$put']> },
      ) => parseResponse(client.v1.private.spans['feedback-scores'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateSpansSearchKey() {
  return ['v1', '/v1/private/spans/search', 'POST'] as const
}

export function usePostV1PrivateSpansSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.spans.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateSpansSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.spans.search.$post> },
      ) => parseResponse(client.v1.private.spans.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateSpansExistsKey(
  args: InferRequestType<typeof client.v1.private.spans.exists.$get>,
) {
  return ['v1', '/v1/private/spans/exists', args] as const
}

export function useGetV1PrivateSpansExists<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.spans.exists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans.exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateSpansExists<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.spans.exists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateSpansExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.spans.exists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.spans.exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateSpansCommentsCommentIdKey() {
  return ['v1', '/v1/private/spans/comments/:commentId', 'PATCH'] as const
}

export function usePatchV1PrivateSpansCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateSpansCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.spans.comments)[':commentId']['$patch']>
        },
      ) => parseResponse(client.v1.private.spans.comments[':commentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesThreadsIdCommentsKey() {
  return ['v1', '/v1/private/traces/threads/:id/comments', 'POST'] as const
}

export function usePostV1PrivateTracesThreadsIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces.threads)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesThreadsIdCommentsKey()
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
            (typeof client.v1.private.traces.threads)[':id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.private.traces.threads[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesIdCommentsKey() {
  return ['v1', '/v1/private/traces/:id/comments', 'POST'] as const
}

export function usePostV1PrivateTracesIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces)[':id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.traces)[':id']['comments']['$post']> },
      ) => parseResponse(client.v1.private.traces[':id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateTracesIdFeedbackScoresKey() {
  return ['v1', '/v1/private/traces/:id/feedback-scores', 'PUT'] as const
}

export function usePutV1PrivateTracesIdFeedbackScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateTracesIdFeedbackScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['$put']>
        },
      ) =>
        parseResponse(client.v1.private.traces[':id']['feedback-scores'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesBatchKey() {
  return ['v1', '/v1/private/traces/batch', 'POST'] as const
}

export function usePostV1PrivateTracesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.batch.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.batch.$post> },
      ) => parseResponse(client.v1.private.traces.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateTracesBatchKey() {
  return ['v1', '/v1/private/traces/batch', 'PATCH'] as const
}

export function usePatchV1PrivateTracesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.batch.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.batch.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateTracesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.batch.$patch> },
      ) => parseResponse(client.v1.private.traces.batch.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateTracesThreadsBatchKey() {
  return ['v1', '/v1/private/traces/threads/batch', 'PATCH'] as const
}

export function usePatchV1PrivateTracesThreadsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.batch.$patch>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.batch.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateTracesThreadsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.threads.batch.$patch> },
      ) => parseResponse(client.v1.private.traces.threads.batch.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateTracesThreadsCloseKey() {
  return ['v1', '/v1/private/traces/threads/close', 'PUT'] as const
}

export function usePutV1PrivateTracesThreadsClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.close.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.close.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateTracesThreadsCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.threads.close.$put> },
      ) => parseResponse(client.v1.private.traces.threads.close.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateTracesKey(
  args: InferRequestType<typeof client.v1.private.traces.$get>,
) {
  return ['v1', '/v1/private/traces', args] as const
}

export function useGetV1PrivateTraces<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTraces<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateTracesKey() {
  return ['v1', '/v1/private/traces', 'POST'] as const
}

export function usePostV1PrivateTraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.private.traces.$post> }) =>
        parseResponse(client.v1.private.traces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateTracesIdKey(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>,
) {
  return ['v1', '/v1/private/traces/:id', args] as const
}

export function useGetV1PrivateTracesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.traces)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PrivateTracesIdKey() {
  return ['v1', '/v1/private/traces/:id', 'DELETE'] as const
}

export function useDeleteV1PrivateTracesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PrivateTracesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.traces)[':id']['$delete']> },
      ) => parseResponse(client.v1.private.traces[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateTracesIdKey() {
  return ['v1', '/v1/private/traces/:id', 'PATCH'] as const
}

export function usePatchV1PrivateTracesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateTracesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private.traces)[':id']['$patch']> },
      ) => parseResponse(client.v1.private.traces[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesThreadsCommentsDeleteKey() {
  return ['v1', '/v1/private/traces/threads/comments/delete', 'POST'] as const
}

export function usePostV1PrivateTracesThreadsCommentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.comments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.comments.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesThreadsCommentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.private.traces.threads.comments.delete.$post> },
      ) =>
        parseResponse(client.v1.private.traces.threads.comments.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesThreadsFeedbackScoresDeleteKey() {
  return ['v1', '/v1/private/traces/threads/feedback-scores/delete', 'POST'] as const
}

export function usePostV1PrivateTracesThreadsFeedbackScoresDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesThreadsFeedbackScoresDeleteKey()
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
            (typeof client.v1.private.traces.threads)['feedback-scores']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.traces.threads['feedback-scores'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesCommentsDeleteKey() {
  return ['v1', '/v1/private/traces/comments/delete', 'POST'] as const
}

export function usePostV1PrivateTracesCommentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.comments.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.comments.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesCommentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.comments.delete.$post> },
      ) => parseResponse(client.v1.private.traces.comments.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesIdFeedbackScoresDeleteKey() {
  return ['v1', '/v1/private/traces/:id/feedback-scores/delete', 'POST'] as const
}

export function usePostV1PrivateTracesIdFeedbackScoresDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesIdFeedbackScoresDeleteKey()
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
            (typeof client.v1.private.traces)[':id']['feedback-scores']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.traces[':id']['feedback-scores'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesThreadsDeleteKey() {
  return ['v1', '/v1/private/traces/threads/delete', 'POST'] as const
}

export function usePostV1PrivateTracesThreadsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.delete.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesThreadsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.threads.delete.$post> },
      ) => parseResponse(client.v1.private.traces.threads.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesDeleteKey() {
  return ['v1', '/v1/private/traces/delete', 'POST'] as const
}

export function usePostV1PrivateTracesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.delete.$post> },
      ) => parseResponse(client.v1.private.traces.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateTracesFeedbackScoresNamesKey(
  args: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>,
) {
  return ['v1', '/v1/private/traces/feedback-scores/names', args] as const
}

export function useGetV1PrivateTracesFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateTracesFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.traces['feedback-scores'].names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
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
        ? getGetV1PrivateTracesFeedbackScoresNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.private.traces)['feedback-scores']['names']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.traces['feedback-scores'].names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateTracesThreadsFeedbackScoresNamesKey(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
  >,
) {
  return ['v1', '/v1/private/traces/threads/feedback-scores/names', args] as const
}

export function useGetV1PrivateTracesThreadsFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsFeedbackScoresNamesKey(args)
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
                (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
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
          client.v1.private.traces.threads['feedback-scores'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesThreadsFeedbackScoresNames<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsFeedbackScoresNamesKey(args)
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
                (typeof client.v1.private.traces.threads)['feedback-scores']['names']['$get']
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
          client.v1.private.traces.threads['feedback-scores'].names.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateTracesStatsKey(
  args: InferRequestType<typeof client.v1.private.traces.stats.$get>,
) {
  return ['v1', '/v1/private/traces/stats', args] as const
}

export function useGetV1PrivateTracesStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateTracesThreadsThreadIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
  >,
) {
  return ['v1', '/v1/private/traces/threads/:threadId/comments/:commentId', args] as const
}

export function useGetV1PrivateTracesThreadsThreadIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsThreadIdCommentsCommentIdKey(args)
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
                (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
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
          client.v1.private.traces.threads[':threadId'].comments[':commentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesThreadsThreadIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsThreadIdCommentsCommentIdKey(args)
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
                (typeof client.v1.private.traces.threads)[':threadId']['comments'][':commentId']['$get']
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
          client.v1.private.traces.threads[':threadId'].comments[':commentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateTracesThreadsStatsKey(
  args: InferRequestType<typeof client.v1.private.traces.threads.stats.$get>,
) {
  return ['v1', '/v1/private/traces/threads/stats', args] as const
}

export function useGetV1PrivateTracesThreadsStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.threads.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.threads.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesThreadsStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.threads.stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.stats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.threads.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PrivateTracesTraceIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
  >,
) {
  return ['v1', '/v1/private/traces/:traceId/comments/:commentId', args] as const
}

export function useGetV1PrivateTracesTraceIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesTraceIdCommentsCommentIdKey(args)
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
                (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
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
          client.v1.private.traces[':traceId'].comments[':commentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesTraceIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesTraceIdCommentsCommentIdKey(args)
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
                (typeof client.v1.private.traces)[':traceId']['comments'][':commentId']['$get']
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
          client.v1.private.traces[':traceId'].comments[':commentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateTracesThreadsRetrieveKey() {
  return ['v1', '/v1/private/traces/threads/retrieve', 'POST'] as const
}

export function usePostV1PrivateTracesThreadsRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.traces.threads.retrieve.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.retrieve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesThreadsRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.threads.retrieve.$post> },
      ) => parseResponse(client.v1.private.traces.threads.retrieve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateTracesThreadsKey(
  args: InferRequestType<typeof client.v1.private.traces.threads.$get>,
) {
  return ['v1', '/v1/private/traces/threads', args] as const
}

export function useGetV1PrivateTracesThreads<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.threads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesThreads<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.threads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.threads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateTracesThreadsOpenKey() {
  return ['v1', '/v1/private/traces/threads/open', 'PUT'] as const
}

export function usePutV1PrivateTracesThreadsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.traces.threads.open.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.open.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateTracesThreadsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.threads.open.$put> },
      ) => parseResponse(client.v1.private.traces.threads.open.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateTracesThreadsFeedbackScoresKey() {
  return ['v1', '/v1/private/traces/threads/feedback-scores', 'PUT'] as const
}

export function usePutV1PrivateTracesThreadsFeedbackScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.traces.threads)['feedback-scores']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateTracesThreadsFeedbackScoresKey()
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
            (typeof client.v1.private.traces.threads)['feedback-scores']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.private.traces.threads['feedback-scores'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PrivateTracesFeedbackScoresKey() {
  return ['v1', '/v1/private/traces/feedback-scores', 'PUT'] as const
}

export function usePutV1PrivateTracesFeedbackScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces)['feedback-scores']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateTracesFeedbackScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.private.traces)['feedback-scores']['$put']> },
      ) => parseResponse(client.v1.private.traces['feedback-scores'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesThreadsSearchKey() {
  return ['v1', '/v1/private/traces/threads/search', 'POST'] as const
}

export function usePostV1PrivateTracesThreadsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.traces.threads.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.threads.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesThreadsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.threads.search.$post> },
      ) => parseResponse(client.v1.private.traces.threads.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateTracesSearchKey() {
  return ['v1', '/v1/private/traces/search', 'POST'] as const
}

export function usePostV1PrivateTracesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.traces.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateTracesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.traces.search.$post> },
      ) => parseResponse(client.v1.private.traces.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateTracesExistsKey(
  args: InferRequestType<typeof client.v1.private.traces.exists.$get>,
) {
  return ['v1', '/v1/private/traces/exists', args] as const
}

export function useGetV1PrivateTracesExists<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.exists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateTracesExists<TError = unknown>(
  args: InferRequestType<typeof client.v1.private.traces.exists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PrivateTracesExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.traces.exists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private.traces.exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1PrivateTracesThreadsThreadModelIdKey() {
  return ['v1', '/v1/private/traces/threads/:threadModelId', 'PATCH'] as const
}

export function usePatchV1PrivateTracesThreadsThreadModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.traces.threads)[':threadModelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateTracesThreadsThreadModelIdKey()
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
            (typeof client.v1.private.traces.threads)[':threadModelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.traces.threads[':threadModelId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateTracesThreadsCommentsCommentIdKey() {
  return ['v1', '/v1/private/traces/threads/comments/:commentId', 'PATCH'] as const
}

export function usePatchV1PrivateTracesThreadsCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateTracesThreadsCommentsCommentIdKey()
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
            (typeof client.v1.private.traces.threads.comments)[':commentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.private.traces.threads.comments[':commentId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PrivateTracesCommentsCommentIdKey() {
  return ['v1', '/v1/private/traces/comments/:commentId', 'PATCH'] as const
}

export function usePatchV1PrivateTracesCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PrivateTracesCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.private.traces.comments)[':commentId']['$patch']>
        },
      ) =>
        parseResponse(client.v1.private.traces.comments[':commentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateWelcomeWizardKey() {
  return ['v1', '/v1/private/welcome-wizard'] as const
}

export function useGetV1PrivateWelcomeWizard<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
        >
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
        ? getGetV1PrivateWelcomeWizardKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['welcome-wizard'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateWelcomeWizard<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
        >
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
        ? getGetV1PrivateWelcomeWizardKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.private['welcome-wizard'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateWelcomeWizardKey() {
  return ['v1', '/v1/private/welcome-wizard', 'POST'] as const
}

export function usePostV1PrivateWelcomeWizard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['welcome-wizard']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.private)['welcome-wizard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWelcomeWizardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.private)['welcome-wizard']['$post']> },
      ) => parseResponse(client.v1.private['welcome-wizard'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateWorkspacePermissionsKey() {
  return ['v1', '/v1/private/workspace-permissions'] as const
}

export function useGetV1PrivateWorkspacePermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
        >
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
        ? getGetV1PrivateWorkspacePermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['workspace-permissions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateWorkspacePermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
        >
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
        ? getGetV1PrivateWorkspacePermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.private)['workspace-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private['workspace-permissions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PrivateWorkspacesCostsSummariesKey() {
  return ['v1', '/v1/private/workspaces/costs/summaries', 'POST'] as const
}

export function usePostV1PrivateWorkspacesCostsSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.costs.summaries.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.workspaces.costs.summaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWorkspacesCostsSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.private.workspaces.costs.summaries.$post> },
      ) => parseResponse(client.v1.private.workspaces.costs.summaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PrivateWorkspacesConfigurationsKey() {
  return ['v1', '/v1/private/workspaces/configurations'] as const
}

export function useGetV1PrivateWorkspacesConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
        >
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
        ? getGetV1PrivateWorkspacesConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.workspaces.configurations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PrivateWorkspacesConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
        >
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
        ? getGetV1PrivateWorkspacesConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.private.workspaces.configurations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PrivateWorkspacesConfigurationsKey() {
  return ['v1', '/v1/private/workspaces/configurations', 'PUT'] as const
}

export function usePutV1PrivateWorkspacesConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.workspaces.configurations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PrivateWorkspacesConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.workspaces.configurations.$put> },
      ) => parseResponse(client.v1.private.workspaces.configurations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PrivateWorkspacesConfigurationsKey() {
  return ['v1', '/v1/private/workspaces/configurations', 'DELETE'] as const
}

export function useDeleteV1PrivateWorkspacesConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.private.workspaces.configurations.$delete>>
          >
        >
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
  const swrKey = customKey ?? getDeleteV1PrivateWorkspacesConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.private.workspaces.configurations.$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateWorkspacesCostsKey() {
  return ['v1', '/v1/private/workspaces/costs', 'POST'] as const
}

export function usePostV1PrivateWorkspacesCosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.workspaces.costs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.workspaces.costs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWorkspacesCostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.workspaces.costs.$post> },
      ) => parseResponse(client.v1.private.workspaces.costs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateWorkspacesMetricsKey() {
  return ['v1', '/v1/private/workspaces/metrics', 'POST'] as const
}

export function usePostV1PrivateWorkspacesMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.workspaces.metrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWorkspacesMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.workspaces.metrics.$post> },
      ) => parseResponse(client.v1.private.workspaces.metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateWorkspacesMetricsSpansKey() {
  return ['v1', '/v1/private/workspaces/metrics/spans', 'POST'] as const
}

export function usePostV1PrivateWorkspacesMetricsSpans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.spans.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.workspaces.metrics.spans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWorkspacesMetricsSpansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.private.workspaces.metrics.spans.$post> },
      ) => parseResponse(client.v1.private.workspaces.metrics.spans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateWorkspacesTokenUsageNamesKey() {
  return ['v1', '/v1/private/workspaces/token-usage/names', 'POST'] as const
}

export function usePostV1PrivateWorkspacesTokenUsageNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.private.workspaces)['token-usage']['names']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWorkspacesTokenUsageNamesKey()
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
            (typeof client.v1.private.workspaces)['token-usage']['names']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.private.workspaces['token-usage'].names.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PrivateWorkspacesMetricsSummariesKey() {
  return ['v1', '/v1/private/workspaces/metrics/summaries', 'POST'] as const
}

export function usePostV1PrivateWorkspacesMetricsSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.private.workspaces.metrics.summaries.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.private.workspaces.metrics.summaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PrivateWorkspacesMetricsSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.private.workspaces.metrics.summaries.$post> },
      ) => parseResponse(client.v1.private.workspaces.metrics.summaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SessionRedirectDatasetsKey(
  args: InferRequestType<typeof client.v1.session.redirect.datasets.$get>,
) {
  return ['v1', '/v1/session/redirect/datasets', args] as const
}

export function useGetV1SessionRedirectDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SessionRedirectDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SessionRedirectExperimentsKey(
  args: InferRequestType<typeof client.v1.session.redirect.experiments.$get>,
) {
  return ['v1', '/v1/session/redirect/experiments', args] as const
}

export function useGetV1SessionRedirectExperiments<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SessionRedirectExperiments<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.experiments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SessionRedirectOptimizationsKey(
  args: InferRequestType<typeof client.v1.session.redirect.optimizations.$get>,
) {
  return ['v1', '/v1/session/redirect/optimizations', args] as const
}

export function useGetV1SessionRedirectOptimizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.optimizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.optimizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SessionRedirectOptimizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.optimizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.session.redirect.optimizations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.optimizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SessionRedirectProjectsKey(
  args: InferRequestType<typeof client.v1.session.redirect.projects.$get>,
) {
  return ['v1', '/v1/session/redirect/projects', args] as const
}

export function useGetV1SessionRedirectProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SessionRedirectProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.session.redirect.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SessionRedirectProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.session.redirect.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.session.redirect.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIsAlivePingKey() {
  return ['is-alive', '/is-alive/ping'] as const
}

export function useGetIsAlivePing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIsAlivePingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['is-alive'].ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIsAlivePing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIsAlivePingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ping']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['is-alive'].ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIsAliveVerKey() {
  return ['is-alive', '/is-alive/ver'] as const
}

export function useGetIsAliveVer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIsAliveVerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['is-alive'].ver.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIsAliveVer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIsAliveVerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['is-alive']['ver']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['is-alive'].ver.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
