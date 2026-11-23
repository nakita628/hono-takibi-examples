import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ChargestationsQueryKey(
  args: InferRequestType<typeof client.v1.chargestations.$get>,
) {
  return ['v1', '/v1/chargestations', args] as const
}

export function getV1ChargestationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.chargestations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargestationsQueryKey>
  >({
    queryKey: getV1ChargestationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.chargestations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Chargestations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.chargestations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ChargestationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ChargestationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ChargestationsMutationKey() {
  return ['v1', '/v1/chargestations', 'POST'] as const
}

export function getPostV1ChargestationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.chargestations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChargestationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chargestations.$post>) {
      return parseResponse(client.v1.chargestations.$post(args, options))
    },
  })
}

export function createPostV1Chargestations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.chargestations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChargestationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ChargestationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>,
) {
  return ['v1', '/v1/chargestations/:id', args] as const
}

export function getV1ChargestationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargestationsIdQueryKey>
  >({
    queryKey: getV1ChargestationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.chargestations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChargestationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ChargestationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ChargestationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1ChargestationsIdMutationKey() {
  return ['v1', '/v1/chargestations/:id', 'DELETE'] as const
}

export function getDeleteV1ChargestationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.chargestations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ChargestationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.chargestations)[':id']['$delete']>) {
      return parseResponse(client.v1.chargestations[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ChargestationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.chargestations)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ChargestationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1ChargestationsIdMutationKey() {
  return ['v1', '/v1/chargestations/:id', 'PATCH'] as const
}

export function getPatchV1ChargestationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.chargestations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ChargestationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.chargestations)[':id']['$patch']>) {
      return parseResponse(client.v1.chargestations[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1ChargestationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.chargestations)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ChargestationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ChargestationsIdConnectorsQueryKey(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>,
) {
  return ['v1', '/v1/chargestations/:id/connectors', args] as const
}

export function getV1ChargestationsIdConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargestationsIdConnectorsQueryKey>
  >({
    queryKey: getV1ChargestationsIdConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.chargestations[':id'].connectors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ChargestationsIdConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ChargestationsIdConnectorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ChargestationsIdConnectorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CommandsQueryKey(args: InferRequestType<typeof client.v1.commands.$get>) {
  return ['v1', '/v1/commands', args] as const
}

export function getV1CommandsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.commands.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CommandsQueryKey>
  >({
    queryKey: getV1CommandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.commands.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Commands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.commands.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1CommandsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CommandsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CommandsCancelreservationMutationKey() {
  return ['v1', '/v1/commands/cancelreservation', 'POST'] as const
}

export function getPostV1CommandsCancelreservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.cancelreservation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.cancelreservation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsCancelreservationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.cancelreservation.$post>) {
      return parseResponse(client.v1.commands.cancelreservation.$post(args, options))
    },
  })
}

export function createPostV1CommandsCancelreservation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.commands.cancelreservation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.cancelreservation.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsCancelreservationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsChargingscheduleMutationKey() {
  return ['v1', '/v1/commands/chargingschedule', 'POST'] as const
}

export function getPostV1CommandsChargingscheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.chargingschedule.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.chargingschedule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsChargingscheduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.chargingschedule.$post>) {
      return parseResponse(client.v1.commands.chargingschedule.$post(args, options))
    },
  })
}

export function createPostV1CommandsChargingschedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.commands.chargingschedule.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.chargingschedule.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsChargingscheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CommandsChargingscheduleMutationKey() {
  return ['v1', '/v1/commands/chargingschedule', 'DELETE'] as const
}

export function getDeleteV1CommandsChargingscheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.commands.chargingschedule.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.chargingschedule.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CommandsChargingscheduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.chargingschedule.$delete>) {
      return parseResponse(client.v1.commands.chargingschedule.$delete(args, options))
    },
  })
}

export function createDeleteV1CommandsChargingschedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.commands.chargingschedule.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.chargingschedule.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CommandsChargingscheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRemotestartMutationKey() {
  return ['v1', '/v1/commands/remotestart', 'POST'] as const
}

export function getPostV1CommandsRemotestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.remotestart.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.remotestart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRemotestartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.remotestart.$post>) {
      return parseResponse(client.v1.commands.remotestart.$post(args, options))
    },
  })
}

export function createPostV1CommandsRemotestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.remotestart.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.remotestart.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsRemotestartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsRemotestopMutationKey() {
  return ['v1', '/v1/commands/remotestop', 'POST'] as const
}

export function getPostV1CommandsRemotestopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.remotestop.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.remotestop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsRemotestopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.remotestop.$post>) {
      return parseResponse(client.v1.commands.remotestop.$post(args, options))
    },
  })
}

export function createPostV1CommandsRemotestop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.remotestop.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.remotestop.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsRemotestopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsReserveMutationKey() {
  return ['v1', '/v1/commands/reserve', 'POST'] as const
}

export function getPostV1CommandsReserveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.reserve.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.commands.reserve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsReserveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.reserve.$post>) {
      return parseResponse(client.v1.commands.reserve.$post(args, options))
    },
  })
}

export function createPostV1CommandsReserve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.reserve.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.reserve.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsReserveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsResetMutationKey() {
  return ['v1', '/v1/commands/reset', 'POST'] as const
}

export function getPostV1CommandsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.reset.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.commands.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.reset.$post>) {
      return parseResponse(client.v1.commands.reset.$post(args, options))
    },
  })
}

export function createPostV1CommandsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.reset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.reset.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CommandsUnlockconnectorMutationKey() {
  return ['v1', '/v1/commands/unlockconnector', 'POST'] as const
}

export function getPostV1CommandsUnlockconnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.unlockconnector.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.commands.unlockconnector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CommandsUnlockconnectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.commands.unlockconnector.$post>) {
      return parseResponse(client.v1.commands.unlockconnector.$post(args, options))
    },
  })
}

export function createPostV1CommandsUnlockconnector<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.commands.unlockconnector.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.unlockconnector.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CommandsUnlockconnectorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CommandsIdVariablesQueryKey(
  args: InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>,
) {
  return ['v1', '/v1/commands/:id/variables', args] as const
}

export function getV1CommandsIdVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CommandsIdVariablesQueryKey>
  >({
    queryKey: getV1CommandsIdVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.commands[':id'].variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CommandsIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CommandsIdVariablesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CommandsIdVariablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchV1CommandsIdVariablesMutationKey() {
  return ['v1', '/v1/commands/:id/variables', 'PATCH'] as const
}

export function getPatchV1CommandsIdVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.commands)[':id']['variables']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CommandsIdVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.commands)[':id']['variables']['$patch']>,
    ) {
      return parseResponse(client.v1.commands[':id'].variables.$patch(args, options))
    },
  })
}

export function createPatchV1CommandsIdVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.commands)[':id']['variables']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1CommandsIdVariablesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigurationsQueryKey(
  args: InferRequestType<typeof client.v1.configurations.$get>,
) {
  return ['v1', '/v1/configurations', args] as const
}

export function getV1ConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.configurations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsQueryKey>
  >({
    queryKey: getV1ConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configurations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Configurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.configurations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConfigurationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConfigurationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ConfigurationsMutationKey() {
  return ['v1', '/v1/configurations', 'POST'] as const
}

export function getPostV1ConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.configurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.configurations.$post>) {
      return parseResponse(client.v1.configurations.$post(args, options))
    },
  })
}

export function createPostV1Configurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.configurations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConfigurationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigurationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.configurations)[':id']['$get']>,
) {
  return ['v1', '/v1/configurations/:id', args] as const
}

export function getV1ConfigurationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.configurations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsIdQueryKey>
  >({
    queryKey: getV1ConfigurationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configurations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigurationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.configurations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConfigurationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConfigurationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ConnectorsQueryKey(args: InferRequestType<typeof client.v1.connectors.$get>) {
  return ['v1', '/v1/connectors', args] as const
}

export function getV1ConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsQueryKey>
  >({
    queryKey: getV1ConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.connectors.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConnectorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConnectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ConnectorsMutationKey() {
  return ['v1', '/v1/connectors', 'POST'] as const
}

export function getPostV1ConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connectors.$post>) {
      return parseResponse(client.v1.connectors.$post(args, options))
    },
  })
}

export function createPostV1Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.connectors.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConnectorsIdQueryKey(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
) {
  return ['v1', '/v1/connectors/:id', args] as const
}

export function getV1ConnectorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsIdQueryKey>
  >({
    queryKey: getV1ConnectorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConnectorsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConnectorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1ConnectorsIdMutationKey() {
  return ['v1', '/v1/connectors/:id', 'DELETE'] as const
}

export function getDeleteV1ConnectorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>) {
      return parseResponse(client.v1.connectors[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1ConnectorsIdMutationKey() {
  return ['v1', '/v1/connectors/:id', 'PATCH'] as const
}

export function getPatchV1ConnectorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ConnectorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>) {
      return parseResponse(client.v1.connectors[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DriversQueryKey(args: InferRequestType<typeof client.v1.drivers.$get>) {
  return ['v1', '/v1/drivers', args] as const
}

export function getV1DriversQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.drivers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DriversQueryKey>
  >({
    queryKey: getV1DriversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.drivers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Drivers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.drivers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1DriversQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DriversQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1DriversMutationKey() {
  return ['v1', '/v1/drivers', 'POST'] as const
}

export function getPostV1DriversMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.drivers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DriversMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.drivers.$post>) {
      return parseResponse(client.v1.drivers.$post(args, options))
    },
  })
}

export function createPostV1Drivers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.drivers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DriversMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DriversIdQueryKey(
  args: InferRequestType<(typeof client.v1.drivers)[':id']['$get']>,
) {
  return ['v1', '/v1/drivers/:id', args] as const
}

export function getV1DriversIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.drivers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DriversIdQueryKey>
  >({
    queryKey: getV1DriversIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.drivers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1DriversId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.drivers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DriversIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DriversIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1DriversIdMutationKey() {
  return ['v1', '/v1/drivers/:id', 'DELETE'] as const
}

export function getDeleteV1DriversIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.drivers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DriversIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.drivers)[':id']['$delete']>) {
      return parseResponse(client.v1.drivers[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1DriversId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.drivers)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DriversIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1DriversIdMutationKey() {
  return ['v1', '/v1/drivers/:id', 'PATCH'] as const
}

export function getPatchV1DriversIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.drivers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DriversIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.drivers)[':id']['$patch']>) {
      return parseResponse(client.v1.drivers[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1DriversId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.drivers)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1DriversIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1LocationIdQueryKey(
  args: InferRequestType<(typeof client.v1.location)[':id']['$get']>,
) {
  return ['v1', '/v1/location/:id', args] as const
}

export function getV1LocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.location)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdQueryKey>
  >({
    queryKey: getV1LocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.location[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1LocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.location)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1LocationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LocationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1LocationIdMutationKey() {
  return ['v1', '/v1/location/:id', 'DELETE'] as const
}

export function getDeleteV1LocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.location)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1LocationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.location)[':id']['$delete']>) {
      return parseResponse(client.v1.location[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.location)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.location)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1LocationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1LocationIdMutationKey() {
  return ['v1', '/v1/location/:id', 'PATCH'] as const
}

export function getPatchV1LocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.location)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1LocationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.location)[':id']['$patch']>) {
      return parseResponse(client.v1.location[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.location)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.location)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1LocationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1LocationsQueryKey(args: InferRequestType<typeof client.v1.locations.$get>) {
  return ['v1', '/v1/locations', args] as const
}

export function getV1LocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LocationsQueryKey>
  >({
    queryKey: getV1LocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.locations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1LocationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1LocationsMutationKey() {
  return ['v1', '/v1/locations', 'POST'] as const
}

export function getPostV1LocationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.locations.$post>) {
      return parseResponse(client.v1.locations.$post(args, options))
    },
  })
}

export function createPostV1Locations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.locations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1OrganizationsQueryKey(
  args: InferRequestType<typeof client.v1.organizations.$get>,
) {
  return ['v1', '/v1/organizations', args] as const
}

export function getV1OrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.organizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >({
    queryKey: getV1OrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.organizations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OrganizationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrganizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1OrganizationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':id']['$get']>,
) {
  return ['v1', '/v1/organizations/:id', args] as const
}

export function getV1OrganizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsIdQueryKey>
  >({
    queryKey: getV1OrganizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.organizations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OrganizationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrganizationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchV1OrganizationsIdMutationKey() {
  return ['v1', '/v1/organizations/:id', 'PATCH'] as const
}

export function getPatchV1OrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1OrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.organizations)[':id']['$patch']>) {
      return parseResponse(client.v1.organizations[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1OrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.organizations)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1OrganizationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RealtimeQueryKey(args: InferRequestType<typeof client.v1.realtime.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/realtime', keyArgs] as const
}

export function getV1RealtimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.realtime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1RealtimeQueryKey>
  >({
    queryKey: getV1RealtimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.realtime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Realtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.realtime.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1RealtimeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RealtimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ReservationsQueryKey(
  args: InferRequestType<typeof client.v1.reservations.$get>,
) {
  return ['v1', '/v1/reservations', args] as const
}

export function getV1ReservationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.reservations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReservationsQueryKey>
  >({
    queryKey: getV1ReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reservations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Reservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reservations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReservationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReservationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ReservationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.reservations)[':id']['$get']>,
) {
  return ['v1', '/v1/reservations/:id', args] as const
}

export function getV1ReservationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reservations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReservationsIdQueryKey>
  >({
    queryKey: getV1ReservationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reservations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReservationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.reservations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ReservationsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReservationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchV1ReservationsIdMutationKey() {
  return ['v1', '/v1/reservations/:id', 'PATCH'] as const
}

export function getPatchV1ReservationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.reservations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ReservationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.reservations)[':id']['$patch']>) {
      return parseResponse(client.v1.reservations[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1ReservationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.reservations)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ReservationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TokensQueryKey(args: InferRequestType<typeof client.v1.tokens.$get>) {
  return ['v1', '/v1/tokens', args] as const
}

export function getV1TokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokensQueryKey>
  >({
    queryKey: getV1TokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tokens.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1TokensQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TokensMutationKey() {
  return ['v1', '/v1/tokens', 'POST'] as const
}

export function getPostV1TokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tokens.$post>) {
      return parseResponse(client.v1.tokens.$post(args, options))
    },
  })
}

export function createPostV1Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.tokens.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokensMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TokensIdQueryKey(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
) {
  return ['v1', '/v1/tokens/:id', args] as const
}

export function getV1TokensIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokensIdQueryKey>
  >({
    queryKey: getV1TokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokens[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TokensId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TokensIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TokensIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1TokensIdMutationKey() {
  return ['v1', '/v1/tokens/:id', 'DELETE'] as const
}

export function getDeleteV1TokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>) {
      return parseResponse(client.v1.tokens[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TokensIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1TokensIdMutationKey() {
  return ['v1', '/v1/tokens/:id', 'PATCH'] as const
}

export function getPatchV1TokensIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tokens)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tokens)[':id']['$patch']>) {
      return parseResponse(client.v1.tokens[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tokens)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1TokensIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TransactionsQueryKey(
  args: InferRequestType<typeof client.v1.transactions.$get>,
) {
  return ['v1', '/v1/transactions', args] as const
}

export function getV1TransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsQueryKey>
  >({
    queryKey: getV1TransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Transactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.transactions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TransactionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TransactionsIdQueryKey(
  args: InferRequestType<(typeof client.v1.transactions)[':id']['$get']>,
) {
  return ['v1', '/v1/transactions/:id', args] as const
}

export function getV1TransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsIdQueryKey>
  >({
    queryKey: getV1TransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TransactionsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TransactionsIdCostQueryKey(
  args: InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>,
) {
  return ['v1', '/v1/transactions/:id/cost', args] as const
}

export function getV1TransactionsIdCostQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsIdCostQueryKey>
  >({
    queryKey: getV1TransactionsIdCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions[':id'].cost.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsIdCost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TransactionsIdCostQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TransactionsIdCostQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1VehiclesQueryKey(args: InferRequestType<typeof client.v1.vehicles.$get>) {
  return ['v1', '/v1/vehicles', args] as const
}

export function getV1VehiclesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.vehicles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesQueryKey>
  >({
    queryKey: getV1VehiclesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vehicles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Vehicles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.vehicles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1VehiclesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1VehiclesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1VehiclesIdQueryKey(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>,
) {
  return ['v1', '/v1/vehicles/:id', args] as const
}

export function getV1VehiclesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdQueryKey>
  >({
    queryKey: getV1VehiclesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vehicles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1VehiclesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1VehiclesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1VehiclesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1VehiclesIdBatteryQueryKey(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>,
) {
  return ['v1', '/v1/vehicles/:id/battery', args] as const
}

export function getV1VehiclesIdBatteryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdBatteryQueryKey>
  >({
    queryKey: getV1VehiclesIdBatteryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vehicles[':id'].battery.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1VehiclesIdBattery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1VehiclesIdBatteryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1VehiclesIdBatteryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1VehiclesIdChargeQueryKey(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>,
) {
  return ['v1', '/v1/vehicles/:id/charge', args] as const
}

export function getV1VehiclesIdChargeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdChargeQueryKey>
  >({
    queryKey: getV1VehiclesIdChargeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vehicles[':id'].charge.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1VehiclesIdCharge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1VehiclesIdChargeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1VehiclesIdChargeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1VehiclesIdChargeMutationKey() {
  return ['v1', '/v1/vehicles/:id/charge', 'POST'] as const
}

export function getPostV1VehiclesIdChargeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VehiclesIdChargeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$post']>,
    ) {
      return parseResponse(client.v1.vehicles[':id'].charge.$post(args, options))
    },
  })
}

export function createPostV1VehiclesIdCharge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1VehiclesIdChargeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1VehiclesIdLocationQueryKey(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>,
) {
  return ['v1', '/v1/vehicles/:id/location', args] as const
}

export function getV1VehiclesIdLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdLocationQueryKey>
  >({
    queryKey: getV1VehiclesIdLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vehicles[':id'].location.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1VehiclesIdLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1VehiclesIdLocationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1VehiclesIdLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1VehiclesIdOdometerQueryKey(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>,
) {
  return ['v1', '/v1/vehicles/:id/odometer', args] as const
}

export function getV1VehiclesIdOdometerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdOdometerQueryKey>
  >({
    queryKey: getV1VehiclesIdOdometerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vehicles[':id'].odometer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1VehiclesIdOdometer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1VehiclesIdOdometerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1VehiclesIdOdometerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
