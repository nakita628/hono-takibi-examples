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

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getMarketingMarketingEvents202609QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09', toValue(args)] as const
}

export function getMarketingMarketingEvents202609QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingMarketingEvents202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>
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
                  ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609QueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingMarketingEvents202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
          ':externalEventId'
        ].lists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
            ':externalEventId'
          ].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists/:listId',
    'PUT',
  ] as const
}

export function getPutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
          ':externalEventId'
        ].lists[':listId'].$put(args, options),
      )
    },
  })
}

export function usePutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListId<
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
                      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
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
  const mutationDefaults =
    getPutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationOptions<
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

export function getDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists/:listId',
    'DELETE',
  ] as const
}

export function getDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
          ':externalEventId'
        ].lists[':listId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListId<
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
                      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
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
  const mutationDefaults =
    getDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdMutationOptions<
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

export function getMarketingMarketingEvents202609AssociationsMarketingEventIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609AssociationsMarketingEventIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609AssociationsMarketingEventIdListsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].associations[
          ':marketingEventId'
        ].lists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609AssociationsMarketingEventIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingMarketingEvents202609AssociationsMarketingEventIdListsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609AssociationsMarketingEventIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609AssociationsMarketingEventIdListsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].associations[
            ':marketingEventId'
          ].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists/:listId',
    'PUT',
  ] as const
}

export function getPutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists[
          ':listId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListId<
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
                      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
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
  const mutationDefaults =
    getPutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationOptions<
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

export function getDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists/:listId',
    'DELETE',
  ] as const
}

export function getDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists[
          ':listId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListId<
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
                      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
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
  const mutationDefaults =
    getDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdMutationOptions<
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

export function getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/attendance/:externalEventId/:subscriberState/create',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].attendance[':externalEventId'][
          ':subscriberState'
        ].create.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreate<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateMutationOptions<
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

export function getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/attendance/:externalEventId/:subscriberState/email-create',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].attendance[':externalEventId'][
          ':subscriberState'
        ]['email-create'].$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreate<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateMutationOptions<
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

export function getPostMarketingMarketingEvents202609BatchArchiveMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/batch/archive', 'POST'] as const
}

export function getPostMarketingMarketingEvents202609BatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609BatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609BatchArchive<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
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
  const mutationDefaults = getPostMarketingMarketingEvents202609BatchArchiveMutationOptions<
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

export function getPostMarketingMarketingEvents202609BatchUpdateMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/batch/update', 'POST'] as const
}

export function getPostMarketingMarketingEvents202609BatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609BatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609BatchUpdate<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
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
  const mutationDefaults = getPostMarketingMarketingEvents202609BatchUpdateMutationOptions<
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

export function getPostMarketingMarketingEvents202609EventsMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/events', 'POST'] as const
}

export function getPostMarketingMarketingEvents202609EventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['events']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609EventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609Events<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['$post']
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
  const mutationDefaults = getPostMarketingMarketingEvents202609EventsMutationOptions<
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

export function getPostMarketingMarketingEvents202609EventsDeleteMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/events/delete', 'POST'] as const
}

export function getPostMarketingMarketingEvents202609EventsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609EventsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events.delete.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609EventsDelete<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
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
  const mutationDefaults = getPostMarketingMarketingEvents202609EventsDeleteMutationOptions<
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

export function getMarketingMarketingEvents202609EventsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
    >
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09/events/search', toValue(args)] as const
}

export function getMarketingMarketingEvents202609EventsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingMarketingEvents202609EventsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609EventsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609EventsSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609EventsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingMarketingEvents202609EventsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].events.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingMarketingEvents202609EventsUpsertMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/events/upsert', 'POST'] as const
}

export function getPostMarketingMarketingEvents202609EventsUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609EventsUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events.upsert.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609EventsUpsert<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
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
  const mutationDefaults = getPostMarketingMarketingEvents202609EventsUpsertMutationOptions<
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

export function getMarketingMarketingEvents202609EventsExternalEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609EventsExternalEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingMarketingEvents202609EventsExternalEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMarketingMarketingEvents202609EventsExternalEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609EventsExternalEventIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609EventsExternalEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609EventsExternalEventIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingMarketingEvents202609EventsExternalEventIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    'PUT',
  ] as const
}

export function getPutMarketingMarketingEvents202609EventsExternalEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingMarketingEvents202609EventsExternalEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutMarketingMarketingEvents202609EventsExternalEventId<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
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
  const mutationDefaults = getPutMarketingMarketingEvents202609EventsExternalEventIdMutationOptions<
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

export function getDeleteMarketingMarketingEvents202609EventsExternalEventIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    'DELETE',
  ] as const
}

export function getDeleteMarketingMarketingEvents202609EventsExternalEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingMarketingEvents202609EventsExternalEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMarketingMarketingEvents202609EventsExternalEventId<
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
                      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
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
  const mutationDefaults =
    getDeleteMarketingMarketingEvents202609EventsExternalEventIdMutationOptions<
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

export function getPatchMarketingMarketingEvents202609EventsExternalEventIdMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    'PATCH',
  ] as const
}

export function getPatchMarketingMarketingEvents202609EventsExternalEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingMarketingEvents202609EventsExternalEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchMarketingMarketingEvents202609EventsExternalEventId<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
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
  const mutationDefaults =
    getPatchMarketingMarketingEvents202609EventsExternalEventIdMutationOptions<
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

export function getPostMarketingMarketingEvents202609EventsExternalEventIdCancelMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/cancel',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609EventsExternalEventIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdCancel<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609EventsExternalEventIdCancelMutationOptions<
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

export function getPostMarketingMarketingEvents202609EventsExternalEventIdCompleteMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/complete',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609EventsExternalEventIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'].complete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdComplete<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609EventsExternalEventIdCompleteMutationOptions<
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

export function getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/:subscriberState/email-upsert',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'][
          ':subscriberState'
        ]['email-upsert'].$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsert<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertMutationOptions<
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

export function getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/:subscriberState/upsert',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].events[':externalEventId'][
          ':subscriberState'
        ].upsert.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsert<
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
                    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertMutationOptions<
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

export function getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/contacts/:contactIdentifier/breakdown',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].participations.contacts[
          ':contactIdentifier'
        ].breakdown.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].participations.contacts[
            ':contactIdentifier'
          ].breakdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:externalAccountId/:externalEventId',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
          ':externalEventId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
            ':externalEventId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:externalAccountId/:externalEventId/breakdown',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
          ':externalEventId'
        ].breakdown.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
            ':externalEventId'
          ].breakdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609ParticipationsMarketingEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:marketingEventId',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609ParticipationsMarketingEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609ParticipationsMarketingEventIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].participations[':marketingEventId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ParticipationsMarketingEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609ParticipationsMarketingEventIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609ParticipationsMarketingEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609ParticipationsMarketingEventIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].participations[':marketingEventId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:marketingEventId/breakdown',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'].participations[
          ':marketingEventId'
        ].breakdown.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'].participations[
            ':marketingEventId'
          ].breakdown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609AppIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:appId/settings',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609AppIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingMarketingEvents202609AppIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':appId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609AppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609AppIdSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609AppIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingMarketingEvents202609AppIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'][':appId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingMarketingEvents202609AppIdSettingsMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/:appId/settings', 'POST'] as const
}

export function getPostMarketingMarketingEvents202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingMarketingEvents202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':appId'].settings.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609AppIdSettings<
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
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
  const mutationDefaults = getPostMarketingMarketingEvents202609AppIdSettingsMutationOptions<
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

export function getMarketingMarketingEvents202609ExternalEventIdIdentifiersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:externalEventId/identifiers',
    toValue(args),
  ] as const
}

export function getMarketingMarketingEvents202609ExternalEventIdIdentifiersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingMarketingEvents202609ExternalEventIdIdentifiersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':externalEventId'].identifiers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ExternalEventIdIdentifiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609ExternalEventIdIdentifiersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609ExternalEventIdIdentifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingMarketingEvents202609ExternalEventIdIdentifiersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'][':externalEventId'].identifiers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingMarketingEvents202609ObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']>
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09/:objectId', toValue(args)] as const
}

export function getMarketingMarketingEvents202609ObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingMarketingEvents202609ObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingMarketingEvents202609ObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']>
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingMarketingEvents202609ObjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingMarketingEvents202609ObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingMarketingEvents202609ObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing['marketing-events']['2026-09'][':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMarketingMarketingEvents202609ObjectIdMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/:objectId', 'DELETE'] as const
}

export function getDeleteMarketingMarketingEvents202609ObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingMarketingEvents202609ObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingMarketingEvents202609ObjectId<
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
                      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
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
  const mutationDefaults = getDeleteMarketingMarketingEvents202609ObjectIdMutationOptions<
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

export function getPatchMarketingMarketingEvents202609ObjectIdMutationKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/:objectId', 'PATCH'] as const
}

export function getPatchMarketingMarketingEvents202609ObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingMarketingEvents202609ObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':objectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMarketingMarketingEvents202609ObjectId<
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
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
  const mutationDefaults = getPatchMarketingMarketingEvents202609ObjectIdMutationOptions<
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

export function getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:objectId/attendance/:subscriberState/create',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':objectId'].attendance[
          ':subscriberState'
        ].create.$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreate<
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateMutationOptions<
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

export function getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateMutationKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:objectId/attendance/:subscriberState/email-create',
    'POST',
  ] as const
}

export function getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['marketing-events']['2026-09'][':objectId'].attendance[':subscriberState'][
          'email-create'
        ].$post(args, options),
      )
    },
  })
}

export function usePostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreate<
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
                    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
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
  const mutationDefaults =
    getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateMutationOptions<
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
