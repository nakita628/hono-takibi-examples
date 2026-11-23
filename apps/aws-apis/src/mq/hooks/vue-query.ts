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

export function getV1BrokersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.brokers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/brokers', keyArgs] as const
}

export function getV1BrokersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.brokers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrokersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.brokers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Brokers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.brokers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>
          >,
          ReturnType<typeof getV1BrokersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BrokersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrokersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.brokers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BrokersMutationKey() {
  return ['v1', '/v1/brokers', 'POST'] as const
}

export function getPostV1BrokersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.brokers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BrokersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.brokers.$post>) {
      return parseResponse(client.v1.brokers.$post(args, options))
    },
  })
}

export function usePostV1Brokers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.brokers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BrokersMutationOptions<TError, TOnMutateResult>(clientOptions)
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
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations', keyArgs] as const
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

export function getV1TagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/tags/:resource-arn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags[':resource-arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags[':resource-arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags/:resource-arn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.v1.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BrokersBrokerIdUsersUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/brokers/:broker-id/users/:username', keyArgs] as const
}

export function getV1BrokersBrokerIdUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrokersBrokerIdUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.brokers[':broker-id'].users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrokersBrokerIdUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>
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
                  ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BrokersBrokerIdUsersUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokersBrokerIdUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrokersBrokerIdUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.brokers[':broker-id'].users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1BrokersBrokerIdUsersUsernameMutationKey() {
  return ['v1', '/v1/brokers/:broker-id/users/:username', 'PUT'] as const
}

export function getPutV1BrokersBrokerIdUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BrokersBrokerIdUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']
      >,
    ) {
      return parseResponse(client.v1.brokers[':broker-id'].users[':username'].$put(args, options))
    },
  })
}

export function usePutV1BrokersBrokerIdUsersUsername<
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
                  ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BrokersBrokerIdUsersUsernameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1BrokersBrokerIdUsersUsernameMutationKey() {
  return ['v1', '/v1/brokers/:broker-id/users/:username', 'POST'] as const
}

export function getPostV1BrokersBrokerIdUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BrokersBrokerIdUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']
      >,
    ) {
      return parseResponse(client.v1.brokers[':broker-id'].users[':username'].$post(args, options))
    },
  })
}

export function usePostV1BrokersBrokerIdUsersUsername<
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
                    (typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BrokersBrokerIdUsersUsernameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1BrokersBrokerIdUsersUsernameMutationKey() {
  return ['v1', '/v1/brokers/:broker-id/users/:username', 'DELETE'] as const
}

export function getDeleteV1BrokersBrokerIdUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BrokersBrokerIdUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.brokers[':broker-id'].users[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BrokersBrokerIdUsersUsername<
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
                    (typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']
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
  const mutationDefaults = getDeleteV1BrokersBrokerIdUsersUsernameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BrokersBrokerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/brokers/:broker-id', keyArgs] as const
}

export function getV1BrokersBrokerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrokersBrokerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.brokers[':broker-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrokersBrokerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BrokersBrokerIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokersBrokerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrokersBrokerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.brokers[':broker-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1BrokersBrokerIdMutationKey() {
  return ['v1', '/v1/brokers/:broker-id', 'PUT'] as const
}

export function getPutV1BrokersBrokerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BrokersBrokerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$put']>) {
      return parseResponse(client.v1.brokers[':broker-id'].$put(args, options))
    },
  })
}

export function usePutV1BrokersBrokerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.brokers)[':broker-id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BrokersBrokerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1BrokersBrokerIdMutationKey() {
  return ['v1', '/v1/brokers/:broker-id', 'DELETE'] as const
}

export function getDeleteV1BrokersBrokerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BrokersBrokerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$delete']>) {
      return parseResponse(client.v1.brokers[':broker-id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BrokersBrokerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.brokers)[':broker-id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BrokersBrokerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteV1TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BrokerEngineTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/broker-engine-types', keyArgs] as const
}

export function getV1BrokerEngineTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrokerEngineTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['broker-engine-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrokerEngineTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BrokerEngineTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokerEngineTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrokerEngineTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['broker-engine-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BrokerInstanceOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/broker-instance-options', keyArgs] as const
}

export function getV1BrokerInstanceOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrokerInstanceOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['broker-instance-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrokerInstanceOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['broker-instance-options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['broker-instance-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['broker-instance-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BrokerInstanceOptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['broker-instance-options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokerInstanceOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrokerInstanceOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['broker-instance-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigurationsConfigurationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations/:configuration-id', keyArgs] as const
}

export function getV1ConfigurationsConfigurationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsConfigurationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':configuration-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigurationsConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConfigurationsConfigurationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsConfigurationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsConfigurationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':configuration-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ConfigurationsConfigurationIdMutationKey() {
  return ['v1', '/v1/configurations/:configuration-id', 'PUT'] as const
}

export function getPutV1ConfigurationsConfigurationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigurationsConfigurationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$put']>,
    ) {
      return parseResponse(client.v1.configurations[':configuration-id'].$put(args, options))
    },
  })
}

export function usePutV1ConfigurationsConfigurationId<
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
                Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ConfigurationsConfigurationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/configurations/:configuration-id/revisions/:configuration-revision',
    keyArgs,
  ] as const
}

export function getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':configuration-id'].revisions[':configuration-revision'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ConfigurationsConfigurationIdRevisionsConfigurationRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
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
                    (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
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
                    (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey
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
              (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':configuration-id'].revisions[':configuration-revision'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConfigurationsConfigurationIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['revisions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/configurations/:configuration-id/revisions', keyArgs] as const
}

export function getV1ConfigurationsConfigurationIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['revisions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigurationsConfigurationIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.configurations[':configuration-id'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConfigurationsConfigurationIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.configurations)[':configuration-id']['revisions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.configurations)[':configuration-id']['revisions']['$get']>
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
                    (typeof client.v1.configurations)[':configuration-id']['revisions']['$get']
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
                    (typeof client.v1.configurations)[':configuration-id']['revisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConfigurationsConfigurationIdRevisionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.v1.configurations)[':configuration-id']['revisions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsConfigurationIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigurationsConfigurationIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.configurations[':configuration-id'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BrokersBrokerIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/brokers/:broker-id/users', keyArgs] as const
}

export function getV1BrokersBrokerIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrokersBrokerIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.brokers[':broker-id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrokersBrokerIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BrokersBrokerIdUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokersBrokerIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrokersBrokerIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.brokers[':broker-id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BrokersBrokerIdPromoteMutationKey() {
  return ['v1', '/v1/brokers/:broker-id/promote', 'POST'] as const
}

export function getPostV1BrokersBrokerIdPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['promote']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['promote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BrokersBrokerIdPromoteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['promote']['$post']>,
    ) {
      return parseResponse(client.v1.brokers[':broker-id'].promote.$post(args, options))
    },
  })
}

export function usePostV1BrokersBrokerIdPromote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['promote']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.brokers)[':broker-id']['promote']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BrokersBrokerIdPromoteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1BrokersBrokerIdRebootMutationKey() {
  return ['v1', '/v1/brokers/:broker-id/reboot', 'POST'] as const
}

export function getPostV1BrokersBrokerIdRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['reboot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.brokers)[':broker-id']['reboot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BrokersBrokerIdRebootMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['reboot']['$post']>,
    ) {
      return parseResponse(client.v1.brokers[':broker-id'].reboot.$post(args, options))
    },
  })
}

export function usePostV1BrokersBrokerIdReboot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['reboot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.brokers)[':broker-id']['reboot']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BrokersBrokerIdRebootMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
