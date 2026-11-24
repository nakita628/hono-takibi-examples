import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getObjectsKey() {
  return ['objects'] as const
}

export function getServiceInfoKey() {
  return ['service-info'] as const
}

export function getGetServiceInfoKey() {
  return ['service-info', '/service-info'] as const
}

export function useGetServiceInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetObjectsObjectIdKey(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
) {
  return ['objects', '/objects/:object_id', args] as const
}

export function useGetObjectsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects[':object_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects[':object_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsObjectIdKey() {
  return ['objects', '/objects/:object_id', 'POST'] as const
}

export function usePostObjectsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects)[':object_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.objects)[':object_id']['$post']> },
      ) => parseResponse(client.objects[':object_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsObjectsObjectIdKey() {
  return ['objects', '/objects/:object_id', 'OPTIONS'] as const
}

export function useOptionsObjectsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects)[':object_id']['$options']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.objects)[':object_id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsObjectsObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.objects)[':object_id']['$options']> },
      ) => parseResponse(client.objects[':object_id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsKey() {
  return ['objects', '/objects', 'POST'] as const
}

export function usePostObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.objects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.objects.$post> }) =>
        parseResponse(client.objects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsObjectsKey() {
  return ['objects', '/objects', 'OPTIONS'] as const
}

export function useOptionsObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.$options>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.objects.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.objects.$options> }) =>
        parseResponse(client.objects.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsObjectIdAccessAccessIdKey(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
) {
  return ['objects', '/objects/:object_id/access/:access_id', args] as const
}

export function useGetObjectsObjectIdAccessAccessId<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>
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
        ? getGetObjectsObjectIdAccessAccessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects[':object_id'].access[':access_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsObjectIdAccessAccessId<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>
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
        ? getGetObjectsObjectIdAccessAccessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.objects[':object_id'].access[':access_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsObjectIdAccessAccessIdKey() {
  return ['objects', '/objects/:object_id/access/:access_id', 'POST'] as const
}

export function usePostObjectsObjectIdAccessAccessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsObjectIdAccessAccessIdKey()
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
            (typeof client.objects)[':object_id']['access'][':access_id']['$post']
          >
        },
      ) =>
        parseResponse(client.objects[':object_id'].access[':access_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsAccessKey() {
  return ['objects', '/objects/access', 'POST'] as const
}

export function usePostObjectsAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.access.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.objects.access.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.objects.access.$post> }) =>
        parseResponse(client.objects.access.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
