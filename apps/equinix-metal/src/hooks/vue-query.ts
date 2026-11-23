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

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getBatchesKey() {
  return ['batches'] as const
}

export function getBgpKey() {
  return ['bgp'] as const
}

export function getBgpDynamicNeighborsKey() {
  return ['bgp-dynamic-neighbors'] as const
}

export function getCapacityKey() {
  return ['capacity'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getEmailsKey() {
  return ['emails'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFacilitiesKey() {
  return ['facilities'] as const
}

export function getHardwareReservationsKey() {
  return ['hardware-reservations'] as const
}

export function getIncidentsKey() {
  return ['incidents'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getInvoicesKey() {
  return ['invoices'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getMarketKey() {
  return ['market'] as const
}

export function getMembershipsKey() {
  return ['memberships'] as const
}

export function getMetalGatewaysKey() {
  return ['metal-gateways'] as const
}

export function getOperatingSystemVersionsKey() {
  return ['operating-system-versions'] as const
}

export function getOperatingSystemsKey() {
  return ['operating-systems'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPaymentMethodsKey() {
  return ['payment-methods'] as const
}

export function getPlansKey() {
  return ['plans'] as const
}

export function getPortsKey() {
  return ['ports'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getResetPasswordKey() {
  return ['reset-password'] as const
}

export function getRoutesKey() {
  return ['routes'] as const
}

export function getSpotMarketRequestsKey() {
  return ['spot-market-requests'] as const
}

export function getSshKeysKey() {
  return ['ssh-keys'] as const
}

export function getSupportRequestsKey() {
  return ['support-requests'] as const
}

export function getTransfersKey() {
  return ['transfers'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUserdataKey() {
  return ['userdata'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVerifyEmailKey() {
  return ['verify-email'] as const
}

export function getVirtualCircuitsKey() {
  return ['virtual-circuits'] as const
}

export function getVirtualNetworksKey() {
  return ['virtual-networks'] as const
}

export function getVrfsKey() {
  return ['vrfs'] as const
}

export function getDeleteApiKeysIdMutationKey() {
  return ['api-keys', '/api-keys/:id', 'DELETE'] as const
}

export function getDeleteApiKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':id']['$delete']>) {
      return parseResponse(client['api-keys'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['api-keys'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['api-keys'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':id']['$get']>>,
) {
  return ['batches', '/batches/:id', toValue(args)] as const
}

export function getBatchesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batches[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batches)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBatchesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batches[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBatchesIdMutationKey() {
  return ['batches', '/batches/:id', 'DELETE'] as const
}

export function getDeleteBatchesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.batches)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBatchesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.batches)[':id']['$delete']>) {
      return parseResponse(client.batches[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBatchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.batches)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBatchesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBgpSessionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>>,
) {
  return ['bgp', '/bgp/sessions/:id', toValue(args)] as const
}

export function getBgpSessionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBgpSessionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bgp.sessions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBgpSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBgpSessionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBgpSessionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBgpSessionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bgp.sessions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBgpSessionsIdMutationKey() {
  return ['bgp', '/bgp/sessions/:id', 'PUT'] as const
}

export function getPutBgpSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bgp.sessions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBgpSessionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bgp.sessions)[':id']['$put']>) {
      return parseResponse(client.bgp.sessions[':id'].$put(args, options))
    },
  })
}

export function usePutBgpSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bgp.sessions)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBgpSessionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBgpSessionsIdMutationKey() {
  return ['bgp', '/bgp/sessions/:id', 'DELETE'] as const
}

export function getDeleteBgpSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bgp.sessions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBgpSessionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bgp.sessions)[':id']['$delete']>) {
      return parseResponse(client.bgp.sessions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBgpSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bgp.sessions)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBgpSessionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getBgpDynamicNeighborsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>,
) {
  return ['bgp-dynamic-neighbors', '/bgp-dynamic-neighbors/:id', toValue(args)] as const
}

export function getBgpDynamicNeighborsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBgpDynamicNeighborsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bgp-dynamic-neighbors'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBgpDynamicNeighborsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBgpDynamicNeighborsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBgpDynamicNeighborsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBgpDynamicNeighborsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bgp-dynamic-neighbors'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBgpDynamicNeighborsIdMutationKey() {
  return ['bgp-dynamic-neighbors', '/bgp-dynamic-neighbors/:id', 'DELETE'] as const
}

export function getDeleteBgpDynamicNeighborsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBgpDynamicNeighborsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$delete']>,
    ) {
      return parseResponse(client['bgp-dynamic-neighbors'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteBgpDynamicNeighborsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBgpDynamicNeighborsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCapacityQueryKey() {
  return ['capacity', '/capacity'] as const
}

export function getCapacityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCapacityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.capacity.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCapacity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>
          >,
          ReturnType<typeof getCapacityQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCapacityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCapacityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.capacity.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCapacityMutationKey() {
  return ['capacity', '/capacity', 'POST'] as const
}

export function getPostCapacityMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$post>>>>>,
    TError,
    InferRequestType<typeof client.capacity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCapacityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.capacity.$post>) {
      return parseResponse(client.capacity.$post(args, options))
    },
  })
}

export function usePostCapacity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.capacity.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCapacityMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCapacityMetrosQueryKey() {
  return ['capacity', '/capacity/metros'] as const
}

export function getCapacityMetrosQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCapacityMetrosQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.capacity.metros.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCapacityMetros<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>
            >
          >,
          ReturnType<typeof getCapacityMetrosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCapacityMetrosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCapacityMetrosQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.capacity.metros.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCapacityMetrosMutationKey() {
  return ['capacity', '/capacity/metros', 'POST'] as const
}

export function getPostCapacityMetrosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.capacity.metros.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCapacityMetrosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.capacity.metros.$post>) {
      return parseResponse(client.capacity.metros.$post(args, options))
    },
  })
}

export function usePostCapacityMetros<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.capacity.metros.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCapacityMetrosMutationOptions<TError, TOnMutateResult>(
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

export function getConnectionsConnectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
) {
  return ['connections', '/connections/:connection_id', toValue(args)] as const
}

export function getConnectionsConnectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connection_id', 'PUT'] as const
}

export function getPutConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':connection_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connection_id']['$put']>,
    ) {
      return parseResponse(client.connections[':connection_id'].$put(args, options))
    },
  })
}

export function usePutConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':connection_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connection_id', 'DELETE'] as const
}

export function getDeleteConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
    ) {
      return parseResponse(client.connections[':connection_id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getConnectionsConnectionIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>
  >,
) {
  return ['connections', '/connections/:connection_id/events', toValue(args)] as const
}

export function getConnectionsConnectionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdPortsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>
  >,
) {
  return ['connections', '/connections/:connection_id/ports', toValue(args)] as const
}

export function getConnectionsConnectionIdPortsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdPortsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].ports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionIdPorts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdPortsQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdPortsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdPortsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].ports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdVirtualCircuitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>
  >,
) {
  return ['connections', '/connections/:connection_id/virtual-circuits', toValue(args)] as const
}

export function getConnectionsConnectionIdVirtualCircuitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdVirtualCircuitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id']['virtual-circuits'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionIdVirtualCircuits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>
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
                    (typeof client.connections)[':connection_id']['virtual-circuits']['$get']
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
                    (typeof client.connections)[':connection_id']['virtual-circuits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdVirtualCircuitsQueryKey>
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
            ReturnType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdVirtualCircuitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdVirtualCircuitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id']['virtual-circuits'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdPortsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>
  >,
) {
  return ['connections', '/connections/:connection_id/ports/:id', toValue(args)] as const
}

export function getConnectionsConnectionIdPortsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdPortsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].ports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionIdPortsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>
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
                  ReturnType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdPortsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdPortsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdPortsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].ports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdPortsIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
    >
  >,
) {
  return ['connections', '/connections/:connection_id/ports/:id/events', toValue(args)] as const
}

export function getConnectionsConnectionIdPortsIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdPortsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].ports[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionIdPortsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
    >
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
                    (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
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
                    (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdPortsIdEventsQueryKey>
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
              (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdPortsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdPortsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].ports[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
    >
  >,
) {
  return [
    'connections',
    '/connections/:connection_id/ports/:port_id/virtual-circuits',
    toValue(args),
  ] as const
}

export function getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].ports[':port_id']['virtual-circuits'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useConnectionsConnectionIdPortsPortIdVirtualCircuits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
    >
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
                    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
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
                    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey>
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
              (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].ports[':port_id']['virtual-circuits'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostConnectionsConnectionIdPortsPortIdVirtualCircuitsMutationKey() {
  return [
    'connections',
    '/connections/:connection_id/ports/:port_id/virtual-circuits',
    'POST',
  ] as const
}

export function getPostConnectionsConnectionIdPortsPortIdVirtualCircuitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsConnectionIdPortsPortIdVirtualCircuitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':connection_id'].ports[':port_id']['virtual-circuits'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostConnectionsConnectionIdPortsPortIdVirtualCircuits<
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
                    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$post']
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
  const mutationDefaults = getPostConnectionsConnectionIdPortsPortIdVirtualCircuitsMutationOptions<
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

export function getDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['$get']>>,
) {
  return ['devices', '/devices/:id', toValue(args)] as const
}

export function getDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDevicesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDevicesIdMutationKey() {
  return ['devices', '/devices/:id', 'PUT'] as const
}

export function getPutDevicesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.devices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.devices)[':id']['$put']>) {
      return parseResponse(client.devices[':id'].$put(args, options))
    },
  })
}

export function usePutDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDevicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDevicesIdMutationKey() {
  return ['devices', '/devices/:id', 'DELETE'] as const
}

export function getDeleteDevicesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.devices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.devices)[':id']['$delete']>) {
      return parseResponse(client.devices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.devices)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDevicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDevicesIdActionsMutationKey() {
  return ['devices', '/devices/:id/actions', 'POST'] as const
}

export function getPostDevicesIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesIdActionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.devices)[':id']['actions']['$post']>) {
      return parseResponse(client.devices[':id'].actions.$post(args, options))
    },
  })
}

export function usePostDevicesIdActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['actions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':id']['actions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDevicesIdActionsMutationOptions<TError, TOnMutateResult>(
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

export function getDevicesIdBandwidthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>>,
) {
  return ['devices', '/devices/:id/bandwidth', toValue(args)] as const
}

export function getDevicesIdBandwidthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdBandwidthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].bandwidth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdBandwidth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['bandwidth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bandwidth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bandwidth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdBandwidthQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['bandwidth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdBandwidthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdBandwidthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].bandwidth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdBgpNeighborsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>
  >,
) {
  return ['devices', '/devices/:id/bgp/neighbors', toValue(args)] as const
}

export function getDevicesIdBgpNeighborsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdBgpNeighborsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].bgp.neighbors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdBgpNeighbors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdBgpNeighborsQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdBgpNeighborsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdBgpNeighborsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].bgp.neighbors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdBgpSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>
  >,
) {
  return ['devices', '/devices/:id/bgp/sessions', toValue(args)] as const
}

export function getDevicesIdBgpSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdBgpSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].bgp.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdBgpSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdBgpSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdBgpSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdBgpSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].bgp.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDevicesIdBgpSessionsMutationKey() {
  return ['devices', '/devices/:id/bgp/sessions', 'POST'] as const
}

export function getPostDevicesIdBgpSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesIdBgpSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$post']>,
    ) {
      return parseResponse(client.devices[':id'].bgp.sessions.$post(args, options))
    },
  })
}

export function usePostDevicesIdBgpSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDevicesIdBgpSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getDevicesIdCustomdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>>,
) {
  return ['devices', '/devices/:id/customdata', toValue(args)] as const
}

export function getDevicesIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['customdata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['customdata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdCustomdataQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['customdata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdDiagnosticsScreenshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>
  >,
) {
  return ['devices', '/devices/:id/diagnostics/screenshot', toValue(args)] as const
}

export function getDevicesIdDiagnosticsScreenshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdDiagnosticsScreenshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].diagnostics.screenshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdDiagnosticsScreenshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>
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
                  ReturnType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDevicesIdDiagnosticsScreenshotQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdDiagnosticsScreenshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdDiagnosticsScreenshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].diagnostics.screenshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdDiagnosticsHealthRollupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>
  >,
) {
  return ['devices', '/devices/:id/diagnostics/health/rollup', toValue(args)] as const
}

export function getDevicesIdDiagnosticsHealthRollupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdDiagnosticsHealthRollupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].diagnostics.health.rollup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdDiagnosticsHealthRollup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>
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
                    (typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']
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
                    (typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesIdDiagnosticsHealthRollupQueryKey>
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
            ReturnType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdDiagnosticsHealthRollupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdDiagnosticsHealthRollupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].diagnostics.health.rollup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['events']['$get']>>,
) {
  return ['devices', '/devices/:id/events', toValue(args)] as const
}

export function getDevicesIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdFirmwareSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>>,
) {
  return ['devices', '/devices/:id/firmware-sets', toValue(args)] as const
}

export function getDevicesIdFirmwareSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdFirmwareSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id']['firmware-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdFirmwareSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['firmware-sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['firmware-sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdFirmwareSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['firmware-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdFirmwareSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdFirmwareSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id']['firmware-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['ips']['$get']>>,
) {
  return ['devices', '/devices/:id/ips', toValue(args)] as const
}

export function getDevicesIdIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdIpsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDevicesIdIpsMutationKey() {
  return ['devices', '/devices/:id/ips', 'POST'] as const
}

export function getPostDevicesIdIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':id']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesIdIpsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.devices)[':id']['ips']['$post']>) {
      return parseResponse(client.devices[':id'].ips.$post(args, options))
    },
  })
}

export function usePostDevicesIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':id']['ips']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDevicesIdIpsMutationOptions<TError, TOnMutateResult>(
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

export function getDevicesIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>>,
) {
  return ['devices', '/devices/:id/metadata', toValue(args)] as const
}

export function getDevicesIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdSshKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>>,
) {
  return ['devices', '/devices/:id/ssh-keys', toValue(args)] as const
}

export function getDevicesIdSshKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdSshKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id']['ssh-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ssh-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['ssh-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['ssh-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdSshKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['ssh-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdSshKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdSshKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id']['ssh-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdTrafficQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>>,
) {
  return ['devices', '/devices/:id/traffic', toValue(args)] as const
}

export function getDevicesIdTrafficQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdTrafficQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].traffic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdTraffic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdTrafficQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdTrafficQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdTrafficQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].traffic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdUsagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['usages']['$get']>>,
) {
  return ['devices', '/devices/:id/usages', toValue(args)] as const
}

export function getDevicesIdUsagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['usages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdUsagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].usages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdUsages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['usages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdUsagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdUsagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdUsagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].usages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdUserdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>>,
) {
  return ['devices', '/devices/:id/userdata', toValue(args)] as const
}

export function getDevicesIdUserdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdUserdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].userdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesIdUserdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['userdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['userdata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':id']['userdata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDevicesIdUserdataQueryKey>
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
          Awaited<ReturnType<(typeof client.devices)[':id']['userdata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdUserdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdUserdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].userdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesInstanceIdIpsIdCustomdataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']>
  >,
) {
  return ['devices', '/devices/:instance_id/ips/:id/customdata', toValue(args)] as const
}

export function getDevicesInstanceIdIpsIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesInstanceIdIpsIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':instance_id'].ips[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesInstanceIdIpsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']>
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
                    (typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']
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
                    (typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDevicesInstanceIdIpsIdCustomdataQueryKey>
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
            ReturnType<(typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesInstanceIdIpsIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesInstanceIdIpsIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':instance_id'].ips[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmailsMutationKey() {
  return ['emails', '/emails', 'POST'] as const
}

export function getPostEmailsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>>,
    TError,
    InferRequestType<typeof client.emails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emails.$post>) {
      return parseResponse(client.emails.$post(args, options))
    },
  })
}

export function usePostEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.emails.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['$get']>>,
) {
  return ['emails', '/emails/:id', toValue(args)] as const
}

export function getEmailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEmailsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEmailsIdMutationKey() {
  return ['emails', '/emails/:id', 'PUT'] as const
}

export function getPutEmailsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.emails)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.emails)[':id']['$put']>) {
      return parseResponse(client.emails[':id'].$put(args, options))
    },
  })
}

export function usePutEmailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.emails)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEmailsIdMutationKey() {
  return ['emails', '/emails/:id', 'DELETE'] as const
}

export function getDeleteEmailsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emails)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.emails)[':id']['$delete']>) {
      return parseResponse(client.emails[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEmailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emails)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEmailsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
) {
  return ['events', '/events/:id', toValue(args)] as const
}

export function getEventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFacilitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
) {
  return ['facilities', '/facilities', toValue(args)] as const
}

export function getFacilitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facilities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          ReturnType<typeof getFacilitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareReservationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>>,
) {
  return ['hardware-reservations', '/hardware-reservations/:id', toValue(args)] as const
}

export function getHardwareReservationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareReservationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['hardware-reservations'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareReservationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHardwareReservationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareReservationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareReservationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['hardware-reservations'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostHardwareReservationsIdActivateMutationKey() {
  return ['hardware-reservations', '/hardware-reservations/:id/activate', 'POST'] as const
}

export function getPostHardwareReservationsIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareReservationsIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>,
    ) {
      return parseResponse(client['hardware-reservations'][':id'].activate.$post(args, options))
    },
  })
}

export function usePostHardwareReservationsIdActivate<
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
                  ReturnType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHardwareReservationsIdActivateMutationOptions<
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

export function getPostHardwareReservationsIdMoveMutationKey() {
  return ['hardware-reservations', '/hardware-reservations/:id/move', 'POST'] as const
}

export function getPostHardwareReservationsIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['hardware-reservations'][':id']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHardwareReservationsIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['hardware-reservations'][':id']['move']['$post']>,
    ) {
      return parseResponse(client['hardware-reservations'][':id'].move.$post(args, options))
    },
  })
}

export function usePostHardwareReservationsIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['hardware-reservations'][':id']['move']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['hardware-reservations'][':id']['move']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHardwareReservationsIdMoveMutationOptions<
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

export function getIncidentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
) {
  return ['incidents', '/incidents', toValue(args)] as const
}

export function getIncidentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIncidentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.incidents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.incidents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
          >,
          ReturnType<typeof getIncidentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIncidentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIncidentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.incidents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
) {
  return ['invitations', '/invitations', toValue(args)] as const
}

export function getInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invitations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
          >,
          ReturnType<typeof getInvitationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvitationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invitations)[':id']['$get']>>,
) {
  return ['invitations', '/invitations/:id', toValue(args)] as const
}

export function getInvitationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invitations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invitations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invitations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getInvitationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invitations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInvitationsIdMutationKey() {
  return ['invitations', '/invitations/:id', 'PUT'] as const
}

export function getPutInvitationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invitations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvitationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invitations)[':id']['$put']>) {
      return parseResponse(client.invitations[':id'].$put(args, options))
    },
  })
}

export function usePutInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.invitations)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvitationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInvitationsIdMutationKey() {
  return ['invitations', '/invitations/:id', 'DELETE'] as const
}

export function getDeleteInvitationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invitations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invitations)[':id']['$delete']>) {
      return parseResponse(client.invitations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.invitations)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invitations)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInvitationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getInvoicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['$get']>>,
) {
  return ['invoices', '/invoices/:id', toValue(args)] as const
}

export function getInvoicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getInvoicesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['$get']>>,
) {
  return ['ips', '/ips/:id', toValue(args)] as const
}

export function getIpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIpsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'DELETE'] as const
}

export function getDeleteIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$delete']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$delete']>) {
      return parseResponse(client.ips[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ips)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'PATCH'] as const
}

export function getPatchIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$patch']>) {
      return parseResponse(client.ips[':id'].$patch(args, options))
    },
  })
}

export function usePatchIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ips)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpsIdAvailableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['available']['$get']>>,
) {
  return ['ips', '/ips/:id/available', toValue(args)] as const
}

export function getIpsIdAvailableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['available']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsIdAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips[':id'].available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpsIdAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['available']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpsIdAvailableQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsIdAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips[':id'].available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsIdCustomdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>>,
) {
  return ['ips', '/ips/:id/customdata', toValue(args)] as const
}

export function getIpsIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpsIdCustomdataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.licenses)[':id']['$get']>>,
) {
  return ['licenses', '/licenses/:id', toValue(args)] as const
}

export function getLicensesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.licenses)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLicensesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licenses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicensesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.licenses)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getLicensesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLicensesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.licenses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLicensesIdMutationKey() {
  return ['licenses', '/licenses/:id', 'PUT'] as const
}

export function getPutLicensesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.licenses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLicensesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.licenses)[':id']['$put']>) {
      return parseResponse(client.licenses[':id'].$put(args, options))
    },
  })
}

export function usePutLicensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.licenses)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLicensesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLicensesIdMutationKey() {
  return ['licenses', '/licenses/:id', 'DELETE'] as const
}

export function getDeleteLicensesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.licenses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicensesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.licenses)[':id']['$delete']>) {
      return parseResponse(client.licenses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLicensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.licenses)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.licenses)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLicensesIdMutationOptions<TError, TOnMutateResult>(
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

export function getLocationsMetrosQueryKey() {
  return ['locations', '/locations/metros'] as const
}

export function getLocationsMetrosQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocationsMetrosQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.metros.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocationsMetros<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>
            >
          >,
          ReturnType<typeof getLocationsMetrosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsMetrosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocationsMetrosQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.metros.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocationsMetrosIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations.metros)[':id']['$get']>>,
) {
  return ['locations', '/locations/metros/:id', toValue(args)] as const
}

export function getLocationsMetrosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations.metros)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsMetrosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.metros[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationsMetrosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations.metros)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLocationsMetrosIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsMetrosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsMetrosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.metros[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketSpotPricesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.$get>>,
) {
  return ['market', '/market/spot/prices', toValue(args)] as const
}

export function getMarketSpotPricesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketSpotPricesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.market.spot.prices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketSpotPrices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>
            >
          >,
          ReturnType<typeof getMarketSpotPricesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketSpotPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketSpotPricesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.market.spot.prices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketSpotPricesHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.history.$get>>,
) {
  return ['market', '/market/spot/prices/history', toValue(args)] as const
}

export function getMarketSpotPricesHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketSpotPricesHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.market.spot.prices.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketSpotPricesHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketSpotPricesHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketSpotPricesHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketSpotPricesHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.market.spot.prices.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketSpotPricesMetrosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.metros.$get>>,
) {
  return ['market', '/market/spot/prices/metros', toValue(args)] as const
}

export function getMarketSpotPricesMetrosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.metros.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketSpotPricesMetrosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.market.spot.prices.metros.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketSpotPricesMetros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market.spot.prices.metros.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketSpotPricesMetrosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketSpotPricesMetrosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketSpotPricesMetrosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.market.spot.prices.metros.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembershipsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.memberships)[':id']['$get']>>,
) {
  return ['memberships', '/memberships/:id', toValue(args)] as const
}

export function getMembershipsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.memberships)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembershipsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.memberships[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.memberships)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMembershipsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembershipsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembershipsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.memberships[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembershipsIdMutationKey() {
  return ['memberships', '/memberships/:id', 'PUT'] as const
}

export function getPutMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.memberships)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembershipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.memberships)[':id']['$put']>) {
      return parseResponse(client.memberships[':id'].$put(args, options))
    },
  })
}

export function usePutMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.memberships)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembershipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMembershipsIdMutationKey() {
  return ['memberships', '/memberships/:id', 'DELETE'] as const
}

export function getDeleteMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.memberships)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembershipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.memberships)[':id']['$delete']>) {
      return parseResponse(client.memberships[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.memberships)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.memberships)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembershipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getMetalGatewaysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>>,
) {
  return ['metal-gateways', '/metal-gateways/:id', toValue(args)] as const
}

export function getMetalGatewaysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetalGatewaysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metal-gateways'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetalGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetalGatewaysIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetalGatewaysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetalGatewaysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metal-gateways'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMetalGatewaysIdMutationKey() {
  return ['metal-gateways', '/metal-gateways/:id', 'DELETE'] as const
}

export function getDeleteMetalGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metal-gateways'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetalGatewaysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['metal-gateways'][':id']['$delete']>) {
      return parseResponse(client['metal-gateways'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteMetalGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['metal-gateways'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMetalGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getMetalGatewaysIdBgpDynamicNeighborsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>
  >,
) {
  return ['metal-gateways', '/metal-gateways/:id/bgp-dynamic-neighbors', toValue(args)] as const
}

export function getMetalGatewaysIdBgpDynamicNeighborsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetalGatewaysIdBgpDynamicNeighborsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metal-gateways'][':id']['bgp-dynamic-neighbors'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetalGatewaysIdBgpDynamicNeighbors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>
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
                    (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']
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
                    (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetalGatewaysIdBgpDynamicNeighborsQueryKey>
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
            ReturnType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetalGatewaysIdBgpDynamicNeighborsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetalGatewaysIdBgpDynamicNeighborsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metal-gateways'][':id']['bgp-dynamic-neighbors'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMetalGatewaysIdBgpDynamicNeighborsMutationKey() {
  return ['metal-gateways', '/metal-gateways/:id/bgp-dynamic-neighbors', 'POST'] as const
}

export function getPostMetalGatewaysIdBgpDynamicNeighborsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetalGatewaysIdBgpDynamicNeighborsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$post']
      >,
    ) {
      return parseResponse(
        client['metal-gateways'][':id']['bgp-dynamic-neighbors'].$post(args, options),
      )
    },
  })
}

export function usePostMetalGatewaysIdBgpDynamicNeighbors<
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
                    (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$post']
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
  const mutationDefaults = getPostMetalGatewaysIdBgpDynamicNeighborsMutationOptions<
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

export function getMetalGatewaysIdIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>,
) {
  return ['metal-gateways', '/metal-gateways/:id/ips', toValue(args)] as const
}

export function getMetalGatewaysIdIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetalGatewaysIdIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metal-gateways'][':id'].ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetalGatewaysIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetalGatewaysIdIpsQueryKey>
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
          Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetalGatewaysIdIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetalGatewaysIdIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metal-gateways'][':id'].ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMetalGatewaysIdIpsMutationKey() {
  return ['metal-gateways', '/metal-gateways/:id/ips', 'POST'] as const
}

export function getPostMetalGatewaysIdIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetalGatewaysIdIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$post']>,
    ) {
      return parseResponse(client['metal-gateways'][':id'].ips.$post(args, options))
    },
  })
}

export function usePostMetalGatewaysIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetalGatewaysIdIpsMutationOptions<TError, TOnMutateResult>(
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

export function getOperatingSystemVersionsQueryKey() {
  return ['operating-system-versions', '/operating-system-versions'] as const
}

export function getOperatingSystemVersionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOperatingSystemVersionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['operating-system-versions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperatingSystemVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
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
                Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOperatingSystemVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatingSystemVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOperatingSystemVersionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['operating-system-versions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOperatingSystemsQueryKey() {
  return ['operating-systems', '/operating-systems'] as const
}

export function getOperatingSystemsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOperatingSystemsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['operating-systems'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperatingSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOperatingSystemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatingSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOperatingSystemsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['operating-systems'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
) {
  return ['organizations', '/organizations', toValue(args)] as const
}

export function getOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
) {
  return ['organizations', '/organizations/:id', toValue(args)] as const
}

export function getOrganizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'PUT'] as const
}

export function getPutOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$put']>) {
      return parseResponse(client.organizations[':id'].$put(args, options))
    },
  })
}

export function usePutOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$delete']>) {
      return parseResponse(client.organizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdCapacityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/capacity', toValue(args)] as const
}

export function getOrganizationsIdCapacityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdCapacityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].capacity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdCapacityQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdCapacityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdCapacityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].capacity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdCapacityMetrosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/capacity/metros', toValue(args)] as const
}

export function getOrganizationsIdCapacityMetrosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdCapacityMetrosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].capacity.metros.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdCapacityMetros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>
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
                  ReturnType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdCapacityMetrosQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdCapacityMetrosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdCapacityMetrosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].capacity.metros.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdCustomdataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/customdata', toValue(args)] as const
}

export function getOrganizationsIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['customdata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['customdata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdCustomdataQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['customdata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>>,
) {
  return ['organizations', '/organizations/:id/devices', toValue(args)] as const
}

export function getOrganizationsIdDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['events']['$get']>>,
) {
  return ['organizations', '/organizations/:id/events', toValue(args)] as const
}

export function getOrganizationsIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdFacilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/facilities', toValue(args)] as const
}

export function getOrganizationsIdFacilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdFacilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].facilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdFacilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['facilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['facilities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['facilities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdFacilitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['facilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdFacilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdFacilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].facilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdFirmwareSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/firmware-sets', toValue(args)] as const
}

export function getOrganizationsIdFirmwareSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdFirmwareSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id']['firmware-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdFirmwareSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['firmware-sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['firmware-sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdFirmwareSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['firmware-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdFirmwareSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdFirmwareSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id']['firmware-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/invitations', toValue(args)] as const
}

export function getOrganizationsIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdInvitationsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsIdInvitationsMutationKey() {
  return ['organizations', '/organizations/:id/invitations', 'POST'] as const
}

export function getPostOrganizationsIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['invitations']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].invitations.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['invitations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdInvitationsMutationOptions<
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

export function getOrganizationsIdInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/invoices', toValue(args)] as const
}

export function getOrganizationsIdInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['invoices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['invoices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOperatingSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/operating-systems', toValue(args)] as const
}

export function getOrganizationsIdOperatingSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOperatingSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id']['operating-systems'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOperatingSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['operating-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':id']['operating-systems']['$get']>
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
                  ReturnType<(typeof client.organizations)[':id']['operating-systems']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOperatingSystemsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['operating-systems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOperatingSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOperatingSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id']['operating-systems'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/payment-methods', toValue(args)] as const
}

export function getOrganizationsIdPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id']['payment-methods'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdPaymentMethodsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id']['payment-methods'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsIdPaymentMethodsMutationKey() {
  return ['organizations', '/organizations/:id/payment-methods', 'POST'] as const
}

export function getPostOrganizationsIdPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdPaymentMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$post']>,
    ) {
      return parseResponse(client.organizations[':id']['payment-methods'].$post(args, options))
    },
  })
}

export function usePostOrganizationsIdPaymentMethods<
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
                  ReturnType<(typeof client.organizations)[':id']['payment-methods']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdPaymentMethodsMutationOptions<
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

export function getOrganizationsIdPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>>,
) {
  return ['organizations', '/organizations/:id/plans', toValue(args)] as const
}

export function getOrganizationsIdPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['plans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdPlansQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdProjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/projects', toValue(args)] as const
}

export function getOrganizationsIdProjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdProjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsIdProjectsMutationKey() {
  return ['organizations', '/organizations/:id/projects', 'POST'] as const
}

export function getPostOrganizationsIdProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['projects']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].projects.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['projects']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/transfers', toValue(args)] as const
}

export function getOrganizationsIdTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdTransfersQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id/connections', toValue(args)] as const
}

export function getOrganizationsOrganizationIdConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id']['connections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$get']>
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
                    (typeof client.organizations)[':organization_id']['connections']['$get']
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
                    (typeof client.organizations)[':organization_id']['connections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdConnectionsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organization_id']['connections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationIdConnectionsMutationKey() {
  return ['organizations', '/organizations/:organization_id/connections', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id']['connections']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id']['connections']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id'].connections.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationIdConnections<
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
                    (typeof client.organizations)[':organization_id']['connections']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id']['connections']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationIdConnectionsMutationOptions<
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

export function getPaymentMethodsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-methods'][':id']['$get']>>,
) {
  return ['payment-methods', '/payment-methods/:id', toValue(args)] as const
}

export function getPaymentMethodsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-methods'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentMethodsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-methods'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentMethodsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-methods'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentMethodsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentMethodsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-methods'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPaymentMethodsIdMutationKey() {
  return ['payment-methods', '/payment-methods/:id', 'PUT'] as const
}

export function getPutPaymentMethodsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-methods'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentMethodsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-methods'][':id']['$put']>) {
      return parseResponse(client['payment-methods'][':id'].$put(args, options))
    },
  })
}

export function usePutPaymentMethodsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-methods'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPaymentMethodsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePaymentMethodsIdMutationKey() {
  return ['payment-methods', '/payment-methods/:id', 'DELETE'] as const
}

export function getDeletePaymentMethodsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['payment-methods'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentMethodsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-methods'][':id']['$delete']>) {
      return parseResponse(client['payment-methods'][':id'].$delete(args, options))
    },
  })
}

export function useDeletePaymentMethodsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['payment-methods'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePaymentMethodsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
) {
  return ['plans', '/plans', toValue(args)] as const
}

export function getPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          ReturnType<typeof getPlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPortsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ports)[':id']['$get']>>,
) {
  return ['ports', '/ports/:id', toValue(args)] as const
}

export function getPortsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePortsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPortsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPortsIdAssignMutationKey() {
  return ['ports', '/ports/:id/assign', 'POST'] as const
}

export function getPostPortsIdAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['assign']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['assign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdAssignMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ports)[':id']['assign']['$post']>) {
      return parseResponse(client.ports[':id'].assign.$post(args, options))
    },
  })
}

export function usePostPortsIdAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['assign']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['assign']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdAssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortsIdBondMutationKey() {
  return ['ports', '/ports/:id/bond', 'POST'] as const
}

export function getPostPortsIdBondMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['bond']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['bond']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdBondMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ports)[':id']['bond']['$post']>) {
      return parseResponse(client.ports[':id'].bond.$post(args, options))
    },
  })
}

export function usePostPortsIdBond<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['bond']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['bond']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdBondMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortsIdConvertLayer2MutationKey() {
  return ['ports', '/ports/:id/convert/layer-2', 'POST'] as const
}

export function getPostPortsIdConvertLayer2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ports)[':id']['convert']['layer-2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['convert']['layer-2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdConvertLayer2MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ports)[':id']['convert']['layer-2']['$post']>,
    ) {
      return parseResponse(client.ports[':id'].convert['layer-2'].$post(args, options))
    },
  })
}

export function usePostPortsIdConvertLayer2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['convert']['layer-2']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['convert']['layer-2']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdConvertLayer2MutationOptions<TError, TOnMutateResult>(
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

export function getPostPortsIdConvertLayer3MutationKey() {
  return ['ports', '/ports/:id/convert/layer-3', 'POST'] as const
}

export function getPostPortsIdConvertLayer3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ports)[':id']['convert']['layer-3']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['convert']['layer-3']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdConvertLayer3MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ports)[':id']['convert']['layer-3']['$post']>,
    ) {
      return parseResponse(client.ports[':id'].convert['layer-3'].$post(args, options))
    },
  })
}

export function usePostPortsIdConvertLayer3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['convert']['layer-3']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['convert']['layer-3']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdConvertLayer3MutationOptions<TError, TOnMutateResult>(
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

export function getPostPortsIdDisbondMutationKey() {
  return ['ports', '/ports/:id/disbond', 'POST'] as const
}

export function getPostPortsIdDisbondMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['disbond']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['disbond']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdDisbondMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ports)[':id']['disbond']['$post']>) {
      return parseResponse(client.ports[':id'].disbond.$post(args, options))
    },
  })
}

export function usePostPortsIdDisbond<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['disbond']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['disbond']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdDisbondMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortsIdNativeVlanMutationKey() {
  return ['ports', '/ports/:id/native-vlan', 'POST'] as const
}

export function getPostPortsIdNativeVlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ports)[':id']['native-vlan']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['native-vlan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdNativeVlanMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ports)[':id']['native-vlan']['$post']>) {
      return parseResponse(client.ports[':id']['native-vlan'].$post(args, options))
    },
  })
}

export function usePostPortsIdNativeVlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['native-vlan']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['native-vlan']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdNativeVlanMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePortsIdNativeVlanMutationKey() {
  return ['ports', '/ports/:id/native-vlan', 'DELETE'] as const
}

export function getDeletePortsIdNativeVlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ports)[':id']['native-vlan']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['native-vlan']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePortsIdNativeVlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ports)[':id']['native-vlan']['$delete']>,
    ) {
      return parseResponse(client.ports[':id']['native-vlan'].$delete(args, options))
    },
  })
}

export function useDeletePortsIdNativeVlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['native-vlan']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['native-vlan']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePortsIdNativeVlanMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortsIdUnassignMutationKey() {
  return ['ports', '/ports/:id/unassign', 'POST'] as const
}

export function getPostPortsIdUnassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['unassign']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['unassign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdUnassignMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ports)[':id']['unassign']['$post']>) {
      return parseResponse(client.ports[':id'].unassign.$post(args, options))
    },
  })
}

export function usePostPortsIdUnassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['unassign']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['unassign']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdUnassignMutationOptions<TError, TOnMutateResult>(
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

export function getPortsIdVlanAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>
  >,
) {
  return ['ports', '/ports/:id/vlan-assignments', toValue(args)] as const
}

export function getPortsIdVlanAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsIdVlanAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePortsIdVlanAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPortsIdVlanAssignmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdVlanAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsIdVlanAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports[':id']['vlan-assignments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPortsIdVlanAssignmentsAssignmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']>
  >,
) {
  return ['ports', '/ports/:id/vlan-assignments/:assignment_id', toValue(args)] as const
}

export function getPortsIdVlanAssignmentsAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsIdVlanAssignmentsAssignmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'][':assignment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePortsIdVlanAssignmentsAssignmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']>
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
                    (typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']
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
                    (typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPortsIdVlanAssignmentsAssignmentIdQueryKey>
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
            ReturnType<(typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdVlanAssignmentsAssignmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsIdVlanAssignmentsAssignmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports[':id']['vlan-assignments'][':assignment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPortsIdVlanAssignmentsBatchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>
  >,
) {
  return ['ports', '/ports/:id/vlan-assignments/batches', toValue(args)] as const
}

export function getPortsIdVlanAssignmentsBatchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsIdVlanAssignmentsBatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'].batches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePortsIdVlanAssignmentsBatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>
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
                  ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPortsIdVlanAssignmentsBatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdVlanAssignmentsBatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsIdVlanAssignmentsBatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports[':id']['vlan-assignments'].batches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPortsIdVlanAssignmentsBatchesMutationKey() {
  return ['ports', '/ports/:id/vlan-assignments/batches', 'POST'] as const
}

export function getPostPortsIdVlanAssignmentsBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortsIdVlanAssignmentsBatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>,
    ) {
      return parseResponse(client.ports[':id']['vlan-assignments'].batches.$post(args, options))
    },
  })
}

export function usePostPortsIdVlanAssignmentsBatches<
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
                  ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPortsIdVlanAssignmentsBatchesMutationOptions<
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

export function getPortsIdVlanAssignmentsBatchesBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
    >
  >,
) {
  return ['ports', '/ports/:id/vlan-assignments/batches/:batch_id', toValue(args)] as const
}

export function getPortsIdVlanAssignmentsBatchesBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsIdVlanAssignmentsBatchesBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'].batches[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePortsIdVlanAssignmentsBatchesBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
    >
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
                    (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
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
                    (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPortsIdVlanAssignmentsBatchesBatchIdQueryKey>
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
              (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdVlanAssignmentsBatchesBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsIdVlanAssignmentsBatchesBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports[':id']['vlan-assignments'].batches[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  return ['projects', '/projects', toValue(args)] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['$get']>>,
) {
  return ['projects', '/projects/:id', toValue(args)] as const
}

export function getProjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getProjectsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsIdMutationKey() {
  return ['projects', '/projects/:id', 'PUT'] as const
}

export function getPutProjectsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['$put']>) {
      return parseResponse(client.projects[':id'].$put(args, options))
    },
  })
}

export function usePutProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProjectsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProjectsIdMutationKey() {
  return ['projects', '/projects/:id', 'DELETE'] as const
}

export function getDeleteProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['$delete']>) {
      return parseResponse(client.projects[':id'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.projects)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>>,
) {
  return ['projects', '/projects/:id/api-keys', toValue(args)] as const
}

export function getProjectsIdApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['api-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdApiKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdApiKeysMutationKey() {
  return ['projects', '/projects/:id/api-keys', 'POST'] as const
}

export function getPostProjectsIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['api-keys']['$post']>) {
      return parseResponse(client.projects[':id']['api-keys'].$post(args, options))
    },
  })
}

export function usePostProjectsIdApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['api-keys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdBatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['batches']['$get']>>,
) {
  return ['projects', '/projects/:id/batches', toValue(args)] as const
}

export function getProjectsIdBatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['batches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdBatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].batches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdBatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['batches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['batches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['batches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['batches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdBatchesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['batches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdBatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdBatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].batches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdBgpConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>>,
) {
  return ['projects', '/projects/:id/bgp-config', toValue(args)] as const
}

export function getProjectsIdBgpConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdBgpConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['bgp-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdBgpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['bgp-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['bgp-config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['bgp-config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdBgpConfigQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['bgp-config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdBgpConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdBgpConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['bgp-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdBgpConfigsMutationKey() {
  return ['projects', '/projects/:id/bgp-configs', 'POST'] as const
}

export function getPostProjectsIdBgpConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['bgp-configs']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':id']['bgp-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdBgpConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['bgp-configs']['$post']>,
    ) {
      return parseResponse(client.projects[':id']['bgp-configs'].$post(args, options))
    },
  })
}

export function usePostProjectsIdBgpConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.projects)[':id']['bgp-configs']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.projects)[':id']['bgp-configs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdBgpConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdBgpSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>
  >,
) {
  return ['projects', '/projects/:id/bgp/sessions', toValue(args)] as const
}

export function getProjectsIdBgpSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdBgpSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].bgp.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdBgpSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdBgpSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdBgpSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdBgpSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].bgp.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdCustomdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>>,
) {
  return ['projects', '/projects/:id/customdata', toValue(args)] as const
}

export function getProjectsIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['customdata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['customdata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdCustomdataQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['customdata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['devices']['$get']>>,
) {
  return ['projects', '/projects/:id/devices', toValue(args)] as const
}

export function getProjectsIdDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdDevicesMutationKey() {
  return ['projects', '/projects/:id/devices', 'POST'] as const
}

export function getPostProjectsIdDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdDevicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['devices']['$post']>) {
      return parseResponse(client.projects[':id'].devices.$post(args, options))
    },
  })
}

export function usePostProjectsIdDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['devices']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdDevicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostProjectsIdDevicesBatchMutationKey() {
  return ['projects', '/projects/:id/devices/batch', 'POST'] as const
}

export function getPostProjectsIdDevicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['devices']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['devices']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdDevicesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['devices']['batch']['$post']>,
    ) {
      return parseResponse(client.projects[':id'].devices.batch.$post(args, options))
    },
  })
}

export function usePostProjectsIdDevicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['devices']['batch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['devices']['batch']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdDevicesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['events']['$get']>>,
) {
  return ['projects', '/projects/:id/events', toValue(args)] as const
}

export function getProjectsIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdFacilitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>>,
) {
  return ['projects', '/projects/:id/facilities', toValue(args)] as const
}

export function getProjectsIdFacilitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdFacilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].facilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdFacilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['facilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['facilities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['facilities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdFacilitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['facilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdFacilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdFacilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].facilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdFirmwareSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>
  >,
) {
  return ['projects', '/projects/:id/firmware-sets', toValue(args)] as const
}

export function getProjectsIdFirmwareSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdFirmwareSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['firmware-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdFirmwareSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['firmware-sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['firmware-sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdFirmwareSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['firmware-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdFirmwareSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdFirmwareSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['firmware-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdGlobalBgpRangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>
  >,
) {
  return ['projects', '/projects/:id/global-bgp-ranges', toValue(args)] as const
}

export function getProjectsIdGlobalBgpRangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdGlobalBgpRangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['global-bgp-ranges'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdGlobalBgpRanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdGlobalBgpRangesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdGlobalBgpRangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdGlobalBgpRangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['global-bgp-ranges'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdHardwareReservationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>
  >,
) {
  return ['projects', '/projects/:id/hardware-reservations', toValue(args)] as const
}

export function getProjectsIdHardwareReservationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdHardwareReservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['hardware-reservations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdHardwareReservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['hardware-reservations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':id']['hardware-reservations']['$get']>
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
                  ReturnType<(typeof client.projects)[':id']['hardware-reservations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsIdHardwareReservationsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['hardware-reservations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdHardwareReservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdHardwareReservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['hardware-reservations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['ips']['$get']>>,
) {
  return ['projects', '/projects/:id/ips', toValue(args)] as const
}

export function getProjectsIdIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdIpsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdIpsMutationKey() {
  return ['projects', '/projects/:id/ips', 'POST'] as const
}

export function getPostProjectsIdIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdIpsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['ips']['$post']>) {
      return parseResponse(client.projects[':id'].ips.$post(args, options))
    },
  })
}

export function usePostProjectsIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['ips']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdIpsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>>,
) {
  return ['projects', '/projects/:id/licenses', toValue(args)] as const
}

export function getProjectsIdLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdLicensesQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdLicensesMutationKey() {
  return ['projects', '/projects/:id/licenses', 'POST'] as const
}

export function getPostProjectsIdLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['licenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdLicensesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['licenses']['$post']>) {
      return parseResponse(client.projects[':id'].licenses.$post(args, options))
    },
  })
}

export function usePostProjectsIdLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['licenses']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['plans']['$get']>>,
) {
  return ['projects', '/projects/:id/plans', toValue(args)] as const
}

export function getProjectsIdPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['plans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['plans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdPlansQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdSpotMarketRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>
  >,
) {
  return ['projects', '/projects/:id/spot-market-requests', toValue(args)] as const
}

export function getProjectsIdSpotMarketRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdSpotMarketRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['spot-market-requests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdSpotMarketRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdSpotMarketRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdSpotMarketRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdSpotMarketRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['spot-market-requests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdSpotMarketRequestsMutationKey() {
  return ['projects', '/projects/:id/spot-market-requests', 'POST'] as const
}

export function getPostProjectsIdSpotMarketRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdSpotMarketRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$post']>,
    ) {
      return parseResponse(client.projects[':id']['spot-market-requests'].$post(args, options))
    },
  })
}

export function usePostProjectsIdSpotMarketRequests<
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
                  ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdSpotMarketRequestsMutationOptions<
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

export function getProjectsIdSshKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>>,
) {
  return ['projects', '/projects/:id/ssh-keys', toValue(args)] as const
}

export function getProjectsIdSshKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdSshKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['ssh-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdSshKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdSshKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdSshKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['ssh-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdSshKeysMutationKey() {
  return ['projects', '/projects/:id/ssh-keys', 'POST'] as const
}

export function getPostProjectsIdSshKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdSshKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$post']>) {
      return parseResponse(client.projects[':id']['ssh-keys'].$post(args, options))
    },
  })
}

export function usePostProjectsIdSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdSshKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostProjectsIdTransfersMutationKey() {
  return ['projects', '/projects/:id/transfers', 'POST'] as const
}

export function getPostProjectsIdTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['transfers']['$post']>,
    ) {
      return parseResponse(client.projects[':id'].transfers.$post(args, options))
    },
  })
}

export function usePostProjectsIdTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['transfers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['transfers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdUsagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['usages']['$get']>>,
) {
  return ['projects', '/projects/:id/usages', toValue(args)] as const
}

export function getProjectsIdUsagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['usages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdUsagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].usages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdUsages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['usages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdUsagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdUsagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdUsagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].usages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIdVirtualNetworksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>
  >,
) {
  return ['projects', '/projects/:id/virtual-networks', toValue(args)] as const
}

export function getProjectsIdVirtualNetworksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdVirtualNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id']['virtual-networks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdVirtualNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdVirtualNetworksQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdVirtualNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdVirtualNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id']['virtual-networks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdVirtualNetworksMutationKey() {
  return ['projects', '/projects/:id/virtual-networks', 'POST'] as const
}

export function getPostProjectsIdVirtualNetworksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdVirtualNetworksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$post']>,
    ) {
      return parseResponse(client.projects[':id']['virtual-networks'].$post(args, options))
    },
  })
}

export function usePostProjectsIdVirtualNetworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdVirtualNetworksMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsIdVrfsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>>,
) {
  return ['projects', '/projects/:id/vrfs', toValue(args)] as const
}

export function getProjectsIdVrfsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsIdVrfsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':id'].vrfs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsIdVrfs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsIdVrfsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdVrfsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsIdVrfsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':id'].vrfs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsIdVrfsMutationKey() {
  return ['projects', '/projects/:id/vrfs', 'POST'] as const
}

export function getPostProjectsIdVrfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':id']['vrfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIdVrfsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':id']['vrfs']['$post']>) {
      return parseResponse(client.projects[':id'].vrfs.$post(args, options))
    },
  })
}

export function usePostProjectsIdVrfs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':id']['vrfs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIdVrfsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/connections', toValue(args)] as const
}

export function getProjectsProjectIdConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdConnectionsMutationKey() {
  return ['projects', '/projects/:project_id/connections', 'POST'] as const
}

export function getPostProjectsProjectIdConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['connections']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].connections.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdConnections<
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
                Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project_id']['connections']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdConnectionsMutationOptions<
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

export function getProjectsProjectIdInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/invitations', toValue(args)] as const
}

export function getProjectsProjectIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdInvitationsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdInvitationsMutationKey() {
  return ['projects', '/projects/:project_id/invitations', 'POST'] as const
}

export function getPostProjectsProjectIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['invitations']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].invitations.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdInvitations<
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
                Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project_id']['invitations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdInvitationsMutationOptions<
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

export function getProjectsProjectIdIpsIdCustomdataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/ips/:id/customdata', toValue(args)] as const
}

export function getProjectsProjectIdIpsIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdIpsIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].ips[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdIpsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']>
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
                    (typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']
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
                    (typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdIpsIdCustomdataQueryKey>
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
            ReturnType<(typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIpsIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdIpsIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].ips[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/memberships', toValue(args)] as const
}

export function getProjectsProjectIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdMetalGatewaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>
  >,
) {
  return ['projects', '/projects/:project_id/metal-gateways', toValue(args)] as const
}

export function getProjectsProjectIdMetalGatewaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdMetalGatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id']['metal-gateways'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdMetalGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>
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
                  ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdMetalGatewaysQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdMetalGatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdMetalGatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id']['metal-gateways'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdMetalGatewaysMutationKey() {
  return ['projects', '/projects/:project_id/metal-gateways', 'POST'] as const
}

export function getPostProjectsProjectIdMetalGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdMetalGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id']['metal-gateways'].$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdMetalGateways<
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
                  ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdMetalGatewaysMutationOptions<
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

export function getProjectsProjectIdSelfServiceReservationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
    >
  >,
) {
  return ['projects', '/projects/:project_id/self-service/reservations', toValue(args)] as const
}

export function getProjectsProjectIdSelfServiceReservationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdSelfServiceReservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id']['self-service'].reservations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdSelfServiceReservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
    >
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
                    (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
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
                    (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdSelfServiceReservationsQueryKey>
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
              (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdSelfServiceReservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdSelfServiceReservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id']['self-service'].reservations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdSelfServiceReservationsMutationKey() {
  return ['projects', '/projects/:project_id/self-service/reservations', 'POST'] as const
}

export function getPostProjectsProjectIdSelfServiceReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['self-service']['reservations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdSelfServiceReservationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['self-service']['reservations']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id']['self-service'].reservations.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdSelfServiceReservations<
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
                    (typeof client.projects)[':project_id']['self-service']['reservations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project_id']['self-service']['reservations']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdSelfServiceReservationsMutationOptions<
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

export function getProjectsProjectIdSelfServiceReservationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
    >
  >,
) {
  return ['projects', '/projects/:project_id/self-service/reservations/:id', toValue(args)] as const
}

export function getProjectsProjectIdSelfServiceReservationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdSelfServiceReservationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id']['self-service'].reservations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdSelfServiceReservationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
    >
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
                    (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
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
                    (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdSelfServiceReservationsIdQueryKey>
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
              (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdSelfServiceReservationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdSelfServiceReservationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id']['self-service'].reservations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostResetPasswordMutationKey() {
  return ['reset-password', '/reset-password', 'POST'] as const
}

export function getPostResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reset-password']['$post']>) {
      return parseResponse(client['reset-password'].$post(args, options))
    },
  })
}

export function usePostResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['reset-password']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteResetPasswordMutationKey() {
  return ['reset-password', '/reset-password', 'DELETE'] as const
}

export function getDeleteResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$delete']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteResetPasswordMutationKey(),
    async mutationFn() {
      return parseResponse(client['reset-password'].$delete(undefined, options))
    },
  })
}

export function useDeleteResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reset-password']['$delete']>>
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
  const mutationDefaults = getDeleteResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getRoutesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['$get']>>,
) {
  return ['routes', '/routes/:id', toValue(args)] as const
}

export function getRoutesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRoutesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRoutesIdMutationKey() {
  return ['routes', '/routes/:id', 'PUT'] as const
}

export function getPutRoutesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.routes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoutesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.routes)[':id']['$put']>) {
      return parseResponse(client.routes[':id'].$put(args, options))
    },
  })
}

export function usePutRoutesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoutesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRoutesIdMutationKey() {
  return ['routes', '/routes/:id', 'DELETE'] as const
}

export function getDeleteRoutesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoutesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.routes)[':id']['$delete']>) {
      return parseResponse(client.routes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRoutesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRoutesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoutesIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['events']['$get']>>,
) {
  return ['routes', '/routes/:id/events', toValue(args)] as const
}

export function getRoutesIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoutesIdEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpotMarketRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>>,
) {
  return ['spot-market-requests', '/spot-market-requests/:id', toValue(args)] as const
}

export function getSpotMarketRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpotMarketRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['spot-market-requests'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpotMarketRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpotMarketRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpotMarketRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpotMarketRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['spot-market-requests'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSpotMarketRequestsIdMutationKey() {
  return ['spot-market-requests', '/spot-market-requests/:id', 'DELETE'] as const
}

export function getDeleteSpotMarketRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['spot-market-requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpotMarketRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['spot-market-requests'][':id']['$delete']>,
    ) {
      return parseResponse(client['spot-market-requests'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteSpotMarketRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['spot-market-requests'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpotMarketRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSshKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-keys']['$get']>>,
) {
  return ['ssh-keys', '/ssh-keys', toValue(args)] as const
}

export function getSshKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSshKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ssh-keys'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSshKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>
            >
          >,
          ReturnType<typeof getSshKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSshKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ssh-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSshKeysMutationKey() {
  return ['ssh-keys', '/ssh-keys', 'POST'] as const
}

export function getPostSshKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['ssh-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSshKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-keys']['$post']>) {
      return parseResponse(client['ssh-keys'].$post(args, options))
    },
  })
}

export function usePostSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['ssh-keys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSshKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSshKeysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>>,
) {
  return ['ssh-keys', '/ssh-keys/:id', toValue(args)] as const
}

export function getSshKeysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSshKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ssh-keys'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSshKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSshKeysIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSshKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ssh-keys'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSshKeysIdMutationKey() {
  return ['ssh-keys', '/ssh-keys/:id', 'PUT'] as const
}

export function getPutSshKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['ssh-keys'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSshKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-keys'][':id']['$put']>) {
      return parseResponse(client['ssh-keys'][':id'].$put(args, options))
    },
  })
}

export function usePutSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['ssh-keys'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSshKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSshKeysIdMutationKey() {
  return ['ssh-keys', '/ssh-keys/:id', 'DELETE'] as const
}

export function getDeleteSshKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSshKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>) {
      return parseResponse(client['ssh-keys'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSshKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSupportRequestsMutationKey() {
  return ['support-requests', '/support-requests', 'POST'] as const
}

export function getPostSupportRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['support-requests']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['support-requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportRequestsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['support-requests']['$post']>) {
      return parseResponse(client['support-requests'].$post(args, options))
    },
  })
}

export function usePostSupportRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['support-requests']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['support-requests']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getTransfersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transfers)[':id']['$get']>>,
) {
  return ['transfers', '/transfers/:id', toValue(args)] as const
}

export function getTransfersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transfers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransfersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transfers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransfersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transfers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTransfersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransfersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransfersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transfers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTransfersIdMutationKey() {
  return ['transfers', '/transfers/:id', 'PUT'] as const
}

export function getPutTransfersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transfers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTransfersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transfers)[':id']['$put']>) {
      return parseResponse(client.transfers[':id'].$put(args, options))
    },
  })
}

export function usePutTransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.transfers)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTransfersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTransfersIdMutationKey() {
  return ['transfers', '/transfers/:id', 'DELETE'] as const
}

export function getDeleteTransfersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transfers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransfersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transfers)[':id']['$delete']>) {
      return parseResponse(client.transfers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.transfers)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.transfers)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTransfersIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.user.$get>>) {
  return ['user', '/user', toValue(args)] as const
}

export function getUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserMutationKey() {
  return ['user', '/user', 'PUT'] as const
}

export function getPutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    InferRequestType<typeof client.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$put>) {
      return parseResponse(client.user.$put(args, options))
    },
  })
}

export function usePutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
          TError,
          InferRequestType<typeof client.user.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)['api-keys']['$get']>>,
) {
  return ['user', '/user/api-keys', toValue(args)] as const
}

export function getUserApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user['api-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>
            >
          >,
          ReturnType<typeof getUserApiKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserApiKeysMutationKey() {
  return ['user', '/user/api-keys', 'POST'] as const
}

export function getPostUserApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)['api-keys']['$post']>) {
      return parseResponse(client.user['api-keys'].$post(args, options))
    },
  })
}

export function usePostUserApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)['api-keys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserApiKeysIdMutationKey() {
  return ['user', '/user/api-keys/:id', 'DELETE'] as const
}

export function getDeleteUserApiKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)['api-keys'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user)['api-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)['api-keys'][':id']['$delete']>) {
      return parseResponse(client.user['api-keys'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteUserApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.user)['api-keys'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user)['api-keys'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserApiKeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserOtpAppMutationKey() {
  return ['user', '/user/otp/app', 'POST'] as const
}

export function getPostUserOtpAppMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.app.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUserOtpAppMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.otp.app.$post(undefined, options))
    },
  })
}

export function usePostUserOtpApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.app.$post>>>>
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
  const mutationDefaults = getPostUserOtpAppMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserOtpAppMutationKey() {
  return ['user', '/user/otp/app', 'DELETE'] as const
}

export function getDeleteUserOtpAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.app.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserOtpAppMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.otp.app.$delete(undefined, options))
    },
  })
}

export function useDeleteUserOtpApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.app.$delete>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getDeleteUserOtpAppMutationOptions<TError, TOnMutateResult>(
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

export function getUserOtpRecoveryCodesQueryKey() {
  return ['user', '/user/otp/recovery-codes'] as const
}

export function getUserOtpRecoveryCodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserOtpRecoveryCodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.otp['recovery-codes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserOtpRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>>
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
                Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserOtpRecoveryCodesQueryKey>
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
          Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserOtpRecoveryCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserOtpRecoveryCodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.otp['recovery-codes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserOtpRecoveryCodesMutationKey() {
  return ['user', '/user/otp/recovery-codes', 'POST'] as const
}

export function getPostUserOtpRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUserOtpRecoveryCodesMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.otp['recovery-codes'].$post(undefined, options))
    },
  })
}

export function usePostUserOtpRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$post']>>
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
  const mutationDefaults = getPostUserOtpRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserOtpSmsMutationKey() {
  return ['user', '/user/otp/sms', 'POST'] as const
}

export function getPostUserOtpSmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUserOtpSmsMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.otp.sms.$post(undefined, options))
    },
  })
}

export function usePostUserOtpSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.$post>>>>
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
  const mutationDefaults = getPostUserOtpSmsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserOtpSmsMutationKey() {
  return ['user', '/user/otp/sms', 'DELETE'] as const
}

export function getDeleteUserOtpSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserOtpSmsMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.otp.sms.$delete(undefined, options))
    },
  })
}

export function useDeleteUserOtpSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.$delete>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getDeleteUserOtpSmsMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserOtpSmsReceiveMutationKey() {
  return ['user', '/user/otp/sms/receive', 'POST'] as const
}

export function getPostUserOtpSmsReceiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.receive.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUserOtpSmsReceiveMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.otp.sms.receive.$post(undefined, options))
    },
  })
}

export function usePostUserOtpSmsReceive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.receive.$post>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getPostUserOtpSmsReceiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserOtpVerifyOtpMutationKey() {
  return ['user', '/user/otp/verify/:otp', 'POST'] as const
}

export function getPostUserOtpVerifyOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.otp.verify)[':otp']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user.otp.verify)[':otp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserOtpVerifyOtpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user.otp.verify)[':otp']['$post']>) {
      return parseResponse(client.user.otp.verify[':otp'].$post(args, options))
    },
  })
}

export function usePostUserOtpVerifyOtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.user.otp.verify)[':otp']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user.otp.verify)[':otp']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserOtpVerifyOtpMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserdataValidateMutationKey() {
  return ['userdata', '/userdata/validate', 'POST'] as const
}

export function getPostUserdataValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userdata.validate.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.userdata.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserdataValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.userdata.validate.$post>) {
      return parseResponse(client.userdata.validate.$post(args, options))
    },
  })
}

export function usePostUserdataValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.userdata.validate.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.userdata.validate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserdataValidateMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  return ['users', '/users/:id', toValue(args)] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdCustomdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['customdata']['$get']>>,
) {
  return ['users', '/users/:id/customdata', toValue(args)] as const
}

export function getUsersIdCustomdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['customdata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdCustomdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].customdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['customdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['customdata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['customdata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['customdata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdCustomdataQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['customdata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdCustomdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdCustomdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].customdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVerifyEmailMutationKey() {
  return ['verify-email', '/verify-email', 'PUT'] as const
}

export function getPutVerifyEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['verify-email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVerifyEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['verify-email']['$put']>) {
      return parseResponse(client['verify-email'].$put(args, options))
    },
  })
}

export function usePutVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['verify-email']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVerifyEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVerifyEmailMutationKey() {
  return ['verify-email', '/verify-email', 'POST'] as const
}

export function getPostVerifyEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['verify-email']['$post']>) {
      return parseResponse(client['verify-email'].$post(args, options))
    },
  })
}

export function usePostVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['verify-email']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerifyEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVirtualCircuitsIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>
  >,
) {
  return ['virtual-circuits', '/virtual-circuits/:id/events', toValue(args)] as const
}

export function getVirtualCircuitsIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualCircuitsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['virtual-circuits'][':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualCircuitsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVirtualCircuitsIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualCircuitsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualCircuitsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['virtual-circuits'][':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVirtualCircuitsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>>,
) {
  return ['virtual-circuits', '/virtual-circuits/:id', toValue(args)] as const
}

export function getVirtualCircuitsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualCircuitsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['virtual-circuits'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualCircuitsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVirtualCircuitsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualCircuitsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualCircuitsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['virtual-circuits'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVirtualCircuitsIdMutationKey() {
  return ['virtual-circuits', '/virtual-circuits/:id', 'PUT'] as const
}

export function getPutVirtualCircuitsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['virtual-circuits'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVirtualCircuitsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$put']>) {
      return parseResponse(client['virtual-circuits'][':id'].$put(args, options))
    },
  })
}

export function usePutVirtualCircuitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['virtual-circuits'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVirtualCircuitsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVirtualCircuitsIdMutationKey() {
  return ['virtual-circuits', '/virtual-circuits/:id', 'DELETE'] as const
}

export function getDeleteVirtualCircuitsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['virtual-circuits'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualCircuitsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$delete']>,
    ) {
      return parseResponse(client['virtual-circuits'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteVirtualCircuitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['virtual-circuits'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualCircuitsIdMutationOptions<TError, TOnMutateResult>(
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

export function getVirtualNetworksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>>,
) {
  return ['virtual-networks', '/virtual-networks/:id', toValue(args)] as const
}

export function getVirtualNetworksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualNetworksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['virtual-networks'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualNetworksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVirtualNetworksIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualNetworksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualNetworksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['virtual-networks'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVirtualNetworksIdMutationKey() {
  return ['virtual-networks', '/virtual-networks/:id', 'DELETE'] as const
}

export function getDeleteVirtualNetworksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['virtual-networks'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualNetworksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['virtual-networks'][':id']['$delete']>,
    ) {
      return parseResponse(client['virtual-networks'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteVirtualNetworksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['virtual-networks'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVirtualNetworksIdMutationOptions<TError, TOnMutateResult>(
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

export function getVrfsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['$get']>>,
) {
  return ['vrfs', '/vrfs/:id', toValue(args)] as const
}

export function getVrfsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVrfsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vrfs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVrfsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getVrfsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVrfsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vrfs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVrfsIdMutationKey() {
  return ['vrfs', '/vrfs/:id', 'PUT'] as const
}

export function getPutVrfsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.vrfs)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVrfsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vrfs)[':id']['$put']>) {
      return parseResponse(client.vrfs[':id'].$put(args, options))
    },
  })
}

export function usePutVrfsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.vrfs)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVrfsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVrfsIdMutationKey() {
  return ['vrfs', '/vrfs/:id', 'DELETE'] as const
}

export function getDeleteVrfsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.vrfs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVrfsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vrfs)[':id']['$delete']>) {
      return parseResponse(client.vrfs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVrfsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.vrfs)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVrfsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVrfsIdIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>>,
) {
  return ['vrfs', '/vrfs/:id/ips', toValue(args)] as const
}

export function getVrfsIdIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVrfsIdIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vrfs[':id'].ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVrfsIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
            >
          >,
          ReturnType<typeof getVrfsIdIpsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsIdIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVrfsIdIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vrfs[':id'].ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVrfsVrfIdIpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>,
) {
  return ['vrfs', '/vrfs/:vrf_id/ips/:id', toValue(args)] as const
}

export function getVrfsVrfIdIpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVrfsVrfIdIpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vrfs[':vrf_id'].ips[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVrfsVrfIdIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVrfsVrfIdIpsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsVrfIdIpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVrfsVrfIdIpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vrfs[':vrf_id'].ips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVrfsIdRoutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>>,
) {
  return ['vrfs', '/vrfs/:id/routes', toValue(args)] as const
}

export function getVrfsIdRoutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVrfsIdRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vrfs[':id'].routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVrfsIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVrfsIdRoutesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsIdRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVrfsIdRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vrfs[':id'].routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVrfsIdRoutesMutationKey() {
  return ['vrfs', '/vrfs/:id/routes', 'POST'] as const
}

export function getPostVrfsIdRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vrfs)[':id']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVrfsIdRoutesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vrfs)[':id']['routes']['$post']>) {
      return parseResponse(client.vrfs[':id'].routes.$post(args, options))
    },
  })
}

export function usePostVrfsIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vrfs)[':id']['routes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVrfsIdRoutesMutationOptions<TError, TOnMutateResult>(
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
