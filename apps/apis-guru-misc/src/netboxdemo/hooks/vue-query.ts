import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getCircuitsCircuitTerminationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/circuit-terminations/', toValue(args)] as const
}

export function getCircuitsCircuitTerminationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsCircuitTerminationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits['circuit-terminations'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsCircuitTerminationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCircuitsCircuitTerminationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitTerminationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsCircuitTerminationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits['circuit-terminations'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCircuitsCircuitTerminationsIndexMutationKey() {
  return ['circuits', '/circuits/circuit-terminations/', 'POST'] as const
}

export function getPostCircuitsCircuitTerminationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCircuitsCircuitTerminationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>,
    ) {
      return parseResponse(client.circuits['circuit-terminations'].index.$post(args, options))
    },
  })
}

export function usePostCircuitsCircuitTerminationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCircuitsCircuitTerminationsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsCircuitTerminationsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/circuit-terminations/:id/', toValue(args)] as const
}

export function getCircuitsCircuitTerminationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsCircuitTerminationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits['circuit-terminations'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsCircuitTerminationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.circuits)['circuit-terminations'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.circuits)['circuit-terminations'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCircuitsCircuitTerminationsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitTerminationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsCircuitTerminationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits['circuit-terminations'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCircuitsCircuitTerminationsIdIndexMutationKey() {
  return ['circuits', '/circuits/circuit-terminations/:id/', 'PUT'] as const
}

export function getPutCircuitsCircuitTerminationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCircuitsCircuitTerminationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.circuits)['circuit-terminations'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.circuits['circuit-terminations'][':id'].index.$put(args, options))
    },
  })
}

export function usePutCircuitsCircuitTerminationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.circuits)['circuit-terminations'][':id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.circuits)['circuit-terminations'][':id']['index']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCircuitsCircuitTerminationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCircuitsCircuitTerminationsIdIndexMutationKey() {
  return ['circuits', '/circuits/circuit-terminations/:id/', 'DELETE'] as const
}

export function getDeleteCircuitsCircuitTerminationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCircuitsCircuitTerminationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.circuits['circuit-terminations'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteCircuitsCircuitTerminationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.circuits)['circuit-terminations'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCircuitsCircuitTerminationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCircuitsCircuitTerminationsIdIndexMutationKey() {
  return ['circuits', '/circuits/circuit-terminations/:id/', 'PATCH'] as const
}

export function getPatchCircuitsCircuitTerminationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCircuitsCircuitTerminationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.circuits['circuit-terminations'][':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchCircuitsCircuitTerminationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.circuits)['circuit-terminations'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCircuitsCircuitTerminationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsCircuitTypesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/circuit-types/', toValue(args)] as const
}

export function getCircuitsCircuitTypesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsCircuitTypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits['circuit-types'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsCircuitTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCircuitsCircuitTypesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitTypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsCircuitTypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits['circuit-types'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCircuitsCircuitTypesIndexMutationKey() {
  return ['circuits', '/circuits/circuit-types/', 'POST'] as const
}

export function getPostCircuitsCircuitTypesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCircuitsCircuitTypesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']>,
    ) {
      return parseResponse(client.circuits['circuit-types'].index.$post(args, options))
    },
  })
}

export function usePostCircuitsCircuitTypesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits)['circuit-types']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCircuitsCircuitTypesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsCircuitTypesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/circuit-types/:id/', toValue(args)] as const
}

export function getCircuitsCircuitTypesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsCircuitTypesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits['circuit-types'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsCircuitTypesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCircuitsCircuitTypesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitTypesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsCircuitTypesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits['circuit-types'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCircuitsCircuitTypesIdIndexMutationKey() {
  return ['circuits', '/circuits/circuit-types/:id/', 'PUT'] as const
}

export function getPutCircuitsCircuitTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCircuitsCircuitTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.circuits['circuit-types'][':id'].index.$put(args, options))
    },
  })
}

export function usePutCircuitsCircuitTypesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCircuitsCircuitTypesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCircuitsCircuitTypesIdIndexMutationKey() {
  return ['circuits', '/circuits/circuit-types/:id/', 'DELETE'] as const
}

export function getDeleteCircuitsCircuitTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCircuitsCircuitTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.circuits['circuit-types'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteCircuitsCircuitTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCircuitsCircuitTypesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCircuitsCircuitTypesIdIndexMutationKey() {
  return ['circuits', '/circuits/circuit-types/:id/', 'PATCH'] as const
}

export function getPatchCircuitsCircuitTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCircuitsCircuitTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.circuits['circuit-types'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchCircuitsCircuitTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCircuitsCircuitTypesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsCircuitsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.circuits.circuits.index.$get>>,
) {
  return ['circuits', '/circuits/circuits/', toValue(args)] as const
}

export function getCircuitsCircuitsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.circuits.circuits.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsCircuitsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits.circuits.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsCircuitsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.circuits.circuits.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
            >
          >,
          ReturnType<typeof getCircuitsCircuitsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsCircuitsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits.circuits.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCircuitsCircuitsIndexMutationKey() {
  return ['circuits', '/circuits/circuits/', 'POST'] as const
}

export function getPostCircuitsCircuitsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.circuits.circuits.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCircuitsCircuitsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.circuits.circuits.index.$post>) {
      return parseResponse(client.circuits.circuits.index.$post(args, options))
    },
  })
}

export function usePostCircuitsCircuitsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.circuits.circuits.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCircuitsCircuitsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsCircuitsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/circuits/:id/', toValue(args)] as const
}

export function getCircuitsCircuitsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsCircuitsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits.circuits[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsCircuitsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCircuitsCircuitsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsCircuitsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits.circuits[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCircuitsCircuitsIdIndexMutationKey() {
  return ['circuits', '/circuits/circuits/:id/', 'PUT'] as const
}

export function getPutCircuitsCircuitsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCircuitsCircuitsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.circuits.circuits[':id'].index.$put(args, options))
    },
  })
}

export function usePutCircuitsCircuitsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCircuitsCircuitsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCircuitsCircuitsIdIndexMutationKey() {
  return ['circuits', '/circuits/circuits/:id/', 'DELETE'] as const
}

export function getDeleteCircuitsCircuitsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCircuitsCircuitsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.circuits.circuits[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteCircuitsCircuitsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCircuitsCircuitsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCircuitsCircuitsIdIndexMutationKey() {
  return ['circuits', '/circuits/circuits/:id/', 'PATCH'] as const
}

export function getPatchCircuitsCircuitsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCircuitsCircuitsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.circuits.circuits[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchCircuitsCircuitsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCircuitsCircuitsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsProvidersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.circuits.providers.index.$get>>,
) {
  return ['circuits', '/circuits/providers/', toValue(args)] as const
}

export function getCircuitsProvidersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.circuits.providers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsProvidersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits.providers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsProvidersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.circuits.providers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
            >
          >,
          ReturnType<typeof getCircuitsProvidersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsProvidersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsProvidersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits.providers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCircuitsProvidersIndexMutationKey() {
  return ['circuits', '/circuits/providers/', 'POST'] as const
}

export function getPostCircuitsProvidersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.circuits.providers.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCircuitsProvidersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.circuits.providers.index.$post>) {
      return parseResponse(client.circuits.providers.index.$post(args, options))
    },
  })
}

export function usePostCircuitsProvidersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.circuits.providers.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.circuits.providers.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCircuitsProvidersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsProvidersIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/providers/:id/', toValue(args)] as const
}

export function getCircuitsProvidersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsProvidersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits.providers[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsProvidersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCircuitsProvidersIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsProvidersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsProvidersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits.providers[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCircuitsProvidersIdIndexMutationKey() {
  return ['circuits', '/circuits/providers/:id/', 'PUT'] as const
}

export function getPutCircuitsProvidersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCircuitsProvidersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.circuits.providers[':id'].index.$put(args, options))
    },
  })
}

export function usePutCircuitsProvidersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits.providers)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCircuitsProvidersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCircuitsProvidersIdIndexMutationKey() {
  return ['circuits', '/circuits/providers/:id/', 'DELETE'] as const
}

export function getDeleteCircuitsProvidersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCircuitsProvidersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.circuits.providers[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteCircuitsProvidersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.circuits.providers)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCircuitsProvidersIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCircuitsProvidersIdIndexMutationKey() {
  return ['circuits', '/circuits/providers/:id/', 'PATCH'] as const
}

export function getPatchCircuitsProvidersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.circuits.providers)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCircuitsProvidersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.circuits.providers[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchCircuitsProvidersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.circuits.providers)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCircuitsProvidersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCircuitsProvidersIdGraphsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
  >,
) {
  return ['circuits', '/circuits/providers/:id/graphs/', toValue(args)] as const
}

export function getCircuitsProvidersIdGraphsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCircuitsProvidersIdGraphsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.circuits.providers[':id'].graphs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCircuitsProvidersIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCircuitsProvidersIdGraphsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsProvidersIdGraphsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCircuitsProvidersIdGraphsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.circuits.providers[':id'].graphs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimCablesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.cables.index.$get>>,
) {
  return ['dcim', '/dcim/cables/', toValue(args)] as const
}

export function getDcimCablesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.cables.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimCablesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.cables.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimCablesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.cables.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimCablesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimCablesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimCablesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.cables.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimCablesIndexMutationKey() {
  return ['dcim', '/dcim/cables/', 'POST'] as const
}

export function getPostDcimCablesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dcim.cables.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimCablesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.cables.index.$post>) {
      return parseResponse(client.dcim.cables.index.$post(args, options))
    },
  })
}

export function usePostDcimCablesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.cables.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimCablesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimCablesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/cables/:id/', toValue(args)] as const
}

export function getDcimCablesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimCablesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.cables[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimCablesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimCablesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimCablesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimCablesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.cables[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimCablesIdIndexMutationKey() {
  return ['dcim', '/dcim/cables/:id/', 'PUT'] as const
}

export function getPutDcimCablesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.cables)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimCablesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$put']>) {
      return parseResponse(client.dcim.cables[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimCablesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.cables)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimCablesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimCablesIdIndexMutationKey() {
  return ['dcim', '/dcim/cables/:id/', 'DELETE'] as const
}

export function getDeleteDcimCablesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.cables)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimCablesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.cables[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimCablesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.cables)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimCablesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimCablesIdIndexMutationKey() {
  return ['dcim', '/dcim/cables/:id/', 'PATCH'] as const
}

export function getPatchDcimCablesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.cables)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimCablesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim.cables[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimCablesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.cables)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimCablesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConnectedDeviceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/connected-device/', toValue(args)] as const
}

export function getDcimConnectedDeviceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConnectedDeviceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['connected-device'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConnectedDeviceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimConnectedDeviceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConnectedDeviceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConnectedDeviceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['connected-device'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimConsoleConnectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-connections/', toValue(args)] as const
}

export function getDcimConsoleConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsoleConnectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-connections'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsoleConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimConsoleConnectionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsoleConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsoleConnectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-connections'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimConsolePortTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-port-templates/', toValue(args)] as const
}

export function getDcimConsolePortTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsolePortTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-port-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsolePortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimConsolePortTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsolePortTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsolePortTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-port-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimConsolePortTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/console-port-templates/', 'POST'] as const
}

export function getPostDcimConsolePortTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimConsolePortTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['console-port-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimConsolePortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-port-templates']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimConsolePortTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsolePortTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-port-templates/:id/', toValue(args)] as const
}

export function getDcimConsolePortTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsolePortTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-port-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsolePortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimConsolePortTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsolePortTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsolePortTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-port-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimConsolePortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/console-port-templates/:id/', 'PUT'] as const
}

export function getPutDcimConsolePortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimConsolePortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-port-templates'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.dcim['console-port-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimConsolePortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimConsolePortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimConsolePortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/console-port-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimConsolePortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimConsolePortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-port-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.dcim['console-port-templates'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteDcimConsolePortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['console-port-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.dcim)['console-port-templates'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimConsolePortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimConsolePortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/console-port-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimConsolePortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimConsolePortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-port-templates'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.dcim['console-port-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimConsolePortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.dcim)['console-port-templates'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dcim)['console-port-templates'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimConsolePortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsolePortsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>>,
) {
  return ['dcim', '/dcim/console-ports/', toValue(args)] as const
}

export function getDcimConsolePortsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsolePortsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-ports'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsolePortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimConsolePortsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsolePortsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsolePortsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-ports'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimConsolePortsIndexMutationKey() {
  return ['dcim', '/dcim/console-ports/', 'POST'] as const
}

export function getPostDcimConsolePortsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimConsolePortsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['console-ports'].index.$post(args, options))
    },
  })
}

export function usePostDcimConsolePortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-ports']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimConsolePortsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsolePortsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-ports/:id/', toValue(args)] as const
}

export function getDcimConsolePortsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsolePortsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-ports'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsolePortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimConsolePortsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsolePortsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsolePortsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-ports'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimConsolePortsIdIndexMutationKey() {
  return ['dcim', '/dcim/console-ports/:id/', 'PUT'] as const
}

export function getPutDcimConsolePortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimConsolePortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['console-ports'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimConsolePortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimConsolePortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimConsolePortsIdIndexMutationKey() {
  return ['dcim', '/dcim/console-ports/:id/', 'DELETE'] as const
}

export function getDeleteDcimConsolePortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimConsolePortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['console-ports'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimConsolePortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimConsolePortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimConsolePortsIdIndexMutationKey() {
  return ['dcim', '/dcim/console-ports/:id/', 'PATCH'] as const
}

export function getPatchDcimConsolePortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimConsolePortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['console-ports'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimConsolePortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimConsolePortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsolePortsIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-ports/:id/trace/', toValue(args)] as const
}

export function getDcimConsolePortsIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsolePortsIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-ports'][':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsolePortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimConsolePortsIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsolePortsIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsolePortsIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-ports'][':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimConsoleServerPortTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-server-port-templates/', toValue(args)] as const
}

export function getDcimConsoleServerPortTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsoleServerPortTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-server-port-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsoleServerPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimConsoleServerPortTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsoleServerPortTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsoleServerPortTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-server-port-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimConsoleServerPortTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/console-server-port-templates/', 'POST'] as const
}

export function getPostDcimConsoleServerPortTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimConsoleServerPortTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-server-port-templates']['index']['$post']
      >,
    ) {
      return parseResponse(client.dcim['console-server-port-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimConsoleServerPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.dcim)['console-server-port-templates']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimConsoleServerPortTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsoleServerPortTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-server-port-templates/:id/', toValue(args)] as const
}

export function getDcimConsoleServerPortTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsoleServerPortTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-server-port-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsoleServerPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getDcimConsoleServerPortTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getDcimConsoleServerPortTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsoleServerPortTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-server-port-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimConsoleServerPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/console-server-port-templates/:id/', 'PUT'] as const
}

export function getPutDcimConsoleServerPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimConsoleServerPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.dcim['console-server-port-templates'][':id'].index.$put(args, options),
      )
    },
  })
}

export function usePutDcimConsoleServerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.dcim)['console-server-port-templates'][':id']['index']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimConsoleServerPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimConsoleServerPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/console-server-port-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimConsoleServerPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimConsoleServerPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.dcim['console-server-port-templates'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteDcimConsoleServerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.dcim)['console-server-port-templates'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimConsoleServerPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimConsoleServerPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/console-server-port-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimConsoleServerPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimConsoleServerPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.dcim['console-server-port-templates'][':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchDcimConsoleServerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.dcim)['console-server-port-templates'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimConsoleServerPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsoleServerPortsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-server-ports/', toValue(args)] as const
}

export function getDcimConsoleServerPortsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsoleServerPortsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-server-ports'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsoleServerPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimConsoleServerPortsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsoleServerPortsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsoleServerPortsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-server-ports'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimConsoleServerPortsIndexMutationKey() {
  return ['dcim', '/dcim/console-server-ports/', 'POST'] as const
}

export function getPostDcimConsoleServerPortsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimConsoleServerPortsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['console-server-ports'].index.$post(args, options))
    },
  })
}

export function usePostDcimConsoleServerPortsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimConsoleServerPortsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsoleServerPortsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-server-ports/:id/', toValue(args)] as const
}

export function getDcimConsoleServerPortsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsoleServerPortsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-server-ports'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsoleServerPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimConsoleServerPortsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimConsoleServerPortsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsoleServerPortsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-server-ports'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimConsoleServerPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/console-server-ports/:id/', 'PUT'] as const
}

export function getPutDcimConsoleServerPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimConsoleServerPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['console-server-ports'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimConsoleServerPortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimConsoleServerPortsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimConsoleServerPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/console-server-ports/:id/', 'DELETE'] as const
}

export function getDeleteDcimConsoleServerPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimConsoleServerPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-server-ports'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.dcim['console-server-ports'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimConsoleServerPortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['console-server-ports'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimConsoleServerPortsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimConsoleServerPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/console-server-ports/:id/', 'PATCH'] as const
}

export function getPatchDcimConsoleServerPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimConsoleServerPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['console-server-ports'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.dcim['console-server-ports'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimConsoleServerPortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimConsoleServerPortsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimConsoleServerPortsIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/console-server-ports/:id/trace/', toValue(args)] as const
}

export function getDcimConsoleServerPortsIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimConsoleServerPortsIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['console-server-ports'][':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimConsoleServerPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getDcimConsoleServerPortsIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getDcimConsoleServerPortsIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimConsoleServerPortsIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['console-server-ports'][':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimDeviceBayTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/device-bay-templates/', toValue(args)] as const
}

export function getDcimDeviceBayTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceBayTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-bay-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceBayTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceBayTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceBayTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceBayTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-bay-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimDeviceBayTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/device-bay-templates/', 'POST'] as const
}

export function getPostDcimDeviceBayTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimDeviceBayTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['device-bay-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimDeviceBayTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimDeviceBayTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceBayTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/device-bay-templates/:id/', toValue(args)] as const
}

export function getDcimDeviceBayTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceBayTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-bay-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceBayTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimDeviceBayTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceBayTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceBayTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-bay-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimDeviceBayTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-bay-templates/:id/', 'PUT'] as const
}

export function getPutDcimDeviceBayTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimDeviceBayTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['device-bay-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimDeviceBayTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimDeviceBayTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimDeviceBayTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-bay-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimDeviceBayTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimDeviceBayTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.dcim['device-bay-templates'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimDeviceBayTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimDeviceBayTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimDeviceBayTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-bay-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimDeviceBayTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimDeviceBayTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.dcim['device-bay-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimDeviceBayTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimDeviceBayTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceBaysIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>>,
) {
  return ['dcim', '/dcim/device-bays/', toValue(args)] as const
}

export function getDcimDeviceBaysIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceBaysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-bays'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceBaysIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceBaysIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceBaysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceBaysIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-bays'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimDeviceBaysIndexMutationKey() {
  return ['dcim', '/dcim/device-bays/', 'POST'] as const
}

export function getPostDcimDeviceBaysIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimDeviceBaysIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['device-bays'].index.$post(args, options))
    },
  })
}

export function usePostDcimDeviceBaysIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-bays']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimDeviceBaysIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceBaysIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/device-bays/:id/', toValue(args)] as const
}

export function getDcimDeviceBaysIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceBaysIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-bays'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceBaysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceBaysIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceBaysIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceBaysIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-bays'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimDeviceBaysIdIndexMutationKey() {
  return ['dcim', '/dcim/device-bays/:id/', 'PUT'] as const
}

export function getPutDcimDeviceBaysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimDeviceBaysIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['device-bays'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimDeviceBaysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimDeviceBaysIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimDeviceBaysIdIndexMutationKey() {
  return ['dcim', '/dcim/device-bays/:id/', 'DELETE'] as const
}

export function getDeleteDcimDeviceBaysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimDeviceBaysIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['device-bays'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimDeviceBaysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimDeviceBaysIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimDeviceBaysIdIndexMutationKey() {
  return ['dcim', '/dcim/device-bays/:id/', 'PATCH'] as const
}

export function getPatchDcimDeviceBaysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimDeviceBaysIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['device-bays'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimDeviceBaysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimDeviceBaysIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceRolesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>>,
) {
  return ['dcim', '/dcim/device-roles/', toValue(args)] as const
}

export function getDcimDeviceRolesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-roles'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceRolesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-roles'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimDeviceRolesIndexMutationKey() {
  return ['dcim', '/dcim/device-roles/', 'POST'] as const
}

export function getPostDcimDeviceRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimDeviceRolesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['device-roles'].index.$post(args, options))
    },
  })
}

export function usePostDcimDeviceRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-roles']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimDeviceRolesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceRolesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/device-roles/:id/', toValue(args)] as const
}

export function getDcimDeviceRolesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceRolesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-roles'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceRolesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceRolesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceRolesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-roles'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimDeviceRolesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-roles/:id/', 'PUT'] as const
}

export function getPutDcimDeviceRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimDeviceRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['device-roles'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimDeviceRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimDeviceRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimDeviceRolesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-roles/:id/', 'DELETE'] as const
}

export function getDeleteDcimDeviceRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimDeviceRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['device-roles'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimDeviceRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimDeviceRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimDeviceRolesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-roles/:id/', 'PATCH'] as const
}

export function getPatchDcimDeviceRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimDeviceRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['device-roles'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimDeviceRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimDeviceRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceTypesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>>,
) {
  return ['dcim', '/dcim/device-types/', toValue(args)] as const
}

export function getDcimDeviceTypesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceTypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-types'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceTypesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceTypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceTypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-types'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimDeviceTypesIndexMutationKey() {
  return ['dcim', '/dcim/device-types/', 'POST'] as const
}

export function getPostDcimDeviceTypesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-types']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimDeviceTypesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-types']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['device-types'].index.$post(args, options))
    },
  })
}

export function usePostDcimDeviceTypesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-types']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimDeviceTypesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDeviceTypesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/device-types/:id/', toValue(args)] as const
}

export function getDcimDeviceTypesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDeviceTypesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['device-types'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDeviceTypesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDeviceTypesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDeviceTypesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDeviceTypesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['device-types'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimDeviceTypesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-types/:id/', 'PUT'] as const
}

export function getPutDcimDeviceTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimDeviceTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['device-types'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimDeviceTypesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimDeviceTypesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimDeviceTypesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-types/:id/', 'DELETE'] as const
}

export function getDeleteDcimDeviceTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimDeviceTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['device-types'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimDeviceTypesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimDeviceTypesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimDeviceTypesIdIndexMutationKey() {
  return ['dcim', '/dcim/device-types/:id/', 'PATCH'] as const
}

export function getPatchDcimDeviceTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimDeviceTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['device-types'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimDeviceTypesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimDeviceTypesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDevicesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.devices.index.$get>>,
) {
  return ['dcim', '/dcim/devices/', toValue(args)] as const
}

export function getDcimDevicesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.devices.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDevicesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.devices.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDevicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.devices.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimDevicesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDevicesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDevicesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.devices.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimDevicesIndexMutationKey() {
  return ['dcim', '/dcim/devices/', 'POST'] as const
}

export function getPostDcimDevicesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dcim.devices.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimDevicesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.devices.index.$post>) {
      return parseResponse(client.dcim.devices.index.$post(args, options))
    },
  })
}

export function usePostDcimDevicesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.devices.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimDevicesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDevicesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/devices/:id/', toValue(args)] as const
}

export function getDcimDevicesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDevicesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.devices[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDevicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDevicesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDevicesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDevicesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.devices[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimDevicesIdIndexMutationKey() {
  return ['dcim', '/dcim/devices/:id/', 'PUT'] as const
}

export function getPutDcimDevicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.devices)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimDevicesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$put']>) {
      return parseResponse(client.dcim.devices[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimDevicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.devices)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimDevicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimDevicesIdIndexMutationKey() {
  return ['dcim', '/dcim/devices/:id/', 'DELETE'] as const
}

export function getDeleteDcimDevicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.devices)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimDevicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.devices[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimDevicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.devices)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimDevicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimDevicesIdIndexMutationKey() {
  return ['dcim', '/dcim/devices/:id/', 'PATCH'] as const
}

export function getPatchDcimDevicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.devices)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimDevicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim.devices[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimDevicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.devices)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimDevicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimDevicesIdGraphsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/devices/:id/graphs/', toValue(args)] as const
}

export function getDcimDevicesIdGraphsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDevicesIdGraphsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.devices[':id'].graphs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDevicesIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDevicesIdGraphsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDevicesIdGraphsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDevicesIdGraphsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.devices[':id'].graphs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimDevicesIdNapalmIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/devices/:id/napalm/', toValue(args)] as const
}

export function getDcimDevicesIdNapalmIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimDevicesIdNapalmIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.devices[':id'].napalm.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimDevicesIdNapalmIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimDevicesIdNapalmIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDevicesIdNapalmIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimDevicesIdNapalmIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.devices[':id'].napalm.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimFrontPortTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/front-port-templates/', toValue(args)] as const
}

export function getDcimFrontPortTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimFrontPortTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['front-port-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimFrontPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimFrontPortTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimFrontPortTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimFrontPortTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['front-port-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimFrontPortTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/front-port-templates/', 'POST'] as const
}

export function getPostDcimFrontPortTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimFrontPortTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['front-port-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimFrontPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimFrontPortTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimFrontPortTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/front-port-templates/:id/', toValue(args)] as const
}

export function getDcimFrontPortTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimFrontPortTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['front-port-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimFrontPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimFrontPortTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimFrontPortTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimFrontPortTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['front-port-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimFrontPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/front-port-templates/:id/', 'PUT'] as const
}

export function getPutDcimFrontPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimFrontPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['front-port-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimFrontPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimFrontPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimFrontPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/front-port-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimFrontPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimFrontPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['front-port-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.dcim['front-port-templates'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimFrontPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['front-port-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimFrontPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimFrontPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/front-port-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimFrontPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimFrontPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['front-port-templates'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.dcim['front-port-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimFrontPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimFrontPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimFrontPortsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>>,
) {
  return ['dcim', '/dcim/front-ports/', toValue(args)] as const
}

export function getDcimFrontPortsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimFrontPortsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['front-ports'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimFrontPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimFrontPortsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimFrontPortsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimFrontPortsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['front-ports'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimFrontPortsIndexMutationKey() {
  return ['dcim', '/dcim/front-ports/', 'POST'] as const
}

export function getPostDcimFrontPortsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimFrontPortsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['front-ports'].index.$post(args, options))
    },
  })
}

export function usePostDcimFrontPortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['front-ports']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimFrontPortsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimFrontPortsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/front-ports/:id/', toValue(args)] as const
}

export function getDcimFrontPortsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimFrontPortsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['front-ports'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimFrontPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimFrontPortsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimFrontPortsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimFrontPortsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['front-ports'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimFrontPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/front-ports/:id/', 'PUT'] as const
}

export function getPutDcimFrontPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimFrontPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['front-ports'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimFrontPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimFrontPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimFrontPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/front-ports/:id/', 'DELETE'] as const
}

export function getDeleteDcimFrontPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimFrontPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['front-ports'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimFrontPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimFrontPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimFrontPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/front-ports/:id/', 'PATCH'] as const
}

export function getPatchDcimFrontPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimFrontPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['front-ports'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimFrontPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimFrontPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimFrontPortsIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/front-ports/:id/trace/', toValue(args)] as const
}

export function getDcimFrontPortsIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimFrontPortsIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['front-ports'][':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimFrontPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimFrontPortsIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimFrontPortsIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimFrontPortsIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['front-ports'][':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimInterfaceConnectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/interface-connections/', toValue(args)] as const
}

export function getDcimInterfaceConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfaceConnectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['interface-connections'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfaceConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimInterfaceConnectionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfaceConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfaceConnectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['interface-connections'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimInterfaceTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/interface-templates/', toValue(args)] as const
}

export function getDcimInterfaceTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfaceTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['interface-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfaceTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimInterfaceTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfaceTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfaceTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['interface-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimInterfaceTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/interface-templates/', 'POST'] as const
}

export function getPostDcimInterfaceTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimInterfaceTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['interface-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimInterfaceTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['interface-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimInterfaceTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimInterfaceTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/interface-templates/:id/', toValue(args)] as const
}

export function getDcimInterfaceTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfaceTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['interface-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfaceTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimInterfaceTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfaceTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfaceTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['interface-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimInterfaceTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/interface-templates/:id/', 'PUT'] as const
}

export function getPutDcimInterfaceTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimInterfaceTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['interface-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimInterfaceTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimInterfaceTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimInterfaceTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/interface-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimInterfaceTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimInterfaceTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['interface-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.dcim['interface-templates'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimInterfaceTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['interface-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimInterfaceTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimInterfaceTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/interface-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimInterfaceTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimInterfaceTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['interface-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimInterfaceTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimInterfaceTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimInterfacesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.interfaces.index.$get>>,
) {
  return ['dcim', '/dcim/interfaces/', toValue(args)] as const
}

export function getDcimInterfacesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.interfaces.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfacesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.interfaces.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfacesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.interfaces.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimInterfacesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfacesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfacesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.interfaces.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimInterfacesIndexMutationKey() {
  return ['dcim', '/dcim/interfaces/', 'POST'] as const
}

export function getPostDcimInterfacesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dcim.interfaces.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimInterfacesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.interfaces.index.$post>) {
      return parseResponse(client.dcim.interfaces.index.$post(args, options))
    },
  })
}

export function usePostDcimInterfacesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.interfaces.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimInterfacesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimInterfacesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/interfaces/:id/', toValue(args)] as const
}

export function getDcimInterfacesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfacesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.interfaces[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfacesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimInterfacesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfacesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfacesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.interfaces[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimInterfacesIdIndexMutationKey() {
  return ['dcim', '/dcim/interfaces/:id/', 'PUT'] as const
}

export function getPutDcimInterfacesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimInterfacesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim.interfaces[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimInterfacesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimInterfacesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimInterfacesIdIndexMutationKey() {
  return ['dcim', '/dcim/interfaces/:id/', 'DELETE'] as const
}

export function getDeleteDcimInterfacesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimInterfacesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.interfaces[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimInterfacesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimInterfacesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimInterfacesIdIndexMutationKey() {
  return ['dcim', '/dcim/interfaces/:id/', 'PATCH'] as const
}

export function getPatchDcimInterfacesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimInterfacesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim.interfaces[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimInterfacesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimInterfacesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimInterfacesIdGraphsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/interfaces/:id/graphs/', toValue(args)] as const
}

export function getDcimInterfacesIdGraphsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfacesIdGraphsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.interfaces[':id'].graphs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfacesIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimInterfacesIdGraphsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfacesIdGraphsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfacesIdGraphsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.interfaces[':id'].graphs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimInterfacesIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/interfaces/:id/trace/', toValue(args)] as const
}

export function getDcimInterfacesIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInterfacesIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.interfaces[':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInterfacesIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimInterfacesIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfacesIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInterfacesIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.interfaces[':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimInventoryItemsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/inventory-items/', toValue(args)] as const
}

export function getDcimInventoryItemsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInventoryItemsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['inventory-items'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInventoryItemsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimInventoryItemsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInventoryItemsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInventoryItemsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['inventory-items'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimInventoryItemsIndexMutationKey() {
  return ['dcim', '/dcim/inventory-items/', 'POST'] as const
}

export function getPostDcimInventoryItemsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimInventoryItemsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['inventory-items'].index.$post(args, options))
    },
  })
}

export function usePostDcimInventoryItemsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['inventory-items']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimInventoryItemsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimInventoryItemsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/inventory-items/:id/', toValue(args)] as const
}

export function getDcimInventoryItemsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimInventoryItemsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['inventory-items'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimInventoryItemsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimInventoryItemsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInventoryItemsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimInventoryItemsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['inventory-items'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimInventoryItemsIdIndexMutationKey() {
  return ['dcim', '/dcim/inventory-items/:id/', 'PUT'] as const
}

export function getPutDcimInventoryItemsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimInventoryItemsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['inventory-items'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimInventoryItemsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimInventoryItemsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimInventoryItemsIdIndexMutationKey() {
  return ['dcim', '/dcim/inventory-items/:id/', 'DELETE'] as const
}

export function getDeleteDcimInventoryItemsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimInventoryItemsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['inventory-items'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimInventoryItemsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimInventoryItemsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimInventoryItemsIdIndexMutationKey() {
  return ['dcim', '/dcim/inventory-items/:id/', 'PATCH'] as const
}

export function getPatchDcimInventoryItemsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimInventoryItemsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['inventory-items'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimInventoryItemsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimInventoryItemsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimManufacturersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.manufacturers.index.$get>>,
) {
  return ['dcim', '/dcim/manufacturers/', toValue(args)] as const
}

export function getDcimManufacturersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.manufacturers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimManufacturersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.manufacturers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimManufacturersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.manufacturers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimManufacturersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimManufacturersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimManufacturersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.manufacturers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimManufacturersIndexMutationKey() {
  return ['dcim', '/dcim/manufacturers/', 'POST'] as const
}

export function getPostDcimManufacturersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dcim.manufacturers.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimManufacturersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.manufacturers.index.$post>) {
      return parseResponse(client.dcim.manufacturers.index.$post(args, options))
    },
  })
}

export function usePostDcimManufacturersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.dcim.manufacturers.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.manufacturers.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimManufacturersIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimManufacturersIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/manufacturers/:id/', toValue(args)] as const
}

export function getDcimManufacturersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimManufacturersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.manufacturers[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimManufacturersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimManufacturersIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimManufacturersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimManufacturersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.manufacturers[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimManufacturersIdIndexMutationKey() {
  return ['dcim', '/dcim/manufacturers/:id/', 'PUT'] as const
}

export function getPutDcimManufacturersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimManufacturersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim.manufacturers[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimManufacturersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimManufacturersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimManufacturersIdIndexMutationKey() {
  return ['dcim', '/dcim/manufacturers/:id/', 'DELETE'] as const
}

export function getDeleteDcimManufacturersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimManufacturersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.manufacturers[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimManufacturersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimManufacturersIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimManufacturersIdIndexMutationKey() {
  return ['dcim', '/dcim/manufacturers/:id/', 'PATCH'] as const
}

export function getPatchDcimManufacturersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimManufacturersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim.manufacturers[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimManufacturersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimManufacturersIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPlatformsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.platforms.index.$get>>,
) {
  return ['dcim', '/dcim/platforms/', toValue(args)] as const
}

export function getDcimPlatformsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.platforms.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPlatformsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.platforms.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPlatformsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.platforms.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimPlatformsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPlatformsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPlatformsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.platforms.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPlatformsIndexMutationKey() {
  return ['dcim', '/dcim/platforms/', 'POST'] as const
}

export function getPostDcimPlatformsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dcim.platforms.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPlatformsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.platforms.index.$post>) {
      return parseResponse(client.dcim.platforms.index.$post(args, options))
    },
  })
}

export function usePostDcimPlatformsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.platforms.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPlatformsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPlatformsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/platforms/:id/', toValue(args)] as const
}

export function getDcimPlatformsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPlatformsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.platforms[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPlatformsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPlatformsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPlatformsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPlatformsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.platforms[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPlatformsIdIndexMutationKey() {
  return ['dcim', '/dcim/platforms/:id/', 'PUT'] as const
}

export function getPutDcimPlatformsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPlatformsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim.platforms[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPlatformsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPlatformsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPlatformsIdIndexMutationKey() {
  return ['dcim', '/dcim/platforms/:id/', 'DELETE'] as const
}

export function getDeleteDcimPlatformsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPlatformsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.platforms[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimPlatformsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPlatformsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPlatformsIdIndexMutationKey() {
  return ['dcim', '/dcim/platforms/:id/', 'PATCH'] as const
}

export function getPatchDcimPlatformsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPlatformsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim.platforms[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPlatformsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPlatformsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerConnectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-connections/', toValue(args)] as const
}

export function getDcimPowerConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerConnectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-connections'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerConnectionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerConnectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-connections'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimPowerFeedsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>>,
) {
  return ['dcim', '/dcim/power-feeds/', toValue(args)] as const
}

export function getDcimPowerFeedsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerFeedsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-feeds'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerFeedsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerFeedsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerFeedsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerFeedsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-feeds'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPowerFeedsIndexMutationKey() {
  return ['dcim', '/dcim/power-feeds/', 'POST'] as const
}

export function getPostDcimPowerFeedsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPowerFeedsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['power-feeds'].index.$post(args, options))
    },
  })
}

export function usePostDcimPowerFeedsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-feeds']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPowerFeedsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerFeedsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-feeds/:id/', toValue(args)] as const
}

export function getDcimPowerFeedsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerFeedsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-feeds'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerFeedsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerFeedsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerFeedsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerFeedsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-feeds'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPowerFeedsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-feeds/:id/', 'PUT'] as const
}

export function getPutDcimPowerFeedsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPowerFeedsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['power-feeds'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPowerFeedsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPowerFeedsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPowerFeedsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-feeds/:id/', 'DELETE'] as const
}

export function getDeleteDcimPowerFeedsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPowerFeedsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['power-feeds'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimPowerFeedsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPowerFeedsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPowerFeedsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-feeds/:id/', 'PATCH'] as const
}

export function getPatchDcimPowerFeedsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPowerFeedsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['power-feeds'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPowerFeedsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPowerFeedsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerOutletTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-outlet-templates/', toValue(args)] as const
}

export function getDcimPowerOutletTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerOutletTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-outlet-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerOutletTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerOutletTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerOutletTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerOutletTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-outlet-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPowerOutletTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/power-outlet-templates/', 'POST'] as const
}

export function getPostDcimPowerOutletTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPowerOutletTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['power-outlet-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimPowerOutletTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPowerOutletTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerOutletTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-outlet-templates/:id/', toValue(args)] as const
}

export function getDcimPowerOutletTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerOutletTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-outlet-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerOutletTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimPowerOutletTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerOutletTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerOutletTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-outlet-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPowerOutletTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/power-outlet-templates/:id/', 'PUT'] as const
}

export function getPutDcimPowerOutletTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPowerOutletTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.dcim['power-outlet-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPowerOutletTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPowerOutletTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPowerOutletTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/power-outlet-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimPowerOutletTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPowerOutletTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.dcim['power-outlet-templates'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteDcimPowerOutletTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPowerOutletTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPowerOutletTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/power-outlet-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimPowerOutletTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPowerOutletTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.dcim['power-outlet-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPowerOutletTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dcim)['power-outlet-templates'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPowerOutletTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerOutletsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>>,
) {
  return ['dcim', '/dcim/power-outlets/', toValue(args)] as const
}

export function getDcimPowerOutletsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerOutletsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-outlets'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerOutletsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerOutletsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerOutletsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerOutletsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-outlets'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPowerOutletsIndexMutationKey() {
  return ['dcim', '/dcim/power-outlets/', 'POST'] as const
}

export function getPostDcimPowerOutletsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPowerOutletsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['power-outlets'].index.$post(args, options))
    },
  })
}

export function usePostDcimPowerOutletsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-outlets']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPowerOutletsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerOutletsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-outlets/:id/', toValue(args)] as const
}

export function getDcimPowerOutletsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerOutletsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-outlets'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerOutletsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerOutletsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerOutletsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerOutletsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-outlets'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPowerOutletsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-outlets/:id/', 'PUT'] as const
}

export function getPutDcimPowerOutletsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPowerOutletsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['power-outlets'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPowerOutletsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPowerOutletsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPowerOutletsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-outlets/:id/', 'DELETE'] as const
}

export function getDeleteDcimPowerOutletsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPowerOutletsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['power-outlets'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimPowerOutletsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPowerOutletsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPowerOutletsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-outlets/:id/', 'PATCH'] as const
}

export function getPatchDcimPowerOutletsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPowerOutletsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['power-outlets'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPowerOutletsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPowerOutletsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerOutletsIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-outlets/:id/trace/', toValue(args)] as const
}

export function getDcimPowerOutletsIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerOutletsIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-outlets'][':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerOutletsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimPowerOutletsIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerOutletsIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerOutletsIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-outlets'][':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimPowerPanelsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>>,
) {
  return ['dcim', '/dcim/power-panels/', toValue(args)] as const
}

export function getDcimPowerPanelsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPanelsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-panels'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPanelsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerPanelsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPanelsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPanelsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-panels'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPowerPanelsIndexMutationKey() {
  return ['dcim', '/dcim/power-panels/', 'POST'] as const
}

export function getPostDcimPowerPanelsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPowerPanelsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['power-panels'].index.$post(args, options))
    },
  })
}

export function usePostDcimPowerPanelsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-panels']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPowerPanelsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerPanelsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-panels/:id/', toValue(args)] as const
}

export function getDcimPowerPanelsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPanelsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-panels'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPanelsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerPanelsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPanelsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPanelsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-panels'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPowerPanelsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-panels/:id/', 'PUT'] as const
}

export function getPutDcimPowerPanelsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPowerPanelsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['power-panels'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPowerPanelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPowerPanelsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPowerPanelsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-panels/:id/', 'DELETE'] as const
}

export function getDeleteDcimPowerPanelsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPowerPanelsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['power-panels'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimPowerPanelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPowerPanelsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPowerPanelsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-panels/:id/', 'PATCH'] as const
}

export function getPatchDcimPowerPanelsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPowerPanelsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['power-panels'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPowerPanelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPowerPanelsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerPortTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-port-templates/', toValue(args)] as const
}

export function getDcimPowerPortTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPortTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-port-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerPortTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPortTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPortTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-port-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPowerPortTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/power-port-templates/', 'POST'] as const
}

export function getPostDcimPowerPortTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPowerPortTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['power-port-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimPowerPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPowerPortTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerPortTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-port-templates/:id/', toValue(args)] as const
}

export function getDcimPowerPortTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPortTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-port-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimPowerPortTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPortTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPortTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-port-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPowerPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/power-port-templates/:id/', 'PUT'] as const
}

export function getPutDcimPowerPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPowerPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['power-port-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPowerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPowerPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPowerPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/power-port-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimPowerPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPowerPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['power-port-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.dcim['power-port-templates'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimPowerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['power-port-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPowerPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPowerPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/power-port-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimPowerPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPowerPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['power-port-templates'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.dcim['power-port-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPowerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPowerPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerPortsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>>,
) {
  return ['dcim', '/dcim/power-ports/', toValue(args)] as const
}

export function getDcimPowerPortsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPortsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-ports'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerPortsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPortsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPortsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-ports'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimPowerPortsIndexMutationKey() {
  return ['dcim', '/dcim/power-ports/', 'POST'] as const
}

export function getPostDcimPowerPortsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimPowerPortsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['power-ports'].index.$post(args, options))
    },
  })
}

export function usePostDcimPowerPortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-ports']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimPowerPortsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerPortsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-ports/:id/', toValue(args)] as const
}

export function getDcimPowerPortsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPortsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-ports'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimPowerPortsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPortsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPortsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-ports'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimPowerPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-ports/:id/', 'PUT'] as const
}

export function getPutDcimPowerPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimPowerPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['power-ports'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimPowerPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimPowerPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimPowerPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-ports/:id/', 'DELETE'] as const
}

export function getDeleteDcimPowerPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimPowerPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['power-ports'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimPowerPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimPowerPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimPowerPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/power-ports/:id/', 'PATCH'] as const
}

export function getPatchDcimPowerPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimPowerPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['power-ports'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimPowerPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimPowerPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimPowerPortsIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/power-ports/:id/trace/', toValue(args)] as const
}

export function getDcimPowerPortsIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimPowerPortsIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['power-ports'][':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimPowerPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimPowerPortsIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPowerPortsIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimPowerPortsIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['power-ports'][':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimRackGroupsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>>,
) {
  return ['dcim', '/dcim/rack-groups/', toValue(args)] as const
}

export function getDcimRackGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRackGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rack-groups'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRackGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRackGroupsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRackGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRackGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rack-groups'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRackGroupsIndexMutationKey() {
  return ['dcim', '/dcim/rack-groups/', 'POST'] as const
}

export function getPostDcimRackGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-groups']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRackGroupsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['rack-groups'].index.$post(args, options))
    },
  })
}

export function usePostDcimRackGroupsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-groups']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRackGroupsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRackGroupsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rack-groups/:id/', toValue(args)] as const
}

export function getDcimRackGroupsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRackGroupsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rack-groups'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRackGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRackGroupsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRackGroupsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRackGroupsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rack-groups'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRackGroupsIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-groups/:id/', 'PUT'] as const
}

export function getPutDcimRackGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRackGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['rack-groups'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRackGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRackGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRackGroupsIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-groups/:id/', 'DELETE'] as const
}

export function getDeleteDcimRackGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRackGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['rack-groups'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRackGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRackGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRackGroupsIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-groups/:id/', 'PATCH'] as const
}

export function getPatchDcimRackGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRackGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['rack-groups'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRackGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRackGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRackReservationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rack-reservations/', toValue(args)] as const
}

export function getDcimRackReservationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRackReservationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rack-reservations'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRackReservationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRackReservationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRackReservationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRackReservationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rack-reservations'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRackReservationsIndexMutationKey() {
  return ['dcim', '/dcim/rack-reservations/', 'POST'] as const
}

export function getPostDcimRackReservationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRackReservationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['rack-reservations'].index.$post(args, options))
    },
  })
}

export function usePostDcimRackReservationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRackReservationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRackReservationsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rack-reservations/:id/', toValue(args)] as const
}

export function getDcimRackReservationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRackReservationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rack-reservations'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRackReservationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimRackReservationsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRackReservationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRackReservationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rack-reservations'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRackReservationsIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-reservations/:id/', 'PUT'] as const
}

export function getPutDcimRackReservationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRackReservationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['rack-reservations'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRackReservationsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRackReservationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRackReservationsIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-reservations/:id/', 'DELETE'] as const
}

export function getDeleteDcimRackReservationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRackReservationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['rack-reservations'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRackReservationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRackReservationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRackReservationsIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-reservations/:id/', 'PATCH'] as const
}

export function getPatchDcimRackReservationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRackReservationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['rack-reservations'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRackReservationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRackReservationsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRackRolesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>>,
) {
  return ['dcim', '/dcim/rack-roles/', toValue(args)] as const
}

export function getDcimRackRolesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRackRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rack-roles'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRackRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRackRolesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRackRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRackRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rack-roles'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRackRolesIndexMutationKey() {
  return ['dcim', '/dcim/rack-roles/', 'POST'] as const
}

export function getPostDcimRackRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRackRolesIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']>) {
      return parseResponse(client.dcim['rack-roles'].index.$post(args, options))
    },
  })
}

export function usePostDcimRackRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-roles']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRackRolesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRackRolesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rack-roles/:id/', toValue(args)] as const
}

export function getDcimRackRolesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRackRolesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rack-roles'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRackRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRackRolesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRackRolesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRackRolesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rack-roles'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRackRolesIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-roles/:id/', 'PUT'] as const
}

export function getPutDcimRackRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRackRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['rack-roles'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRackRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRackRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRackRolesIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-roles/:id/', 'DELETE'] as const
}

export function getDeleteDcimRackRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRackRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['rack-roles'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRackRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRackRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRackRolesIdIndexMutationKey() {
  return ['dcim', '/dcim/rack-roles/:id/', 'PATCH'] as const
}

export function getPatchDcimRackRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRackRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['rack-roles'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRackRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRackRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRacksIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.racks.index.$get>>,
) {
  return ['dcim', '/dcim/racks/', toValue(args)] as const
}

export function getDcimRacksIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.racks.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRacksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.racks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRacksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.racks.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimRacksIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRacksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRacksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.racks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRacksIndexMutationKey() {
  return ['dcim', '/dcim/racks/', 'POST'] as const
}

export function getPostDcimRacksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dcim.racks.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRacksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.racks.index.$post>) {
      return parseResponse(client.dcim.racks.index.$post(args, options))
    },
  })
}

export function usePostDcimRacksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.racks.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRacksIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRacksIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/racks/:id/', toValue(args)] as const
}

export function getDcimRacksIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRacksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.racks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRacksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRacksIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRacksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRacksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.racks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRacksIdIndexMutationKey() {
  return ['dcim', '/dcim/racks/:id/', 'PUT'] as const
}

export function getPutDcimRacksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.racks)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRacksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$put']>) {
      return parseResponse(client.dcim.racks[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRacksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.racks)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRacksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRacksIdIndexMutationKey() {
  return ['dcim', '/dcim/racks/:id/', 'DELETE'] as const
}

export function getDeleteDcimRacksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.racks)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRacksIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.racks[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRacksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.racks)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRacksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRacksIdIndexMutationKey() {
  return ['dcim', '/dcim/racks/:id/', 'PATCH'] as const
}

export function getPatchDcimRacksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.racks)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRacksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$patch']>) {
      return parseResponse(client.dcim.racks[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRacksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.racks)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRacksIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRacksIdElevationIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/racks/:id/elevation/', toValue(args)] as const
}

export function getDcimRacksIdElevationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRacksIdElevationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.racks[':id'].elevation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRacksIdElevationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRacksIdElevationIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRacksIdElevationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRacksIdElevationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.racks[':id'].elevation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimRearPortTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rear-port-templates/', toValue(args)] as const
}

export function getDcimRearPortTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRearPortTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rear-port-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRearPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRearPortTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRearPortTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRearPortTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rear-port-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRearPortTemplatesIndexMutationKey() {
  return ['dcim', '/dcim/rear-port-templates/', 'POST'] as const
}

export function getPostDcimRearPortTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRearPortTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['rear-port-templates'].index.$post(args, options))
    },
  })
}

export function usePostDcimRearPortTemplatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRearPortTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRearPortTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rear-port-templates/:id/', toValue(args)] as const
}

export function getDcimRearPortTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRearPortTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rear-port-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRearPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimRearPortTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRearPortTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRearPortTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rear-port-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRearPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/rear-port-templates/:id/', 'PUT'] as const
}

export function getPutDcimRearPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRearPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['rear-port-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRearPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRearPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRearPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/rear-port-templates/:id/', 'DELETE'] as const
}

export function getDeleteDcimRearPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRearPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.dcim['rear-port-templates'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRearPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRearPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRearPortTemplatesIdIndexMutationKey() {
  return ['dcim', '/dcim/rear-port-templates/:id/', 'PATCH'] as const
}

export function getPatchDcimRearPortTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRearPortTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['rear-port-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRearPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRearPortTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRearPortsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>>,
) {
  return ['dcim', '/dcim/rear-ports/', toValue(args)] as const
}

export function getDcimRearPortsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRearPortsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rear-ports'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRearPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRearPortsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRearPortsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRearPortsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rear-ports'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRearPortsIndexMutationKey() {
  return ['dcim', '/dcim/rear-ports/', 'POST'] as const
}

export function getPostDcimRearPortsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRearPortsIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']>) {
      return parseResponse(client.dcim['rear-ports'].index.$post(args, options))
    },
  })
}

export function usePostDcimRearPortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rear-ports']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRearPortsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRearPortsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rear-ports/:id/', toValue(args)] as const
}

export function getDcimRearPortsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRearPortsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rear-ports'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRearPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRearPortsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRearPortsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRearPortsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rear-ports'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRearPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/rear-ports/:id/', 'PUT'] as const
}

export function getPutDcimRearPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRearPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['rear-ports'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRearPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRearPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRearPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/rear-ports/:id/', 'DELETE'] as const
}

export function getDeleteDcimRearPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRearPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['rear-ports'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRearPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRearPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRearPortsIdIndexMutationKey() {
  return ['dcim', '/dcim/rear-ports/:id/', 'PATCH'] as const
}

export function getPatchDcimRearPortsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRearPortsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['rear-ports'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRearPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRearPortsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRearPortsIdTraceIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/rear-ports/:id/trace/', toValue(args)] as const
}

export function getDcimRearPortsIdTraceIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRearPortsIdTraceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['rear-ports'][':id'].trace.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRearPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDcimRearPortsIdTraceIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRearPortsIdTraceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRearPortsIdTraceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['rear-ports'][':id'].trace.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimRegionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.regions.index.$get>>,
) {
  return ['dcim', '/dcim/regions/', toValue(args)] as const
}

export function getDcimRegionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.regions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRegionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.regions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRegionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.regions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimRegionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRegionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRegionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.regions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimRegionsIndexMutationKey() {
  return ['dcim', '/dcim/regions/', 'POST'] as const
}

export function getPostDcimRegionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dcim.regions.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimRegionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.regions.index.$post>) {
      return parseResponse(client.dcim.regions.index.$post(args, options))
    },
  })
}

export function usePostDcimRegionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.regions.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimRegionsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimRegionsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/regions/:id/', toValue(args)] as const
}

export function getDcimRegionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimRegionsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.regions[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimRegionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimRegionsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRegionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimRegionsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.regions[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimRegionsIdIndexMutationKey() {
  return ['dcim', '/dcim/regions/:id/', 'PUT'] as const
}

export function getPutDcimRegionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.regions)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimRegionsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$put']>) {
      return parseResponse(client.dcim.regions[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimRegionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.regions)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimRegionsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimRegionsIdIndexMutationKey() {
  return ['dcim', '/dcim/regions/:id/', 'DELETE'] as const
}

export function getDeleteDcimRegionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.regions)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimRegionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.regions[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimRegionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.regions)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimRegionsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimRegionsIdIndexMutationKey() {
  return ['dcim', '/dcim/regions/:id/', 'PATCH'] as const
}

export function getPatchDcimRegionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.regions)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimRegionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim.regions[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimRegionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.regions)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimRegionsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimSitesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.sites.index.$get>>,
) {
  return ['dcim', '/dcim/sites/', toValue(args)] as const
}

export function getDcimSitesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.sites.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimSitesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.sites.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimSitesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dcim.sites.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>
            >
          >,
          ReturnType<typeof getDcimSitesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimSitesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimSitesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.sites.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimSitesIndexMutationKey() {
  return ['dcim', '/dcim/sites/', 'POST'] as const
}

export function getPostDcimSitesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dcim.sites.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimSitesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dcim.sites.index.$post>) {
      return parseResponse(client.dcim.sites.index.$post(args, options))
    },
  })
}

export function usePostDcimSitesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dcim.sites.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimSitesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimSitesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>>,
) {
  return ['dcim', '/dcim/sites/:id/', toValue(args)] as const
}

export function getDcimSitesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimSitesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.sites[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimSitesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimSitesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimSitesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimSitesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.sites[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimSitesIdIndexMutationKey() {
  return ['dcim', '/dcim/sites/:id/', 'PUT'] as const
}

export function getPutDcimSitesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.sites)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimSitesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$put']>) {
      return parseResponse(client.dcim.sites[':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimSitesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.sites)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimSitesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimSitesIdIndexMutationKey() {
  return ['dcim', '/dcim/sites/:id/', 'DELETE'] as const
}

export function getDeleteDcimSitesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim.sites)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimSitesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim.sites[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimSitesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim.sites)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimSitesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimSitesIdIndexMutationKey() {
  return ['dcim', '/dcim/sites/:id/', 'PATCH'] as const
}

export function getPatchDcimSitesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim.sites)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimSitesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$patch']>) {
      return parseResponse(client.dcim.sites[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimSitesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim.sites)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimSitesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimSitesIdGraphsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/sites/:id/graphs/', toValue(args)] as const
}

export function getDcimSitesIdGraphsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimSitesIdGraphsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim.sites[':id'].graphs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimSitesIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimSitesIdGraphsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimSitesIdGraphsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimSitesIdGraphsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim.sites[':id'].graphs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDcimVirtualChassisIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/virtual-chassis/', toValue(args)] as const
}

export function getDcimVirtualChassisIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimVirtualChassisIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['virtual-chassis'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimVirtualChassisIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimVirtualChassisIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimVirtualChassisIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimVirtualChassisIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['virtual-chassis'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDcimVirtualChassisIndexMutationKey() {
  return ['dcim', '/dcim/virtual-chassis/', 'POST'] as const
}

export function getPostDcimVirtualChassisIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDcimVirtualChassisIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']>,
    ) {
      return parseResponse(client.dcim['virtual-chassis'].index.$post(args, options))
    },
  })
}

export function usePostDcimVirtualChassisIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDcimVirtualChassisIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDcimVirtualChassisIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>
  >,
) {
  return ['dcim', '/dcim/virtual-chassis/:id/', toValue(args)] as const
}

export function getDcimVirtualChassisIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDcimVirtualChassisIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dcim['virtual-chassis'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDcimVirtualChassisIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDcimVirtualChassisIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimVirtualChassisIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDcimVirtualChassisIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dcim['virtual-chassis'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDcimVirtualChassisIdIndexMutationKey() {
  return ['dcim', '/dcim/virtual-chassis/:id/', 'PUT'] as const
}

export function getPutDcimVirtualChassisIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDcimVirtualChassisIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.dcim['virtual-chassis'][':id'].index.$put(args, options))
    },
  })
}

export function usePutDcimVirtualChassisIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDcimVirtualChassisIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDcimVirtualChassisIdIndexMutationKey() {
  return ['dcim', '/dcim/virtual-chassis/:id/', 'DELETE'] as const
}

export function getDeleteDcimVirtualChassisIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDcimVirtualChassisIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.dcim['virtual-chassis'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteDcimVirtualChassisIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDcimVirtualChassisIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDcimVirtualChassisIdIndexMutationKey() {
  return ['dcim', '/dcim/virtual-chassis/:id/', 'PATCH'] as const
}

export function getPatchDcimVirtualChassisIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDcimVirtualChassisIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.dcim['virtual-chassis'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchDcimVirtualChassisIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDcimVirtualChassisIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasCustomFieldChoicesIndexQueryKey() {
  return ['extras', '/extras/_custom_field_choices/'] as const
}

export function getExtrasCustomFieldChoicesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExtrasCustomFieldChoicesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras._custom_field_choices.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasCustomFieldChoicesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
              >
            >
          >,
          ReturnType<typeof getExtrasCustomFieldChoicesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasCustomFieldChoicesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExtrasCustomFieldChoicesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.extras._custom_field_choices.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasCustomFieldChoicesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
  >,
) {
  return ['extras', '/extras/_custom_field_choices/:id/', toValue(args)] as const
}

export function getExtrasCustomFieldChoicesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasCustomFieldChoicesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras._custom_field_choices[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasCustomFieldChoicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExtrasCustomFieldChoicesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasCustomFieldChoicesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasCustomFieldChoicesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras._custom_field_choices[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasConfigContextsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>
  >,
) {
  return ['extras', '/extras/config-contexts/', toValue(args)] as const
}

export function getExtrasConfigContextsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasConfigContextsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['config-contexts'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasConfigContextsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasConfigContextsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasConfigContextsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasConfigContextsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['config-contexts'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtrasConfigContextsIndexMutationKey() {
  return ['extras', '/extras/config-contexts/', 'POST'] as const
}

export function getPostExtrasConfigContextsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExtrasConfigContextsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']>,
    ) {
      return parseResponse(client.extras['config-contexts'].index.$post(args, options))
    },
  })
}

export function usePostExtrasConfigContextsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['config-contexts']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtrasConfigContextsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasConfigContextsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>
  >,
) {
  return ['extras', '/extras/config-contexts/:id/', toValue(args)] as const
}

export function getExtrasConfigContextsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasConfigContextsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['config-contexts'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasConfigContextsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExtrasConfigContextsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasConfigContextsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasConfigContextsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['config-contexts'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutExtrasConfigContextsIdIndexMutationKey() {
  return ['extras', '/extras/config-contexts/:id/', 'PUT'] as const
}

export function getPutExtrasConfigContextsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExtrasConfigContextsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.extras['config-contexts'][':id'].index.$put(args, options))
    },
  })
}

export function usePutExtrasConfigContextsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExtrasConfigContextsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteExtrasConfigContextsIdIndexMutationKey() {
  return ['extras', '/extras/config-contexts/:id/', 'DELETE'] as const
}

export function getDeleteExtrasConfigContextsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtrasConfigContextsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.extras['config-contexts'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteExtrasConfigContextsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExtrasConfigContextsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchExtrasConfigContextsIdIndexMutationKey() {
  return ['extras', '/extras/config-contexts/:id/', 'PATCH'] as const
}

export function getPatchExtrasConfigContextsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtrasConfigContextsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.extras['config-contexts'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchExtrasConfigContextsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExtrasConfigContextsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasExportTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>
  >,
) {
  return ['extras', '/extras/export-templates/', toValue(args)] as const
}

export function getExtrasExportTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasExportTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['export-templates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasExportTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasExportTemplatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasExportTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasExportTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['export-templates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtrasExportTemplatesIndexMutationKey() {
  return ['extras', '/extras/export-templates/', 'POST'] as const
}

export function getPostExtrasExportTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['export-templates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExtrasExportTemplatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['export-templates']['index']['$post']>,
    ) {
      return parseResponse(client.extras['export-templates'].index.$post(args, options))
    },
  })
}

export function usePostExtrasExportTemplatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['export-templates']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtrasExportTemplatesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasExportTemplatesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>
  >,
) {
  return ['extras', '/extras/export-templates/:id/', toValue(args)] as const
}

export function getExtrasExportTemplatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasExportTemplatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['export-templates'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasExportTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExtrasExportTemplatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasExportTemplatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasExportTemplatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['export-templates'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutExtrasExportTemplatesIdIndexMutationKey() {
  return ['extras', '/extras/export-templates/:id/', 'PUT'] as const
}

export function getPutExtrasExportTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExtrasExportTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.extras['export-templates'][':id'].index.$put(args, options))
    },
  })
}

export function usePutExtrasExportTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExtrasExportTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteExtrasExportTemplatesIdIndexMutationKey() {
  return ['extras', '/extras/export-templates/:id/', 'DELETE'] as const
}

export function getDeleteExtrasExportTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtrasExportTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.extras['export-templates'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteExtrasExportTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.extras)['export-templates'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExtrasExportTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchExtrasExportTemplatesIdIndexMutationKey() {
  return ['extras', '/extras/export-templates/:id/', 'PATCH'] as const
}

export function getPatchExtrasExportTemplatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtrasExportTemplatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.extras['export-templates'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchExtrasExportTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExtrasExportTemplatesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasGraphsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extras.graphs.index.$get>>,
) {
  return ['extras', '/extras/graphs/', toValue(args)] as const
}

export function getExtrasGraphsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extras.graphs.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasGraphsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.graphs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasGraphsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extras.graphs.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
            >
          >,
          ReturnType<typeof getExtrasGraphsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasGraphsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasGraphsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.graphs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtrasGraphsIndexMutationKey() {
  return ['extras', '/extras/graphs/', 'POST'] as const
}

export function getPostExtrasGraphsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.extras.graphs.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtrasGraphsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extras.graphs.index.$post>) {
      return parseResponse(client.extras.graphs.index.$post(args, options))
    },
  })
}

export function usePostExtrasGraphsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.extras.graphs.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtrasGraphsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasGraphsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>>,
) {
  return ['extras', '/extras/graphs/:id/', toValue(args)] as const
}

export function getExtrasGraphsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasGraphsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.graphs[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasGraphsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasGraphsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasGraphsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasGraphsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.graphs[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutExtrasGraphsIdIndexMutationKey() {
  return ['extras', '/extras/graphs/:id/', 'PUT'] as const
}

export function getPutExtrasGraphsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras.graphs)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExtrasGraphsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.extras.graphs[':id'].index.$put(args, options))
    },
  })
}

export function usePutExtrasGraphsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras.graphs)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExtrasGraphsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteExtrasGraphsIdIndexMutationKey() {
  return ['extras', '/extras/graphs/:id/', 'DELETE'] as const
}

export function getDeleteExtrasGraphsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.extras.graphs)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtrasGraphsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.extras.graphs[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteExtrasGraphsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.extras.graphs)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExtrasGraphsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchExtrasGraphsIdIndexMutationKey() {
  return ['extras', '/extras/graphs/:id/', 'PATCH'] as const
}

export function getPatchExtrasGraphsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras.graphs)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtrasGraphsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.extras.graphs[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchExtrasGraphsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras.graphs)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExtrasGraphsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasImageAttachmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>
  >,
) {
  return ['extras', '/extras/image-attachments/', toValue(args)] as const
}

export function getExtrasImageAttachmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasImageAttachmentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['image-attachments'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasImageAttachmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasImageAttachmentsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasImageAttachmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasImageAttachmentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['image-attachments'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtrasImageAttachmentsIndexMutationKey() {
  return ['extras', '/extras/image-attachments/', 'POST'] as const
}

export function getPostExtrasImageAttachmentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExtrasImageAttachmentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']>,
    ) {
      return parseResponse(client.extras['image-attachments'].index.$post(args, options))
    },
  })
}

export function usePostExtrasImageAttachmentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['image-attachments']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtrasImageAttachmentsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasImageAttachmentsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>
  >,
) {
  return ['extras', '/extras/image-attachments/:id/', toValue(args)] as const
}

export function getExtrasImageAttachmentsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasImageAttachmentsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['image-attachments'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasImageAttachmentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExtrasImageAttachmentsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasImageAttachmentsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasImageAttachmentsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['image-attachments'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutExtrasImageAttachmentsIdIndexMutationKey() {
  return ['extras', '/extras/image-attachments/:id/', 'PUT'] as const
}

export function getPutExtrasImageAttachmentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExtrasImageAttachmentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.extras['image-attachments'][':id'].index.$put(args, options))
    },
  })
}

export function usePutExtrasImageAttachmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExtrasImageAttachmentsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteExtrasImageAttachmentsIdIndexMutationKey() {
  return ['extras', '/extras/image-attachments/:id/', 'DELETE'] as const
}

export function getDeleteExtrasImageAttachmentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtrasImageAttachmentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.extras)['image-attachments'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.extras['image-attachments'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteExtrasImageAttachmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.extras)['image-attachments'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExtrasImageAttachmentsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchExtrasImageAttachmentsIdIndexMutationKey() {
  return ['extras', '/extras/image-attachments/:id/', 'PATCH'] as const
}

export function getPatchExtrasImageAttachmentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtrasImageAttachmentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.extras['image-attachments'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchExtrasImageAttachmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExtrasImageAttachmentsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasObjectChangesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>
  >,
) {
  return ['extras', '/extras/object-changes/', toValue(args)] as const
}

export function getExtrasObjectChangesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasObjectChangesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['object-changes'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasObjectChangesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasObjectChangesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasObjectChangesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasObjectChangesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['object-changes'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasObjectChangesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>
  >,
) {
  return ['extras', '/extras/object-changes/:id/', toValue(args)] as const
}

export function getExtrasObjectChangesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasObjectChangesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras['object-changes'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasObjectChangesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExtrasObjectChangesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasObjectChangesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasObjectChangesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras['object-changes'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasReportsIndexQueryKey() {
  return ['extras', '/extras/reports/'] as const
}

export function getExtrasReportsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExtrasReportsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.reports.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasReportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>
            >
          >,
          ReturnType<typeof getExtrasReportsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasReportsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExtrasReportsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.reports.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasReportsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>>,
) {
  return ['extras', '/extras/reports/:id/', toValue(args)] as const
}

export function getExtrasReportsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasReportsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.reports[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasReportsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasReportsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasReportsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasReportsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.reports[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtrasReportsIdRunIndexMutationKey() {
  return ['extras', '/extras/reports/:id/run/', 'POST'] as const
}

export function getPostExtrasReportsIdRunIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.reports)[':id']['run']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras.reports)[':id']['run']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExtrasReportsIdRunIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras.reports)[':id']['run']['index']['$post']>,
    ) {
      return parseResponse(client.extras.reports[':id'].run.index.$post(args, options))
    },
  })
}

export function usePostExtrasReportsIdRunIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.reports)[':id']['run']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras.reports)[':id']['run']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtrasReportsIdRunIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasScriptsIndexQueryKey() {
  return ['extras', '/extras/scripts/'] as const
}

export function getExtrasScriptsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExtrasScriptsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.scripts.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasScriptsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>
            >
          >,
          ReturnType<typeof getExtrasScriptsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasScriptsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExtrasScriptsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.scripts.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasScriptsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>>,
) {
  return ['extras', '/extras/scripts/:id/', toValue(args)] as const
}

export function getExtrasScriptsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasScriptsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.scripts[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasScriptsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasScriptsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasScriptsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasScriptsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.scripts[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExtrasTagsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extras.tags.index.$get>>,
) {
  return ['extras', '/extras/tags/', toValue(args)] as const
}

export function getExtrasTagsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extras.tags.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasTagsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.tags.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasTagsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extras.tags.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>
            >
          >,
          ReturnType<typeof getExtrasTagsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasTagsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasTagsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.tags.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExtrasTagsIndexMutationKey() {
  return ['extras', '/extras/tags/', 'POST'] as const
}

export function getPostExtrasTagsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.extras.tags.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtrasTagsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extras.tags.index.$post>) {
      return parseResponse(client.extras.tags.index.$post(args, options))
    },
  })
}

export function usePostExtrasTagsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.extras.tags.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtrasTagsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtrasTagsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>>,
) {
  return ['extras', '/extras/tags/:id/', toValue(args)] as const
}

export function getExtrasTagsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtrasTagsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extras.tags[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtrasTagsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtrasTagsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasTagsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtrasTagsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extras.tags[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutExtrasTagsIdIndexMutationKey() {
  return ['extras', '/extras/tags/:id/', 'PUT'] as const
}

export function getPutExtrasTagsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras.tags)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutExtrasTagsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$put']>) {
      return parseResponse(client.extras.tags[':id'].index.$put(args, options))
    },
  })
}

export function usePutExtrasTagsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras.tags)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutExtrasTagsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteExtrasTagsIdIndexMutationKey() {
  return ['extras', '/extras/tags/:id/', 'DELETE'] as const
}

export function getDeleteExtrasTagsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.extras.tags)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtrasTagsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.extras.tags[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteExtrasTagsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.extras.tags)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExtrasTagsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchExtrasTagsIdIndexMutationKey() {
  return ['extras', '/extras/tags/:id/', 'PATCH'] as const
}

export function getPatchExtrasTagsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extras.tags)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtrasTagsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.extras.tags[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchExtrasTagsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.extras.tags)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExtrasTagsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamAggregatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.aggregates.index.$get>>,
) {
  return ['ipam', '/ipam/aggregates/', toValue(args)] as const
}

export function getIpamAggregatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.aggregates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamAggregatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.aggregates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamAggregatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.aggregates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamAggregatesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamAggregatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamAggregatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.aggregates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamAggregatesIndexMutationKey() {
  return ['ipam', '/ipam/aggregates/', 'POST'] as const
}

export function getPostIpamAggregatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ipam.aggregates.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamAggregatesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.aggregates.index.$post>) {
      return parseResponse(client.ipam.aggregates.index.$post(args, options))
    },
  })
}

export function usePostIpamAggregatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.aggregates.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamAggregatesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamAggregatesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/aggregates/:id/', toValue(args)] as const
}

export function getIpamAggregatesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamAggregatesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.aggregates[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamAggregatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamAggregatesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamAggregatesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamAggregatesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.aggregates[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamAggregatesIdIndexMutationKey() {
  return ['ipam', '/ipam/aggregates/:id/', 'PUT'] as const
}

export function getPutIpamAggregatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamAggregatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.ipam.aggregates[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamAggregatesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamAggregatesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamAggregatesIdIndexMutationKey() {
  return ['ipam', '/ipam/aggregates/:id/', 'DELETE'] as const
}

export function getDeleteIpamAggregatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamAggregatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam.aggregates[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamAggregatesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamAggregatesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamAggregatesIdIndexMutationKey() {
  return ['ipam', '/ipam/aggregates/:id/', 'PATCH'] as const
}

export function getPatchIpamAggregatesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamAggregatesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.ipam.aggregates[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamAggregatesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamAggregatesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamIpAddressesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>>,
) {
  return ['ipam', '/ipam/ip-addresses/', toValue(args)] as const
}

export function getIpamIpAddressesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamIpAddressesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam['ip-addresses'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamIpAddressesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamIpAddressesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamIpAddressesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamIpAddressesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam['ip-addresses'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamIpAddressesIndexMutationKey() {
  return ['ipam', '/ipam/ip-addresses/', 'POST'] as const
}

export function getPostIpamIpAddressesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamIpAddressesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']>,
    ) {
      return parseResponse(client.ipam['ip-addresses'].index.$post(args, options))
    },
  })
}

export function usePostIpamIpAddressesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamIpAddressesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamIpAddressesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>
  >,
) {
  return ['ipam', '/ipam/ip-addresses/:id/', toValue(args)] as const
}

export function getIpamIpAddressesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamIpAddressesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam['ip-addresses'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamIpAddressesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamIpAddressesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamIpAddressesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamIpAddressesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam['ip-addresses'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamIpAddressesIdIndexMutationKey() {
  return ['ipam', '/ipam/ip-addresses/:id/', 'PUT'] as const
}

export function getPutIpamIpAddressesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamIpAddressesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.ipam['ip-addresses'][':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamIpAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamIpAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamIpAddressesIdIndexMutationKey() {
  return ['ipam', '/ipam/ip-addresses/:id/', 'DELETE'] as const
}

export function getDeleteIpamIpAddressesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamIpAddressesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam['ip-addresses'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamIpAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamIpAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamIpAddressesIdIndexMutationKey() {
  return ['ipam', '/ipam/ip-addresses/:id/', 'PATCH'] as const
}

export function getPatchIpamIpAddressesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamIpAddressesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.ipam['ip-addresses'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamIpAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamIpAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamPrefixesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.prefixes.index.$get>>,
) {
  return ['ipam', '/ipam/prefixes/', toValue(args)] as const
}

export function getIpamPrefixesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.prefixes.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamPrefixesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.prefixes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamPrefixesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.prefixes.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamPrefixesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamPrefixesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamPrefixesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.prefixes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamPrefixesIndexMutationKey() {
  return ['ipam', '/ipam/prefixes/', 'POST'] as const
}

export function getPostIpamPrefixesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ipam.prefixes.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamPrefixesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.prefixes.index.$post>) {
      return parseResponse(client.ipam.prefixes.index.$post(args, options))
    },
  })
}

export function usePostIpamPrefixesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.prefixes.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamPrefixesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamPrefixesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/prefixes/:id/', toValue(args)] as const
}

export function getIpamPrefixesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamPrefixesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.prefixes[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamPrefixesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamPrefixesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamPrefixesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamPrefixesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.prefixes[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamPrefixesIdIndexMutationKey() {
  return ['ipam', '/ipam/prefixes/:id/', 'PUT'] as const
}

export function getPutIpamPrefixesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamPrefixesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.ipam.prefixes[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamPrefixesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamPrefixesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamPrefixesIdIndexMutationKey() {
  return ['ipam', '/ipam/prefixes/:id/', 'DELETE'] as const
}

export function getDeleteIpamPrefixesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamPrefixesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam.prefixes[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamPrefixesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamPrefixesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamPrefixesIdIndexMutationKey() {
  return ['ipam', '/ipam/prefixes/:id/', 'PATCH'] as const
}

export function getPatchIpamPrefixesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamPrefixesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.ipam.prefixes[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamPrefixesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamPrefixesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamPrefixesIdAvailableIpsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
  >,
) {
  return ['ipam', '/ipam/prefixes/:id/available-ips/', toValue(args)] as const
}

export function getIpamPrefixesIdAvailableIpsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamPrefixesIdAvailableIpsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.prefixes[':id']['available-ips'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamPrefixesIdAvailableIpsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIpamPrefixesIdAvailableIpsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamPrefixesIdAvailableIpsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamPrefixesIdAvailableIpsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.prefixes[':id']['available-ips'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamPrefixesIdAvailableIpsIndexMutationKey() {
  return ['ipam', '/ipam/prefixes/:id/available-ips/', 'POST'] as const
}

export function getPostIpamPrefixesIdAvailableIpsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamPrefixesIdAvailableIpsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']
      >,
    ) {
      return parseResponse(client.ipam.prefixes[':id']['available-ips'].index.$post(args, options))
    },
  })
}

export function usePostIpamPrefixesIdAvailableIpsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamPrefixesIdAvailableIpsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamPrefixesIdAvailablePrefixesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']>
  >,
) {
  return ['ipam', '/ipam/prefixes/:id/available-prefixes/', toValue(args)] as const
}

export function getIpamPrefixesIdAvailablePrefixesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamPrefixesIdAvailablePrefixesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.prefixes[':id']['available-prefixes'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamPrefixesIdAvailablePrefixesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getIpamPrefixesIdAvailablePrefixesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamPrefixesIdAvailablePrefixesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamPrefixesIdAvailablePrefixesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.prefixes[':id']['available-prefixes'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamPrefixesIdAvailablePrefixesIndexMutationKey() {
  return ['ipam', '/ipam/prefixes/:id/available-prefixes/', 'POST'] as const
}

export function getPostIpamPrefixesIdAvailablePrefixesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamPrefixesIdAvailablePrefixesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.ipam.prefixes[':id']['available-prefixes'].index.$post(args, options),
      )
    },
  })
}

export function usePostIpamPrefixesIdAvailablePrefixesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamPrefixesIdAvailablePrefixesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamRirsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.rirs.index.$get>>,
) {
  return ['ipam', '/ipam/rirs/', toValue(args)] as const
}

export function getIpamRirsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.rirs.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamRirsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.rirs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamRirsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.rirs.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamRirsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRirsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamRirsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.rirs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamRirsIndexMutationKey() {
  return ['ipam', '/ipam/rirs/', 'POST'] as const
}

export function getPostIpamRirsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ipam.rirs.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamRirsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.rirs.index.$post>) {
      return parseResponse(client.ipam.rirs.index.$post(args, options))
    },
  })
}

export function usePostIpamRirsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.rirs.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamRirsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamRirsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/rirs/:id/', toValue(args)] as const
}

export function getIpamRirsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamRirsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.rirs[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamRirsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamRirsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRirsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamRirsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.rirs[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamRirsIdIndexMutationKey() {
  return ['ipam', '/ipam/rirs/:id/', 'PUT'] as const
}

export function getPutIpamRirsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamRirsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$put']>) {
      return parseResponse(client.ipam.rirs[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamRirsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamRirsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamRirsIdIndexMutationKey() {
  return ['ipam', '/ipam/rirs/:id/', 'DELETE'] as const
}

export function getDeleteIpamRirsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamRirsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$delete']>) {
      return parseResponse(client.ipam.rirs[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamRirsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamRirsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamRirsIdIndexMutationKey() {
  return ['ipam', '/ipam/rirs/:id/', 'PATCH'] as const
}

export function getPatchIpamRirsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamRirsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$patch']>) {
      return parseResponse(client.ipam.rirs[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamRirsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamRirsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamRolesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.roles.index.$get>>,
) {
  return ['ipam', '/ipam/roles/', toValue(args)] as const
}

export function getIpamRolesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.roles.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.roles.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.roles.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamRolesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.roles.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamRolesIndexMutationKey() {
  return ['ipam', '/ipam/roles/', 'POST'] as const
}

export function getPostIpamRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ipam.roles.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamRolesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.roles.index.$post>) {
      return parseResponse(client.ipam.roles.index.$post(args, options))
    },
  })
}

export function usePostIpamRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.roles.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamRolesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamRolesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/roles/:id/', toValue(args)] as const
}

export function getIpamRolesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamRolesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.roles[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamRolesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRolesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamRolesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.roles[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamRolesIdIndexMutationKey() {
  return ['ipam', '/ipam/roles/:id/', 'PUT'] as const
}

export function getPutIpamRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.roles)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamRolesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$put']>) {
      return parseResponse(client.ipam.roles[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.roles)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamRolesIdIndexMutationKey() {
  return ['ipam', '/ipam/roles/:id/', 'DELETE'] as const
}

export function getDeleteIpamRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.roles)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam.roles[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.roles)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamRolesIdIndexMutationKey() {
  return ['ipam', '/ipam/roles/:id/', 'PATCH'] as const
}

export function getPatchIpamRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.roles)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamRolesIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$patch']>) {
      return parseResponse(client.ipam.roles[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.roles)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamServicesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.services.index.$get>>,
) {
  return ['ipam', '/ipam/services/', toValue(args)] as const
}

export function getIpamServicesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.services.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamServicesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.services.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamServicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.services.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamServicesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamServicesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamServicesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.services.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamServicesIndexMutationKey() {
  return ['ipam', '/ipam/services/', 'POST'] as const
}

export function getPostIpamServicesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ipam.services.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamServicesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.services.index.$post>) {
      return parseResponse(client.ipam.services.index.$post(args, options))
    },
  })
}

export function usePostIpamServicesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.services.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamServicesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamServicesIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/services/:id/', toValue(args)] as const
}

export function getIpamServicesIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamServicesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.services[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamServicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamServicesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamServicesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamServicesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.services[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamServicesIdIndexMutationKey() {
  return ['ipam', '/ipam/services/:id/', 'PUT'] as const
}

export function getPutIpamServicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.services)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamServicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.ipam.services[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamServicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.services)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamServicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamServicesIdIndexMutationKey() {
  return ['ipam', '/ipam/services/:id/', 'DELETE'] as const
}

export function getDeleteIpamServicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.services)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamServicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam.services[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamServicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.services)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamServicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamServicesIdIndexMutationKey() {
  return ['ipam', '/ipam/services/:id/', 'PATCH'] as const
}

export function getPatchIpamServicesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.services)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamServicesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.ipam.services[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamServicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.services)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamServicesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamVlanGroupsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>>,
) {
  return ['ipam', '/ipam/vlan-groups/', toValue(args)] as const
}

export function getIpamVlanGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamVlanGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam['vlan-groups'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamVlanGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamVlanGroupsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVlanGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamVlanGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam['vlan-groups'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamVlanGroupsIndexMutationKey() {
  return ['ipam', '/ipam/vlan-groups/', 'POST'] as const
}

export function getPostIpamVlanGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamVlanGroupsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']>,
    ) {
      return parseResponse(client.ipam['vlan-groups'].index.$post(args, options))
    },
  })
}

export function usePostIpamVlanGroupsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamVlanGroupsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamVlanGroupsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>
  >,
) {
  return ['ipam', '/ipam/vlan-groups/:id/', toValue(args)] as const
}

export function getIpamVlanGroupsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamVlanGroupsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam['vlan-groups'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamVlanGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamVlanGroupsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVlanGroupsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamVlanGroupsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam['vlan-groups'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamVlanGroupsIdIndexMutationKey() {
  return ['ipam', '/ipam/vlan-groups/:id/', 'PUT'] as const
}

export function getPutIpamVlanGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamVlanGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.ipam['vlan-groups'][':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamVlanGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamVlanGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamVlanGroupsIdIndexMutationKey() {
  return ['ipam', '/ipam/vlan-groups/:id/', 'DELETE'] as const
}

export function getDeleteIpamVlanGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamVlanGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam['vlan-groups'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamVlanGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamVlanGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamVlanGroupsIdIndexMutationKey() {
  return ['ipam', '/ipam/vlan-groups/:id/', 'PATCH'] as const
}

export function getPatchIpamVlanGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamVlanGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.ipam['vlan-groups'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamVlanGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamVlanGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamVlansIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.vlans.index.$get>>,
) {
  return ['ipam', '/ipam/vlans/', toValue(args)] as const
}

export function getIpamVlansIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.vlans.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamVlansIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.vlans.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamVlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.vlans.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamVlansIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVlansIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamVlansIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.vlans.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamVlansIndexMutationKey() {
  return ['ipam', '/ipam/vlans/', 'POST'] as const
}

export function getPostIpamVlansIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ipam.vlans.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamVlansIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.vlans.index.$post>) {
      return parseResponse(client.ipam.vlans.index.$post(args, options))
    },
  })
}

export function usePostIpamVlansIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.vlans.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamVlansIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamVlansIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/vlans/:id/', toValue(args)] as const
}

export function getIpamVlansIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamVlansIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.vlans[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamVlansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamVlansIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVlansIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamVlansIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.vlans[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamVlansIdIndexMutationKey() {
  return ['ipam', '/ipam/vlans/:id/', 'PUT'] as const
}

export function getPutIpamVlansIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamVlansIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$put']>) {
      return parseResponse(client.ipam.vlans[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamVlansIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamVlansIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamVlansIdIndexMutationKey() {
  return ['ipam', '/ipam/vlans/:id/', 'DELETE'] as const
}

export function getDeleteIpamVlansIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamVlansIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.ipam.vlans[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamVlansIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamVlansIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamVlansIdIndexMutationKey() {
  return ['ipam', '/ipam/vlans/:id/', 'PATCH'] as const
}

export function getPatchIpamVlansIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamVlansIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$patch']>) {
      return parseResponse(client.ipam.vlans[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamVlansIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamVlansIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamVrfsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.vrfs.index.$get>>,
) {
  return ['ipam', '/ipam/vrfs/', toValue(args)] as const
}

export function getIpamVrfsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.vrfs.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamVrfsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.vrfs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamVrfsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipam.vrfs.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>
            >
          >,
          ReturnType<typeof getIpamVrfsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVrfsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamVrfsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.vrfs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpamVrfsIndexMutationKey() {
  return ['ipam', '/ipam/vrfs/', 'POST'] as const
}

export function getPostIpamVrfsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ipam.vrfs.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpamVrfsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipam.vrfs.index.$post>) {
      return parseResponse(client.ipam.vrfs.index.$post(args, options))
    },
  })
}

export function usePostIpamVrfsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ipam.vrfs.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpamVrfsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpamVrfsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>,
) {
  return ['ipam', '/ipam/vrfs/:id/', toValue(args)] as const
}

export function getIpamVrfsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpamVrfsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipam.vrfs[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpamVrfsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpamVrfsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVrfsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpamVrfsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipam.vrfs[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpamVrfsIdIndexMutationKey() {
  return ['ipam', '/ipam/vrfs/:id/', 'PUT'] as const
}

export function getPutIpamVrfsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpamVrfsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$put']>) {
      return parseResponse(client.ipam.vrfs[':id'].index.$put(args, options))
    },
  })
}

export function usePutIpamVrfsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpamVrfsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIpamVrfsIdIndexMutationKey() {
  return ['ipam', '/ipam/vrfs/:id/', 'DELETE'] as const
}

export function getDeleteIpamVrfsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpamVrfsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>) {
      return parseResponse(client.ipam.vrfs[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteIpamVrfsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpamVrfsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpamVrfsIdIndexMutationKey() {
  return ['ipam', '/ipam/vrfs/:id/', 'PATCH'] as const
}

export function getPatchIpamVrfsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpamVrfsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>) {
      return parseResponse(client.ipam.vrfs[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchIpamVrfsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpamVrfsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsGenerateRsaKeyPairIndexQueryKey() {
  return ['secrets', '/secrets/generate-rsa-key-pair/'] as const
}

export function getSecretsGenerateRsaKeyPairIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecretsGenerateRsaKeyPairIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets['generate-rsa-key-pair'].index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsGenerateRsaKeyPairIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSecretsGenerateRsaKeyPairIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsGenerateRsaKeyPairIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecretsGenerateRsaKeyPairIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets['generate-rsa-key-pair'].index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecretsGetSessionKeyIndexMutationKey() {
  return ['secrets', '/secrets/get-session-key/', 'POST'] as const
}

export function getPostSecretsGetSessionKeyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['get-session-key']['index']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsGetSessionKeyIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.secrets['get-session-key'].index.$post(undefined, options))
    },
  })
}

export function usePostSecretsGetSessionKeyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['get-session-key']['index']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretsGetSessionKeyIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsSecretRolesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>
  >,
) {
  return ['secrets', '/secrets/secret-roles/', toValue(args)] as const
}

export function getSecretsSecretRolesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsSecretRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets['secret-roles'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsSecretRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSecretsSecretRolesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsSecretRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsSecretRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets['secret-roles'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecretsSecretRolesIndexMutationKey() {
  return ['secrets', '/secrets/secret-roles/', 'POST'] as const
}

export function getPostSecretsSecretRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)['secret-roles']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsSecretRolesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$post']>,
    ) {
      return parseResponse(client.secrets['secret-roles'].index.$post(args, options))
    },
  })
}

export function usePostSecretsSecretRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)['secret-roles']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretsSecretRolesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsSecretRolesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>
  >,
) {
  return ['secrets', '/secrets/secret-roles/:id/', toValue(args)] as const
}

export function getSecretsSecretRolesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsSecretRolesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets['secret-roles'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsSecretRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSecretsSecretRolesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsSecretRolesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsSecretRolesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets['secret-roles'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSecretsSecretRolesIdIndexMutationKey() {
  return ['secrets', '/secrets/secret-roles/:id/', 'PUT'] as const
}

export function getPutSecretsSecretRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecretsSecretRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.secrets['secret-roles'][':id'].index.$put(args, options))
    },
  })
}

export function usePutSecretsSecretRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSecretsSecretRolesIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSecretsSecretRolesIdIndexMutationKey() {
  return ['secrets', '/secrets/secret-roles/:id/', 'DELETE'] as const
}

export function getDeleteSecretsSecretRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretsSecretRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.secrets['secret-roles'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteSecretsSecretRolesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSecretsSecretRolesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSecretsSecretRolesIdIndexMutationKey() {
  return ['secrets', '/secrets/secret-roles/:id/', 'PATCH'] as const
}

export function getPatchSecretsSecretRolesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSecretsSecretRolesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.secrets['secret-roles'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchSecretsSecretRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSecretsSecretRolesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsSecretsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.secrets.index.$get>>,
) {
  return ['secrets', '/secrets/secrets/', toValue(args)] as const
}

export function getSecretsSecretsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.secrets.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsSecretsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.secrets.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsSecretsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.secrets.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
            >
          >,
          ReturnType<typeof getSecretsSecretsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsSecretsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsSecretsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.secrets.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecretsSecretsIndexMutationKey() {
  return ['secrets', '/secrets/secrets/', 'POST'] as const
}

export function getPostSecretsSecretsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.secrets.secrets.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsSecretsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secrets.secrets.index.$post>) {
      return parseResponse(client.secrets.secrets.index.$post(args, options))
    },
  })
}

export function usePostSecretsSecretsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.secrets.secrets.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretsSecretsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsSecretsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>>,
) {
  return ['secrets', '/secrets/secrets/:id/', toValue(args)] as const
}

export function getSecretsSecretsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsSecretsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.secrets[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsSecretsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSecretsSecretsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsSecretsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsSecretsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.secrets[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSecretsSecretsIdIndexMutationKey() {
  return ['secrets', '/secrets/secrets/:id/', 'PUT'] as const
}

export function getPutSecretsSecretsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecretsSecretsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.secrets.secrets[':id'].index.$put(args, options))
    },
  })
}

export function usePutSecretsSecretsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSecretsSecretsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSecretsSecretsIdIndexMutationKey() {
  return ['secrets', '/secrets/secrets/:id/', 'DELETE'] as const
}

export function getDeleteSecretsSecretsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretsSecretsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.secrets.secrets[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteSecretsSecretsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSecretsSecretsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSecretsSecretsIdIndexMutationKey() {
  return ['secrets', '/secrets/secrets/:id/', 'PATCH'] as const
}

export function getPatchSecretsSecretsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSecretsSecretsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.secrets.secrets[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchSecretsSecretsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSecretsSecretsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTenancyTenantGroupsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>
  >,
) {
  return ['tenancy', '/tenancy/tenant-groups/', toValue(args)] as const
}

export function getTenancyTenantGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenancyTenantGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tenancy['tenant-groups'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenancyTenantGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenancyTenantGroupsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenancyTenantGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenancyTenantGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tenancy['tenant-groups'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTenancyTenantGroupsIndexMutationKey() {
  return ['tenancy', '/tenancy/tenant-groups/', 'POST'] as const
}

export function getPostTenancyTenantGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTenancyTenantGroupsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']>,
    ) {
      return parseResponse(client.tenancy['tenant-groups'].index.$post(args, options))
    },
  })
}

export function usePostTenancyTenantGroupsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenancyTenantGroupsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTenancyTenantGroupsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>
  >,
) {
  return ['tenancy', '/tenancy/tenant-groups/:id/', toValue(args)] as const
}

export function getTenancyTenantGroupsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenancyTenantGroupsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tenancy['tenant-groups'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenancyTenantGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTenancyTenantGroupsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenancyTenantGroupsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenancyTenantGroupsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tenancy['tenant-groups'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTenancyTenantGroupsIdIndexMutationKey() {
  return ['tenancy', '/tenancy/tenant-groups/:id/', 'PUT'] as const
}

export function getPutTenancyTenantGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTenancyTenantGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>,
    ) {
      return parseResponse(client.tenancy['tenant-groups'][':id'].index.$put(args, options))
    },
  })
}

export function usePutTenancyTenantGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTenancyTenantGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTenancyTenantGroupsIdIndexMutationKey() {
  return ['tenancy', '/tenancy/tenant-groups/:id/', 'DELETE'] as const
}

export function getDeleteTenancyTenantGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenancyTenantGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>,
    ) {
      return parseResponse(client.tenancy['tenant-groups'][':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTenancyTenantGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTenancyTenantGroupsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTenancyTenantGroupsIdIndexMutationKey() {
  return ['tenancy', '/tenancy/tenant-groups/:id/', 'PATCH'] as const
}

export function getPatchTenancyTenantGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTenancyTenantGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>,
    ) {
      return parseResponse(client.tenancy['tenant-groups'][':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTenancyTenantGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTenancyTenantGroupsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTenancyTenantsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tenancy.tenants.index.$get>>,
) {
  return ['tenancy', '/tenancy/tenants/', toValue(args)] as const
}

export function getTenancyTenantsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tenancy.tenants.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenancyTenantsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tenancy.tenants.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenancyTenantsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tenancy.tenants.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
            >
          >,
          ReturnType<typeof getTenancyTenantsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenancyTenantsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenancyTenantsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tenancy.tenants.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTenancyTenantsIndexMutationKey() {
  return ['tenancy', '/tenancy/tenants/', 'POST'] as const
}

export function getPostTenancyTenantsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tenancy.tenants.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTenancyTenantsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tenancy.tenants.index.$post>) {
      return parseResponse(client.tenancy.tenants.index.$post(args, options))
    },
  })
}

export function usePostTenancyTenantsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tenancy.tenants.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTenancyTenantsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTenancyTenantsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>,
) {
  return ['tenancy', '/tenancy/tenants/:id/', toValue(args)] as const
}

export function getTenancyTenantsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTenancyTenantsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tenancy.tenants[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTenancyTenantsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTenancyTenantsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenancyTenantsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTenancyTenantsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tenancy.tenants[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTenancyTenantsIdIndexMutationKey() {
  return ['tenancy', '/tenancy/tenants/:id/', 'PUT'] as const
}

export function getPutTenancyTenantsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTenancyTenantsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.tenancy.tenants[':id'].index.$put(args, options))
    },
  })
}

export function usePutTenancyTenantsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTenancyTenantsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTenancyTenantsIdIndexMutationKey() {
  return ['tenancy', '/tenancy/tenants/:id/', 'DELETE'] as const
}

export function getDeleteTenancyTenantsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenancyTenantsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.tenancy.tenants[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTenancyTenantsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTenancyTenantsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTenancyTenantsIdIndexMutationKey() {
  return ['tenancy', '/tenancy/tenants/:id/', 'PATCH'] as const
}

export function getPatchTenancyTenantsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTenancyTenantsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.tenancy.tenants[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTenancyTenantsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTenancyTenantsIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationClusterGroupsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/cluster-groups/', toValue(args)] as const
}

export function getVirtualizationClusterGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationClusterGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization['cluster-groups'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationClusterGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationClusterGroupsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClusterGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationClusterGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization['cluster-groups'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualizationClusterGroupsIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-groups/', 'POST'] as const
}

export function getPostVirtualizationClusterGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualizationClusterGroupsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>,
    ) {
      return parseResponse(client.virtualization['cluster-groups'].index.$post(args, options))
    },
  })
}

export function usePostVirtualizationClusterGroupsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVirtualizationClusterGroupsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationClusterGroupsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/cluster-groups/:id/', toValue(args)] as const
}

export function getVirtualizationClusterGroupsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationClusterGroupsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization['cluster-groups'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationClusterGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-groups'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-groups'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationClusterGroupsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClusterGroupsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationClusterGroupsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization['cluster-groups'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVirtualizationClusterGroupsIdIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-groups/:id/', 'PUT'] as const
}

export function getPutVirtualizationClusterGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVirtualizationClusterGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['cluster-groups'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.virtualization['cluster-groups'][':id'].index.$put(args, options))
    },
  })
}

export function usePutVirtualizationClusterGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-groups'][':id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualization)['cluster-groups'][':id']['index']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVirtualizationClusterGroupsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVirtualizationClusterGroupsIdIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-groups/:id/', 'DELETE'] as const
}

export function getDeleteVirtualizationClusterGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualizationClusterGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.virtualization['cluster-groups'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteVirtualizationClusterGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.virtualization)['cluster-groups'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualizationClusterGroupsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchVirtualizationClusterGroupsIdIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-groups/:id/', 'PATCH'] as const
}

export function getPatchVirtualizationClusterGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVirtualizationClusterGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.virtualization['cluster-groups'][':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchVirtualizationClusterGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualization)['cluster-groups'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVirtualizationClusterGroupsIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationClusterTypesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/cluster-types/', toValue(args)] as const
}

export function getVirtualizationClusterTypesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationClusterTypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization['cluster-types'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationClusterTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationClusterTypesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClusterTypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationClusterTypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization['cluster-types'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualizationClusterTypesIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-types/', 'POST'] as const
}

export function getPostVirtualizationClusterTypesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualizationClusterTypesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>,
    ) {
      return parseResponse(client.virtualization['cluster-types'].index.$post(args, options))
    },
  })
}

export function usePostVirtualizationClusterTypesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['cluster-types']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVirtualizationClusterTypesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationClusterTypesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/cluster-types/:id/', toValue(args)] as const
}

export function getVirtualizationClusterTypesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationClusterTypesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization['cluster-types'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationClusterTypesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-types'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-types'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationClusterTypesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClusterTypesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationClusterTypesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization['cluster-types'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVirtualizationClusterTypesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-types/:id/', 'PUT'] as const
}

export function getPutVirtualizationClusterTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVirtualizationClusterTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['cluster-types'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.virtualization['cluster-types'][':id'].index.$put(args, options))
    },
  })
}

export function usePutVirtualizationClusterTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-types'][':id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVirtualizationClusterTypesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVirtualizationClusterTypesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-types/:id/', 'DELETE'] as const
}

export function getDeleteVirtualizationClusterTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualizationClusterTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['cluster-types'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.virtualization['cluster-types'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteVirtualizationClusterTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.virtualization)['cluster-types'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.virtualization)['cluster-types'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualizationClusterTypesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchVirtualizationClusterTypesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/cluster-types/:id/', 'PATCH'] as const
}

export function getPatchVirtualizationClusterTypesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVirtualizationClusterTypesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['cluster-types'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.virtualization['cluster-types'][':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchVirtualizationClusterTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['cluster-types'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualization)['cluster-types'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVirtualizationClusterTypesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationClustersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualization.clusters.index.$get>>,
) {
  return ['virtualization', '/virtualization/clusters/', toValue(args)] as const
}

export function getVirtualizationClustersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualization.clusters.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationClustersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization.clusters.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationClustersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualization.clusters.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
              >
            >
          >,
          ReturnType<typeof getVirtualizationClustersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClustersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationClustersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization.clusters.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualizationClustersIndexMutationKey() {
  return ['virtualization', '/virtualization/clusters/', 'POST'] as const
}

export function getPostVirtualizationClustersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.virtualization.clusters.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualizationClustersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.virtualization.clusters.index.$post>) {
      return parseResponse(client.virtualization.clusters.index.$post(args, options))
    },
  })
}

export function usePostVirtualizationClustersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.virtualization.clusters.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.virtualization.clusters.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVirtualizationClustersIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationClustersIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/clusters/:id/', toValue(args)] as const
}

export function getVirtualizationClustersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationClustersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization.clusters[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationClustersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVirtualizationClustersIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClustersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationClustersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization.clusters[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVirtualizationClustersIdIndexMutationKey() {
  return ['virtualization', '/virtualization/clusters/:id/', 'PUT'] as const
}

export function getPutVirtualizationClustersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVirtualizationClustersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.virtualization.clusters[':id'].index.$put(args, options))
    },
  })
}

export function usePutVirtualizationClustersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVirtualizationClustersIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVirtualizationClustersIdIndexMutationKey() {
  return ['virtualization', '/virtualization/clusters/:id/', 'DELETE'] as const
}

export function getDeleteVirtualizationClustersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualizationClustersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.virtualization.clusters[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteVirtualizationClustersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualizationClustersIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchVirtualizationClustersIdIndexMutationKey() {
  return ['virtualization', '/virtualization/clusters/:id/', 'PATCH'] as const
}

export function getPatchVirtualizationClustersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVirtualizationClustersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.virtualization.clusters[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchVirtualizationClustersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVirtualizationClustersIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationInterfacesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualization.interfaces.index.$get>>,
) {
  return ['virtualization', '/virtualization/interfaces/', toValue(args)] as const
}

export function getVirtualizationInterfacesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualization.interfaces.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationInterfacesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization.interfaces.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationInterfacesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualization.interfaces.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
              >
            >
          >,
          ReturnType<typeof getVirtualizationInterfacesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationInterfacesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationInterfacesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization.interfaces.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualizationInterfacesIndexMutationKey() {
  return ['virtualization', '/virtualization/interfaces/', 'POST'] as const
}

export function getPostVirtualizationInterfacesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.virtualization.interfaces.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.virtualization.interfaces.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualizationInterfacesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.virtualization.interfaces.index.$post>) {
      return parseResponse(client.virtualization.interfaces.index.$post(args, options))
    },
  })
}

export function usePostVirtualizationInterfacesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.virtualization.interfaces.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.virtualization.interfaces.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVirtualizationInterfacesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationInterfacesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/interfaces/:id/', toValue(args)] as const
}

export function getVirtualizationInterfacesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationInterfacesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization.interfaces[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationInterfacesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationInterfacesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationInterfacesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationInterfacesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization.interfaces[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVirtualizationInterfacesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/interfaces/:id/', 'PUT'] as const
}

export function getPutVirtualizationInterfacesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVirtualizationInterfacesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>,
    ) {
      return parseResponse(client.virtualization.interfaces[':id'].index.$put(args, options))
    },
  })
}

export function usePutVirtualizationInterfacesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVirtualizationInterfacesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVirtualizationInterfacesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/interfaces/:id/', 'DELETE'] as const
}

export function getDeleteVirtualizationInterfacesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualizationInterfacesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.virtualization.interfaces[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteVirtualizationInterfacesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualizationInterfacesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchVirtualizationInterfacesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/interfaces/:id/', 'PATCH'] as const
}

export function getPatchVirtualizationInterfacesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVirtualizationInterfacesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>,
    ) {
      return parseResponse(client.virtualization.interfaces[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchVirtualizationInterfacesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVirtualizationInterfacesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationVirtualMachinesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/virtual-machines/', toValue(args)] as const
}

export function getVirtualizationVirtualMachinesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationVirtualMachinesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization['virtual-machines'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationVirtualMachinesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationVirtualMachinesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationVirtualMachinesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationVirtualMachinesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization['virtual-machines'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualizationVirtualMachinesIndexMutationKey() {
  return ['virtualization', '/virtualization/virtual-machines/', 'POST'] as const
}

export function getPostVirtualizationVirtualMachinesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualizationVirtualMachinesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$post']>,
    ) {
      return parseResponse(client.virtualization['virtual-machines'].index.$post(args, options))
    },
  })
}

export function usePostVirtualizationVirtualMachinesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVirtualizationVirtualMachinesIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualizationVirtualMachinesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
  >,
) {
  return ['virtualization', '/virtualization/virtual-machines/:id/', toValue(args)] as const
}

export function getVirtualizationVirtualMachinesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualizationVirtualMachinesIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualization['virtual-machines'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualizationVirtualMachinesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualizationVirtualMachinesIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationVirtualMachinesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualizationVirtualMachinesIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualization['virtual-machines'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVirtualizationVirtualMachinesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/virtual-machines/:id/', 'PUT'] as const
}

export function getPutVirtualizationVirtualMachinesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVirtualizationVirtualMachinesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['virtual-machines'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.virtualization['virtual-machines'][':id'].index.$put(args, options),
      )
    },
  })
}

export function usePutVirtualizationVirtualMachinesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['virtual-machines'][':id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualization)['virtual-machines'][':id']['index']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVirtualizationVirtualMachinesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVirtualizationVirtualMachinesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/virtual-machines/:id/', 'DELETE'] as const
}

export function getDeleteVirtualizationVirtualMachinesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualizationVirtualMachinesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.virtualization['virtual-machines'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteVirtualizationVirtualMachinesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.virtualization)['virtual-machines'][':id']['index']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualizationVirtualMachinesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchVirtualizationVirtualMachinesIdIndexMutationKey() {
  return ['virtualization', '/virtualization/virtual-machines/:id/', 'PATCH'] as const
}

export function getPatchVirtualizationVirtualMachinesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVirtualizationVirtualMachinesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.virtualization['virtual-machines'][':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchVirtualizationVirtualMachinesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualization)['virtual-machines'][':id']['index']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVirtualizationVirtualMachinesIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
