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

export function getAccountKey() {
  return ['account'] as const
}

export function getDatabasesKey() {
  return ['databases'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getLinodeKey() {
  return ['linode'] as const
}

export function getLkeKey() {
  return ['lke'] as const
}

export function getLongviewKey() {
  return ['longview'] as const
}

export function getManagedKey() {
  return ['managed'] as const
}

export function getNetworkingKey() {
  return ['networking'] as const
}

export function getNodebalancersKey() {
  return ['nodebalancers'] as const
}

export function getObjectStorageKey() {
  return ['object-storage'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountMutationKey() {
  return ['account', '/account', 'PUT'] as const
}

export function getPutAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    InferRequestType<typeof client.account.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$put>) {
      return parseResponse(client.account.$put(args, options))
    },
  })
}

export function usePutAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountCancelMutationKey() {
  return ['account', '/account/cancel', 'POST'] as const
}

export function getPostAccountCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.cancel.$post>) {
      return parseResponse(client.account.cancel.$post(args, options))
    },
  })
}

export function usePostAccountCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.cancel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.cancel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountCreditCardMutationKey() {
  return ['account', '/account/credit-card', 'POST'] as const
}

export function getPostAccountCreditCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['credit-card']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['credit-card']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCreditCardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['credit-card']['$post']>) {
      return parseResponse(client.account['credit-card'].$post(args, options))
    },
  })
}

export function usePostAccountCreditCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['credit-card']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['credit-card']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCreditCardMutationOptions<TError, TOnMutateResult>(
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

export function getAccountEntityTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['entity-transfers']['$get']>>,
) {
  return ['account', '/account/entity-transfers', toValue(args)] as const
}

export function getAccountEntityTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['entity-transfers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEntityTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['entity-transfers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEntityTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['entity-transfers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountEntityTransfersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEntityTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEntityTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['entity-transfers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountEntityTransfersMutationKey() {
  return ['account', '/account/entity-transfers', 'POST'] as const
}

export function getPostAccountEntityTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['entity-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEntityTransfersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['entity-transfers']['$post']>) {
      return parseResponse(client.account['entity-transfers'].$post(args, options))
    },
  })
}

export function usePostAccountEntityTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['entity-transfers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['entity-transfers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEntityTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountEntityTransfersTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>
  >,
) {
  return ['account', '/account/entity-transfers/:token', toValue(args)] as const
}

export function getAccountEntityTransfersTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEntityTransfersTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['entity-transfers'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEntityTransfersToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountEntityTransfersTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEntityTransfersTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEntityTransfersTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['entity-transfers'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountEntityTransfersTokenMutationKey() {
  return ['account', '/account/entity-transfers/:token', 'DELETE'] as const
}

export function getDeleteAccountEntityTransfersTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountEntityTransfersTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
    ) {
      return parseResponse(client.account['entity-transfers'][':token'].$delete(args, options))
    },
  })
}

export function useDeleteAccountEntityTransfersToken<
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
                  ReturnType<(typeof client.account)['entity-transfers'][':token']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountEntityTransfersTokenMutationOptions<
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

export function getPostAccountEntityTransfersTokenAcceptMutationKey() {
  return ['account', '/account/entity-transfers/:token/accept', 'POST'] as const
}

export function getPostAccountEntityTransfersTokenAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEntityTransfersTokenAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['entity-transfers'][':token']['accept']['$post']
      >,
    ) {
      return parseResponse(client.account['entity-transfers'][':token'].accept.$post(args, options))
    },
  })
}

export function usePostAccountEntityTransfersTokenAccept<
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
                    (typeof client.account)['entity-transfers'][':token']['accept']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)['entity-transfers'][':token']['accept']['$post']
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
  const mutationDefaults = getPostAccountEntityTransfersTokenAcceptMutationOptions<
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

export function getAccountEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.events.$get>>,
) {
  return ['account', '/account/events', toValue(args)] as const
}

export function getAccountEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
          >,
          ReturnType<typeof getAccountEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.events)[':eventId']['$get']>>,
) {
  return ['account', '/account/events/:eventId', toValue(args)] as const
}

export function getAccountEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.events)[':eventId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.events[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.events)[':eventId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountEventsEventIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.events[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountEventsEventIdReadMutationKey() {
  return ['account', '/account/events/:eventId/read', 'POST'] as const
}

export function getPostAccountEventsEventIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEventsEventIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
    ) {
      return parseResponse(client.account.events[':eventId'].read.$post(args, options))
    },
  })
}

export function usePostAccountEventsEventIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.events)[':eventId']['read']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEventsEventIdReadMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountEventsEventIdSeenMutationKey() {
  return ['account', '/account/events/:eventId/seen', 'POST'] as const
}

export function getPostAccountEventsEventIdSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['seen']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEventsEventIdSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
    ) {
      return parseResponse(client.account.events[':eventId'].seen.$post(args, options))
    },
  })
}

export function usePostAccountEventsEventIdSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.events)[':eventId']['seen']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEventsEventIdSeenMutationOptions<TError, TOnMutateResult>(
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

export function getAccountInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.invoices.$get>>,
) {
  return ['account', '/account/invoices', toValue(args)] as const
}

export function getAccountInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>
            >
          >,
          ReturnType<typeof getAccountInvoicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>>,
) {
  return ['account', '/account/invoices/:invoiceId', toValue(args)] as const
}

export function getAccountInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountInvoicesInvoiceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInvoicesInvoiceIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>
  >,
) {
  return ['account', '/account/invoices/:invoiceId/items', toValue(args)] as const
}

export function getAccountInvoicesInvoiceIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInvoicesInvoiceIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.invoices[':invoiceId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInvoicesInvoiceIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountInvoicesInvoiceIdItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInvoicesInvoiceIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInvoicesInvoiceIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.invoices[':invoiceId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountLoginsQueryKey() {
  return ['account', '/account/logins'] as const
}

export function getAccountLoginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountLoginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.logins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountLogins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
          >,
          ReturnType<typeof getAccountLoginsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLoginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountLoginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.logins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountLoginsLoginIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.logins)[':loginId']['$get']>>,
) {
  return ['account', '/account/logins/:loginId', toValue(args)] as const
}

export function getAccountLoginsLoginIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.logins)[':loginId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountLoginsLoginIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.logins[':loginId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountLoginsLoginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.logins)[':loginId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountLoginsLoginIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLoginsLoginIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountLoginsLoginIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.logins[':loginId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountMaintenanceQueryKey() {
  return ['account', '/account/maintenance'] as const
}

export function getAccountMaintenanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountMaintenanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.maintenance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>
            >
          >,
          ReturnType<typeof getAccountMaintenanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMaintenanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountMaintenanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.maintenance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountNotificationsQueryKey() {
  return ['account', '/account/notifications'] as const
}

export function getAccountNotificationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountNotificationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.notifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
            >
          >,
          ReturnType<typeof getAccountNotificationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountNotificationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.notifications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountOauthClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['oauth-clients']['$get']>>,
) {
  return ['account', '/account/oauth-clients', toValue(args)] as const
}

export function getAccountOauthClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['oauth-clients']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountOauthClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['oauth-clients'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountOauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['oauth-clients']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountOauthClientsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOauthClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountOauthClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['oauth-clients'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountOauthClientsMutationKey() {
  return ['account', '/account/oauth-clients', 'POST'] as const
}

export function getPostAccountOauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountOauthClientsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['oauth-clients']['$post']>) {
      return parseResponse(client.account['oauth-clients'].$post(args, options))
    },
  })
}

export function usePostAccountOauthClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['oauth-clients']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['oauth-clients']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountOauthClientsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountOauthClientsClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>
  >,
) {
  return ['account', '/account/oauth-clients/:clientId', toValue(args)] as const
}

export function getAccountOauthClientsClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountOauthClientsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['oauth-clients'][':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountOauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountOauthClientsClientIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOauthClientsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountOauthClientsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['oauth-clients'][':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountOauthClientsClientIdMutationKey() {
  return ['account', '/account/oauth-clients/:clientId', 'PUT'] as const
}

export function getPutAccountOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
    ) {
      return parseResponse(client.account['oauth-clients'][':clientId'].$put(args, options))
    },
  })
}

export function usePutAccountOauthClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountOauthClientsClientIdMutationOptions<
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

export function getDeleteAccountOauthClientsClientIdMutationKey() {
  return ['account', '/account/oauth-clients/:clientId', 'DELETE'] as const
}

export function getDeleteAccountOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
    ) {
      return parseResponse(client.account['oauth-clients'][':clientId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountOauthClientsClientId<
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
                  ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountOauthClientsClientIdMutationOptions<
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

export function getPostAccountOauthClientsClientIdResetSecretMutationKey() {
  return ['account', '/account/oauth-clients/:clientId/reset-secret', 'POST'] as const
}

export function getPostAccountOauthClientsClientIdResetSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountOauthClientsClientIdResetSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
      >,
    ) {
      return parseResponse(
        client.account['oauth-clients'][':clientId']['reset-secret'].$post(args, options),
      )
    },
  })
}

export function usePostAccountOauthClientsClientIdResetSecret<
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
                    (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
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
  const mutationDefaults = getPostAccountOauthClientsClientIdResetSecretMutationOptions<
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

export function getAccountOauthClientsClientIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
  >,
) {
  return ['account', '/account/oauth-clients/:clientId/thumbnail', toValue(args)] as const
}

export function getAccountOauthClientsClientIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountOauthClientsClientIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['oauth-clients'][':clientId'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountOauthClientsClientIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
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
                    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
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
                    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountOauthClientsClientIdThumbnailQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOauthClientsClientIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountOauthClientsClientIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['oauth-clients'][':clientId'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountOauthClientsClientIdThumbnailMutationKey() {
  return ['account', '/account/oauth-clients/:clientId/thumbnail', 'PUT'] as const
}

export function getPutAccountOauthClientsClientIdThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountOauthClientsClientIdThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
      >,
    ) {
      return parseResponse(
        client.account['oauth-clients'][':clientId'].thumbnail.$put(args, options),
      )
    },
  })
}

export function usePutAccountOauthClientsClientIdThumbnail<
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
                    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
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
  const mutationDefaults = getPutAccountOauthClientsClientIdThumbnailMutationOptions<
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

export function getAccountPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['payment-methods']['$get']>>,
) {
  return ['account', '/account/payment-methods', toValue(args)] as const
}

export function getAccountPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['payment-methods']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['payment-methods'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['payment-methods']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountPaymentMethodsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['payment-methods'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountPaymentMethodsMutationKey() {
  return ['account', '/account/payment-methods', 'POST'] as const
}

export function getPostAccountPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['payment-methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['payment-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['payment-methods']['$post']>) {
      return parseResponse(client.account['payment-methods'].$post(args, options))
    },
  })
}

export function usePostAccountPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['payment-methods']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['payment-methods']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountPaymentMethodsPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
  >,
) {
  return ['account', '/account/payment-methods/:paymentMethodId', toValue(args)] as const
}

export function getAccountPaymentMethodsPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountPaymentMethodsPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['payment-methods'][':paymentMethodId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountPaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
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
                  ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountPaymentMethodsPaymentMethodIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentMethodsPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountPaymentMethodsPaymentMethodIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['payment-methods'][':paymentMethodId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountPaymentMethodsPaymentMethodIdMutationKey() {
  return ['account', '/account/payment-methods/:paymentMethodId', 'DELETE'] as const
}

export function getDeleteAccountPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['payment-methods'][':paymentMethodId']['$delete']
      >,
    ) {
      return parseResponse(
        client.account['payment-methods'][':paymentMethodId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountPaymentMethodsPaymentMethodId<
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
                    (typeof client.account)['payment-methods'][':paymentMethodId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)['payment-methods'][':paymentMethodId']['$delete']
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
  const mutationDefaults = getDeleteAccountPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationKey() {
  return ['account', '/account/payment-methods/:paymentMethodId/make-default', 'POST'] as const
}

export function getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
      >,
    ) {
      return parseResponse(
        client.account['payment-methods'][':paymentMethodId']['make-default'].$post(args, options),
      )
    },
  })
}

export function usePostAccountPaymentMethodsPaymentMethodIdMakeDefault<
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
                    (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
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
  const mutationDefaults = getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationOptions<
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

export function getAccountPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.payments.$get>>,
) {
  return ['account', '/account/payments', toValue(args)] as const
}

export function getAccountPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>
            >
          >,
          ReturnType<typeof getAccountPaymentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountPaymentsMutationKey() {
  return ['account', '/account/payments', 'POST'] as const
}

export function getPostAccountPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.payments.$post>) {
      return parseResponse(client.account.payments.$post(args, options))
    },
  })
}

export function usePostAccountPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.payments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountPaymentsPaypalMutationKey() {
  return ['account', '/account/payments/paypal', 'POST'] as const
}

export function getPostAccountPaymentsPaypalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.paypal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.payments.paypal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentsPaypalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.payments.paypal.$post>) {
      return parseResponse(client.account.payments.paypal.$post(args, options))
    },
  })
}

export function usePostAccountPaymentsPaypal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.paypal.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.payments.paypal.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentsPaypalMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountPaymentsPaypalExecuteMutationKey() {
  return ['account', '/account/payments/paypal/execute', 'POST'] as const
}

export function getPostAccountPaymentsPaypalExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.payments.paypal.execute.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.account.payments.paypal.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentsPaypalExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.payments.paypal.execute.$post>) {
      return parseResponse(client.account.payments.paypal.execute.$post(args, options))
    },
  })
}

export function usePostAccountPaymentsPaypalExecute<
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
                Awaited<ReturnType<typeof client.account.payments.paypal.execute.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.account.payments.paypal.execute.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentsPaypalExecuteMutationOptions<
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

export function getAccountPaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>>,
) {
  return ['account', '/account/payments/:paymentId', toValue(args)] as const
}

export function getAccountPaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountPaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.payments[':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountPaymentsPaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountPaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.payments[':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountPromoCodesMutationKey() {
  return ['account', '/account/promo-codes', 'POST'] as const
}

export function getPostAccountPromoCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['promo-codes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['promo-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPromoCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['promo-codes']['$post']>) {
      return parseResponse(client.account['promo-codes'].$post(args, options))
    },
  })
}

export function usePostAccountPromoCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['promo-codes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['promo-codes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPromoCodesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountServiceTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['service-transfers']['$get']>>,
) {
  return ['account', '/account/service-transfers', toValue(args)] as const
}

export function getAccountServiceTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['service-transfers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountServiceTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['service-transfers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountServiceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['service-transfers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountServiceTransfersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountServiceTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountServiceTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['service-transfers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountServiceTransfersMutationKey() {
  return ['account', '/account/service-transfers', 'POST'] as const
}

export function getPostAccountServiceTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['service-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountServiceTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['service-transfers']['$post']>,
    ) {
      return parseResponse(client.account['service-transfers'].$post(args, options))
    },
  })
}

export function usePostAccountServiceTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['service-transfers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['service-transfers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountServiceTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountServiceTransfersTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>
  >,
) {
  return ['account', '/account/service-transfers/:token', toValue(args)] as const
}

export function getAccountServiceTransfersTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountServiceTransfersTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['service-transfers'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountServiceTransfersToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountServiceTransfersTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountServiceTransfersTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountServiceTransfersTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['service-transfers'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountServiceTransfersTokenMutationKey() {
  return ['account', '/account/service-transfers/:token', 'DELETE'] as const
}

export function getDeleteAccountServiceTransfersTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountServiceTransfersTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
    ) {
      return parseResponse(client.account['service-transfers'][':token'].$delete(args, options))
    },
  })
}

export function useDeleteAccountServiceTransfersToken<
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
                  ReturnType<(typeof client.account)['service-transfers'][':token']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountServiceTransfersTokenMutationOptions<
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

export function getPostAccountServiceTransfersTokenAcceptMutationKey() {
  return ['account', '/account/service-transfers/:token/accept', 'POST'] as const
}

export function getPostAccountServiceTransfersTokenAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountServiceTransfersTokenAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['service-transfers'][':token']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.account['service-transfers'][':token'].accept.$post(args, options),
      )
    },
  })
}

export function usePostAccountServiceTransfersTokenAccept<
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
                    (typeof client.account)['service-transfers'][':token']['accept']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)['service-transfers'][':token']['accept']['$post']
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
  const mutationDefaults = getPostAccountServiceTransfersTokenAcceptMutationOptions<
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

export function getAccountSettingsQueryKey() {
  return ['account', '/account/settings'] as const
}

export function getAccountSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>
            >
          >,
          ReturnType<typeof getAccountSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountSettingsMutationKey() {
  return ['account', '/account/settings', 'PUT'] as const
}

export function getPutAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.settings.$put>) {
      return parseResponse(client.account.settings.$put(args, options))
    },
  })
}

export function usePutAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.settings.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountSettingsManagedEnableMutationKey() {
  return ['account', '/account/settings/managed-enable', 'POST'] as const
}

export function getPostAccountSettingsManagedEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.settings)['managed-enable']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSettingsManagedEnableMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.settings['managed-enable'].$post(undefined, options))
    },
  })
}

export function usePostAccountSettingsManagedEnable<
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
                Awaited<ReturnType<(typeof client.account.settings)['managed-enable']['$post']>>
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
  const mutationDefaults = getPostAccountSettingsManagedEnableMutationOptions<
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

export function getAccountTransferQueryKey() {
  return ['account', '/account/transfer'] as const
}

export function getAccountTransferQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountTransferQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.transfer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountTransfer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>
            >
          >,
          ReturnType<typeof getAccountTransferQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountTransferQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.transfer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.users.$get>>,
) {
  return ['account', '/account/users', toValue(args)] as const
}

export function getAccountUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
          >,
          ReturnType<typeof getAccountUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountUsersMutationKey() {
  return ['account', '/account/users', 'POST'] as const
}

export function getPostAccountUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.users.$post>) {
      return parseResponse(client.account.users.$post(args, options))
    },
  })
}

export function usePostAccountUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.account.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountUsersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountUsersUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.users)[':username']['$get']>>,
) {
  return ['account', '/account/users/:username', toValue(args)] as const
}

export function getAccountUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.users)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.users)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountUsersUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountUsersUsernameMutationKey() {
  return ['account', '/account/users/:username', 'PUT'] as const
}

export function getPutAccountUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountUsersUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.users)[':username']['$put']>) {
      return parseResponse(client.account.users[':username'].$put(args, options))
    },
  })
}

export function usePutAccountUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':username']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountUsersUsernameMutationKey() {
  return ['account', '/account/users/:username', 'DELETE'] as const
}

export function getDeleteAccountUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':username']['$delete']>,
    ) {
      return parseResponse(client.account.users[':username'].$delete(args, options))
    },
  })
}

export function useDeleteAccountUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':username']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getAccountUsersUsernameGrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>
  >,
) {
  return ['account', '/account/users/:username/grants', toValue(args)] as const
}

export function getAccountUsersUsernameGrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountUsersUsernameGrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.users[':username'].grants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountUsersUsernameGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountUsersUsernameGrantsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersUsernameGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountUsersUsernameGrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.users[':username'].grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountUsersUsernameGrantsMutationKey() {
  return ['account', '/account/users/:username/grants', 'PUT'] as const
}

export function getPutAccountUsersUsernameGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountUsersUsernameGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
    ) {
      return parseResponse(client.account.users[':username'].grants.$put(args, options))
    },
  })
}

export function usePutAccountUsersUsernameGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountUsersUsernameGrantsMutationOptions<TError, TOnMutateResult>(
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

export function getDatabasesEnginesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.engines.$get>>,
) {
  return ['databases', '/databases/engines', toValue(args)] as const
}

export function getDatabasesEnginesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.engines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesEnginesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.engines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesEngines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.engines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>
            >
          >,
          ReturnType<typeof getDatabasesEnginesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesEnginesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesEnginesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.engines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesEnginesEngineIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>>,
) {
  return ['databases', '/databases/engines/:engineId', toValue(args)] as const
}

export function getDatabasesEnginesEngineIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesEnginesEngineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.engines[':engineId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesEnginesEngineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatabasesEnginesEngineIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesEnginesEngineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesEnginesEngineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.engines[':engineId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.instances.$get>>,
) {
  return ['databases', '/databases/instances', toValue(args)] as const
}

export function getDatabasesInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
            >
          >,
          ReturnType<typeof getDatabasesInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesMongodbInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.mongodb.instances.$get>>,
) {
  return ['databases', '/databases/mongodb/instances', toValue(args)] as const
}

export function getDatabasesMongodbInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.mongodb.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMongodbInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mongodb.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMongodbInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.mongodb.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>
              >
            >
          >,
          ReturnType<typeof getDatabasesMongodbInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMongodbInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mongodb.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesMongodbInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId', toValue(args)] as const
}

export function getDatabasesMongodbInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMongodbInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
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
                  ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMongodbInstancesInstanceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mongodb.instances[':instanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesMongodbInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId', 'PUT'] as const
}

export function getPutDatabasesMongodbInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesMongodbInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.databases.mongodb.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutDatabasesMongodbInstancesInstanceId<
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
                  ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesMongodbInstancesInstanceIdMutationOptions<
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

export function getDeleteDatabasesMongodbInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteDatabasesMongodbInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMongodbInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
    ) {
      return parseResponse(client.databases.mongodb.instances[':instanceId'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasesMongodbInstancesInstanceId<
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
                  ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesMongodbInstancesInstanceIdMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups', toValue(args)] as const
}

export function getDatabasesMongodbInstancesInstanceIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMongodbInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups', 'POST'] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdBackups<
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
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
  const mutationDefaults = getPostDatabasesMongodbInstancesInstanceIdBackupsMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId',
    toValue(args),
  ] as const
}

export function getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMongodbInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupId<
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
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
    getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationOptions<
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

export function getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups[':backupId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestore<
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
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
    getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/credentials',
    toValue(args),
  ] as const
}

export function getDatabasesMongodbInstancesInstanceIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMongodbInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mongodb.instances[':instanceId'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].credentials.reset.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdCredentialsReset<
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
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
    getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationOptions<
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

export function getPostDatabasesMongodbInstancesInstanceIdPatchMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId/patch', 'POST'] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].patch.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdPatch<
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
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
  const mutationDefaults = getPostDatabasesMongodbInstancesInstanceIdPatchMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdSslQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/ssl', toValue(args)] as const
}

export function getDatabasesMongodbInstancesInstanceIdSslQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdSslQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].ssl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMongodbInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']
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
                    (typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMongodbInstancesInstanceIdSslQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdSslQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMongodbInstancesInstanceIdSslQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mongodb.instances[':instanceId'].ssl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesMysqlInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.mysql.instances.$get>>,
) {
  return ['databases', '/databases/mysql/instances', toValue(args)] as const
}

export function getDatabasesMysqlInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.mysql.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMysqlInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mysql.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMysqlInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.mysql.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>
              >
            >
          >,
          ReturnType<typeof getDatabasesMysqlInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMysqlInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mysql.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMysqlInstancesMutationKey() {
  return ['databases', '/databases/mysql/instances', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.databases.mysql.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.databases.mysql.instances.$post>) {
      return parseResponse(client.databases.mysql.instances.$post(args, options))
    },
  })
}

export function usePostDatabasesMysqlInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.mysql.instances.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.databases.mysql.instances.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMysqlInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getDatabasesMysqlInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId', toValue(args)] as const
}

export function getDatabasesMysqlInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMysqlInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>
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
                  ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMysqlInstancesInstanceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mysql.instances[':instanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesMysqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId', 'PUT'] as const
}

export function getPutDatabasesMysqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesMysqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.databases.mysql.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutDatabasesMysqlInstancesInstanceId<
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
                  ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesMysqlInstancesInstanceIdMutationOptions<
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

export function getDeleteDatabasesMysqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteDatabasesMysqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMysqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
    ) {
      return parseResponse(client.databases.mysql.instances[':instanceId'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasesMysqlInstancesInstanceId<
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
                  ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesMysqlInstancesInstanceIdMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/backups', toValue(args)] as const
}

export function getDatabasesMysqlInstancesInstanceIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMysqlInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mysql.instances[':instanceId'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/backups', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdBackups<
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
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
  const mutationDefaults = getPostDatabasesMysqlInstancesInstanceIdBackupsMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId',
    toValue(args),
  ] as const
}

export function getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups[':backupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMysqlInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mysql.instances[':instanceId'].backups[':backupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationKey() {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups[':backupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupId<
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
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
  const mutationDefaults = getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationOptions<
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

export function getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey() {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups[':backupId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestore<
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
                    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
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
    getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
    >
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/credentials', toValue(args)] as const
}

export function getDatabasesMysqlInstancesInstanceIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMysqlInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
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
                    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
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
                    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mysql.instances[':instanceId'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/credentials/reset', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].credentials.reset.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdCredentialsReset<
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
                    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
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
  const mutationDefaults = getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationOptions<
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

export function getPostDatabasesMysqlInstancesInstanceIdPatchMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/patch', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].patch.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdPatch<
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
                    (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
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
  const mutationDefaults = getPostDatabasesMysqlInstancesInstanceIdPatchMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdSslQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/ssl', toValue(args)] as const
}

export function getDatabasesMysqlInstancesInstanceIdSslQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdSslQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].ssl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesMysqlInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
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
                    (typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']
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
                    (typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesMysqlInstancesInstanceIdSslQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdSslQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesMysqlInstancesInstanceIdSslQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.mysql.instances[':instanceId'].ssl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesPostgresqlInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.postgresql.instances.$get>>,
) {
  return ['databases', '/databases/postgresql/instances', toValue(args)] as const
}

export function getDatabasesPostgresqlInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.postgresql.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesPostgresqlInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.postgresql.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesPostgresqlInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.postgresql.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
              >
            >
          >,
          ReturnType<typeof getDatabasesPostgresqlInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesPostgresqlInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.postgresql.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesPostgresqlInstancesMutationKey() {
  return ['databases', '/databases/postgresql/instances', 'POST'] as const
}

export function getPostDatabasesPostgresqlInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.databases.postgresql.instances.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.databases.postgresql.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.databases.postgresql.instances.$post>) {
      return parseResponse(client.databases.postgresql.instances.$post(args, options))
    },
  })
}

export function usePostDatabasesPostgresqlInstances<
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
                Awaited<ReturnType<typeof client.databases.postgresql.instances.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.databases.postgresql.instances.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesPostgresqlInstancesMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId', toValue(args)] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesPostgresqlInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
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
                  ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.postgresql.instances[':instanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesPostgresqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId', 'PUT'] as const
}

export function getPutDatabasesPostgresqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesPostgresqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.databases.postgresql.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutDatabasesPostgresqlInstancesInstanceId<
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
                  ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesPostgresqlInstancesInstanceIdMutationOptions<
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

export function getDeleteDatabasesPostgresqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesPostgresqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDatabasesPostgresqlInstancesInstanceId<
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['$delete']
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
  const mutationDefaults = getDeleteDatabasesPostgresqlInstancesInstanceIdMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups',
    toValue(args),
  ] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesPostgresqlInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId/backups', 'POST'] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdBackups<
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
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
  const mutationDefaults = getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId',
    toValue(args),
  ] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
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
    getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationOptions<
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

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups[':backupId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestore<
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
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
    getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/credentials',
    toValue(args),
  ] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesPostgresqlInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.postgresql.instances[':instanceId'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].credentials.reset.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdCredentialsReset<
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
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
    getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationOptions<
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

export function getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId/patch', 'POST'] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].patch.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdPatch<
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
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
  const mutationDefaults = getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdSslQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/ssl', toValue(args)] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdSslQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdSslQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].ssl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesPostgresqlInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
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
                    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdSslQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdSslQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesPostgresqlInstancesInstanceIdSslQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.postgresql.instances[':instanceId'].ssl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.types.$get>>,
) {
  return ['databases', '/databases/types', toValue(args)] as const
}

export function getDatabasesTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>
            >
          >,
          ReturnType<typeof getDatabasesTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesTypesTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases.types)[':typeId']['$get']>>,
) {
  return ['databases', '/databases/types/:typeId', toValue(args)] as const
}

export function getDatabasesTypesTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases.types)[':typeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesTypesTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.types[':typeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases.types)[':typeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatabasesTypesTypeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesTypesTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesTypesTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.types[':typeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
) {
  return ['domains', '/domains', toValue(args)] as const
}

export function getDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          ReturnType<typeof getDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDomainsMutationKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function getPostDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.$post>) {
      return parseResponse(client.domains.$post(args, options))
    },
  })
}

export function usePostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDomainsImportMutationKey() {
  return ['domains', '/domains/import', 'POST'] as const
}

export function getPostDomainsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.domains.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.import.$post>) {
      return parseResponse(client.domains.import.$post(args, options))
    },
  })
}

export function usePostDomainsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domains.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.domains.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsImportMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainId']['$get']>>,
) {
  return ['domains', '/domains/:domainId', toValue(args)] as const
}

export function getDomainsDomainIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domainId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domainId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domainId', 'PUT'] as const
}

export function getPutDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domainId']['$put']>) {
      return parseResponse(client.domains[':domainId'].$put(args, options))
    },
  })
}

export function usePutDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domainId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domainId', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domainId']['$delete']>) {
      return parseResponse(client.domains[':domainId'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domainId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsDomainIdCloneMutationKey() {
  return ['domains', '/domains/:domainId/clone', 'POST'] as const
}

export function getPostDomainsDomainIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
    ) {
      return parseResponse(client.domains[':domainId'].clone.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdCloneMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdRecordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>>,
) {
  return ['domains', '/domains/:domainId/records', toValue(args)] as const
}

export function getDomainsDomainIdRecordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domainId'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainIdRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdRecordsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domainId'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDomainsDomainIdRecordsMutationKey() {
  return ['domains', '/domains/:domainId/records', 'POST'] as const
}

export function getPostDomainsDomainIdRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
    ) {
      return parseResponse(client.domains[':domainId'].records.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdRecordsRecordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
  >,
) {
  return ['domains', '/domains/:domainId/records/:recordId', toValue(args)] as const
}

export function getDomainsDomainIdRecordsRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdRecordsRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domainId'].records[':recordId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainIdRecordsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
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
                  ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdRecordsRecordIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdRecordsRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdRecordsRecordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domainId'].records[':recordId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDomainsDomainIdRecordsRecordIdMutationKey() {
  return ['domains', '/domains/:domainId/records/:recordId', 'PUT'] as const
}

export function getPutDomainsDomainIdRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainIdRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
    ) {
      return parseResponse(client.domains[':domainId'].records[':recordId'].$put(args, options))
    },
  })
}

export function usePutDomainsDomainIdRecordsRecordId<
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
                  ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainIdRecordsRecordIdMutationOptions<
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

export function getDeleteDomainsDomainIdRecordsRecordIdMutationKey() {
  return ['domains', '/domains/:domainId/records/:recordId', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':domainId']['records'][':recordId']['$delete']
      >,
    ) {
      return parseResponse(client.domains[':domainId'].records[':recordId'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainIdRecordsRecordId<
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
                    (typeof client.domains)[':domainId']['records'][':recordId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainIdRecordsRecordIdMutationOptions<
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

export function getDomainsDomainIdZoneFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>
  >,
) {
  return ['domains', '/domains/:domainId/zone-file', toValue(args)] as const
}

export function getDomainsDomainIdZoneFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdZoneFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domainId']['zone-file'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainIdZoneFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdZoneFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdZoneFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdZoneFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domainId']['zone-file'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
) {
  return ['images', '/images', toValue(args)] as const
}

export function getImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          ReturnType<typeof getImagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostImagesMutationKey() {
  return ['images', '/images', 'POST'] as const
}

export function getPostImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.$post>) {
      return parseResponse(client.images.$post(args, options))
    },
  })
}

export function usePostImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.images.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostImagesUploadMutationKey() {
  return ['images', '/images/upload', 'POST'] as const
}

export function getPostImagesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.images.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.upload.$post>) {
      return parseResponse(client.images.upload.$post(args, options))
    },
  })
}

export function usePostImagesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.upload.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.images.upload.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImagesUploadMutationOptions<TError, TOnMutateResult>(
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

export function getImagesImageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageId']['$get']>>,
) {
  return ['images', '/images/:imageId', toValue(args)] as const
}

export function getImagesImageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesImageIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutImagesImageIdMutationKey() {
  return ['images', '/images/:imageId', 'PUT'] as const
}

export function getPutImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':imageId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':imageId']['$put']>) {
      return parseResponse(client.images[':imageId'].$put(args, options))
    },
  })
}

export function usePutImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.images)[':imageId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImagesImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteImagesImageIdMutationKey() {
  return ['images', '/images/:imageId', 'DELETE'] as const
}

export function getDeleteImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':imageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':imageId']['$delete']>) {
      return parseResponse(client.images[':imageId'].$delete(args, options))
    },
  })
}

export function useDeleteImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.images)[':imageId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImagesImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.instances.$get>>,
) {
  return ['linode', '/linode/instances', toValue(args)] as const
}

export function getLinodeInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>
            >
          >,
          ReturnType<typeof getLinodeInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesMutationKey() {
  return ['linode', '/linode/instances', 'POST'] as const
}

export function getPostLinodeInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.linode.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.linode.instances.$post>) {
      return parseResponse(client.linode.instances.$post(args, options))
    },
  })
}

export function usePostLinodeInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.linode.instances.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeInstancesLinodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>>,
) {
  return ['linode', '/linode/instances/:linodeId', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].$put(args, options))
    },
  })
}

export function usePutLinodeInstancesLinodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeInstancesLinodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLinodeInstancesLinodeIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].$delete(args, options))
    },
  })
}

export function useDeleteLinodeInstancesLinodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeInstancesLinodeIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/backups', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdBackupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdBackupsMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].backups.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackups<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsMutationOptions<
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

export function getPostLinodeInstancesLinodeIdBackupsCancelMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups/cancel', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].backups.cancel.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackupsCancel<
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
                    (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
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
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsCancelMutationOptions<
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

export function getPostLinodeInstancesLinodeIdBackupsEnableMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups/enable', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
      >,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].backups.enable.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackupsEnable<
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
                    (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
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
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsEnableMutationOptions<
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

export function getLinodeInstancesLinodeIdBackupsBackupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/backups/:backupId', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdBackupsBackupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdBackupsBackupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].backups[':backupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
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
                    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdBackupsBackupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdBackupsBackupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdBackupsBackupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].backups[':backupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups/:backupId/restore', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].backups[':backupId'].restore.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackupsBackupIdRestore<
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
                    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
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
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationOptions<
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

export function getPostLinodeInstancesLinodeIdBootMutationKey() {
  return ['linode', '/linode/instances/:linodeId/boot', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBootMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].boot.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBoot<
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
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBootMutationOptions<
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

export function getPostLinodeInstancesLinodeIdCloneMutationKey() {
  return ['linode', '/linode/instances/:linodeId/clone', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].clone.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdClone<
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
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdCloneMutationOptions<
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

export function getLinodeInstancesLinodeIdConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/configs', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdConfigsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdConfigsMutationKey() {
  return ['linode', '/linode/instances/:linodeId/configs', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].configs.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdConfigs<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdConfigsMutationOptions<
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

export function getLinodeInstancesLinodeIdConfigsConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdConfigsConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdConfigsConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs[':configId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
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
                    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdConfigsConfigIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdConfigsConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdConfigsConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].configs[':configId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdConfigsConfigIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs[':configId'].$put(args, options),
      )
    },
  })
}

export function usePutLinodeInstancesLinodeIdConfigsConfigId<
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
                    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
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
  const mutationDefaults = getPutLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
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

export function getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs[':configId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinodeInstancesLinodeIdConfigsConfigId<
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
                    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
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
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
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

export function getLinodeInstancesLinodeIdDisksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/disks', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdDisksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdDisksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdDisks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdDisksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdDisksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdDisksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].disks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdDisksMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].disks.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisks<
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
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksMutationOptions<
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

export function getLinodeInstancesLinodeIdDisksDiskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdDisksDiskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdDisksDiskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdDisksDiskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdDisksDiskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdDisksDiskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdDisksDiskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].disks[':diskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdDisksDiskIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdDisksDiskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].$put(args, options),
      )
    },
  })
}

export function usePutLinodeInstancesLinodeIdDisksDiskId<
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']
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
  const mutationDefaults = getPutLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
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

export function getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinodeInstancesLinodeIdDisksDiskId<
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
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
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
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

export function getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/clone', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].clone.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdClone<
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
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
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationOptions<
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

export function getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/password', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].password.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdPassword<
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
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
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationOptions<
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

export function getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/resize', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].resize.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdResize<
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
                    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
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
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationOptions<
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

export function getLinodeInstancesLinodeIdFirewallsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/firewalls', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdFirewallsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdFirewallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].firewalls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdFirewallsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdFirewallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].firewalls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdIpsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/ips', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdIpsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdIpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdIpsMutationKey() {
  return ['linode', '/linode/instances/:linodeId/ips', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].ips.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdIpsMutationOptions<
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

export function getLinodeInstancesLinodeIdIpsAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/ips/:address', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdIpsAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdIpsAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].ips[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdIpsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
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
                    (typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdIpsAddressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdIpsAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdIpsAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].ips[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdIpsAddressMutationKey() {
  return ['linode', '/linode/instances/:linodeId/ips/:address', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdIpsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdIpsAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']
      >,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].ips[':address'].$put(args, options))
    },
  })
}

export function usePutLinodeInstancesLinodeIdIpsAddress<
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
                    (typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']
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
  const mutationDefaults = getPutLinodeInstancesLinodeIdIpsAddressMutationOptions<
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

export function getDeleteLinodeInstancesLinodeIdIpsAddressMutationKey() {
  return ['linode', '/linode/instances/:linodeId/ips/:address', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdIpsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdIpsAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].ips[':address'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinodeInstancesLinodeIdIpsAddress<
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
                    (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
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
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdIpsAddressMutationOptions<
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

export function getPostLinodeInstancesLinodeIdMigrateMutationKey() {
  return ['linode', '/linode/instances/:linodeId/migrate', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].migrate.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdMigrate<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdMigrateMutationOptions<
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

export function getPostLinodeInstancesLinodeIdMutateMutationKey() {
  return ['linode', '/linode/instances/:linodeId/mutate', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdMutateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdMutateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].mutate.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdMutate<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdMutateMutationOptions<
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

export function getLinodeInstancesLinodeIdNodebalancersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/nodebalancers', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdNodebalancersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdNodebalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].nodebalancers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdNodebalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdNodebalancersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdNodebalancersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdNodebalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].nodebalancers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdPasswordMutationKey() {
  return ['linode', '/linode/instances/:linodeId/password', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].password.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdPassword<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['password']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdPasswordMutationOptions<
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

export function getPostLinodeInstancesLinodeIdRebootMutationKey() {
  return ['linode', '/linode/instances/:linodeId/reboot', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdRebootMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].reboot.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdReboot<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdRebootMutationOptions<
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

export function getPostLinodeInstancesLinodeIdRebuildMutationKey() {
  return ['linode', '/linode/instances/:linodeId/rebuild', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdRebuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdRebuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].rebuild.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdRebuild<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdRebuildMutationOptions<
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

export function getPostLinodeInstancesLinodeIdRescueMutationKey() {
  return ['linode', '/linode/instances/:linodeId/rescue', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdRescueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdRescueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].rescue.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdRescue<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdRescueMutationOptions<
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

export function getPostLinodeInstancesLinodeIdResizeMutationKey() {
  return ['linode', '/linode/instances/:linodeId/resize', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].resize.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdResize<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdResizeMutationOptions<
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

export function getPostLinodeInstancesLinodeIdShutdownMutationKey() {
  return ['linode', '/linode/instances/:linodeId/shutdown', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdShutdownMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].shutdown.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdShutdown<
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdShutdownMutationOptions<
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

export function getLinodeInstancesLinodeIdStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/stats', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdStatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdStatsYearMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
    >
  >,
) {
  return ['linode', '/linode/instances/:linodeId/stats/:year/:month', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdStatsYearMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdStatsYearMonthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].stats[':year'][':month'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdStatsYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdStatsYearMonthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdStatsYearMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdStatsYearMonthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].stats[':year'][':month'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdTransferQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/transfer', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdTransferQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdTransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].transfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdTransferQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdTransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].transfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdTransferYearMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
    >
  >,
) {
  return ['linode', '/linode/instances/:linodeId/transfer/:year/:month', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdTransferYearMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdTransferYearMonthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].transfer[':year'][':month'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdTransferYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
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
                    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdTransferYearMonthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdTransferYearMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdTransferYearMonthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].transfer[':year'][':month'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdVolumesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>
  >,
) {
  return ['linode', '/linode/instances/:linodeId/volumes', toValue(args)] as const
}

export function getLinodeInstancesLinodeIdVolumesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeInstancesLinodeIdVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.instances[':linodeId'].volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeInstancesLinodeIdVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>
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
                  ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLinodeInstancesLinodeIdVolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeInstancesLinodeIdVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.instances[':linodeId'].volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeKernelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.kernels.$get>>,
) {
  return ['linode', '/linode/kernels', toValue(args)] as const
}

export function getLinodeKernelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.kernels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeKernelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.kernels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeKernels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.kernels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
          >,
          ReturnType<typeof getLinodeKernelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeKernelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeKernelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.kernels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeKernelsKernelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>>,
) {
  return ['linode', '/linode/kernels/:kernelId', toValue(args)] as const
}

export function getLinodeKernelsKernelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeKernelsKernelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.kernels[':kernelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeKernelsKernelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeKernelsKernelIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeKernelsKernelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeKernelsKernelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.kernels[':kernelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeStackscriptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.stackscripts.$get>>,
) {
  return ['linode', '/linode/stackscripts', toValue(args)] as const
}

export function getLinodeStackscriptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.stackscripts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeStackscriptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.stackscripts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeStackscripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linode.stackscripts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
            >
          >,
          ReturnType<typeof getLinodeStackscriptsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeStackscriptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeStackscriptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.stackscripts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLinodeStackscriptsMutationKey() {
  return ['linode', '/linode/stackscripts', 'POST'] as const
}

export function getPostLinodeStackscriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.linode.stackscripts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeStackscriptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.linode.stackscripts.$post>) {
      return parseResponse(client.linode.stackscripts.$post(args, options))
    },
  })
}

export function usePostLinodeStackscripts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.linode.stackscripts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeStackscriptsMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeStackscriptsStackscriptIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>
  >,
) {
  return ['linode', '/linode/stackscripts/:stackscriptId', toValue(args)] as const
}

export function getLinodeStackscriptsStackscriptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeStackscriptsStackscriptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.stackscripts[':stackscriptId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeStackscriptsStackscriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeStackscriptsStackscriptIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeStackscriptsStackscriptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeStackscriptsStackscriptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.stackscripts[':stackscriptId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLinodeStackscriptsStackscriptIdMutationKey() {
  return ['linode', '/linode/stackscripts/:stackscriptId', 'PUT'] as const
}

export function getPutLinodeStackscriptsStackscriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeStackscriptsStackscriptIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
    ) {
      return parseResponse(client.linode.stackscripts[':stackscriptId'].$put(args, options))
    },
  })
}

export function usePutLinodeStackscriptsStackscriptId<
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
                Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeStackscriptsStackscriptIdMutationOptions<
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

export function getDeleteLinodeStackscriptsStackscriptIdMutationKey() {
  return ['linode', '/linode/stackscripts/:stackscriptId', 'DELETE'] as const
}

export function getDeleteLinodeStackscriptsStackscriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeStackscriptsStackscriptIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
    ) {
      return parseResponse(client.linode.stackscripts[':stackscriptId'].$delete(args, options))
    },
  })
}

export function useDeleteLinodeStackscriptsStackscriptId<
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
                  ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeStackscriptsStackscriptIdMutationOptions<
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

export function getLinodeTypesQueryKey() {
  return ['linode', '/linode/types'] as const
}

export function getLinodeTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLinodeTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLinodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
          >,
          ReturnType<typeof getLinodeTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinodeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLinodeTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinodeTypesTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.types)[':typeId']['$get']>>,
) {
  return ['linode', '/linode/types/:typeId', toValue(args)] as const
}

export function getLinodeTypesTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.types)[':typeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinodeTypesTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linode.types[':typeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinodeTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.linode.types)[':typeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinodeTypesTypeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeTypesTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinodeTypesTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linode.types[':typeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLkeClustersQueryKey() {
  return ['lke', '/lke/clusters'] as const
}

export function getLkeClustersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLkeClustersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLkeClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
          >,
          ReturnType<typeof getLkeClustersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLkeClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLkeClustersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLkeClustersMutationKey() {
  return ['lke', '/lke/clusters', 'POST'] as const
}

export function getPostLkeClustersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lke.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lke.clusters.$post>) {
      return parseResponse(client.lke.clusters.$post(args, options))
    },
  })
}

export function usePostLkeClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.lke.clusters.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLkeClustersClusterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>>,
) {
  return ['lke', '/lke/clusters/:clusterId', toValue(args)] as const
}

export function getLkeClustersClusterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLkeClustersClusterIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId', 'PUT'] as const
}

export function getPutLkeClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLkeClustersClusterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>) {
      return parseResponse(client.lke.clusters[':clusterId'].$put(args, options))
    },
  })
}

export function usePutLkeClustersClusterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLkeClustersClusterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLkeClustersClusterIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].$delete(args, options))
    },
  })
}

export function useDeleteLkeClustersClusterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdMutationOptions<TError, TOnMutateResult>(
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

export function getLkeClustersClusterIdApiEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
  >,
) {
  return ['lke', '/lke/clusters/:clusterId/api-endpoints', toValue(args)] as const
}

export function getLkeClustersClusterIdApiEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdApiEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId']['api-endpoints'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterIdApiEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdApiEndpointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdApiEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdApiEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId']['api-endpoints'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLkeClustersClusterIdDashboardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>
  >,
) {
  return ['lke', '/lke/clusters/:clusterId/dashboard', toValue(args)] as const
}

export function getLkeClustersClusterIdDashboardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdDashboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId'].dashboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdDashboardQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdDashboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdDashboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId'].dashboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLkeClustersClusterIdKubeconfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>
  >,
) {
  return ['lke', '/lke/clusters/:clusterId/kubeconfig', toValue(args)] as const
}

export function getLkeClustersClusterIdKubeconfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdKubeconfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId'].kubeconfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterIdKubeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdKubeconfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdKubeconfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdKubeconfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId'].kubeconfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLkeClustersClusterIdKubeconfigMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/kubeconfig', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdKubeconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdKubeconfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$delete(args, options))
    },
  })
}

export function useDeleteLkeClustersClusterIdKubeconfig<
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdKubeconfigMutationOptions<
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

export function getLkeClustersClusterIdNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
  >,
) {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId', toValue(args)] as const
}

export function getLkeClustersClusterIdNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdNodesNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId'].nodes[':nodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdNodesNodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdNodesNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId'].nodes[':nodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLkeClustersClusterIdNodesNodeIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].nodes[':nodeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLkeClustersClusterIdNodesNodeId<
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
                    (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']
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
  const mutationDefaults = getDeleteLkeClustersClusterIdNodesNodeIdMutationOptions<
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

export function getPostLkeClustersClusterIdNodesNodeIdRecycleMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId/recycle', 'POST'] as const
}

export function getPostLkeClustersClusterIdNodesNodeIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdNodesNodeIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].nodes[':nodeId'].recycle.$post(args, options),
      )
    },
  })
}

export function usePostLkeClustersClusterIdNodesNodeIdRecycle<
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
                    (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
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
  const mutationDefaults = getPostLkeClustersClusterIdNodesNodeIdRecycleMutationOptions<
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

export function getLkeClustersClusterIdPoolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>
  >,
) {
  return ['lke', '/lke/clusters/:clusterId/pools', toValue(args)] as const
}

export function getLkeClustersClusterIdPoolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdPoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterIdPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdPoolsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdPoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId'].pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLkeClustersClusterIdPoolsMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools', 'POST'] as const
}

export function getPostLkeClustersClusterIdPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].pools.$post(args, options))
    },
  })
}

export function usePostLkeClustersClusterIdPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdPoolsMutationOptions<TError, TOnMutateResult>(
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

export function getLkeClustersClusterIdPoolsPoolIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
  >,
) {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', toValue(args)] as const
}

export function getLkeClustersClusterIdPoolsPoolIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeClustersClusterIdPoolsPoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools[':poolId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeClustersClusterIdPoolsPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLkeClustersClusterIdPoolsPoolIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdPoolsPoolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeClustersClusterIdPoolsPoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.clusters[':clusterId'].pools[':poolId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLkeClustersClusterIdPoolsPoolIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', 'PUT'] as const
}

export function getPutLkeClustersClusterIdPoolsPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLkeClustersClusterIdPoolsPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']
      >,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$put(args, options))
    },
  })
}

export function usePutLkeClustersClusterIdPoolsPoolId<
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLkeClustersClusterIdPoolsPoolIdMutationOptions<
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

export function getDeleteLkeClustersClusterIdPoolsPoolIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdPoolsPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdPoolsPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools[':poolId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLkeClustersClusterIdPoolsPoolId<
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
                    (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']
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
  const mutationDefaults = getDeleteLkeClustersClusterIdPoolsPoolIdMutationOptions<
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

export function getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId/recycle', 'POST'] as const
}

export function getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools[':poolId'].recycle.$post(args, options),
      )
    },
  })
}

export function usePostLkeClustersClusterIdPoolsPoolIdRecycle<
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
                    (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
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
  const mutationDefaults = getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationOptions<
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

export function getPostLkeClustersClusterIdRecycleMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/recycle', 'POST'] as const
}

export function getPostLkeClustersClusterIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].recycle.$post(args, options))
    },
  })
}

export function usePostLkeClustersClusterIdRecycle<
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
                Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdRecycleMutationOptions<
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

export function getPostLkeClustersClusterIdRegenerateMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/regenerate', 'POST'] as const
}

export function getPostLkeClustersClusterIdRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdRegenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].regenerate.$post(args, options))
    },
  })
}

export function usePostLkeClustersClusterIdRegenerate<
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdRegenerateMutationOptions<
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

export function getDeleteLkeClustersClusterIdServicetokenMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/servicetoken', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdServicetokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdServicetokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].servicetoken.$delete(args, options))
    },
  })
}

export function useDeleteLkeClustersClusterIdServicetoken<
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
                  ReturnType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdServicetokenMutationOptions<
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

export function getLkeVersionsQueryKey() {
  return ['lke', '/lke/versions'] as const
}

export function getLkeVersionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLkeVersionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.versions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLkeVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
          >,
          ReturnType<typeof getLkeVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLkeVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLkeVersionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.versions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLkeVersionsVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lke.versions)[':version']['$get']>>,
) {
  return ['lke', '/lke/versions/:version', toValue(args)] as const
}

export function getLkeVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lke.versions)[':version']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLkeVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lke.versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLkeVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lke.versions)[':version']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLkeVersionsVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLkeVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lke.versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLongviewClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.longview.clients.$get>>,
) {
  return ['longview', '/longview/clients', toValue(args)] as const
}

export function getLongviewClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.longview.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLongviewClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.longview.clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLongviewClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.longview.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>
            >
          >,
          ReturnType<typeof getLongviewClientsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLongviewClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.longview.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLongviewClientsMutationKey() {
  return ['longview', '/longview/clients', 'POST'] as const
}

export function getPostLongviewClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.longview.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLongviewClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.longview.clients.$post>) {
      return parseResponse(client.longview.clients.$post(args, options))
    },
  })
}

export function usePostLongviewClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.longview.clients.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLongviewClientsMutationOptions<TError, TOnMutateResult>(
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

export function getLongviewClientsClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>>,
) {
  return ['longview', '/longview/clients/:clientId', toValue(args)] as const
}

export function getLongviewClientsClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLongviewClientsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.longview.clients[':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLongviewClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLongviewClientsClientIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewClientsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLongviewClientsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.longview.clients[':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLongviewClientsClientIdMutationKey() {
  return ['longview', '/longview/clients/:clientId', 'PUT'] as const
}

export function getPutLongviewClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLongviewClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
    ) {
      return parseResponse(client.longview.clients[':clientId'].$put(args, options))
    },
  })
}

export function usePutLongviewClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLongviewClientsClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLongviewClientsClientIdMutationKey() {
  return ['longview', '/longview/clients/:clientId', 'DELETE'] as const
}

export function getDeleteLongviewClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLongviewClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
    ) {
      return parseResponse(client.longview.clients[':clientId'].$delete(args, options))
    },
  })
}

export function useDeleteLongviewClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLongviewClientsClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getLongviewPlanQueryKey() {
  return ['longview', '/longview/plan'] as const
}

export function getLongviewPlanQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLongviewPlanQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.longview.plan.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLongviewPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
          >,
          ReturnType<typeof getLongviewPlanQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLongviewPlanQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.longview.plan.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLongviewPlanMutationKey() {
  return ['longview', '/longview/plan', 'PUT'] as const
}

export function getPutLongviewPlanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.longview.plan.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLongviewPlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.longview.plan.$put>) {
      return parseResponse(client.longview.plan.$put(args, options))
    },
  })
}

export function usePutLongviewPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.longview.plan.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLongviewPlanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLongviewSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.longview.subscriptions.$get>>,
) {
  return ['longview', '/longview/subscriptions', toValue(args)] as const
}

export function getLongviewSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.longview.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLongviewSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.longview.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLongviewSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.longview.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getLongviewSubscriptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLongviewSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.longview.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLongviewSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  return ['longview', '/longview/subscriptions/:subscriptionId', toValue(args)] as const
}

export function getLongviewSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLongviewSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.longview.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLongviewSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>
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
                  ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLongviewSubscriptionsSubscriptionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLongviewSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.longview.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.contacts.$get>>,
) {
  return ['managed', '/managed/contacts', toValue(args)] as const
}

export function getManagedContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>
            >
          >,
          ReturnType<typeof getManagedContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagedContactsMutationKey() {
  return ['managed', '/managed/contacts', 'POST'] as const
}

export function getPostManagedContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed.contacts.$post>) {
      return parseResponse(client.managed.contacts.$post(args, options))
    },
  })
}

export function usePostManagedContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.managed.contacts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedContactsMutationOptions<TError, TOnMutateResult>(
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

export function getManagedContactsContactIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>>,
) {
  return ['managed', '/managed/contacts/:contactId', toValue(args)] as const
}

export function getManagedContactsContactIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedContactsContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.contacts[':contactId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedContactsContactIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedContactsContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedContactsContactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.contacts[':contactId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagedContactsContactIdMutationKey() {
  return ['managed', '/managed/contacts/:contactId', 'PUT'] as const
}

export function getPutManagedContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
    ) {
      return parseResponse(client.managed.contacts[':contactId'].$put(args, options))
    },
  })
}

export function usePutManagedContactsContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedContactsContactIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteManagedContactsContactIdMutationKey() {
  return ['managed', '/managed/contacts/:contactId', 'DELETE'] as const
}

export function getDeleteManagedContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteManagedContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
    ) {
      return parseResponse(client.managed.contacts[':contactId'].$delete(args, options))
    },
  })
}

export function useDeleteManagedContactsContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteManagedContactsContactIdMutationOptions<
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

export function getManagedCredentialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.credentials.$get>>,
) {
  return ['managed', '/managed/credentials', toValue(args)] as const
}

export function getManagedCredentialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.credentials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.credentials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
            >
          >,
          ReturnType<typeof getManagedCredentialsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagedCredentialsMutationKey() {
  return ['managed', '/managed/credentials', 'POST'] as const
}

export function getPostManagedCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed.credentials.$post>) {
      return parseResponse(client.managed.credentials.$post(args, options))
    },
  })
}

export function usePostManagedCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.managed.credentials.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getManagedCredentialsSshkeyQueryKey() {
  return ['managed', '/managed/credentials/sshkey'] as const
}

export function getManagedCredentialsSshkeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getManagedCredentialsSshkeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.credentials.sshkey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedCredentialsSshkey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
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
                Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>
              >
            >
          >,
          ReturnType<typeof getManagedCredentialsSshkeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedCredentialsSshkeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getManagedCredentialsSshkeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.credentials.sshkey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedCredentialsCredentialIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>
  >,
) {
  return ['managed', '/managed/credentials/:credentialId', toValue(args)] as const
}

export function getManagedCredentialsCredentialIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedCredentialsCredentialIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.credentials[':credentialId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedCredentialsCredentialIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedCredentialsCredentialIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedCredentialsCredentialIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.credentials[':credentialId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagedCredentialsCredentialIdMutationKey() {
  return ['managed', '/managed/credentials/:credentialId', 'PUT'] as const
}

export function getPutManagedCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
    ) {
      return parseResponse(client.managed.credentials[':credentialId'].$put(args, options))
    },
  })
}

export function usePutManagedCredentialsCredentialId<
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
                Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedCredentialsCredentialIdMutationOptions<
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

export function getPostManagedCredentialsCredentialIdRevokeMutationKey() {
  return ['managed', '/managed/credentials/:credentialId/revoke', 'POST'] as const
}

export function getPostManagedCredentialsCredentialIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedCredentialsCredentialIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.managed.credentials)[':credentialId']['revoke']['$post']
      >,
    ) {
      return parseResponse(client.managed.credentials[':credentialId'].revoke.$post(args, options))
    },
  })
}

export function usePostManagedCredentialsCredentialIdRevoke<
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
                    (typeof client.managed.credentials)[':credentialId']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedCredentialsCredentialIdRevokeMutationOptions<
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

export function getPostManagedCredentialsCredentialIdUpdateMutationKey() {
  return ['managed', '/managed/credentials/:credentialId/update', 'POST'] as const
}

export function getPostManagedCredentialsCredentialIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedCredentialsCredentialIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.managed.credentials)[':credentialId']['update']['$post']
      >,
    ) {
      return parseResponse(client.managed.credentials[':credentialId'].update.$post(args, options))
    },
  })
}

export function usePostManagedCredentialsCredentialIdUpdate<
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
                    (typeof client.managed.credentials)[':credentialId']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedCredentialsCredentialIdUpdateMutationOptions<
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

export function getManagedIssuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.issues.$get>>,
) {
  return ['managed', '/managed/issues', toValue(args)] as const
}

export function getManagedIssuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.issues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedIssuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.issues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.managed.issues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
          >,
          ReturnType<typeof getManagedIssuesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedIssuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.issues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedIssuesIssueIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>>,
) {
  return ['managed', '/managed/issues/:issueId', toValue(args)] as const
}

export function getManagedIssuesIssueIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedIssuesIssueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.issues[':issueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedIssuesIssueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedIssuesIssueIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedIssuesIssueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedIssuesIssueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.issues[':issueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedLinodeSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed)['linode-settings']['$get']>>,
) {
  return ['managed', '/managed/linode-settings', toValue(args)] as const
}

export function getManagedLinodeSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed)['linode-settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedLinodeSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed['linode-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedLinodeSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed)['linode-settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedLinodeSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedLinodeSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedLinodeSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed['linode-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedLinodeSettingsLinodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>
  >,
) {
  return ['managed', '/managed/linode-settings/:linodeId', toValue(args)] as const
}

export function getManagedLinodeSettingsLinodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedLinodeSettingsLinodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed['linode-settings'][':linodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedLinodeSettingsLinodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedLinodeSettingsLinodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedLinodeSettingsLinodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedLinodeSettingsLinodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed['linode-settings'][':linodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagedLinodeSettingsLinodeIdMutationKey() {
  return ['managed', '/managed/linode-settings/:linodeId', 'PUT'] as const
}

export function getPutManagedLinodeSettingsLinodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedLinodeSettingsLinodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
    ) {
      return parseResponse(client.managed['linode-settings'][':linodeId'].$put(args, options))
    },
  })
}

export function usePutManagedLinodeSettingsLinodeId<
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
                Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedLinodeSettingsLinodeIdMutationOptions<
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

export function getManagedServicesQueryKey() {
  return ['managed', '/managed/services'] as const
}

export function getManagedServicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getManagedServicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagedServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>
            >
          >,
          ReturnType<typeof getManagedServicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getManagedServicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.services.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagedServicesMutationKey() {
  return ['managed', '/managed/services', 'POST'] as const
}

export function getPostManagedServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed.services.$post>) {
      return parseResponse(client.managed.services.$post(args, options))
    },
  })
}

export function usePostManagedServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.managed.services.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedServicesMutationOptions<TError, TOnMutateResult>(
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

export function getManagedServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>>,
) {
  return ['managed', '/managed/services/:serviceId', toValue(args)] as const
}

export function getManagedServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedServicesServiceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagedServicesServiceIdMutationKey() {
  return ['managed', '/managed/services/:serviceId', 'PUT'] as const
}

export function getPutManagedServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].$put(args, options))
    },
  })
}

export function usePutManagedServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteManagedServicesServiceIdMutationKey() {
  return ['managed', '/managed/services/:serviceId', 'DELETE'] as const
}

export function getDeleteManagedServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteManagedServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].$delete(args, options))
    },
  })
}

export function useDeleteManagedServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteManagedServicesServiceIdMutationOptions<
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

export function getPostManagedServicesServiceIdDisableMutationKey() {
  return ['managed', '/managed/services/:serviceId/disable', 'POST'] as const
}

export function getPostManagedServicesServiceIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedServicesServiceIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].disable.$post(args, options))
    },
  })
}

export function usePostManagedServicesServiceIdDisable<
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
                  ReturnType<(typeof client.managed.services)[':serviceId']['disable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedServicesServiceIdDisableMutationOptions<
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

export function getPostManagedServicesServiceIdEnableMutationKey() {
  return ['managed', '/managed/services/:serviceId/enable', 'POST'] as const
}

export function getPostManagedServicesServiceIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedServicesServiceIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].enable.$post(args, options))
    },
  })
}

export function usePostManagedServicesServiceIdEnable<
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
                  ReturnType<(typeof client.managed.services)[':serviceId']['enable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedServicesServiceIdEnableMutationOptions<
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

export function getManagedStatsQueryKey() {
  return ['managed', '/managed/stats'] as const
}

export function getManagedStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getManagedStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.managed.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagedStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
          >,
          ReturnType<typeof getManagedStatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getManagedStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.managed.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkingFirewallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.firewalls.$get>>,
) {
  return ['networking', '/networking/firewalls', toValue(args)] as const
}

export function getNetworkingFirewallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.firewalls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingFirewallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.firewalls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.firewalls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
            >
          >,
          ReturnType<typeof getNetworkingFirewallsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingFirewallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.firewalls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkingFirewallsMutationKey() {
  return ['networking', '/networking/firewalls', 'POST'] as const
}

export function getPostNetworkingFirewallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.firewalls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingFirewallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.firewalls.$post>) {
      return parseResponse(client.networking.firewalls.$post(args, options))
    },
  })
}

export function usePostNetworkingFirewalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.firewalls.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingFirewallsMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingFirewallsFirewallIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>
  >,
) {
  return ['networking', '/networking/firewalls/:firewallId', toValue(args)] as const
}

export function getNetworkingFirewallsFirewallIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingFirewallsFirewallIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingFirewallsFirewallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkingFirewallsFirewallIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingFirewallsFirewallIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.firewalls[':firewallId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworkingFirewallsFirewallIdMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId', 'PUT'] as const
}

export function getPutNetworkingFirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkingFirewallsFirewallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].$put(args, options))
    },
  })
}

export function usePutNetworkingFirewallsFirewallId<
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
                Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkingFirewallsFirewallIdMutationOptions<
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

export function getDeleteNetworkingFirewallsFirewallIdMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId', 'DELETE'] as const
}

export function getDeleteNetworkingFirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkingFirewallsFirewallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkingFirewallsFirewallId<
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
                Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkingFirewallsFirewallIdMutationOptions<
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

export function getNetworkingFirewallsFirewallIdDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
  >,
) {
  return ['networking', '/networking/firewalls/:firewallId/devices', toValue(args)] as const
}

export function getNetworkingFirewallsFirewallIdDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingFirewallsFirewallIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingFirewallsFirewallIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
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
                  ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingFirewallsFirewallIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.firewalls[':firewallId'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkingFirewallsFirewallIdDevicesMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId/devices', 'POST'] as const
}

export function getPostNetworkingFirewallsFirewallIdDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingFirewallsFirewallIdDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networking.firewalls)[':firewallId']['devices']['$post']
      >,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].devices.$post(args, options))
    },
  })
}

export function usePostNetworkingFirewallsFirewallIdDevices<
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
                    (typeof client.networking.firewalls)[':firewallId']['devices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingFirewallsFirewallIdDevicesMutationOptions<
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

export function getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
    >
  >,
) {
  return [
    'networking',
    '/networking/firewalls/:firewallId/devices/:deviceId',
    toValue(args),
  ] as const
}

export function getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].devices[':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingFirewallsFirewallIdDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
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
                    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
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
                    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.firewalls[':firewallId'].devices[':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId/devices/:deviceId', 'DELETE'] as const
}

export function getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].devices[':deviceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworkingFirewallsFirewallIdDevicesDeviceId<
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
                    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
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
  const mutationDefaults = getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationOptions<
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

export function getNetworkingFirewallsFirewallIdRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
  >,
) {
  return ['networking', '/networking/firewalls/:firewallId/rules', toValue(args)] as const
}

export function getNetworkingFirewallsFirewallIdRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingFirewallsFirewallIdRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingFirewallsFirewallIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
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
                  ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworkingFirewallsFirewallIdRulesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingFirewallsFirewallIdRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.firewalls[':firewallId'].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworkingFirewallsFirewallIdRulesMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId/rules', 'PUT'] as const
}

export function getPutNetworkingFirewallsFirewallIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkingFirewallsFirewallIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].rules.$put(args, options))
    },
  })
}

export function usePutNetworkingFirewallsFirewallIdRules<
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
                  ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkingFirewallsFirewallIdRulesMutationOptions<
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

export function getNetworkingIpsQueryKey() {
  return ['networking', '/networking/ips'] as const
}

export function getNetworkingIpsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNetworkingIpsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.ips.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworkingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
          >,
          ReturnType<typeof getNetworkingIpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNetworkingIpsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.ips.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkingIpsMutationKey() {
  return ['networking', '/networking/ips', 'POST'] as const
}

export function getPostNetworkingIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.networking.ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ips.$post>) {
      return parseResponse(client.networking.ips.$post(args, options))
    },
  })
}

export function usePostNetworkingIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.ips.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpsMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpsAssignMutationKey() {
  return ['networking', '/networking/ips/assign', 'POST'] as const
}

export function getPostNetworkingIpsAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.assign.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ips.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpsAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ips.assign.$post>) {
      return parseResponse(client.networking.ips.assign.$post(args, options))
    },
  })
}

export function usePostNetworkingIpsAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.assign.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.ips.assign.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpsAssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpsShareMutationKey() {
  return ['networking', '/networking/ips/share', 'POST'] as const
}

export function getPostNetworkingIpsShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.share.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ips.share.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpsShareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ips.share.$post>) {
      return parseResponse(client.networking.ips.share.$post(args, options))
    },
  })
}

export function usePostNetworkingIpsShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.share.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.ips.share.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpsShareMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingIpsAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networking.ips)[':address']['$get']>>,
) {
  return ['networking', '/networking/ips/:address', toValue(args)] as const
}

export function getNetworkingIpsAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networking.ips)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingIpsAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.ips[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingIpsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networking.ips)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkingIpsAddressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpsAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingIpsAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.ips[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworkingIpsAddressMutationKey() {
  return ['networking', '/networking/ips/:address', 'PUT'] as const
}

export function getPutNetworkingIpsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ips)[':address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.ips)[':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkingIpsAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.networking.ips)[':address']['$put']>) {
      return parseResponse(client.networking.ips[':address'].$put(args, options))
    },
  })
}

export function usePutNetworkingIpsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.ips)[':address']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networking.ips)[':address']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkingIpsAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpv4AssignMutationKey() {
  return ['networking', '/networking/ipv4/assign', 'POST'] as const
}

export function getPostNetworkingIpv4AssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.assign.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ipv4.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpv4AssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ipv4.assign.$post>) {
      return parseResponse(client.networking.ipv4.assign.$post(args, options))
    },
  })
}

export function usePostNetworkingIpv4Assign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.assign.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.ipv4.assign.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpv4AssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpv4ShareMutationKey() {
  return ['networking', '/networking/ipv4/share', 'POST'] as const
}

export function getPostNetworkingIpv4ShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.share.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ipv4.share.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpv4ShareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ipv4.share.$post>) {
      return parseResponse(client.networking.ipv4.share.$post(args, options))
    },
  })
}

export function usePostNetworkingIpv4Share<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.share.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.ipv4.share.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpv4ShareMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingIpv6PoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.ipv6.pools.$get>>,
) {
  return ['networking', '/networking/ipv6/pools', toValue(args)] as const
}

export function getNetworkingIpv6PoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.ipv6.pools.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingIpv6PoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.ipv6.pools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingIpv6Pools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.ipv6.pools.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
            >
          >,
          ReturnType<typeof getNetworkingIpv6PoolsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpv6PoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingIpv6PoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.ipv6.pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkingIpv6RangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.ipv6.ranges.$get>>,
) {
  return ['networking', '/networking/ipv6/ranges', toValue(args)] as const
}

export function getNetworkingIpv6RangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.ipv6.ranges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingIpv6RangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.ipv6.ranges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingIpv6Ranges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.ipv6.ranges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
            >
          >,
          ReturnType<typeof getNetworkingIpv6RangesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpv6RangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingIpv6RangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.ipv6.ranges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkingIpv6RangesMutationKey() {
  return ['networking', '/networking/ipv6/ranges', 'POST'] as const
}

export function getPostNetworkingIpv6RangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ipv6.ranges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpv6RangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ipv6.ranges.$post>) {
      return parseResponse(client.networking.ipv6.ranges.$post(args, options))
    },
  })
}

export function usePostNetworkingIpv6Ranges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.networking.ipv6.ranges.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpv6RangesMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingIpv6RangesRangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>
  >,
) {
  return ['networking', '/networking/ipv6/ranges/:range', toValue(args)] as const
}

export function getNetworkingIpv6RangesRangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingIpv6RangesRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.ipv6.ranges[':range'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingIpv6RangesRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkingIpv6RangesRangeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpv6RangesRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingIpv6RangesRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.ipv6.ranges[':range'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworkingIpv6RangesRangeMutationKey() {
  return ['networking', '/networking/ipv6/ranges/:range', 'DELETE'] as const
}

export function getDeleteNetworkingIpv6RangesRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkingIpv6RangesRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
    ) {
      return parseResponse(client.networking.ipv6.ranges[':range'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkingIpv6RangesRange<
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
                Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkingIpv6RangesRangeMutationOptions<
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

export function getNetworkingVlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.vlans.$get>>,
) {
  return ['networking', '/networking/vlans', toValue(args)] as const
}

export function getNetworkingVlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.vlans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkingVlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networking.vlans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkingVlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networking.vlans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>
            >
          >,
          ReturnType<typeof getNetworkingVlansQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingVlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkingVlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networking.vlans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodebalancersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodebalancers.$get>>,
) {
  return ['nodebalancers', '/nodebalancers', toValue(args)] as const
}

export function getNodebalancersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodebalancers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodebalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodebalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodebalancers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
          >,
          ReturnType<typeof getNodebalancersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodebalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNodebalancersMutationKey() {
  return ['nodebalancers', '/nodebalancers', 'POST'] as const
}

export function getPostNodebalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nodebalancers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nodebalancers.$post>) {
      return parseResponse(client.nodebalancers.$post(args, options))
    },
  })
}

export function usePostNodebalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.nodebalancers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodebalancersMutationOptions<TError, TOnMutateResult>(
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

export function getNodebalancersNodeBalancerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', toValue(args)] as const
}

export function getNodebalancersNodeBalancerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodebalancersNodeBalancerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodebalancersNodeBalancerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodebalancersNodeBalancerIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodebalancersNodeBalancerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers[':nodeBalancerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNodebalancersNodeBalancerIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', 'PUT'] as const
}

export function getPutNodebalancersNodeBalancerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNodebalancersNodeBalancerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
    ) {
      return parseResponse(client.nodebalancers[':nodeBalancerId'].$put(args, options))
    },
  })
}

export function usePutNodebalancersNodeBalancerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNodebalancersNodeBalancerIdMutationOptions<
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

export function getDeleteNodebalancersNodeBalancerIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', 'DELETE'] as const
}

export function getDeleteNodebalancersNodeBalancerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodebalancersNodeBalancerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
    ) {
      return parseResponse(client.nodebalancers[':nodeBalancerId'].$delete(args, options))
    },
  })
}

export function useDeleteNodebalancersNodeBalancerId<
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
                Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodebalancersNodeBalancerIdMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs', toValue(args)] as const
}

export function getNodebalancersNodeBalancerIdConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodebalancersNodeBalancerIdConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodebalancersNodeBalancerIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
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
                  ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodebalancersNodeBalancerIdConfigsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodebalancersNodeBalancerIdConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNodebalancersNodeBalancerIdConfigsMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs', 'POST'] as const
}

export function getPostNodebalancersNodeBalancerIdConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersNodeBalancerIdConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
    ) {
      return parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$post(args, options))
    },
  })
}

export function usePostNodebalancersNodeBalancerIdConfigs<
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
                  ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodebalancersNodeBalancerIdConfigsMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
    >
  >,
) {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId',
    toValue(args),
  ] as const
}

export function getNodebalancersNodeBalancerIdConfigsConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodebalancersNodeBalancerIdConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', 'PUT'] as const
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].$put(args, options),
      )
    },
  })
}

export function usePutNodebalancersNodeBalancerIdConfigsConfigId<
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
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
  const mutationDefaults = getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
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

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', 'DELETE'] as const
}

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNodebalancersNodeBalancerIdConfigsConfigId<
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
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
  const mutationDefaults = getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
    >
  >,
) {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes',
    toValue(args),
  ] as const
}

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodebalancersNodeBalancerIdConfigsConfigIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes',
    'POST',
  ] as const
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$post(args, options),
      )
    },
  })
}

export function usePostNodebalancersNodeBalancerIdConfigsConfigIdNodes<
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
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
  const mutationDefaults = getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
    >
  >,
) {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    toValue(args),
  ] as const
}

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'PUT',
  ] as const
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
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
    getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
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

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'DELETE',
  ] as const
}

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
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
    getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
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

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/rebuild',
    'POST',
  ] as const
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].rebuild.$post(args, options),
      )
    },
  })
}

export function usePostNodebalancersNodeBalancerIdConfigsConfigIdRebuild<
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
                    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
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
  const mutationDefaults = getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationOptions<
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

export function getNodebalancersNodeBalancerIdStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/stats', toValue(args)] as const
}

export function getNodebalancersNodeBalancerIdStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodebalancersNodeBalancerIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodebalancersNodeBalancerIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>
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
                  ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodebalancersNodeBalancerIdStatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodebalancersNodeBalancerIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodebalancers[':nodeBalancerId'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObjectStorageBucketsQueryKey() {
  return ['object-storage', '/object-storage/buckets'] as const
}

export function getObjectStorageBucketsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getObjectStorageBucketsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].buckets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
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
                Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectStorageBucketsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getObjectStorageBucketsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].buckets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectStorageBucketsMutationKey() {
  return ['object-storage', '/object-storage/buckets', 'POST'] as const
}

export function getPostObjectStorageBucketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
    ) {
      return parseResponse(client['object-storage'].buckets.$post(args, options))
    },
  })
}

export function usePostObjectStorageBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageBucketsMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageBucketsClusterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId', toValue(args)] as const
}

export function getObjectStorageBucketsClusterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageBucketsClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageBucketsClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
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
                  ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getObjectStorageBucketsClusterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageBucketsClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].buckets[':clusterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObjectStorageBucketsClusterIdBucketQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket', toValue(args)] as const
}

export function getObjectStorageBucketsClusterIdBucketQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageBucketsClusterIdBucketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageBucketsClusterIdBucket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getObjectStorageBucketsClusterIdBucketQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageBucketsClusterIdBucketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteObjectStorageBucketsClusterIdBucketMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket', 'DELETE'] as const
}

export function getDeleteObjectStorageBucketsClusterIdBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectStorageBucketsClusterIdBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].$delete(args, options),
      )
    },
  })
}

export function useDeleteObjectStorageBucketsClusterIdBucket<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
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
  const mutationDefaults = getDeleteObjectStorageBucketsClusterIdBucketMutationOptions<
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

export function getPutObjectStorageBucketsClusterIdBucketAccessMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/access', 'PUT'] as const
}

export function getPutObjectStorageBucketsClusterIdBucketAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutObjectStorageBucketsClusterIdBucketAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].access.$put(args, options),
      )
    },
  })
}

export function usePutObjectStorageBucketsClusterIdBucketAccess<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
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
  const mutationDefaults = getPutObjectStorageBucketsClusterIdBucketAccessMutationOptions<
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

export function getPostObjectStorageBucketsClusterIdBucketAccessMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/access', 'POST'] as const
}

export function getPostObjectStorageBucketsClusterIdBucketAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsClusterIdBucketAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].access.$post(args, options),
      )
    },
  })
}

export function usePostObjectStorageBucketsClusterIdBucketAccess<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
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
  const mutationDefaults = getPostObjectStorageBucketsClusterIdBucketAccessMutationOptions<
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

export function getObjectStorageBucketsClusterIdBucketObjectAclQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
    >
  >,
) {
  return [
    'object-storage',
    '/object-storage/buckets/:clusterId/:bucket/object-acl',
    toValue(args),
  ] as const
}

export function getObjectStorageBucketsClusterIdBucketObjectAclQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageBucketsClusterIdBucketObjectAclQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useObjectStorageBucketsClusterIdBucketObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectAclQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectAclQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageBucketsClusterIdBucketObjectAclQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutObjectStorageBucketsClusterIdBucketObjectAclMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-acl', 'PUT'] as const
}

export function getPutObjectStorageBucketsClusterIdBucketObjectAclMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutObjectStorageBucketsClusterIdBucketObjectAclMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$put(args, options),
      )
    },
  })
}

export function usePutObjectStorageBucketsClusterIdBucketObjectAcl<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
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
  const mutationDefaults = getPutObjectStorageBucketsClusterIdBucketObjectAclMutationOptions<
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

export function getObjectStorageBucketsClusterIdBucketObjectListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
    >
  >,
) {
  return [
    'object-storage',
    '/object-storage/buckets/:clusterId/:bucket/object-list',
    toValue(args),
  ] as const
}

export function getObjectStorageBucketsClusterIdBucketObjectListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageBucketsClusterIdBucketObjectListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-list'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useObjectStorageBucketsClusterIdBucketObjectList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageBucketsClusterIdBucketObjectListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket']['object-list'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationKey() {
  return [
    'object-storage',
    '/object-storage/buckets/:clusterId/:bucket/object-url',
    'POST',
  ] as const
}

export function getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-url'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostObjectStorageBucketsClusterIdBucketObjectUrl<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
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
  const mutationDefaults = getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationOptions<
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

export function getObjectStorageBucketsClusterIdBucketSslQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
    >
  >,
) {
  return [
    'object-storage',
    '/object-storage/buckets/:clusterId/:bucket/ssl',
    toValue(args),
  ] as const
}

export function getObjectStorageBucketsClusterIdBucketSslQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageBucketsClusterIdBucketSslQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageBucketsClusterIdBucketSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getObjectStorageBucketsClusterIdBucketSslQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketSslQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageBucketsClusterIdBucketSslQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectStorageBucketsClusterIdBucketSslMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', 'POST'] as const
}

export function getPostObjectStorageBucketsClusterIdBucketSslMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsClusterIdBucketSslMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$post(args, options),
      )
    },
  })
}

export function usePostObjectStorageBucketsClusterIdBucketSsl<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
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
  const mutationDefaults = getPostObjectStorageBucketsClusterIdBucketSslMutationOptions<
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

export function getDeleteObjectStorageBucketsClusterIdBucketSslMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', 'DELETE'] as const
}

export function getDeleteObjectStorageBucketsClusterIdBucketSslMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectStorageBucketsClusterIdBucketSslMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$delete(args, options),
      )
    },
  })
}

export function useDeleteObjectStorageBucketsClusterIdBucketSsl<
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
                    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
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
  const mutationDefaults = getDeleteObjectStorageBucketsClusterIdBucketSslMutationOptions<
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

export function getPostObjectStorageCancelMutationKey() {
  return ['object-storage', '/object-storage/cancel', 'POST'] as const
}

export function getPostObjectStorageCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['cancel']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageCancelMutationKey(),
    async mutationFn() {
      return parseResponse(client['object-storage'].cancel.$post(undefined, options))
    },
  })
}

export function usePostObjectStorageCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['cancel']['$post']>>
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
  const mutationDefaults = getPostObjectStorageCancelMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageClustersQueryKey() {
  return ['object-storage', '/object-storage/clusters'] as const
}

export function getObjectStorageClustersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getObjectStorageClustersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].clusters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
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
                Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectStorageClustersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getObjectStorageClustersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].clusters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObjectStorageClustersClusterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
  >,
) {
  return ['object-storage', '/object-storage/clusters/:clusterId', toValue(args)] as const
}

export function getObjectStorageClustersClusterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageClustersClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].clusters[':clusterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
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
                  ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getObjectStorageClustersClusterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageClustersClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageClustersClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].clusters[':clusterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObjectStorageKeysQueryKey() {
  return ['object-storage', '/object-storage/keys'] as const
}

export function getObjectStorageKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getObjectStorageKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectStorageKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getObjectStorageKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectStorageKeysMutationKey() {
  return ['object-storage', '/object-storage/keys', 'POST'] as const
}

export function getPostObjectStorageKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['object-storage']['keys']['$post']>) {
      return parseResponse(client['object-storage'].keys.$post(args, options))
    },
  })
}

export function usePostObjectStorageKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['object-storage']['keys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageKeysMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>
  >,
) {
  return ['object-storage', '/object-storage/keys/:keyId', toValue(args)] as const
}

export function getObjectStorageKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStorageKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].keys[':keyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectStorageKeysKeyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStorageKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].keys[':keyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutObjectStorageKeysKeyIdMutationKey() {
  return ['object-storage', '/object-storage/keys/:keyId', 'PUT'] as const
}

export function getPutObjectStorageKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutObjectStorageKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
    ) {
      return parseResponse(client['object-storage'].keys[':keyId'].$put(args, options))
    },
  })
}

export function usePutObjectStorageKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutObjectStorageKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteObjectStorageKeysKeyIdMutationKey() {
  return ['object-storage', '/object-storage/keys/:keyId', 'DELETE'] as const
}

export function getDeleteObjectStorageKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectStorageKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
    ) {
      return parseResponse(client['object-storage'].keys[':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteObjectStorageKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteObjectStorageKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageTransferQueryKey() {
  return ['object-storage', '/object-storage/transfer'] as const
}

export function getObjectStorageTransferQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getObjectStorageTransferQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage'].transfer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStorageTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
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
                Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectStorageTransferQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageTransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getObjectStorageTransferQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage'].transfer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileQueryKey() {
  return ['profile', '/profile'] as const
}

export function getProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          ReturnType<typeof getProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProfileMutationKey() {
  return ['profile', '/profile', 'PUT'] as const
}

export function getPutProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$put>>>>>,
    TError,
    InferRequestType<typeof client.profile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.$put>) {
      return parseResponse(client.profile.$put(args, options))
    },
  })
}

export function usePutProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.profile.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProfileAppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.apps.$get>>,
) {
  return ['profile', '/profile/apps', toValue(args)] as const
}

export function getProfileAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfileApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
          >,
          ReturnType<typeof getProfileAppsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileAppsAppIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.apps)[':appId']['$get']>>,
) {
  return ['profile', '/profile/apps/:appId', toValue(args)] as const
}

export function getProfileAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.apps)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.apps[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.apps)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfileAppsAppIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.apps[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProfileAppsAppIdMutationKey() {
  return ['profile', '/profile/apps/:appId', 'DELETE'] as const
}

export function getDeleteProfileAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>) {
      return parseResponse(client.profile.apps[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileAppsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getProfileDevicesQueryKey() {
  return ['profile', '/profile/devices'] as const
}

export function getProfileDevicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileDevicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.devices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfileDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>
            >
          >,
          ReturnType<typeof getProfileDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileDevicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.devices.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileDevicesDeviceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>>,
) {
  return ['profile', '/profile/devices/:deviceId', toValue(args)] as const
}

export function getProfileDevicesDeviceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileDevicesDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.devices[':deviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfileDevicesDeviceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileDevicesDeviceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileDevicesDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.devices[':deviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProfileDevicesDeviceIdMutationKey() {
  return ['profile', '/profile/devices/:deviceId', 'DELETE'] as const
}

export function getDeleteProfileDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
    ) {
      return parseResponse(client.profile.devices[':deviceId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function getProfileGrantsQueryKey() {
  return ['profile', '/profile/grants'] as const
}

export function getProfileGrantsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileGrantsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.grants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfileGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
          >,
          ReturnType<typeof getProfileGrantsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileGrantsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.grants.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileLoginsQueryKey() {
  return ['profile', '/profile/logins'] as const
}

export function getProfileLoginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileLoginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.logins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfileLogins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
          >,
          ReturnType<typeof getProfileLoginsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileLoginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileLoginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.logins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileLoginsLoginIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>>,
) {
  return ['profile', '/profile/logins/:loginId', toValue(args)] as const
}

export function getProfileLoginsLoginIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileLoginsLoginIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.logins[':loginId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileLoginsLoginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfileLoginsLoginIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileLoginsLoginIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileLoginsLoginIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.logins[':loginId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProfilePhoneNumberMutationKey() {
  return ['profile', '/profile/phone-number', 'POST'] as const
}

export function getPostProfilePhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['phone-number']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['phone-number']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfilePhoneNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile)['phone-number']['$post']>) {
      return parseResponse(client.profile['phone-number'].$post(args, options))
    },
  })
}

export function usePostProfilePhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['phone-number']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile)['phone-number']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfilePhoneNumberMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProfilePhoneNumberMutationKey() {
  return ['profile', '/profile/phone-number', 'DELETE'] as const
}

export function getDeleteProfilePhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['phone-number']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfilePhoneNumberMutationKey(),
    async mutationFn() {
      return parseResponse(client.profile['phone-number'].$delete(undefined, options))
    },
  })
}

export function useDeleteProfilePhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['phone-number']['$delete']>>
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
  const mutationDefaults = getDeleteProfilePhoneNumberMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfilePhoneNumberVerifyMutationKey() {
  return ['profile', '/profile/phone-number/verify', 'POST'] as const
}

export function getPostProfilePhoneNumberVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['phone-number']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfilePhoneNumberVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
    ) {
      return parseResponse(client.profile['phone-number'].verify.$post(args, options))
    },
  })
}

export function usePostProfilePhoneNumberVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['phone-number']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfilePhoneNumberVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getProfilePreferencesQueryKey() {
  return ['profile', '/profile/preferences'] as const
}

export function getProfilePreferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfilePreferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfilePreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>
            >
          >,
          ReturnType<typeof getProfilePreferencesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfilePreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfilePreferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.preferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProfilePreferencesMutationKey() {
  return ['profile', '/profile/preferences', 'PUT'] as const
}

export function getPutProfilePreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.profile.preferences.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutProfilePreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.preferences.$put>) {
      return parseResponse(client.profile.preferences.$put(args, options))
    },
  })
}

export function usePutProfilePreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.profile.preferences.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfilePreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getProfileSecurityQuestionsQueryKey() {
  return ['profile', '/profile/security-questions'] as const
}

export function getProfileSecurityQuestionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileSecurityQuestionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile['security-questions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileSecurityQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
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
                Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfileSecurityQuestionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileSecurityQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileSecurityQuestionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile['security-questions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProfileSecurityQuestionsMutationKey() {
  return ['profile', '/profile/security-questions', 'POST'] as const
}

export function getPostProfileSecurityQuestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['security-questions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileSecurityQuestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile)['security-questions']['$post']>,
    ) {
      return parseResponse(client.profile['security-questions'].$post(args, options))
    },
  })
}

export function usePostProfileSecurityQuestions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['security-questions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile)['security-questions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileSecurityQuestionsMutationOptions<TError, TOnMutateResult>(
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

export function getProfileSshkeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.sshkeys.$get>>,
) {
  return ['profile', '/profile/sshkeys', toValue(args)] as const
}

export function getProfileSshkeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.sshkeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileSshkeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.sshkeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileSshkeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.sshkeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>
            >
          >,
          ReturnType<typeof getProfileSshkeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileSshkeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileSshkeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.sshkeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProfileSshkeysMutationKey() {
  return ['profile', '/profile/sshkeys', 'POST'] as const
}

export function getPostProfileSshkeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.profile.sshkeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileSshkeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.sshkeys.$post>) {
      return parseResponse(client.profile.sshkeys.$post(args, options))
    },
  })
}

export function usePostProfileSshkeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.profile.sshkeys.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileSshkeysMutationOptions<TError, TOnMutateResult>(
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

export function getProfileSshkeysSshKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>,
) {
  return ['profile', '/profile/sshkeys/:sshKeyId', toValue(args)] as const
}

export function getProfileSshkeysSshKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileSshkeysSshKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.sshkeys[':sshKeyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileSshkeysSshKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfileSshkeysSshKeyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileSshkeysSshKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileSshkeysSshKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.sshkeys[':sshKeyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProfileSshkeysSshKeyIdMutationKey() {
  return ['profile', '/profile/sshkeys/:sshKeyId', 'PUT'] as const
}

export function getPutProfileSshkeysSshKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileSshkeysSshKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>) {
      return parseResponse(client.profile.sshkeys[':sshKeyId'].$put(args, options))
    },
  })
}

export function usePutProfileSshkeysSshKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfileSshkeysSshKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProfileSshkeysSshKeyIdMutationKey() {
  return ['profile', '/profile/sshkeys/:sshKeyId', 'DELETE'] as const
}

export function getDeleteProfileSshkeysSshKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileSshkeysSshKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
    ) {
      return parseResponse(client.profile.sshkeys[':sshKeyId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileSshkeysSshKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileSshkeysSshKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfileTfaDisableMutationKey() {
  return ['profile', '/profile/tfa-disable', 'POST'] as const
}

export function getPostProfileTfaDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['tfa-disable']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTfaDisableMutationKey(),
    async mutationFn() {
      return parseResponse(client.profile['tfa-disable'].$post(undefined, options))
    },
  })
}

export function usePostProfileTfaDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['tfa-disable']['$post']>>
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
  const mutationDefaults = getPostProfileTfaDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfileTfaEnableMutationKey() {
  return ['profile', '/profile/tfa-enable', 'POST'] as const
}

export function getPostProfileTfaEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['tfa-enable']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTfaEnableMutationKey(),
    async mutationFn() {
      return parseResponse(client.profile['tfa-enable'].$post(undefined, options))
    },
  })
}

export function usePostProfileTfaEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['tfa-enable']['$post']>>
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
  const mutationDefaults = getPostProfileTfaEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfileTfaEnableConfirmMutationKey() {
  return ['profile', '/profile/tfa-enable-confirm', 'POST'] as const
}

export function getPostProfileTfaEnableConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['tfa-enable-confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTfaEnableConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
    ) {
      return parseResponse(client.profile['tfa-enable-confirm'].$post(args, options))
    },
  })
}

export function usePostProfileTfaEnableConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile)['tfa-enable-confirm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileTfaEnableConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getProfileTokensQueryKey() {
  return ['profile', '/profile/tokens'] as const
}

export function getProfileTokensQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileTokensQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfileTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
          >,
          ReturnType<typeof getProfileTokensQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileTokensQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.tokens.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProfileTokensMutationKey() {
  return ['profile', '/profile/tokens', 'POST'] as const
}

export function getPostProfileTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.profile.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.tokens.$post>) {
      return parseResponse(client.profile.tokens.$post(args, options))
    },
  })
}

export function usePostProfileTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.profile.tokens.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileTokensMutationOptions<TError, TOnMutateResult>(
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

export function getProfileTokensTokenIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>>,
) {
  return ['profile', '/profile/tokens/:tokenId', toValue(args)] as const
}

export function getProfileTokensTokenIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileTokensTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.tokens[':tokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfileTokensTokenIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileTokensTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileTokensTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.tokens[':tokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProfileTokensTokenIdMutationKey() {
  return ['profile', '/profile/tokens/:tokenId', 'PUT'] as const
}

export function getPutProfileTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileTokensTokenIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>) {
      return parseResponse(client.profile.tokens[':tokenId'].$put(args, options))
    },
  })
}

export function usePutProfileTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfileTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProfileTokensTokenIdMutationKey() {
  return ['profile', '/profile/tokens/:tokenId', 'DELETE'] as const
}

export function getDeleteProfileTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
    ) {
      return parseResponse(client.profile.tokens[':tokenId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          ReturnType<typeof getRegionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionsRegionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':regionId']['$get']>>,
) {
  return ['regions', '/regions/:regionId', toValue(args)] as const
}

export function getRegionsRegionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':regionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionsRegionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions[':regionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':regionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegionsRegionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegionsRegionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionsRegionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regions[':regionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupportTicketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.support.tickets.$get>>,
) {
  return ['support', '/support/tickets', toValue(args)] as const
}

export function getSupportTicketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.support.tickets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSupportTicketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.support.tickets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportTickets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.support.tickets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>
            >
          >,
          ReturnType<typeof getSupportTicketsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSupportTicketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSupportTicketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.support.tickets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSupportTicketsMutationKey() {
  return ['support', '/support/tickets', 'POST'] as const
}

export function getPostSupportTicketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.support.tickets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.support.tickets.$post>) {
      return parseResponse(client.support.tickets.$post(args, options))
    },
  })
}

export function usePostSupportTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.support.tickets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsMutationOptions<TError, TOnMutateResult>(
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

export function getSupportTicketsTicketIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>>,
) {
  return ['support', '/support/tickets/:ticketId', toValue(args)] as const
}

export function getSupportTicketsTicketIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSupportTicketsTicketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.support.tickets[':ticketId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSupportTicketsTicketIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportTicketsTicketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSupportTicketsTicketIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.support.tickets[':ticketId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSupportTicketsTicketIdAttachmentsMutationKey() {
  return ['support', '/support/tickets/:ticketId/attachments', 'POST'] as const
}

export function getPostSupportTicketsTicketIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsTicketIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
    ) {
      return parseResponse(client.support.tickets[':ticketId'].attachments.$post(args, options))
    },
  })
}

export function usePostSupportTicketsTicketIdAttachments<
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
                  ReturnType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsTicketIdAttachmentsMutationOptions<
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

export function getPostSupportTicketsTicketIdCloseMutationKey() {
  return ['support', '/support/tickets/:ticketId/close', 'POST'] as const
}

export function getPostSupportTicketsTicketIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsTicketIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
    ) {
      return parseResponse(client.support.tickets[':ticketId'].close.$post(args, options))
    },
  })
}

export function usePostSupportTicketsTicketIdClose<
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
                Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsTicketIdCloseMutationOptions<
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

export function getSupportTicketsTicketIdRepliesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>
  >,
) {
  return ['support', '/support/tickets/:ticketId/replies', toValue(args)] as const
}

export function getSupportTicketsTicketIdRepliesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSupportTicketsTicketIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.support.tickets[':ticketId'].replies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportTicketsTicketIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSupportTicketsTicketIdRepliesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportTicketsTicketIdRepliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSupportTicketsTicketIdRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.support.tickets[':ticketId'].replies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSupportTicketsTicketIdRepliesMutationKey() {
  return ['support', '/support/tickets/:ticketId/replies', 'POST'] as const
}

export function getPostSupportTicketsTicketIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsTicketIdRepliesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
    ) {
      return parseResponse(client.support.tickets[':ticketId'].replies.$post(args, options))
    },
  })
}

export function usePostSupportTicketsTicketIdReplies<
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
                  ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsTicketIdRepliesMutationOptions<
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

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsLabelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':label']['$get']>>,
) {
  return ['tags', '/tags/:label', toValue(args)] as const
}

export function getTagsLabelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':label']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':label'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':label']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsLabelQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':label'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTagsLabelMutationKey() {
  return ['tags', '/tags/:label', 'DELETE'] as const
}

export function getDeleteTagsLabelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':label']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsLabelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':label']['$delete']>) {
      return parseResponse(client.tags[':label'].$delete(args, options))
    },
  })
}

export function useDeleteTagsLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':label']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsLabelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
) {
  return ['volumes', '/volumes', toValue(args)] as const
}

export function getVolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          ReturnType<typeof getVolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.volumes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesVolumeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':volumeId']['$get']>>,
) {
  return ['volumes', '/volumes/:volumeId', toValue(args)] as const
}

export function getVolumesVolumeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':volumeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesVolumeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes[':volumeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':volumeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVolumesVolumeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesVolumeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesVolumeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes[':volumeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVolumesVolumeIdMutationKey() {
  return ['volumes', '/volumes/:volumeId', 'PUT'] as const
}

export function getPutVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':volumeId']['$put']>) {
      return parseResponse(client.volumes[':volumeId'].$put(args, options))
    },
  })
}

export function usePutVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVolumesVolumeIdMutationKey() {
  return ['volumes', '/volumes/:volumeId', 'DELETE'] as const
}

export function getDeleteVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>) {
      return parseResponse(client.volumes[':volumeId'].$delete(args, options))
    },
  })
}

export function useDeleteVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdAttachMutationKey() {
  return ['volumes', '/volumes/:volumeId/attach', 'POST'] as const
}

export function getPostVolumesVolumeIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].attach.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['attach']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdCloneMutationKey() {
  return ['volumes', '/volumes/:volumeId/clone', 'POST'] as const
}

export function getPostVolumesVolumeIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].clone.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdCloneMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdDetachMutationKey() {
  return ['volumes', '/volumes/:volumeId/detach', 'POST'] as const
}

export function getPostVolumesVolumeIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['detach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].detach.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['detach']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdResizeMutationKey() {
  return ['volumes', '/volumes/:volumeId/resize', 'POST'] as const
}

export function getPostVolumesVolumeIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['resize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].resize.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['resize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdResizeMutationOptions<TError, TOnMutateResult>(
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
