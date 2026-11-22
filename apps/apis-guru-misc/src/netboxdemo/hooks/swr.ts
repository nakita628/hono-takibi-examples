import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCircuitsKey() {
  return ['circuits'] as const
}

export function getDcimKey() {
  return ['dcim'] as const
}

export function getExtrasKey() {
  return ['extras'] as const
}

export function getIpamKey() {
  return ['ipam'] as const
}

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getTenancyKey() {
  return ['tenancy'] as const
}

export function getVirtualizationKey() {
  return ['virtualization'] as const
}

export function getGetCircuitsCircuitTerminationsIndexKey(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-terminations/', args] as const
}

export function useGetCircuitsCircuitTerminationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitTerminationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.circuits['circuit-terminations'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsCircuitTerminationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitTerminationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.circuits['circuit-terminations'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCircuitsCircuitTerminationsIndexKey() {
  return ['circuits', '/circuits/circuit-terminations/', 'POST'] as const
}

export function usePostCircuitsCircuitTerminationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCircuitsCircuitTerminationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>
        },
      ) => parseResponse(client.circuits['circuit-terminations'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsCircuitTerminationsIdIndexKey(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-terminations/:id/', args] as const
}

export function useGetCircuitsCircuitTerminationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
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
        ? getGetCircuitsCircuitTerminationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.circuits['circuit-terminations'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsCircuitTerminationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
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
        ? getGetCircuitsCircuitTerminationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.circuits['circuit-terminations'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCircuitsCircuitTerminationsIdIndexKey() {
  return ['circuits', '/circuits/circuit-terminations/:id/', 'PUT'] as const
}

export function usePutCircuitsCircuitTerminationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCircuitsCircuitTerminationsIdIndexKey()
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
            (typeof client.circuits)['circuit-terminations'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.circuits['circuit-terminations'][':id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCircuitsCircuitTerminationsIdIndexKey() {
  return ['circuits', '/circuits/circuit-terminations/:id/', 'DELETE'] as const
}

export function useDeleteCircuitsCircuitTerminationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCircuitsCircuitTerminationsIdIndexKey()
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
            (typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.circuits['circuit-terminations'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCircuitsCircuitTerminationsIdIndexKey() {
  return ['circuits', '/circuits/circuit-terminations/:id/', 'PATCH'] as const
}

export function usePatchCircuitsCircuitTerminationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCircuitsCircuitTerminationsIdIndexKey()
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
            (typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.circuits['circuit-terminations'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsCircuitTypesIndexKey(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-types/', args] as const
}

export function useGetCircuitsCircuitTypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitTypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits['circuit-types'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsCircuitTypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitTypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits['circuit-types'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCircuitsCircuitTypesIndexKey() {
  return ['circuits', '/circuits/circuit-types/', 'POST'] as const
}

export function usePostCircuitsCircuitTypesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCircuitsCircuitTypesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']> },
      ) => parseResponse(client.circuits['circuit-types'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsCircuitTypesIdIndexKey(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-types/:id/', args] as const
}

export function useGetCircuitsCircuitTypesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitTypesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.circuits['circuit-types'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsCircuitTypesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitTypesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.circuits['circuit-types'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCircuitsCircuitTypesIdIndexKey() {
  return ['circuits', '/circuits/circuit-types/:id/', 'PUT'] as const
}

export function usePutCircuitsCircuitTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCircuitsCircuitTypesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>
        },
      ) => parseResponse(client.circuits['circuit-types'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCircuitsCircuitTypesIdIndexKey() {
  return ['circuits', '/circuits/circuit-types/:id/', 'DELETE'] as const
}

export function useDeleteCircuitsCircuitTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCircuitsCircuitTypesIdIndexKey()
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
            (typeof client.circuits)['circuit-types'][':id']['index']['$delete']
          >
        },
      ) => parseResponse(client.circuits['circuit-types'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCircuitsCircuitTypesIdIndexKey() {
  return ['circuits', '/circuits/circuit-types/:id/', 'PATCH'] as const
}

export function usePatchCircuitsCircuitTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCircuitsCircuitTypesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.circuits['circuit-types'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsCircuitsIndexKey(
  args: InferRequestType<typeof client.circuits.circuits.index.$get>,
) {
  return ['circuits', '/circuits/circuits/', args] as const
}

export function useGetCircuitsCircuitsIndex<TError = unknown>(
  args: InferRequestType<typeof client.circuits.circuits.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.circuits.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsCircuitsIndex<TError = unknown>(
  args: InferRequestType<typeof client.circuits.circuits.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.circuits.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCircuitsCircuitsIndexKey() {
  return ['circuits', '/circuits/circuits/', 'POST'] as const
}

export function usePostCircuitsCircuitsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.circuits.circuits.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCircuitsCircuitsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.circuits.circuits.index.$post> },
      ) => parseResponse(client.circuits.circuits.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsCircuitsIdIndexKey(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuits/:id/', args] as const
}

export function useGetCircuitsCircuitsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.circuits[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsCircuitsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsCircuitsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.circuits[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCircuitsCircuitsIdIndexKey() {
  return ['circuits', '/circuits/circuits/:id/', 'PUT'] as const
}

export function usePutCircuitsCircuitsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCircuitsCircuitsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$put']> },
      ) => parseResponse(client.circuits.circuits[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCircuitsCircuitsIdIndexKey() {
  return ['circuits', '/circuits/circuits/:id/', 'DELETE'] as const
}

export function useDeleteCircuitsCircuitsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCircuitsCircuitsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$delete']> },
      ) => parseResponse(client.circuits.circuits[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCircuitsCircuitsIdIndexKey() {
  return ['circuits', '/circuits/circuits/:id/', 'PATCH'] as const
}

export function usePatchCircuitsCircuitsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCircuitsCircuitsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$patch']> },
      ) => parseResponse(client.circuits.circuits[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsProvidersIndexKey(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
) {
  return ['circuits', '/circuits/providers/', args] as const
}

export function useGetCircuitsProvidersIndex<TError = unknown>(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsProvidersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.providers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsProvidersIndex<TError = unknown>(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsProvidersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.providers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCircuitsProvidersIndexKey() {
  return ['circuits', '/circuits/providers/', 'POST'] as const
}

export function usePostCircuitsProvidersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.circuits.providers.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCircuitsProvidersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.circuits.providers.index.$post> },
      ) => parseResponse(client.circuits.providers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsProvidersIdIndexKey(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/providers/:id/', args] as const
}

export function useGetCircuitsProvidersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsProvidersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.providers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsProvidersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCircuitsProvidersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.circuits.providers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCircuitsProvidersIdIndexKey() {
  return ['circuits', '/circuits/providers/:id/', 'PUT'] as const
}

export function usePutCircuitsProvidersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCircuitsProvidersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$put']> },
      ) => parseResponse(client.circuits.providers[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCircuitsProvidersIdIndexKey() {
  return ['circuits', '/circuits/providers/:id/', 'DELETE'] as const
}

export function useDeleteCircuitsProvidersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCircuitsProvidersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$delete']> },
      ) => parseResponse(client.circuits.providers[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCircuitsProvidersIdIndexKey() {
  return ['circuits', '/circuits/providers/:id/', 'PATCH'] as const
}

export function usePatchCircuitsProvidersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCircuitsProvidersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$patch']> },
      ) => parseResponse(client.circuits.providers[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCircuitsProvidersIdGraphsIndexKey(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>,
) {
  return ['circuits', '/circuits/providers/:id/graphs/', args] as const
}

export function useGetCircuitsProvidersIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
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
        ? getGetCircuitsProvidersIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.circuits.providers[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCircuitsProvidersIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
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
        ? getGetCircuitsProvidersIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.circuits.providers[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimCablesIndexKey(
  args: InferRequestType<typeof client.dcim.cables.index.$get>,
) {
  return ['dcim', '/dcim/cables/', args] as const
}

export function useGetDcimCablesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.cables.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimCablesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.cables.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimCablesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.cables.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimCablesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.cables.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimCablesIndexKey() {
  return ['dcim', '/dcim/cables/', 'POST'] as const
}

export function usePostDcimCablesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.cables.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimCablesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dcim.cables.index.$post> }) =>
        parseResponse(client.dcim.cables.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimCablesIdIndexKey(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/cables/:id/', args] as const
}

export function useGetDcimCablesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimCablesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.cables[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimCablesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimCablesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.cables[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimCablesIdIndexKey() {
  return ['dcim', '/dcim/cables/:id/', 'PUT'] as const
}

export function usePutDcimCablesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.cables)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimCablesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.cables[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimCablesIdIndexKey() {
  return ['dcim', '/dcim/cables/:id/', 'DELETE'] as const
}

export function useDeleteDcimCablesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.cables)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimCablesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.cables[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimCablesIdIndexKey() {
  return ['dcim', '/dcim/cables/:id/', 'PATCH'] as const
}

export function usePatchDcimCablesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.cables)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimCablesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.cables[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConnectedDeviceIndexKey(
  args: InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
) {
  return ['dcim', '/dcim/connected-device/', args] as const
}

export function useGetDcimConnectedDeviceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConnectedDeviceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['connected-device'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConnectedDeviceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConnectedDeviceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['connected-device'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimConsoleConnectionsIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-connections/', args] as const
}

export function useGetDcimConsoleConnectionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsoleConnectionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['console-connections'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsoleConnectionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsoleConnectionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['console-connections'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimConsolePortTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-port-templates/', args] as const
}

export function useGetDcimConsolePortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsolePortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsolePortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsolePortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimConsolePortTemplatesIndexKey() {
  return ['dcim', '/dcim/console-port-templates/', 'POST'] as const
}

export function usePostDcimConsolePortTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimConsolePortTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>
        },
      ) => parseResponse(client.dcim['console-port-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsolePortTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-port-templates/:id/', args] as const
}

export function useGetDcimConsolePortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
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
        ? getGetDcimConsolePortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsolePortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
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
        ? getGetDcimConsolePortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimConsolePortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/console-port-templates/:id/', 'PUT'] as const
}

export function usePutDcimConsolePortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimConsolePortTemplatesIdIndexKey()
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
            (typeof client.dcim)['console-port-templates'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(client.dcim['console-port-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimConsolePortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/console-port-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimConsolePortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimConsolePortTemplatesIdIndexKey()
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
            (typeof client.dcim)['console-port-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dcim['console-port-templates'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimConsolePortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/console-port-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimConsolePortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimConsolePortTemplatesIdIndexKey()
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
            (typeof client.dcim)['console-port-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dcim['console-port-templates'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsolePortsIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-ports/', args] as const
}

export function useGetDcimConsolePortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsolePortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['console-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsolePortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsolePortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['console-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimConsolePortsIndexKey() {
  return ['dcim', '/dcim/console-ports/', 'POST'] as const
}

export function usePostDcimConsolePortsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimConsolePortsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']> },
      ) => parseResponse(client.dcim['console-ports'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsolePortsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-ports/:id/', args] as const
}

export function useGetDcimConsolePortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsolePortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsolePortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsolePortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimConsolePortsIdIndexKey() {
  return ['dcim', '/dcim/console-ports/:id/', 'PUT'] as const
}

export function usePutDcimConsolePortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimConsolePortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['console-ports'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimConsolePortsIdIndexKey() {
  return ['dcim', '/dcim/console-ports/:id/', 'DELETE'] as const
}

export function useDeleteDcimConsolePortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimConsolePortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['console-ports'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimConsolePortsIdIndexKey() {
  return ['dcim', '/dcim/console-ports/:id/', 'PATCH'] as const
}

export function usePatchDcimConsolePortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimConsolePortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['console-ports'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsolePortsIdTraceIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-ports/:id/trace/', args] as const
}

export function useGetDcimConsolePortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
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
        ? getGetDcimConsolePortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsolePortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
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
        ? getGetDcimConsolePortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimConsoleServerPortTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-server-port-templates/', args] as const
}

export function useGetDcimConsoleServerPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
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
        ? getGetDcimConsoleServerPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-server-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsoleServerPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
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
        ? getGetDcimConsoleServerPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-server-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimConsoleServerPortTemplatesIndexKey() {
  return ['dcim', '/dcim/console-server-port-templates/', 'POST'] as const
}

export function usePostDcimConsoleServerPortTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimConsoleServerPortTemplatesIndexKey()
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
            (typeof client.dcim)['console-server-port-templates']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.dcim['console-server-port-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsoleServerPortTemplatesIdIndexKey(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
) {
  return ['dcim', '/dcim/console-server-port-templates/:id/', args] as const
}

export function useGetDcimConsoleServerPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
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
        ? getGetDcimConsoleServerPortTemplatesIdIndexKey(args)
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
                (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
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
          client.dcim['console-server-port-templates'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsoleServerPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
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
        ? getGetDcimConsoleServerPortTemplatesIdIndexKey(args)
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
                (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
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
          client.dcim['console-server-port-templates'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDcimConsoleServerPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/console-server-port-templates/:id/', 'PUT'] as const
}

export function usePutDcimConsoleServerPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimConsoleServerPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.dcim['console-server-port-templates'][':id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimConsoleServerPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/console-server-port-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimConsoleServerPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimConsoleServerPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dcim['console-server-port-templates'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimConsoleServerPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/console-server-port-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimConsoleServerPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimConsoleServerPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dcim['console-server-port-templates'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsoleServerPortsIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-server-ports/', args] as const
}

export function useGetDcimConsoleServerPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsoleServerPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-server-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsoleServerPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimConsoleServerPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-server-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimConsoleServerPortsIndexKey() {
  return ['dcim', '/dcim/console-server-ports/', 'POST'] as const
}

export function usePostDcimConsoleServerPortsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimConsoleServerPortsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>
        },
      ) => parseResponse(client.dcim['console-server-ports'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsoleServerPortsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-server-ports/:id/', args] as const
}

export function useGetDcimConsoleServerPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
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
        ? getGetDcimConsoleServerPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-server-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsoleServerPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
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
        ? getGetDcimConsoleServerPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['console-server-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimConsoleServerPortsIdIndexKey() {
  return ['dcim', '/dcim/console-server-ports/:id/', 'PUT'] as const
}

export function usePutDcimConsoleServerPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimConsoleServerPortsIdIndexKey()
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
            (typeof client.dcim)['console-server-ports'][':id']['index']['$put']
          >
        },
      ) => parseResponse(client.dcim['console-server-ports'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimConsoleServerPortsIdIndexKey() {
  return ['dcim', '/dcim/console-server-ports/:id/', 'DELETE'] as const
}

export function useDeleteDcimConsoleServerPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimConsoleServerPortsIdIndexKey()
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
            (typeof client.dcim)['console-server-ports'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.dcim['console-server-ports'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimConsoleServerPortsIdIndexKey() {
  return ['dcim', '/dcim/console-server-ports/:id/', 'PATCH'] as const
}

export function usePatchDcimConsoleServerPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimConsoleServerPortsIdIndexKey()
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
            (typeof client.dcim)['console-server-ports'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.dcim['console-server-ports'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimConsoleServerPortsIdTraceIndexKey(
  args: InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
) {
  return ['dcim', '/dcim/console-server-ports/:id/trace/', args] as const
}

export function useGetDcimConsoleServerPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
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
        ? getGetDcimConsoleServerPortsIdTraceIndexKey(args)
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
                (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
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
          client.dcim['console-server-ports'][':id'].trace.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimConsoleServerPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
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
        ? getGetDcimConsoleServerPortsIdTraceIndexKey(args)
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
                (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
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
          client.dcim['console-server-ports'][':id'].trace.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDcimDeviceBayTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bay-templates/', args] as const
}

export function useGetDcimDeviceBayTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceBayTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['device-bay-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceBayTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceBayTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['device-bay-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimDeviceBayTemplatesIndexKey() {
  return ['dcim', '/dcim/device-bay-templates/', 'POST'] as const
}

export function usePostDcimDeviceBayTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimDeviceBayTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>
        },
      ) => parseResponse(client.dcim['device-bay-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceBayTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bay-templates/:id/', args] as const
}

export function useGetDcimDeviceBayTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
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
        ? getGetDcimDeviceBayTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['device-bay-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceBayTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
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
        ? getGetDcimDeviceBayTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['device-bay-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimDeviceBayTemplatesIdIndexKey() {
  return ['dcim', '/dcim/device-bay-templates/:id/', 'PUT'] as const
}

export function usePutDcimDeviceBayTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimDeviceBayTemplatesIdIndexKey()
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
            (typeof client.dcim)['device-bay-templates'][':id']['index']['$put']
          >
        },
      ) => parseResponse(client.dcim['device-bay-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimDeviceBayTemplatesIdIndexKey() {
  return ['dcim', '/dcim/device-bay-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimDeviceBayTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimDeviceBayTemplatesIdIndexKey()
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
            (typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.dcim['device-bay-templates'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimDeviceBayTemplatesIdIndexKey() {
  return ['dcim', '/dcim/device-bay-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimDeviceBayTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimDeviceBayTemplatesIdIndexKey()
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
            (typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.dcim['device-bay-templates'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceBaysIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bays/', args] as const
}

export function useGetDcimDeviceBaysIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceBaysIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-bays'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceBaysIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceBaysIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-bays'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimDeviceBaysIndexKey() {
  return ['dcim', '/dcim/device-bays/', 'POST'] as const
}

export function usePostDcimDeviceBaysIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimDeviceBaysIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']> },
      ) => parseResponse(client.dcim['device-bays'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceBaysIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bays/:id/', args] as const
}

export function useGetDcimDeviceBaysIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceBaysIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-bays'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceBaysIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceBaysIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-bays'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimDeviceBaysIdIndexKey() {
  return ['dcim', '/dcim/device-bays/:id/', 'PUT'] as const
}

export function usePutDcimDeviceBaysIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimDeviceBaysIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['device-bays'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimDeviceBaysIdIndexKey() {
  return ['dcim', '/dcim/device-bays/:id/', 'DELETE'] as const
}

export function useDeleteDcimDeviceBaysIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimDeviceBaysIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['device-bays'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimDeviceBaysIdIndexKey() {
  return ['dcim', '/dcim/device-bays/:id/', 'PATCH'] as const
}

export function usePatchDcimDeviceBaysIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimDeviceBaysIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['device-bays'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceRolesIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-roles/', args] as const
}

export function useGetDcimDeviceRolesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-roles'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceRolesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-roles'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimDeviceRolesIndexKey() {
  return ['dcim', '/dcim/device-roles/', 'POST'] as const
}

export function usePostDcimDeviceRolesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimDeviceRolesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']> },
      ) => parseResponse(client.dcim['device-roles'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceRolesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-roles/:id/', args] as const
}

export function useGetDcimDeviceRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-roles'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-roles'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimDeviceRolesIdIndexKey() {
  return ['dcim', '/dcim/device-roles/:id/', 'PUT'] as const
}

export function usePutDcimDeviceRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimDeviceRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['device-roles'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimDeviceRolesIdIndexKey() {
  return ['dcim', '/dcim/device-roles/:id/', 'DELETE'] as const
}

export function useDeleteDcimDeviceRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimDeviceRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['device-roles'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimDeviceRolesIdIndexKey() {
  return ['dcim', '/dcim/device-roles/:id/', 'PATCH'] as const
}

export function usePatchDcimDeviceRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimDeviceRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['device-roles'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceTypesIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-types/', args] as const
}

export function useGetDcimDeviceTypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceTypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-types'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceTypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceTypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-types'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimDeviceTypesIndexKey() {
  return ['dcim', '/dcim/device-types/', 'POST'] as const
}

export function usePostDcimDeviceTypesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-types']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimDeviceTypesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['device-types']['index']['$post']> },
      ) => parseResponse(client.dcim['device-types'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDeviceTypesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-types/:id/', args] as const
}

export function useGetDcimDeviceTypesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceTypesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-types'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDeviceTypesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDeviceTypesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['device-types'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimDeviceTypesIdIndexKey() {
  return ['dcim', '/dcim/device-types/:id/', 'PUT'] as const
}

export function usePutDcimDeviceTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimDeviceTypesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['device-types'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimDeviceTypesIdIndexKey() {
  return ['dcim', '/dcim/device-types/:id/', 'DELETE'] as const
}

export function useDeleteDcimDeviceTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimDeviceTypesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['device-types'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimDeviceTypesIdIndexKey() {
  return ['dcim', '/dcim/device-types/:id/', 'PATCH'] as const
}

export function usePatchDcimDeviceTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimDeviceTypesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['device-types'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDevicesIndexKey(
  args: InferRequestType<typeof client.dcim.devices.index.$get>,
) {
  return ['dcim', '/dcim/devices/', args] as const
}

export function useGetDcimDevicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.devices.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDevicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.devices.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimDevicesIndexKey() {
  return ['dcim', '/dcim/devices/', 'POST'] as const
}

export function usePostDcimDevicesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.devices.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimDevicesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dcim.devices.index.$post> }) =>
        parseResponse(client.dcim.devices.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDevicesIdIndexKey(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/devices/:id/', args] as const
}

export function useGetDcimDevicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDevicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimDevicesIdIndexKey() {
  return ['dcim', '/dcim/devices/:id/', 'PUT'] as const
}

export function usePutDcimDevicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.devices)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimDevicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.devices[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimDevicesIdIndexKey() {
  return ['dcim', '/dcim/devices/:id/', 'DELETE'] as const
}

export function useDeleteDcimDevicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.devices)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimDevicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.devices[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimDevicesIdIndexKey() {
  return ['dcim', '/dcim/devices/:id/', 'PATCH'] as const
}

export function usePatchDcimDevicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.devices)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimDevicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.devices[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimDevicesIdGraphsIndexKey(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
) {
  return ['dcim', '/dcim/devices/:id/graphs/', args] as const
}

export function useGetDcimDevicesIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDevicesIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimDevicesIdNapalmIndexKey(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
) {
  return ['dcim', '/dcim/devices/:id/napalm/', args] as const
}

export function useGetDcimDevicesIdNapalmIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIdNapalmIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices[':id'].napalm.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimDevicesIdNapalmIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimDevicesIdNapalmIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.devices[':id'].napalm.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimFrontPortTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-port-templates/', args] as const
}

export function useGetDcimFrontPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimFrontPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['front-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimFrontPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimFrontPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['front-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimFrontPortTemplatesIndexKey() {
  return ['dcim', '/dcim/front-port-templates/', 'POST'] as const
}

export function usePostDcimFrontPortTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimFrontPortTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>
        },
      ) => parseResponse(client.dcim['front-port-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimFrontPortTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-port-templates/:id/', args] as const
}

export function useGetDcimFrontPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
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
        ? getGetDcimFrontPortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['front-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimFrontPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
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
        ? getGetDcimFrontPortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['front-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimFrontPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/front-port-templates/:id/', 'PUT'] as const
}

export function usePutDcimFrontPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimFrontPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['front-port-templates'][':id']['index']['$put']
          >
        },
      ) => parseResponse(client.dcim['front-port-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimFrontPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/front-port-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimFrontPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimFrontPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['front-port-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.dcim['front-port-templates'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimFrontPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/front-port-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimFrontPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimFrontPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['front-port-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.dcim['front-port-templates'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimFrontPortsIndexKey(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-ports/', args] as const
}

export function useGetDcimFrontPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimFrontPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['front-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimFrontPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimFrontPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['front-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimFrontPortsIndexKey() {
  return ['dcim', '/dcim/front-ports/', 'POST'] as const
}

export function usePostDcimFrontPortsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimFrontPortsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']> },
      ) => parseResponse(client.dcim['front-ports'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimFrontPortsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-ports/:id/', args] as const
}

export function useGetDcimFrontPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimFrontPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['front-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimFrontPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimFrontPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['front-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimFrontPortsIdIndexKey() {
  return ['dcim', '/dcim/front-ports/:id/', 'PUT'] as const
}

export function usePutDcimFrontPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimFrontPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['front-ports'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimFrontPortsIdIndexKey() {
  return ['dcim', '/dcim/front-ports/:id/', 'DELETE'] as const
}

export function useDeleteDcimFrontPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimFrontPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['front-ports'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimFrontPortsIdIndexKey() {
  return ['dcim', '/dcim/front-ports/:id/', 'PATCH'] as const
}

export function usePatchDcimFrontPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimFrontPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['front-ports'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimFrontPortsIdTraceIndexKey(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-ports/:id/trace/', args] as const
}

export function useGetDcimFrontPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
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
        ? getGetDcimFrontPortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['front-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimFrontPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
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
        ? getGetDcimFrontPortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['front-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimInterfaceConnectionsIndexKey(
  args: InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
) {
  return ['dcim', '/dcim/interface-connections/', args] as const
}

export function useGetDcimInterfaceConnectionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfaceConnectionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['interface-connections'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfaceConnectionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfaceConnectionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['interface-connections'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimInterfaceTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/interface-templates/', args] as const
}

export function useGetDcimInterfaceTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfaceTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['interface-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfaceTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfaceTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['interface-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimInterfaceTemplatesIndexKey() {
  return ['dcim', '/dcim/interface-templates/', 'POST'] as const
}

export function usePostDcimInterfaceTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimInterfaceTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']> },
      ) => parseResponse(client.dcim['interface-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimInterfaceTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/interface-templates/:id/', args] as const
}

export function useGetDcimInterfaceTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfaceTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['interface-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfaceTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfaceTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['interface-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimInterfaceTemplatesIdIndexKey() {
  return ['dcim', '/dcim/interface-templates/:id/', 'PUT'] as const
}

export function usePutDcimInterfaceTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimInterfaceTemplatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>
        },
      ) => parseResponse(client.dcim['interface-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimInterfaceTemplatesIdIndexKey() {
  return ['dcim', '/dcim/interface-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimInterfaceTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimInterfaceTemplatesIdIndexKey()
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
            (typeof client.dcim)['interface-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.dcim['interface-templates'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimInterfaceTemplatesIdIndexKey() {
  return ['dcim', '/dcim/interface-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimInterfaceTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimInterfaceTemplatesIdIndexKey()
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
            (typeof client.dcim)['interface-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.dcim['interface-templates'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimInterfacesIndexKey(
  args: InferRequestType<typeof client.dcim.interfaces.index.$get>,
) {
  return ['dcim', '/dcim/interfaces/', args] as const
}

export function useGetDcimInterfacesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.interfaces.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.interfaces.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfacesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.interfaces.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.interfaces.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimInterfacesIndexKey() {
  return ['dcim', '/dcim/interfaces/', 'POST'] as const
}

export function usePostDcimInterfacesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.interfaces.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimInterfacesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dcim.interfaces.index.$post> },
      ) => parseResponse(client.dcim.interfaces.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimInterfacesIdIndexKey(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/interfaces/:id/', args] as const
}

export function useGetDcimInterfacesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.interfaces[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfacesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.interfaces[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimInterfacesIdIndexKey() {
  return ['dcim', '/dcim/interfaces/:id/', 'PUT'] as const
}

export function usePutDcimInterfacesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimInterfacesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.interfaces[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimInterfacesIdIndexKey() {
  return ['dcim', '/dcim/interfaces/:id/', 'DELETE'] as const
}

export function useDeleteDcimInterfacesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimInterfacesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.interfaces[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimInterfacesIdIndexKey() {
  return ['dcim', '/dcim/interfaces/:id/', 'PATCH'] as const
}

export function usePatchDcimInterfacesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimInterfacesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.interfaces[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimInterfacesIdGraphsIndexKey(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
) {
  return ['dcim', '/dcim/interfaces/:id/graphs/', args] as const
}

export function useGetDcimInterfacesIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim.interfaces[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfacesIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim.interfaces[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimInterfacesIdTraceIndexKey(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/interfaces/:id/trace/', args] as const
}

export function useGetDcimInterfacesIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim.interfaces[':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInterfacesIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInterfacesIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim.interfaces[':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimInventoryItemsIndexKey(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
) {
  return ['dcim', '/dcim/inventory-items/', args] as const
}

export function useGetDcimInventoryItemsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInventoryItemsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['inventory-items'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInventoryItemsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInventoryItemsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['inventory-items'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimInventoryItemsIndexKey() {
  return ['dcim', '/dcim/inventory-items/', 'POST'] as const
}

export function usePostDcimInventoryItemsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimInventoryItemsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']> },
      ) => parseResponse(client.dcim['inventory-items'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimInventoryItemsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/inventory-items/:id/', args] as const
}

export function useGetDcimInventoryItemsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInventoryItemsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['inventory-items'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimInventoryItemsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimInventoryItemsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['inventory-items'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimInventoryItemsIdIndexKey() {
  return ['dcim', '/dcim/inventory-items/:id/', 'PUT'] as const
}

export function usePutDcimInventoryItemsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimInventoryItemsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>
        },
      ) => parseResponse(client.dcim['inventory-items'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimInventoryItemsIdIndexKey() {
  return ['dcim', '/dcim/inventory-items/:id/', 'DELETE'] as const
}

export function useDeleteDcimInventoryItemsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimInventoryItemsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['inventory-items'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimInventoryItemsIdIndexKey() {
  return ['dcim', '/dcim/inventory-items/:id/', 'PATCH'] as const
}

export function usePatchDcimInventoryItemsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimInventoryItemsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['inventory-items'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimManufacturersIndexKey(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
) {
  return ['dcim', '/dcim/manufacturers/', args] as const
}

export function useGetDcimManufacturersIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimManufacturersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.manufacturers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimManufacturersIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimManufacturersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.manufacturers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimManufacturersIndexKey() {
  return ['dcim', '/dcim/manufacturers/', 'POST'] as const
}

export function usePostDcimManufacturersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.manufacturers.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimManufacturersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dcim.manufacturers.index.$post> },
      ) => parseResponse(client.dcim.manufacturers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimManufacturersIdIndexKey(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/manufacturers/:id/', args] as const
}

export function useGetDcimManufacturersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimManufacturersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.manufacturers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimManufacturersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimManufacturersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.manufacturers[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimManufacturersIdIndexKey() {
  return ['dcim', '/dcim/manufacturers/:id/', 'PUT'] as const
}

export function usePutDcimManufacturersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimManufacturersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.manufacturers[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimManufacturersIdIndexKey() {
  return ['dcim', '/dcim/manufacturers/:id/', 'DELETE'] as const
}

export function useDeleteDcimManufacturersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimManufacturersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.manufacturers[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimManufacturersIdIndexKey() {
  return ['dcim', '/dcim/manufacturers/:id/', 'PATCH'] as const
}

export function usePatchDcimManufacturersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimManufacturersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.manufacturers[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPlatformsIndexKey(
  args: InferRequestType<typeof client.dcim.platforms.index.$get>,
) {
  return ['dcim', '/dcim/platforms/', args] as const
}

export function useGetDcimPlatformsIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.platforms.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPlatformsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.platforms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPlatformsIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.platforms.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPlatformsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.platforms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPlatformsIndexKey() {
  return ['dcim', '/dcim/platforms/', 'POST'] as const
}

export function usePostDcimPlatformsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.platforms.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPlatformsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dcim.platforms.index.$post> },
      ) => parseResponse(client.dcim.platforms.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPlatformsIdIndexKey(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/platforms/:id/', args] as const
}

export function useGetDcimPlatformsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPlatformsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.platforms[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPlatformsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPlatformsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.platforms[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPlatformsIdIndexKey() {
  return ['dcim', '/dcim/platforms/:id/', 'PUT'] as const
}

export function usePutDcimPlatformsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPlatformsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.platforms[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPlatformsIdIndexKey() {
  return ['dcim', '/dcim/platforms/:id/', 'DELETE'] as const
}

export function useDeleteDcimPlatformsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPlatformsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.platforms[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPlatformsIdIndexKey() {
  return ['dcim', '/dcim/platforms/:id/', 'PATCH'] as const
}

export function usePatchDcimPlatformsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPlatformsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.platforms[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerConnectionsIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-connections/', args] as const
}

export function useGetDcimPowerConnectionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerConnectionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-connections'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerConnectionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerConnectionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-connections'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimPowerFeedsIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-feeds/', args] as const
}

export function useGetDcimPowerFeedsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerFeedsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-feeds'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerFeedsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerFeedsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-feeds'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPowerFeedsIndexKey() {
  return ['dcim', '/dcim/power-feeds/', 'POST'] as const
}

export function usePostDcimPowerFeedsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPowerFeedsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']> },
      ) => parseResponse(client.dcim['power-feeds'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerFeedsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-feeds/:id/', args] as const
}

export function useGetDcimPowerFeedsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerFeedsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-feeds'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerFeedsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerFeedsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-feeds'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPowerFeedsIdIndexKey() {
  return ['dcim', '/dcim/power-feeds/:id/', 'PUT'] as const
}

export function usePutDcimPowerFeedsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPowerFeedsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['power-feeds'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPowerFeedsIdIndexKey() {
  return ['dcim', '/dcim/power-feeds/:id/', 'DELETE'] as const
}

export function useDeleteDcimPowerFeedsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPowerFeedsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['power-feeds'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPowerFeedsIdIndexKey() {
  return ['dcim', '/dcim/power-feeds/:id/', 'PATCH'] as const
}

export function usePatchDcimPowerFeedsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPowerFeedsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['power-feeds'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerOutletTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlet-templates/', args] as const
}

export function useGetDcimPowerOutletTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerOutletTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlet-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerOutletTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerOutletTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlet-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPowerOutletTemplatesIndexKey() {
  return ['dcim', '/dcim/power-outlet-templates/', 'POST'] as const
}

export function usePostDcimPowerOutletTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPowerOutletTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>
        },
      ) => parseResponse(client.dcim['power-outlet-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerOutletTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlet-templates/:id/', args] as const
}

export function useGetDcimPowerOutletTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
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
        ? getGetDcimPowerOutletTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlet-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerOutletTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
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
        ? getGetDcimPowerOutletTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlet-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPowerOutletTemplatesIdIndexKey() {
  return ['dcim', '/dcim/power-outlet-templates/:id/', 'PUT'] as const
}

export function usePutDcimPowerOutletTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPowerOutletTemplatesIdIndexKey()
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
            (typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(client.dcim['power-outlet-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPowerOutletTemplatesIdIndexKey() {
  return ['dcim', '/dcim/power-outlet-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimPowerOutletTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPowerOutletTemplatesIdIndexKey()
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
            (typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dcim['power-outlet-templates'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPowerOutletTemplatesIdIndexKey() {
  return ['dcim', '/dcim/power-outlet-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimPowerOutletTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPowerOutletTemplatesIdIndexKey()
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
            (typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dcim['power-outlet-templates'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerOutletsIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlets/', args] as const
}

export function useGetDcimPowerOutletsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerOutletsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-outlets'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerOutletsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerOutletsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-outlets'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPowerOutletsIndexKey() {
  return ['dcim', '/dcim/power-outlets/', 'POST'] as const
}

export function usePostDcimPowerOutletsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPowerOutletsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']> },
      ) => parseResponse(client.dcim['power-outlets'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerOutletsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlets/:id/', args] as const
}

export function useGetDcimPowerOutletsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerOutletsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlets'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerOutletsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerOutletsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlets'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPowerOutletsIdIndexKey() {
  return ['dcim', '/dcim/power-outlets/:id/', 'PUT'] as const
}

export function usePutDcimPowerOutletsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPowerOutletsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['power-outlets'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPowerOutletsIdIndexKey() {
  return ['dcim', '/dcim/power-outlets/:id/', 'DELETE'] as const
}

export function useDeleteDcimPowerOutletsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPowerOutletsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['power-outlets'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPowerOutletsIdIndexKey() {
  return ['dcim', '/dcim/power-outlets/:id/', 'PATCH'] as const
}

export function usePatchDcimPowerOutletsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPowerOutletsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['power-outlets'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerOutletsIdTraceIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlets/:id/trace/', args] as const
}

export function useGetDcimPowerOutletsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
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
        ? getGetDcimPowerOutletsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlets'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerOutletsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
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
        ? getGetDcimPowerOutletsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-outlets'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimPowerPanelsIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-panels/', args] as const
}

export function useGetDcimPowerPanelsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPanelsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-panels'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPanelsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPanelsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-panels'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPowerPanelsIndexKey() {
  return ['dcim', '/dcim/power-panels/', 'POST'] as const
}

export function usePostDcimPowerPanelsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPowerPanelsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']> },
      ) => parseResponse(client.dcim['power-panels'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerPanelsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-panels/:id/', args] as const
}

export function useGetDcimPowerPanelsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPanelsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-panels'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPanelsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPanelsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-panels'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPowerPanelsIdIndexKey() {
  return ['dcim', '/dcim/power-panels/:id/', 'PUT'] as const
}

export function usePutDcimPowerPanelsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPowerPanelsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['power-panels'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPowerPanelsIdIndexKey() {
  return ['dcim', '/dcim/power-panels/:id/', 'DELETE'] as const
}

export function useDeleteDcimPowerPanelsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPowerPanelsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['power-panels'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPowerPanelsIdIndexKey() {
  return ['dcim', '/dcim/power-panels/:id/', 'PATCH'] as const
}

export function usePatchDcimPowerPanelsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPowerPanelsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['power-panels'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerPortTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-port-templates/', args] as const
}

export function useGetDcimPowerPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPowerPortTemplatesIndexKey() {
  return ['dcim', '/dcim/power-port-templates/', 'POST'] as const
}

export function usePostDcimPowerPortTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPowerPortTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>
        },
      ) => parseResponse(client.dcim['power-port-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerPortTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-port-templates/:id/', args] as const
}

export function useGetDcimPowerPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
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
        ? getGetDcimPowerPortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
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
        ? getGetDcimPowerPortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPowerPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/power-port-templates/:id/', 'PUT'] as const
}

export function usePutDcimPowerPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPowerPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['power-port-templates'][':id']['index']['$put']
          >
        },
      ) => parseResponse(client.dcim['power-port-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPowerPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/power-port-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimPowerPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPowerPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['power-port-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.dcim['power-port-templates'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPowerPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/power-port-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimPowerPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPowerPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['power-port-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.dcim['power-port-templates'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerPortsIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-ports/', args] as const
}

export function useGetDcimPowerPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimPowerPortsIndexKey() {
  return ['dcim', '/dcim/power-ports/', 'POST'] as const
}

export function usePostDcimPowerPortsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimPowerPortsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']> },
      ) => parseResponse(client.dcim['power-ports'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerPortsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-ports/:id/', args] as const
}

export function useGetDcimPowerPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimPowerPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['power-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimPowerPortsIdIndexKey() {
  return ['dcim', '/dcim/power-ports/:id/', 'PUT'] as const
}

export function usePutDcimPowerPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimPowerPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['power-ports'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimPowerPortsIdIndexKey() {
  return ['dcim', '/dcim/power-ports/:id/', 'DELETE'] as const
}

export function useDeleteDcimPowerPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimPowerPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['power-ports'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimPowerPortsIdIndexKey() {
  return ['dcim', '/dcim/power-ports/:id/', 'PATCH'] as const
}

export function usePatchDcimPowerPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimPowerPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['power-ports'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimPowerPortsIdTraceIndexKey(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-ports/:id/trace/', args] as const
}

export function useGetDcimPowerPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
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
        ? getGetDcimPowerPortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimPowerPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
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
        ? getGetDcimPowerPortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['power-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimRackGroupsIndexKey(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-groups/', args] as const
}

export function useGetDcimRackGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRackGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRackGroupsIndexKey() {
  return ['dcim', '/dcim/rack-groups/', 'POST'] as const
}

export function usePostDcimRackGroupsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-groups']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRackGroupsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$post']> },
      ) => parseResponse(client.dcim['rack-groups'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRackGroupsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-groups/:id/', args] as const
}

export function useGetDcimRackGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-groups'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRackGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-groups'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRackGroupsIdIndexKey() {
  return ['dcim', '/dcim/rack-groups/:id/', 'PUT'] as const
}

export function usePutDcimRackGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRackGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['rack-groups'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRackGroupsIdIndexKey() {
  return ['dcim', '/dcim/rack-groups/:id/', 'DELETE'] as const
}

export function useDeleteDcimRackGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRackGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['rack-groups'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRackGroupsIdIndexKey() {
  return ['dcim', '/dcim/rack-groups/:id/', 'PATCH'] as const
}

export function usePatchDcimRackGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRackGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['rack-groups'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRackReservationsIndexKey(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-reservations/', args] as const
}

export function useGetDcimRackReservationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackReservationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-reservations'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRackReservationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackReservationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-reservations'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRackReservationsIndexKey() {
  return ['dcim', '/dcim/rack-reservations/', 'POST'] as const
}

export function usePostDcimRackReservationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRackReservationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']> },
      ) => parseResponse(client.dcim['rack-reservations'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRackReservationsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-reservations/:id/', args] as const
}

export function useGetDcimRackReservationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackReservationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['rack-reservations'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRackReservationsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackReservationsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['rack-reservations'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRackReservationsIdIndexKey() {
  return ['dcim', '/dcim/rack-reservations/:id/', 'PUT'] as const
}

export function usePutDcimRackReservationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRackReservationsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>
        },
      ) => parseResponse(client.dcim['rack-reservations'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRackReservationsIdIndexKey() {
  return ['dcim', '/dcim/rack-reservations/:id/', 'DELETE'] as const
}

export function useDeleteDcimRackReservationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRackReservationsIdIndexKey()
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
            (typeof client.dcim)['rack-reservations'][':id']['index']['$delete']
          >
        },
      ) => parseResponse(client.dcim['rack-reservations'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRackReservationsIdIndexKey() {
  return ['dcim', '/dcim/rack-reservations/:id/', 'PATCH'] as const
}

export function usePatchDcimRackReservationsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRackReservationsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['rack-reservations'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRackRolesIndexKey(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-roles/', args] as const
}

export function useGetDcimRackRolesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-roles'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRackRolesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-roles'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRackRolesIndexKey() {
  return ['dcim', '/dcim/rack-roles/', 'POST'] as const
}

export function usePostDcimRackRolesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRackRolesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']> },
      ) => parseResponse(client.dcim['rack-roles'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRackRolesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-roles/:id/', args] as const
}

export function useGetDcimRackRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-roles'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRackRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRackRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rack-roles'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRackRolesIdIndexKey() {
  return ['dcim', '/dcim/rack-roles/:id/', 'PUT'] as const
}

export function usePutDcimRackRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRackRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['rack-roles'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRackRolesIdIndexKey() {
  return ['dcim', '/dcim/rack-roles/:id/', 'DELETE'] as const
}

export function useDeleteDcimRackRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRackRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']> },
      ) => parseResponse(client.dcim['rack-roles'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRackRolesIdIndexKey() {
  return ['dcim', '/dcim/rack-roles/:id/', 'PATCH'] as const
}

export function usePatchDcimRackRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRackRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['rack-roles'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRacksIndexKey(
  args: InferRequestType<typeof client.dcim.racks.index.$get>,
) {
  return ['dcim', '/dcim/racks/', args] as const
}

export function useGetDcimRacksIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.racks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDcimRacksIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.racks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRacksIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.racks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDcimRacksIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.racks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRacksIndexKey() {
  return ['dcim', '/dcim/racks/', 'POST'] as const
}

export function usePostDcimRacksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.racks.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRacksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dcim.racks.index.$post> }) =>
        parseResponse(client.dcim.racks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRacksIdIndexKey(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/racks/:id/', args] as const
}

export function useGetDcimRacksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRacksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.racks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRacksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRacksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.racks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRacksIdIndexKey() {
  return ['dcim', '/dcim/racks/:id/', 'PUT'] as const
}

export function usePutDcimRacksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.racks)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRacksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.racks[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRacksIdIndexKey() {
  return ['dcim', '/dcim/racks/:id/', 'DELETE'] as const
}

export function useDeleteDcimRacksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.racks)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRacksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.racks[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRacksIdIndexKey() {
  return ['dcim', '/dcim/racks/:id/', 'PATCH'] as const
}

export function usePatchDcimRacksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.racks)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRacksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.racks[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRacksIdElevationIndexKey(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
) {
  return ['dcim', '/dcim/racks/:id/elevation/', args] as const
}

export function useGetDcimRacksIdElevationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRacksIdElevationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.racks[':id'].elevation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRacksIdElevationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRacksIdElevationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.racks[':id'].elevation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimRearPortTemplatesIndexKey(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-port-templates/', args] as const
}

export function useGetDcimRearPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rear-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRearPortTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rear-port-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRearPortTemplatesIndexKey() {
  return ['dcim', '/dcim/rear-port-templates/', 'POST'] as const
}

export function usePostDcimRearPortTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRearPortTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']> },
      ) => parseResponse(client.dcim['rear-port-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRearPortTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-port-templates/:id/', args] as const
}

export function useGetDcimRearPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['rear-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRearPortTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['rear-port-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRearPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/rear-port-templates/:id/', 'PUT'] as const
}

export function usePutDcimRearPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRearPortTemplatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>
        },
      ) => parseResponse(client.dcim['rear-port-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRearPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/rear-port-templates/:id/', 'DELETE'] as const
}

export function useDeleteDcimRearPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRearPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.dcim['rear-port-templates'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRearPortTemplatesIdIndexKey() {
  return ['dcim', '/dcim/rear-port-templates/:id/', 'PATCH'] as const
}

export function usePatchDcimRearPortTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRearPortTemplatesIdIndexKey()
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
            (typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.dcim['rear-port-templates'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRearPortsIndexKey(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-ports/', args] as const
}

export function useGetDcimRearPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rear-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRearPortsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rear-ports'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRearPortsIndexKey() {
  return ['dcim', '/dcim/rear-ports/', 'POST'] as const
}

export function usePostDcimRearPortsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRearPortsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']> },
      ) => parseResponse(client.dcim['rear-ports'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRearPortsIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-ports/:id/', args] as const
}

export function useGetDcimRearPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rear-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRearPortsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['rear-ports'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRearPortsIdIndexKey() {
  return ['dcim', '/dcim/rear-ports/:id/', 'PUT'] as const
}

export function usePutDcimRearPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRearPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']> },
      ) => parseResponse(client.dcim['rear-ports'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRearPortsIdIndexKey() {
  return ['dcim', '/dcim/rear-ports/:id/', 'DELETE'] as const
}

export function useDeleteDcimRearPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRearPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']> },
      ) => parseResponse(client.dcim['rear-ports'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRearPortsIdIndexKey() {
  return ['dcim', '/dcim/rear-ports/:id/', 'PATCH'] as const
}

export function usePatchDcimRearPortsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRearPortsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']> },
      ) => parseResponse(client.dcim['rear-ports'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRearPortsIdTraceIndexKey(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-ports/:id/trace/', args] as const
}

export function useGetDcimRearPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['rear-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRearPortsIdTraceIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRearPortsIdTraceIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['rear-ports'][':id'].trace.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimRegionsIndexKey(
  args: InferRequestType<typeof client.dcim.regions.index.$get>,
) {
  return ['dcim', '/dcim/regions/', args] as const
}

export function useGetDcimRegionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.regions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRegionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.regions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRegionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.regions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRegionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.regions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimRegionsIndexKey() {
  return ['dcim', '/dcim/regions/', 'POST'] as const
}

export function usePostDcimRegionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.regions.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimRegionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dcim.regions.index.$post> }) =>
        parseResponse(client.dcim.regions.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimRegionsIdIndexKey(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/regions/:id/', args] as const
}

export function useGetDcimRegionsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRegionsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.regions[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimRegionsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimRegionsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.regions[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimRegionsIdIndexKey() {
  return ['dcim', '/dcim/regions/:id/', 'PUT'] as const
}

export function usePutDcimRegionsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.regions)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimRegionsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.regions[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimRegionsIdIndexKey() {
  return ['dcim', '/dcim/regions/:id/', 'DELETE'] as const
}

export function useDeleteDcimRegionsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.regions)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimRegionsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.regions[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimRegionsIdIndexKey() {
  return ['dcim', '/dcim/regions/:id/', 'PATCH'] as const
}

export function usePatchDcimRegionsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.regions)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimRegionsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.regions[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimSitesIndexKey(
  args: InferRequestType<typeof client.dcim.sites.index.$get>,
) {
  return ['dcim', '/dcim/sites/', args] as const
}

export function useGetDcimSitesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.sites.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDcimSitesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.sites.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimSitesIndex<TError = unknown>(
  args: InferRequestType<typeof client.dcim.sites.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDcimSitesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.sites.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimSitesIndexKey() {
  return ['dcim', '/dcim/sites/', 'POST'] as const
}

export function usePostDcimSitesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dcim.sites.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimSitesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dcim.sites.index.$post> }) =>
        parseResponse(client.dcim.sites.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimSitesIdIndexKey(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/sites/:id/', args] as const
}

export function useGetDcimSitesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimSitesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.sites[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimSitesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimSitesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.sites[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimSitesIdIndexKey() {
  return ['dcim', '/dcim/sites/:id/', 'PUT'] as const
}

export function usePutDcimSitesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.sites)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimSitesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$put']> },
      ) => parseResponse(client.dcim.sites[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimSitesIdIndexKey() {
  return ['dcim', '/dcim/sites/:id/', 'DELETE'] as const
}

export function useDeleteDcimSitesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.sites)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimSitesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$delete']> },
      ) => parseResponse(client.dcim.sites[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimSitesIdIndexKey() {
  return ['dcim', '/dcim/sites/:id/', 'PATCH'] as const
}

export function usePatchDcimSitesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim.sites)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimSitesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$patch']> },
      ) => parseResponse(client.dcim.sites[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimSitesIdGraphsIndexKey(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
) {
  return ['dcim', '/dcim/sites/:id/graphs/', args] as const
}

export function useGetDcimSitesIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimSitesIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.sites[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimSitesIdGraphsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimSitesIdGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim.sites[':id'].graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDcimVirtualChassisIndexKey(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
) {
  return ['dcim', '/dcim/virtual-chassis/', args] as const
}

export function useGetDcimVirtualChassisIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimVirtualChassisIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['virtual-chassis'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimVirtualChassisIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimVirtualChassisIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dcim['virtual-chassis'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDcimVirtualChassisIndexKey() {
  return ['dcim', '/dcim/virtual-chassis/', 'POST'] as const
}

export function usePostDcimVirtualChassisIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDcimVirtualChassisIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']> },
      ) => parseResponse(client.dcim['virtual-chassis'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDcimVirtualChassisIdIndexKey(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/virtual-chassis/:id/', args] as const
}

export function useGetDcimVirtualChassisIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimVirtualChassisIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['virtual-chassis'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDcimVirtualChassisIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDcimVirtualChassisIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dcim['virtual-chassis'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDcimVirtualChassisIdIndexKey() {
  return ['dcim', '/dcim/virtual-chassis/:id/', 'PUT'] as const
}

export function usePutDcimVirtualChassisIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDcimVirtualChassisIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>
        },
      ) => parseResponse(client.dcim['virtual-chassis'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDcimVirtualChassisIdIndexKey() {
  return ['dcim', '/dcim/virtual-chassis/:id/', 'DELETE'] as const
}

export function useDeleteDcimVirtualChassisIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDcimVirtualChassisIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.dcim['virtual-chassis'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDcimVirtualChassisIdIndexKey() {
  return ['dcim', '/dcim/virtual-chassis/:id/', 'PATCH'] as const
}

export function usePatchDcimVirtualChassisIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDcimVirtualChassisIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.dcim['virtual-chassis'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasCustomFieldChoicesIndexKey() {
  return ['extras', '/extras/_custom_field_choices/'] as const
}

export function useGetExtrasCustomFieldChoicesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
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
        ? getGetExtrasCustomFieldChoicesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras._custom_field_choices.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasCustomFieldChoicesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
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
        ? getGetExtrasCustomFieldChoicesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras._custom_field_choices.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasCustomFieldChoicesIdIndexKey(
  args: InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/_custom_field_choices/:id/', args] as const
}

export function useGetExtrasCustomFieldChoicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
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
        ? getGetExtrasCustomFieldChoicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras._custom_field_choices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasCustomFieldChoicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
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
        ? getGetExtrasCustomFieldChoicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras._custom_field_choices[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasConfigContextsIndexKey(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
) {
  return ['extras', '/extras/config-contexts/', args] as const
}

export function useGetExtrasConfigContextsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasConfigContextsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['config-contexts'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasConfigContextsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasConfigContextsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['config-contexts'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtrasConfigContextsIndexKey() {
  return ['extras', '/extras/config-contexts/', 'POST'] as const
}

export function usePostExtrasConfigContextsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtrasConfigContextsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']> },
      ) => parseResponse(client.extras['config-contexts'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasConfigContextsIdIndexKey(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/config-contexts/:id/', args] as const
}

export function useGetExtrasConfigContextsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasConfigContextsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['config-contexts'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasConfigContextsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasConfigContextsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['config-contexts'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtrasConfigContextsIdIndexKey() {
  return ['extras', '/extras/config-contexts/:id/', 'PUT'] as const
}

export function usePutExtrasConfigContextsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtrasConfigContextsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>
        },
      ) => parseResponse(client.extras['config-contexts'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExtrasConfigContextsIdIndexKey() {
  return ['extras', '/extras/config-contexts/:id/', 'DELETE'] as const
}

export function useDeleteExtrasConfigContextsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtrasConfigContextsIdIndexKey()
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
            (typeof client.extras)['config-contexts'][':id']['index']['$delete']
          >
        },
      ) => parseResponse(client.extras['config-contexts'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExtrasConfigContextsIdIndexKey() {
  return ['extras', '/extras/config-contexts/:id/', 'PATCH'] as const
}

export function usePatchExtrasConfigContextsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtrasConfigContextsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.extras['config-contexts'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasExportTemplatesIndexKey(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
) {
  return ['extras', '/extras/export-templates/', args] as const
}

export function useGetExtrasExportTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasExportTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['export-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasExportTemplatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasExportTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['export-templates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtrasExportTemplatesIndexKey() {
  return ['extras', '/extras/export-templates/', 'POST'] as const
}

export function usePostExtrasExportTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['export-templates']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtrasExportTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.extras)['export-templates']['index']['$post']> },
      ) => parseResponse(client.extras['export-templates'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasExportTemplatesIdIndexKey(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/export-templates/:id/', args] as const
}

export function useGetExtrasExportTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasExportTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['export-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasExportTemplatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasExportTemplatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['export-templates'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtrasExportTemplatesIdIndexKey() {
  return ['extras', '/extras/export-templates/:id/', 'PUT'] as const
}

export function usePutExtrasExportTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtrasExportTemplatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$put']>
        },
      ) => parseResponse(client.extras['export-templates'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExtrasExportTemplatesIdIndexKey() {
  return ['extras', '/extras/export-templates/:id/', 'DELETE'] as const
}

export function useDeleteExtrasExportTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtrasExportTemplatesIdIndexKey()
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
            (typeof client.extras)['export-templates'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.extras['export-templates'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExtrasExportTemplatesIdIndexKey() {
  return ['extras', '/extras/export-templates/:id/', 'PATCH'] as const
}

export function usePatchExtrasExportTemplatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtrasExportTemplatesIdIndexKey()
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
            (typeof client.extras)['export-templates'][':id']['index']['$patch']
          >
        },
      ) => parseResponse(client.extras['export-templates'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasGraphsIndexKey(
  args: InferRequestType<typeof client.extras.graphs.index.$get>,
) {
  return ['extras', '/extras/graphs/', args] as const
}

export function useGetExtrasGraphsIndex<TError = unknown>(
  args: InferRequestType<typeof client.extras.graphs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasGraphsIndex<TError = unknown>(
  args: InferRequestType<typeof client.extras.graphs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasGraphsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.graphs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtrasGraphsIndexKey() {
  return ['extras', '/extras/graphs/', 'POST'] as const
}

export function usePostExtrasGraphsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.extras.graphs.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtrasGraphsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extras.graphs.index.$post> }) =>
        parseResponse(client.extras.graphs.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasGraphsIdIndexKey(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/graphs/:id/', args] as const
}

export function useGetExtrasGraphsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasGraphsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.graphs[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasGraphsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasGraphsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.graphs[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtrasGraphsIdIndexKey() {
  return ['extras', '/extras/graphs/:id/', 'PUT'] as const
}

export function usePutExtrasGraphsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras.graphs)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtrasGraphsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$put']> },
      ) => parseResponse(client.extras.graphs[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExtrasGraphsIdIndexKey() {
  return ['extras', '/extras/graphs/:id/', 'DELETE'] as const
}

export function useDeleteExtrasGraphsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extras.graphs)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtrasGraphsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$delete']> },
      ) => parseResponse(client.extras.graphs[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExtrasGraphsIdIndexKey() {
  return ['extras', '/extras/graphs/:id/', 'PATCH'] as const
}

export function usePatchExtrasGraphsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras.graphs)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtrasGraphsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$patch']> },
      ) => parseResponse(client.extras.graphs[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasImageAttachmentsIndexKey(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
) {
  return ['extras', '/extras/image-attachments/', args] as const
}

export function useGetExtrasImageAttachmentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasImageAttachmentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['image-attachments'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasImageAttachmentsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasImageAttachmentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['image-attachments'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtrasImageAttachmentsIndexKey() {
  return ['extras', '/extras/image-attachments/', 'POST'] as const
}

export function usePostExtrasImageAttachmentsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtrasImageAttachmentsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']> },
      ) => parseResponse(client.extras['image-attachments'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasImageAttachmentsIdIndexKey(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/image-attachments/:id/', args] as const
}

export function useGetExtrasImageAttachmentsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasImageAttachmentsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['image-attachments'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasImageAttachmentsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasImageAttachmentsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['image-attachments'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtrasImageAttachmentsIdIndexKey() {
  return ['extras', '/extras/image-attachments/:id/', 'PUT'] as const
}

export function usePutExtrasImageAttachmentsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtrasImageAttachmentsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>
        },
      ) => parseResponse(client.extras['image-attachments'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExtrasImageAttachmentsIdIndexKey() {
  return ['extras', '/extras/image-attachments/:id/', 'DELETE'] as const
}

export function useDeleteExtrasImageAttachmentsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtrasImageAttachmentsIdIndexKey()
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
            (typeof client.extras)['image-attachments'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.extras['image-attachments'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExtrasImageAttachmentsIdIndexKey() {
  return ['extras', '/extras/image-attachments/:id/', 'PATCH'] as const
}

export function usePatchExtrasImageAttachmentsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtrasImageAttachmentsIdIndexKey()
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
            (typeof client.extras)['image-attachments'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.extras['image-attachments'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasObjectChangesIndexKey(
  args: InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
) {
  return ['extras', '/extras/object-changes/', args] as const
}

export function useGetExtrasObjectChangesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasObjectChangesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['object-changes'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasObjectChangesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasObjectChangesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras['object-changes'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasObjectChangesIdIndexKey(
  args: InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/object-changes/:id/', args] as const
}

export function useGetExtrasObjectChangesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasObjectChangesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['object-changes'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasObjectChangesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasObjectChangesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extras['object-changes'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasReportsIndexKey() {
  return ['extras', '/extras/reports/'] as const
}

export function useGetExtrasReportsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtrasReportsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.reports.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasReportsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtrasReportsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.reports.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasReportsIdIndexKey(
  args: InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/reports/:id/', args] as const
}

export function useGetExtrasReportsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasReportsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.reports[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasReportsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasReportsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.reports[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtrasReportsIdRunIndexKey() {
  return ['extras', '/extras/reports/:id/run/', 'POST'] as const
}

export function usePostExtrasReportsIdRunIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.reports)[':id']['run']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras.reports)[':id']['run']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtrasReportsIdRunIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.extras.reports)[':id']['run']['index']['$post']>
        },
      ) => parseResponse(client.extras.reports[':id'].run.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasScriptsIndexKey() {
  return ['extras', '/extras/scripts/'] as const
}

export function useGetExtrasScriptsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtrasScriptsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.scripts.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasScriptsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtrasScriptsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.scripts.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasScriptsIdIndexKey(
  args: InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/scripts/:id/', args] as const
}

export function useGetExtrasScriptsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasScriptsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.scripts[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasScriptsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasScriptsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.scripts[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExtrasTagsIndexKey(
  args: InferRequestType<typeof client.extras.tags.index.$get>,
) {
  return ['extras', '/extras/tags/', args] as const
}

export function useGetExtrasTagsIndex<TError = unknown>(
  args: InferRequestType<typeof client.extras.tags.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasTagsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.tags.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasTagsIndex<TError = unknown>(
  args: InferRequestType<typeof client.extras.tags.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasTagsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.tags.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtrasTagsIndexKey() {
  return ['extras', '/extras/tags/', 'POST'] as const
}

export function usePostExtrasTagsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.extras.tags.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtrasTagsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extras.tags.index.$post> }) =>
        parseResponse(client.extras.tags.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtrasTagsIdIndexKey(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/tags/:id/', args] as const
}

export function useGetExtrasTagsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasTagsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.tags[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtrasTagsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExtrasTagsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extras.tags[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExtrasTagsIdIndexKey() {
  return ['extras', '/extras/tags/:id/', 'PUT'] as const
}

export function usePutExtrasTagsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras.tags)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExtrasTagsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extras.tags)[':id']['index']['$put']> },
      ) => parseResponse(client.extras.tags[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExtrasTagsIdIndexKey() {
  return ['extras', '/extras/tags/:id/', 'DELETE'] as const
}

export function useDeleteExtrasTagsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extras.tags)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtrasTagsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extras.tags)[':id']['index']['$delete']> },
      ) => parseResponse(client.extras.tags[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExtrasTagsIdIndexKey() {
  return ['extras', '/extras/tags/:id/', 'PATCH'] as const
}

export function usePatchExtrasTagsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extras.tags)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtrasTagsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.extras.tags)[':id']['index']['$patch']> },
      ) => parseResponse(client.extras.tags[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamAggregatesIndexKey(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
) {
  return ['ipam', '/ipam/aggregates/', args] as const
}

export function useGetIpamAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamAggregatesIndexKey() {
  return ['ipam', '/ipam/aggregates/', 'POST'] as const
}

export function usePostIpamAggregatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.aggregates.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamAggregatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ipam.aggregates.index.$post> },
      ) => parseResponse(client.ipam.aggregates.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamAggregatesIdIndexKey(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/aggregates/:id/', args] as const
}

export function useGetIpamAggregatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamAggregatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.aggregates[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamAggregatesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamAggregatesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.aggregates[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamAggregatesIdIndexKey() {
  return ['ipam', '/ipam/aggregates/:id/', 'PUT'] as const
}

export function usePutIpamAggregatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamAggregatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.aggregates[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamAggregatesIdIndexKey() {
  return ['ipam', '/ipam/aggregates/:id/', 'DELETE'] as const
}

export function useDeleteIpamAggregatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamAggregatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.aggregates[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamAggregatesIdIndexKey() {
  return ['ipam', '/ipam/aggregates/:id/', 'PATCH'] as const
}

export function usePatchIpamAggregatesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamAggregatesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.aggregates[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamIpAddressesIndexKey(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
) {
  return ['ipam', '/ipam/ip-addresses/', args] as const
}

export function useGetIpamIpAddressesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamIpAddressesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['ip-addresses'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamIpAddressesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamIpAddressesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['ip-addresses'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamIpAddressesIndexKey() {
  return ['ipam', '/ipam/ip-addresses/', 'POST'] as const
}

export function usePostIpamIpAddressesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamIpAddressesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']> },
      ) => parseResponse(client.ipam['ip-addresses'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamIpAddressesIdIndexKey(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/ip-addresses/:id/', args] as const
}

export function useGetIpamIpAddressesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamIpAddressesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['ip-addresses'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamIpAddressesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamIpAddressesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['ip-addresses'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamIpAddressesIdIndexKey() {
  return ['ipam', '/ipam/ip-addresses/:id/', 'PUT'] as const
}

export function usePutIpamIpAddressesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamIpAddressesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']> },
      ) => parseResponse(client.ipam['ip-addresses'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamIpAddressesIdIndexKey() {
  return ['ipam', '/ipam/ip-addresses/:id/', 'DELETE'] as const
}

export function useDeleteIpamIpAddressesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamIpAddressesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.ipam['ip-addresses'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamIpAddressesIdIndexKey() {
  return ['ipam', '/ipam/ip-addresses/:id/', 'PATCH'] as const
}

export function usePatchIpamIpAddressesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamIpAddressesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.ipam['ip-addresses'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamPrefixesIndexKey(
  args: InferRequestType<typeof client.ipam.prefixes.index.$get>,
) {
  return ['ipam', '/ipam/prefixes/', args] as const
}

export function useGetIpamPrefixesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.prefixes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamPrefixesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.prefixes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamPrefixesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.prefixes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamPrefixesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.prefixes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamPrefixesIndexKey() {
  return ['ipam', '/ipam/prefixes/', 'POST'] as const
}

export function usePostIpamPrefixesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.prefixes.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamPrefixesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipam.prefixes.index.$post> }) =>
        parseResponse(client.ipam.prefixes.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamPrefixesIdIndexKey(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/prefixes/:id/', args] as const
}

export function useGetIpamPrefixesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamPrefixesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.prefixes[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamPrefixesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamPrefixesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.prefixes[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamPrefixesIdIndexKey() {
  return ['ipam', '/ipam/prefixes/:id/', 'PUT'] as const
}

export function usePutIpamPrefixesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamPrefixesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.prefixes[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamPrefixesIdIndexKey() {
  return ['ipam', '/ipam/prefixes/:id/', 'DELETE'] as const
}

export function useDeleteIpamPrefixesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamPrefixesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.prefixes[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamPrefixesIdIndexKey() {
  return ['ipam', '/ipam/prefixes/:id/', 'PATCH'] as const
}

export function usePatchIpamPrefixesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamPrefixesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.prefixes[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamPrefixesIdAvailableIpsIndexKey(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>,
) {
  return ['ipam', '/ipam/prefixes/:id/available-ips/', args] as const
}

export function useGetIpamPrefixesIdAvailableIpsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
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
        ? getGetIpamPrefixesIdAvailableIpsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ipam.prefixes[':id']['available-ips'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamPrefixesIdAvailableIpsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
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
        ? getGetIpamPrefixesIdAvailableIpsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ipam.prefixes[':id']['available-ips'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamPrefixesIdAvailableIpsIndexKey() {
  return ['ipam', '/ipam/prefixes/:id/available-ips/', 'POST'] as const
}

export function usePostIpamPrefixesIdAvailableIpsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamPrefixesIdAvailableIpsIndexKey()
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
            (typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.ipam.prefixes[':id']['available-ips'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamPrefixesIdAvailablePrefixesIndexKey(
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
) {
  return ['ipam', '/ipam/prefixes/:id/available-prefixes/', args] as const
}

export function useGetIpamPrefixesIdAvailablePrefixesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
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
        ? getGetIpamPrefixesIdAvailablePrefixesIndexKey(args)
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
                (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
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
          client.ipam.prefixes[':id']['available-prefixes'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamPrefixesIdAvailablePrefixesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
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
        ? getGetIpamPrefixesIdAvailablePrefixesIndexKey(args)
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
                (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
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
          client.ipam.prefixes[':id']['available-prefixes'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIpamPrefixesIdAvailablePrefixesIndexKey() {
  return ['ipam', '/ipam/prefixes/:id/available-prefixes/', 'POST'] as const
}

export function usePostIpamPrefixesIdAvailablePrefixesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamPrefixesIdAvailablePrefixesIndexKey()
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
            (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ipam.prefixes[':id']['available-prefixes'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIpamRirsIndexKey(args: InferRequestType<typeof client.ipam.rirs.index.$get>) {
  return ['ipam', '/ipam/rirs/', args] as const
}

export function useGetIpamRirsIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.rirs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamRirsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.rirs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamRirsIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.rirs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamRirsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.rirs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamRirsIndexKey() {
  return ['ipam', '/ipam/rirs/', 'POST'] as const
}

export function usePostIpamRirsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.rirs.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamRirsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipam.rirs.index.$post> }) =>
        parseResponse(client.ipam.rirs.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamRirsIdIndexKey(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/rirs/:id/', args] as const
}

export function useGetIpamRirsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamRirsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.rirs[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamRirsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamRirsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.rirs[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamRirsIdIndexKey() {
  return ['ipam', '/ipam/rirs/:id/', 'PUT'] as const
}

export function usePutIpamRirsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamRirsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.rirs[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamRirsIdIndexKey() {
  return ['ipam', '/ipam/rirs/:id/', 'DELETE'] as const
}

export function useDeleteIpamRirsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamRirsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.rirs[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamRirsIdIndexKey() {
  return ['ipam', '/ipam/rirs/:id/', 'PATCH'] as const
}

export function usePatchIpamRirsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamRirsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.rirs[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamRolesIndexKey(
  args: InferRequestType<typeof client.ipam.roles.index.$get>,
) {
  return ['ipam', '/ipam/roles/', args] as const
}

export function useGetIpamRolesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.roles.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamRolesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.roles.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamRolesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.roles.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamRolesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.roles.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamRolesIndexKey() {
  return ['ipam', '/ipam/roles/', 'POST'] as const
}

export function usePostIpamRolesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.roles.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamRolesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipam.roles.index.$post> }) =>
        parseResponse(client.ipam.roles.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamRolesIdIndexKey(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/roles/:id/', args] as const
}

export function useGetIpamRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.roles[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.roles[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamRolesIdIndexKey() {
  return ['ipam', '/ipam/roles/:id/', 'PUT'] as const
}

export function usePutIpamRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.roles)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.roles[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamRolesIdIndexKey() {
  return ['ipam', '/ipam/roles/:id/', 'DELETE'] as const
}

export function useDeleteIpamRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.roles)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.roles[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamRolesIdIndexKey() {
  return ['ipam', '/ipam/roles/:id/', 'PATCH'] as const
}

export function usePatchIpamRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.roles)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.roles[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamServicesIndexKey(
  args: InferRequestType<typeof client.ipam.services.index.$get>,
) {
  return ['ipam', '/ipam/services/', args] as const
}

export function useGetIpamServicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.services.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamServicesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.services.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamServicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.services.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamServicesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.services.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamServicesIndexKey() {
  return ['ipam', '/ipam/services/', 'POST'] as const
}

export function usePostIpamServicesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.services.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamServicesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipam.services.index.$post> }) =>
        parseResponse(client.ipam.services.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamServicesIdIndexKey(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/services/:id/', args] as const
}

export function useGetIpamServicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamServicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.services[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamServicesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamServicesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.services[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamServicesIdIndexKey() {
  return ['ipam', '/ipam/services/:id/', 'PUT'] as const
}

export function usePutIpamServicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.services)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamServicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.services)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.services[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamServicesIdIndexKey() {
  return ['ipam', '/ipam/services/:id/', 'DELETE'] as const
}

export function useDeleteIpamServicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.services)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamServicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam.services)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.services[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamServicesIdIndexKey() {
  return ['ipam', '/ipam/services/:id/', 'PATCH'] as const
}

export function usePatchIpamServicesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.services)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamServicesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.services)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.services[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamVlanGroupsIndexKey(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
) {
  return ['ipam', '/ipam/vlan-groups/', args] as const
}

export function useGetIpamVlanGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVlanGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['vlan-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamVlanGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVlanGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['vlan-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamVlanGroupsIndexKey() {
  return ['ipam', '/ipam/vlan-groups/', 'POST'] as const
}

export function usePostIpamVlanGroupsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamVlanGroupsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']> },
      ) => parseResponse(client.ipam['vlan-groups'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamVlanGroupsIdIndexKey(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/vlan-groups/:id/', args] as const
}

export function useGetIpamVlanGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVlanGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['vlan-groups'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamVlanGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVlanGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam['vlan-groups'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamVlanGroupsIdIndexKey() {
  return ['ipam', '/ipam/vlan-groups/:id/', 'PUT'] as const
}

export function usePutIpamVlanGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamVlanGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']> },
      ) => parseResponse(client.ipam['vlan-groups'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamVlanGroupsIdIndexKey() {
  return ['ipam', '/ipam/vlan-groups/:id/', 'DELETE'] as const
}

export function useDeleteIpamVlanGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamVlanGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.ipam['vlan-groups'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamVlanGroupsIdIndexKey() {
  return ['ipam', '/ipam/vlan-groups/:id/', 'PATCH'] as const
}

export function usePatchIpamVlanGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamVlanGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']> },
      ) => parseResponse(client.ipam['vlan-groups'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamVlansIndexKey(
  args: InferRequestType<typeof client.ipam.vlans.index.$get>,
) {
  return ['ipam', '/ipam/vlans/', args] as const
}

export function useGetIpamVlansIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.vlans.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamVlansIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vlans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamVlansIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.vlans.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamVlansIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vlans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamVlansIndexKey() {
  return ['ipam', '/ipam/vlans/', 'POST'] as const
}

export function usePostIpamVlansIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.vlans.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamVlansIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipam.vlans.index.$post> }) =>
        parseResponse(client.ipam.vlans.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamVlansIdIndexKey(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/vlans/:id/', args] as const
}

export function useGetIpamVlansIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVlansIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vlans[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamVlansIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVlansIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vlans[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamVlansIdIndexKey() {
  return ['ipam', '/ipam/vlans/:id/', 'PUT'] as const
}

export function usePutIpamVlansIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamVlansIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.vlans[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamVlansIdIndexKey() {
  return ['ipam', '/ipam/vlans/:id/', 'DELETE'] as const
}

export function useDeleteIpamVlansIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamVlansIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.vlans[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamVlansIdIndexKey() {
  return ['ipam', '/ipam/vlans/:id/', 'PATCH'] as const
}

export function usePatchIpamVlansIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamVlansIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.vlans[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamVrfsIndexKey(args: InferRequestType<typeof client.ipam.vrfs.index.$get>) {
  return ['ipam', '/ipam/vrfs/', args] as const
}

export function useGetIpamVrfsIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.vrfs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamVrfsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vrfs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamVrfsIndex<TError = unknown>(
  args: InferRequestType<typeof client.ipam.vrfs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpamVrfsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vrfs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpamVrfsIndexKey() {
  return ['ipam', '/ipam/vrfs/', 'POST'] as const
}

export function usePostIpamVrfsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ipam.vrfs.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpamVrfsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipam.vrfs.index.$post> }) =>
        parseResponse(client.ipam.vrfs.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpamVrfsIdIndexKey(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/vrfs/:id/', args] as const
}

export function useGetIpamVrfsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVrfsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vrfs[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpamVrfsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpamVrfsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipam.vrfs[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpamVrfsIdIndexKey() {
  return ['ipam', '/ipam/vrfs/:id/', 'PUT'] as const
}

export function usePutIpamVrfsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpamVrfsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$put']> },
      ) => parseResponse(client.ipam.vrfs[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIpamVrfsIdIndexKey() {
  return ['ipam', '/ipam/vrfs/:id/', 'DELETE'] as const
}

export function useDeleteIpamVrfsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIpamVrfsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$delete']> },
      ) => parseResponse(client.ipam.vrfs[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpamVrfsIdIndexKey() {
  return ['ipam', '/ipam/vrfs/:id/', 'PATCH'] as const
}

export function usePatchIpamVrfsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpamVrfsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$patch']> },
      ) => parseResponse(client.ipam.vrfs[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsGenerateRsaKeyPairIndexKey() {
  return ['secrets', '/secrets/generate-rsa-key-pair/'] as const
}

export function useGetSecretsGenerateRsaKeyPairIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
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
        ? getGetSecretsGenerateRsaKeyPairIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.secrets['generate-rsa-key-pair'].index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsGenerateRsaKeyPairIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
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
        ? getGetSecretsGenerateRsaKeyPairIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.secrets['generate-rsa-key-pair'].index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecretsGetSessionKeyIndexKey() {
  return ['secrets', '/secrets/get-session-key/', 'POST'] as const
}

export function usePostSecretsGetSessionKeyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['get-session-key']['index']['$post']>>
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
  const swrKey = customKey ?? getPostSecretsGetSessionKeyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.secrets['get-session-key'].index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsSecretRolesIndexKey(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
) {
  return ['secrets', '/secrets/secret-roles/', args] as const
}

export function useGetSecretsSecretRolesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets['secret-roles'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsSecretRolesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretRolesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets['secret-roles'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecretsSecretRolesIndexKey() {
  return ['secrets', '/secrets/secret-roles/', 'POST'] as const
}

export function usePostSecretsSecretRolesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)['secret-roles']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsSecretRolesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$post']> },
      ) => parseResponse(client.secrets['secret-roles'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsSecretRolesIdIndexKey(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
) {
  return ['secrets', '/secrets/secret-roles/:id/', args] as const
}

export function useGetSecretsSecretRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.secrets['secret-roles'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsSecretRolesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretRolesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.secrets['secret-roles'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSecretsSecretRolesIdIndexKey() {
  return ['secrets', '/secrets/secret-roles/:id/', 'PUT'] as const
}

export function usePutSecretsSecretRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecretsSecretRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>
        },
      ) => parseResponse(client.secrets['secret-roles'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecretsSecretRolesIdIndexKey() {
  return ['secrets', '/secrets/secret-roles/:id/', 'DELETE'] as const
}

export function useDeleteSecretsSecretRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecretsSecretRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.secrets['secret-roles'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSecretsSecretRolesIdIndexKey() {
  return ['secrets', '/secrets/secret-roles/:id/', 'PATCH'] as const
}

export function usePatchSecretsSecretRolesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSecretsSecretRolesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.secrets['secret-roles'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsSecretsIndexKey(
  args: InferRequestType<typeof client.secrets.secrets.index.$get>,
) {
  return ['secrets', '/secrets/secrets/', args] as const
}

export function useGetSecretsSecretsIndex<TError = unknown>(
  args: InferRequestType<typeof client.secrets.secrets.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets.secrets.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsSecretsIndex<TError = unknown>(
  args: InferRequestType<typeof client.secrets.secrets.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets.secrets.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecretsSecretsIndexKey() {
  return ['secrets', '/secrets/secrets/', 'POST'] as const
}

export function usePostSecretsSecretsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.secrets.secrets.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsSecretsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.secrets.secrets.index.$post> },
      ) => parseResponse(client.secrets.secrets.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsSecretsIdIndexKey(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
) {
  return ['secrets', '/secrets/secrets/:id/', args] as const
}

export function useGetSecretsSecretsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets.secrets[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsSecretsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecretsSecretsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets.secrets[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSecretsSecretsIdIndexKey() {
  return ['secrets', '/secrets/secrets/:id/', 'PUT'] as const
}

export function usePutSecretsSecretsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecretsSecretsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$put']> },
      ) => parseResponse(client.secrets.secrets[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecretsSecretsIdIndexKey() {
  return ['secrets', '/secrets/secrets/:id/', 'DELETE'] as const
}

export function useDeleteSecretsSecretsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecretsSecretsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$delete']> },
      ) => parseResponse(client.secrets.secrets[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSecretsSecretsIdIndexKey() {
  return ['secrets', '/secrets/secrets/:id/', 'PATCH'] as const
}

export function usePatchSecretsSecretsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSecretsSecretsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$patch']> },
      ) => parseResponse(client.secrets.secrets[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenancyTenantGroupsIndexKey(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
) {
  return ['tenancy', '/tenancy/tenant-groups/', args] as const
}

export function useGetTenancyTenantGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenancy['tenant-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenancyTenantGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenancy['tenant-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenancyTenantGroupsIndexKey() {
  return ['tenancy', '/tenancy/tenant-groups/', 'POST'] as const
}

export function usePostTenancyTenantGroupsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenancyTenantGroupsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']> },
      ) => parseResponse(client.tenancy['tenant-groups'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenancyTenantGroupsIdIndexKey(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
) {
  return ['tenancy', '/tenancy/tenant-groups/:id/', args] as const
}

export function useGetTenancyTenantGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tenancy['tenant-groups'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenancyTenantGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tenancy['tenant-groups'][':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTenancyTenantGroupsIdIndexKey() {
  return ['tenancy', '/tenancy/tenant-groups/:id/', 'PUT'] as const
}

export function usePutTenancyTenantGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTenancyTenantGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>
        },
      ) => parseResponse(client.tenancy['tenant-groups'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenancyTenantGroupsIdIndexKey() {
  return ['tenancy', '/tenancy/tenant-groups/:id/', 'DELETE'] as const
}

export function useDeleteTenancyTenantGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenancyTenantGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>
        },
      ) => parseResponse(client.tenancy['tenant-groups'][':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTenancyTenantGroupsIdIndexKey() {
  return ['tenancy', '/tenancy/tenant-groups/:id/', 'PATCH'] as const
}

export function usePatchTenancyTenantGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenancyTenantGroupsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>
        },
      ) => parseResponse(client.tenancy['tenant-groups'][':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenancyTenantsIndexKey(
  args: InferRequestType<typeof client.tenancy.tenants.index.$get>,
) {
  return ['tenancy', '/tenancy/tenants/', args] as const
}

export function useGetTenancyTenantsIndex<TError = unknown>(
  args: InferRequestType<typeof client.tenancy.tenants.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenancy.tenants.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenancyTenantsIndex<TError = unknown>(
  args: InferRequestType<typeof client.tenancy.tenants.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenancy.tenants.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenancyTenantsIndexKey() {
  return ['tenancy', '/tenancy/tenants/', 'POST'] as const
}

export function usePostTenancyTenantsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tenancy.tenants.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenancyTenantsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tenancy.tenants.index.$post> },
      ) => parseResponse(client.tenancy.tenants.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenancyTenantsIdIndexKey(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
) {
  return ['tenancy', '/tenancy/tenants/:id/', args] as const
}

export function useGetTenancyTenantsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenancy.tenants[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenancyTenantsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTenancyTenantsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tenancy.tenants[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTenancyTenantsIdIndexKey() {
  return ['tenancy', '/tenancy/tenants/:id/', 'PUT'] as const
}

export function usePutTenancyTenantsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTenancyTenantsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$put']> },
      ) => parseResponse(client.tenancy.tenants[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenancyTenantsIdIndexKey() {
  return ['tenancy', '/tenancy/tenants/:id/', 'DELETE'] as const
}

export function useDeleteTenancyTenantsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenancyTenantsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$delete']> },
      ) => parseResponse(client.tenancy.tenants[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTenancyTenantsIdIndexKey() {
  return ['tenancy', '/tenancy/tenants/:id/', 'PATCH'] as const
}

export function usePatchTenancyTenantsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenancyTenantsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$patch']> },
      ) => parseResponse(client.tenancy.tenants[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationClusterGroupsIndexKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-groups/', args] as const
}

export function useGetVirtualizationClusterGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClusterGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization['cluster-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationClusterGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClusterGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization['cluster-groups'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualizationClusterGroupsIndexKey() {
  return ['virtualization', '/virtualization/cluster-groups/', 'POST'] as const
}

export function usePostVirtualizationClusterGroupsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualizationClusterGroupsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>
        },
      ) => parseResponse(client.virtualization['cluster-groups'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationClusterGroupsIdIndexKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-groups/:id/', args] as const
}

export function useGetVirtualizationClusterGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
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
        ? getGetVirtualizationClusterGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualization['cluster-groups'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationClusterGroupsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
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
        ? getGetVirtualizationClusterGroupsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualization['cluster-groups'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVirtualizationClusterGroupsIdIndexKey() {
  return ['virtualization', '/virtualization/cluster-groups/:id/', 'PUT'] as const
}

export function usePutVirtualizationClusterGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVirtualizationClusterGroupsIdIndexKey()
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
            (typeof client.virtualization)['cluster-groups'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['cluster-groups'][':id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVirtualizationClusterGroupsIdIndexKey() {
  return ['virtualization', '/virtualization/cluster-groups/:id/', 'DELETE'] as const
}

export function useDeleteVirtualizationClusterGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualizationClusterGroupsIdIndexKey()
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
            (typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['cluster-groups'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVirtualizationClusterGroupsIdIndexKey() {
  return ['virtualization', '/virtualization/cluster-groups/:id/', 'PATCH'] as const
}

export function usePatchVirtualizationClusterGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVirtualizationClusterGroupsIdIndexKey()
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
            (typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['cluster-groups'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationClusterTypesIndexKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-types/', args] as const
}

export function useGetVirtualizationClusterTypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClusterTypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization['cluster-types'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationClusterTypesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClusterTypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization['cluster-types'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualizationClusterTypesIndexKey() {
  return ['virtualization', '/virtualization/cluster-types/', 'POST'] as const
}

export function usePostVirtualizationClusterTypesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualizationClusterTypesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>
        },
      ) => parseResponse(client.virtualization['cluster-types'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationClusterTypesIdIndexKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-types/:id/', args] as const
}

export function useGetVirtualizationClusterTypesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
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
        ? getGetVirtualizationClusterTypesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualization['cluster-types'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationClusterTypesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
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
        ? getGetVirtualizationClusterTypesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualization['cluster-types'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVirtualizationClusterTypesIdIndexKey() {
  return ['virtualization', '/virtualization/cluster-types/:id/', 'PUT'] as const
}

export function usePutVirtualizationClusterTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVirtualizationClusterTypesIdIndexKey()
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
            (typeof client.virtualization)['cluster-types'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(client.virtualization['cluster-types'][':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVirtualizationClusterTypesIdIndexKey() {
  return ['virtualization', '/virtualization/cluster-types/:id/', 'DELETE'] as const
}

export function useDeleteVirtualizationClusterTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualizationClusterTypesIdIndexKey()
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
            (typeof client.virtualization)['cluster-types'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['cluster-types'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVirtualizationClusterTypesIdIndexKey() {
  return ['virtualization', '/virtualization/cluster-types/:id/', 'PATCH'] as const
}

export function usePatchVirtualizationClusterTypesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVirtualizationClusterTypesIdIndexKey()
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
            (typeof client.virtualization)['cluster-types'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['cluster-types'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationClustersIndexKey(
  args: InferRequestType<typeof client.virtualization.clusters.index.$get>,
) {
  return ['virtualization', '/virtualization/clusters/', args] as const
}

export function useGetVirtualizationClustersIndex<TError = unknown>(
  args: InferRequestType<typeof client.virtualization.clusters.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClustersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtualization.clusters.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationClustersIndex<TError = unknown>(
  args: InferRequestType<typeof client.virtualization.clusters.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClustersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtualization.clusters.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualizationClustersIndexKey() {
  return ['virtualization', '/virtualization/clusters/', 'POST'] as const
}

export function usePostVirtualizationClustersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.virtualization.clusters.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualizationClustersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.virtualization.clusters.index.$post> },
      ) => parseResponse(client.virtualization.clusters.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationClustersIdIndexKey(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/clusters/:id/', args] as const
}

export function useGetVirtualizationClustersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClustersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization.clusters[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationClustersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationClustersIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization.clusters[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVirtualizationClustersIdIndexKey() {
  return ['virtualization', '/virtualization/clusters/:id/', 'PUT'] as const
}

export function usePutVirtualizationClustersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVirtualizationClustersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$put']>
        },
      ) => parseResponse(client.virtualization.clusters[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVirtualizationClustersIdIndexKey() {
  return ['virtualization', '/virtualization/clusters/:id/', 'DELETE'] as const
}

export function useDeleteVirtualizationClustersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualizationClustersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>
        },
      ) => parseResponse(client.virtualization.clusters[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVirtualizationClustersIdIndexKey() {
  return ['virtualization', '/virtualization/clusters/:id/', 'PATCH'] as const
}

export function usePatchVirtualizationClustersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVirtualizationClustersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>
        },
      ) => parseResponse(client.virtualization.clusters[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationInterfacesIndexKey(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$get>,
) {
  return ['virtualization', '/virtualization/interfaces/', args] as const
}

export function useGetVirtualizationInterfacesIndex<TError = unknown>(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationInterfacesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtualization.interfaces.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationInterfacesIndex<TError = unknown>(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationInterfacesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtualization.interfaces.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualizationInterfacesIndexKey() {
  return ['virtualization', '/virtualization/interfaces/', 'POST'] as const
}

export function usePostVirtualizationInterfacesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.virtualization.interfaces.index.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.virtualization.interfaces.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualizationInterfacesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.virtualization.interfaces.index.$post> },
      ) => parseResponse(client.virtualization.interfaces.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationInterfacesIdIndexKey(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/interfaces/:id/', args] as const
}

export function useGetVirtualizationInterfacesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationInterfacesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization.interfaces[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationInterfacesIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationInterfacesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization.interfaces[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVirtualizationInterfacesIdIndexKey() {
  return ['virtualization', '/virtualization/interfaces/:id/', 'PUT'] as const
}

export function usePutVirtualizationInterfacesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVirtualizationInterfacesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>
        },
      ) => parseResponse(client.virtualization.interfaces[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVirtualizationInterfacesIdIndexKey() {
  return ['virtualization', '/virtualization/interfaces/:id/', 'DELETE'] as const
}

export function useDeleteVirtualizationInterfacesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualizationInterfacesIdIndexKey()
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
            (typeof client.virtualization.interfaces)[':id']['index']['$delete']
          >
        },
      ) => parseResponse(client.virtualization.interfaces[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVirtualizationInterfacesIdIndexKey() {
  return ['virtualization', '/virtualization/interfaces/:id/', 'PATCH'] as const
}

export function usePatchVirtualizationInterfacesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVirtualizationInterfacesIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>
        },
      ) => parseResponse(client.virtualization.interfaces[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationVirtualMachinesIndexKey(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/virtual-machines/', args] as const
}

export function useGetVirtualizationVirtualMachinesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationVirtualMachinesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization['virtual-machines'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationVirtualMachinesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVirtualizationVirtualMachinesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualization['virtual-machines'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualizationVirtualMachinesIndexKey() {
  return ['virtualization', '/virtualization/virtual-machines/', 'POST'] as const
}

export function usePostVirtualizationVirtualMachinesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualizationVirtualMachinesIndexKey()
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
            (typeof client.virtualization)['virtual-machines']['index']['$post']
          >
        },
      ) => parseResponse(client.virtualization['virtual-machines'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualizationVirtualMachinesIdIndexKey(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
) {
  return ['virtualization', '/virtualization/virtual-machines/:id/', args] as const
}

export function useGetVirtualizationVirtualMachinesIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
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
        ? getGetVirtualizationVirtualMachinesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualization['virtual-machines'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualizationVirtualMachinesIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
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
        ? getGetVirtualizationVirtualMachinesIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualization['virtual-machines'][':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVirtualizationVirtualMachinesIdIndexKey() {
  return ['virtualization', '/virtualization/virtual-machines/:id/', 'PUT'] as const
}

export function usePutVirtualizationVirtualMachinesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVirtualizationVirtualMachinesIdIndexKey()
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
            (typeof client.virtualization)['virtual-machines'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['virtual-machines'][':id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVirtualizationVirtualMachinesIdIndexKey() {
  return ['virtualization', '/virtualization/virtual-machines/:id/', 'DELETE'] as const
}

export function useDeleteVirtualizationVirtualMachinesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualizationVirtualMachinesIdIndexKey()
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
            (typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['virtual-machines'][':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVirtualizationVirtualMachinesIdIndexKey() {
  return ['virtualization', '/virtualization/virtual-machines/:id/', 'PATCH'] as const
}

export function usePatchVirtualizationVirtualMachinesIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVirtualizationVirtualMachinesIdIndexKey()
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
            (typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.virtualization['virtual-machines'][':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
