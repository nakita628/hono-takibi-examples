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

export function getApiKey() {
  return ['api'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getGetWellKnownJwksJsonKey() {
  return ['.well-known', '/.well-known/jwks.json'] as const
}

export function useGetWellKnownJwksJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetWellKnownJwksJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['.well-known']['jwks.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownJwksJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetWellKnownJwksJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['.well-known']['jwks.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWellKnownOpenidConfigurationKey() {
  return ['.well-known', '/.well-known/openid-configuration'] as const
}

export function useGetWellKnownOpenidConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
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
        ? getGetWellKnownOpenidConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['.well-known']['openid-configuration'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWellKnownOpenidConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
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
        ? getGetWellKnownOpenidConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['.well-known']['openid-configuration'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiApiKeyKey() {
  return ['api', '/api/api-key', 'POST'] as const
}

export function usePostApiApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.api)['api-key']['$post']> }) =>
        parseResponse(client.api['api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiApiKeyKeyIdKey(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
) {
  return ['api', '/api/api-key/:keyId', args] as const
}

export function useGetApiApiKeyKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiApiKeyKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['api-key'][':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiApiKeyKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['api-key'][':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiApiKeyKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['api-key'][':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiApiKeyKeyIdKey() {
  return ['api', '/api/api-key/:keyId', 'PUT'] as const
}

export function usePutApiApiKeyKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiApiKeyKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['api-key'][':keyId']['$put']> },
      ) => parseResponse(client.api['api-key'][':keyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiApiKeyKeyIdKey() {
  return ['api', '/api/api-key/:keyId', 'POST'] as const
}

export function usePostApiApiKeyKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApiKeyKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['api-key'][':keyId']['$post']> },
      ) => parseResponse(client.api['api-key'][':keyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiApiKeyKeyIdKey() {
  return ['api', '/api/api-key/:keyId', 'DELETE'] as const
}

export function useDeleteApiApiKeyKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiApiKeyKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['api-key'][':keyId']['$delete']> },
      ) => parseResponse(client.api['api-key'][':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiApiKeyKeyIdKey() {
  return ['api', '/api/api-key/:keyId', 'PATCH'] as const
}

export function usePatchApiApiKeyKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['api-key'][':keyId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['api-key'][':keyId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiApiKeyKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['api-key'][':keyId']['$patch']> },
      ) => parseResponse(client.api['api-key'][':keyId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiApplicationKey(
  args: InferRequestType<typeof client.api.application.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application', keyArgs] as const
}

export function useGetApiApplication<TError = unknown>(
  args: InferRequestType<typeof client.api.application.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiApplicationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.application.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiApplication<TError = unknown>(
  args: InferRequestType<typeof client.api.application.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiApplicationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.application.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiApplicationKey() {
  return ['api', '/api/application', 'POST'] as const
}

export function usePostApiApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.application.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.application.$post> }) =>
        parseResponse(client.api.application.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplicationSearchKey() {
  return ['api', '/api/application/search', 'POST'] as const
}

export function usePostApiApplicationSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.application.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.application.search.$post> },
      ) => parseResponse(client.api.application.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiApplicationApplicationIdKey(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application/:applicationId', keyArgs] as const
}

export function useGetApiApplicationApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiApplicationApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.application[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiApplicationApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.application)[':applicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiApplicationApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.application[':applicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiApplicationApplicationIdKey() {
  return ['api', '/api/application/:applicationId', 'PUT'] as const
}

export function usePutApiApplicationApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiApplicationApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.application)[':applicationId']['$put']> },
      ) => parseResponse(client.api.application[':applicationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplicationApplicationIdKey() {
  return ['api', '/api/application/:applicationId', 'POST'] as const
}

export function usePostApiApplicationApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.application)[':applicationId']['$post']> },
      ) => parseResponse(client.api.application[':applicationId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiApplicationApplicationIdKey() {
  return ['api', '/api/application/:applicationId', 'DELETE'] as const
}

export function useDeleteApiApplicationApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiApplicationApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.application)[':applicationId']['$delete']> },
      ) => parseResponse(client.api.application[':applicationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiApplicationApplicationIdKey() {
  return ['api', '/api/application/:applicationId', 'PATCH'] as const
}

export function usePatchApiApplicationApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiApplicationApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.application)[':applicationId']['$patch']> },
      ) => parseResponse(client.api.application[':applicationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiApplicationApplicationIdOauthConfigurationKey(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application/:applicationId/oauth-configuration', keyArgs] as const
}

export function useGetApiApplicationApplicationIdOauthConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
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
        ? getGetApiApplicationApplicationIdOauthConfigurationKey(args)
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
                (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
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
          client.api.application[':applicationId']['oauth-configuration'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiApplicationApplicationIdOauthConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
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
        ? getGetApiApplicationApplicationIdOauthConfigurationKey(args)
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
                (typeof client.api.application)[':applicationId']['oauth-configuration']['$get']
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
          client.api.application[':applicationId']['oauth-configuration'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiApplicationApplicationIdRoleKey() {
  return ['api', '/api/application/:applicationId/role', 'POST'] as const
}

export function usePostApiApplicationApplicationIdRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['role']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationApplicationIdRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.application)[':applicationId']['role']['$post']>
        },
      ) => parseResponse(client.api.application[':applicationId'].role.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiApplicationApplicationIdRoleRoleIdKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'PUT'] as const
}

export function usePutApiApplicationApplicationIdRoleRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiApplicationApplicationIdRoleRoleIdKey()
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
            (typeof client.api.application)[':applicationId']['role'][':roleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].role[':roleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplicationApplicationIdRoleRoleIdKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'POST'] as const
}

export function usePostApiApplicationApplicationIdRoleRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationApplicationIdRoleRoleIdKey()
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
            (typeof client.api.application)[':applicationId']['role'][':roleId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].role[':roleId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiApplicationApplicationIdRoleRoleIdKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'DELETE'] as const
}

export function useDeleteApiApplicationApplicationIdRoleRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiApplicationApplicationIdRoleRoleIdKey()
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
            (typeof client.api.application)[':applicationId']['role'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].role[':roleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiApplicationApplicationIdRoleRoleIdKey() {
  return ['api', '/api/application/:applicationId/role/:roleId', 'PATCH'] as const
}

export function usePatchApiApplicationApplicationIdRoleRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiApplicationApplicationIdRoleRoleIdKey()
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
            (typeof client.api.application)[':applicationId']['role'][':roleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].role[':roleId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplicationApplicationIdScopeKey() {
  return ['api', '/api/application/:applicationId/scope', 'POST'] as const
}

export function usePostApiApplicationApplicationIdScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.application)[':applicationId']['scope']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['scope']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationApplicationIdScopeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.application)[':applicationId']['scope']['$post']>
        },
      ) => parseResponse(client.api.application[':applicationId'].scope.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiApplicationApplicationIdScopeScopeIdKey(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/application/:applicationId/scope/:scopeId', keyArgs] as const
}

export function useGetApiApplicationApplicationIdScopeScopeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
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
        ? getGetApiApplicationApplicationIdScopeScopeIdKey(args)
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
                (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
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
          client.api.application[':applicationId'].scope[':scopeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiApplicationApplicationIdScopeScopeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
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
        ? getGetApiApplicationApplicationIdScopeScopeIdKey(args)
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
                (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$get']
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
          client.api.application[':applicationId'].scope[':scopeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiApplicationApplicationIdScopeScopeIdKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'PUT'] as const
}

export function usePutApiApplicationApplicationIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiApplicationApplicationIdScopeScopeIdKey()
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
            (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].scope[':scopeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplicationApplicationIdScopeScopeIdKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'POST'] as const
}

export function usePostApiApplicationApplicationIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplicationApplicationIdScopeScopeIdKey()
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
            (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].scope[':scopeId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiApplicationApplicationIdScopeScopeIdKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'DELETE'] as const
}

export function useDeleteApiApplicationApplicationIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiApplicationApplicationIdScopeScopeIdKey()
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
            (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].scope[':scopeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiApplicationApplicationIdScopeScopeIdKey() {
  return ['api', '/api/application/:applicationId/scope/:scopeId', 'PATCH'] as const
}

export function usePatchApiApplicationApplicationIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiApplicationApplicationIdScopeScopeIdKey()
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
            (typeof client.api.application)[':applicationId']['scope'][':scopeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.application[':applicationId'].scope[':scopeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCimdDomainKey() {
  return ['api', '/api/cimd/domain'] as const
}

export function useGetApiCimdDomain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCimdDomainKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cimd.domain.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCimdDomain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCimdDomainKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cimd.domain.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCimdDomainKey() {
  return ['api', '/api/cimd/domain', 'POST'] as const
}

export function usePostApiCimdDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.cimd.domain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCimdDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.cimd.domain.$post> }) =>
        parseResponse(client.api.cimd.domain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCimdDomainSearchKey() {
  return ['api', '/api/cimd/domain/search', 'POST'] as const
}

export function usePostApiCimdDomainSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.domain.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.cimd.domain.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCimdDomainSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.cimd.domain.search.$post> },
      ) => parseResponse(client.api.cimd.domain.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCimdDomainDomainIdKey(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
) {
  return ['api', '/api/cimd/domain/:domainId', args] as const
}

export function useGetApiCimdDomainDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCimdDomainDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cimd.domain[':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCimdDomainDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCimdDomainDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cimd.domain[':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCimdDomainDomainIdKey() {
  return ['api', '/api/cimd/domain/:domainId', 'PUT'] as const
}

export function usePutApiCimdDomainDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCimdDomainDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$put']> },
      ) => parseResponse(client.api.cimd.domain[':domainId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCimdDomainDomainIdKey() {
  return ['api', '/api/cimd/domain/:domainId', 'POST'] as const
}

export function usePostApiCimdDomainDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCimdDomainDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$post']> },
      ) => parseResponse(client.api.cimd.domain[':domainId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCimdDomainDomainIdKey() {
  return ['api', '/api/cimd/domain/:domainId', 'DELETE'] as const
}

export function useDeleteApiCimdDomainDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCimdDomainDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$delete']> },
      ) => parseResponse(client.api.cimd.domain[':domainId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCimdDomainDomainIdKey() {
  return ['api', '/api/cimd/domain/:domainId', 'PATCH'] as const
}

export function usePatchApiCimdDomainDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCimdDomainDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['$patch']> },
      ) => parseResponse(client.api.cimd.domain[':domainId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCimdDomainDomainIdScopeKey() {
  return ['api', '/api/cimd/domain/:domainId/scope', 'POST'] as const
}

export function usePostApiCimdDomainDomainIdScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCimdDomainDomainIdScopeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope']['$post']>
        },
      ) => parseResponse(client.api.cimd.domain[':domainId'].scope.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCimdDomainDomainIdScopeScopeIdKey(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
) {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', args] as const
}

export function useGetApiCimdDomainDomainIdScopeScopeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
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
        ? getGetApiCimdDomainDomainIdScopeScopeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.cimd.domain[':domainId'].scope[':scopeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCimdDomainDomainIdScopeScopeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
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
        ? getGetApiCimdDomainDomainIdScopeScopeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.cimd.domain[':domainId'].scope[':scopeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCimdDomainDomainIdScopeScopeIdKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'PUT'] as const
}

export function usePutApiCimdDomainDomainIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCimdDomainDomainIdScopeScopeIdKey()
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
            (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.cimd.domain[':domainId'].scope[':scopeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCimdDomainDomainIdScopeScopeIdKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'POST'] as const
}

export function usePostApiCimdDomainDomainIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCimdDomainDomainIdScopeScopeIdKey()
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
            (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.cimd.domain[':domainId'].scope[':scopeId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCimdDomainDomainIdScopeScopeIdKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'DELETE'] as const
}

export function useDeleteApiCimdDomainDomainIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCimdDomainDomainIdScopeScopeIdKey()
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
            (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.cimd.domain[':domainId'].scope[':scopeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCimdDomainDomainIdScopeScopeIdKey() {
  return ['api', '/api/cimd/domain/:domainId/scope/:scopeId', 'PATCH'] as const
}

export function usePatchApiCimdDomainDomainIdScopeScopeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCimdDomainDomainIdScopeScopeIdKey()
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
            (typeof client.api.cimd.domain)[':domainId']['scope'][':scopeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.cimd.domain[':domainId'].scope[':scopeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCimdRegistrationSearchKey() {
  return ['api', '/api/cimd/registration/search', 'POST'] as const
}

export function usePostApiCimdRegistrationSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.cimd.registration.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.cimd.registration.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCimdRegistrationSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.cimd.registration.search.$post> },
      ) => parseResponse(client.api.cimd.registration.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCimdRegistrationRegistrationIdKey(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
) {
  return ['api', '/api/cimd/registration/:registrationId', args] as const
}

export function useGetApiCimdRegistrationRegistrationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCimdRegistrationRegistrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.cimd.registration[':registrationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCimdRegistrationRegistrationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCimdRegistrationRegistrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.cimd.registration[':registrationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCimdRegistrationRegistrationIdKey() {
  return ['api', '/api/cimd/registration/:registrationId', 'DELETE'] as const
}

export function useDeleteApiCimdRegistrationRegistrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCimdRegistrationRegistrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.cimd.registration)[':registrationId']['$delete']>
        },
      ) =>
        parseResponse(client.api.cimd.registration[':registrationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConnectorKey() {
  return ['api', '/api/connector'] as const
}

export function useGetApiConnector<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiConnectorKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connector.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConnector<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiConnectorKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connector.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiConnectorKey() {
  return ['api', '/api/connector', 'POST'] as const
}

export function usePostApiConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connector.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.connector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.connector.$post> }) =>
        parseResponse(client.api.connector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConnectorConnectorIdKey(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
) {
  return ['api', '/api/connector/:connectorId', args] as const
}

export function useGetApiConnectorConnectorId<TError = unknown>(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiConnectorConnectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connector[':connectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConnectorConnectorId<TError = unknown>(
  args: InferRequestType<(typeof client.api.connector)[':connectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiConnectorConnectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connector[':connectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiConnectorConnectorIdKey() {
  return ['api', '/api/connector/:connectorId', 'PUT'] as const
}

export function usePutApiConnectorConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiConnectorConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.connector)[':connectorId']['$put']> },
      ) => parseResponse(client.api.connector[':connectorId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiConnectorConnectorIdKey() {
  return ['api', '/api/connector/:connectorId', 'POST'] as const
}

export function usePostApiConnectorConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiConnectorConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.connector)[':connectorId']['$post']> },
      ) => parseResponse(client.api.connector[':connectorId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiConnectorConnectorIdKey() {
  return ['api', '/api/connector/:connectorId', 'DELETE'] as const
}

export function useDeleteApiConnectorConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiConnectorConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.connector)[':connectorId']['$delete']> },
      ) => parseResponse(client.api.connector[':connectorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiConnectorConnectorIdKey() {
  return ['api', '/api/connector/:connectorId', 'PATCH'] as const
}

export function usePatchApiConnectorConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connector)[':connectorId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.connector)[':connectorId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiConnectorConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.connector)[':connectorId']['$patch']> },
      ) => parseResponse(client.api.connector[':connectorId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConsentKey(args: InferRequestType<typeof client.api.consent.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/consent', keyArgs] as const
}

export function useGetApiConsent<TError = unknown>(
  args: InferRequestType<typeof client.api.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiConsentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConsent<TError = unknown>(
  args: InferRequestType<typeof client.api.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiConsentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiConsentKey() {
  return ['api', '/api/consent', 'POST'] as const
}

export function usePostApiConsent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.consent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiConsentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.consent.$post> }) =>
        parseResponse(client.api.consent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConsentSearchKey(
  args: InferRequestType<typeof client.api.consent.search.$get>,
) {
  return ['api', '/api/consent/search', args] as const
}

export function useGetApiConsentSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.consent.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiConsentSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.consent.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConsentSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.consent.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiConsentSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.consent.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiConsentSearchKey() {
  return ['api', '/api/consent/search', 'POST'] as const
}

export function usePostApiConsentSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.consent.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.consent.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiConsentSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.consent.search.$post> }) =>
        parseResponse(client.api.consent.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConsentConsentIdKey(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/consent/:consentId', keyArgs] as const
}

export function useGetApiConsentConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiConsentConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.consent[':consentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConsentConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.consent)[':consentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiConsentConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.consent[':consentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiConsentConsentIdKey() {
  return ['api', '/api/consent/:consentId', 'PUT'] as const
}

export function usePutApiConsentConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.consent)[':consentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiConsentConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.consent)[':consentId']['$put']> },
      ) => parseResponse(client.api.consent[':consentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiConsentConsentIdKey() {
  return ['api', '/api/consent/:consentId', 'POST'] as const
}

export function usePostApiConsentConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.consent)[':consentId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiConsentConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.consent)[':consentId']['$post']> },
      ) => parseResponse(client.api.consent[':consentId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiConsentConsentIdKey() {
  return ['api', '/api/consent/:consentId', 'DELETE'] as const
}

export function useDeleteApiConsentConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.consent)[':consentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiConsentConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.consent)[':consentId']['$delete']> },
      ) => parseResponse(client.api.consent[':consentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiConsentConsentIdKey() {
  return ['api', '/api/consent/:consentId', 'PATCH'] as const
}

export function usePatchApiConsentConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.consent)[':consentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.consent)[':consentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiConsentConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.consent)[':consentId']['$patch']> },
      ) => parseResponse(client.api.consent[':consentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEmailSendEmailTemplateIdKey() {
  return ['api', '/api/email/send/:emailTemplateId', 'POST'] as const
}

export function usePostApiEmailSendEmailTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.send)[':emailTemplateId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.email.send)[':emailTemplateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEmailSendEmailTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.email.send)[':emailTemplateId']['$post']> },
      ) => parseResponse(client.api.email.send[':emailTemplateId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEmailTemplateKey(
  args: InferRequestType<typeof client.api.email.template.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/email/template', keyArgs] as const
}

export function useGetApiEmailTemplate<TError = unknown>(
  args: InferRequestType<typeof client.api.email.template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.email.template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEmailTemplate<TError = unknown>(
  args: InferRequestType<typeof client.api.email.template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.email.template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEmailTemplateKey() {
  return ['api', '/api/email/template', 'POST'] as const
}

export function usePostApiEmailTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.email.template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEmailTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.email.template.$post> }) =>
        parseResponse(client.api.email.template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEmailTemplatePreviewKey() {
  return ['api', '/api/email/template/preview', 'POST'] as const
}

export function usePostApiEmailTemplatePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.email.template.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEmailTemplatePreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.email.template.preview.$post> },
      ) => parseResponse(client.api.email.template.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEmailTemplateSearchKey() {
  return ['api', '/api/email/template/search', 'POST'] as const
}

export function usePostApiEmailTemplateSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.email.template.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.email.template.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEmailTemplateSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.email.template.search.$post> },
      ) => parseResponse(client.api.email.template.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEmailTemplateEmailTemplateIdKey(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/email/template/:emailTemplateId', keyArgs] as const
}

export function useGetApiEmailTemplateEmailTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEmailTemplateEmailTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.email.template[':emailTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEmailTemplateEmailTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEmailTemplateEmailTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.email.template[':emailTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiEmailTemplateEmailTemplateIdKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'PUT'] as const
}

export function usePutApiEmailTemplateEmailTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiEmailTemplateEmailTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$put']>
        },
      ) => parseResponse(client.api.email.template[':emailTemplateId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEmailTemplateEmailTemplateIdKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'POST'] as const
}

export function usePostApiEmailTemplateEmailTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEmailTemplateEmailTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$post']>
        },
      ) => parseResponse(client.api.email.template[':emailTemplateId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiEmailTemplateEmailTemplateIdKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'DELETE'] as const
}

export function useDeleteApiEmailTemplateEmailTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiEmailTemplateEmailTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$delete']>
        },
      ) => parseResponse(client.api.email.template[':emailTemplateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiEmailTemplateEmailTemplateIdKey() {
  return ['api', '/api/email/template/:emailTemplateId', 'PATCH'] as const
}

export function usePatchApiEmailTemplateEmailTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiEmailTemplateEmailTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.email.template)[':emailTemplateId']['$patch']>
        },
      ) => parseResponse(client.api.email.template[':emailTemplateId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEntityKey() {
  return ['api', '/api/entity', 'POST'] as const
}

export function usePostApiEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.entity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.entity.$post> }) =>
        parseResponse(client.api.entity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntityGrantSearchKey(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
) {
  return ['api', '/api/entity/grant/search', args] as const
}

export function useGetApiEntityGrantSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityGrantSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.grant.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntityGrantSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.entity.grant.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityGrantSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.grant.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEntityGrantSearchKey() {
  return ['api', '/api/entity/grant/search', 'POST'] as const
}

export function usePostApiEntityGrantSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.grant.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.entity.grant.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityGrantSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.entity.grant.search.$post> },
      ) => parseResponse(client.api.entity.grant.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntitySearchKey(
  args: InferRequestType<typeof client.api.entity.search.$get>,
) {
  return ['api', '/api/entity/search', args] as const
}

export function useGetApiEntitySearch<TError = unknown>(
  args: InferRequestType<typeof client.api.entity.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntitySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntitySearch<TError = unknown>(
  args: InferRequestType<typeof client.api.entity.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntitySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiEntitySearchKey() {
  return ['api', '/api/entity/search', 'PUT'] as const
}

export function usePutApiEntitySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$put>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiEntitySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.entity.search.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEntitySearchKey() {
  return ['api', '/api/entity/search', 'POST'] as const
}

export function usePostApiEntitySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.entity.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntitySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.entity.search.$post> }) =>
        parseResponse(client.api.entity.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntityTypeKey() {
  return ['api', '/api/entity/type'] as const
}

export function useGetApiEntityType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiEntityTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.type.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntityType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiEntityTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.type.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEntityTypeKey() {
  return ['api', '/api/entity/type', 'POST'] as const
}

export function usePostApiEntityType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.entity.type.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.entity.type.$post> }) =>
        parseResponse(client.api.entity.type.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntityTypeSearchKey(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
) {
  return ['api', '/api/entity/type/search', args] as const
}

export function useGetApiEntityTypeSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityTypeSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.type.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntityTypeSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.entity.type.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityTypeSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.type.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEntityTypeSearchKey() {
  return ['api', '/api/entity/type/search', 'POST'] as const
}

export function usePostApiEntityTypeSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.entity.type.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.entity.type.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityTypeSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.entity.type.search.$post> },
      ) => parseResponse(client.api.entity.type.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntityTypeEntityTypeIdKey(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
) {
  return ['api', '/api/entity/type/:entityTypeId', args] as const
}

export function useGetApiEntityTypeEntityTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityTypeEntityTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.type[':entityTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntityTypeEntityTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityTypeEntityTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity.type[':entityTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiEntityTypeEntityTypeIdKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'PUT'] as const
}

export function usePutApiEntityTypeEntityTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiEntityTypeEntityTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$put']> },
      ) => parseResponse(client.api.entity.type[':entityTypeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEntityTypeEntityTypeIdKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'POST'] as const
}

export function usePostApiEntityTypeEntityTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityTypeEntityTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$post']> },
      ) => parseResponse(client.api.entity.type[':entityTypeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiEntityTypeEntityTypeIdKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'DELETE'] as const
}

export function useDeleteApiEntityTypeEntityTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiEntityTypeEntityTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$delete']> },
      ) => parseResponse(client.api.entity.type[':entityTypeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiEntityTypeEntityTypeIdKey() {
  return ['api', '/api/entity/type/:entityTypeId', 'PATCH'] as const
}

export function usePatchApiEntityTypeEntityTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiEntityTypeEntityTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['$patch']> },
      ) => parseResponse(client.api.entity.type[':entityTypeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEntityTypeEntityTypeIdPermissionKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission', 'POST'] as const
}

export function usePostApiEntityTypeEntityTypeIdPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity.type)[':entityTypeId']['permission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityTypeEntityTypeIdPermissionKey()
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
            (typeof client.api.entity.type)[':entityTypeId']['permission']['$post']
          >
        },
      ) =>
        parseResponse(client.api.entity.type[':entityTypeId'].permission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiEntityTypeEntityTypeIdPermissionPermissionIdKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'PUT'] as const
}

export function usePutApiEntityTypeEntityTypeIdPermissionPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiEntityTypeEntityTypeIdPermissionPermissionIdKey()
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
            (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.entity.type[':entityTypeId'].permission[':permissionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiEntityTypeEntityTypeIdPermissionPermissionIdKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'POST'] as const
}

export function usePostApiEntityTypeEntityTypeIdPermissionPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityTypeEntityTypeIdPermissionPermissionIdKey()
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
            (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.entity.type[':entityTypeId'].permission[':permissionId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiEntityTypeEntityTypeIdPermissionPermissionIdKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'DELETE'] as const
}

export function useDeleteApiEntityTypeEntityTypeIdPermissionPermissionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiEntityTypeEntityTypeIdPermissionPermissionIdKey()
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
            (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.entity.type[':entityTypeId'].permission[':permissionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiEntityTypeEntityTypeIdPermissionPermissionIdKey() {
  return ['api', '/api/entity/type/:entityTypeId/permission/:permissionId', 'PATCH'] as const
}

export function usePatchApiEntityTypeEntityTypeIdPermissionPermissionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiEntityTypeEntityTypeIdPermissionPermissionIdKey()
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
            (typeof client.api.entity.type)[':entityTypeId']['permission'][':permissionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.entity.type[':entityTypeId'].permission[':permissionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntityEntityIdKey(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/entity/:entityId', keyArgs] as const
}

export function useGetApiEntityEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity[':entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntityEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity[':entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiEntityEntityIdKey() {
  return ['api', '/api/entity/:entityId', 'PUT'] as const
}

export function usePutApiEntityEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity)[':entityId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiEntityEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.entity)[':entityId']['$put']> },
      ) => parseResponse(client.api.entity[':entityId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEntityEntityIdKey() {
  return ['api', '/api/entity/:entityId', 'POST'] as const
}

export function usePostApiEntityEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity)[':entityId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.entity)[':entityId']['$post']> },
      ) => parseResponse(client.api.entity[':entityId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiEntityEntityIdKey() {
  return ['api', '/api/entity/:entityId', 'DELETE'] as const
}

export function useDeleteApiEntityEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity)[':entityId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiEntityEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.entity)[':entityId']['$delete']> },
      ) => parseResponse(client.api.entity[':entityId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiEntityEntityIdKey() {
  return ['api', '/api/entity/:entityId', 'PATCH'] as const
}

export function usePatchApiEntityEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.entity)[':entityId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity)[':entityId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiEntityEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.entity)[':entityId']['$patch']> },
      ) => parseResponse(client.api.entity[':entityId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEntityEntityIdGrantKey(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/entity/:entityId/grant', keyArgs] as const
}

export function useGetApiEntityEntityIdGrant<TError = unknown>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityEntityIdGrantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity[':entityId'].grant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEntityEntityIdGrant<TError = unknown>(
  args: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiEntityEntityIdGrantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.entity[':entityId'].grant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEntityEntityIdGrantKey() {
  return ['api', '/api/entity/:entityId/grant', 'POST'] as const
}

export function usePostApiEntityEntityIdGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEntityEntityIdGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$post']> },
      ) => parseResponse(client.api.entity[':entityId'].grant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiEntityEntityIdGrantKey() {
  return ['api', '/api/entity/:entityId/grant', 'DELETE'] as const
}

export function useDeleteApiEntityEntityIdGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.entity)[':entityId']['grant']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiEntityEntityIdGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.entity)[':entityId']['grant']['$delete']> },
      ) => parseResponse(client.api.entity[':entityId'].grant.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFormKey() {
  return ['api', '/api/form'] as const
}

export function useGetApiForm<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFormKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiForm<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFormKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFormKey() {
  return ['api', '/api/form', 'POST'] as const
}

export function usePostApiForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.form.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.form.$post> }) =>
        parseResponse(client.api.form.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFormFieldKey() {
  return ['api', '/api/form/field'] as const
}

export function useGetApiFormField<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFormFieldKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form.field.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFormField<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFormFieldKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form.field.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFormFieldKey() {
  return ['api', '/api/form/field', 'POST'] as const
}

export function usePostApiFormField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.form.field.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.form.field.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFormFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.form.field.$post> }) =>
        parseResponse(client.api.form.field.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFormFieldFieldIdKey(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
) {
  return ['api', '/api/form/field/:fieldId', args] as const
}

export function useGetApiFormFieldFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFormFieldFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form.field[':fieldId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFormFieldFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.api.form.field)[':fieldId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiFormFieldFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form.field[':fieldId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiFormFieldFieldIdKey() {
  return ['api', '/api/form/field/:fieldId', 'PUT'] as const
}

export function usePutApiFormFieldFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiFormFieldFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form.field)[':fieldId']['$put']> },
      ) => parseResponse(client.api.form.field[':fieldId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFormFieldFieldIdKey() {
  return ['api', '/api/form/field/:fieldId', 'POST'] as const
}

export function usePostApiFormFieldFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFormFieldFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form.field)[':fieldId']['$post']> },
      ) => parseResponse(client.api.form.field[':fieldId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiFormFieldFieldIdKey() {
  return ['api', '/api/form/field/:fieldId', 'DELETE'] as const
}

export function useDeleteApiFormFieldFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiFormFieldFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form.field)[':fieldId']['$delete']> },
      ) => parseResponse(client.api.form.field[':fieldId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiFormFieldFieldIdKey() {
  return ['api', '/api/form/field/:fieldId', 'PATCH'] as const
}

export function usePatchApiFormFieldFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.form.field)[':fieldId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form.field)[':fieldId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiFormFieldFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form.field)[':fieldId']['$patch']> },
      ) => parseResponse(client.api.form.field[':fieldId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFormFormIdKey(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
) {
  return ['api', '/api/form/:formId', args] as const
}

export function useGetApiFormFormId<TError = unknown>(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFormFormIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form[':formId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFormFormId<TError = unknown>(
  args: InferRequestType<(typeof client.api.form)[':formId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFormFormIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.form[':formId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiFormFormIdKey() {
  return ['api', '/api/form/:formId', 'PUT'] as const
}

export function usePutApiFormFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form)[':formId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiFormFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form)[':formId']['$put']> },
      ) => parseResponse(client.api.form[':formId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFormFormIdKey() {
  return ['api', '/api/form/:formId', 'POST'] as const
}

export function usePostApiFormFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form)[':formId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFormFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form)[':formId']['$post']> },
      ) => parseResponse(client.api.form[':formId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiFormFormIdKey() {
  return ['api', '/api/form/:formId', 'DELETE'] as const
}

export function useDeleteApiFormFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form)[':formId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiFormFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form)[':formId']['$delete']> },
      ) => parseResponse(client.api.form[':formId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiFormFormIdKey() {
  return ['api', '/api/form/:formId', 'PATCH'] as const
}

export function usePatchApiFormFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.form)[':formId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.form)[':formId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiFormFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.form)[':formId']['$patch']> },
      ) => parseResponse(client.api.form[':formId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupKey(args: InferRequestType<typeof client.api.group.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/group', keyArgs] as const
}

export function useGetApiGroup<TError = unknown>(
  args: InferRequestType<typeof client.api.group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroup<TError = unknown>(
  args: InferRequestType<typeof client.api.group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiGroupKey() {
  return ['api', '/api/group', 'POST'] as const
}

export function usePostApiGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.group.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.group.$post> }) =>
        parseResponse(client.api.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiGroupMemberKey() {
  return ['api', '/api/group/member', 'PUT'] as const
}

export function usePutApiGroupMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.group.member.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiGroupMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.group.member.$put> }) =>
        parseResponse(client.api.group.member.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiGroupMemberKey() {
  return ['api', '/api/group/member', 'POST'] as const
}

export function usePostApiGroupMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.group.member.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.group.member.$post> }) =>
        parseResponse(client.api.group.member.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiGroupMemberKey() {
  return ['api', '/api/group/member', 'DELETE'] as const
}

export function useDeleteApiGroupMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.group.member.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiGroupMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.group.member.$delete> }) =>
        parseResponse(client.api.group.member.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiGroupMemberSearchKey() {
  return ['api', '/api/group/member/search', 'POST'] as const
}

export function usePostApiGroupMemberSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.group.member.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.group.member.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupMemberSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.group.member.search.$post> },
      ) => parseResponse(client.api.group.member.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiGroupSearchKey() {
  return ['api', '/api/group/search', 'POST'] as const
}

export function usePostApiGroupSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.group.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.group.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.group.search.$post> }) =>
        parseResponse(client.api.group.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupGroupIdKey(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/group/:groupId', keyArgs] as const
}

export function useGetApiGroupGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.group[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroupGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.api.group)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.group[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiGroupGroupIdKey() {
  return ['api', '/api/group/:groupId', 'PUT'] as const
}

export function usePutApiGroupGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.group)[':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiGroupGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.group)[':groupId']['$put']> },
      ) => parseResponse(client.api.group[':groupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiGroupGroupIdKey() {
  return ['api', '/api/group/:groupId', 'POST'] as const
}

export function usePostApiGroupGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.group)[':groupId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.group)[':groupId']['$post']> },
      ) => parseResponse(client.api.group[':groupId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiGroupGroupIdKey() {
  return ['api', '/api/group/:groupId', 'DELETE'] as const
}

export function useDeleteApiGroupGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.group)[':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiGroupGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.group)[':groupId']['$delete']> },
      ) => parseResponse(client.api.group[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiGroupGroupIdKey() {
  return ['api', '/api/group/:groupId', 'PATCH'] as const
}

export function usePatchApiGroupGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.group)[':groupId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.group)[':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiGroupGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.group)[':groupId']['$patch']> },
      ) => parseResponse(client.api.group[':groupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiHealthKey() {
  return ['api', '/api/health'] as const
}

export function useGetApiHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiIdentityProviderKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
) {
  return ['api', '/api/identity-provider', args] as const
}

export function useGetApiIdentityProvider<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProvider<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiIdentityProviderKey() {
  return ['api', '/api/identity-provider', 'POST'] as const
}

export function usePostApiIdentityProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['identity-provider']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['identity-provider']['$post']> },
      ) => parseResponse(client.api['identity-provider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIdentityProviderLinkKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
) {
  return ['api', '/api/identity-provider/link', args] as const
}

export function useGetApiIdentityProviderLink<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProviderLink<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiIdentityProviderLinkKey() {
  return ['api', '/api/identity-provider/link', 'POST'] as const
}

export function usePostApiIdentityProviderLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['identity-provider']['link']['$post']> },
      ) => parseResponse(client.api['identity-provider'].link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiIdentityProviderLinkKey() {
  return ['api', '/api/identity-provider/link', 'DELETE'] as const
}

export function useDeleteApiIdentityProviderLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['link']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['link']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiIdentityProviderLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['identity-provider']['link']['$delete']> },
      ) => parseResponse(client.api['identity-provider'].link.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIdentityProviderLinkPendingPendingLinkIdKey(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
) {
  return ['api', '/api/identity-provider/link/pending/:pendingLinkId', args] as const
}

export function useGetApiIdentityProviderLinkPendingPendingLinkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
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
        ? getGetApiIdentityProviderLinkPendingPendingLinkIdKey(args)
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
                (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
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
          client.api['identity-provider'].link.pending[':pendingLinkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProviderLinkPendingPendingLinkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
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
        ? getGetApiIdentityProviderLinkPendingPendingLinkIdKey(args)
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
                (typeof client.api)['identity-provider']['link']['pending'][':pendingLinkId']['$get']
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
          client.api['identity-provider'].link.pending[':pendingLinkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiIdentityProviderLoginKey() {
  return ['api', '/api/identity-provider/login', 'POST'] as const
}

export function usePostApiIdentityProviderLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['login']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['login']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['identity-provider']['login']['$post']> },
      ) => parseResponse(client.api['identity-provider'].login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIdentityProviderLookupKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
) {
  return ['api', '/api/identity-provider/lookup', args] as const
}

export function useGetApiIdentityProviderLookup<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProviderLookup<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['lookup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiIdentityProviderSearchKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
) {
  return ['api', '/api/identity-provider/search', args] as const
}

export function useGetApiIdentityProviderSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProviderSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiIdentityProviderSearchKey() {
  return ['api', '/api/identity-provider/search', 'POST'] as const
}

export function usePostApiIdentityProviderSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['identity-provider']['search']['$post']> },
      ) => parseResponse(client.api['identity-provider'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentityProviderStartKey() {
  return ['api', '/api/identity-provider/start', 'POST'] as const
}

export function usePostApiIdentityProviderStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['identity-provider']['start']['$post']> },
      ) => parseResponse(client.api['identity-provider'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIdentityProviderTestKey(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
) {
  return ['api', '/api/identity-provider/test', args] as const
}

export function useGetApiIdentityProviderTest<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].test.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProviderTest<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider']['test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIdentityProviderTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['identity-provider'].test.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiIdentityProviderTestKey() {
  return ['api', '/api/identity-provider/test', 'POST'] as const
}

export function usePostApiIdentityProviderTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['identity-provider']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['identity-provider']['test']['$post']> },
      ) => parseResponse(client.api['identity-provider'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIdentityProviderIdentityProviderIdKey(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
) {
  return ['api', '/api/identity-provider/:identityProviderId', args] as const
}

export function useGetApiIdentityProviderIdentityProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
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
        ? getGetApiIdentityProviderIdentityProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['identity-provider'][':identityProviderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentityProviderIdentityProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
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
        ? getGetApiIdentityProviderIdentityProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['identity-provider'][':identityProviderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiIdentityProviderIdentityProviderIdKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'PUT'] as const
}

export function usePutApiIdentityProviderIdentityProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiIdentityProviderIdentityProviderIdKey()
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
            (typeof client.api)['identity-provider'][':identityProviderId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['identity-provider'][':identityProviderId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentityProviderIdentityProviderIdKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'POST'] as const
}

export function usePostApiIdentityProviderIdentityProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityProviderIdentityProviderIdKey()
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
            (typeof client.api)['identity-provider'][':identityProviderId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['identity-provider'][':identityProviderId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiIdentityProviderIdentityProviderIdKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'DELETE'] as const
}

export function useDeleteApiIdentityProviderIdentityProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiIdentityProviderIdentityProviderIdKey()
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
            (typeof client.api)['identity-provider'][':identityProviderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api['identity-provider'][':identityProviderId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiIdentityProviderIdentityProviderIdKey() {
  return ['api', '/api/identity-provider/:identityProviderId', 'PATCH'] as const
}

export function usePatchApiIdentityProviderIdentityProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['identity-provider'][':identityProviderId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['identity-provider'][':identityProviderId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiIdentityProviderIdentityProviderIdKey()
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
            (typeof client.api)['identity-provider'][':identityProviderId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api['identity-provider'][':identityProviderId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentityVerifyKey() {
  return ['api', '/api/identity/verify', 'POST'] as const
}

export function usePostApiIdentityVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.identity.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.identity.verify.$post> }) =>
        parseResponse(client.api.identity.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentityVerifyCompleteKey() {
  return ['api', '/api/identity/verify/complete', 'POST'] as const
}

export function usePostApiIdentityVerifyComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.complete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.identity.verify.complete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityVerifyCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.identity.verify.complete.$post> },
      ) => parseResponse(client.api.identity.verify.complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentityVerifySendKey() {
  return ['api', '/api/identity/verify/send', 'POST'] as const
}

export function usePostApiIdentityVerifySend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.identity.verify.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityVerifySendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.identity.verify.send.$post> },
      ) => parseResponse(client.api.identity.verify.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentityVerifyStartKey() {
  return ['api', '/api/identity/verify/start', 'POST'] as const
}

export function usePostApiIdentityVerifyStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.identity.verify.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.identity.verify.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentityVerifyStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.identity.verify.start.$post> },
      ) => parseResponse(client.api.identity.verify.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIntegrationKey() {
  return ['api', '/api/integration'] as const
}

export function useGetApiIntegration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiIntegrationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.integration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIntegration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiIntegrationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.integration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiIntegrationKey() {
  return ['api', '/api/integration', 'PUT'] as const
}

export function usePutApiIntegration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.integration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiIntegrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.integration.$put> }) =>
        parseResponse(client.api.integration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiIntegrationKey() {
  return ['api', '/api/integration', 'PATCH'] as const
}

export function usePatchApiIntegration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.integration.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.integration.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiIntegrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.integration.$patch> }) =>
        parseResponse(client.api.integration.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIpAclKey() {
  return ['api', '/api/ip-acl', 'POST'] as const
}

export function usePostApiIpAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['ip-acl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIpAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.api)['ip-acl']['$post']> }) =>
        parseResponse(client.api['ip-acl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIpAclSearchKey(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
) {
  return ['api', '/api/ip-acl/search', args] as const
}

export function useGetApiIpAclSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiIpAclSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['ip-acl'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIpAclSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api)['ip-acl']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiIpAclSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['ip-acl'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiIpAclSearchKey() {
  return ['api', '/api/ip-acl/search', 'POST'] as const
}

export function usePostApiIpAclSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['ip-acl']['search']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['ip-acl']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIpAclSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['ip-acl']['search']['$post']> },
      ) => parseResponse(client.api['ip-acl'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiIpAclAccessControlListIdKey() {
  return ['api', '/api/ip-acl/:accessControlListId', 'PUT'] as const
}

export function usePutApiIpAclAccessControlListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiIpAclAccessControlListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$put']> },
      ) => parseResponse(client.api['ip-acl'][':accessControlListId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIpAclAccessControlListIdKey() {
  return ['api', '/api/ip-acl/:accessControlListId', 'POST'] as const
}

export function usePostApiIpAclAccessControlListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIpAclAccessControlListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$post']>
        },
      ) => parseResponse(client.api['ip-acl'][':accessControlListId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiIpAclAccessControlListIdKey() {
  return ['api', '/api/ip-acl/:accessControlListId', 'PATCH'] as const
}

export function usePatchApiIpAclAccessControlListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiIpAclAccessControlListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['ip-acl'][':accessControlListId']['$patch']>
        },
      ) => parseResponse(client.api['ip-acl'][':accessControlListId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIpAclIpAccessControlListIdKey(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
) {
  return ['api', '/api/ip-acl/:ipAccessControlListId', args] as const
}

export function useGetApiIpAclIpAccessControlListId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIpAclIpAccessControlListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['ip-acl'][':ipAccessControlListId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIpAclIpAccessControlListId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiIpAclIpAccessControlListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['ip-acl'][':ipAccessControlListId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiIpAclIpAccessControlListIdKey() {
  return ['api', '/api/ip-acl/:ipAccessControlListId', 'DELETE'] as const
}

export function useDeleteApiIpAclIpAccessControlListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiIpAclIpAccessControlListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['ip-acl'][':ipAccessControlListId']['$delete']>
        },
      ) =>
        parseResponse(client.api['ip-acl'][':ipAccessControlListId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJwtIssueKey(args: InferRequestType<typeof client.api.jwt.issue.$get>) {
  return ['api', '/api/jwt/issue', args] as const
}

export function useGetApiJwtIssue<TError = unknown>(
  args: InferRequestType<typeof client.api.jwt.issue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJwtIssueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.issue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJwtIssue<TError = unknown>(
  args: InferRequestType<typeof client.api.jwt.issue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJwtIssueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.issue.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.issue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJwtPublicKeyKey(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
) {
  return ['api', '/api/jwt/public-key', args] as const
}

export function useGetApiJwtPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJwtPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt['public-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJwtPublicKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.jwt)['public-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJwtPublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jwt)['public-key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt['public-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiJwtReconcileKey() {
  return ['api', '/api/jwt/reconcile', 'POST'] as const
}

export function usePostApiJwtReconcile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.reconcile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.jwt.reconcile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJwtReconcileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.jwt.reconcile.$post> }) =>
        parseResponse(client.api.jwt.reconcile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJwtRefreshKey(args: InferRequestType<typeof client.api.jwt.refresh.$get>) {
  return ['api', '/api/jwt/refresh', args] as const
}

export function useGetApiJwtRefresh<TError = unknown>(
  args: InferRequestType<typeof client.api.jwt.refresh.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJwtRefreshKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.refresh.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJwtRefresh<TError = unknown>(
  args: InferRequestType<typeof client.api.jwt.refresh.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJwtRefreshKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.refresh.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiJwtRefreshKey() {
  return ['api', '/api/jwt/refresh', 'POST'] as const
}

export function usePostApiJwtRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.jwt.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJwtRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.jwt.refresh.$post> }) =>
        parseResponse(client.api.jwt.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiJwtRefreshKey() {
  return ['api', '/api/jwt/refresh', 'DELETE'] as const
}

export function useDeleteApiJwtRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.refresh.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.jwt.refresh.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiJwtRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.jwt.refresh.$delete> }) =>
        parseResponse(client.api.jwt.refresh.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJwtRefreshTokenIdKey(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
) {
  return ['api', '/api/jwt/refresh/:tokenId', args] as const
}

export function useGetApiJwtRefreshTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJwtRefreshTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.refresh[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJwtRefreshTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJwtRefreshTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.refresh[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiJwtRefreshTokenIdKey() {
  return ['api', '/api/jwt/refresh/:tokenId', 'DELETE'] as const
}

export function useDeleteApiJwtRefreshTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiJwtRefreshTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.jwt.refresh)[':tokenId']['$delete']> },
      ) => parseResponse(client.api.jwt.refresh[':tokenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJwtValidateKey() {
  return ['api', '/api/jwt/validate'] as const
}

export function useGetApiJwtValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJwtValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJwtValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJwtValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jwt.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiJwtVendKey() {
  return ['api', '/api/jwt/vend', 'POST'] as const
}

export function usePostApiJwtVend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jwt.vend.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.jwt.vend.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJwtVendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.jwt.vend.$post> }) =>
        parseResponse(client.api.jwt.vend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeyKey() {
  return ['api', '/api/key'] as const
}

export function useGetApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeyGenerateKey() {
  return ['api', '/api/key/generate', 'POST'] as const
}

export function usePostApiKeyGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.generate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.key.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.key.generate.$post> }) =>
        parseResponse(client.api.key.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeyGenerateKeyIdKey() {
  return ['api', '/api/key/generate/:keyId', 'POST'] as const
}

export function usePostApiKeyGenerateKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.key.generate)[':keyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.key.generate)[':keyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyGenerateKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.key.generate)[':keyId']['$post']> },
      ) => parseResponse(client.api.key.generate[':keyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeyImportKey() {
  return ['api', '/api/key/import', 'POST'] as const
}

export function usePostApiKeyImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.key.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.key.import.$post> }) =>
        parseResponse(client.api.key.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeyImportKeyIdKey() {
  return ['api', '/api/key/import/:keyId', 'POST'] as const
}

export function usePostApiKeyImportKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key.import)[':keyId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.key.import)[':keyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyImportKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.key.import)[':keyId']['$post']> },
      ) => parseResponse(client.api.key.import[':keyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeySearchKey(args: InferRequestType<typeof client.api.key.search.$get>) {
  return ['api', '/api/key/search', args] as const
}

export function useGetApiKeySearch<TError = unknown>(
  args: InferRequestType<typeof client.api.key.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeySearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.key.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeySearch<TError = unknown>(
  args: InferRequestType<typeof client.api.key.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeySearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.key.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeySearchKey() {
  return ['api', '/api/key/search', 'POST'] as const
}

export function usePostApiKeySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.key.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.key.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.key.search.$post> }) =>
        parseResponse(client.api.key.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeyKeyIdKey(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
) {
  return ['api', '/api/key/:keyId', args] as const
}

export function useGetApiKeyKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.key[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeyKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.key)[':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.key[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiKeyKeyIdKey() {
  return ['api', '/api/key/:keyId', 'PUT'] as const
}

export function usePutApiKeyKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.key)[':keyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiKeyKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.key)[':keyId']['$put']> },
      ) => parseResponse(client.api.key[':keyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeyKeyIdKey() {
  return ['api', '/api/key/:keyId', 'DELETE'] as const
}

export function useDeleteApiKeyKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.key)[':keyId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.key)[':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeyKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.key)[':keyId']['$delete']> },
      ) => parseResponse(client.api.key[':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLambdaKey(args: InferRequestType<typeof client.api.lambda.$get>) {
  return ['api', '/api/lambda', args] as const
}

export function useGetApiLambda<TError = unknown>(
  args: InferRequestType<typeof client.api.lambda.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLambdaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.lambda.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLambda<TError = unknown>(
  args: InferRequestType<typeof client.api.lambda.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLambdaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.lambda.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLambdaKey() {
  return ['api', '/api/lambda', 'POST'] as const
}

export function usePostApiLambda<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.lambda.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLambdaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.lambda.$post> }) =>
        parseResponse(client.api.lambda.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLambdaSearchKey() {
  return ['api', '/api/lambda/search', 'POST'] as const
}

export function usePostApiLambdaSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.lambda.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.lambda.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLambdaSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.lambda.search.$post> }) =>
        parseResponse(client.api.lambda.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLambdaLambdaIdKey(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
) {
  return ['api', '/api/lambda/:lambdaId', args] as const
}

export function useGetApiLambdaLambdaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLambdaLambdaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.lambda[':lambdaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLambdaLambdaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLambdaLambdaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.lambda[':lambdaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiLambdaLambdaIdKey() {
  return ['api', '/api/lambda/:lambdaId', 'PUT'] as const
}

export function usePutApiLambdaLambdaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLambdaLambdaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$put']> },
      ) => parseResponse(client.api.lambda[':lambdaId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLambdaLambdaIdKey() {
  return ['api', '/api/lambda/:lambdaId', 'POST'] as const
}

export function usePostApiLambdaLambdaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLambdaLambdaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$post']> },
      ) => parseResponse(client.api.lambda[':lambdaId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLambdaLambdaIdKey() {
  return ['api', '/api/lambda/:lambdaId', 'DELETE'] as const
}

export function useDeleteApiLambdaLambdaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLambdaLambdaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$delete']> },
      ) => parseResponse(client.api.lambda[':lambdaId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLambdaLambdaIdKey() {
  return ['api', '/api/lambda/:lambdaId', 'PATCH'] as const
}

export function usePatchApiLambdaLambdaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.lambda)[':lambdaId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.lambda)[':lambdaId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLambdaLambdaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.lambda)[':lambdaId']['$patch']> },
      ) => parseResponse(client.api.lambda[':lambdaId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiLoginKey() {
  return ['api', '/api/login', 'PUT'] as const
}

export function usePutApiLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.login.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.login.$put> }) =>
        parseResponse(client.api.login.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLoginKey() {
  return ['api', '/api/login', 'POST'] as const
}

export function usePostApiLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.login.$post> }) =>
        parseResponse(client.api.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiLoginUserIdApplicationIdKey() {
  return ['api', '/api/login/:userId/:applicationId', 'PUT'] as const
}

export function usePutApiLoginUserIdApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.login)[':userId'][':applicationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.login)[':userId'][':applicationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLoginUserIdApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.login)[':userId'][':applicationId']['$put']>
        },
      ) => parseResponse(client.api.login[':userId'][':applicationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogoutKey() {
  return ['api', '/api/logout', 'POST'] as const
}

export function usePostApiLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.logout.$post> }) =>
        parseResponse(client.api.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMessageTemplateKey() {
  return ['api', '/api/message/template'] as const
}

export function useGetApiMessageTemplate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMessageTemplateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.message.template.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMessageTemplate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMessageTemplateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.message.template.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiMessageTemplateKey() {
  return ['api', '/api/message/template', 'POST'] as const
}

export function usePostApiMessageTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.message.template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMessageTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.message.template.$post> },
      ) => parseResponse(client.api.message.template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiMessageTemplatePreviewKey() {
  return ['api', '/api/message/template/preview', 'POST'] as const
}

export function usePostApiMessageTemplatePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.message.template.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.message.template.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMessageTemplatePreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.message.template.preview.$post> },
      ) => parseResponse(client.api.message.template.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMessageTemplateMessageTemplateIdKey(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
) {
  return ['api', '/api/message/template/:messageTemplateId', args] as const
}

export function useGetApiMessageTemplateMessageTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMessageTemplateMessageTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.message.template[':messageTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMessageTemplateMessageTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMessageTemplateMessageTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.message.template[':messageTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiMessageTemplateMessageTemplateIdKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'PUT'] as const
}

export function usePutApiMessageTemplateMessageTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiMessageTemplateMessageTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$put']>
        },
      ) =>
        parseResponse(client.api.message.template[':messageTemplateId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiMessageTemplateMessageTemplateIdKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'POST'] as const
}

export function usePostApiMessageTemplateMessageTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMessageTemplateMessageTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$post']>
        },
      ) =>
        parseResponse(client.api.message.template[':messageTemplateId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiMessageTemplateMessageTemplateIdKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'DELETE'] as const
}

export function useDeleteApiMessageTemplateMessageTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiMessageTemplateMessageTemplateIdKey()
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
            (typeof client.api.message.template)[':messageTemplateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.message.template[':messageTemplateId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiMessageTemplateMessageTemplateIdKey() {
  return ['api', '/api/message/template/:messageTemplateId', 'PATCH'] as const
}

export function usePatchApiMessageTemplateMessageTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.message.template)[':messageTemplateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiMessageTemplateMessageTemplateIdKey()
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
            (typeof client.api.message.template)[':messageTemplateId']['$patch']
          >
        },
      ) =>
        parseResponse(client.api.message.template[':messageTemplateId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMessengerKey() {
  return ['api', '/api/messenger'] as const
}

export function useGetApiMessenger<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMessengerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.messenger.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMessenger<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMessengerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.messenger.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiMessengerKey() {
  return ['api', '/api/messenger', 'POST'] as const
}

export function usePostApiMessenger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.messenger.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.messenger.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMessengerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.messenger.$post> }) =>
        parseResponse(client.api.messenger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiMessengerMessengerIdKey(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
) {
  return ['api', '/api/messenger/:messengerId', args] as const
}

export function useGetApiMessengerMessengerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMessengerMessengerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.messenger[':messengerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMessengerMessengerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.messenger)[':messengerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMessengerMessengerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.messenger[':messengerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiMessengerMessengerIdKey() {
  return ['api', '/api/messenger/:messengerId', 'PUT'] as const
}

export function usePutApiMessengerMessengerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiMessengerMessengerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.messenger)[':messengerId']['$put']> },
      ) => parseResponse(client.api.messenger[':messengerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiMessengerMessengerIdKey() {
  return ['api', '/api/messenger/:messengerId', 'POST'] as const
}

export function usePostApiMessengerMessengerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMessengerMessengerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.messenger)[':messengerId']['$post']> },
      ) => parseResponse(client.api.messenger[':messengerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiMessengerMessengerIdKey() {
  return ['api', '/api/messenger/:messengerId', 'DELETE'] as const
}

export function useDeleteApiMessengerMessengerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiMessengerMessengerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.messenger)[':messengerId']['$delete']> },
      ) => parseResponse(client.api.messenger[':messengerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiMessengerMessengerIdKey() {
  return ['api', '/api/messenger/:messengerId', 'PATCH'] as const
}

export function usePatchApiMessengerMessengerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.messenger)[':messengerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.messenger)[':messengerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiMessengerMessengerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.messenger)[':messengerId']['$patch']> },
      ) => parseResponse(client.api.messenger[':messengerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPasswordlessLoginKey() {
  return ['api', '/api/passwordless/login', 'POST'] as const
}

export function usePostApiPasswordlessLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.login.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.passwordless.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPasswordlessLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.passwordless.login.$post> },
      ) => parseResponse(client.api.passwordless.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPasswordlessSendKey() {
  return ['api', '/api/passwordless/send', 'POST'] as const
}

export function usePostApiPasswordlessSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.passwordless.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPasswordlessSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.passwordless.send.$post> },
      ) => parseResponse(client.api.passwordless.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPasswordlessStartKey() {
  return ['api', '/api/passwordless/start', 'POST'] as const
}

export function usePostApiPasswordlessStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.passwordless.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.passwordless.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPasswordlessStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.passwordless.start.$post> },
      ) => parseResponse(client.api.passwordless.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiReactorKey() {
  return ['api', '/api/reactor'] as const
}

export function useGetApiReactor<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReactorKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.reactor.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReactor<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReactorKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.reactor.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiReactorKey() {
  return ['api', '/api/reactor', 'PUT'] as const
}

export function usePutApiReactor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiReactorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.reactor.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiReactorKey() {
  return ['api', '/api/reactor', 'POST'] as const
}

export function usePostApiReactor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.reactor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiReactorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.reactor.$post> }) =>
        parseResponse(client.api.reactor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiReactorKey() {
  return ['api', '/api/reactor', 'DELETE'] as const
}

export function useDeleteApiReactor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiReactorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.reactor.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiReactorMetricsKey() {
  return ['api', '/api/reactor/metrics'] as const
}

export function useGetApiReactorMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReactorMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.reactor.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReactorMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReactorMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.reactor.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.reactor.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReportDailyActiveUserKey(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
) {
  return ['api', '/api/report/daily-active-user', args] as const
}

export function useGetApiReportDailyActiveUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportDailyActiveUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report['daily-active-user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportDailyActiveUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.report)['daily-active-user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportDailyActiveUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['daily-active-user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report['daily-active-user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReportLoginKey(
  args: InferRequestType<typeof client.api.report.login.$get>,
) {
  return ['api', '/api/report/login', args] as const
}

export function useGetApiReportLogin<TError = unknown>(
  args: InferRequestType<typeof client.api.report.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReportLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportLogin<TError = unknown>(
  args: InferRequestType<typeof client.api.report.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReportLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReportMonthlyActiveUserKey(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
) {
  return ['api', '/api/report/monthly-active-user', args] as const
}

export function useGetApiReportMonthlyActiveUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportMonthlyActiveUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report['monthly-active-user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportMonthlyActiveUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.report)['monthly-active-user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportMonthlyActiveUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.report)['monthly-active-user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report['monthly-active-user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReportRegistrationKey(
  args: InferRequestType<typeof client.api.report.registration.$get>,
) {
  return ['api', '/api/report/registration', args] as const
}

export function useGetApiReportRegistration<TError = unknown>(
  args: InferRequestType<typeof client.api.report.registration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportRegistrationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report.registration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportRegistration<TError = unknown>(
  args: InferRequestType<typeof client.api.report.registration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportRegistrationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.report.registration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report.registration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReportTotalsKey(
  args: InferRequestType<typeof client.api.report.totals.$get>,
) {
  return ['api', '/api/report/totals', args] as const
}

export function useGetApiReportTotals<TError = unknown>(
  args: InferRequestType<typeof client.api.report.totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report.totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportTotals<TError = unknown>(
  args: InferRequestType<typeof client.api.report.totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReportTotalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.report.totals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.report.totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStatusKey() {
  return ['api', '/api/status'] as const
}

export function useGetApiStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSystemConfigurationKey() {
  return ['api', '/api/system-configuration'] as const
}

export function useGetApiSystemConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
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
        ? getGetApiSystemConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['system-configuration'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
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
        ? getGetApiSystemConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['system-configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['system-configuration'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiSystemConfigurationKey() {
  return ['api', '/api/system-configuration', 'PUT'] as const
}

export function usePutApiSystemConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['system-configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiSystemConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['system-configuration']['$put']> },
      ) => parseResponse(client.api['system-configuration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiSystemConfigurationKey() {
  return ['api', '/api/system-configuration', 'PATCH'] as const
}

export function usePatchApiSystemConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['system-configuration']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['system-configuration']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiSystemConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['system-configuration']['$patch']> },
      ) => parseResponse(client.api['system-configuration'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSystemAuditLogKey() {
  return ['api', '/api/system/audit-log', 'POST'] as const
}

export function usePostApiSystemAuditLog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.system)['audit-log']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.system)['audit-log']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSystemAuditLogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.system)['audit-log']['$post']> },
      ) => parseResponse(client.api.system['audit-log'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSystemAuditLogSearchKey() {
  return ['api', '/api/system/audit-log/search', 'POST'] as const
}

export function usePostApiSystemAuditLogSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['audit-log']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.system)['audit-log']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSystemAuditLogSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.system)['audit-log']['search']['$post']> },
      ) => parseResponse(client.api.system['audit-log'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSystemAuditLogAuditLogIdKey(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
) {
  return ['api', '/api/system/audit-log/:auditLogId', args] as const
}

export function useGetApiSystemAuditLogAuditLogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSystemAuditLogAuditLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.system['audit-log'][':auditLogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemAuditLogAuditLogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSystemAuditLogAuditLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['audit-log'][':auditLogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.system['audit-log'][':auditLogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSystemEventLogSearchKey() {
  return ['api', '/api/system/event-log/search', 'POST'] as const
}

export function usePostApiSystemEventLogSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['event-log']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.system)['event-log']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSystemEventLogSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.system)['event-log']['search']['$post']> },
      ) => parseResponse(client.api.system['event-log'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSystemEventLogEventLogIdKey(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
) {
  return ['api', '/api/system/event-log/:eventLogId', args] as const
}

export function useGetApiSystemEventLogEventLogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSystemEventLogEventLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.system['event-log'][':eventLogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemEventLogEventLogId<TError = unknown>(
  args: InferRequestType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSystemEventLogEventLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.system)['event-log'][':eventLogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.system['event-log'][':eventLogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSystemLoginRecordSearchKey() {
  return ['api', '/api/system/login-record/search', 'POST'] as const
}

export function usePostApiSystemLoginRecordSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['login-record']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.system)['login-record']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSystemLoginRecordSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.system)['login-record']['search']['$post']> },
      ) => parseResponse(client.api.system['login-record'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSystemReindexKey() {
  return ['api', '/api/system/reindex'] as const
}

export function useGetApiSystemReindex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSystemReindexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.system.reindex.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemReindex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSystemReindexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.system.reindex.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSystemReindexKey() {
  return ['api', '/api/system/reindex', 'POST'] as const
}

export function usePostApiSystemReindex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.reindex.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.system.reindex.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSystemReindexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.system.reindex.$post> }) =>
        parseResponse(client.api.system.reindex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSystemVersionKey() {
  return ['api', '/api/system/version'] as const
}

export function useGetApiSystemVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSystemVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.system.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSystemVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.system.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSystemWebhookAttemptLogWebhookAttemptLogIdKey(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
) {
  return ['api', '/api/system/webhook-attempt-log/:webhookAttemptLogId', args] as const
}

export function useGetApiSystemWebhookAttemptLogWebhookAttemptLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
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
        ? getGetApiSystemWebhookAttemptLogWebhookAttemptLogIdKey(args)
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
                (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
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
          client.api.system['webhook-attempt-log'][':webhookAttemptLogId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemWebhookAttemptLogWebhookAttemptLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
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
        ? getGetApiSystemWebhookAttemptLogWebhookAttemptLogIdKey(args)
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
                (typeof client.api.system)['webhook-attempt-log'][':webhookAttemptLogId']['$get']
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
          client.api.system['webhook-attempt-log'][':webhookAttemptLogId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiSystemWebhookEventLogSearchKey() {
  return ['api', '/api/system/webhook-event-log/search', 'POST'] as const
}

export function usePostApiSystemWebhookEventLogSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.system)['webhook-event-log']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.system)['webhook-event-log']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSystemWebhookEventLogSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.system)['webhook-event-log']['search']['$post']>
        },
      ) => parseResponse(client.api.system['webhook-event-log'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSystemWebhookEventLogWebhookEventLogIdKey(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
) {
  return ['api', '/api/system/webhook-event-log/:webhookEventLogId', args] as const
}

export function useGetApiSystemWebhookEventLogWebhookEventLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
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
        ? getGetApiSystemWebhookEventLogWebhookEventLogIdKey(args)
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
                (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
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
          client.api.system['webhook-event-log'][':webhookEventLogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSystemWebhookEventLogWebhookEventLogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
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
        ? getGetApiSystemWebhookEventLogWebhookEventLogIdKey(args)
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
                (typeof client.api.system)['webhook-event-log'][':webhookEventLogId']['$get']
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
          client.api.system['webhook-event-log'][':webhookEventLogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiTenantKey(args: InferRequestType<typeof client.api.tenant.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tenant', keyArgs] as const
}

export function useGetApiTenant<TError = unknown>(
  args: InferRequestType<typeof client.api.tenant.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTenantKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tenant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTenant<TError = unknown>(
  args: InferRequestType<typeof client.api.tenant.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTenantKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tenant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTenantKey() {
  return ['api', '/api/tenant', 'POST'] as const
}

export function usePostApiTenant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.tenant.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTenantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.tenant.$post> }) =>
        parseResponse(client.api.tenant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTenantManagerKey() {
  return ['api', '/api/tenant-manager'] as const
}

export function useGetApiTenantManager<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTenantManagerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['tenant-manager'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTenantManager<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTenantManagerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['tenant-manager'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiTenantManagerKey() {
  return ['api', '/api/tenant-manager', 'PUT'] as const
}

export function usePutApiTenantManager<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['tenant-manager']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiTenantManagerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['tenant-manager']['$put']> },
      ) => parseResponse(client.api['tenant-manager'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiTenantManagerKey() {
  return ['api', '/api/tenant-manager', 'PATCH'] as const
}

export function usePatchApiTenantManager<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['tenant-manager']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['tenant-manager']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiTenantManagerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['tenant-manager']['$patch']> },
      ) => parseResponse(client.api['tenant-manager'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiTenantManagerIdentityProviderTypeKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'PUT'] as const
}

export function usePutApiTenantManagerIdentityProviderType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiTenantManagerIdentityProviderTypeKey()
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
            (typeof client.api)['tenant-manager']['identity-provider'][':type']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['tenant-manager']['identity-provider'][':type'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiTenantManagerIdentityProviderTypeKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'POST'] as const
}

export function usePostApiTenantManagerIdentityProviderType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTenantManagerIdentityProviderTypeKey()
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
            (typeof client.api)['tenant-manager']['identity-provider'][':type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['tenant-manager']['identity-provider'][':type'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiTenantManagerIdentityProviderTypeKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'DELETE'] as const
}

export function useDeleteApiTenantManagerIdentityProviderType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiTenantManagerIdentityProviderTypeKey()
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
            (typeof client.api)['tenant-manager']['identity-provider'][':type']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api['tenant-manager']['identity-provider'][':type'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiTenantManagerIdentityProviderTypeKey() {
  return ['api', '/api/tenant-manager/identity-provider/:type', 'PATCH'] as const
}

export function usePatchApiTenantManagerIdentityProviderType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiTenantManagerIdentityProviderTypeKey()
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
            (typeof client.api)['tenant-manager']['identity-provider'][':type']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api['tenant-manager']['identity-provider'][':type'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiTenantPasswordValidationRulesKey() {
  return ['api', '/api/tenant/password-validation-rules'] as const
}

export function useGetApiTenantPasswordValidationRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
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
        ? getGetApiTenantPasswordValidationRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.tenant['password-validation-rules'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTenantPasswordValidationRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
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
        ? getGetApiTenantPasswordValidationRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.tenant)['password-validation-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.tenant['password-validation-rules'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiTenantPasswordValidationRulesTenantIdKey(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
) {
  return ['api', '/api/tenant/password-validation-rules/:tenantId', args] as const
}

export function useGetApiTenantPasswordValidationRulesTenantId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
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
        ? getGetApiTenantPasswordValidationRulesTenantIdKey(args)
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
                (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
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
          client.api.tenant['password-validation-rules'][':tenantId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTenantPasswordValidationRulesTenantId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
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
        ? getGetApiTenantPasswordValidationRulesTenantIdKey(args)
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
                (typeof client.api.tenant)['password-validation-rules'][':tenantId']['$get']
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
          client.api.tenant['password-validation-rules'][':tenantId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiTenantSearchKey() {
  return ['api', '/api/tenant/search', 'POST'] as const
}

export function usePostApiTenantSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tenant.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.tenant.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTenantSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.tenant.search.$post> }) =>
        parseResponse(client.api.tenant.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTenantTenantIdKey(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tenant/:tenantId', keyArgs] as const
}

export function useGetApiTenantTenantId<TError = unknown>(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiTenantTenantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tenant[':tenantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTenantTenantId<TError = unknown>(
  args: InferRequestType<(typeof client.api.tenant)[':tenantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiTenantTenantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tenant[':tenantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiTenantTenantIdKey() {
  return ['api', '/api/tenant/:tenantId', 'PUT'] as const
}

export function usePutApiTenantTenantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiTenantTenantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.tenant)[':tenantId']['$put']> },
      ) => parseResponse(client.api.tenant[':tenantId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTenantTenantIdKey() {
  return ['api', '/api/tenant/:tenantId', 'POST'] as const
}

export function usePostApiTenantTenantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTenantTenantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.tenant)[':tenantId']['$post']> },
      ) => parseResponse(client.api.tenant[':tenantId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiTenantTenantIdKey() {
  return ['api', '/api/tenant/:tenantId', 'DELETE'] as const
}

export function useDeleteApiTenantTenantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiTenantTenantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.tenant)[':tenantId']['$delete']> },
      ) => parseResponse(client.api.tenant[':tenantId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiTenantTenantIdKey() {
  return ['api', '/api/tenant/:tenantId', 'PATCH'] as const
}

export function usePatchApiTenantTenantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tenant)[':tenantId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.tenant)[':tenantId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiTenantTenantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.tenant)[':tenantId']['$patch']> },
      ) => parseResponse(client.api.tenant[':tenantId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiThemeKey() {
  return ['api', '/api/theme'] as const
}

export function useGetApiTheme<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiThemeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.theme.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTheme<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiThemeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.theme.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiThemeKey() {
  return ['api', '/api/theme', 'POST'] as const
}

export function usePostApiTheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.theme.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiThemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.theme.$post> }) =>
        parseResponse(client.api.theme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiThemeSearchKey() {
  return ['api', '/api/theme/search', 'POST'] as const
}

export function usePostApiThemeSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.theme.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.theme.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiThemeSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.theme.search.$post> }) =>
        parseResponse(client.api.theme.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiThemeThemeIdKey(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
) {
  return ['api', '/api/theme/:themeId', args] as const
}

export function useGetApiThemeThemeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiThemeThemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.theme[':themeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiThemeThemeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.theme)[':themeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiThemeThemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.theme[':themeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiThemeThemeIdKey() {
  return ['api', '/api/theme/:themeId', 'PUT'] as const
}

export function usePutApiThemeThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.theme)[':themeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiThemeThemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.theme)[':themeId']['$put']> },
      ) => parseResponse(client.api.theme[':themeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiThemeThemeIdKey() {
  return ['api', '/api/theme/:themeId', 'POST'] as const
}

export function usePostApiThemeThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.theme)[':themeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiThemeThemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.theme)[':themeId']['$post']> },
      ) => parseResponse(client.api.theme[':themeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiThemeThemeIdKey() {
  return ['api', '/api/theme/:themeId', 'DELETE'] as const
}

export function useDeleteApiThemeThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.theme)[':themeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiThemeThemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.theme)[':themeId']['$delete']> },
      ) => parseResponse(client.api.theme[':themeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiThemeThemeIdKey() {
  return ['api', '/api/theme/:themeId', 'PATCH'] as const
}

export function usePatchApiThemeThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.theme)[':themeId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.theme)[':themeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiThemeThemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.theme)[':themeId']['$patch']> },
      ) => parseResponse(client.api.theme[':themeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTwoFactorLoginKey() {
  return ['api', '/api/two-factor/login', 'POST'] as const
}

export function usePostApiTwoFactorLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['login']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['two-factor']['login']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTwoFactorLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['two-factor']['login']['$post']> },
      ) => parseResponse(client.api['two-factor'].login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTwoFactorSecretKey() {
  return ['api', '/api/two-factor/secret'] as const
}

export function useGetApiTwoFactorSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTwoFactorSecretKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['two-factor'].secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTwoFactorSecret<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTwoFactorSecretKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['two-factor']['secret']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['two-factor'].secret.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTwoFactorSendKey() {
  return ['api', '/api/two-factor/send', 'POST'] as const
}

export function usePostApiTwoFactorSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['two-factor']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTwoFactorSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['two-factor']['send']['$post']> },
      ) => parseResponse(client.api['two-factor'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTwoFactorSendTwoFactorIdKey() {
  return ['api', '/api/two-factor/send/:twoFactorId', 'POST'] as const
}

export function usePostApiTwoFactorSendTwoFactorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTwoFactorSendTwoFactorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['two-factor']['send'][':twoFactorId']['$post']>
        },
      ) => parseResponse(client.api['two-factor'].send[':twoFactorId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTwoFactorStartKey() {
  return ['api', '/api/two-factor/start', 'POST'] as const
}

export function usePostApiTwoFactorStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['two-factor']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTwoFactorStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['two-factor']['start']['$post']> },
      ) => parseResponse(client.api['two-factor'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTwoFactorStatusKey() {
  return ['api', '/api/two-factor/status', 'POST'] as const
}

export function usePostApiTwoFactorStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['two-factor']['status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['two-factor']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTwoFactorStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['two-factor']['status']['$post']> },
      ) => parseResponse(client.api['two-factor'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTwoFactorStatusTwoFactorTrustIdKey(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
) {
  return ['api', '/api/two-factor/status/:twoFactorTrustId', args] as const
}

export function useGetApiTwoFactorStatusTwoFactorTrustId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
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
        ? getGetApiTwoFactorStatusTwoFactorTrustIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['two-factor'].status[':twoFactorTrustId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTwoFactorStatusTwoFactorTrustId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
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
        ? getGetApiTwoFactorStatusTwoFactorTrustIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['two-factor']['status'][':twoFactorTrustId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['two-factor'].status[':twoFactorTrustId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserKey(args: InferRequestType<typeof client.api.user.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user', keyArgs] as const
}

export function useGetApiUser<TError = unknown>(
  args: InferRequestType<typeof client.api.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.user.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiUser<TError = unknown>(
  args: InferRequestType<typeof client.api.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.user.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiUserKey() {
  return ['api', '/api/user', 'POST'] as const
}

export function usePostApiUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.$post> }) =>
        parseResponse(client.api.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserActionKey(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user-action', keyArgs] as const
}

export function useGetApiUserAction<TError = unknown>(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserActionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['user-action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserAction<TError = unknown>(
  args: InferRequestType<(typeof client.api)['user-action']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserActionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['user-action'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserActionKey() {
  return ['api', '/api/user-action', 'POST'] as const
}

export function usePostApiUserAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['user-action']['$post']> },
      ) => parseResponse(client.api['user-action'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserActionReasonKey() {
  return ['api', '/api/user-action-reason'] as const
}

export function useGetApiUserActionReason<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>>
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
        ? getGetApiUserActionReasonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['user-action-reason'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserActionReason<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>>
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
        ? getGetApiUserActionReasonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['user-action-reason']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['user-action-reason'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserActionReasonKey() {
  return ['api', '/api/user-action-reason', 'POST'] as const
}

export function usePostApiUserActionReason<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action-reason']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action-reason']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserActionReasonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['user-action-reason']['$post']> },
      ) => parseResponse(client.api['user-action-reason'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserActionReasonUserActionReasonIdKey(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
) {
  return ['api', '/api/user-action-reason/:userActionReasonId', args] as const
}

export function useGetApiUserActionReasonUserActionReasonId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
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
        ? getGetApiUserActionReasonUserActionReasonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['user-action-reason'][':userActionReasonId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserActionReasonUserActionReasonId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
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
        ? getGetApiUserActionReasonUserActionReasonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['user-action-reason'][':userActionReasonId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserActionReasonUserActionReasonIdKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'PUT'] as const
}

export function usePutApiUserActionReasonUserActionReasonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserActionReasonUserActionReasonIdKey()
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
            (typeof client.api)['user-action-reason'][':userActionReasonId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['user-action-reason'][':userActionReasonId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserActionReasonUserActionReasonIdKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'POST'] as const
}

export function usePostApiUserActionReasonUserActionReasonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserActionReasonUserActionReasonIdKey()
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
            (typeof client.api)['user-action-reason'][':userActionReasonId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['user-action-reason'][':userActionReasonId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserActionReasonUserActionReasonIdKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'DELETE'] as const
}

export function useDeleteApiUserActionReasonUserActionReasonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserActionReasonUserActionReasonIdKey()
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
            (typeof client.api)['user-action-reason'][':userActionReasonId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api['user-action-reason'][':userActionReasonId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiUserActionReasonUserActionReasonIdKey() {
  return ['api', '/api/user-action-reason/:userActionReasonId', 'PATCH'] as const
}

export function usePatchApiUserActionReasonUserActionReasonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiUserActionReasonUserActionReasonIdKey()
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
            (typeof client.api)['user-action-reason'][':userActionReasonId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api['user-action-reason'][':userActionReasonId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserActionUserActionIdKey(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user-action/:userActionId', keyArgs] as const
}

export function useGetApiUserActionUserActionId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserActionUserActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['user-action'][':userActionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserActionUserActionId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserActionUserActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['user-action'][':userActionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserActionUserActionIdKey() {
  return ['api', '/api/user-action/:userActionId', 'PUT'] as const
}

export function usePutApiUserActionUserActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserActionUserActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$put']> },
      ) => parseResponse(client.api['user-action'][':userActionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserActionUserActionIdKey() {
  return ['api', '/api/user-action/:userActionId', 'POST'] as const
}

export function usePostApiUserActionUserActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserActionUserActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$post']> },
      ) => parseResponse(client.api['user-action'][':userActionId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserActionUserActionIdKey() {
  return ['api', '/api/user-action/:userActionId', 'DELETE'] as const
}

export function useDeleteApiUserActionUserActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserActionUserActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$delete']>
        },
      ) => parseResponse(client.api['user-action'][':userActionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiUserActionUserActionIdKey() {
  return ['api', '/api/user-action/:userActionId', 'PATCH'] as const
}

export function usePatchApiUserActionUserActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['user-action'][':userActionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['user-action'][':userActionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiUserActionUserActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['user-action'][':userActionId']['$patch']> },
      ) => parseResponse(client.api['user-action'][':userActionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserAction2Key(
  args: InferRequestType<typeof client.api.user.action.$get>,
) {
  return ['api', '/api/user/action', args] as const
}

export function useGetApiUserAction2<TError = unknown>(
  args: InferRequestType<typeof client.api.user.action.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserAction2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.action.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserAction2<TError = unknown>(
  args: InferRequestType<typeof client.api.user.action.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserAction2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.action.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserAction2Key() {
  return ['api', '/api/user/action', 'POST'] as const
}

export function usePostApiUserAction2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.action.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.action.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserAction2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.action.$post> }) =>
        parseResponse(client.api.user.action.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserActionActionIdKey(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
) {
  return ['api', '/api/user/action/:actionId', args] as const
}

export function useGetApiUserActionActionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserActionActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.action[':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserActionActionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.action)[':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserActionActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.action[':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserActionActionIdKey() {
  return ['api', '/api/user/action/:actionId', 'PUT'] as const
}

export function usePutApiUserActionActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.action)[':actionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserActionActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user.action)[':actionId']['$put']> },
      ) => parseResponse(client.api.user.action[':actionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserActionActionIdKey() {
  return ['api', '/api/user/action/:actionId', 'DELETE'] as const
}

export function useDeleteApiUserActionActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.action)[':actionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.action)[':actionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserActionActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user.action)[':actionId']['$delete']> },
      ) => parseResponse(client.api.user.action[':actionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserBulkKey() {
  return ['api', '/api/user/bulk', 'DELETE'] as const
}

export function useDeleteApiUserBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.bulk.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.bulk.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.bulk.$delete> }) =>
        parseResponse(client.api.user.bulk.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserChangePasswordKey(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
) {
  return ['api', '/api/user/change-password', args] as const
}

export function useGetApiUserChangePassword<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserChangePasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user['change-password'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserChangePassword<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)['change-password']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserChangePasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['change-password']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user['change-password'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserChangePasswordKey() {
  return ['api', '/api/user/change-password', 'POST'] as const
}

export function usePostApiUserChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['change-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['change-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)['change-password']['$post']> },
      ) => parseResponse(client.api.user['change-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserChangePasswordChangePasswordIdKey(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
) {
  return ['api', '/api/user/change-password/:changePasswordId', args] as const
}

export function useGetApiUserChangePasswordChangePasswordId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
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
        ? getGetApiUserChangePasswordChangePasswordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.user['change-password'][':changePasswordId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserChangePasswordChangePasswordId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
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
        ? getGetApiUserChangePasswordChangePasswordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.user['change-password'][':changePasswordId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserChangePasswordChangePasswordIdKey() {
  return ['api', '/api/user/change-password/:changePasswordId', 'POST'] as const
}

export function usePostApiUserChangePasswordChangePasswordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)['change-password'][':changePasswordId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['change-password'][':changePasswordId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserChangePasswordChangePasswordIdKey()
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
            (typeof client.api.user)['change-password'][':changePasswordId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.user['change-password'][':changePasswordId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserCommentKey() {
  return ['api', '/api/user/comment', 'POST'] as const
}

export function usePostApiUserComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.comment.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.comment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.comment.$post> }) =>
        parseResponse(client.api.user.comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserCommentSearchKey() {
  return ['api', '/api/user/comment/search', 'POST'] as const
}

export function usePostApiUserCommentSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.comment.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.comment.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserCommentSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.user.comment.search.$post> },
      ) => parseResponse(client.api.user.comment.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserCommentUserIdKey(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/comment/:userId', keyArgs] as const
}

export function useGetApiUserCommentUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserCommentUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.comment[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserCommentUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.comment)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserCommentUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.comment)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.comment[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserConsentKey(
  args: InferRequestType<typeof client.api.user.consent.$get>,
) {
  return ['api', '/api/user/consent', args] as const
}

export function useGetApiUserConsent<TError = unknown>(
  args: InferRequestType<typeof client.api.user.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserConsentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserConsent<TError = unknown>(
  args: InferRequestType<typeof client.api.user.consent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserConsentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.consent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserConsentKey() {
  return ['api', '/api/user/consent', 'POST'] as const
}

export function usePostApiUserConsent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.consent.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.consent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserConsentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.consent.$post> }) =>
        parseResponse(client.api.user.consent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserConsentUserConsentIdKey(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
) {
  return ['api', '/api/user/consent/:userConsentId', args] as const
}

export function useGetApiUserConsentUserConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserConsentUserConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user.consent[':userConsentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserConsentUserConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserConsentUserConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.user.consent[':userConsentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserConsentUserConsentIdKey() {
  return ['api', '/api/user/consent/:userConsentId', 'PUT'] as const
}

export function usePutApiUserConsentUserConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserConsentUserConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$put']> },
      ) => parseResponse(client.api.user.consent[':userConsentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserConsentUserConsentIdKey() {
  return ['api', '/api/user/consent/:userConsentId', 'POST'] as const
}

export function usePostApiUserConsentUserConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserConsentUserConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$post']> },
      ) => parseResponse(client.api.user.consent[':userConsentId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserConsentUserConsentIdKey() {
  return ['api', '/api/user/consent/:userConsentId', 'DELETE'] as const
}

export function useDeleteApiUserConsentUserConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserConsentUserConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$delete']> },
      ) => parseResponse(client.api.user.consent[':userConsentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiUserConsentUserConsentIdKey() {
  return ['api', '/api/user/consent/:userConsentId', 'PATCH'] as const
}

export function usePatchApiUserConsentUserConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.consent)[':userConsentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiUserConsentUserConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.consent)[':userConsentId']['$patch']> },
      ) => parseResponse(client.api.user.consent[':userConsentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserFamilyKey(args: InferRequestType<typeof client.api.user.family.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/family', keyArgs] as const
}

export function useGetApiUserFamily<TError = unknown>(
  args: InferRequestType<typeof client.api.user.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserFamilyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserFamily<TError = unknown>(
  args: InferRequestType<typeof client.api.user.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserFamilyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserFamilyKey() {
  return ['api', '/api/user/family', 'POST'] as const
}

export function usePostApiUserFamily<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.family.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserFamilyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.family.$post> }) =>
        parseResponse(client.api.user.family.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserFamilyPendingKey(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
) {
  return ['api', '/api/user/family/pending', args] as const
}

export function useGetApiUserFamilyPending<TError = unknown>(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserFamilyPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.family.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserFamilyPending<TError = unknown>(
  args: InferRequestType<typeof client.api.user.family.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserFamilyPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.pending.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.family.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserFamilyRequestKey() {
  return ['api', '/api/user/family/request', 'POST'] as const
}

export function usePostApiUserFamilyRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.family.request.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.family.request.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserFamilyRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.user.family.request.$post> },
      ) => parseResponse(client.api.user.family.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserFamilyFamilyIdKey(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/family/:familyId', keyArgs] as const
}

export function useGetApiUserFamilyFamilyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserFamilyFamilyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.family[':familyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserFamilyFamilyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user.family)[':familyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserFamilyFamilyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.family[':familyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserFamilyFamilyIdKey() {
  return ['api', '/api/user/family/:familyId', 'PUT'] as const
}

export function usePutApiUserFamilyFamilyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.family)[':familyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserFamilyFamilyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user.family)[':familyId']['$put']> },
      ) => parseResponse(client.api.user.family[':familyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserFamilyFamilyIdKey() {
  return ['api', '/api/user/family/:familyId', 'POST'] as const
}

export function usePostApiUserFamilyFamilyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.family)[':familyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserFamilyFamilyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user.family)[':familyId']['$post']> },
      ) => parseResponse(client.api.user.family[':familyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserFamilyFamilyIdUserIdKey() {
  return ['api', '/api/user/family/:familyId/:userId', 'DELETE'] as const
}

export function useDeleteApiUserFamilyFamilyIdUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserFamilyFamilyIdUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.user.family)[':familyId'][':userId']['$delete']>
        },
      ) =>
        parseResponse(client.api.user.family[':familyId'][':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserForgotPasswordKey() {
  return ['api', '/api/user/forgot-password', 'POST'] as const
}

export function usePostApiUserForgotPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['forgot-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['forgot-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserForgotPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)['forgot-password']['$post']> },
      ) => parseResponse(client.api.user['forgot-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserImportKey() {
  return ['api', '/api/user/import', 'POST'] as const
}

export function usePostApiUserImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.import.$post> }) =>
        parseResponse(client.api.user.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserRecentLoginKey(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
) {
  return ['api', '/api/user/recent-login', args] as const
}

export function useGetApiUserRecentLogin<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserRecentLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user['recent-login'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserRecentLogin<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)['recent-login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUserRecentLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.user)['recent-login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user['recent-login'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserRefreshTokenImportKey() {
  return ['api', '/api/user/refresh-token/import', 'POST'] as const
}

export function usePostApiUserRefreshTokenImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['refresh-token']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['refresh-token']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserRefreshTokenImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user)['refresh-token']['import']['$post']> },
      ) => parseResponse(client.api.user['refresh-token'].import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserRegistrationKey() {
  return ['api', '/api/user/registration', 'POST'] as const
}

export function usePostApiUserRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.registration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.registration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.user.registration.$post> },
      ) => parseResponse(client.api.user.registration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiUserRegistrationUserIdKey() {
  return ['api', '/api/user/registration/:userId', 'PUT'] as const
}

export function usePutApiUserRegistrationUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.registration)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserRegistrationUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.registration)[':userId']['$put']> },
      ) => parseResponse(client.api.user.registration[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserRegistrationUserIdKey() {
  return ['api', '/api/user/registration/:userId', 'POST'] as const
}

export function usePostApiUserRegistrationUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.registration)[':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserRegistrationUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.registration)[':userId']['$post']> },
      ) => parseResponse(client.api.user.registration[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiUserRegistrationUserIdKey() {
  return ['api', '/api/user/registration/:userId', 'PATCH'] as const
}

export function usePatchApiUserRegistrationUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.registration)[':userId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.registration)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiUserRegistrationUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user.registration)[':userId']['$patch']> },
      ) => parseResponse(client.api.user.registration[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserRegistrationUserIdApplicationIdKey(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/registration/:userId/:applicationId', keyArgs] as const
}

export function useGetApiUserRegistrationUserIdApplicationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
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
        ? getGetApiUserRegistrationUserIdApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.user.registration[':userId'][':applicationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserRegistrationUserIdApplicationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.user.registration)[':userId'][':applicationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
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
        ? getGetApiUserRegistrationUserIdApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user.registration)[':userId'][':applicationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.user.registration[':userId'][':applicationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiUserRegistrationUserIdApplicationIdKey() {
  return ['api', '/api/user/registration/:userId/:applicationId', 'DELETE'] as const
}

export function useDeleteApiUserRegistrationUserIdApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user.registration)[':userId'][':applicationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserRegistrationUserIdApplicationIdKey()
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
            (typeof client.api.user.registration)[':userId'][':applicationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.user.registration[':userId'][':applicationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserSearchKey(args: InferRequestType<typeof client.api.user.search.$get>) {
  return ['api', '/api/user/search', args] as const
}

export function useGetApiUserSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.user.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.user.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserSearchKey() {
  return ['api', '/api/user/search', 'PUT'] as const
}

export function usePutApiUserSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$put>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.user.search.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserSearchKey() {
  return ['api', '/api/user/search', 'POST'] as const
}

export function usePostApiUserSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.user.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.user.search.$post> }) =>
        parseResponse(client.api.user.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserTwoFactorRecoveryCodeUserIdKey(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
) {
  return ['api', '/api/user/two-factor/recovery-code/:userId', args] as const
}

export function useGetApiUserTwoFactorRecoveryCodeUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
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
        ? getGetApiUserTwoFactorRecoveryCodeUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.user['two-factor']['recovery-code'][':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserTwoFactorRecoveryCodeUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
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
        ? getGetApiUserTwoFactorRecoveryCodeUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.user['two-factor']['recovery-code'][':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserTwoFactorRecoveryCodeUserIdKey() {
  return ['api', '/api/user/two-factor/recovery-code/:userId', 'POST'] as const
}

export function usePostApiUserTwoFactorRecoveryCodeUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserTwoFactorRecoveryCodeUserIdKey()
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
            (typeof client.api.user)['two-factor']['recovery-code'][':userId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.user['two-factor']['recovery-code'][':userId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiUserTwoFactorUserIdKey() {
  return ['api', '/api/user/two-factor/:userId', 'PUT'] as const
}

export function usePutApiUserTwoFactorUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserTwoFactorUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$put']> },
      ) => parseResponse(client.api.user['two-factor'][':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserTwoFactorUserIdKey() {
  return ['api', '/api/user/two-factor/:userId', 'POST'] as const
}

export function usePostApiUserTwoFactorUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserTwoFactorUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$post']> },
      ) => parseResponse(client.api.user['two-factor'][':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserTwoFactorUserIdKey() {
  return ['api', '/api/user/two-factor/:userId', 'DELETE'] as const
}

export function useDeleteApiUserTwoFactorUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['two-factor'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserTwoFactorUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user)['two-factor'][':userId']['$delete']> },
      ) => parseResponse(client.api.user['two-factor'][':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiUserVerifyEmailKey() {
  return ['api', '/api/user/verify-email', 'PUT'] as const
}

export function usePutApiUserVerifyEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['verify-email']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['verify-email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserVerifyEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)['verify-email']['$put']> },
      ) => parseResponse(client.api.user['verify-email'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserVerifyEmailKey() {
  return ['api', '/api/user/verify-email', 'POST'] as const
}

export function usePostApiUserVerifyEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)['verify-email']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['verify-email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserVerifyEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)['verify-email']['$post']> },
      ) => parseResponse(client.api.user['verify-email'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiUserVerifyRegistrationKey() {
  return ['api', '/api/user/verify-registration', 'PUT'] as const
}

export function usePutApiUserVerifyRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['verify-registration']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['verify-registration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserVerifyRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)['verify-registration']['$put']> },
      ) => parseResponse(client.api.user['verify-registration'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserVerifyRegistrationKey() {
  return ['api', '/api/user/verify-registration', 'POST'] as const
}

export function usePostApiUserVerifyRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user)['verify-registration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)['verify-registration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserVerifyRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.user)['verify-registration']['$post']> },
      ) => parseResponse(client.api.user['verify-registration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiUserUserIdKey(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/user/:userId', keyArgs] as const
}

export function useGetApiUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiUserUserIdKey() {
  return ['api', '/api/user/:userId', 'PUT'] as const
}

export function usePutApiUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)[':userId']['$put']> },
      ) => parseResponse(client.api.user[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiUserUserIdKey() {
  return ['api', '/api/user/:userId', 'POST'] as const
}

export function usePostApiUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)[':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)[':userId']['$post']> },
      ) => parseResponse(client.api.user[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiUserUserIdKey() {
  return ['api', '/api/user/:userId', 'DELETE'] as const
}

export function useDeleteApiUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)[':userId']['$delete']> },
      ) => parseResponse(client.api.user[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiUserUserIdKey() {
  return ['api', '/api/user/:userId', 'PATCH'] as const
}

export function usePatchApiUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user)[':userId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.user)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.user)[':userId']['$patch']> },
      ) => parseResponse(client.api.user[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWebauthnKey(args: InferRequestType<typeof client.api.webauthn.$get>) {
  return ['api', '/api/webauthn', args] as const
}

export function useGetApiWebauthn<TError = unknown>(
  args: InferRequestType<typeof client.api.webauthn.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebauthnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webauthn.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebauthn<TError = unknown>(
  args: InferRequestType<typeof client.api.webauthn.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebauthnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webauthn.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiWebauthnKey() {
  return ['api', '/api/webauthn', 'DELETE'] as const
}

export function useDeleteApiWebauthn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiWebauthnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webauthn.$delete> }) =>
        parseResponse(client.api.webauthn.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebauthnAssertKey() {
  return ['api', '/api/webauthn/assert', 'POST'] as const
}

export function usePostApiWebauthnAssert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.assert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.assert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebauthnAssertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webauthn.assert.$post> }) =>
        parseResponse(client.api.webauthn.assert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebauthnImportKey() {
  return ['api', '/api/webauthn/import', 'POST'] as const
}

export function usePostApiWebauthnImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebauthnImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webauthn.import.$post> }) =>
        parseResponse(client.api.webauthn.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebauthnLoginKey() {
  return ['api', '/api/webauthn/login', 'POST'] as const
}

export function usePostApiWebauthnLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebauthnLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webauthn.login.$post> }) =>
        parseResponse(client.api.webauthn.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebauthnRegisterCompleteKey() {
  return ['api', '/api/webauthn/register/complete', 'POST'] as const
}

export function usePostApiWebauthnRegisterComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.webauthn.register.complete.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.register.complete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebauthnRegisterCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.webauthn.register.complete.$post> },
      ) => parseResponse(client.api.webauthn.register.complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebauthnRegisterStartKey() {
  return ['api', '/api/webauthn/register/start', 'POST'] as const
}

export function usePostApiWebauthnRegisterStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.register.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.register.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebauthnRegisterStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.webauthn.register.start.$post> },
      ) => parseResponse(client.api.webauthn.register.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebauthnStartKey() {
  return ['api', '/api/webauthn/start', 'POST'] as const
}

export function usePostApiWebauthnStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webauthn.start.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webauthn.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebauthnStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webauthn.start.$post> }) =>
        parseResponse(client.api.webauthn.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWebauthnIdKey(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
) {
  return ['api', '/api/webauthn/:id', args] as const
}

export function useGetApiWebauthnId<TError = unknown>(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebauthnIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webauthn[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebauthnId<TError = unknown>(
  args: InferRequestType<(typeof client.api.webauthn)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebauthnIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webauthn[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiWebauthnIdKey() {
  return ['api', '/api/webauthn/:id', 'DELETE'] as const
}

export function useDeleteApiWebauthnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webauthn)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webauthn)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiWebauthnIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webauthn)[':id']['$delete']> },
      ) => parseResponse(client.api.webauthn[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWebhookKey() {
  return ['api', '/api/webhook'] as const
}

export function useGetApiWebhook<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebhookKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhook.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebhook<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebhookKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhook.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWebhookKey() {
  return ['api', '/api/webhook', 'POST'] as const
}

export function usePostApiWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webhook.$post> }) =>
        parseResponse(client.api.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWebhookSearchKey(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
) {
  return ['api', '/api/webhook/search', args] as const
}

export function useGetApiWebhookSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWebhookSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhook.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebhookSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.webhook.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWebhookSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhook.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWebhookSearchKey() {
  return ['api', '/api/webhook/search', 'POST'] as const
}

export function usePostApiWebhookSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhook.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webhook.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebhookSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webhook.search.$post> }) =>
        parseResponse(client.api.webhook.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWebhookWebhookIdKey(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
) {
  return ['api', '/api/webhook/:webhookId', args] as const
}

export function useGetApiWebhookWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWebhookWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhook[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebhookWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.webhook)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiWebhookWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhook[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiWebhookWebhookIdKey() {
  return ['api', '/api/webhook/:webhookId', 'PUT'] as const
}

export function usePutApiWebhookWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiWebhookWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webhook)[':webhookId']['$put']> },
      ) => parseResponse(client.api.webhook[':webhookId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebhookWebhookIdKey() {
  return ['api', '/api/webhook/:webhookId', 'POST'] as const
}

export function usePostApiWebhookWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebhookWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webhook)[':webhookId']['$post']> },
      ) => parseResponse(client.api.webhook[':webhookId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiWebhookWebhookIdKey() {
  return ['api', '/api/webhook/:webhookId', 'DELETE'] as const
}

export function useDeleteApiWebhookWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiWebhookWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webhook)[':webhookId']['$delete']> },
      ) => parseResponse(client.api.webhook[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiWebhookWebhookIdKey() {
  return ['api', '/api/webhook/:webhookId', 'PATCH'] as const
}

export function usePatchApiWebhookWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhook)[':webhookId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhook)[':webhookId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiWebhookWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webhook)[':webhookId']['$patch']> },
      ) => parseResponse(client.api.webhook[':webhookId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2DeviceApproveKey() {
  return ['oauth2', '/oauth2/device/approve', 'POST'] as const
}

export function usePostOauth2DeviceApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.approve.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.device.approve.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2DeviceApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth2.device.approve.$post> },
      ) => parseResponse(client.oauth2.device.approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2DeviceUserCodeKey() {
  return ['oauth2', '/oauth2/device/user-code', 'POST'] as const
}

export function usePostOauth2DeviceUserCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2.device)['user-code']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2DeviceUserCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.oauth2.device['user-code'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2DeviceValidateKey(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
) {
  return ['oauth2', '/oauth2/device/validate', args] as const
}

export function useGetOauth2DeviceValidate<TError = unknown>(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth2DeviceValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.device.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2DeviceValidate<TError = unknown>(
  args: InferRequestType<typeof client.oauth2.device.validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth2DeviceValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.validate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.device.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2DeviceAuthorizeKey() {
  return ['oauth2', '/oauth2/device_authorize', 'POST'] as const
}

export function usePostOauth2DeviceAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device_authorize.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.device_authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2DeviceAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth2.device_authorize.$post> },
      ) => parseResponse(client.oauth2.device_authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2IntrospectKey() {
  return ['oauth2', '/oauth2/introspect', 'POST'] as const
}

export function usePostOauth2Introspect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.introspect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.introspect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2IntrospectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.introspect.$post> }) =>
        parseResponse(client.oauth2.introspect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth2TokenKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function usePostOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.token.$post> }) =>
        parseResponse(client.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2UserinfoKey() {
  return ['oauth2', '/oauth2/userinfo'] as const
}

export function useGetOauth2Userinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2UserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2Userinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2UserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
