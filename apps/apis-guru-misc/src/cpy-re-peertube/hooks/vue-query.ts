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

export function getApiKey() {
  return ['api'] as const
}

export function getFeedsKey() {
  return ['feeds'] as const
}

export function getStaticKey() {
  return ['static'] as const
}

export function getApiV1AbusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abuses.$get>>,
) {
  return ['api', '/api/v1/abuses', toValue(args)] as const
}

export function getApiV1AbusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Abuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
          >,
          ReturnType<typeof getApiV1AbusesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AbusesMutationKey() {
  return ['api', '/api/v1/abuses', 'POST'] as const
}

export function getPostApiV1AbusesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.abuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.abuses.$post>) {
      return parseResponse(client.api.v1.abuses.$post(args, options))
    },
  })
}

export function usePostApiV1Abuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abuses.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.abuses.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AbusesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiV1AbusesAbuseIdMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId', 'PUT'] as const
}

export function getPutApiV1AbusesAbuseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AbusesAbuseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>) {
      return parseResponse(client.api.v1.abuses[':abuseId'].$put(args, options))
    },
  })
}

export function usePutApiV1AbusesAbuseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AbusesAbuseIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1AbusesAbuseIdMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId', 'DELETE'] as const
}

export function getDeleteApiV1AbusesAbuseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbusesAbuseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>) {
      return parseResponse(client.api.v1.abuses[':abuseId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1AbusesAbuseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AbusesAbuseIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AbusesAbuseIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>
  >,
) {
  return ['api', '/api/v1/abuses/:abuseId/messages', toValue(args)] as const
}

export function getApiV1AbusesAbuseIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbusesAbuseIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abuses[':abuseId'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbusesAbuseIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AbusesAbuseIdMessagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbusesAbuseIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbusesAbuseIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abuses[':abuseId'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AbusesAbuseIdMessagesMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId/messages', 'POST'] as const
}

export function getPostApiV1AbusesAbuseIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbusesAbuseIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
    ) {
      return parseResponse(client.api.v1.abuses[':abuseId'].messages.$post(args, options))
    },
  })
}

export function usePostApiV1AbusesAbuseIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abuses)[':abuseId']['messages']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AbusesAbuseIdMessagesMutationOptions<
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

export function getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationKey() {
  return ['api', '/api/v1/abuses/:abuseId/messages/:abuseMessageId', 'DELETE'] as const
}

export function getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.abuses[':abuseId'].messages[':abuseMessageId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AbusesAbuseIdMessagesAbuseMessageId<
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
                      (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.abuses)[':abuseId']['messages'][':abuseMessageId']['$delete']
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
  const mutationDefaults = getDeleteApiV1AbusesAbuseIdMessagesAbuseMessageIdMutationOptions<
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

export function getApiV1AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.$get>>,
) {
  return ['api', '/api/v1/accounts', toValue(args)] as const
}

export function getApiV1AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>>,
) {
  return ['api', '/api/v1/accounts/:name', toValue(args)] as const
}

export function getApiV1AccountsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:name/followers', toValue(args)] as const
}

export function getApiV1AccountsNameFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsNameFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameFollowersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameRatingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:name/ratings', toValue(args)] as const
}

export function getApiV1AccountsNameRatingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsNameRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameRatingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameVideoChannelSyncsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:name/video-channel-syncs', toValue(args)] as const
}

export function getApiV1AccountsNameVideoChannelSyncsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameVideoChannelSyncsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name']['video-channel-syncs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsNameVideoChannelSyncs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>
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
                    (typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']
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
                    (typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameVideoChannelSyncsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':name']['video-channel-syncs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideoChannelSyncsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameVideoChannelSyncsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name']['video-channel-syncs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameVideoChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:name/video-channels', toValue(args)] as const
}

export function getApiV1AccountsNameVideoChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameVideoChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name']['video-channels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsNameVideoChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>
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
                  ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameVideoChannelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideoChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameVideoChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name']['video-channels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameVideoPlaylistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:name/video-playlists', toValue(args)] as const
}

export function getApiV1AccountsNameVideoPlaylistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameVideoPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name']['video-playlists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsNameVideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>
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
                  ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameVideoPlaylistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['video-playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideoPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameVideoPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name']['video-playlists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsNameVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:name/videos', toValue(args)] as const
}

export function getApiV1AccountsNameVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsNameVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':name'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsNameVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsNameVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':name']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsNameVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsNameVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':name'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BlocklistStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocklist.status.$get>>,
) {
  return ['api', '/api/v1/blocklist/status', toValue(args)] as const
}

export function getApiV1BlocklistStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocklist.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BlocklistStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.blocklist.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BlocklistStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocklist.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BlocklistStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocklist.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlocklistStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BlocklistStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.blocklist.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigQueryKey() {
  return ['api', '/api/v1/config'] as const
}

export function getApiV1ConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
          >,
          ReturnType<typeof getApiV1ConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigAboutQueryKey() {
  return ['api', '/api/v1/config/about'] as const
}

export function getApiV1ConfigAboutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigAboutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.about.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigAboutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.about.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigAboutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.about.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigCustomQueryKey() {
  return ['api', '/api/v1/config/custom'] as const
}

export function getApiV1ConfigCustomQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigCustomQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.custom.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigCustom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigCustomQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigCustomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigCustomQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.custom.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ConfigCustomMutationKey() {
  return ['api', '/api/v1/config/custom', 'PUT'] as const
}

export function getPutApiV1ConfigCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigCustomMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.config.custom.$put(undefined, options))
    },
  })
}

export function usePutApiV1ConfigCustom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$put>>>
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
  const mutationDefaults = getPutApiV1ConfigCustomMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ConfigCustomMutationKey() {
  return ['api', '/api/v1/config/custom', 'DELETE'] as const
}

export function getDeleteApiV1ConfigCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ConfigCustomMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.config.custom.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1ConfigCustom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.custom.$delete>>>
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
  const mutationDefaults = getDeleteApiV1ConfigCustomMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1CustomPagesHomepageInstanceQueryKey() {
  return ['api', '/api/v1/custom-pages/homepage/instance'] as const
}

export function getApiV1CustomPagesHomepageInstanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CustomPagesHomepageInstanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['custom-pages'].homepage.instance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomPagesHomepageInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>>
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
                  ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>
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
                  ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CustomPagesHomepageInstanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomPagesHomepageInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CustomPagesHomepageInstanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['custom-pages'].homepage.instance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1CustomPagesHomepageInstanceMutationKey() {
  return ['api', '/api/v1/custom-pages/homepage/instance', 'PUT'] as const
}

export function getPutApiV1CustomPagesHomepageInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomPagesHomepageInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']
      >,
    ) {
      return parseResponse(client.api.v1['custom-pages'].homepage.instance.$put(args, options))
    },
  })
}

export function usePutApiV1CustomPagesHomepageInstance<
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
                      (typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-pages']['homepage']['instance']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1CustomPagesHomepageInstanceMutationOptions<
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

export function getPostApiV1JobsPauseMutationKey() {
  return ['api', '/api/v1/jobs/pause', 'POST'] as const
}

export function getPostApiV1JobsPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.pause.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1JobsPauseMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.jobs.pause.$post(undefined, options))
    },
  })
}

export function usePostApiV1JobsPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.pause.$post>>>
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
  const mutationDefaults = getPostApiV1JobsPauseMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1JobsResumeMutationKey() {
  return ['api', '/api/v1/jobs/resume', 'POST'] as const
}

export function getPostApiV1JobsResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.resume.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1JobsResumeMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.jobs.resume.$post(undefined, options))
    },
  })
}

export function usePostApiV1JobsResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.jobs.resume.$post>>>
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
  const mutationDefaults = getPostApiV1JobsResumeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1JobsStateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>>,
) {
  return ['api', '/api/v1/jobs/:state', toValue(args)] as const
}

export function getApiV1JobsStateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1JobsStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.jobs[':state'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1JobsState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.jobs)[':state']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1JobsStateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.jobs)[':state']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1JobsStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1JobsStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.jobs[':state'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1MetricsPlaybackMutationKey() {
  return ['api', '/api/v1/metrics/playback', 'POST'] as const
}

export function getPostApiV1MetricsPlaybackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metrics.playback.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.metrics.playback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetricsPlaybackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.metrics.playback.$post>) {
      return parseResponse(client.api.v1.metrics.playback.$post(args, options))
    },
  })
}

export function usePostApiV1MetricsPlayback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.metrics.playback.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.metrics.playback.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1MetricsPlaybackMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1OauthClientsLocalQueryKey() {
  return ['api', '/api/v1/oauth-clients/local'] as const
}

export function getApiV1OauthClientsLocalQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1OauthClientsLocalQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['oauth-clients'].local.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OauthClientsLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
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
                Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OauthClientsLocalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['oauth-clients']['local']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OauthClientsLocalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1OauthClientsLocalQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['oauth-clients'].local.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plugins.$get>>,
) {
  return ['api', '/api/v1/plugins', toValue(args)] as const
}

export function getApiV1PluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plugins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Plugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plugins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
          >,
          ReturnType<typeof getApiV1PluginsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PluginsAvailableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plugins.available.$get>>,
) {
  return ['api', '/api/v1/plugins/available', toValue(args)] as const
}

export function getApiV1PluginsAvailableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plugins.available.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PluginsAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plugins.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PluginsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plugins.available.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PluginsAvailableQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.available.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PluginsAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plugins.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PluginsInstallMutationKey() {
  return ['api', '/api/v1/plugins/install', 'POST'] as const
}

export function getPostApiV1PluginsInstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.install.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.plugins.install.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PluginsInstallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plugins.install.$post>) {
      return parseResponse(client.api.v1.plugins.install.$post(args, options))
    },
  })
}

export function usePostApiV1PluginsInstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.plugins.install.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.plugins.install.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PluginsInstallMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1PluginsUninstallMutationKey() {
  return ['api', '/api/v1/plugins/uninstall', 'POST'] as const
}

export function getPostApiV1PluginsUninstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.uninstall.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.plugins.uninstall.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PluginsUninstallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plugins.uninstall.$post>) {
      return parseResponse(client.api.v1.plugins.uninstall.$post(args, options))
    },
  })
}

export function usePostApiV1PluginsUninstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.plugins.uninstall.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.plugins.uninstall.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PluginsUninstallMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1PluginsUpdateMutationKey() {
  return ['api', '/api/v1/plugins/update', 'POST'] as const
}

export function getPostApiV1PluginsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.plugins.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PluginsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plugins.update.$post>) {
      return parseResponse(client.api.v1.plugins.update.$post(args, options))
    },
  })
}

export function usePostApiV1PluginsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plugins.update.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.plugins.update.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PluginsUpdateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1PluginsNpmNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>>,
) {
  return ['api', '/api/v1/plugins/:npmName', toValue(args)] as const
}

export function getApiV1PluginsNpmNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PluginsNpmNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plugins[':npmName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PluginsNpmName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.plugins)[':npmName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PluginsNpmNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsNpmNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PluginsNpmNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plugins[':npmName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PluginsNpmNamePublicSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>
  >,
) {
  return ['api', '/api/v1/plugins/:npmName/public-settings', toValue(args)] as const
}

export function getApiV1PluginsNpmNamePublicSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PluginsNpmNamePublicSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plugins[':npmName']['public-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PluginsNpmNamePublicSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>
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
                  ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PluginsNpmNamePublicSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['public-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsNpmNamePublicSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PluginsNpmNamePublicSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plugins[':npmName']['public-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PluginsNpmNameRegisteredSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
  >,
) {
  return ['api', '/api/v1/plugins/:npmName/registered-settings', toValue(args)] as const
}

export function getApiV1PluginsNpmNameRegisteredSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PluginsNpmNameRegisteredSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plugins[':npmName']['registered-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PluginsNpmNameRegisteredSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
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
                    (typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']
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
                    (typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PluginsNpmNameRegisteredSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.plugins)[':npmName']['registered-settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PluginsNpmNameRegisteredSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PluginsNpmNameRegisteredSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plugins[':npmName']['registered-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PluginsNpmNameSettingsMutationKey() {
  return ['api', '/api/v1/plugins/:npmName/settings', 'PUT'] as const
}

export function getPutApiV1PluginsNpmNameSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PluginsNpmNameSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
    ) {
      return parseResponse(client.api.v1.plugins[':npmName'].settings.$put(args, options))
    },
  })
}

export function usePutApiV1PluginsNpmNameSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.plugins)[':npmName']['settings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1PluginsNpmNameSettingsMutationOptions<
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

export function getApiV1SearchVideoChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>>,
) {
  return ['api', '/api/v1/search/video-channels', toValue(args)] as const
}

export function getApiV1SearchVideoChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SearchVideoChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search['video-channels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SearchVideoChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.search)['video-channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SearchVideoChannelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.search)['video-channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchVideoChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SearchVideoChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search['video-channels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SearchVideoPlaylistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>
  >,
) {
  return ['api', '/api/v1/search/video-playlists', toValue(args)] as const
}

export function getApiV1SearchVideoPlaylistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SearchVideoPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search['video-playlists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SearchVideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.search)['video-playlists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SearchVideoPlaylistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.search)['video-playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchVideoPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SearchVideoPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search['video-playlists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SearchVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.videos.$get>>,
) {
  return ['api', '/api/v1/search/videos', toValue(args)] as const
}

export function getApiV1SearchVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SearchVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SearchVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SearchVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SearchVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ServerAuditLogsQueryKey() {
  return ['api', '/api/v1/server/audit-logs'] as const
}

export function getApiV1ServerAuditLogsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ServerAuditLogsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server['audit-logs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ServerAuditLogsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.server)['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ServerAuditLogsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server['audit-logs'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ServerBlocklistAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>>,
) {
  return ['api', '/api/v1/server/blocklist/accounts', toValue(args)] as const
}

export function getApiV1ServerBlocklistAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServerBlocklistAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.blocklist.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerBlocklistAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.blocklist.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ServerBlocklistAccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerBlocklistAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServerBlocklistAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.blocklist.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ServerBlocklistAccountsMutationKey() {
  return ['api', '/api/v1/server/blocklist/accounts', 'POST'] as const
}

export function getPostApiV1ServerBlocklistAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerBlocklistAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>) {
      return parseResponse(client.api.v1.server.blocklist.accounts.$post(args, options))
    },
  })
}

export function usePostApiV1ServerBlocklistAccounts<
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
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.accounts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.server.blocklist.accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ServerBlocklistAccountsMutationOptions<
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

export function getDeleteApiV1ServerBlocklistAccountsAccountNameMutationKey() {
  return ['api', '/api/v1/server/blocklist/accounts/:accountName', 'DELETE'] as const
}

export function getDeleteApiV1ServerBlocklistAccountsAccountNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerBlocklistAccountsAccountNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.blocklist.accounts[':accountName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ServerBlocklistAccountsAccountName<
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
                    (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.server.blocklist.accounts)[':accountName']['$delete']
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
  const mutationDefaults = getDeleteApiV1ServerBlocklistAccountsAccountNameMutationOptions<
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

export function getApiV1ServerBlocklistServersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>>,
) {
  return ['api', '/api/v1/server/blocklist/servers', toValue(args)] as const
}

export function getApiV1ServerBlocklistServersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServerBlocklistServersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.blocklist.servers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerBlocklistServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.blocklist.servers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ServerBlocklistServersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerBlocklistServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServerBlocklistServersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.blocklist.servers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ServerBlocklistServersMutationKey() {
  return ['api', '/api/v1/server/blocklist/servers', 'POST'] as const
}

export function getPostApiV1ServerBlocklistServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerBlocklistServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>) {
      return parseResponse(client.api.v1.server.blocklist.servers.$post(args, options))
    },
  })
}

export function usePostApiV1ServerBlocklistServers<
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
                  Awaited<ReturnType<typeof client.api.v1.server.blocklist.servers.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.blocklist.servers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ServerBlocklistServersMutationOptions<
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

export function getDeleteApiV1ServerBlocklistServersHostMutationKey() {
  return ['api', '/api/v1/server/blocklist/servers/:host', 'DELETE'] as const
}

export function getDeleteApiV1ServerBlocklistServersHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerBlocklistServersHostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
    ) {
      return parseResponse(client.api.v1.server.blocklist.servers[':host'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ServerBlocklistServersHost<
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
                    ReturnType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.blocklist.servers)[':host']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ServerBlocklistServersHostMutationOptions<
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

export function getApiV1ServerFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.followers.$get>>,
) {
  return ['api', '/api/v1/server/followers', toValue(args)] as const
}

export function getApiV1ServerFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.followers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServerFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.followers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServerFollowersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.followers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServerFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1ServerFollowersNameWithHostMutationKey() {
  return ['api', '/api/v1/server/followers/:nameWithHost', 'DELETE'] as const
}

export function getDeleteApiV1ServerFollowersNameWithHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.followers)[':nameWithHost']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.followers)[':nameWithHost']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerFollowersNameWithHostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.followers)[':nameWithHost']['$delete']>,
    ) {
      return parseResponse(client.api.v1.server.followers[':nameWithHost'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ServerFollowersNameWithHost<
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
                    ReturnType<(typeof client.api.v1.server.followers)[':nameWithHost']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.followers)[':nameWithHost']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ServerFollowersNameWithHostMutationOptions<
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

export function getPostApiV1ServerFollowersNameWithHostAcceptMutationKey() {
  return ['api', '/api/v1/server/followers/:nameWithHost/accept', 'POST'] as const
}

export function getPostApiV1ServerFollowersNameWithHostAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.server.followers)[':nameWithHost']['accept']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.followers)[':nameWithHost']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerFollowersNameWithHostAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.followers)[':nameWithHost']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.followers[':nameWithHost'].accept.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ServerFollowersNameWithHostAccept<
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
                      (typeof client.api.v1.server.followers)[':nameWithHost']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.server.followers)[':nameWithHost']['accept']['$post']
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
  const mutationDefaults = getPostApiV1ServerFollowersNameWithHostAcceptMutationOptions<
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

export function getPostApiV1ServerFollowersNameWithHostRejectMutationKey() {
  return ['api', '/api/v1/server/followers/:nameWithHost/reject', 'POST'] as const
}

export function getPostApiV1ServerFollowersNameWithHostRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.server.followers)[':nameWithHost']['reject']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.followers)[':nameWithHost']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerFollowersNameWithHostRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.followers)[':nameWithHost']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.followers[':nameWithHost'].reject.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ServerFollowersNameWithHostReject<
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
                      (typeof client.api.v1.server.followers)[':nameWithHost']['reject']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.server.followers)[':nameWithHost']['reject']['$post']
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
  const mutationDefaults = getPostApiV1ServerFollowersNameWithHostRejectMutationOptions<
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

export function getApiV1ServerFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.following.$get>>,
) {
  return ['api', '/api/v1/server/following', toValue(args)] as const
}

export function getApiV1ServerFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.following.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServerFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.following.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServerFollowingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServerFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ServerFollowingMutationKey() {
  return ['api', '/api/v1/server/following', 'POST'] as const
}

export function getPostApiV1ServerFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.following.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.following.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerFollowingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.following.$post>) {
      return parseResponse(client.api.v1.server.following.$post(args, options))
    },
  })
}

export function usePostApiV1ServerFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.server.following.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.following.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ServerFollowingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ServerFollowingHostOrHandleMutationKey() {
  return ['api', '/api/v1/server/following/:hostOrHandle', 'DELETE'] as const
}

export function getDeleteApiV1ServerFollowingHostOrHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerFollowingHostOrHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
    ) {
      return parseResponse(client.api.v1.server.following[':hostOrHandle'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ServerFollowingHostOrHandle<
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
                    ReturnType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.following)[':hostOrHandle']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ServerFollowingHostOrHandleMutationOptions<
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

export function getApiV1ServerLogsQueryKey() {
  return ['api', '/api/v1/server/logs'] as const
}

export function getApiV1ServerLogsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ServerLogsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.logs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServerLogsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ServerLogsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.logs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ServerLogsClientMutationKey() {
  return ['api', '/api/v1/server/logs/client', 'POST'] as const
}

export function getPostApiV1ServerLogsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.logs.client.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.logs.client.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerLogsClientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.logs.client.$post>) {
      return parseResponse(client.api.v1.server.logs.client.$post(args, options))
    },
  })
}

export function usePostApiV1ServerLogsClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.server.logs.client.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.logs.client.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ServerLogsClientMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1ServerRedundancyVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>>,
) {
  return ['api', '/api/v1/server/redundancy/videos', toValue(args)] as const
}

export function getApiV1ServerRedundancyVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServerRedundancyVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.redundancy.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerRedundancyVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.server.redundancy.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ServerRedundancyVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerRedundancyVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServerRedundancyVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.redundancy.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ServerRedundancyVideosMutationKey() {
  return ['api', '/api/v1/server/redundancy/videos', 'POST'] as const
}

export function getPostApiV1ServerRedundancyVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServerRedundancyVideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>) {
      return parseResponse(client.api.v1.server.redundancy.videos.$post(args, options))
    },
  })
}

export function usePostApiV1ServerRedundancyVideos<
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
                  Awaited<ReturnType<typeof client.api.v1.server.redundancy.videos.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.server.redundancy.videos.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ServerRedundancyVideosMutationOptions<
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

export function getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationKey() {
  return ['api', '/api/v1/server/redundancy/videos/:redundancyId', 'DELETE'] as const
}

export function getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.server.redundancy.videos[':redundancyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ServerRedundancyVideosRedundancyId<
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
                      (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.server.redundancy.videos)[':redundancyId']['$delete']
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
  const mutationDefaults = getDeleteApiV1ServerRedundancyVideosRedundancyIdMutationOptions<
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

export function getPutApiV1ServerRedundancyHostMutationKey() {
  return ['api', '/api/v1/server/redundancy/:host', 'PUT'] as const
}

export function getPutApiV1ServerRedundancyHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.server.redundancy)[':host']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ServerRedundancyHostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
    ) {
      return parseResponse(client.api.v1.server.redundancy[':host'].$put(args, options))
    },
  })
}

export function usePutApiV1ServerRedundancyHost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.server.redundancy)[':host']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.server.redundancy)[':host']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ServerRedundancyHostMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1ServerStatsQueryKey() {
  return ['api', '/api/v1/server/stats'] as const
}

export function getApiV1ServerStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ServerStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.server.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServerStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServerStatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.server.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServerStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ServerStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.server.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
) {
  return ['api', '/api/v1/users', toValue(args)] as const
}

export function getApiV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          ReturnType<typeof getApiV1UsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersMutationKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function getPostApiV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.$post>) {
      return parseResponse(client.api.v1.users.$post(args, options))
    },
  })
}

export function usePostApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1UsersAskSendVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/ask-send-verify-email', 'POST'] as const
}

export function getPostApiV1UsersAskSendVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersAskSendVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
    ) {
      return parseResponse(client.api.v1.users['ask-send-verify-email'].$post(args, options))
    },
  })
}

export function usePostApiV1UsersAskSendVerifyEmail<
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
                    ReturnType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)['ask-send-verify-email']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersAskSendVerifyEmailMutationOptions<
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

export function getApiV1UsersMeQueryKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function getApiV1UsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1UsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          ReturnType<typeof getApiV1UsersMeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1UsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1UsersMeMutationKey() {
  return ['api', '/api/v1/users/me', 'PUT'] as const
}

export function getPutApiV1UsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.me.$put>) {
      return parseResponse(client.api.v1.users.me.$put(args, options))
    },
  })
}

export function usePutApiV1UsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1UsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersMeAbusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.abuses.$get>>,
) {
  return ['api', '/api/v1/users/me/abuses', toValue(args)] as const
}

export function getApiV1UsersMeAbusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.abuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeAbusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.abuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeAbuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.abuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>
            >
          >,
          ReturnType<typeof getApiV1UsersMeAbusesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.abuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeAbusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeAbusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.abuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1UsersMeAvatarMutationKey() {
  return ['api', '/api/v1/users/me/avatar', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.avatar.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeAvatarMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.users.me.avatar.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1UsersMeAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.users.me.avatar.$delete>>
                >
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
  const mutationDefaults = getDeleteApiV1UsersMeAvatarMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1UsersMeAvatarPickMutationKey() {
  return ['api', '/api/v1/users/me/avatar/pick', 'POST'] as const
}

export function getPostApiV1UsersMeAvatarPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.avatar.pick.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeAvatarPickMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>) {
      return parseResponse(client.api.v1.users.me.avatar.pick.$post(args, options))
    },
  })
}

export function usePostApiV1UsersMeAvatarPick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.avatar.pick.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.me.avatar.pick.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersMeAvatarPickMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersMeHistoryVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.history.videos.$get>>,
) {
  return ['api', '/api/v1/users/me/history/videos', toValue(args)] as const
}

export function getApiV1UsersMeHistoryVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.history.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeHistoryVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.history.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeHistoryVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.history.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeHistoryVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeHistoryVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeHistoryVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.history.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersMeHistoryVideosRemoveMutationKey() {
  return ['api', '/api/v1/users/me/history/videos/remove', 'POST'] as const
}

export function getPostApiV1UsersMeHistoryVideosRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.remove.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeHistoryVideosRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
    ) {
      return parseResponse(client.api.v1.users.me.history.videos.remove.$post(args, options))
    },
  })
}

export function usePostApiV1UsersMeHistoryVideosRemove<
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
                  Awaited<ReturnType<typeof client.api.v1.users.me.history.videos.remove.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.history.videos.remove.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersMeHistoryVideosRemoveMutationOptions<
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

export function getDeleteApiV1UsersMeHistoryVideosVideoIdMutationKey() {
  return ['api', '/api/v1/users/me/history/videos/:videoId', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeHistoryVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users.me.history.videos)[':videoId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me.history.videos)[':videoId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeHistoryVideosVideoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users.me.history.videos)[':videoId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.users.me.history.videos[':videoId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1UsersMeHistoryVideosVideoId<
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
                      (typeof client.api.v1.users.me.history.videos)[':videoId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users.me.history.videos)[':videoId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1UsersMeHistoryVideosVideoIdMutationOptions<
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

export function getPutApiV1UsersMeNotificationSettingsMutationKey() {
  return ['api', '/api/v1/users/me/notification-settings', 'PUT'] as const
}

export function getPutApiV1UsersMeNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users.me)['notification-settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersMeNotificationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
    ) {
      return parseResponse(client.api.v1.users.me['notification-settings'].$put(args, options))
    },
  })
}

export function usePutApiV1UsersMeNotificationSettings<
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
                    ReturnType<(typeof client.api.v1.users.me)['notification-settings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users.me)['notification-settings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1UsersMeNotificationSettingsMutationOptions<
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

export function getApiV1UsersMeNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.notifications.$get>>,
) {
  return ['api', '/api/v1/users/me/notifications', toValue(args)] as const
}

export function getApiV1UsersMeNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeNotificationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersMeNotificationsReadMutationKey() {
  return ['api', '/api/v1/users/me/notifications/read', 'POST'] as const
}

export function getPostApiV1UsersMeNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.users.me.notifications.read.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeNotificationsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
    ) {
      return parseResponse(client.api.v1.users.me.notifications.read.$post(args, options))
    },
  })
}

export function usePostApiV1UsersMeNotificationsRead<
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
                  Awaited<ReturnType<typeof client.api.v1.users.me.notifications.read.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.me.notifications.read.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersMeNotificationsReadMutationOptions<
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

export function getPostApiV1UsersMeNotificationsReadAllMutationKey() {
  return ['api', '/api/v1/users/me/notifications/read-all', 'POST'] as const
}

export function getPostApiV1UsersMeNotificationsReadAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users.me.notifications)['read-all']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeNotificationsReadAllMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.api.v1.users.me.notifications['read-all'].$post(undefined, options),
      )
    },
  })
}

export function usePostApiV1UsersMeNotificationsReadAll<
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
                    ReturnType<(typeof client.api.v1.users.me.notifications)['read-all']['$post']>
                  >
                >
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
  const mutationDefaults = getPostApiV1UsersMeNotificationsReadAllMutationOptions<
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

export function getApiV1UsersMeSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>>,
) {
  return ['api', '/api/v1/users/me/subscriptions', toValue(args)] as const
}

export function getApiV1UsersMeSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeSubscriptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersMeSubscriptionsMutationKey() {
  return ['api', '/api/v1/users/me/subscriptions', 'POST'] as const
}

export function getPostApiV1UsersMeSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMeSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>) {
      return parseResponse(client.api.v1.users.me.subscriptions.$post(args, options))
    },
  })
}

export function usePostApiV1UsersMeSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.me.subscriptions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersMeSubscriptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersMeSubscriptionsExistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>>,
) {
  return ['api', '/api/v1/users/me/subscriptions/exist', toValue(args)] as const
}

export function getApiV1UsersMeSubscriptionsExistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeSubscriptionsExistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.subscriptions.exist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeSubscriptionsExist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.exist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeSubscriptionsExistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.exist.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsExistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeSubscriptionsExistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.subscriptions.exist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersMeSubscriptionsVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>>,
) {
  return ['api', '/api/v1/users/me/subscriptions/videos', toValue(args)] as const
}

export function getApiV1UsersMeSubscriptionsVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeSubscriptionsVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.subscriptions.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeSubscriptionsVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.subscriptions.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeSubscriptionsVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.me.subscriptions.videos.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeSubscriptionsVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.subscriptions.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
  >,
) {
  return ['api', '/api/v1/users/me/subscriptions/:subscriptionHandle', toValue(args)] as const
}

export function getApiV1UsersMeSubscriptionsSubscriptionHandleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.subscriptions[':subscriptionHandle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeSubscriptionsSubscriptionHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
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
                    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
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
                    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeSubscriptionsSubscriptionHandleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.subscriptions[':subscriptionHandle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationKey() {
  return ['api', '/api/v1/users/me/subscriptions/:subscriptionHandle', 'DELETE'] as const
}

export function getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.me.subscriptions[':subscriptionHandle'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1UsersMeSubscriptionsSubscriptionHandle<
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
                    (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.me.subscriptions)[':subscriptionHandle']['$delete']
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
  const mutationDefaults = getDeleteApiV1UsersMeSubscriptionsSubscriptionHandleMutationOptions<
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

export function getApiV1UsersMeVideoPlaylistsVideosExistQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
  >,
) {
  return ['api', '/api/v1/users/me/video-playlists/videos-exist', toValue(args)] as const
}

export function getApiV1UsersMeVideoPlaylistsVideosExistQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeVideoPlaylistsVideosExistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me['video-playlists']['videos-exist'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeVideoPlaylistsVideosExist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
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
                    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
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
                    (typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeVideoPlaylistsVideosExistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.users.me)['video-playlists']['videos-exist']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideoPlaylistsVideosExistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeVideoPlaylistsVideosExistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me['video-playlists']['videos-exist'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersMeVideoQuotaUsedQueryKey() {
  return ['api', '/api/v1/users/me/video-quota-used'] as const
}

export function getApiV1UsersMeVideoQuotaUsedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1UsersMeVideoQuotaUsedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me['video-quota-used'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeVideoQuotaUsed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
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
                Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeVideoQuotaUsedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users.me)['video-quota-used']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideoQuotaUsedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1UsersMeVideoQuotaUsedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me['video-quota-used'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersMeVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.videos.$get>>,
) {
  return ['api', '/api/v1/users/me/videos', toValue(args)] as const
}

export function getApiV1UsersMeVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>
            >
          >,
          ReturnType<typeof getApiV1UsersMeVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersMeVideosImportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>>,
) {
  return ['api', '/api/v1/users/me/videos/imports', toValue(args)] as const
}

export function getApiV1UsersMeVideosImportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeVideosImportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.videos.imports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeVideosImports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.me.videos.imports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeVideosImportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.videos.imports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosImportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeVideosImportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.videos.imports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersMeVideosVideoIdRatingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>
  >,
) {
  return ['api', '/api/v1/users/me/videos/:videoId/rating', toValue(args)] as const
}

export function getApiV1UsersMeVideosVideoIdRatingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersMeVideosVideoIdRatingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.videos[':videoId'].rating.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersMeVideosVideoIdRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>
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
                  ReturnType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1UsersMeVideosVideoIdRatingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users.me.videos)[':videoId']['rating']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeVideosVideoIdRatingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersMeVideosVideoIdRatingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.videos[':videoId'].rating.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersRegisterMutationKey() {
  return ['api', '/api/v1/users/register', 'POST'] as const
}

export function getPostApiV1UsersRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.register.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.users.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.register.$post>) {
      return parseResponse(client.api.v1.users.register.$post(args, options))
    },
  })
}

export function usePostApiV1UsersRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.register.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.users.register.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersRegisterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersRegistrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.registrations.$get>>,
) {
  return ['api', '/api/v1/users/registrations', toValue(args)] as const
}

export function getApiV1UsersRegistrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.registrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersRegistrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.registrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.registrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersRegistrationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersRegistrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersRegistrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.registrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/registrations/ask-send-verify-email', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations['ask-send-verify-email'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1UsersRegistrationsAskSendVerifyEmail<
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
                      (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)['ask-send-verify-email']['$post']
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
  const mutationDefaults = getPostApiV1UsersRegistrationsAskSendVerifyEmailMutationOptions<
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

export function getPostApiV1UsersRegistrationsRequestMutationKey() {
  return ['api', '/api/v1/users/registrations/request', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.users.registrations.request.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
    ) {
      return parseResponse(client.api.v1.users.registrations.request.$post(args, options))
    },
  })
}

export function usePostApiV1UsersRegistrationsRequest<
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
                Awaited<ReturnType<typeof client.api.v1.users.registrations.request.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.registrations.request.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersRegistrationsRequestMutationOptions<
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

export function getDeleteApiV1UsersRegistrationsRegistrationIdMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId', 'DELETE'] as const
}

export function getDeleteApiV1UsersRegistrationsRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users.registrations)[':registrationId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users.registrations)[':registrationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersRegistrationsRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1UsersRegistrationsRegistrationId<
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
                      (typeof client.api.v1.users.registrations)[':registrationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['$delete']
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
  const mutationDefaults = getDeleteApiV1UsersRegistrationsRegistrationIdMutationOptions<
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

export function getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId/accept', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId'].accept.$post(args, options),
      )
    },
  })
}

export function usePostApiV1UsersRegistrationsRegistrationIdAccept<
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
                      (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['accept']['$post']
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
  const mutationDefaults = getPostApiV1UsersRegistrationsRegistrationIdAcceptMutationOptions<
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

export function getPostApiV1UsersRegistrationsRegistrationIdRejectMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId/reject', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRegistrationIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRegistrationIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId'].reject.$post(args, options),
      )
    },
  })
}

export function usePostApiV1UsersRegistrationsRegistrationIdReject<
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
                      (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['reject']['$post']
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
  const mutationDefaults = getPostApiV1UsersRegistrationsRegistrationIdRejectMutationOptions<
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

export function getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/registrations/:registrationId/verify-email', 'POST'] as const
}

export function getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users.registrations[':registrationId']['verify-email'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1UsersRegistrationsRegistrationIdVerifyEmail<
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
                      (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users.registrations)[':registrationId']['verify-email']['$post']
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
  const mutationDefaults = getPostApiV1UsersRegistrationsRegistrationIdVerifyEmailMutationOptions<
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

export function getPostApiV1UsersRevokeTokenMutationKey() {
  return ['api', '/api/v1/users/revoke-token', 'POST'] as const
}

export function getPostApiV1UsersRevokeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)['revoke-token']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRevokeTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.users['revoke-token'].$post(undefined, options))
    },
  })
}

export function usePostApiV1UsersRevokeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)['revoke-token']['$post']>>
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
  const mutationDefaults = getPostApiV1UsersRevokeTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1UsersTokenMutationKey() {
  return ['api', '/api/v1/users/token', 'POST'] as const
}

export function getPostApiV1UsersTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.token.$post>) {
      return parseResponse(client.api.v1.users.token.$post(args, options))
    },
  })
}

export function usePostApiV1UsersToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['$get']>>,
) {
  return ['api', '/api/v1/users/:id', toValue(args)] as const
}

export function getApiV1UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1UsersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1UsersIdMutationKey() {
  return ['api', '/api/v1/users/:id', 'PUT'] as const
}

export function getPutApiV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':id']['$put']>) {
      return parseResponse(client.api.v1.users[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1UsersIdMutationKey() {
  return ['api', '/api/v1/users/:id', 'DELETE'] as const
}

export function getDeleteApiV1UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>) {
      return parseResponse(client.api.v1.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1UsersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1UsersIdTwoFactorConfirmRequestMutationKey() {
  return ['api', '/api/v1/users/:id/two-factor/confirm-request', 'POST'] as const
}

export function getPostApiV1UsersIdTwoFactorConfirmRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTwoFactorConfirmRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':id']['two-factor']['confirm-request'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1UsersIdTwoFactorConfirmRequest<
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
                      (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':id']['two-factor']['confirm-request']['$post']
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
  const mutationDefaults = getPostApiV1UsersIdTwoFactorConfirmRequestMutationOptions<
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

export function getPostApiV1UsersIdTwoFactorDisableMutationKey() {
  return ['api', '/api/v1/users/:id/two-factor/disable', 'POST'] as const
}

export function getPostApiV1UsersIdTwoFactorDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTwoFactorDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['two-factor'].disable.$post(args, options))
    },
  })
}

export function usePostApiV1UsersIdTwoFactorDisable<
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
                      (typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['disable']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersIdTwoFactorDisableMutationOptions<
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

export function getPostApiV1UsersIdTwoFactorRequestMutationKey() {
  return ['api', '/api/v1/users/:id/two-factor/request', 'POST'] as const
}

export function getPostApiV1UsersIdTwoFactorRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdTwoFactorRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['two-factor'].request.$post(args, options))
    },
  })
}

export function usePostApiV1UsersIdTwoFactorRequest<
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
                  ReturnType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['two-factor']['request']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersIdTwoFactorRequestMutationOptions<
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

export function getPostApiV1UsersIdVerifyEmailMutationKey() {
  return ['api', '/api/v1/users/:id/verify-email', 'POST'] as const
}

export function getPostApiV1UsersIdVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersIdVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':id']['verify-email'].$post(args, options))
    },
  })
}

export function usePostApiV1UsersIdVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['verify-email']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersIdVerifyEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideoChannelSyncsMutationKey() {
  return ['api', '/api/v1/video-channel-syncs', 'POST'] as const
}

export function getPostApiV1VideoChannelSyncsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-channel-syncs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelSyncsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-channel-syncs'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoChannelSyncs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channel-syncs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channel-syncs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideoChannelSyncsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationKey() {
  return ['api', '/api/v1/video-channel-syncs/:channelSyncId', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channel-syncs'][':channelSyncId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1VideoChannelSyncsChannelSyncId<
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
                      (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['$delete']
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
  const mutationDefaults = getDeleteApiV1VideoChannelSyncsChannelSyncIdMutationOptions<
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

export function getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationKey() {
  return ['api', '/api/v1/video-channel-syncs/:channelSyncId/sync', 'POST'] as const
}

export function getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channel-syncs'][':channelSyncId'].sync.$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoChannelSyncsChannelSyncIdSync<
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
                      (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channel-syncs'][':channelSyncId']['sync']['$post']
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
  const mutationDefaults = getPostApiV1VideoChannelSyncsChannelSyncIdSyncMutationOptions<
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

export function getApiV1VideoChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-channels']['$get']>>,
) {
  return ['api', '/api/v1/video-channels', toValue(args)] as const
}

export function getApiV1VideoChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-channels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoChannelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-channels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideoChannelsMutationKey() {
  return ['api', '/api/v1/video-channels', 'POST'] as const
}

export function getPostApiV1VideoChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['video-channels']['$post']>) {
      return parseResponse(client.api.v1['video-channels'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideoChannelsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideoChannelsChannelHandleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle', toValue(args)] as const
}

export function getApiV1VideoChannelsChannelHandleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoChannelsChannelHandleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoChannelsChannelHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>
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
                  ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoChannelsChannelHandleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-channels'][':channelHandle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VideoChannelsChannelHandleMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle', 'PUT'] as const
}

export function getPutApiV1VideoChannelsChannelHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideoChannelsChannelHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
    ) {
      return parseResponse(client.api.v1['video-channels'][':channelHandle'].$put(args, options))
    },
  })
}

export function usePutApiV1VideoChannelsChannelHandle<
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
                    ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideoChannelsChannelHandleMutationOptions<
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

export function getDeleteApiV1VideoChannelsChannelHandleMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
    ) {
      return parseResponse(client.api.v1['video-channels'][':channelHandle'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideoChannelsChannelHandle<
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
                      (typeof client.api.v1)['video-channels'][':channelHandle']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideoChannelsChannelHandleMutationOptions<
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

export function getDeleteApiV1VideoChannelsChannelHandleAvatarMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/avatar', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].avatar.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1VideoChannelsChannelHandleAvatar<
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
                      (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['$delete']
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
  const mutationDefaults = getDeleteApiV1VideoChannelsChannelHandleAvatarMutationOptions<
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

export function getPostApiV1VideoChannelsChannelHandleAvatarPickMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/avatar/pick', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleAvatarPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleAvatarPickMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].avatar.pick.$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoChannelsChannelHandleAvatarPick<
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['avatar']['pick']['$post']
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
  const mutationDefaults = getPostApiV1VideoChannelsChannelHandleAvatarPickMutationOptions<
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

export function getDeleteApiV1VideoChannelsChannelHandleBannerMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/banner', 'DELETE'] as const
}

export function getDeleteApiV1VideoChannelsChannelHandleBannerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoChannelsChannelHandleBannerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].banner.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1VideoChannelsChannelHandleBanner<
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
                      (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['$delete']
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
  const mutationDefaults = getDeleteApiV1VideoChannelsChannelHandleBannerMutationOptions<
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

export function getPostApiV1VideoChannelsChannelHandleBannerPickMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/banner/pick', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleBannerPickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleBannerPickMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].banner.pick.$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoChannelsChannelHandleBannerPick<
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['banner']['pick']['$post']
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
  const mutationDefaults = getPostApiV1VideoChannelsChannelHandleBannerPickMutationOptions<
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

export function getApiV1VideoChannelsChannelHandleFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
    >
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/followers', toValue(args)] as const
}

export function getApiV1VideoChannelsChannelHandleFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoChannelsChannelHandleFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoChannelsChannelHandleFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleFollowersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1)['video-channels'][':channelHandle']['followers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoChannelsChannelHandleFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-channels'][':channelHandle'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideoChannelsChannelHandleImportVideosMutationKey() {
  return ['api', '/api/v1/video-channels/:channelHandle/import-videos', 'POST'] as const
}

export function getPostApiV1VideoChannelsChannelHandleImportVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoChannelsChannelHandleImportVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle']['import-videos'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoChannelsChannelHandleImportVideos<
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
                      (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['import-videos']['$post']
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
  const mutationDefaults = getPostApiV1VideoChannelsChannelHandleImportVideosMutationOptions<
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

export function getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
    >
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/video-playlists', toValue(args)] as const
}

export function getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle']['video-playlists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoChannelsChannelHandleVideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1)['video-channels'][':channelHandle']['video-playlists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoChannelsChannelHandleVideoPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-channels'][':channelHandle']['video-playlists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoChannelsChannelHandleVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
  >,
) {
  return ['api', '/api/v1/video-channels/:channelHandle/videos', toValue(args)] as const
}

export function getApiV1VideoChannelsChannelHandleVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoChannelsChannelHandleVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-channels'][':channelHandle'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoChannelsChannelHandleVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
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
                    (typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideoChannelsChannelHandleVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1)['video-channels'][':channelHandle']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoChannelsChannelHandleVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoChannelsChannelHandleVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-channels'][':channelHandle'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>>,
) {
  return ['api', '/api/v1/video-playlists', toValue(args)] as const
}

export function getApiV1VideoPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-playlists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-playlists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoPlaylistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-playlists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideoPlaylistsMutationKey() {
  return ['api', '/api/v1/video-playlists', 'POST'] as const
}

export function getPostApiV1VideoPlaylistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoPlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>) {
      return parseResponse(client.api.v1['video-playlists'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-playlists']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideoPlaylistsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideoPlaylistsPrivaciesQueryKey() {
  return ['api', '/api/v1/video-playlists/privacies'] as const
}

export function getApiV1VideoPlaylistsPrivaciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1VideoPlaylistsPrivaciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-playlists'].privacies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoPlaylistsPrivacies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
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
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoPlaylistsPrivaciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-playlists']['privacies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsPrivaciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1VideoPlaylistsPrivaciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-playlists'].privacies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoPlaylistsPlaylistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>
  >,
) {
  return ['api', '/api/v1/video-playlists/:playlistId', toValue(args)] as const
}

export function getApiV1VideoPlaylistsPlaylistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoPlaylistsPlaylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoPlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>
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
                  ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoPlaylistsPlaylistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-playlists'][':playlistId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VideoPlaylistsPlaylistIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId', 'PUT'] as const
}

export function getPutApiV1VideoPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideoPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
    ) {
      return parseResponse(client.api.v1['video-playlists'][':playlistId'].$put(args, options))
    },
  })
}

export function usePutApiV1VideoPlaylistsPlaylistId<
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
                    ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideoPlaylistsPlaylistIdMutationOptions<
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

export function getDeleteApiV1VideoPlaylistsPlaylistIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId', 'DELETE'] as const
}

export function getDeleteApiV1VideoPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
    ) {
      return parseResponse(client.api.v1['video-playlists'][':playlistId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideoPlaylistsPlaylistId<
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
                    ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideoPlaylistsPlaylistIdMutationOptions<
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

export function getApiV1VideoPlaylistsPlaylistIdVideosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
  >,
) {
  return ['api', '/api/v1/video-playlists/:playlistId/videos', toValue(args)] as const
}

export function getApiV1VideoPlaylistsPlaylistIdVideosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoPlaylistsPlaylistIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoPlaylistsPlaylistIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
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
                    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
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
                    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdVideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoPlaylistsPlaylistIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoPlaylistsPlaylistIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-playlists'][':playlistId'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos', 'POST'] as const
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoPlaylistsPlaylistIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos.$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoPlaylistsPlaylistIdVideos<
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
                    (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['$post']
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
  const mutationDefaults = getPostApiV1VideoPlaylistsPlaylistIdVideosMutationOptions<
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

export function getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos/reorder', 'POST'] as const
}

export function getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos.reorder.$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoPlaylistsPlaylistIdVideosReorder<
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
                      (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos']['reorder']['$post']
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
  const mutationDefaults = getPostApiV1VideoPlaylistsPlaylistIdVideosReorderMutationOptions<
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

export function getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos/:playlistElementId', 'PUT'] as const
}

export function getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos[':playlistElementId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementId<
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
                      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$put']
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
    getPutApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
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

export function getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey() {
  return ['api', '/api/v1/video-playlists/:playlistId/videos/:playlistElementId', 'DELETE'] as const
}

export function getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-playlists'][':playlistId'].videos[':playlistElementId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementId<
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
                      (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-playlists'][':playlistId']['videos'][':playlistElementId']['$delete']
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
    getDeleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdMutationOptions<
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

export function getApiV1VideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.videos.$get>>,
) {
  return ['api', '/api/v1/videos', toValue(args)] as const
}

export function getApiV1VideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
          >,
          ReturnType<typeof getApiV1VideosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideosBlacklistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.videos.blacklist.$get>>,
) {
  return ['api', '/api/v1/videos/blacklist', toValue(args)] as const
}

export function getApiV1VideosBlacklistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.videos.blacklist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosBlacklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.blacklist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosBlacklist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.videos.blacklist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VideosBlacklistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.blacklist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosBlacklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosBlacklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.blacklist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideosCategoriesQueryKey() {
  return ['api', '/api/v1/videos/categories'] as const
}

export function getApiV1VideosCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1VideosCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VideosCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1VideosCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosImportsMutationKey() {
  return ['api', '/api/v1/videos/imports', 'POST'] as const
}

export function getPostApiV1VideosImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.imports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.videos.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.videos.imports.$post>) {
      return parseResponse(client.api.v1.videos.imports.$post(args, options))
    },
  })
}

export function usePostApiV1VideosImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.imports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.videos.imports.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosImportsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1VideosImportsIdMutationKey() {
  return ['api', '/api/v1/videos/imports/:id', 'DELETE'] as const
}

export function getDeleteApiV1VideosImportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosImportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos.imports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideosImportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.imports)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideosImportsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosImportsIdCancelMutationKey() {
  return ['api', '/api/v1/videos/imports/:id/cancel', 'POST'] as const
}

export function getPostApiV1VideosImportsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosImportsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.imports[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostApiV1VideosImportsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.imports)[':id']['cancel']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosImportsIdCancelMutationOptions<
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

export function getApiV1VideosLanguagesQueryKey() {
  return ['api', '/api/v1/videos/languages'] as const
}

export function getApiV1VideosLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1VideosLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VideosLanguagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.languages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1VideosLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideosLicencesQueryKey() {
  return ['api', '/api/v1/videos/licences'] as const
}

export function getApiV1VideosLicencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1VideosLicencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.licences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosLicences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VideosLicencesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.licences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLicencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1VideosLicencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.licences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosLiveMutationKey() {
  return ['api', '/api/v1/videos/live', 'POST'] as const
}

export function getPostApiV1VideosLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.live.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.videos.live.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosLiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.videos.live.$post>) {
      return parseResponse(client.api.v1.videos.live.$post(args, options))
    },
  })
}

export function usePostApiV1VideosLive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.live.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.videos.live.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosLiveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideosLiveIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>>,
) {
  return ['api', '/api/v1/videos/live/:id', toValue(args)] as const
}

export function getApiV1VideosLiveIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosLiveIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.live[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosLiveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.videos.live)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosLiveIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLiveIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosLiveIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.live[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VideosLiveIdMutationKey() {
  return ['api', '/api/v1/videos/live/:id', 'PUT'] as const
}

export function getPutApiV1VideosLiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosLiveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>) {
      return parseResponse(client.api.v1.videos.live[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1VideosLiveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.live)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideosLiveIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideosLiveIdSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/live/:id/sessions', toValue(args)] as const
}

export function getApiV1VideosLiveIdSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosLiveIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.live[':id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosLiveIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosLiveIdSessionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos.live)[':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosLiveIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosLiveIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.live[':id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideosOwnershipQueryKey() {
  return ['api', '/api/v1/videos/ownership'] as const
}

export function getApiV1VideosOwnershipQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1VideosOwnershipQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.ownership.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosOwnership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VideosOwnershipQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.ownership.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosOwnershipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1VideosOwnershipQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.ownership.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosOwnershipIdAcceptMutationKey() {
  return ['api', '/api/v1/videos/ownership/:id/accept', 'POST'] as const
}

export function getPostApiV1VideosOwnershipIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosOwnershipIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.ownership[':id'].accept.$post(args, options))
    },
  })
}

export function usePostApiV1VideosOwnershipIdAccept<
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
                    ReturnType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['accept']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosOwnershipIdAcceptMutationOptions<
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

export function getPostApiV1VideosOwnershipIdRefuseMutationKey() {
  return ['api', '/api/v1/videos/ownership/:id/refuse', 'POST'] as const
}

export function getPostApiV1VideosOwnershipIdRefuseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosOwnershipIdRefuseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos.ownership[':id'].refuse.$post(args, options))
    },
  })
}

export function usePostApiV1VideosOwnershipIdRefuse<
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
                    ReturnType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos.ownership)[':id']['refuse']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosOwnershipIdRefuseMutationOptions<
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

export function getApiV1VideosPrivaciesQueryKey() {
  return ['api', '/api/v1/videos/privacies'] as const
}

export function getApiV1VideosPrivaciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1VideosPrivaciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos.privacies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosPrivacies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VideosPrivaciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.privacies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosPrivaciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1VideosPrivaciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos.privacies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosUploadMutationKey() {
  return ['api', '/api/v1/videos/upload', 'POST'] as const
}

export function getPostApiV1VideosUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.videos.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.videos.upload.$post>) {
      return parseResponse(client.api.v1.videos.upload.$post(args, options))
    },
  })
}

export function usePostApiV1VideosUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.videos.upload.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.videos.upload.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosUploadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiV1VideosUploadResumableMutationKey() {
  return ['api', '/api/v1/videos/upload-resumable', 'PUT'] as const
}

export function getPutApiV1VideosUploadResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosUploadResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos['upload-resumable'].$put(args, options))
    },
  })
}

export function usePutApiV1VideosUploadResumable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideosUploadResumableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosUploadResumableMutationKey() {
  return ['api', '/api/v1/videos/upload-resumable', 'POST'] as const
}

export function getPostApiV1VideosUploadResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosUploadResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos['upload-resumable'].$post(args, options))
    },
  })
}

export function usePostApiV1VideosUploadResumable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosUploadResumableMutationOptions<
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

export function getDeleteApiV1VideosUploadResumableMutationKey() {
  return ['api', '/api/v1/videos/upload-resumable', 'DELETE'] as const
}

export function getDeleteApiV1VideosUploadResumableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosUploadResumableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos['upload-resumable'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideosUploadResumable<
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
                  Awaited<ReturnType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)['upload-resumable']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideosUploadResumableMutationOptions<
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

export function getApiV1VideosIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>>,
) {
  return ['api', '/api/v1/videos/:id', toValue(args)] as const
}

export function getApiV1VideosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.videos)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VideosIdMutationKey() {
  return ['api', '/api/v1/videos/:id', 'PUT'] as const
}

export function getPutApiV1VideosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>) {
      return parseResponse(client.api.v1.videos[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1VideosId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideosIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1VideosIdMutationKey() {
  return ['api', '/api/v1/videos/:id', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>) {
      return parseResponse(client.api.v1.videos[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideosId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideosIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdBlacklistMutationKey() {
  return ['api', '/api/v1/videos/:id/blacklist', 'POST'] as const
}

export function getPostApiV1VideosIdBlacklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdBlacklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].blacklist.$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdBlacklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdBlacklistMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1VideosIdBlacklistMutationKey() {
  return ['api', '/api/v1/videos/:id/blacklist', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdBlacklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdBlacklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].blacklist.$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideosIdBlacklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['blacklist']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideosIdBlacklistMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideosIdCaptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/captions', toValue(args)] as const
}

export function getApiV1VideosIdCaptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdCaptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id'].captions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdCaptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['captions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdCaptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['captions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCaptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdCaptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id'].captions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VideosIdCaptionsCaptionLanguageMutationKey() {
  return ['api', '/api/v1/videos/:id/captions/:captionLanguage', 'PUT'] as const
}

export function getPutApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdCaptionsCaptionLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].captions[':captionLanguage'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1VideosIdCaptionsCaptionLanguage<
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
                      (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$put']
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
  const mutationDefaults = getPutApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
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

export function getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationKey() {
  return ['api', '/api/v1/videos/:id/captions/:captionLanguage', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].captions[':captionLanguage'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1VideosIdCaptionsCaptionLanguage<
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
                      (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['captions'][':captionLanguage']['$delete']
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
  const mutationDefaults = getDeleteApiV1VideosIdCaptionsCaptionLanguageMutationOptions<
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

export function getApiV1VideosIdCommentThreadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/comment-threads', toValue(args)] as const
}

export function getApiV1VideosIdCommentThreadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdCommentThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id']['comment-threads'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdCommentThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdCommentThreadsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCommentThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdCommentThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id']['comment-threads'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdCommentThreadsMutationKey() {
  return ['api', '/api/v1/videos/:id/comment-threads', 'POST'] as const
}

export function getPostApiV1VideosIdCommentThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdCommentThreadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id']['comment-threads'].$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdCommentThreads<
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
                  ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdCommentThreadsMutationOptions<
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

export function getApiV1VideosIdCommentThreadsThreadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/comment-threads/:threadId', toValue(args)] as const
}

export function getApiV1VideosIdCommentThreadsThreadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdCommentThreadsThreadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id']['comment-threads'][':threadId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdCommentThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
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
                    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
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
                    (typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdCommentThreadsThreadIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.videos)[':id']['comment-threads'][':threadId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdCommentThreadsThreadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdCommentThreadsThreadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id']['comment-threads'][':threadId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdCommentsCommentIdMutationKey() {
  return ['api', '/api/v1/videos/:id/comments/:commentId', 'POST'] as const
}

export function getPostApiV1VideosIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.videos[':id'].comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdCommentsCommentId<
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
                    (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdCommentsCommentIdMutationOptions<
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

export function getDeleteApiV1VideosIdCommentsCommentIdMutationKey() {
  return ['api', '/api/v1/videos/:id/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.videos[':id'].comments[':commentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1VideosIdCommentsCommentId<
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
                      (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.videos)[':id']['comments'][':commentId']['$delete']
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
  const mutationDefaults = getDeleteApiV1VideosIdCommentsCommentIdMutationOptions<
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

export function getApiV1VideosIdDescriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['description']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/description', toValue(args)] as const
}

export function getApiV1VideosIdDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['description']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id'].description.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['description']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['description']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['description']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['description']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdDescriptionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['description']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id'].description.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdGiveOwnershipMutationKey() {
  return ['api', '/api/v1/videos/:id/give-ownership', 'POST'] as const
}

export function getPostApiV1VideosIdGiveOwnershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['give-ownership']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['give-ownership']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdGiveOwnershipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['give-ownership']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id']['give-ownership'].$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdGiveOwnership<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos)[':id']['give-ownership']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['give-ownership']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdGiveOwnershipMutationOptions<
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

export function getDeleteApiV1VideosIdHlsMutationKey() {
  return ['api', '/api/v1/videos/:id/hls', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdHlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdHlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].hls.$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideosIdHls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['hls']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideosIdHlsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideosIdLiveSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/live-session', toValue(args)] as const
}

export function getApiV1VideosIdLiveSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdLiveSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id']['live-session'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdLiveSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdLiveSessionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['live-session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdLiveSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdLiveSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id']['live-session'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VideosIdRateMutationKey() {
  return ['api', '/api/v1/videos/:id/rate', 'PUT'] as const
}

export function getPutApiV1VideosIdRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['rate']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdRateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>) {
      return parseResponse(client.api.v1.videos[':id'].rate.$put(args, options))
    },
  })
}

export function usePutApiV1VideosIdRate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['rate']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['rate']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideosIdRateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdSourceMutationKey() {
  return ['api', '/api/v1/videos/:id/source', 'POST'] as const
}

export function getPostApiV1VideosIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].source.$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['source']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['source']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdSourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1VideosIdStatsOverallQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/stats/overall', toValue(args)] as const
}

export function getApiV1VideosIdStatsOverallQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdStatsOverallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id'].stats.overall.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdStatsOverall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>
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
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdStatsOverallQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['overall']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsOverallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdStatsOverallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id'].stats.overall.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideosIdStatsRetentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/stats/retention', toValue(args)] as const
}

export function getApiV1VideosIdStatsRetentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdStatsRetentionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id'].stats.retention.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdStatsRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>
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
                  ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdStatsRetentionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['stats']['retention']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsRetentionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdStatsRetentionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id'].stats.retention.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideosIdStatsTimeseriesMetricQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']>
  >,
) {
  return ['api', '/api/v1/videos/:id/stats/timeseries/:metric', toValue(args)] as const
}

export function getApiV1VideosIdStatsTimeseriesMetricQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideosIdStatsTimeseriesMetricQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.videos[':id'].stats.timeseries[':metric'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideosIdStatsTimeseriesMetric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']>
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
                    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
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
                    (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1VideosIdStatsTimeseriesMetricQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.videos)[':id']['stats']['timeseries'][':metric']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideosIdStatsTimeseriesMetricQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideosIdStatsTimeseriesMetricQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.videos[':id'].stats.timeseries[':metric'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdStudioEditMutationKey() {
  return ['api', '/api/v1/videos/:id/studio/edit', 'POST'] as const
}

export function getPostApiV1VideosIdStudioEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdStudioEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].studio.edit.$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdStudioEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['studio']['edit']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdStudioEditMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdTokenMutationKey() {
  return ['api', '/api/v1/videos/:id/token', 'POST'] as const
}

export function getPostApiV1VideosIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].token.$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['token']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdTranscodingMutationKey() {
  return ['api', '/api/v1/videos/:id/transcoding', 'POST'] as const
}

export function getPostApiV1VideosIdTranscodingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdTranscodingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].transcoding.$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdTranscoding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['transcoding']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdTranscodingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1VideosIdViewsMutationKey() {
  return ['api', '/api/v1/videos/:id/views', 'POST'] as const
}

export function getPostApiV1VideosIdViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['views']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideosIdViewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].views.$post(args, options))
    },
  })
}

export function usePostApiV1VideosIdViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['views']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['views']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1VideosIdViewsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiV1VideosIdWatchingMutationKey() {
  return ['api', '/api/v1/videos/:id/watching', 'PUT'] as const
}

export function getPutApiV1VideosIdWatchingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['watching']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['watching']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VideosIdWatchingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['watching']['$put']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].watching.$put(args, options))
    },
  })
}

export function usePutApiV1VideosIdWatching<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['watching']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['watching']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1VideosIdWatchingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1VideosIdWebtorrentMutationKey() {
  return ['api', '/api/v1/videos/:id/webtorrent', 'DELETE'] as const
}

export function getDeleteApiV1VideosIdWebtorrentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['webtorrent']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.videos)[':id']['webtorrent']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VideosIdWebtorrentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.videos)[':id']['webtorrent']['$delete']>,
    ) {
      return parseResponse(client.api.v1.videos[':id'].webtorrent.$delete(args, options))
    },
  })
}

export function useDeleteApiV1VideosIdWebtorrent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.videos)[':id']['webtorrent']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.videos)[':id']['webtorrent']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1VideosIdWebtorrentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFeedsSubscriptionsFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>>,
) {
  return ['feeds', '/feeds/subscriptions.{format}', toValue(args)] as const
}

export function getFeedsSubscriptionsFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedsSubscriptionsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds['subscriptions.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedsSubscriptionsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)['subscriptions.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedsSubscriptionsFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds)['subscriptions.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsSubscriptionsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedsSubscriptionsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds['subscriptions.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedsVideoCommentsFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>
  >,
) {
  return ['feeds', '/feeds/video-comments.{format}', toValue(args)] as const
}

export function getFeedsVideoCommentsFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedsVideoCommentsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds['video-comments.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedsVideoCommentsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feeds)['video-comments.{format}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedsVideoCommentsFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds)['video-comments.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsVideoCommentsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedsVideoCommentsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds['video-comments.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedsVideosFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>>,
) {
  return ['feeds', '/feeds/videos.{format}', toValue(args)] as const
}

export function getFeedsVideosFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedsVideosFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds['videos.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedsVideosFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)['videos.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedsVideosFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)['videos.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsVideosFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedsVideosFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds['videos.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
    >
  >,
) {
  return ['static', '/static/streaming-playlists/hls/private/:filename', toValue(args)] as const
}

export function getStaticStreamingPlaylistsHlsPrivateFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.static['streaming-playlists'].hls.private[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStaticStreamingPlaylistsHlsPrivateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
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
                    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
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
                    (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.static)['streaming-playlists']['hls']['private'][':filename']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStaticStreamingPlaylistsHlsPrivateFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.static['streaming-playlists'].hls.private[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStaticStreamingPlaylistsHlsFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
  >,
) {
  return ['static', '/static/streaming-playlists/hls/:filename', toValue(args)] as const
}

export function getStaticStreamingPlaylistsHlsFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStaticStreamingPlaylistsHlsFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.static['streaming-playlists'].hls[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStaticStreamingPlaylistsHlsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
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
                    (typeof client.static)['streaming-playlists']['hls'][':filename']['$get']
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
                    (typeof client.static)['streaming-playlists']['hls'][':filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStaticStreamingPlaylistsHlsFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.static)['streaming-playlists']['hls'][':filename']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticStreamingPlaylistsHlsFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStaticStreamingPlaylistsHlsFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.static['streaming-playlists'].hls[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStaticWebseedPrivateFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.static.webseed.private)[':filename']['$get']>
  >,
) {
  return ['static', '/static/webseed/private/:filename', toValue(args)] as const
}

export function getStaticWebseedPrivateFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.static.webseed.private)[':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStaticWebseedPrivateFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.static.webseed.private[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStaticWebseedPrivateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.static.webseed.private)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.static.webseed.private)[':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.static.webseed.private)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.static.webseed.private)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStaticWebseedPrivateFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.static.webseed.private)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticWebseedPrivateFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStaticWebseedPrivateFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.static.webseed.private[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStaticWebseedFilenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.static.webseed)[':filename']['$get']>>,
) {
  return ['static', '/static/webseed/:filename', toValue(args)] as const
}

export function getStaticWebseedFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.static.webseed)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStaticWebseedFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.static.webseed[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStaticWebseedFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.static.webseed)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.static.webseed)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.static.webseed)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.static.webseed)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStaticWebseedFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.static.webseed)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStaticWebseedFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStaticWebseedFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.static.webseed[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
