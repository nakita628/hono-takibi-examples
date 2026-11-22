import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostOcsV2PhpAppsDavApiV1DirectMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/direct', 'POST'] as const
}

export function getPostOcsV2PhpAppsDavApiV1DirectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['direct']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['direct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsDavApiV1DirectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['direct']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.dav.api.v1.direct.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsDavApiV1Direct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['direct']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['direct']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsDavApiV1DirectMutationOptions<
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

export function getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending', keyArgs] as const
}

export function getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.federated_calendars.pending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDavApiV1FederatedCalendarsPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDavApiV1FederatedCalendarsPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsDavApiV1FederatedCalendarsPendingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/:id', 'POST'] as const
}

export function getPostOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.federated_calendars.pending[':id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsDavApiV1FederatedCalendarsPendingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationOptions<
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

export function getDeleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.federated_calendars.pending[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['federated_calendars']['pending'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpAppsDavApiV1FederatedCalendarsPendingIdMutationOptions<
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

export function getOcsV2PhpAppsDavApiV1EventsUpcomingQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/events/upcoming', keyArgs] as const
}

export function getOcsV2PhpAppsDavApiV1EventsUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDavApiV1EventsUpcomingQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDavApiV1EventsUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.events.upcoming.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDavApiV1EventsUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1EventsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsDavApiV1EventsUpcomingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDavApiV1EventsUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['events']['upcoming']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1EventsUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsDavApiV1EventsUpcomingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/outOfOffice/:userId/now', keyArgs] as const
}

export function getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].now.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['now']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdNowQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/outOfOffice/:userId', keyArgs] as const
}

export function getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDavApiV1OutOfOfficeUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDavApiV1OutOfOfficeUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsDavApiV1OutOfOfficeUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/outOfOffice/:userId', 'POST'] as const
}

export function getPostOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsDavApiV1OutOfOfficeUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationOptions<
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

export function getDeleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dav/api/v1/outOfOffice/:userId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.dav.api.v1.outOfOffice[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsDavApiV1OutOfOfficeUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dav']['api']['v1']['outOfOffice'][':userId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpAppsDavApiV1OutOfOfficeUserIdMutationOptions<
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

export function getPostOcsV2PhpCalendarExportMutationKey() {
  return ['ocs', '/ocs/v2.php/calendar/export', 'POST'] as const
}

export function getPostOcsV2PhpCalendarExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['calendar']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['calendar']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCalendarExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['calendar']['export']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].calendar.export.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCalendarExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['calendar']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['calendar']['export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCalendarExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostOcsV2PhpCalendarImportMutationKey() {
  return ['ocs', '/ocs/v2.php/calendar/import', 'POST'] as const
}

export function getPostOcsV2PhpCalendarImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['calendar']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['calendar']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCalendarImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['calendar']['import']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].calendar.import.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCalendarImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['calendar']['import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['calendar']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCalendarImportMutationOptions<TError, TOnMutateResult>(
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

export function getPostOcsV2PhpContactsImportMutationKey() {
  return ['ocs', '/ocs/v2.php/contacts/import', 'POST'] as const
}

export function getPostOcsV2PhpContactsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['contacts']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['contacts']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpContactsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['contacts']['import']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].contacts.import.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpContactsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['contacts']['import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['contacts']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpContactsImportMutationOptions<TError, TOnMutateResult>(
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
