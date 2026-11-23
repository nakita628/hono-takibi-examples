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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ChargestationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.chargestations.$get>>,
) {
  return ['v1', '/v1/chargestations', toValue(args)] as const
}

export function getV1ChargestationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.chargestations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChargestationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.chargestations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Chargestations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.chargestations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>
            >
          >,
          ReturnType<typeof getV1ChargestationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargestationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChargestationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.chargestations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Chargestations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chargestations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.chargestations.$post>,
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
  const mutationDefaults = getPostV1ChargestationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ChargestationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>>,
) {
  return ['v1', '/v1/chargestations/:id', toValue(args)] as const
}

export function getV1ChargestationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChargestationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.chargestations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChargestationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChargestationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargestationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChargestationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.chargestations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ChargestationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1ChargestationsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1ChargestationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1ChargestationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ChargestationsIdConnectorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>
  >,
) {
  return ['v1', '/v1/chargestations/:id/connectors', toValue(args)] as const
}

export function getV1ChargestationsIdConnectorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChargestationsIdConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.chargestations[':id'].connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChargestationsIdConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ChargestationsIdConnectorsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChargestationsIdConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChargestationsIdConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.chargestations[':id'].connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CommandsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.commands.$get>>,
) {
  return ['v1', '/v1/commands', toValue(args)] as const
}

export function getV1CommandsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.commands.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CommandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.commands.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Commands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.commands.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>
          >,
          ReturnType<typeof getV1CommandsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CommandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CommandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.commands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1CommandsCancelreservation<
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
                Awaited<ReturnType<typeof client.v1.commands.cancelreservation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.cancelreservation.$post>,
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
  const mutationDefaults = getPostV1CommandsCancelreservationMutationOptions<
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

export function usePostV1CommandsChargingschedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV1CommandsChargingscheduleMutationOptions<
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

export function useDeleteV1CommandsChargingschedule<
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
                Awaited<ReturnType<typeof client.v1.commands.chargingschedule.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.chargingschedule.$delete>,
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
  const mutationDefaults = getDeleteV1CommandsChargingscheduleMutationOptions<
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

export function usePostV1CommandsRemotestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.remotestart.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.remotestart.$post>,
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
  const mutationDefaults = getPostV1CommandsRemotestartMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1CommandsRemotestop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.remotestop.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.remotestop.$post>,
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
  const mutationDefaults = getPostV1CommandsRemotestopMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1CommandsReserve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.reserve.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.reserve.$post>,
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
  const mutationDefaults = getPostV1CommandsReserveMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1CommandsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.commands.reset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.commands.reset.$post>,
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
  const mutationDefaults = getPostV1CommandsResetMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1CommandsUnlockconnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV1CommandsUnlockconnectorMutationOptions<TError, TOnMutateResult>(
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

export function getV1CommandsIdVariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>>,
) {
  return ['v1', '/v1/commands/:id/variables', toValue(args)] as const
}

export function getV1CommandsIdVariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CommandsIdVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.commands[':id'].variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CommandsIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CommandsIdVariablesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.commands)[':id']['variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CommandsIdVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CommandsIdVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.commands[':id'].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1CommandsIdVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1CommandsIdVariablesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.configurations.$get>>,
) {
  return ['v1', '/v1/configurations', toValue(args)] as const
}

export function getV1ConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.configurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Configurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.configurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>
            >
          >,
          ReturnType<typeof getV1ConfigurationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Configurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.configurations.$post>,
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
  const mutationDefaults = getPostV1ConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConfigurationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configurations)[':id']['$get']>>,
) {
  return ['v1', '/v1/configurations/:id', toValue(args)] as const
}

export function getV1ConfigurationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configurations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigurationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.configurations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConfigurationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
) {
  return ['v1', '/v1/connectors', toValue(args)] as const
}

export function getV1ConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          ReturnType<typeof getV1ConnectorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.connectors.$post>,
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
  const mutationDefaults = getPostV1ConnectorsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConnectorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.connectors)[':id']['$get']>>,
) {
  return ['v1', '/v1/connectors/:id', toValue(args)] as const
}

export function getV1ConnectorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.connectors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.connectors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1DriversQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.drivers.$get>>,
) {
  return ['v1', '/v1/drivers', toValue(args)] as const
}

export function getV1DriversQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.drivers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DriversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.drivers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Drivers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.drivers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>
          >,
          ReturnType<typeof getV1DriversQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DriversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DriversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.drivers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Drivers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drivers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.drivers.$post>,
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
  const mutationDefaults = getPostV1DriversMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DriversIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.drivers)[':id']['$get']>>,
) {
  return ['v1', '/v1/drivers/:id', toValue(args)] as const
}

export function getV1DriversIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.drivers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DriversIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.drivers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DriversId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.drivers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1DriversIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DriversIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DriversIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.drivers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1DriversId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1DriversIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1DriversId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drivers)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.drivers)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1DriversIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1LocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.location)[':id']['$get']>>,
) {
  return ['v1', '/v1/location/:id', toValue(args)] as const
}

export function getV1LocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.location)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.location[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.location)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1LocationIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.location)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.location[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1LocationIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1LocationIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locations.$get>>,
) {
  return ['v1', '/v1/locations', toValue(args)] as const
}

export function getV1LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.locations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>
          >,
          ReturnType<typeof getV1LocationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Locations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.locations.$post>,
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
  const mutationDefaults = getPostV1LocationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.organizations.$get>>,
) {
  return ['v1', '/v1/organizations', toValue(args)] as const
}

export function getV1OrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          ReturnType<typeof getV1OrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.organizations)[':id']['$get']>>,
) {
  return ['v1', '/v1/organizations/:id', toValue(args)] as const
}

export function getV1OrganizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.organizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.organizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1OrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1OrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1RealtimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.realtime.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/realtime', keyArgs] as const
}

export function getV1RealtimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.realtime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RealtimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.realtime.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Realtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.realtime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>
          >,
          ReturnType<typeof getV1RealtimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.realtime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1RealtimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RealtimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.realtime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReservationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reservations.$get>>,
) {
  return ['v1', '/v1/reservations', toValue(args)] as const
}

export function getV1ReservationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reservations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reservations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Reservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reservations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>
            >
          >,
          ReturnType<typeof getV1ReservationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reservations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReservationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.reservations)[':id']['$get']>>,
) {
  return ['v1', '/v1/reservations/:id', toValue(args)] as const
}

export function getV1ReservationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.reservations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReservationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reservations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReservationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.reservations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ReservationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reservations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReservationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReservationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reservations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1ReservationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1ReservationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1TokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
) {
  return ['v1', '/v1/tokens', toValue(args)] as const
}

export function getV1TokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokens.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>
          >,
          ReturnType<typeof getV1TokensQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.tokens.$post>,
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
  const mutationDefaults = getPostV1TokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TokensIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tokens)[':id']['$get']>>,
) {
  return ['v1', '/v1/tokens/:id', toValue(args)] as const
}

export function getV1TokensIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tokens)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tokens[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TokensId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tokens)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TokensIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tokens[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1TokensIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tokens)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV1TokensIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transactions.$get>>,
) {
  return ['v1', '/v1/transactions', toValue(args)] as const
}

export function getV1TransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Transactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>
            >
          >,
          ReturnType<typeof getV1TransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.transactions)[':id']['$get']>>,
) {
  return ['v1', '/v1/transactions/:id', toValue(args)] as const
}

export function getV1TransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TransactionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransactionsIdCostQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>>,
) {
  return ['v1', '/v1/transactions/:id/cost', toValue(args)] as const
}

export function getV1TransactionsIdCostQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransactionsIdCostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transactions[':id'].cost.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransactionsIdCost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TransactionsIdCostQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.transactions)[':id']['cost']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsIdCostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransactionsIdCostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transactions[':id'].cost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VehiclesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.vehicles.$get>>,
) {
  return ['v1', '/v1/vehicles', toValue(args)] as const
}

export function getV1VehiclesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.vehicles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VehiclesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.vehicles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Vehicles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.vehicles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>
          >,
          ReturnType<typeof getV1VehiclesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vehicles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VehiclesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.vehicles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VehiclesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>>,
) {
  return ['v1', '/v1/vehicles/:id', toValue(args)] as const
}

export function getV1VehiclesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VehiclesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.vehicles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VehiclesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1VehiclesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VehiclesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.vehicles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VehiclesIdBatteryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>,
) {
  return ['v1', '/v1/vehicles/:id/battery', toValue(args)] as const
}

export function getV1VehiclesIdBatteryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VehiclesIdBatteryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.vehicles[':id'].battery.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VehiclesIdBattery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VehiclesIdBatteryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['battery']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdBatteryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VehiclesIdBatteryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.vehicles[':id'].battery.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VehiclesIdChargeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>,
) {
  return ['v1', '/v1/vehicles/:id/charge', toValue(args)] as const
}

export function getV1VehiclesIdChargeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VehiclesIdChargeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.vehicles[':id'].charge.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VehiclesIdCharge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VehiclesIdChargeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['charge']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdChargeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VehiclesIdChargeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.vehicles[':id'].charge.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1VehiclesIdCharge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV1VehiclesIdChargeMutationOptions<TError, TOnMutateResult>(
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

export function getV1VehiclesIdLocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>>,
) {
  return ['v1', '/v1/vehicles/:id/location', toValue(args)] as const
}

export function getV1VehiclesIdLocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VehiclesIdLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.vehicles[':id'].location.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VehiclesIdLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VehiclesIdLocationQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VehiclesIdLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.vehicles[':id'].location.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VehiclesIdOdometerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>,
) {
  return ['v1', '/v1/vehicles/:id/odometer', toValue(args)] as const
}

export function getV1VehiclesIdOdometerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VehiclesIdOdometerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.vehicles[':id'].odometer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VehiclesIdOdometer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VehiclesIdOdometerQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VehiclesIdOdometerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VehiclesIdOdometerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.vehicles[':id'].odometer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
