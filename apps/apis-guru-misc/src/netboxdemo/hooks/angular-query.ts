import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-terminations/', args] as const
}

export function getCircuitsCircuitTerminationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsCircuitTerminationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits['circuit-terminations'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsCircuitTerminationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-terminations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.circuits)['circuit-terminations']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsCircuitTerminationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCircuitsCircuitTerminationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCircuitsCircuitTerminationsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsCircuitTerminationsIdIndexQueryKey(
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-terminations/:id/', args] as const
}

export function getCircuitsCircuitTerminationsIdIndexQueryOptions<
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
  args: InferRequestType<(typeof client.circuits)['circuit-terminations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsCircuitTerminationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits['circuit-terminations'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsCircuitTerminationsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.circuits)['circuit-terminations'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsCircuitTerminationsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCircuitsCircuitTerminationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCircuitsCircuitTerminationsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCircuitsCircuitTerminationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCircuitsCircuitTerminationsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCircuitsCircuitTerminationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCircuitsCircuitTerminationsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsCircuitTypesIndexQueryKey(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-types/', args] as const
}

export function getCircuitsCircuitTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsCircuitTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits['circuit-types'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsCircuitTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.circuits)['circuit-types']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsCircuitTypesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCircuitsCircuitTypesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCircuitsCircuitTypesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsCircuitTypesIdIndexQueryKey(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuit-types/:id/', args] as const
}

export function getCircuitsCircuitTypesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsCircuitTypesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits['circuit-types'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsCircuitTypesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.circuits)['circuit-types'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsCircuitTypesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCircuitsCircuitTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCircuitsCircuitTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCircuitsCircuitTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCircuitsCircuitTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCircuitsCircuitTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCircuitsCircuitTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsCircuitsIndexQueryKey(
  args: InferRequestType<typeof client.circuits.circuits.index.$get>,
) {
  return ['circuits', '/circuits/circuits/', args] as const
}

export function getCircuitsCircuitsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.circuits.circuits.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsCircuitsIndexQueryKey>
  >({
    queryKey: getCircuitsCircuitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits.circuits.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsCircuitsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.circuits.circuits.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCircuitsCircuitsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsCircuitsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCircuitsCircuitsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.circuits.circuits.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.circuits.circuits.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCircuitsCircuitsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsCircuitsIdIndexQueryKey(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/circuits/:id/', args] as const
}

export function getCircuitsCircuitsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsCircuitsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits.circuits[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsCircuitsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.circuits)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.circuits.circuits)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsCircuitsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCircuitsCircuitsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCircuitsCircuitsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCircuitsCircuitsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCircuitsCircuitsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCircuitsCircuitsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCircuitsCircuitsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsProvidersIndexQueryKey(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
) {
  return ['circuits', '/circuits/providers/', args] as const
}

export function getCircuitsProvidersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.circuits.providers.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCircuitsProvidersIndexQueryKey>
  >({
    queryKey: getCircuitsProvidersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits.providers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsProvidersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.circuits.providers.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCircuitsProvidersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsProvidersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCircuitsProvidersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.circuits.providers.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.circuits.providers.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCircuitsProvidersIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsProvidersIdIndexQueryKey(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
) {
  return ['circuits', '/circuits/providers/:id/', args] as const
}

export function getCircuitsProvidersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsProvidersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits.providers[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsProvidersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.providers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.circuits.providers)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsProvidersIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCircuitsProvidersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCircuitsProvidersIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCircuitsProvidersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCircuitsProvidersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCircuitsProvidersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCircuitsProvidersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCircuitsProvidersIdGraphsIndexQueryKey(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>,
) {
  return ['circuits', '/circuits/providers/:id/graphs/', args] as const
}

export function getCircuitsProvidersIdGraphsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCircuitsProvidersIdGraphsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.circuits.providers[':id'].graphs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCircuitsProvidersIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.circuits.providers)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.circuits.providers)[':id']['graphs']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCircuitsProvidersIdGraphsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCircuitsProvidersIdGraphsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimCablesIndexQueryKey(
  args: InferRequestType<typeof client.dcim.cables.index.$get>,
) {
  return ['dcim', '/dcim/cables/', args] as const
}

export function getDcimCablesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dcim.cables.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimCablesIndexQueryKey>
  >({
    queryKey: getDcimCablesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.cables.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimCablesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.cables.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDcimCablesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimCablesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimCablesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.cables.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.cables.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimCablesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimCablesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/cables/:id/', args] as const
}

export function getDcimCablesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimCablesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.cables[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimCablesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.cables)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.cables)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimCablesIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDcimCablesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimCablesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimCablesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimCablesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimCablesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimCablesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConnectedDeviceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
) {
  return ['dcim', '/dcim/connected-device/', args] as const
}

export function getDcimConnectedDeviceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConnectedDeviceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['connected-device'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConnectedDeviceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['connected-device']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['connected-device']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConnectedDeviceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimConsoleConnectionsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-connections/', args] as const
}

export function getDcimConsoleConnectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsoleConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-connections'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsoleConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['console-connections']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsoleConnectionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimConsolePortTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-port-templates/', args] as const
}

export function getDcimConsolePortTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsolePortTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-port-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsolePortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['console-port-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsolePortTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimConsolePortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimConsolePortTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsolePortTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-port-templates/:id/', args] as const
}

export function getDcimConsolePortTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsolePortTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-port-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsolePortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['console-port-templates'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsolePortTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimConsolePortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimConsolePortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimConsolePortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.dcim)['console-port-templates'][':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimConsolePortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimConsolePortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimConsolePortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsolePortsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-ports/', args] as const
}

export function getDcimConsolePortsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsolePortsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-ports'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsolePortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['console-ports']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsolePortsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimConsolePortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimConsolePortsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsolePortsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-ports/:id/', args] as const
}

export function getDcimConsolePortsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsolePortsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-ports'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsolePortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['console-ports'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsolePortsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimConsolePortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimConsolePortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimConsolePortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimConsolePortsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimConsolePortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimConsolePortsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsolePortsIdTraceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-ports/:id/trace/', args] as const
}

export function getDcimConsolePortsIdTraceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsolePortsIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-ports'][':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsolePortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['console-ports'][':id']['trace']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsolePortsIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimConsoleServerPortTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-server-port-templates/', args] as const
}

export function getDcimConsoleServerPortTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsoleServerPortTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-server-port-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsoleServerPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['console-server-port-templates']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsoleServerPortTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimConsoleServerPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimConsoleServerPortTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsoleServerPortTemplatesIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
) {
  return ['dcim', '/dcim/console-server-port-templates/:id/', args] as const
}

export function getDcimConsoleServerPortTemplatesIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsoleServerPortTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-server-port-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsoleServerPortTemplatesIdIndex<
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
  args: () => InferRequestType<
    (typeof client.dcim)['console-server-port-templates'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsoleServerPortTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimConsoleServerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimConsoleServerPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimConsoleServerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimConsoleServerPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimConsoleServerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimConsoleServerPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsoleServerPortsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-server-ports/', args] as const
}

export function getDcimConsoleServerPortsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsoleServerPortsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-server-ports'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsoleServerPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['console-server-ports']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsoleServerPortsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimConsoleServerPortsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimConsoleServerPortsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsoleServerPortsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/console-server-ports/:id/', args] as const
}

export function getDcimConsoleServerPortsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsoleServerPortsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-server-ports'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsoleServerPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['console-server-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimConsoleServerPortsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsoleServerPortsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimConsoleServerPortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimConsoleServerPortsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimConsoleServerPortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimConsoleServerPortsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimConsoleServerPortsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimConsoleServerPortsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimConsoleServerPortsIdTraceIndexQueryKey(
  args: InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
) {
  return ['dcim', '/dcim/console-server-ports/:id/trace/', args] as const
}

export function getDcimConsoleServerPortsIdTraceIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimConsoleServerPortsIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['console-server-ports'][':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimConsoleServerPortsIdTraceIndex<
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
  args: () => InferRequestType<
    (typeof client.dcim)['console-server-ports'][':id']['trace']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimConsoleServerPortsIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimDeviceBayTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bay-templates/', args] as const
}

export function getDcimDeviceBayTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceBayTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-bay-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceBayTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bay-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-bay-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceBayTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimDeviceBayTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimDeviceBayTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceBayTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bay-templates/:id/', args] as const
}

export function getDcimDeviceBayTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceBayTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-bay-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceBayTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bay-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['device-bay-templates'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimDeviceBayTemplatesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceBayTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimDeviceBayTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimDeviceBayTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimDeviceBayTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimDeviceBayTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimDeviceBayTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimDeviceBayTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceBaysIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bays/', args] as const
}

export function getDcimDeviceBaysIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceBaysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-bays'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceBaysIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bays']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-bays']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimDeviceBaysIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimDeviceBaysIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimDeviceBaysIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceBaysIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-bays/:id/', args] as const
}

export function getDcimDeviceBaysIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceBaysIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-bays'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceBaysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-bays'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceBaysIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimDeviceBaysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimDeviceBaysIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimDeviceBaysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimDeviceBaysIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimDeviceBaysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimDeviceBaysIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceRolesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-roles/', args] as const
}

export function getDcimDeviceRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-roles'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-roles']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-roles']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceRolesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimDeviceRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimDeviceRolesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceRolesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-roles/:id/', args] as const
}

export function getDcimDeviceRolesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceRolesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-roles'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-roles'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceRolesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimDeviceRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimDeviceRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimDeviceRolesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimDeviceRolesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimDeviceRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimDeviceRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceTypesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-types/', args] as const
}

export function getDcimDeviceTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-types'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-types']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceTypesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimDeviceTypesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimDeviceTypesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDeviceTypesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/device-types/:id/', args] as const
}

export function getDcimDeviceTypesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDeviceTypesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['device-types'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDeviceTypesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['device-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['device-types'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDeviceTypesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimDeviceTypesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimDeviceTypesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimDeviceTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimDeviceTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimDeviceTypesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimDeviceTypesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDevicesIndexQueryKey(
  args: InferRequestType<typeof client.dcim.devices.index.$get>,
) {
  return ['dcim', '/dcim/devices/', args] as const
}

export function getDcimDevicesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dcim.devices.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimDevicesIndexQueryKey>
  >({
    queryKey: getDcimDevicesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.devices.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimDevicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.devices.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDcimDevicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimDevicesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimDevicesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.devices.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.devices.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimDevicesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDevicesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/devices/:id/', args] as const
}

export function getDcimDevicesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDevicesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.devices[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDevicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.devices)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimDevicesIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDcimDevicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimDevicesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimDevicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimDevicesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimDevicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimDevicesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimDevicesIdGraphsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
) {
  return ['dcim', '/dcim/devices/:id/graphs/', args] as const
}

export function getDcimDevicesIdGraphsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDevicesIdGraphsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.devices[':id'].graphs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDevicesIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.devices)[':id']['graphs']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDevicesIdGraphsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimDevicesIdNapalmIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
) {
  return ['dcim', '/dcim/devices/:id/napalm/', args] as const
}

export function getDcimDevicesIdNapalmIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimDevicesIdNapalmIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.devices[':id'].napalm.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimDevicesIdNapalmIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.devices)[':id']['napalm']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimDevicesIdNapalmIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimFrontPortTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-port-templates/', args] as const
}

export function getDcimFrontPortTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimFrontPortTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['front-port-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimFrontPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['front-port-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimFrontPortTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimFrontPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimFrontPortTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimFrontPortTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-port-templates/:id/', args] as const
}

export function getDcimFrontPortTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimFrontPortTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['front-port-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimFrontPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['front-port-templates'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimFrontPortTemplatesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimFrontPortTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimFrontPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimFrontPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimFrontPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimFrontPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimFrontPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimFrontPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimFrontPortsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-ports/', args] as const
}

export function getDcimFrontPortsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimFrontPortsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['front-ports'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimFrontPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['front-ports']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimFrontPortsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimFrontPortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimFrontPortsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimFrontPortsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-ports/:id/', args] as const
}

export function getDcimFrontPortsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimFrontPortsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['front-ports'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimFrontPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['front-ports'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimFrontPortsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimFrontPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimFrontPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimFrontPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimFrontPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimFrontPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimFrontPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimFrontPortsIdTraceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/front-ports/:id/trace/', args] as const
}

export function getDcimFrontPortsIdTraceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimFrontPortsIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['front-ports'][':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimFrontPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['front-ports'][':id']['trace']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimFrontPortsIdTraceIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimFrontPortsIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimInterfaceConnectionsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
) {
  return ['dcim', '/dcim/interface-connections/', args] as const
}

export function getDcimInterfaceConnectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInterfaceConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['interface-connections'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInterfaceConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['interface-connections']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInterfaceConnectionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimInterfaceTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/interface-templates/', args] as const
}

export function getDcimInterfaceTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInterfaceTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['interface-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInterfaceTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['interface-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInterfaceTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimInterfaceTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimInterfaceTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimInterfaceTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/interface-templates/:id/', args] as const
}

export function getDcimInterfaceTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInterfaceTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['interface-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInterfaceTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['interface-templates'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimInterfaceTemplatesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInterfaceTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimInterfaceTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimInterfaceTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimInterfaceTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimInterfaceTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimInterfaceTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimInterfaceTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimInterfacesIndexQueryKey(
  args: InferRequestType<typeof client.dcim.interfaces.index.$get>,
) {
  return ['dcim', '/dcim/interfaces/', args] as const
}

export function getDcimInterfacesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dcim.interfaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimInterfacesIndexQueryKey>
  >({
    queryKey: getDcimInterfacesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.interfaces.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimInterfacesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.interfaces.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDcimInterfacesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimInterfacesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimInterfacesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.interfaces.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.interfaces.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimInterfacesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimInterfacesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/interfaces/:id/', args] as const
}

export function getDcimInterfacesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInterfacesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.interfaces[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInterfacesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.interfaces)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInterfacesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimInterfacesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimInterfacesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimInterfacesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimInterfacesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimInterfacesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimInterfacesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimInterfacesIdGraphsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
) {
  return ['dcim', '/dcim/interfaces/:id/graphs/', args] as const
}

export function getDcimInterfacesIdGraphsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInterfacesIdGraphsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.interfaces[':id'].graphs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInterfacesIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.interfaces)[':id']['graphs']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInterfacesIdGraphsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimInterfacesIdTraceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/interfaces/:id/trace/', args] as const
}

export function getDcimInterfacesIdTraceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInterfacesIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.interfaces[':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInterfacesIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.interfaces)[':id']['trace']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInterfacesIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimInventoryItemsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
) {
  return ['dcim', '/dcim/inventory-items/', args] as const
}

export function getDcimInventoryItemsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInventoryItemsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['inventory-items'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInventoryItemsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['inventory-items']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['inventory-items']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInventoryItemsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimInventoryItemsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimInventoryItemsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimInventoryItemsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/inventory-items/:id/', args] as const
}

export function getDcimInventoryItemsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimInventoryItemsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['inventory-items'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimInventoryItemsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['inventory-items'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimInventoryItemsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimInventoryItemsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimInventoryItemsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimInventoryItemsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimInventoryItemsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimInventoryItemsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimInventoryItemsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimManufacturersIndexQueryKey(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
) {
  return ['dcim', '/dcim/manufacturers/', args] as const
}

export function getDcimManufacturersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dcim.manufacturers.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDcimManufacturersIndexQueryKey>
  >({
    queryKey: getDcimManufacturersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.manufacturers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimManufacturersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.manufacturers.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDcimManufacturersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimManufacturersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimManufacturersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.manufacturers.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.manufacturers.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimManufacturersIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimManufacturersIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/manufacturers/:id/', args] as const
}

export function getDcimManufacturersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimManufacturersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.manufacturers[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimManufacturersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.manufacturers)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimManufacturersIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimManufacturersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimManufacturersIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimManufacturersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimManufacturersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimManufacturersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimManufacturersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPlatformsIndexQueryKey(
  args: InferRequestType<typeof client.dcim.platforms.index.$get>,
) {
  return ['dcim', '/dcim/platforms/', args] as const
}

export function getDcimPlatformsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dcim.platforms.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimPlatformsIndexQueryKey>
  >({
    queryKey: getDcimPlatformsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.platforms.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimPlatformsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.platforms.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDcimPlatformsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimPlatformsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimPlatformsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.platforms.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.platforms.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPlatformsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPlatformsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/platforms/:id/', args] as const
}

export function getDcimPlatformsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPlatformsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.platforms[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPlatformsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.platforms)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.platforms)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPlatformsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPlatformsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPlatformsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPlatformsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPlatformsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPlatformsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPlatformsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerConnectionsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-connections/', args] as const
}

export function getDcimPowerConnectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-connections'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-connections']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-connections']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerConnectionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimPowerFeedsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-feeds/', args] as const
}

export function getDcimPowerFeedsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerFeedsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-feeds'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerFeedsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-feeds']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-feeds']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimPowerFeedsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimPowerFeedsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPowerFeedsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerFeedsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-feeds/:id/', args] as const
}

export function getDcimPowerFeedsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerFeedsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-feeds'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerFeedsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-feeds'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerFeedsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPowerFeedsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPowerFeedsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPowerFeedsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPowerFeedsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPowerFeedsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPowerFeedsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerOutletTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlet-templates/', args] as const
}

export function getDcimPowerOutletTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerOutletTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-outlet-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerOutletTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-outlet-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerOutletTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimPowerOutletTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPowerOutletTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerOutletTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlet-templates/:id/', args] as const
}

export function getDcimPowerOutletTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerOutletTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-outlet-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerOutletTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['power-outlet-templates'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerOutletTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPowerOutletTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPowerOutletTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPowerOutletTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.dcim)['power-outlet-templates'][':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPowerOutletTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPowerOutletTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPowerOutletTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerOutletsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlets/', args] as const
}

export function getDcimPowerOutletsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerOutletsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-outlets'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerOutletsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-outlets']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerOutletsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimPowerOutletsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPowerOutletsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerOutletsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlets/:id/', args] as const
}

export function getDcimPowerOutletsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerOutletsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-outlets'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerOutletsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-outlets'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerOutletsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPowerOutletsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPowerOutletsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPowerOutletsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPowerOutletsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPowerOutletsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPowerOutletsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerOutletsIdTraceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-outlets/:id/trace/', args] as const
}

export function getDcimPowerOutletsIdTraceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerOutletsIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-outlets'][':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerOutletsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['power-outlets'][':id']['trace']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerOutletsIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimPowerPanelsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-panels/', args] as const
}

export function getDcimPowerPanelsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPanelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-panels'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPanelsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-panels']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-panels']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerPanelsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimPowerPanelsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPowerPanelsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerPanelsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-panels/:id/', args] as const
}

export function getDcimPowerPanelsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPanelsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-panels'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPanelsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-panels'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerPanelsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPowerPanelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPowerPanelsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPowerPanelsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPowerPanelsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPowerPanelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPowerPanelsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerPortTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-port-templates/', args] as const
}

export function getDcimPowerPortTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPortTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-port-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-port-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerPortTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimPowerPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPowerPortTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerPortTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-port-templates/:id/', args] as const
}

export function getDcimPowerPortTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPortTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-port-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['power-port-templates'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimPowerPortTemplatesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerPortTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPowerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPowerPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPowerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPowerPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPowerPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPowerPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerPortsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-ports/', args] as const
}

export function getDcimPowerPortsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPortsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-ports'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-ports']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimPowerPortsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimPowerPortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimPowerPortsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerPortsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-ports/:id/', args] as const
}

export function getDcimPowerPortsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPortsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-ports'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['power-ports'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerPortsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimPowerPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimPowerPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimPowerPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimPowerPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimPowerPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimPowerPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimPowerPortsIdTraceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/power-ports/:id/trace/', args] as const
}

export function getDcimPowerPortsIdTraceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimPowerPortsIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['power-ports'][':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimPowerPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dcim)['power-ports'][':id']['trace']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimPowerPortsIdTraceIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimPowerPortsIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimRackGroupsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-groups/', args] as const
}

export function getDcimRackGroupsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRackGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rack-groups'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRackGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rack-groups']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRackGroupsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimRackGroupsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRackGroupsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRackGroupsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-groups/:id/', args] as const
}

export function getDcimRackGroupsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRackGroupsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rack-groups'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRackGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rack-groups'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRackGroupsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimRackGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRackGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRackGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRackGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRackGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRackGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRackReservationsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-reservations/', args] as const
}

export function getDcimRackReservationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRackReservationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rack-reservations'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRackReservationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-reservations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rack-reservations']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRackReservationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimRackReservationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRackReservationsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRackReservationsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-reservations/:id/', args] as const
}

export function getDcimRackReservationsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRackReservationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rack-reservations'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRackReservationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rack-reservations'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRackReservationsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimRackReservationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRackReservationsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRackReservationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRackReservationsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRackReservationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRackReservationsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRackRolesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-roles/', args] as const
}

export function getDcimRackRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRackRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rack-roles'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRackRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim)['rack-roles']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rack-roles']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRackRolesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimRackRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRackRolesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRackRolesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rack-roles/:id/', args] as const
}

export function getDcimRackRolesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRackRolesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rack-roles'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRackRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rack-roles'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRackRolesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimRackRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRackRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRackRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRackRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRackRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRackRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRacksIndexQueryKey(
  args: InferRequestType<typeof client.dcim.racks.index.$get>,
) {
  return ['dcim', '/dcim/racks/', args] as const
}

export function getDcimRacksIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dcim.racks.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRacksIndexQueryKey>
  >({
    queryKey: getDcimRacksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.racks.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimRacksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.racks.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDcimRacksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRacksIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimRacksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.racks.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.racks.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRacksIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRacksIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/racks/:id/', args] as const
}

export function getDcimRacksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRacksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.racks[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRacksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.racks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.racks)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRacksIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDcimRacksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRacksIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRacksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRacksIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRacksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRacksIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRacksIdElevationIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
) {
  return ['dcim', '/dcim/racks/:id/elevation/', args] as const
}

export function getDcimRacksIdElevationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRacksIdElevationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.racks[':id'].elevation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRacksIdElevationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.racks)[':id']['elevation']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRacksIdElevationIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimRearPortTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-port-templates/', args] as const
}

export function getDcimRearPortTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRearPortTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rear-port-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRearPortTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-port-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rear-port-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRearPortTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimRearPortTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRearPortTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRearPortTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-port-templates/:id/', args] as const
}

export function getDcimRearPortTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRearPortTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rear-port-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRearPortTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rear-port-templates'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimRearPortTemplatesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRearPortTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimRearPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRearPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRearPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRearPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRearPortTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRearPortTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRearPortsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-ports/', args] as const
}

export function getDcimRearPortsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRearPortsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rear-ports'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRearPortsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim)['rear-ports']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rear-ports']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRearPortsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimRearPortsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRearPortsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRearPortsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-ports/:id/', args] as const
}

export function getDcimRearPortsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRearPortsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rear-ports'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRearPortsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rear-ports'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRearPortsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimRearPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRearPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRearPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRearPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRearPortsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRearPortsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRearPortsIdTraceIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
) {
  return ['dcim', '/dcim/rear-ports/:id/trace/', args] as const
}

export function getDcimRearPortsIdTraceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRearPortsIdTraceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['rear-ports'][':id'].trace.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRearPortsIdTraceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['rear-ports'][':id']['trace']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDcimRearPortsIdTraceIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimRearPortsIdTraceIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimRegionsIndexQueryKey(
  args: InferRequestType<typeof client.dcim.regions.index.$get>,
) {
  return ['dcim', '/dcim/regions/', args] as const
}

export function getDcimRegionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dcim.regions.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimRegionsIndexQueryKey>
  >({
    queryKey: getDcimRegionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.regions.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimRegionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.regions.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDcimRegionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRegionsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimRegionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.regions.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.regions.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimRegionsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimRegionsIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/regions/:id/', args] as const
}

export function getDcimRegionsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimRegionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.regions[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimRegionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.regions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.regions)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimRegionsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDcimRegionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimRegionsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimRegionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimRegionsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimRegionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimRegionsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimSitesIndexQueryKey(
  args: InferRequestType<typeof client.dcim.sites.index.$get>,
) {
  return ['dcim', '/dcim/sites/', args] as const
}

export function getDcimSitesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dcim.sites.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDcimSitesIndexQueryKey>
  >({
    queryKey: getDcimSitesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.sites.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDcimSitesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dcim.sites.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDcimSitesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimSitesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDcimSitesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dcim.sites.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dcim.sites.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimSitesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimSitesIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/sites/:id/', args] as const
}

export function getDcimSitesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimSitesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.sites[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimSitesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dcim.sites)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.sites)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDcimSitesIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDcimSitesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimSitesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimSitesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimSitesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimSitesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimSitesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimSitesIdGraphsIndexQueryKey(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
) {
  return ['dcim', '/dcim/sites/:id/graphs/', args] as const
}

export function getDcimSitesIdGraphsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimSitesIdGraphsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim.sites[':id'].graphs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimSitesIdGraphsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim.sites)[':id']['graphs']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimSitesIdGraphsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDcimVirtualChassisIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
) {
  return ['dcim', '/dcim/virtual-chassis/', args] as const
}

export function getDcimVirtualChassisIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimVirtualChassisIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['virtual-chassis'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimVirtualChassisIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['virtual-chassis']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['virtual-chassis']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimVirtualChassisIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDcimVirtualChassisIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDcimVirtualChassisIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDcimVirtualChassisIdIndexQueryKey(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
) {
  return ['dcim', '/dcim/virtual-chassis/:id/', args] as const
}

export function getDcimVirtualChassisIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDcimVirtualChassisIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dcim['virtual-chassis'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDcimVirtualChassisIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dcim)['virtual-chassis'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDcimVirtualChassisIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDcimVirtualChassisIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDcimVirtualChassisIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDcimVirtualChassisIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDcimVirtualChassisIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDcimVirtualChassisIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDcimVirtualChassisIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasCustomFieldChoicesIndexQueryKey() {
  return ['extras', '/extras/_custom_field_choices/'] as const
}

export function getExtrasCustomFieldChoicesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getExtrasCustomFieldChoicesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.extras._custom_field_choices.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasCustomFieldChoicesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.extras._custom_field_choices.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasCustomFieldChoicesIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getExtrasCustomFieldChoicesIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/_custom_field_choices/:id/', args] as const
}

export function getExtrasCustomFieldChoicesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasCustomFieldChoicesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras._custom_field_choices[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasCustomFieldChoicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras._custom_field_choices)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.extras._custom_field_choices)[':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getExtrasCustomFieldChoicesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasCustomFieldChoicesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getExtrasConfigContextsIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
) {
  return ['extras', '/extras/config-contexts/', args] as const
}

export function getExtrasConfigContextsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasConfigContextsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['config-contexts'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasConfigContextsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['config-contexts']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['config-contexts']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasConfigContextsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostExtrasConfigContextsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtrasConfigContextsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasConfigContextsIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/config-contexts/:id/', args] as const
}

export function getExtrasConfigContextsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasConfigContextsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['config-contexts'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasConfigContextsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['config-contexts'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasConfigContextsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutExtrasConfigContextsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtrasConfigContextsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteExtrasConfigContextsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteExtrasConfigContextsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchExtrasConfigContextsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchExtrasConfigContextsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasExportTemplatesIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
) {
  return ['extras', '/extras/export-templates/', args] as const
}

export function getExtrasExportTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasExportTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['export-templates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasExportTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['export-templates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['export-templates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasExportTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostExtrasExportTemplatesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtrasExportTemplatesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasExportTemplatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/export-templates/:id/', args] as const
}

export function getExtrasExportTemplatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasExportTemplatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['export-templates'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasExportTemplatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['export-templates'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['export-templates'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getExtrasExportTemplatesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasExportTemplatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutExtrasExportTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtrasExportTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteExtrasExportTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteExtrasExportTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchExtrasExportTemplatesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchExtrasExportTemplatesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasGraphsIndexQueryKey(
  args: InferRequestType<typeof client.extras.graphs.index.$get>,
) {
  return ['extras', '/extras/graphs/', args] as const
}

export function getExtrasGraphsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.extras.graphs.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasGraphsIndexQueryKey>
  >({
    queryKey: getExtrasGraphsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.graphs.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExtrasGraphsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extras.graphs.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtrasGraphsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtrasGraphsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostExtrasGraphsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extras.graphs.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.extras.graphs.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtrasGraphsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasGraphsIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/graphs/:id/', args] as const
}

export function getExtrasGraphsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasGraphsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.graphs[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasGraphsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.graphs)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras.graphs)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtrasGraphsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutExtrasGraphsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtrasGraphsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteExtrasGraphsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteExtrasGraphsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchExtrasGraphsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchExtrasGraphsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasImageAttachmentsIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
) {
  return ['extras', '/extras/image-attachments/', args] as const
}

export function getExtrasImageAttachmentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasImageAttachmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['image-attachments'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasImageAttachmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['image-attachments']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['image-attachments']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasImageAttachmentsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostExtrasImageAttachmentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtrasImageAttachmentsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasImageAttachmentsIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/image-attachments/:id/', args] as const
}

export function getExtrasImageAttachmentsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasImageAttachmentsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['image-attachments'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasImageAttachmentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['image-attachments'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getExtrasImageAttachmentsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasImageAttachmentsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutExtrasImageAttachmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtrasImageAttachmentsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteExtrasImageAttachmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteExtrasImageAttachmentsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchExtrasImageAttachmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchExtrasImageAttachmentsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasObjectChangesIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
) {
  return ['extras', '/extras/object-changes/', args] as const
}

export function getExtrasObjectChangesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasObjectChangesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['object-changes'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasObjectChangesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['object-changes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['object-changes']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasObjectChangesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getExtrasObjectChangesIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
) {
  return ['extras', '/extras/object-changes/:id/', args] as const
}

export function getExtrasObjectChangesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasObjectChangesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras['object-changes'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasObjectChangesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras)['object-changes'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras)['object-changes'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasObjectChangesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getExtrasReportsIndexQueryKey() {
  return ['extras', '/extras/reports/'] as const
}

export function getExtrasReportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasReportsIndexQueryKey>
  >({
    queryKey: getExtrasReportsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.reports.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasReportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extras.reports.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtrasReportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtrasReportsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getExtrasReportsIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/reports/:id/', args] as const
}

export function getExtrasReportsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasReportsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.reports[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasReportsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.reports)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras.reports)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasReportsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostExtrasReportsIdRunIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtrasReportsIdRunIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasScriptsIndexQueryKey() {
  return ['extras', '/extras/scripts/'] as const
}

export function getExtrasScriptsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasScriptsIndexQueryKey>
  >({
    queryKey: getExtrasScriptsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.scripts.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasScriptsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extras.scripts.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtrasScriptsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtrasScriptsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getExtrasScriptsIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/scripts/:id/', args] as const
}

export function getExtrasScriptsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasScriptsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.scripts[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasScriptsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extras.scripts)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras.scripts)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExtrasScriptsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getExtrasTagsIndexQueryKey(
  args: InferRequestType<typeof client.extras.tags.index.$get>,
) {
  return ['extras', '/extras/tags/', args] as const
}

export function getExtrasTagsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.extras.tags.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtrasTagsIndexQueryKey>
  >({
    queryKey: getExtrasTagsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.tags.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExtrasTagsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.extras.tags.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtrasTagsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtrasTagsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostExtrasTagsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extras.tags.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.extras.tags.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExtrasTagsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtrasTagsIdIndexQueryKey(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
) {
  return ['extras', '/extras/tags/:id/', args] as const
}

export function getExtrasTagsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExtrasTagsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extras.tags[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExtrasTagsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.extras.tags)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.extras.tags)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtrasTagsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutExtrasTagsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutExtrasTagsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteExtrasTagsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteExtrasTagsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchExtrasTagsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchExtrasTagsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamAggregatesIndexQueryKey(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
) {
  return ['ipam', '/ipam/aggregates/', args] as const
}

export function getIpamAggregatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ipam.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamAggregatesIndexQueryKey>
  >({
    queryKey: getIpamAggregatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.aggregates.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamAggregatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.aggregates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpamAggregatesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamAggregatesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamAggregatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.aggregates.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ipam.aggregates.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamAggregatesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamAggregatesIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/aggregates/:id/', args] as const
}

export function getIpamAggregatesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamAggregatesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.aggregates[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamAggregatesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.aggregates)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.aggregates)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIpamAggregatesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutIpamAggregatesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamAggregatesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamAggregatesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamAggregatesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamAggregatesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamAggregatesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamIpAddressesIndexQueryKey(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
) {
  return ['ipam', '/ipam/ip-addresses/', args] as const
}

export function getIpamIpAddressesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamIpAddressesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam['ip-addresses'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamIpAddressesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['ip-addresses']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam)['ip-addresses']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIpamIpAddressesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostIpamIpAddressesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamIpAddressesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamIpAddressesIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/ip-addresses/:id/', args] as const
}

export function getIpamIpAddressesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamIpAddressesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam['ip-addresses'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamIpAddressesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam)['ip-addresses'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIpamIpAddressesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutIpamIpAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamIpAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamIpAddressesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamIpAddressesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamIpAddressesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamIpAddressesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamPrefixesIndexQueryKey(
  args: InferRequestType<typeof client.ipam.prefixes.index.$get>,
) {
  return ['ipam', '/ipam/prefixes/', args] as const
}

export function getIpamPrefixesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipam.prefixes.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamPrefixesIndexQueryKey>
  >({
    queryKey: getIpamPrefixesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.prefixes.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamPrefixesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.prefixes.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpamPrefixesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamPrefixesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamPrefixesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.prefixes.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ipam.prefixes.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamPrefixesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamPrefixesIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/prefixes/:id/', args] as const
}

export function getIpamPrefixesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamPrefixesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.prefixes[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamPrefixesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.prefixes)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamPrefixesIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutIpamPrefixesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamPrefixesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamPrefixesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamPrefixesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamPrefixesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamPrefixesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamPrefixesIdAvailableIpsIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>,
) {
  return ['ipam', '/ipam/prefixes/:id/available-ips/', args] as const
}

export function getIpamPrefixesIdAvailableIpsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamPrefixesIdAvailableIpsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.prefixes[':id']['available-ips'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamPrefixesIdAvailableIpsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-ips']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIpamPrefixesIdAvailableIpsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostIpamPrefixesIdAvailableIpsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamPrefixesIdAvailableIpsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamPrefixesIdAvailablePrefixesIndexQueryKey(
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
) {
  return ['ipam', '/ipam/prefixes/:id/available-prefixes/', args] as const
}

export function getIpamPrefixesIdAvailablePrefixesIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamPrefixesIdAvailablePrefixesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.prefixes[':id']['available-prefixes'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamPrefixesIdAvailablePrefixesIndex<
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
  args: () => InferRequestType<
    (typeof client.ipam.prefixes)[':id']['available-prefixes']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getIpamPrefixesIdAvailablePrefixesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIpamPrefixesIdAvailablePrefixesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostIpamPrefixesIdAvailablePrefixesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamPrefixesIdAvailablePrefixesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamRirsIndexQueryKey(
  args: InferRequestType<typeof client.ipam.rirs.index.$get>,
) {
  return ['ipam', '/ipam/rirs/', args] as const
}

export function getIpamRirsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipam.rirs.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRirsIndexQueryKey>
  >({
    queryKey: getIpamRirsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.rirs.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamRirsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.rirs.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpamRirsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamRirsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamRirsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.rirs.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ipam.rirs.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamRirsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamRirsIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/rirs/:id/', args] as const
}

export function getIpamRirsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRirsIdIndexQueryKey>
  >({
    queryKey: getIpamRirsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.rirs[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamRirsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.rirs)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ipam.rirs)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpamRirsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamRirsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutIpamRirsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamRirsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamRirsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamRirsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamRirsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamRirsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamRolesIndexQueryKey(
  args: InferRequestType<typeof client.ipam.roles.index.$get>,
) {
  return ['ipam', '/ipam/roles/', args] as const
}

export function getIpamRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipam.roles.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamRolesIndexQueryKey>
  >({
    queryKey: getIpamRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.roles.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.roles.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpamRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamRolesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.roles.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ipam.roles.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamRolesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamRolesIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/roles/:id/', args] as const
}

export function getIpamRolesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamRolesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.roles[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.roles)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.roles)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamRolesIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutIpamRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamRolesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamRolesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamServicesIndexQueryKey(
  args: InferRequestType<typeof client.ipam.services.index.$get>,
) {
  return ['ipam', '/ipam/services/', args] as const
}

export function getIpamServicesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipam.services.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamServicesIndexQueryKey>
  >({
    queryKey: getIpamServicesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.services.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamServicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.services.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpamServicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamServicesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamServicesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.services.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ipam.services.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamServicesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamServicesIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/services/:id/', args] as const
}

export function getIpamServicesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamServicesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.services[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamServicesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam.services)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.services)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamServicesIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutIpamServicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamServicesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamServicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamServicesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamServicesIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamServicesIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamVlanGroupsIndexQueryKey(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
) {
  return ['ipam', '/ipam/vlan-groups/', args] as const
}

export function getIpamVlanGroupsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamVlanGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam['vlan-groups'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamVlanGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['vlan-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam)['vlan-groups']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamVlanGroupsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamVlanGroupsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamVlanGroupsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamVlanGroupsIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/vlan-groups/:id/', args] as const
}

export function getIpamVlanGroupsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamVlanGroupsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam['vlan-groups'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamVlanGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam)['vlan-groups'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIpamVlanGroupsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutIpamVlanGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamVlanGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamVlanGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamVlanGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamVlanGroupsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamVlanGroupsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamVlansIndexQueryKey(
  args: InferRequestType<typeof client.ipam.vlans.index.$get>,
) {
  return ['ipam', '/ipam/vlans/', args] as const
}

export function getIpamVlansIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipam.vlans.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVlansIndexQueryKey>
  >({
    queryKey: getIpamVlansIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.vlans.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamVlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.vlans.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpamVlansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamVlansIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamVlansIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vlans.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ipam.vlans.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamVlansIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamVlansIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/vlans/:id/', args] as const
}

export function getIpamVlansIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIpamVlansIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.vlans[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamVlansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vlans)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.vlans)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamVlansIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutIpamVlansIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamVlansIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamVlansIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamVlansIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamVlansIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamVlansIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamVrfsIndexQueryKey(
  args: InferRequestType<typeof client.ipam.vrfs.index.$get>,
) {
  return ['ipam', '/ipam/vrfs/', args] as const
}

export function getIpamVrfsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipam.vrfs.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVrfsIndexQueryKey>
  >({
    queryKey: getIpamVrfsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.vrfs.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpamVrfsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipam.vrfs.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpamVrfsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamVrfsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostIpamVrfsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipam.vrfs.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ipam.vrfs.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpamVrfsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpamVrfsIdIndexQueryKey(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
) {
  return ['ipam', '/ipam/vrfs/:id/', args] as const
}

export function getIpamVrfsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpamVrfsIdIndexQueryKey>
  >({
    queryKey: getIpamVrfsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipam.vrfs[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIpamVrfsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipam.vrfs)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ipam.vrfs)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpamVrfsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpamVrfsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutIpamVrfsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpamVrfsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteIpamVrfsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpamVrfsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchIpamVrfsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpamVrfsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecretsGenerateRsaKeyPairIndexQueryKey() {
  return ['secrets', '/secrets/generate-rsa-key-pair/'] as const
}

export function getSecretsGenerateRsaKeyPairIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getSecretsGenerateRsaKeyPairIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets['generate-rsa-key-pair'].index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSecretsGenerateRsaKeyPairIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['generate-rsa-key-pair']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecretsGenerateRsaKeyPairIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSecretsGetSessionKeyIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecretsGetSessionKeyIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecretsSecretRolesIndexQueryKey(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
) {
  return ['secrets', '/secrets/secret-roles/', args] as const
}

export function getSecretsSecretRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSecretsSecretRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets['secret-roles'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSecretsSecretRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['secret-roles']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.secrets)['secret-roles']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecretsSecretRolesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSecretsSecretRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecretsSecretRolesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecretsSecretRolesIdIndexQueryKey(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
) {
  return ['secrets', '/secrets/secret-roles/:id/', args] as const
}

export function getSecretsSecretRolesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSecretsSecretRolesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets['secret-roles'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSecretsSecretRolesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.secrets)['secret-roles'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecretsSecretRolesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSecretsSecretRolesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSecretsSecretRolesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSecretsSecretRolesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSecretsSecretRolesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchSecretsSecretRolesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSecretsSecretRolesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecretsSecretsIndexQueryKey(
  args: InferRequestType<typeof client.secrets.secrets.index.$get>,
) {
  return ['secrets', '/secrets/secrets/', args] as const
}

export function getSecretsSecretsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.secrets.secrets.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsSecretsIndexQueryKey>
  >({
    queryKey: getSecretsSecretsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets.secrets.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSecretsSecretsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.secrets.secrets.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretsSecretsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsSecretsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSecretsSecretsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secrets.secrets.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.secrets.secrets.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecretsSecretsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecretsSecretsIdIndexQueryKey(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
) {
  return ['secrets', '/secrets/secrets/:id/', args] as const
}

export function getSecretsSecretsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSecretsSecretsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets.secrets[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSecretsSecretsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.secrets.secrets)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.secrets.secrets)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecretsSecretsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSecretsSecretsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSecretsSecretsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSecretsSecretsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSecretsSecretsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchSecretsSecretsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSecretsSecretsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTenancyTenantGroupsIndexQueryKey(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
) {
  return ['tenancy', '/tenancy/tenant-groups/', args] as const
}

export function getTenancyTenantGroupsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTenancyTenantGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tenancy['tenant-groups'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTenancyTenantGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy)['tenant-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tenancy)['tenant-groups']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTenancyTenantGroupsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTenancyTenantGroupsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTenancyTenantGroupsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTenancyTenantGroupsIdIndexQueryKey(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
) {
  return ['tenancy', '/tenancy/tenant-groups/:id/', args] as const
}

export function getTenancyTenantGroupsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTenancyTenantGroupsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tenancy['tenant-groups'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTenancyTenantGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tenancy)['tenant-groups'][':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTenancyTenantGroupsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTenancyTenantGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTenancyTenantGroupsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTenancyTenantGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTenancyTenantGroupsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTenancyTenantGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTenancyTenantGroupsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTenancyTenantsIndexQueryKey(
  args: InferRequestType<typeof client.tenancy.tenants.index.$get>,
) {
  return ['tenancy', '/tenancy/tenants/', args] as const
}

export function getTenancyTenantsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tenancy.tenants.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTenancyTenantsIndexQueryKey>
  >({
    queryKey: getTenancyTenantsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tenancy.tenants.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTenancyTenantsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tenancy.tenants.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTenancyTenantsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTenancyTenantsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTenancyTenantsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tenancy.tenants.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tenancy.tenants.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTenancyTenantsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTenancyTenantsIdIndexQueryKey(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
) {
  return ['tenancy', '/tenancy/tenants/:id/', args] as const
}

export function getTenancyTenantsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTenancyTenantsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tenancy.tenants[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTenancyTenantsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tenancy.tenants)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tenancy.tenants)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTenancyTenantsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTenancyTenantsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTenancyTenantsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTenancyTenantsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTenancyTenantsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTenancyTenantsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTenancyTenantsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationClusterGroupsIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-groups/', args] as const
}

export function getVirtualizationClusterGroupsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationClusterGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization['cluster-groups'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationClusterGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.virtualization)['cluster-groups']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationClusterGroupsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualizationClusterGroupsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualizationClusterGroupsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationClusterGroupsIdIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-groups/:id/', args] as const
}

export function getVirtualizationClusterGroupsIdIndexQueryOptions<
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
  args: InferRequestType<(typeof client.virtualization)['cluster-groups'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationClusterGroupsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization['cluster-groups'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationClusterGroupsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.virtualization)['cluster-groups'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationClusterGroupsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVirtualizationClusterGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVirtualizationClusterGroupsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVirtualizationClusterGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualizationClusterGroupsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVirtualizationClusterGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVirtualizationClusterGroupsIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationClusterTypesIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-types/', args] as const
}

export function getVirtualizationClusterTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationClusterTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization['cluster-types'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationClusterTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-types']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.virtualization)['cluster-types']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationClusterTypesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualizationClusterTypesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualizationClusterTypesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationClusterTypesIdIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/cluster-types/:id/', args] as const
}

export function getVirtualizationClusterTypesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationClusterTypesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization['cluster-types'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationClusterTypesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['cluster-types'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.virtualization)['cluster-types'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationClusterTypesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVirtualizationClusterTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVirtualizationClusterTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVirtualizationClusterTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualizationClusterTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVirtualizationClusterTypesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.virtualization)['cluster-types'][':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVirtualizationClusterTypesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationClustersIndexQueryKey(
  args: InferRequestType<typeof client.virtualization.clusters.index.$get>,
) {
  return ['virtualization', '/virtualization/clusters/', args] as const
}

export function getVirtualizationClustersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.virtualization.clusters.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualizationClustersIndexQueryKey>
  >({
    queryKey: getVirtualizationClustersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization.clusters.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationClustersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.virtualization.clusters.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.virtualization.clusters.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVirtualizationClustersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationClustersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualizationClustersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualizationClustersIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationClustersIdIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/clusters/:id/', args] as const
}

export function getVirtualizationClustersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationClustersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization.clusters[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationClustersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization.clusters)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.virtualization.clusters)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationClustersIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVirtualizationClustersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVirtualizationClustersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVirtualizationClustersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualizationClustersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVirtualizationClustersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVirtualizationClustersIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationInterfacesIndexQueryKey(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$get>,
) {
  return ['virtualization', '/virtualization/interfaces/', args] as const
}

export function getVirtualizationInterfacesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.virtualization.interfaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationInterfacesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization.interfaces.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationInterfacesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.virtualization.interfaces.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.virtualization.interfaces.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationInterfacesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualizationInterfacesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualizationInterfacesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationInterfacesIdIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/interfaces/:id/', args] as const
}

export function getVirtualizationInterfacesIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationInterfacesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization.interfaces[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationInterfacesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.virtualization.interfaces)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationInterfacesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVirtualizationInterfacesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVirtualizationInterfacesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVirtualizationInterfacesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualizationInterfacesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVirtualizationInterfacesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVirtualizationInterfacesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationVirtualMachinesIndexQueryKey(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
) {
  return ['virtualization', '/virtualization/virtual-machines/', args] as const
}

export function getVirtualizationVirtualMachinesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationVirtualMachinesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization['virtual-machines'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationVirtualMachinesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualization)['virtual-machines']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.virtualization)['virtual-machines']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVirtualizationVirtualMachinesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationVirtualMachinesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualizationVirtualMachinesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualizationVirtualMachinesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualizationVirtualMachinesIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
) {
  return ['virtualization', '/virtualization/virtual-machines/:id/', args] as const
}

export function getVirtualizationVirtualMachinesIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualizationVirtualMachinesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualization['virtual-machines'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualizationVirtualMachinesIdIndex<
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
  args: () => InferRequestType<
    (typeof client.virtualization)['virtual-machines'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVirtualizationVirtualMachinesIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualizationVirtualMachinesIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVirtualizationVirtualMachinesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVirtualizationVirtualMachinesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVirtualizationVirtualMachinesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualizationVirtualMachinesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVirtualizationVirtualMachinesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVirtualizationVirtualMachinesIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
