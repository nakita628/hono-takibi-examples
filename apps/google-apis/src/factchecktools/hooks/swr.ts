import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getGetV1alpha1ClaimsSearchKey(
  args: InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/claims:search', args] as const
}

export function useGetV1alpha1ClaimsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ClaimsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1['claims:search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ClaimsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ClaimsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1['claims:search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1alpha1PagesKey(args: InferRequestType<typeof client.v1alpha1.pages.$get>) {
  return ['v1alpha1', '/v1alpha1/pages', args] as const
}

export function useGetV1alpha1Pages<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1PagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Pages<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1PagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1PagesKey() {
  return ['v1alpha1', '/v1alpha1/pages', 'POST'] as const
}

export function usePostV1alpha1Pages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1alpha1.pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1PagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1alpha1.pages.$post> }) =>
        parseResponse(client.v1alpha1.pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1NameKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function useGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PUT'] as const
}

export function usePutV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$put']> },
      ) => parseResponse(client.v1alpha1[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function useDeleteV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']> },
      ) => parseResponse(client.v1alpha1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
