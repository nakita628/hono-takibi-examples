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

export function getHealthKey() {
  return ['health'] as const
}

export function getLinesKey() {
  return ['lines'] as const
}

export function getNewKey() {
  return ['new'] as const
}

export function getGetApiApikeysKey() {
  return ['api', '/api/apikeys'] as const
}

export function useGetApiApikeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiApikeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apikeys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiApikeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiApikeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.apikeys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAuthsKey() {
  return ['api', '/api/auths'] as const
}

export function useGetApiAuths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAuths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAuthsKey() {
  return ['api', '/api/auths', 'POST'] as const
}

export function usePostApiAuths<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.auths.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAuthsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.auths.$post> }) =>
        parseResponse(client.api.auths.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAuthsIdKey(
  args: InferRequestType<(typeof client.api.auths)[':id']['$get']>,
) {
  return ['api', '/api/auths/:id', args] as const
}

export function useGetApiAuthsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.auths)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auths[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAuthsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.auths)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auths[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAuthsIdKey() {
  return ['api', '/api/auths/:id', 'PUT'] as const
}

export function usePutApiAuthsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.auths)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAuthsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.auths)[':id']['$put']> },
      ) => parseResponse(client.api.auths[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAuthsIdKey() {
  return ['api', '/api/auths/:id', 'DELETE'] as const
}

export function useDeleteApiAuthsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.auths)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAuthsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.auths)[':id']['$delete']> },
      ) => parseResponse(client.api.auths[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiAuthsIdKey() {
  return ['api', '/api/auths/:id', 'PATCH'] as const
}

export function usePatchApiAuthsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.auths)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiAuthsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.auths)[':id']['$patch']> },
      ) => parseResponse(client.api.auths[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCertificatesKey() {
  return ['api', '/api/certificates'] as const
}

export function useGetApiCertificates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCertificatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.certificates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCertificates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCertificatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.certificates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCertificatesKey() {
  return ['api', '/api/certificates', 'POST'] as const
}

export function usePostApiCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.certificates.$post> }) =>
        parseResponse(client.api.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCertificatesIdKey(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
) {
  return ['api', '/api/certificates/:id', args] as const
}

export function useGetApiCertificatesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCertificatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.certificates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCertificatesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCertificatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.certificates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCertificatesIdKey() {
  return ['api', '/api/certificates/:id', 'PUT'] as const
}

export function usePutApiCertificatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.certificates)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCertificatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.certificates)[':id']['$put']> },
      ) => parseResponse(client.api.certificates[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCertificatesIdKey() {
  return ['api', '/api/certificates/:id', 'DELETE'] as const
}

export function useDeleteApiCertificatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.certificates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.certificates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCertificatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.certificates)[':id']['$delete']> },
      ) => parseResponse(client.api.certificates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCertificatesIdKey() {
  return ['api', '/api/certificates/:id', 'PATCH'] as const
}

export function usePatchApiCertificatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.certificates)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCertificatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.certificates)[':id']['$patch']> },
      ) => parseResponse(client.api.certificates[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiClientValidatorsKey() {
  return ['api', '/api/client-validators'] as const
}

export function useGetApiClientValidators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
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
        ? getGetApiClientValidatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['client-validators'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientValidators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
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
        ? getGetApiClientValidatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['client-validators'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiClientValidatorsKey() {
  return ['api', '/api/client-validators', 'POST'] as const
}

export function usePostApiClientValidators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['client-validators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientValidatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['client-validators']['$post']> },
      ) => parseResponse(client.api['client-validators'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiClientValidatorsIdKey(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
) {
  return ['api', '/api/client-validators/:id', args] as const
}

export function useGetApiClientValidatorsId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiClientValidatorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['client-validators'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientValidatorsId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiClientValidatorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['client-validators'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiClientValidatorsIdKey() {
  return ['api', '/api/client-validators/:id', 'PUT'] as const
}

export function usePutApiClientValidatorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['client-validators'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiClientValidatorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['client-validators'][':id']['$put']> },
      ) => parseResponse(client.api['client-validators'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiClientValidatorsIdKey() {
  return ['api', '/api/client-validators/:id', 'DELETE'] as const
}

export function useDeleteApiClientValidatorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['client-validators'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiClientValidatorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['client-validators'][':id']['$delete']> },
      ) => parseResponse(client.api['client-validators'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiClientValidatorsIdKey() {
  return ['api', '/api/client-validators/:id', 'PATCH'] as const
}

export function usePatchApiClientValidatorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['client-validators'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiClientValidatorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['client-validators'][':id']['$patch']> },
      ) => parseResponse(client.api['client-validators'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataExporterConfigsKey() {
  return ['api', '/api/data-exporter-configs'] as const
}

export function useGetApiDataExporterConfigs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
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
        ? getGetApiDataExporterConfigsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['data-exporter-configs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataExporterConfigs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
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
        ? getGetApiDataExporterConfigsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['data-exporter-configs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiDataExporterConfigsKey() {
  return ['api', '/api/data-exporter-configs', 'POST'] as const
}

export function usePostApiDataExporterConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['data-exporter-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataExporterConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['data-exporter-configs']['$post']> },
      ) => parseResponse(client.api['data-exporter-configs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiDataExporterConfigsBulkKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'PUT'] as const
}

export function usePutApiDataExporterConfigsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataExporterConfigsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']> },
      ) => parseResponse(client.api['data-exporter-configs']._bulk.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataExporterConfigsBulkKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'POST'] as const
}

export function usePostApiDataExporterConfigsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataExporterConfigsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>
        },
      ) => parseResponse(client.api['data-exporter-configs']._bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataExporterConfigsBulkKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'DELETE'] as const
}

export function useDeleteApiDataExporterConfigsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataExporterConfigsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>
        },
      ) => parseResponse(client.api['data-exporter-configs']._bulk.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataExporterConfigsBulkKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'PATCH'] as const
}

export function usePatchApiDataExporterConfigsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataExporterConfigsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>
        },
      ) => parseResponse(client.api['data-exporter-configs']._bulk.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataExporterConfigsTemplateKey(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
) {
  return ['api', '/api/data-exporter-configs/_template', args] as const
}

export function useGetApiDataExporterConfigsTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDataExporterConfigsTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['data-exporter-configs']._template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataExporterConfigsTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDataExporterConfigsTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['data-exporter-configs']._template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataExporterConfigsDataExporterConfigIdKey(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
) {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', args] as const
}

export function useGetApiDataExporterConfigsDataExporterConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
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
        ? getGetApiDataExporterConfigsDataExporterConfigIdKey(args)
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
                (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
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
          client.api['data-exporter-configs'][':dataExporterConfigId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataExporterConfigsDataExporterConfigId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
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
        ? getGetApiDataExporterConfigsDataExporterConfigIdKey(args)
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
                (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
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
          client.api['data-exporter-configs'][':dataExporterConfigId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataExporterConfigsDataExporterConfigIdKey() {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', 'PUT'] as const
}

export function usePutApiDataExporterConfigsDataExporterConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataExporterConfigsDataExporterConfigIdKey()
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
            (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['data-exporter-configs'][':dataExporterConfigId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataExporterConfigsDataExporterConfigIdKey() {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', 'DELETE'] as const
}

export function useDeleteApiDataExporterConfigsDataExporterConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataExporterConfigsDataExporterConfigIdKey()
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
            (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api['data-exporter-configs'][':dataExporterConfigId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataExporterConfigsDataExporterConfigIdKey() {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', 'PATCH'] as const
}

export function usePatchApiDataExporterConfigsDataExporterConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataExporterConfigsDataExporterConfigIdKey()
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
            (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api['data-exporter-configs'][':dataExporterConfigId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiGlobalconfigKey() {
  return ['api', '/api/globalconfig'] as const
}

export function useGetApiGlobalconfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGlobalconfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.globalconfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGlobalconfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGlobalconfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.globalconfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiGlobalconfigKey() {
  return ['api', '/api/globalconfig', 'PUT'] as const
}

export function usePutApiGlobalconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.globalconfig.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiGlobalconfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.globalconfig.$put> }) =>
        parseResponse(client.api.globalconfig.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiGlobalconfigKey() {
  return ['api', '/api/globalconfig', 'PATCH'] as const
}

export function usePatchApiGlobalconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.globalconfig.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiGlobalconfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.globalconfig.$patch> }) =>
        parseResponse(client.api.globalconfig.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupsKey() {
  return ['api', '/api/groups'] as const
}

export function useGetApiGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiGroupsKey() {
  return ['api', '/api/groups', 'POST'] as const
}

export function usePostApiGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.groups.$post> }) =>
        parseResponse(client.api.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupsGroupIdApikeysKey(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
) {
  return ['api', '/api/groups/:groupId/apikeys', args] as const
}

export function useGetApiGroupsGroupIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupsGroupIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.groups[':groupId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroupsGroupIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupsGroupIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.groups[':groupId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiGroupsGroupIdApikeysKey() {
  return ['api', '/api/groups/:groupId/apikeys', 'POST'] as const
}

export function usePostApiGroupsGroupIdApikeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiGroupsGroupIdApikeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$post']> },
      ) => parseResponse(client.api.groups[':groupId'].apikeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupsGroupIdApikeysClientIdKey(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>,
) {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', args] as const
}

export function useGetApiGroupsGroupIdApikeysClientId<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
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
        ? getGetApiGroupsGroupIdApikeysClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroupsGroupIdApikeysClientId<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
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
        ? getGetApiGroupsGroupIdApikeysClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiGroupsGroupIdApikeysClientIdKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', 'PUT'] as const
}

export function usePutApiGroupsGroupIdApikeysClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiGroupsGroupIdApikeysClientIdKey()
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
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']
          >
        },
      ) =>
        parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiGroupsGroupIdApikeysClientIdKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', 'DELETE'] as const
}

export function useDeleteApiGroupsGroupIdApikeysClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiGroupsGroupIdApikeysClientIdKey()
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
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.groups[':groupId'].apikeys[':clientId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiGroupsGroupIdApikeysClientIdKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', 'PATCH'] as const
}

export function usePatchApiGroupsGroupIdApikeysClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiGroupsGroupIdApikeysClientIdKey()
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
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.groups[':groupId'].apikeys[':clientId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupsGroupIdApikeysClientIdQuotasKey(
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
) {
  return ['api', '/api/groups/:groupId/apikeys/:clientId/quotas', args] as const
}

export function useGetApiGroupsGroupIdApikeysClientIdQuotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
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
        ? getGetApiGroupsGroupIdApikeysClientIdQuotasKey(args)
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
                (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
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
          client.api.groups[':groupId'].apikeys[':clientId'].quotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroupsGroupIdApikeysClientIdQuotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
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
        ? getGetApiGroupsGroupIdApikeysClientIdQuotasKey(args)
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
                (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
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
          client.api.groups[':groupId'].apikeys[':clientId'].quotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiGroupsGroupIdApikeysClientIdQuotasKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId/quotas', 'DELETE'] as const
}

export function useDeleteApiGroupsGroupIdApikeysClientIdQuotas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiGroupsGroupIdApikeysClientIdQuotasKey()
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
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.groups[':groupId'].apikeys[':clientId'].quotas.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupsServiceGroupIdKey(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
) {
  return ['api', '/api/groups/:serviceGroupId', args] as const
}

export function useGetApiGroupsServiceGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupsServiceGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.groups[':serviceGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroupsServiceGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupsServiceGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.groups[':serviceGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiGroupsServiceGroupIdKey() {
  return ['api', '/api/groups/:serviceGroupId', 'PUT'] as const
}

export function usePutApiGroupsServiceGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiGroupsServiceGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$put']> },
      ) => parseResponse(client.api.groups[':serviceGroupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiGroupsServiceGroupIdKey() {
  return ['api', '/api/groups/:serviceGroupId', 'DELETE'] as const
}

export function useDeleteApiGroupsServiceGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiGroupsServiceGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$delete']> },
      ) => parseResponse(client.api.groups[':serviceGroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiGroupsServiceGroupIdKey() {
  return ['api', '/api/groups/:serviceGroupId', 'PATCH'] as const
}

export function usePatchApiGroupsServiceGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiGroupsServiceGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$patch']> },
      ) => parseResponse(client.api.groups[':serviceGroupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGroupsServiceGroupIdServicesKey(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
) {
  return ['api', '/api/groups/:serviceGroupId/services', args] as const
}

export function useGetApiGroupsServiceGroupIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupsServiceGroupIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.groups[':serviceGroupId'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGroupsServiceGroupIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGroupsServiceGroupIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.groups[':serviceGroupId'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiImportKey() {
  return ['api', '/api/import', 'POST'] as const
}

export function usePostApiImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.import.$post> }) =>
        parseResponse(client.api.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLiveKey() {
  return ['api', '/api/live'] as const
}

export function useGetApiLive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.live.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.live.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLiveIdKey(
  args: InferRequestType<(typeof client.api.live)[':id']['$get']>,
) {
  return ['api', '/api/live/:id', args] as const
}

export function useGetApiLiveId<TError = unknown>(
  args: InferRequestType<(typeof client.api.live)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLiveIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.live[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLiveId<TError = unknown>(
  args: InferRequestType<(typeof client.api.live)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLiveIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.live[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOtoroshiJsonKey() {
  return ['api', '/api/otoroshi.json'] as const
}

export function useGetApiOtoroshiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOtoroshiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['otoroshi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOtoroshiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOtoroshiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['otoroshi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOtoroshiJsonKey() {
  return ['api', '/api/otoroshi.json', 'POST'] as const
}

export function usePostApiOtoroshiJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['otoroshi.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOtoroshiJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['otoroshi.json']['$post']> },
      ) => parseResponse(client.api['otoroshi.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiScriptsKey() {
  return ['api', '/api/scripts'] as const
}

export function useGetApiScripts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiScriptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.scripts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiScripts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiScriptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.scripts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiScriptsKey() {
  return ['api', '/api/scripts', 'POST'] as const
}

export function usePostApiScripts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.scripts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiScriptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.scripts.$post> }) =>
        parseResponse(client.api.scripts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiScriptsCompileKey() {
  return ['api', '/api/scripts/_compile', 'POST'] as const
}

export function usePostApiScriptsCompile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts._compile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.scripts._compile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiScriptsCompileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.scripts._compile.$post> },
      ) => parseResponse(client.api.scripts._compile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiScriptsScriptIdKey(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
) {
  return ['api', '/api/scripts/:scriptId', args] as const
}

export function useGetApiScriptsScriptId<TError = unknown>(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiScriptsScriptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.scripts[':scriptId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiScriptsScriptId<TError = unknown>(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiScriptsScriptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.scripts[':scriptId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiScriptsScriptIdKey() {
  return ['api', '/api/scripts/:scriptId', 'PUT'] as const
}

export function usePutApiScriptsScriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.scripts)[':scriptId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiScriptsScriptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.scripts)[':scriptId']['$put']> },
      ) => parseResponse(client.api.scripts[':scriptId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiScriptsScriptIdKey() {
  return ['api', '/api/scripts/:scriptId', 'DELETE'] as const
}

export function useDeleteApiScriptsScriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.scripts)[':scriptId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiScriptsScriptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.scripts)[':scriptId']['$delete']> },
      ) => parseResponse(client.api.scripts[':scriptId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiScriptsScriptIdKey() {
  return ['api', '/api/scripts/:scriptId', 'PATCH'] as const
}

export function usePatchApiScriptsScriptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.scripts)[':scriptId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiScriptsScriptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.scripts)[':scriptId']['$patch']> },
      ) => parseResponse(client.api.scripts[':scriptId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesKey() {
  return ['api', '/api/services'] as const
}

export function useGetApiServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiServicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiServicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiServicesKey() {
  return ['api', '/api/services', 'POST'] as const
}

export function usePostApiServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.services.$post> }) =>
        parseResponse(client.api.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesServiceIdKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
) {
  return ['api', '/api/services/:serviceId', args] as const
}

export function useGetApiServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiServicesServiceIdKey() {
  return ['api', '/api/services/:serviceId', 'PUT'] as const
}

export function usePutApiServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.services)[':serviceId']['$put']> },
      ) => parseResponse(client.api.services[':serviceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiServicesServiceIdKey() {
  return ['api', '/api/services/:serviceId', 'DELETE'] as const
}

export function useDeleteApiServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.services)[':serviceId']['$delete']> },
      ) => parseResponse(client.api.services[':serviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiServicesServiceIdKey() {
  return ['api', '/api/services/:serviceId', 'PATCH'] as const
}

export function usePatchApiServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.services)[':serviceId']['$patch']> },
      ) => parseResponse(client.api.services[':serviceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesServiceIdApikeysKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
) {
  return ['api', '/api/services/:serviceId/apikeys', args] as const
}

export function useGetApiServicesServiceIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.services[':serviceId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceIdApikeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdApikeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.services[':serviceId'].apikeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiServicesServiceIdApikeysKey() {
  return ['api', '/api/services/:serviceId/apikeys', 'POST'] as const
}

export function usePostApiServicesServiceIdApikeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiServicesServiceIdApikeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>
        },
      ) => parseResponse(client.api.services[':serviceId'].apikeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesServiceIdApikeysClientIdKey(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', args] as const
}

export function useGetApiServicesServiceIdApikeysClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
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
        ? getGetApiServicesServiceIdApikeysClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceIdApikeysClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
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
        ? getGetApiServicesServiceIdApikeysClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiServicesServiceIdApikeysClientIdKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', 'PUT'] as const
}

export function usePutApiServicesServiceIdApikeysClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiServicesServiceIdApikeysClientIdKey()
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
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiServicesServiceIdApikeysClientIdKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', 'DELETE'] as const
}

export function useDeleteApiServicesServiceIdApikeysClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiServicesServiceIdApikeysClientIdKey()
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
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiServicesServiceIdApikeysClientIdKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', 'PATCH'] as const
}

export function usePatchApiServicesServiceIdApikeysClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiServicesServiceIdApikeysClientIdKey()
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
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesServiceIdApikeysClientIdGroupKey(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/group', args] as const
}

export function useGetApiServicesServiceIdApikeysClientIdGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
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
        ? getGetApiServicesServiceIdApikeysClientIdGroupKey(args)
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
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
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
          client.api.services[':serviceId'].apikeys[':clientId'].group.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceIdApikeysClientIdGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
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
        ? getGetApiServicesServiceIdApikeysClientIdGroupKey(args)
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
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
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
          client.api.services[':serviceId'].apikeys[':clientId'].group.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiServicesServiceIdApikeysClientIdQuotasKey(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/quotas', args] as const
}

export function useGetApiServicesServiceIdApikeysClientIdQuotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
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
        ? getGetApiServicesServiceIdApikeysClientIdQuotasKey(args)
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
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
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
          client.api.services[':serviceId'].apikeys[':clientId'].quotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceIdApikeysClientIdQuotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
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
        ? getGetApiServicesServiceIdApikeysClientIdQuotasKey(args)
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
                (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
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
          client.api.services[':serviceId'].apikeys[':clientId'].quotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiServicesServiceIdApikeysClientIdQuotasKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/quotas', 'DELETE'] as const
}

export function useDeleteApiServicesServiceIdApikeysClientIdQuotas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiServicesServiceIdApikeysClientIdQuotasKey()
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
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].quotas.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesServiceIdTargetsKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
) {
  return ['api', '/api/services/:serviceId/targets', args] as const
}

export function useGetApiServicesServiceIdTargets<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.services[':serviceId'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceIdTargets<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.services[':serviceId'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiServicesServiceIdTargetsKey() {
  return ['api', '/api/services/:serviceId/targets', 'POST'] as const
}

export function usePostApiServicesServiceIdTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiServicesServiceIdTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$post']>
        },
      ) => parseResponse(client.api.services[':serviceId'].targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiServicesServiceIdTargetsKey() {
  return ['api', '/api/services/:serviceId/targets', 'DELETE'] as const
}

export function useDeleteApiServicesServiceIdTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiServicesServiceIdTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$delete']>
        },
      ) => parseResponse(client.api.services[':serviceId'].targets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiServicesServiceIdTargetsKey() {
  return ['api', '/api/services/:serviceId/targets', 'PATCH'] as const
}

export function usePatchApiServicesServiceIdTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiServicesServiceIdTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$patch']>
        },
      ) => parseResponse(client.api.services[':serviceId'].targets.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiServicesServiceIdTemplateKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
) {
  return ['api', '/api/services/:serviceId/template', args] as const
}

export function useGetApiServicesServiceIdTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.services[':serviceId'].template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesServiceIdTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiServicesServiceIdTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.services[':serviceId'].template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiServicesServiceIdTemplateKey() {
  return ['api', '/api/services/:serviceId/template', 'PUT'] as const
}

export function usePutApiServicesServiceIdTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiServicesServiceIdTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$put']>
        },
      ) => parseResponse(client.api.services[':serviceId'].template.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiServicesServiceIdTemplateKey() {
  return ['api', '/api/services/:serviceId/template', 'POST'] as const
}

export function usePostApiServicesServiceIdTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiServicesServiceIdTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$post']>
        },
      ) => parseResponse(client.api.services[':serviceId'].template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiServicesServiceIdTemplateKey() {
  return ['api', '/api/services/:serviceId/template', 'DELETE'] as const
}

export function useDeleteApiServicesServiceIdTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiServicesServiceIdTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$delete']>
        },
      ) => parseResponse(client.api.services[':serviceId'].template.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSnowmonkeyStartKey() {
  return ['api', '/api/snowmonkey/_start', 'POST'] as const
}

export function usePostApiSnowmonkeyStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._start.$post>>>
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
  const swrKey = customKey ?? getPostApiSnowmonkeyStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.snowmonkey._start.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSnowmonkeyStopKey() {
  return ['api', '/api/snowmonkey/_stop', 'POST'] as const
}

export function usePostApiSnowmonkeyStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._stop.$post>>>
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
  const swrKey = customKey ?? getPostApiSnowmonkeyStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.snowmonkey._stop.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSnowmonkeyConfigKey() {
  return ['api', '/api/snowmonkey/config'] as const
}

export function useGetApiSnowmonkeyConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
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
        ? getGetApiSnowmonkeyConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.snowmonkey.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSnowmonkeyConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
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
        ? getGetApiSnowmonkeyConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.snowmonkey.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiSnowmonkeyConfigKey() {
  return ['api', '/api/snowmonkey/config', 'PUT'] as const
}

export function usePutApiSnowmonkeyConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.snowmonkey.config.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiSnowmonkeyConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.snowmonkey.config.$put> },
      ) => parseResponse(client.api.snowmonkey.config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiSnowmonkeyConfigKey() {
  return ['api', '/api/snowmonkey/config', 'PATCH'] as const
}

export function usePatchApiSnowmonkeyConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.snowmonkey.config.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiSnowmonkeyConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.snowmonkey.config.$patch> },
      ) => parseResponse(client.api.snowmonkey.config.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSnowmonkeyOutagesKey() {
  return ['api', '/api/snowmonkey/outages'] as const
}

export function useGetApiSnowmonkeyOutages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
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
        ? getGetApiSnowmonkeyOutagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.snowmonkey.outages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSnowmonkeyOutages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
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
        ? getGetApiSnowmonkeyOutagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.snowmonkey.outages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiSnowmonkeyOutagesKey() {
  return ['api', '/api/snowmonkey/outages', 'DELETE'] as const
}

export function useDeleteApiSnowmonkeyOutages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$delete>>>
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
  const swrKey = customKey ?? getDeleteApiSnowmonkeyOutagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.snowmonkey.outages.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVerifiersKey() {
  return ['api', '/api/verifiers'] as const
}

export function useGetApiVerifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVerifiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.verifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVerifiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiVerifiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.verifiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVerifiersKey() {
  return ['api', '/api/verifiers', 'POST'] as const
}

export function usePostApiVerifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.verifiers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVerifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.verifiers.$post> }) =>
        parseResponse(client.api.verifiers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVerifiersVerifierIdKey(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
) {
  return ['api', '/api/verifiers/:verifierId', args] as const
}

export function useGetApiVerifiersVerifierId<TError = unknown>(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVerifiersVerifierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.verifiers[':verifierId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVerifiersVerifierId<TError = unknown>(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiVerifiersVerifierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.verifiers[':verifierId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiVerifiersVerifierIdKey() {
  return ['api', '/api/verifiers/:verifierId', 'PUT'] as const
}

export function usePutApiVerifiersVerifierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.verifiers)[':verifierId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiVerifiersVerifierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$put']> },
      ) => parseResponse(client.api.verifiers[':verifierId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiVerifiersVerifierIdKey() {
  return ['api', '/api/verifiers/:verifierId', 'DELETE'] as const
}

export function useDeleteApiVerifiersVerifierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.verifiers)[':verifierId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVerifiersVerifierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$delete']> },
      ) => parseResponse(client.api.verifiers[':verifierId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiVerifiersVerifierIdKey() {
  return ['api', '/api/verifiers/:verifierId', 'PATCH'] as const
}

export function usePatchApiVerifiersVerifierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.verifiers)[':verifierId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiVerifiersVerifierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$patch']> },
      ) => parseResponse(client.api.verifiers[':verifierId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinesKey() {
  return ['lines', '/lines'] as const
}

export function useGetLines<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetLinesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lines.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLines<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetLinesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lines.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinesLineServicesKey(
  args: InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
) {
  return ['lines', '/lines/:line/services', args] as const
}

export function useGetLinesLineServices<TError = unknown>(
  args: InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinesLineServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lines[':line'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinesLineServices<TError = unknown>(
  args: InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinesLineServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lines[':line'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewApikeyKey() {
  return ['new', '/new/apikey'] as const
}

export function useGetNewApikey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewApikeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.new.apikey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewApikey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewApikeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.new.apikey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewGroupKey() {
  return ['new', '/new/group'] as const
}

export function useGetNewGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.new.group.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.new.group.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewServiceKey() {
  return ['new', '/new/service'] as const
}

export function useGetNewService<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewServiceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.new.service.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewService<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewServiceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.new.service.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
