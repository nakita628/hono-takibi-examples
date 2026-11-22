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

export function getGetV1MattersKey(args: InferRequestType<typeof client.v1.matters.$get>) {
  return ['v1', '/v1/matters', args] as const
}

export function useGetV1Matters<TError = unknown>(
  args: InferRequestType<typeof client.v1.matters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MattersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Matters<TError = unknown>(
  args: InferRequestType<typeof client.v1.matters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MattersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MattersKey() {
  return ['v1', '/v1/matters', 'POST'] as const
}

export function usePostV1Matters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.matters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.matters.$post> }) =>
        parseResponse(client.v1.matters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdKey(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>,
) {
  return ['v1', '/v1/matters/:matterId', args] as const
}

export function useGetV1MattersMatterId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters[':matterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters[':matterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MattersMatterIdKey() {
  return ['v1', '/v1/matters/:matterId', 'PUT'] as const
}

export function usePutV1MattersMatterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MattersMatterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId']['$put']> },
      ) => parseResponse(client.v1.matters[':matterId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MattersMatterIdKey() {
  return ['v1', '/v1/matters/:matterId', 'DELETE'] as const
}

export function useDeleteV1MattersMatterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MattersMatterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId']['$delete']> },
      ) => parseResponse(client.v1.matters[':matterId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdExportsKey(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>,
) {
  return ['v1', '/v1/matters/:matterId/exports', args] as const
}

export function useGetV1MattersMatterIdExports<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters[':matterId'].exports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdExports<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters[':matterId'].exports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MattersMatterIdExportsKey() {
  return ['v1', '/v1/matters/:matterId/exports', 'POST'] as const
}

export function usePostV1MattersMatterIdExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$post']> },
      ) => parseResponse(client.v1.matters[':matterId'].exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdExportsExportIdKey(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>,
) {
  return ['v1', '/v1/matters/:matterId/exports/:exportId', args] as const
}

export function useGetV1MattersMatterIdExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
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
        ? getGetV1MattersMatterIdExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.matters[':matterId'].exports[':exportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
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
        ? getGetV1MattersMatterIdExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.matters[':matterId'].exports[':exportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1MattersMatterIdExportsExportIdKey() {
  return ['v1', '/v1/matters/:matterId/exports/:exportId', 'DELETE'] as const
}

export function useDeleteV1MattersMatterIdExportsExportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MattersMatterIdExportsExportIdKey()
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
            (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.matters[':matterId'].exports[':exportId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdHoldsKey(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>,
) {
  return ['v1', '/v1/matters/:matterId/holds', args] as const
}

export function useGetV1MattersMatterIdHolds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdHoldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters[':matterId'].holds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdHolds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdHoldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.matters[':matterId'].holds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MattersMatterIdHoldsKey() {
  return ['v1', '/v1/matters/:matterId/holds', 'POST'] as const
}

export function usePostV1MattersMatterIdHolds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdHoldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$post']> },
      ) => parseResponse(client.v1.matters[':matterId'].holds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdHoldsHoldIdKey(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>,
) {
  return ['v1', '/v1/matters/:matterId/holds/:holdId', args] as const
}

export function useGetV1MattersMatterIdHoldsHoldId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdHoldsHoldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdHoldsHoldId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdHoldsHoldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MattersMatterIdHoldsHoldIdKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId', 'PUT'] as const
}

export function usePutV1MattersMatterIdHoldsHoldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MattersMatterIdHoldsHoldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>
        },
      ) => parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MattersMatterIdHoldsHoldIdKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId', 'DELETE'] as const
}

export function useDeleteV1MattersMatterIdHoldsHoldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MattersMatterIdHoldsHoldIdKey()
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
            (typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdHoldsHoldIdAccountsKey(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
  >,
) {
  return ['v1', '/v1/matters/:matterId/holds/:holdId/accounts', args] as const
}

export function useGetV1MattersMatterIdHoldsHoldIdAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
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
        ? getGetV1MattersMatterIdHoldsHoldIdAccountsKey(args)
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
                (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
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
          client.v1.matters[':matterId'].holds[':holdId'].accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdHoldsHoldIdAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
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
        ? getGetV1MattersMatterIdHoldsHoldIdAccountsKey(args)
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
                (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
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
          client.v1.matters[':matterId'].holds[':holdId'].accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1MattersMatterIdHoldsHoldIdAccountsKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId/accounts', 'POST'] as const
}

export function usePostV1MattersMatterIdHoldsHoldIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdHoldsHoldIdAccountsKey()
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
            (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.matters[':matterId'].holds[':holdId'].accounts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId/accounts/:accountId', 'DELETE'] as const
}

export function useDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdKey()
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
            (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.matters[':matterId'].holds[':holdId'].accounts[':accountId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdHoldsHoldIdAddHeldAccountsKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId:addHeldAccounts', 'POST'] as const
}

export function usePostV1MattersMatterIdHoldsHoldIdAddHeldAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdHoldsHoldIdAddHeldAccountsKey()
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
            (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.matters[':matterId'].holds[':holdId:addHeldAccounts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId:removeHeldAccounts', 'POST'] as const
}

export function usePostV1MattersMatterIdHoldsHoldIdRemoveHeldAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsKey()
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
            (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.matters[':matterId'].holds[':holdId:removeHeldAccounts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdSavedQueriesKey(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>,
) {
  return ['v1', '/v1/matters/:matterId/savedQueries', args] as const
}

export function useGetV1MattersMatterIdSavedQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdSavedQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.matters[':matterId'].savedQueries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdSavedQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1MattersMatterIdSavedQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.matters[':matterId'].savedQueries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MattersMatterIdSavedQueriesKey() {
  return ['v1', '/v1/matters/:matterId/savedQueries', 'POST'] as const
}

export function usePostV1MattersMatterIdSavedQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdSavedQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>
        },
      ) => parseResponse(client.v1.matters[':matterId'].savedQueries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MattersMatterIdSavedQueriesSavedQueryIdKey(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
  >,
) {
  return ['v1', '/v1/matters/:matterId/savedQueries/:savedQueryId', args] as const
}

export function useGetV1MattersMatterIdSavedQueriesSavedQueryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
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
        ? getGetV1MattersMatterIdSavedQueriesSavedQueryIdKey(args)
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
                (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
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
          client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MattersMatterIdSavedQueriesSavedQueryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
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
        ? getGetV1MattersMatterIdSavedQueriesSavedQueryIdKey(args)
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
                (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
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
          client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1MattersMatterIdSavedQueriesSavedQueryIdKey() {
  return ['v1', '/v1/matters/:matterId/savedQueries/:savedQueryId', 'DELETE'] as const
}

export function useDeleteV1MattersMatterIdSavedQueriesSavedQueryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MattersMatterIdSavedQueriesSavedQueryIdKey()
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
            (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdAddPermissionsKey() {
  return ['v1', '/v1/matters/:matterId:addPermissions', 'POST'] as const
}

export function usePostV1MattersMatterIdAddPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdAddPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>
        },
      ) => parseResponse(client.v1.matters[':matterId:addPermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdCloseKey() {
  return ['v1', '/v1/matters/:matterId:close', 'POST'] as const
}

export function usePostV1MattersMatterIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId:close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId:close']['$post']> },
      ) => parseResponse(client.v1.matters[':matterId:close'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdCountKey() {
  return ['v1', '/v1/matters/:matterId:count', 'POST'] as const
}

export function usePostV1MattersMatterIdCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:count']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId:count']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId:count']['$post']> },
      ) => parseResponse(client.v1.matters[':matterId:count'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdRemovePermissionsKey() {
  return ['v1', '/v1/matters/:matterId:removePermissions', 'POST'] as const
}

export function usePostV1MattersMatterIdRemovePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdRemovePermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>
        },
      ) =>
        parseResponse(client.v1.matters[':matterId:removePermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdReopenKey() {
  return ['v1', '/v1/matters/:matterId:reopen', 'POST'] as const
}

export function usePostV1MattersMatterIdReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:reopen']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId:reopen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdReopenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId:reopen']['$post']> },
      ) => parseResponse(client.v1.matters[':matterId:reopen'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MattersMatterIdUndeleteKey() {
  return ['v1', '/v1/matters/:matterId:undelete', 'POST'] as const
}

export function usePostV1MattersMatterIdUndelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:undelete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.matters)[':matterId:undelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MattersMatterIdUndeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.matters)[':matterId:undelete']['$post']> },
      ) => parseResponse(client.v1.matters[':matterId:undelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NameKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function useGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1NameKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function useDeleteV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$delete']> }) =>
        parseResponse(client.v1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameCancelKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function usePostV1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
