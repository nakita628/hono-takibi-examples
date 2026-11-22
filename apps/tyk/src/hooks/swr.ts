import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHelloKey() {
  return ['hello'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getTykKey() {
  return ['tyk'] as const
}

export function getListenPathKey() {
  return ['{listen_path}'] as const
}

export function getGetHelloKey() {
  return ['hello', '/hello'] as const
}

export function useGetHello<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetHelloKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hello.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHello<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetHelloKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hello.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReadyKey() {
  return ['ready', '/ready'] as const
}

export function useGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykApisKey() {
  return ['tyk', '/tyk/apis'] as const
}

export function useGetTykApis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykApisKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykApisKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykApisKey() {
  return ['tyk', '/tyk/apis', 'POST'] as const
}

export function usePostTykApis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tyk.apis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykApisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.apis.$post> }) =>
        parseResponse(client.tyk.apis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykApisApiIDKey(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/apis/:apiID', args] as const
}

export function useGetTykApisApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykApisApiIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykApisApiIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykApisApiIDKey() {
  return ['tyk', '/tyk/apis/:apiID', 'PUT'] as const
}

export function usePutTykApisApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykApisApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']> },
      ) => parseResponse(client.tyk.apis[':apiID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykApisApiIDKey() {
  return ['tyk', '/tyk/apis/:apiID', 'DELETE'] as const
}

export function useDeleteTykApisApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykApisApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']> },
      ) => parseResponse(client.tyk.apis[':apiID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykApisApiIDVersionsKey(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
) {
  return ['tyk', '/tyk/apis/:apiID/versions', args] as const
}

export function useGetTykApisApiIDVersions<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisApiIDVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis[':apiID'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisApiIDVersions<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisApiIDVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis[':apiID'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykApisOasKey(args: InferRequestType<typeof client.tyk.apis.oas.$get>) {
  return ['tyk', '/tyk/apis/oas', args] as const
}

export function useGetTykApisOas<TError = unknown>(
  args: InferRequestType<typeof client.tyk.apis.oas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykApisOasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisOas<TError = unknown>(
  args: InferRequestType<typeof client.tyk.apis.oas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykApisOasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykApisOasKey() {
  return ['tyk', '/tyk/apis/oas', 'POST'] as const
}

export function usePostTykApisOas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.apis.oas.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykApisOasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.apis.oas.$post> }) =>
        parseResponse(client.tyk.apis.oas.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykApisOasApiIDKey(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID', args] as const
}

export function useGetTykApisOasApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasApiIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisOasApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasApiIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykApisOasApiIDKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'PUT'] as const
}

export function usePutTykApisOasApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykApisOasApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']> },
      ) => parseResponse(client.tyk.apis.oas[':apiID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykApisOasApiIDKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'DELETE'] as const
}

export function useDeleteTykApisOasApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykApisOasApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']> },
      ) => parseResponse(client.tyk.apis.oas[':apiID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTykApisOasApiIDKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'PATCH'] as const
}

export function usePatchTykApisOasApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTykApisOasApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']> },
      ) => parseResponse(client.tyk.apis.oas[':apiID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykApisOasApiIDExportKey(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID/export', args] as const
}

export function useGetTykApisOasApiIDExport<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasApiIDExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas[':apiID'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisOasApiIDExport<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasApiIDExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas[':apiID'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykApisOasApiIDVersionsKey(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID/versions', args] as const
}

export function useGetTykApisOasApiIDVersions<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasApiIDVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas[':apiID'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisOasApiIDVersions<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasApiIDVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas[':apiID'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykApisOasExportKey(
  args: InferRequestType<typeof client.tyk.apis.oas.export.$get>,
) {
  return ['tyk', '/tyk/apis/oas/export', args] as const
}

export function useGetTykApisOasExport<TError = unknown>(
  args: InferRequestType<typeof client.tyk.apis.oas.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykApisOasExport<TError = unknown>(
  args: InferRequestType<typeof client.tyk.apis.oas.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykApisOasExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.apis.oas.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykApisOasImportKey() {
  return ['tyk', '/tyk/apis/oas/import', 'POST'] as const
}

export function usePostTykApisOasImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.apis.oas.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykApisOasImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.apis.oas.import.$post> }) =>
        parseResponse(client.tyk.apis.oas.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykMcpsKey() {
  return ['tyk', '/tyk/mcps'] as const
}

export function useGetTykMcps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykMcpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.mcps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykMcps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykMcpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.mcps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykMcpsKey() {
  return ['tyk', '/tyk/mcps', 'POST'] as const
}

export function usePostTykMcps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tyk.mcps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykMcpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.mcps.$post> }) =>
        parseResponse(client.tyk.mcps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykMcpsApiIDKey(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/mcps/:apiID', args] as const
}

export function useGetTykMcpsApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykMcpsApiIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.mcps[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykMcpsApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykMcpsApiIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.mcps[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykMcpsApiIDKey() {
  return ['tyk', '/tyk/mcps/:apiID', 'PUT'] as const
}

export function usePutTykMcpsApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykMcpsApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']> },
      ) => parseResponse(client.tyk.mcps[':apiID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykMcpsApiIDKey() {
  return ['tyk', '/tyk/mcps/:apiID', 'DELETE'] as const
}

export function useDeleteTykMcpsApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykMcpsApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']> },
      ) => parseResponse(client.tyk.mcps[':apiID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykCacheApiIDKey() {
  return ['tyk', '/tyk/cache/:apiID', 'DELETE'] as const
}

export function useDeleteTykCacheApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.cache)[':apiID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykCacheApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']> },
      ) => parseResponse(client.tyk.cache[':apiID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykCacheJwksApiIDKey() {
  return ['tyk', '/tyk/cache/jwks/:apiID', 'DELETE'] as const
}

export function useDeleteTykCacheJwksApiID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykCacheJwksApiIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']> },
      ) => parseResponse(client.tyk.cache.jwks[':apiID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykCacheJwksKey() {
  return ['tyk', '/tyk/cache/jwks', 'DELETE'] as const
}

export function useDeleteTykCacheJwks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.cache.jwks.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykCacheJwksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.tyk.cache.jwks.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykCertsKey(args: InferRequestType<typeof client.tyk.certs.$get>) {
  return ['tyk', '/tyk/certs', args] as const
}

export function useGetTykCerts<TError = unknown>(
  args: InferRequestType<typeof client.tyk.certs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykCertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.certs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykCerts<TError = unknown>(
  args: InferRequestType<typeof client.tyk.certs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykCertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.certs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykCertsKey() {
  return ['tyk', '/tyk/certs', 'POST'] as const
}

export function usePostTykCerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tyk.certs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykCertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.certs.$post> }) =>
        parseResponse(client.tyk.certs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykCertsCertIDKey(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
) {
  return ['tyk', '/tyk/certs/:certID', args] as const
}

export function useGetTykCertsCertID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykCertsCertIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.certs[':certID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykCertsCertID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykCertsCertIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.certs[':certID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTykCertsCertIDKey() {
  return ['tyk', '/tyk/certs/:certID', 'DELETE'] as const
}

export function useDeleteTykCertsCertID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykCertsCertIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']> },
      ) => parseResponse(client.tyk.certs[':certID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykDebugKey() {
  return ['tyk', '/tyk/debug', 'POST'] as const
}

export function usePostTykDebug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.debug.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tyk.debug.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykDebugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.debug.$post> }) =>
        parseResponse(client.tyk.debug.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykKeysKey() {
  return ['tyk', '/tyk/keys'] as const
}

export function useGetTykKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykKeysKey() {
  return ['tyk', '/tyk/keys', 'POST'] as const
}

export function usePostTykKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tyk.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.keys.$post> }) =>
        parseResponse(client.tyk.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykKeysKeyIDKey(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
) {
  return ['tyk', '/tyk/keys/:keyID', args] as const
}

export function useGetTykKeysKeyID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykKeysKeyIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.keys[':keyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykKeysKeyID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykKeysKeyIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.keys[':keyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykKeysKeyIDKey() {
  return ['tyk', '/tyk/keys/:keyID', 'PUT'] as const
}

export function usePutTykKeysKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykKeysKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']> },
      ) => parseResponse(client.tyk.keys[':keyID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykKeysKeyIDKey() {
  return ['tyk', '/tyk/keys/:keyID', 'POST'] as const
}

export function usePostTykKeysKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykKeysKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']> },
      ) => parseResponse(client.tyk.keys[':keyID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykKeysKeyIDKey() {
  return ['tyk', '/tyk/keys/:keyID', 'DELETE'] as const
}

export function useDeleteTykKeysKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykKeysKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']> },
      ) => parseResponse(client.tyk.keys[':keyID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykKeysCreateKey() {
  return ['tyk', '/tyk/keys/create', 'POST'] as const
}

export function usePostTykKeysCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.keys.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykKeysCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.keys.create.$post> }) =>
        parseResponse(client.tyk.keys.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykKeysPolicyKeyIDKey() {
  return ['tyk', '/tyk/keys/policy/:keyID', 'POST'] as const
}

export function usePostTykKeysPolicyKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.keys.policy)[':keyID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykKeysPolicyKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']> },
      ) => parseResponse(client.tyk.keys.policy[':keyID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykKeysPreviewKey() {
  return ['tyk', '/tyk/keys/preview', 'POST'] as const
}

export function usePostTykKeysPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.keys.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykKeysPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.keys.preview.$post> }) =>
        parseResponse(client.tyk.keys.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykOauthClientsApiIDKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID', args] as const
}

export function useGetTykOauthClientsApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOauthClientsApiIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.oauth.clients[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykOauthClientsApiID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOauthClientsApiIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.oauth.clients[':apiID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykOauthClientsApiIDKeyNameKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', args] as const
}

export function useGetTykOauthClientsApiIDKeyName<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOauthClientsApiIDKeyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykOauthClientsApiIDKeyName<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOauthClientsApiIDKeyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykOauthClientsApiIDKeyNameKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', 'PUT'] as const
}

export function usePutTykOauthClientsApiIDKeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykOauthClientsApiIDKeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>
        },
      ) => parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykOauthClientsApiIDKeyNameKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', 'DELETE'] as const
}

export function useDeleteTykOauthClientsApiIDKeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykOauthClientsApiIDKeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>
        },
      ) =>
        parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTykOauthClientsApiIDKeyNameRotateKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName/rotate', 'PUT'] as const
}

export function usePutTykOauthClientsApiIDKeyNameRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykOauthClientsApiIDKeyNameRotateKey()
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
            (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.tyk.oauth.clients[':apiID'][':keyName'].rotate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTykOauthClientsApiIDKeyNameTokensKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName/tokens', args] as const
}

export function useGetTykOauthClientsApiIDKeyNameTokens<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
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
        ? getGetTykOauthClientsApiIDKeyNameTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tyk.oauth.clients[':apiID'][':keyName'].tokens.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykOauthClientsApiIDKeyNameTokens<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
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
        ? getGetTykOauthClientsApiIDKeyNameTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tyk.oauth.clients[':apiID'][':keyName'].tokens.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTykOauthClientsApisAppIDKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/apis/:appID', args] as const
}

export function useGetTykOauthClientsApisAppID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOauthClientsApisAppIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.oauth.clients.apis[':appID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykOauthClientsApisAppID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOauthClientsApisAppIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.oauth.clients.apis[':appID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykOauthClientsCreateKey() {
  return ['tyk', '/tyk/oauth/clients/create', 'POST'] as const
}

export function usePostTykOauthClientsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.clients.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.oauth.clients.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykOauthClientsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tyk.oauth.clients.create.$post> },
      ) => parseResponse(client.tyk.oauth.clients.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykOauthRefreshKeyNameKey() {
  return ['tyk', '/tyk/oauth/refresh/:keyName', 'DELETE'] as const
}

export function useDeleteTykOauthRefreshKeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykOauthRefreshKeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']> },
      ) => parseResponse(client.tyk.oauth.refresh[':keyName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykOauthRevokeKey() {
  return ['tyk', '/tyk/oauth/revoke', 'POST'] as const
}

export function usePostTykOauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykOauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.oauth.revoke.$post> }) =>
        parseResponse(client.tyk.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykOauthRevokeAllKey() {
  return ['tyk', '/tyk/oauth/revoke_all', 'POST'] as const
}

export function usePostTykOauthRevokeAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke_all.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.oauth.revoke_all.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykOauthRevokeAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tyk.oauth.revoke_all.$post> },
      ) => parseResponse(client.tyk.oauth.revoke_all.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykOauthTokensKey() {
  return ['tyk', '/tyk/oauth/tokens', 'DELETE'] as const
}

export function useDeleteTykOauthTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.tokens.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.oauth.tokens.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykOauthTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.oauth.tokens.$delete> }) =>
        parseResponse(client.tyk.oauth.tokens.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykOrgKeysKey(args: InferRequestType<typeof client.tyk.org.keys.$get>) {
  return ['tyk', '/tyk/org/keys', args] as const
}

export function useGetTykOrgKeys<TError = unknown>(
  args: InferRequestType<typeof client.tyk.org.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykOrgKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.org.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykOrgKeys<TError = unknown>(
  args: InferRequestType<typeof client.tyk.org.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykOrgKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.org.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykOrgKeysKeyIDKey(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
) {
  return ['tyk', '/tyk/org/keys/:keyID', args] as const
}

export function useGetTykOrgKeysKeyID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOrgKeysKeyIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.org.keys[':keyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykOrgKeysKeyID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykOrgKeysKeyIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.org.keys[':keyID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykOrgKeysKeyIDKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'PUT'] as const
}

export function usePutTykOrgKeysKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykOrgKeysKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']> },
      ) => parseResponse(client.tyk.org.keys[':keyID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTykOrgKeysKeyIDKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'POST'] as const
}

export function usePostTykOrgKeysKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykOrgKeysKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']> },
      ) => parseResponse(client.tyk.org.keys[':keyID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykOrgKeysKeyIDKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'DELETE'] as const
}

export function useDeleteTykOrgKeysKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykOrgKeysKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']> },
      ) => parseResponse(client.tyk.org.keys[':keyID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykPoliciesKey() {
  return ['tyk', '/tyk/policies'] as const
}

export function useGetTykPolicies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykPoliciesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.policies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykPolicies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykPoliciesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.policies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTykPoliciesKey() {
  return ['tyk', '/tyk/policies', 'POST'] as const
}

export function usePostTykPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tyk.policies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTykPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tyk.policies.$post> }) =>
        parseResponse(client.tyk.policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykPoliciesPolIDKey(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
) {
  return ['tyk', '/tyk/policies/:polID', args] as const
}

export function useGetTykPoliciesPolID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykPoliciesPolIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.policies[':polID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykPoliciesPolID<TError = unknown>(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTykPoliciesPolIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.policies[':polID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTykPoliciesPolIDKey() {
  return ['tyk', '/tyk/policies/:polID', 'PUT'] as const
}

export function usePutTykPoliciesPolID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTykPoliciesPolIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.policies)[':polID']['$put']> },
      ) => parseResponse(client.tyk.policies[':polID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTykPoliciesPolIDKey() {
  return ['tyk', '/tyk/policies/:polID', 'DELETE'] as const
}

export function useDeleteTykPoliciesPolID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTykPoliciesPolIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']> },
      ) => parseResponse(client.tyk.policies[':polID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykReloadKey(args: InferRequestType<typeof client.tyk.reload.$get>) {
  return ['tyk', '/tyk/reload', args] as const
}

export function useGetTykReload<TError = unknown>(
  args: InferRequestType<typeof client.tyk.reload.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykReloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.reload.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykReload<TError = unknown>(
  args: InferRequestType<typeof client.tyk.reload.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykReloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.reload.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTykReloadGroupKey() {
  return ['tyk', '/tyk/reload/group'] as const
}

export function useGetTykReloadGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykReloadGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.reload.group.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykReloadGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykReloadGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.reload.group.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListenPathTykBatchKey() {
  return [':listen_path', '/:listen_path/tyk/batch', 'POST'] as const
}

export function usePostListenPathTykBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':listen_path']['tyk']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListenPathTykBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']> },
      ) => parseResponse(client[':listen_path'].tyk.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTykSchemaKey(args: InferRequestType<typeof client.tyk.schema.$get>) {
  return ['tyk', '/tyk/schema', args] as const
}

export function useGetTykSchema<TError = unknown>(
  args: InferRequestType<typeof client.tyk.schema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykSchemaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTykSchema<TError = unknown>(
  args: InferRequestType<typeof client.tyk.schema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTykSchemaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tyk.schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
