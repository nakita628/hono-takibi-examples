import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1KeysApiCurrentSerialKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Current/:serial', args] as const
}

export function useGetV1KeysApiCurrentSerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiCurrentSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Current[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KeysApiCurrentSerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiCurrentSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Current[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1KeysApiCustomSerialKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Custom/:serial', args] as const
}

export function useGetV1KeysApiCustomSerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiCustomSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Custom[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KeysApiCustomSerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiCustomSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Custom[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1KeysApiExpirySerialKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Expiry/:serial', args] as const
}

export function useGetV1KeysApiExpirySerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiExpirySerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Expiry[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KeysApiExpirySerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiExpirySerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Expiry[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1KeysApiFindSerialKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Find/:serial', args] as const
}

export function useGetV1KeysApiFindSerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiFindSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Find[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KeysApiFindSerial<TError = unknown>(
  args: InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1KeysApiFindSerialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.KeysApi.Find[':serial'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsApiKey() {
  return ['v1', '/v1/ProductsApi', 'POST'] as const
}

export function usePostV1ProductsApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.ProductsApi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ProductsApi.$post> }) =>
        parseResponse(client.v1.ProductsApi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProductsApiKey() {
  return ['v1', '/v1/ProductsApi', 'PATCH'] as const
}

export function usePatchV1ProductsApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.$patch>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.ProductsApi.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProductsApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ProductsApi.$patch> }) =>
        parseResponse(client.v1.ProductsApi.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsApiCountKey() {
  return ['v1', '/v1/ProductsApi/Count', 'POST'] as const
}

export function usePostV1ProductsApiCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Count.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.ProductsApi.Count.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsApiCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.ProductsApi.Count.$post> },
      ) => parseResponse(client.v1.ProductsApi.Count.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsApiFindKey() {
  return ['v1', '/v1/ProductsApi/Find', 'POST'] as const
}

export function usePostV1ProductsApiFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Find.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.ProductsApi.Find.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsApiFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ProductsApi.Find.$post> }) =>
        parseResponse(client.v1.ProductsApi.Find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsApiListKey() {
  return ['v1', '/v1/ProductsApi/List', 'POST'] as const
}

export function usePostV1ProductsApiList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.List.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.ProductsApi.List.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsApiListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ProductsApi.List.$post> }) =>
        parseResponse(client.v1.ProductsApi.List.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsApiSaveKey() {
  return ['v1', '/v1/ProductsApi/Save', 'POST'] as const
}

export function usePostV1ProductsApiSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Save.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.ProductsApi.Save.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsApiSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ProductsApi.Save.$post> }) =>
        parseResponse(client.v1.ProductsApi.Save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductsApiSerialKey() {
  return ['v1', '/v1/ProductsApi/:serial', 'POST'] as const
}

export function usePostV1ProductsApiSerial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ProductsApi)[':serial']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsApiSerialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$post']> },
      ) => parseResponse(client.v1.ProductsApi[':serial'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsApiSerialKey() {
  return ['v1', '/v1/ProductsApi/:serial', 'DELETE'] as const
}

export function useDeleteV1ProductsApiSerial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ProductsApi)[':serial']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsApiSerialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$delete']> },
      ) => parseResponse(client.v1.ProductsApi[':serial'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscriptionsApiKey() {
  return ['v1', '/v1/SubscriptionsApi', 'PUT'] as const
}

export function usePutV1SubscriptionsApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscriptionsApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.$put> }) =>
        parseResponse(client.v1.SubscriptionsApi.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiKey() {
  return ['v1', '/v1/SubscriptionsApi', 'POST'] as const
}

export function usePostV1SubscriptionsApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.$post> }) =>
        parseResponse(client.v1.SubscriptionsApi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiCountKey() {
  return ['v1', '/v1/SubscriptionsApi/Count', 'POST'] as const
}

export function usePostV1SubscriptionsApiCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Count.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Count.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Count.$post> },
      ) => parseResponse(client.v1.SubscriptionsApi.Count.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiDisableKey() {
  return ['v1', '/v1/SubscriptionsApi/Disable', 'POST'] as const
}

export function usePostV1SubscriptionsApiDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Disable.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$post> },
      ) => parseResponse(client.v1.SubscriptionsApi.Disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SubscriptionsApiDisableKey() {
  return ['v1', '/v1/SubscriptionsApi/Disable', 'PATCH'] as const
}

export function usePatchV1SubscriptionsApiDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Disable.$patch>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SubscriptionsApiDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$patch> },
      ) => parseResponse(client.v1.SubscriptionsApi.Disable.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiEnableKey() {
  return ['v1', '/v1/SubscriptionsApi/Enable', 'POST'] as const
}

export function usePostV1SubscriptionsApiEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Enable.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$post> },
      ) => parseResponse(client.v1.SubscriptionsApi.Enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SubscriptionsApiEnableKey() {
  return ['v1', '/v1/SubscriptionsApi/Enable', 'PATCH'] as const
}

export function usePatchV1SubscriptionsApiEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Enable.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SubscriptionsApiEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$patch> },
      ) => parseResponse(client.v1.SubscriptionsApi.Enable.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiFindKey() {
  return ['v1', '/v1/SubscriptionsApi/Find', 'POST'] as const
}

export function usePostV1SubscriptionsApiFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Find.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Find.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Find.$post> },
      ) => parseResponse(client.v1.SubscriptionsApi.Find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiListKey() {
  return ['v1', '/v1/SubscriptionsApi/List', 'POST'] as const
}

export function usePostV1SubscriptionsApiList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.List.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.List.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.List.$post> },
      ) => parseResponse(client.v1.SubscriptionsApi.List.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiSaveKey() {
  return ['v1', '/v1/SubscriptionsApi/Save', 'POST'] as const
}

export function usePostV1SubscriptionsApiSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Save.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.SubscriptionsApi.Save.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.SubscriptionsApi.Save.$post> },
      ) => parseResponse(client.v1.SubscriptionsApi.Save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsApiSerialKey() {
  return ['v1', '/v1/SubscriptionsApi/:serial', 'POST'] as const
}

export function usePostV1SubscriptionsApiSerial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsApiSerialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']> },
      ) => parseResponse(client.v1.SubscriptionsApi[':serial'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SubscriptionsApiSerialKey() {
  return ['v1', '/v1/SubscriptionsApi/:serial', 'DELETE'] as const
}

export function useDeleteV1SubscriptionsApiSerial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SubscriptionsApiSerialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']> },
      ) => parseResponse(client.v1.SubscriptionsApi[':serial'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
