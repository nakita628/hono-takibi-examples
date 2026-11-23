import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createDeleteApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBatchesIdQueryKey(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
) {
  return ['batches', '/batches/:id', args] as const
}

export function getBatchesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.batches)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesIdQueryKey>
  >({
    queryKey: getBatchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBatchesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteBatchesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBatchesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBgpSessionsIdQueryKey(
  args: InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>,
) {
  return ['bgp', '/bgp/sessions/:id', args] as const
}

export function getBgpSessionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBgpSessionsIdQueryKey>
  >({
    queryKey: getBgpSessionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bgp.sessions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBgpSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBgpSessionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBgpSessionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutBgpSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bgp.sessions)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.bgp.sessions)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBgpSessionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBgpSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBgpSessionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBgpDynamicNeighborsIdQueryKey(
  args: InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>,
) {
  return ['bgp-dynamic-neighbors', '/bgp-dynamic-neighbors/:id', args] as const
}

export function getBgpDynamicNeighborsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBgpDynamicNeighborsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bgp-dynamic-neighbors'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBgpDynamicNeighborsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBgpDynamicNeighborsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteBgpDynamicNeighborsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBgpDynamicNeighborsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCapacityQueryKey() {
  return ['capacity', '/capacity'] as const
}

export function getCapacityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCapacityQueryKey>
  >({
    queryKey: getCapacityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.capacity.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCapacity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCapacityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCapacityQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostCapacity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.capacity.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCapacityMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCapacityMetrosQueryKey() {
  return ['capacity', '/capacity/metros'] as const
}

export function getCapacityMetrosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCapacityMetrosQueryKey>
  >({
    queryKey: getCapacityMetrosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.capacity.metros.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCapacityMetros<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCapacityMetrosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCapacityMetrosQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostCapacityMetros<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capacity.metros.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.capacity.metros.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCapacityMetrosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
) {
  return ['connections', '/connections/:connection_id', args] as const
}

export function getConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<
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

export function getConnectionsConnectionIdEventsQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>,
) {
  return ['connections', '/connections/:connection_id/events', args] as const
}

export function getConnectionsConnectionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConnectionsConnectionIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdPortsQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>,
) {
  return ['connections', '/connections/:connection_id/ports', args] as const
}

export function getConnectionsConnectionIdPortsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdPortsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].ports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionIdPorts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConnectionsConnectionIdPortsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdVirtualCircuitsQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>,
) {
  return ['connections', '/connections/:connection_id/virtual-circuits', args] as const
}

export function getConnectionsConnectionIdVirtualCircuitsQueryOptions<
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
  args: InferRequestType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdVirtualCircuitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id']['virtual-circuits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionIdVirtualCircuits<
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
  args: () => InferRequestType<
    (typeof client.connections)[':connection_id']['virtual-circuits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getConnectionsConnectionIdVirtualCircuitsQueryKey>
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
      ...getConnectionsConnectionIdVirtualCircuitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdPortsIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>,
) {
  return ['connections', '/connections/:connection_id/ports/:id', args] as const
}

export function getConnectionsConnectionIdPortsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdPortsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].ports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionIdPortsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getConnectionsConnectionIdPortsIdQueryKey>
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
      ...getConnectionsConnectionIdPortsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdPortsIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
  >,
) {
  return ['connections', '/connections/:connection_id/ports/:id/events', args] as const
}

export function getConnectionsConnectionIdPortsIdEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdPortsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].ports[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionIdPortsIdEvents<
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
  args: () => InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConnectionsConnectionIdPortsIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey(
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
  >,
) {
  return [
    'connections',
    '/connections/:connection_id/ports/:port_id/virtual-circuits',
    args,
  ] as const
}

export function getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryOptions<
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
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].ports[':port_id']['virtual-circuits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionIdPortsPortIdVirtualCircuits<
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
  args: () => InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConnectionsConnectionIdPortsPortIdVirtualCircuitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostConnectionsConnectionIdPortsPortIdVirtualCircuits<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostConnectionsConnectionIdPortsPortIdVirtualCircuitsMutationOptions<
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

export function getDevicesIdQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['$get']>,
) {
  return ['devices', '/devices/:id', args] as const
}

export function getDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.devices)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdQueryKey>
  >({
    queryKey: getDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.devices)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDevicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDevicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDevicesIdActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicesIdActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevicesIdBandwidthQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>,
) {
  return ['devices', '/devices/:id/bandwidth', args] as const
}

export function getDevicesIdBandwidthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['bandwidth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdBandwidthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].bandwidth.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdBandwidth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['bandwidth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdBandwidthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdBgpNeighborsQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>,
) {
  return ['devices', '/devices/:id/bgp/neighbors', args] as const
}

export function getDevicesIdBgpNeighborsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdBgpNeighborsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].bgp.neighbors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdBgpNeighbors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDevicesIdBgpNeighborsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesIdBgpSessionsQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>,
) {
  return ['devices', '/devices/:id/bgp/sessions', args] as const
}

export function getDevicesIdBgpSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdBgpSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].bgp.sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdBgpSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDevicesIdBgpSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDevicesIdBgpSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicesIdBgpSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevicesIdCustomdataQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>,
) {
  return ['devices', '/devices/:id/customdata', args] as const
}

export function getDevicesIdCustomdataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].customdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdCustomdataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdDiagnosticsScreenshotQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>,
) {
  return ['devices', '/devices/:id/diagnostics/screenshot', args] as const
}

export function getDevicesIdDiagnosticsScreenshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdDiagnosticsScreenshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].diagnostics.screenshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdDiagnosticsScreenshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDevicesIdDiagnosticsScreenshotQueryKey>
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
      ...getDevicesIdDiagnosticsScreenshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesIdDiagnosticsHealthRollupQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>,
) {
  return ['devices', '/devices/:id/diagnostics/health/rollup', args] as const
}

export function getDevicesIdDiagnosticsHealthRollupQueryOptions<
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
  args: InferRequestType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdDiagnosticsHealthRollupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].diagnostics.health.rollup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdDiagnosticsHealthRollup<
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
  args: () => InferRequestType<
    (typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDevicesIdDiagnosticsHealthRollupQueryKey>
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
      ...getDevicesIdDiagnosticsHealthRollupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesIdEventsQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['events']['$get']>,
) {
  return ['devices', '/devices/:id/events', args] as const
}

export function getDevicesIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdEventsQueryKey>
  >({
    queryKey: getDevicesIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.devices)[':id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdFirmwareSetsQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>,
) {
  return ['devices', '/devices/:id/firmware-sets', args] as const
}

export function getDevicesIdFirmwareSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdFirmwareSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id']['firmware-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdFirmwareSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDevicesIdFirmwareSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDevicesIdIpsQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['ips']['$get']>,
) {
  return ['devices', '/devices/:id/ips', args] as const
}

export function getDevicesIdIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdIpsQueryKey>
  >({
    queryKey: getDevicesIdIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ips']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDevicesIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicesIdIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevicesIdMetadataQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>,
) {
  return ['devices', '/devices/:id/metadata', args] as const
}

export function getDevicesIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdSshKeysQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>,
) {
  return ['devices', '/devices/:id/ssh-keys', args] as const
}

export function getDevicesIdSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ssh-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id']['ssh-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['ssh-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdSshKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdTrafficQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>,
) {
  return ['devices', '/devices/:id/traffic', args] as const
}

export function getDevicesIdTrafficQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdTrafficQueryKey>
  >({
    queryKey: getDevicesIdTrafficQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].traffic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdTraffic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.devices)[':id']['traffic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdTrafficQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdTrafficQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdUsagesQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['usages']['$get']>,
) {
  return ['devices', '/devices/:id/usages', args] as const
}

export function getDevicesIdUsagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdUsagesQueryKey>
  >({
    queryKey: getDevicesIdUsagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].usages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesIdUsages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['usages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.devices)[':id']['usages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdUsagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdUsagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesIdUserdataQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>,
) {
  return ['devices', '/devices/:id/userdata', args] as const
}

export function getDevicesIdUserdataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['userdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesIdUserdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].userdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesIdUserdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['userdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdUserdataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesInstanceIdIpsIdCustomdataQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']
  >,
) {
  return ['devices', '/devices/:instance_id/ips/:id/customdata', args] as const
}

export function getDevicesInstanceIdIpsIdCustomdataQueryOptions<
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
  args: InferRequestType<
    (typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDevicesInstanceIdIpsIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':instance_id'].ips[':id'].customdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesInstanceIdIpsIdCustomdata<
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
  args: () => InferRequestType<
    (typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDevicesInstanceIdIpsIdCustomdataQueryKey>
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
      ...getDevicesInstanceIdIpsIdCustomdataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>>,
        TError,
        InferRequestType<typeof client.emails.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEmailsIdQueryKey(args: InferRequestType<(typeof client.emails)[':id']['$get']>) {
  return ['emails', '/emails/:id', args] as const
}

export function getEmailsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.emails)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsIdQueryKey>
  >({
    queryKey: getEmailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmailsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutEmailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmailsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteEmailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmailsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsIdQueryKey(args: InferRequestType<(typeof client.events)[':id']['$get']>) {
  return ['events', '/events/:id', args] as const
}

export function getEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.events)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdQueryKey>
  >({
    queryKey: getEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFacilitiesQueryKey(args: InferRequestType<typeof client.facilities.$get>) {
  return ['facilities', '/facilities', args] as const
}

export function getFacilitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.facilities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacilitiesQueryKey>
  >({
    queryKey: getFacilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facilities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.facilities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFacilitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHardwareReservationsIdQueryKey(
  args: InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>,
) {
  return ['hardware-reservations', '/hardware-reservations/:id', args] as const
}

export function getHardwareReservationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHardwareReservationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['hardware-reservations'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHardwareReservationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hardware-reservations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getHardwareReservationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostHardwareReservationsIdActivate<
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
                ReturnType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHardwareReservationsIdActivateMutationOptions<
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

export function createPostHardwareReservationsIdMove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHardwareReservationsIdMoveMutationOptions<
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

export function getIncidentsQueryKey(args: InferRequestType<typeof client.incidents.$get>) {
  return ['incidents', '/incidents', args] as const
}

export function getIncidentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.incidents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIncidentsQueryKey>
  >({
    queryKey: getIncidentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.incidents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.incidents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIncidentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIncidentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInvitationsQueryKey(args: InferRequestType<typeof client.invitations.$get>) {
  return ['invitations', '/invitations', args] as const
}

export function getInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >({
    queryKey: getInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInvitationsIdQueryKey(
  args: InferRequestType<(typeof client.invitations)[':id']['$get']>,
) {
  return ['invitations', '/invitations/:id', args] as const
}

export function getInvitationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitationsIdQueryKey>
  >({
    queryKey: getInvitationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invitations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invitations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.invitations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvitationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteInvitationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  return ['invoices', '/invoices/:id', args] as const
}

export function getInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.invoices)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdQueryKey>
  >({
    queryKey: getInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpsIdQueryKey(args: InferRequestType<(typeof client.ips)[':id']['$get']>) {
  return ['ips', '/ips/:id', args] as const
}

export function getIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ips)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdQueryKey>
  >({
    queryKey: getIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpsIdAvailableQueryKey(
  args: InferRequestType<(typeof client.ips)[':id']['available']['$get']>,
) {
  return ['ips', '/ips/:id/available', args] as const
}

export function getIpsIdAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips)[':id']['available']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdAvailableQueryKey>
  >({
    queryKey: getIpsIdAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips[':id'].available.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsIdAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips)[':id']['available']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ips)[':id']['available']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIdAvailableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsIdAvailableQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpsIdCustomdataQueryKey(
  args: InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>,
) {
  return ['ips', '/ips/:id/customdata', args] as const
}

export function getIpsIdCustomdataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdCustomdataQueryKey>
  >({
    queryKey: getIpsIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips[':id'].customdata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ips)[':id']['customdata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIdCustomdataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsIdCustomdataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLicensesIdQueryKey(
  args: InferRequestType<(typeof client.licenses)[':id']['$get']>,
) {
  return ['licenses', '/licenses/:id', args] as const
}

export function getLicensesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.licenses)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensesIdQueryKey>
  >({
    queryKey: getLicensesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.licenses[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLicensesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.licenses)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicensesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutLicensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.licenses)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLicensesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteLicensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.licenses)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.licenses)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLicensesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLocationsMetrosQueryKey() {
  return ['locations', '/locations/metros'] as const
}

export function getLocationsMetrosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsMetrosQueryKey>
  >({
    queryKey: getLocationsMetrosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.metros.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLocationsMetros<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.metros.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsMetrosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsMetrosQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLocationsMetrosIdQueryKey(
  args: InferRequestType<(typeof client.locations.metros)[':id']['$get']>,
) {
  return ['locations', '/locations/metros/:id', args] as const
}

export function getLocationsMetrosIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations.metros)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsMetrosIdQueryKey>
  >({
    queryKey: getLocationsMetrosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.metros[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocationsMetrosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locations.metros)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.locations.metros)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsMetrosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsMetrosIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMarketSpotPricesQueryKey(
  args: InferRequestType<typeof client.market.spot.prices.$get>,
) {
  return ['market', '/market/spot/prices', args] as const
}

export function getMarketSpotPricesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.market.spot.prices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketSpotPricesQueryKey>
  >({
    queryKey: getMarketSpotPricesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.market.spot.prices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMarketSpotPrices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.market.spot.prices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketSpotPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketSpotPricesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMarketSpotPricesHistoryQueryKey(
  args: InferRequestType<typeof client.market.spot.prices.history.$get>,
) {
  return ['market', '/market/spot/prices/history', args] as const
}

export function getMarketSpotPricesHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.market.spot.prices.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketSpotPricesHistoryQueryKey>
  >({
    queryKey: getMarketSpotPricesHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.market.spot.prices.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketSpotPricesHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.market.spot.prices.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketSpotPricesHistoryQueryKey>
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
      ...getMarketSpotPricesHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketSpotPricesMetrosQueryKey(
  args: InferRequestType<typeof client.market.spot.prices.metros.$get>,
) {
  return ['market', '/market/spot/prices/metros', args] as const
}

export function getMarketSpotPricesMetrosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.market.spot.prices.metros.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketSpotPricesMetrosQueryKey>
  >({
    queryKey: getMarketSpotPricesMetrosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.market.spot.prices.metros.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketSpotPricesMetros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.market.spot.prices.metros.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.market.spot.prices.metros.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketSpotPricesMetrosQueryKey>
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
      ...getMarketSpotPricesMetrosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMembershipsIdQueryKey(
  args: InferRequestType<(typeof client.memberships)[':id']['$get']>,
) {
  return ['memberships', '/memberships/:id', args] as const
}

export function getMembershipsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.memberships)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembershipsIdQueryKey>
  >({
    queryKey: getMembershipsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.memberships[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMembershipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.memberships)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembershipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMembershipsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.memberships)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.memberships)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembershipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMembershipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetalGatewaysIdQueryKey(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>,
) {
  return ['metal-gateways', '/metal-gateways/:id', args] as const
}

export function getMetalGatewaysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetalGatewaysIdQueryKey>
  >({
    queryKey: getMetalGatewaysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metal-gateways'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetalGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetalGatewaysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetalGatewaysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteMetalGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMetalGatewaysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetalGatewaysIdBgpDynamicNeighborsQueryKey(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>,
) {
  return ['metal-gateways', '/metal-gateways/:id/bgp-dynamic-neighbors', args] as const
}

export function getMetalGatewaysIdBgpDynamicNeighborsQueryOptions<
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
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMetalGatewaysIdBgpDynamicNeighborsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metal-gateways'][':id']['bgp-dynamic-neighbors'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetalGatewaysIdBgpDynamicNeighbors<
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
  args: () => InferRequestType<
    (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMetalGatewaysIdBgpDynamicNeighborsQueryKey>
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
      ...getMetalGatewaysIdBgpDynamicNeighborsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMetalGatewaysIdBgpDynamicNeighbors<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetalGatewaysIdBgpDynamicNeighborsMutationOptions<
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

export function getMetalGatewaysIdIpsQueryKey(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>,
) {
  return ['metal-gateways', '/metal-gateways/:id/ips', args] as const
}

export function getMetalGatewaysIdIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMetalGatewaysIdIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metal-gateways'][':id'].ips.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetalGatewaysIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metal-gateways'][':id']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetalGatewaysIdIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMetalGatewaysIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetalGatewaysIdIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOperatingSystemVersionsQueryKey() {
  return ['operating-system-versions', '/operating-system-versions'] as const
}

export function getOperatingSystemVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOperatingSystemVersionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['operating-system-versions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperatingSystemVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
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
              Awaited<ReturnType<(typeof client)['operating-system-versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatingSystemVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOperatingSystemVersionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOperatingSystemsQueryKey() {
  return ['operating-systems', '/operating-systems'] as const
}

export function getOperatingSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperatingSystemsQueryKey>
  >({
    queryKey: getOperatingSystemsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['operating-systems'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperatingSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['operating-systems']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperatingSystemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOperatingSystemsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrganizationsQueryKey(args: InferRequestType<typeof client.organizations.$get>) {
  return ['organizations', '/organizations', args] as const
}

export function getOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >({
    queryKey: getOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organizations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
) {
  return ['organizations', '/organizations/:id', args] as const
}

export function getOrganizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdQueryKey>
  >({
    queryKey: getOrganizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsIdCapacityQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>,
) {
  return ['organizations', '/organizations/:id/capacity', args] as const
}

export function getOrganizationsIdCapacityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdCapacityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].capacity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdCapacityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdCapacityMetrosQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>,
) {
  return ['organizations', '/organizations/:id/capacity/metros', args] as const
}

export function getOrganizationsIdCapacityMetrosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdCapacityMetrosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].capacity.metros.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdCapacityMetros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationsIdCapacityMetrosQueryKey>
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
      ...getOrganizationsIdCapacityMetrosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdCustomdataQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>,
) {
  return ['organizations', '/organizations/:id/customdata', args] as const
}

export function getOrganizationsIdCustomdataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].customdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdCustomdataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdDevicesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>,
) {
  return ['organizations', '/organizations/:id/devices', args] as const
}

export function getOrganizationsIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdEventsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['events']['$get']>,
) {
  return ['organizations', '/organizations/:id/events', args] as const
}

export function getOrganizationsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdFacilitiesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>,
) {
  return ['organizations', '/organizations/:id/facilities', args] as const
}

export function getOrganizationsIdFacilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['facilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdFacilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].facilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdFacilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['facilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdFacilitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdFirmwareSetsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>,
) {
  return ['organizations', '/organizations/:id/firmware-sets', args] as const
}

export function getOrganizationsIdFirmwareSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdFirmwareSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id']['firmware-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdFirmwareSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdFirmwareSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdInvitationsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>,
) {
  return ['organizations', '/organizations/:id/invitations', args] as const
}

export function getOrganizationsIdInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdInvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsIdInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsIdInvitationsMutationOptions<
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

export function getOrganizationsIdInvoicesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>,
) {
  return ['organizations', '/organizations/:id/invoices', args] as const
}

export function getOrganizationsIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdOperatingSystemsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>,
) {
  return ['organizations', '/organizations/:id/operating-systems', args] as const
}

export function getOrganizationsIdOperatingSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['operating-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOperatingSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id']['operating-systems'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdOperatingSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['operating-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOperatingSystemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>,
) {
  return ['organizations', '/organizations/:id/payment-methods', args] as const
}

export function getOrganizationsIdPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id']['payment-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['payment-methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsIdPaymentMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsIdPaymentMethodsMutationOptions<
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

export function getOrganizationsIdPlansQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>,
) {
  return ['organizations', '/organizations/:id/plans', args] as const
}

export function getOrganizationsIdPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdPlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsIdProjectsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>,
) {
  return ['organizations', '/organizations/:id/projects', args] as const
}

export function getOrganizationsIdProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsIdProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsIdProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsIdTransfersQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>,
) {
  return ['organizations', '/organizations/:id/transfers', args] as const
}

export function getOrganizationsIdTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsIdTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdTransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdConnectionsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$get']>,
) {
  return ['organizations', '/organizations/:organization_id/connections', args] as const
}

export function getOrganizationsOrganizationIdConnectionsQueryOptions<
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
  args: InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationIdConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdConnections<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id']['connections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsOrganizationIdConnectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationIdConnections<
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
                  (typeof client.organizations)[':organization_id']['connections']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdConnectionsMutationOptions<
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

export function getPaymentMethodsIdQueryKey(
  args: InferRequestType<(typeof client)['payment-methods'][':id']['$get']>,
) {
  return ['payment-methods', '/payment-methods/:id', args] as const
}

export function getPaymentMethodsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-methods'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsIdQueryKey>
  >({
    queryKey: getPaymentMethodsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-methods'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentMethodsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-methods'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['payment-methods'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentMethodsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentMethodsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutPaymentMethodsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPaymentMethodsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePaymentMethodsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePaymentMethodsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansQueryKey(args: InferRequestType<typeof client.plans.$get>) {
  return ['plans', '/plans', args] as const
}

export function getPlansQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >({
    queryKey: getPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plans.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPortsIdQueryKey(args: InferRequestType<(typeof client.ports)[':id']['$get']>) {
  return ['ports', '/ports/:id', args] as const
}

export function getPortsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ports)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdQueryKey>
  >({
    queryKey: getPortsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPortsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPortsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPortsIdAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdAssignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPortsIdBond<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['bond']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ports)[':id']['bond']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdBondMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPortsIdConvertLayer2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdConvertLayer2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPortsIdConvertLayer3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdConvertLayer3MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPortsIdDisbond<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdDisbondMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPortsIdNativeVlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdNativeVlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePortsIdNativeVlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePortsIdNativeVlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPortsIdUnassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdUnassignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPortsIdVlanAssignmentsQueryKey(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>,
) {
  return ['ports', '/ports/:id/vlan-assignments', args] as const
}

export function getPortsIdVlanAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPortsIdVlanAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortsIdVlanAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPortsIdVlanAssignmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPortsIdVlanAssignmentsAssignmentIdQueryKey(
  args: InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']
  >,
) {
  return ['ports', '/ports/:id/vlan-assignments/:assignment_id', args] as const
}

export function getPortsIdVlanAssignmentsAssignmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPortsIdVlanAssignmentsAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'][':assignment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortsIdVlanAssignmentsAssignmentId<
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
  args: () => InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getPortsIdVlanAssignmentsAssignmentIdQueryKey>
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
      ...getPortsIdVlanAssignmentsAssignmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPortsIdVlanAssignmentsBatchesQueryKey(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>,
) {
  return ['ports', '/ports/:id/vlan-assignments/batches', args] as const
}

export function getPortsIdVlanAssignmentsBatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPortsIdVlanAssignmentsBatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'].batches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortsIdVlanAssignmentsBatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getPortsIdVlanAssignmentsBatchesQueryKey>
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
      ...getPortsIdVlanAssignmentsBatchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPortsIdVlanAssignmentsBatches<
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
                ReturnType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPortsIdVlanAssignmentsBatchesMutationOptions<
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

export function getPortsIdVlanAssignmentsBatchesBatchIdQueryKey(
  args: InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
  >,
) {
  return ['ports', '/ports/:id/vlan-assignments/batches/:batch_id', args] as const
}

export function getPortsIdVlanAssignmentsBatchesBatchIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPortsIdVlanAssignmentsBatchesBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports[':id']['vlan-assignments'].batches[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPortsIdVlanAssignmentsBatchesBatchId<
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
  args: () => InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPortsIdVlanAssignmentsBatchesBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
) {
  return ['projects', '/projects/:id', args] as const
}

export function getProjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.projects)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdQueryKey>
  >({
    queryKey: getProjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>,
) {
  return ['projects', '/projects/:id/api-keys', args] as const
}

export function getProjectsIdApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['api-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdBatchesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['batches']['$get']>,
) {
  return ['projects', '/projects/:id/batches', args] as const
}

export function getProjectsIdBatchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['batches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['batches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdBatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].batches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdBatches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['batches']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['batches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdBatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdBgpConfigQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>,
) {
  return ['projects', '/projects/:id/bgp-config', args] as const
}

export function getProjectsIdBgpConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['bgp-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdBgpConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['bgp-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdBgpConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['bgp-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdBgpConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdBgpConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdBgpConfigsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdBgpSessionsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>,
) {
  return ['projects', '/projects/:id/bgp/sessions', args] as const
}

export function getProjectsIdBgpSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdBgpSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].bgp.sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdBgpSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdBgpSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdCustomdataQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>,
) {
  return ['projects', '/projects/:id/customdata', args] as const
}

export function getProjectsIdCustomdataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].customdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['customdata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdCustomdataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdDevicesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['devices']['$get']>,
) {
  return ['projects', '/projects/:id/devices', args] as const
}

export function getProjectsIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['devices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProjectsIdDevicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdDevicesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdEventsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['events']['$get']>,
) {
  return ['projects', '/projects/:id/events', args] as const
}

export function getProjectsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdEventsQueryKey>
  >({
    queryKey: getProjectsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdFacilitiesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>,
) {
  return ['projects', '/projects/:id/facilities', args] as const
}

export function getProjectsIdFacilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['facilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdFacilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].facilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdFacilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['facilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdFacilitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdFirmwareSetsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>,
) {
  return ['projects', '/projects/:id/firmware-sets', args] as const
}

export function getProjectsIdFirmwareSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdFirmwareSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['firmware-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdFirmwareSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['firmware-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdFirmwareSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdGlobalBgpRangesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>,
) {
  return ['projects', '/projects/:id/global-bgp-ranges', args] as const
}

export function getProjectsIdGlobalBgpRangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdGlobalBgpRangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['global-bgp-ranges'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdGlobalBgpRanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdGlobalBgpRangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdHardwareReservationsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>,
) {
  return ['projects', '/projects/:id/hardware-reservations', args] as const
}

export function getProjectsIdHardwareReservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['hardware-reservations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdHardwareReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['hardware-reservations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdHardwareReservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['hardware-reservations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdHardwareReservationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsIdIpsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['ips']['$get']>,
) {
  return ['projects', '/projects/:id/ips', args] as const
}

export function getProjectsIdIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdIpsQueryKey>
  >({
    queryKey: getProjectsIdIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdLicensesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>,
) {
  return ['projects', '/projects/:id/licenses', args] as const
}

export function getProjectsIdLicensesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].licenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['licenses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdLicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdLicensesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdPlansQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['plans']['$get']>,
) {
  return ['projects', '/projects/:id/plans', args] as const
}

export function getProjectsIdPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdPlansQueryKey>
  >({
    queryKey: getProjectsIdPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['plans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['plans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdSpotMarketRequestsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>,
) {
  return ['projects', '/projects/:id/spot-market-requests', args] as const
}

export function getProjectsIdSpotMarketRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdSpotMarketRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['spot-market-requests'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdSpotMarketRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['spot-market-requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdSpotMarketRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsIdSpotMarketRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdSpotMarketRequestsMutationOptions<
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

export function getProjectsIdSshKeysQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>,
) {
  return ['projects', '/projects/:id/ssh-keys', args] as const
}

export function getProjectsIdSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['ssh-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['ssh-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdSshKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdSshKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProjectsIdTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdTransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsIdUsagesQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['usages']['$get']>,
) {
  return ['projects', '/projects/:id/usages', args] as const
}

export function getProjectsIdUsagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdUsagesQueryKey>
  >({
    queryKey: getProjectsIdUsagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].usages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdUsages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['usages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['usages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdUsagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdUsagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsIdVirtualNetworksQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>,
) {
  return ['projects', '/projects/:id/virtual-networks', args] as const
}

export function getProjectsIdVirtualNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsIdVirtualNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id']['virtual-networks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsIdVirtualNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':id']['virtual-networks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsIdVirtualNetworksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsIdVirtualNetworks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdVirtualNetworksMutationOptions<
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

export function getProjectsIdVrfsQueryKey(
  args: InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>,
) {
  return ['projects', '/projects/:id/vrfs', args] as const
}

export function getProjectsIdVrfsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIdVrfsQueryKey>
  >({
    queryKey: getProjectsIdVrfsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':id'].vrfs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsIdVrfs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':id']['vrfs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIdVrfsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsIdVrfsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsIdVrfs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsIdVrfsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdConnectionsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>,
) {
  return ['projects', '/projects/:project_id/connections', args] as const
}

export function getProjectsProjectIdConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdConnectionsMutationOptions<
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

export function getProjectsProjectIdInvitationsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>,
) {
  return ['projects', '/projects/:project_id/invitations', args] as const
}

export function getProjectsProjectIdInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdInvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdInvitationsMutationOptions<
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

export function getProjectsProjectIdIpsIdCustomdataQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/ips/:id/customdata', args] as const
}

export function getProjectsProjectIdIpsIdCustomdataQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdIpsIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].ips[':id'].customdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdIpsIdCustomdata<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProjectsProjectIdIpsIdCustomdataQueryKey>
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
      ...getProjectsProjectIdIpsIdCustomdataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>,
) {
  return ['projects', '/projects/:project_id/memberships', args] as const
}

export function getProjectsProjectIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdMetalGatewaysQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>,
) {
  return ['projects', '/projects/:project_id/metal-gateways', args] as const
}

export function getProjectsProjectIdMetalGatewaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdMetalGatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id']['metal-gateways'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdMetalGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdMetalGatewaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdMetalGateways<
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
                ReturnType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdMetalGatewaysMutationOptions<
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

export function getProjectsProjectIdSelfServiceReservationsQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/self-service/reservations', args] as const
}

export function getProjectsProjectIdSelfServiceReservationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdSelfServiceReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id']['self-service'].reservations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdSelfServiceReservations<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdSelfServiceReservationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdSelfServiceReservations<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdSelfServiceReservationsMutationOptions<
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

export function getProjectsProjectIdSelfServiceReservationsIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/self-service/reservations/:id', args] as const
}

export function getProjectsProjectIdSelfServiceReservationsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdSelfServiceReservationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id']['self-service'].reservations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdSelfServiceReservationsId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdSelfServiceReservationsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['reset-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$delete']>>>
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoutesIdQueryKey(args: InferRequestType<(typeof client.routes)[':id']['$get']>) {
  return ['routes', '/routes/:id', args] as const
}

export function getRoutesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.routes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesIdQueryKey>
  >({
    queryKey: getRoutesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoutesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.routes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoutesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutRoutesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.routes)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRoutesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteRoutesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.routes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRoutesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoutesIdEventsQueryKey(
  args: InferRequestType<(typeof client.routes)[':id']['events']['$get']>,
) {
  return ['routes', '/routes/:id/events', args] as const
}

export function getRoutesIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesIdEventsQueryKey>
  >({
    queryKey: getRoutesIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':id'].events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoutesIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.routes)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.routes)[':id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutesIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoutesIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSpotMarketRequestsIdQueryKey(
  args: InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>,
) {
  return ['spot-market-requests', '/spot-market-requests/:id', args] as const
}

export function getSpotMarketRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpotMarketRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['spot-market-requests'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSpotMarketRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['spot-market-requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSpotMarketRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteSpotMarketRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSpotMarketRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSshKeysQueryKey(args: InferRequestType<(typeof client)['ssh-keys']['$get']>) {
  return ['ssh-keys', '/ssh-keys', args] as const
}

export function getSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['ssh-keys']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysQueryKey>
  >({
    queryKey: getSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ssh-keys'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSshKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ssh-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSshKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['ssh-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSshKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSshKeysIdQueryKey(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
) {
  return ['ssh-keys', '/ssh-keys/:id', args] as const
}

export function getSshKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysIdQueryKey>
  >({
    queryKey: getSshKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ssh-keys'][':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSshKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSshKeysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSshKeysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['ssh-keys'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSshKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSshKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSupportRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSupportRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTransfersIdQueryKey(
  args: InferRequestType<(typeof client.transfers)[':id']['$get']>,
) {
  return ['transfers', '/transfers/:id', args] as const
}

export function getTransfersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transfers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransfersIdQueryKey>
  >({
    queryKey: getTransfersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transfers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTransfersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transfers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransfersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransfersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutTransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTransfersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transfers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTransfersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserQueryKey(args: InferRequestType<typeof client.user.$get>) {
  return ['user', '/user', args] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
        TError,
        InferRequestType<typeof client.user.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserApiKeysQueryKey(
  args: InferRequestType<(typeof client.user)['api-keys']['$get']>,
) {
  return ['user', '/user/api-keys', args] as const
}

export function getUserApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserApiKeysQueryKey>
  >({
    queryKey: getUserApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user['api-keys'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)['api-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUserApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)['api-keys']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.user)['api-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserApiKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserOtpApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.app.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserOtpAppMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserOtpApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserOtpAppMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserOtpRecoveryCodesQueryKey() {
  return ['user', '/user/otp/recovery-codes'] as const
}

export function getUserOtpRecoveryCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getUserOtpRecoveryCodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.otp['recovery-codes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserOtpRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>>
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
              Awaited<ReturnType<(typeof client.user.otp)['recovery-codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserOtpRecoveryCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserOtpRecoveryCodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostUserOtpRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserOtpRecoveryCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserOtpSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.otp.sms.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserOtpSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserOtpSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserOtpSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserOtpSmsReceive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserOtpSmsReceiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserOtpVerifyOtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserOtpVerifyOtpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserdataValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserdataValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdCustomdataQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['customdata']['$get']>,
) {
  return ['users', '/users/:id/customdata', args] as const
}

export function getUsersIdCustomdataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['customdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersIdCustomdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].customdata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersIdCustomdata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['customdata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['customdata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdCustomdataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['verify-email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVerifyEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['verify-email']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerifyEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVirtualCircuitsIdEventsQueryKey(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>,
) {
  return ['virtual-circuits', '/virtual-circuits/:id/events', args] as const
}

export function getVirtualCircuitsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualCircuitsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['virtual-circuits'][':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVirtualCircuitsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVirtualCircuitsIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVirtualCircuitsIdQueryKey(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>,
) {
  return ['virtual-circuits', '/virtual-circuits/:id', args] as const
}

export function getVirtualCircuitsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualCircuitsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['virtual-circuits'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVirtualCircuitsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['virtual-circuits'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVirtualCircuitsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutVirtualCircuitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVirtualCircuitsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteVirtualCircuitsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualCircuitsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVirtualNetworksIdQueryKey(
  args: InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>,
) {
  return ['virtual-networks', '/virtual-networks/:id', args] as const
}

export function getVirtualNetworksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualNetworksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['virtual-networks'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVirtualNetworksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['virtual-networks'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVirtualNetworksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteVirtualNetworksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualNetworksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVrfsIdQueryKey(args: InferRequestType<(typeof client.vrfs)[':id']['$get']>) {
  return ['vrfs', '/vrfs/:id', args] as const
}

export function getVrfsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.vrfs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsIdQueryKey>
  >({
    queryKey: getVrfsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vrfs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVrfsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vrfs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVrfsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVrfsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutVrfsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.vrfs)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVrfsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteVrfsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVrfsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVrfsIdIpsQueryKey(
  args: InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>,
) {
  return ['vrfs', '/vrfs/:id/ips', args] as const
}

export function getVrfsIdIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsIdIpsQueryKey>
  >({
    queryKey: getVrfsIdIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vrfs[':id'].ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVrfsIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['ips']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVrfsIdIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVrfsIdIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVrfsVrfIdIpsIdQueryKey(
  args: InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>,
) {
  return ['vrfs', '/vrfs/:vrf_id/ips/:id', args] as const
}

export function getVrfsVrfIdIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVrfsVrfIdIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vrfs[':vrf_id'].ips[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVrfsVrfIdIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVrfsVrfIdIpsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVrfsIdRoutesQueryKey(
  args: InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>,
) {
  return ['vrfs', '/vrfs/:id/routes', args] as const
}

export function getVrfsIdRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrfsIdRoutesQueryKey>
  >({
    queryKey: getVrfsIdRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vrfs[':id'].routes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVrfsIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vrfs)[':id']['routes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVrfsIdRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVrfsIdRoutesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostVrfsIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVrfsIdRoutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
