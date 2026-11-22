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

export function getGetApiV1HealthPingKey() {
  return ['api', '/api/v1/health/ping'] as const
}

export function useGetApiV1HealthPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1HealthPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1HealthPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1HealthPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadApiV1HealthPingKey() {
  return ['api', '/api/v1/health/ping', 'HEAD'] as const
}

export function useHeadApiV1HealthPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.ping.$head>>>
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
  const swrKey = customKey ?? getHeadApiV1HealthPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.health.ping.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1HealthKey() {
  return ['api', '/api/v1/health'] as const
}

export function useGetApiV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadApiV1HealthKey() {
  return ['api', '/api/v1/health', 'HEAD'] as const
}

export function useHeadApiV1Health<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$head>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1HealthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.health.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuthLogoutKey() {
  return ['api', '/api/v1/auth/logout', 'POST'] as const
}

export function usePostApiV1AuthLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.auth.logout.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.auth.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuthLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.auth.logout.$post> }) =>
        parseResponse(client.api.v1.auth.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuthAppPortalAccessAppIdKey() {
  return ['api', '/api/v1/auth/app-portal-access/:app_id', 'POST'] as const
}

export function usePostApiV1AuthAppPortalAccessAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuthAppPortalAccessAppIdKey()
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
            (typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.auth['app-portal-access'][':app_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppKey(args: InferRequestType<typeof client.api.v1.app.$get>) {
  return ['api', '/api/v1/app', args] as const
}

export function useGetApiV1App<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.app.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1App<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.app.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppKey() {
  return ['api', '/api/v1/app', 'POST'] as const
}

export function usePostApiV1App<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.app.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.app.$post> }) =>
        parseResponse(client.api.v1.app.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdKey() {
  return ['api', '/api/v1/app/:app_id'] as const
}

export function useGetApiV1AppAppId<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppAppIdKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppId<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppAppIdKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdKey() {
  return ['api', '/api/v1/app/:app_id', 'PUT'] as const
}

export function usePutApiV1AppAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']> },
      ) => parseResponse(client.api.v1.app[':app_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdKey() {
  return ['api', '/api/v1/app/:app_id', 'DELETE'] as const
}

export function useDeleteApiV1AppAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$delete']>>
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
  const swrKey = customKey ?? getDeleteApiV1AppAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AppAppIdKey() {
  return ['api', '/api/v1/app/:app_id', 'PATCH'] as const
}

export function usePatchApiV1AppAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AppAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['$patch']> },
      ) => parseResponse(client.api.v1.app[':app_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/endpoint', args] as const
}

export function useGetApiV1AppAppIdEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].endpoint.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].endpoint.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointKey() {
  return ['api', '/api/v1/app/:app_id/endpoint', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']> },
      ) => parseResponse(client.api.v1.app[':app_id'].endpoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', args] as const
}

export function useGetApiV1AppAppIdEndpointEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
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
        ? getGetApiV1AppAppIdEndpointEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
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
        ? getGetApiV1AppAppIdEndpointEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdEndpointEndpointIdKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', 'PUT'] as const
}

export function usePutApiV1AppAppIdEndpointEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdEndpointEndpointIdKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdEndpointEndpointIdKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdEndpointEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdEndpointEndpointIdKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AppAppIdEndpointEndpointIdKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id', 'PATCH'] as const
}

export function usePatchApiV1AppAppIdEndpointEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AppAppIdEndpointEndpointIdKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdSecretKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret', args] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdSecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdSecretKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdSecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdSecretKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointEndpointIdSecretRotateKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/rotate', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointEndpointIdSecretRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointEndpointIdSecretRotateKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.rotate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdStatsKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/stats', args] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdStatsKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdStatsKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointEndpointIdSendExampleKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/send-example', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointEndpointIdSendExample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointEndpointIdSendExampleKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id']['send-example'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointEndpointIdRecoverKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/recover', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointEndpointIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointEndpointIdRecoverKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].recover.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdHeadersKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', args] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdHeaders<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdHeadersKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdHeaders<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdHeadersKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdEndpointEndpointIdHeadersKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', 'PUT'] as const
}

export function usePutApiV1AppAppIdEndpointEndpointIdHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdEndpointEndpointIdHeadersKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AppAppIdEndpointEndpointIdHeadersKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers', 'PATCH'] as const
}

export function usePatchApiV1AppAppIdEndpointEndpointIdHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AppAppIdEndpointEndpointIdHeadersKey()
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
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EventTypeKey(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
) {
  return ['api', '/api/v1/event-type', args] as const
}

export function useGetApiV1EventType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EventTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['event-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EventType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EventTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['event-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EventTypeKey() {
  return ['api', '/api/v1/event-type', 'POST'] as const
}

export function usePostApiV1EventType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['event-type']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['event-type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EventTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['event-type']['$post']> },
      ) => parseResponse(client.api.v1['event-type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EventTypeEventTypeNameKey(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
) {
  return ['api', '/api/v1/event-type/:event_type_name', args] as const
}

export function useGetApiV1EventTypeEventTypeName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EventTypeEventTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['event-type'][':event_type_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EventTypeEventTypeName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EventTypeEventTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['event-type'][':event_type_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EventTypeEventTypeNameKey() {
  return ['api', '/api/v1/event-type/:event_type_name', 'PUT'] as const
}

export function usePutApiV1EventTypeEventTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EventTypeEventTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>
        },
      ) => parseResponse(client.api.v1['event-type'][':event_type_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EventTypeEventTypeNameKey() {
  return ['api', '/api/v1/event-type/:event_type_name', 'DELETE'] as const
}

export function useDeleteApiV1EventTypeEventTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EventTypeEventTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>
        },
      ) =>
        parseResponse(client.api.v1['event-type'][':event_type_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1EventTypeEventTypeNameKey() {
  return ['api', '/api/v1/event-type/:event_type_name', 'PATCH'] as const
}

export function usePatchApiV1EventTypeEventTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1EventTypeEventTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>
        },
      ) =>
        parseResponse(client.api.v1['event-type'][':event_type_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/msg', args] as const
}

export function useGetApiV1AppAppIdMsg<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].msg.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsg<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].msg.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdMsgKey() {
  return ['api', '/api/v1/app/:app_id/msg', 'POST'] as const
}

export function usePostApiV1AppAppIdMsg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdMsgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$post']> },
      ) => parseResponse(client.api.v1.app[':app_id'].msg.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id', args] as const
}

export function useGetApiV1AppAppIdMsgMsgId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].msg[':msg_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].msg[':msg_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdMsgMsgIdContentKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/content', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdMsgMsgIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdMsgMsgIdContentKey()
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
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].content.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppAppIdMsgBulkExpungeKey() {
  return ['api', '/api/v1/app/:app_id/msg/bulk-expunge', 'POST'] as const
}

export function usePostApiV1AppAppIdMsgBulkExpunge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdMsgBulkExpungeKey()
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
            (typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.app[':app_id'].msg['bulk-expunge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id', args] as const
}

export function useGetApiV1AppAppIdMsgMsgIdAttemptAttemptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
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
        ? getGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdKey(args)
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
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
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
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdAttemptAttemptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
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
        ? getGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdKey(args)
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
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
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
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/content', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentKey()
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
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].content.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdEndpointKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint', args] as const
}

export function useGetApiV1AppAppIdMsgMsgIdEndpoint<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
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
        ? getGetApiV1AppAppIdMsgMsgIdEndpointKey(args)
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
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
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
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdEndpoint<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
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
        ? getGetApiV1AppAppIdMsgMsgIdEndpointKey(args)
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
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
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
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/resend', 'POST'] as const
}

export function usePostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendKey()
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
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].resend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdMsgKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/msg', args] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdMsg<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdMsgKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdMsg<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
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
        ? getGetApiV1AppAppIdEndpointEndpointIdMsgKey(args)
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
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
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
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdAttemptEndpointEndpointIdKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id', args] as const
}

export function useGetApiV1AppAppIdAttemptEndpointEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
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
        ? getGetApiV1AppAppIdAttemptEndpointEndpointIdKey(args)
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
                (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
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
          client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdAttemptEndpointEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
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
        ? getGetApiV1AppAppIdAttemptEndpointEndpointIdKey(args)
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
                (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
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
          client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdAttemptMsgMsgIdKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
) {
  return ['api', '/api/v1/app/:app_id/attempt/msg/:msg_id', args] as const
}

export function useGetApiV1AppAppIdAttemptMsgMsgId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
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
        ? getGetApiV1AppAppIdAttemptMsgMsgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].attempt.msg[':msg_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdAttemptMsgMsgId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
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
        ? getGetApiV1AppAppIdAttemptMsgMsgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].attempt.msg[':msg_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
