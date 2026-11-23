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

export function getV1OperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.operations.$get>>,
) {
  return ['v1', '/v1/operations', toValue(args)] as const
}

export function getV1OperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.operations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Operations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.operations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
          >,
          ReturnType<typeof getV1OperationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.services.$get>>,
) {
  return ['v1', '/v1/services', toValue(args)] as const
}

export function getV1ServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>
          >,
          ReturnType<typeof getV1ServicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ServicesMutationKey() {
  return ['v1', '/v1/services', 'POST'] as const
}

export function getPostV1ServicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.services.$post>) {
      return parseResponse(client.v1.services.$post(args, options))
    },
  })
}

export function usePostV1Services<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.services.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ServicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ServicesServiceNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>>,
) {
  return ['v1', '/v1/services/:serviceName', toValue(args)] as const
}

export function getV1ServicesServiceNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesServiceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services[':serviceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServicesServiceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ServicesServiceNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicesServiceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesServiceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services[':serviceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ServicesServiceNameMutationKey() {
  return ['v1', '/v1/services/:serviceName', 'DELETE'] as const
}

export function getDeleteV1ServicesServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.services)[':serviceName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ServicesServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.services)[':serviceName']['$delete']>,
    ) {
      return parseResponse(client.v1.services[':serviceName'].$delete(args, options))
    },
  })
}

export function useDeleteV1ServicesServiceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.services)[':serviceName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ServicesServiceNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1ServicesServiceNameConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>
  >,
) {
  return ['v1', '/v1/services/:serviceName/config', toValue(args)] as const
}

export function getV1ServicesServiceNameConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesServiceNameConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services[':serviceName'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServicesServiceNameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ServicesServiceNameConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicesServiceNameConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesServiceNameConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services[':serviceName'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ServicesServiceNameConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>
  >,
) {
  return ['v1', '/v1/services/:serviceName/configs', toValue(args)] as const
}

export function getV1ServicesServiceNameConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesServiceNameConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services[':serviceName'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServicesServiceNameConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ServicesServiceNameConfigsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicesServiceNameConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesServiceNameConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services[':serviceName'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ServicesServiceNameConfigsMutationKey() {
  return ['v1', '/v1/services/:serviceName/configs', 'POST'] as const
}

export function getPostV1ServicesServiceNameConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicesServiceNameConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$post']>,
    ) {
      return parseResponse(client.v1.services[':serviceName'].configs.$post(args, options))
    },
  })
}

export function usePostV1ServicesServiceNameConfigs<
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
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ServicesServiceNameConfigsMutationOptions<
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

export function getV1ServicesServiceNameConfigsConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']>
  >,
) {
  return ['v1', '/v1/services/:serviceName/configs/:configId', toValue(args)] as const
}

export function getV1ServicesServiceNameConfigsConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesServiceNameConfigsConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services[':serviceName'].configs[':configId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServicesServiceNameConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']>
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
                    (typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']
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
                    (typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ServicesServiceNameConfigsConfigIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicesServiceNameConfigsConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesServiceNameConfigsConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services[':serviceName'].configs[':configId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ServicesServiceNameConfigsSubmitMutationKey() {
  return ['v1', '/v1/services/:serviceName/configs:submit', 'POST'] as const
}

export function getPostV1ServicesServiceNameConfigsSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicesServiceNameConfigsSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.services)[':serviceName']['configs:submit']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.services[':serviceName']['configs:submit'].$post(args, options),
      )
    },
  })
}

export function usePostV1ServicesServiceNameConfigsSubmit<
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
                  ReturnType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ServicesServiceNameConfigsSubmitMutationOptions<
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

export function getV1ServicesServiceNameRolloutsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>
  >,
) {
  return ['v1', '/v1/services/:serviceName/rollouts', toValue(args)] as const
}

export function getV1ServicesServiceNameRolloutsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesServiceNameRolloutsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services[':serviceName'].rollouts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServicesServiceNameRollouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ServicesServiceNameRolloutsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicesServiceNameRolloutsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesServiceNameRolloutsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services[':serviceName'].rollouts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ServicesServiceNameRolloutsMutationKey() {
  return ['v1', '/v1/services/:serviceName/rollouts', 'POST'] as const
}

export function getPostV1ServicesServiceNameRolloutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicesServiceNameRolloutsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$post']>,
    ) {
      return parseResponse(client.v1.services[':serviceName'].rollouts.$post(args, options))
    },
  })
}

export function usePostV1ServicesServiceNameRollouts<
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
                  ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ServicesServiceNameRolloutsMutationOptions<
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

export function getV1ServicesServiceNameRolloutsRolloutIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']>
  >,
) {
  return ['v1', '/v1/services/:serviceName/rollouts/:rolloutId', toValue(args)] as const
}

export function getV1ServicesServiceNameRolloutsRolloutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServicesServiceNameRolloutsRolloutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.services[':serviceName'].rollouts[':rolloutId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServicesServiceNameRolloutsRolloutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']>
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
                    (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
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
                    (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ServicesServiceNameRolloutsRolloutIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicesServiceNameRolloutsRolloutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServicesServiceNameRolloutsRolloutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.services[':serviceName'].rollouts[':rolloutId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ServicesServiceNameUndeleteMutationKey() {
  return ['v1', '/v1/services/:serviceName:undelete', 'POST'] as const
}

export function getPostV1ServicesServiceNameUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.services)[':serviceName:undelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.services)[':serviceName:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicesServiceNameUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.services)[':serviceName:undelete']['$post']>,
    ) {
      return parseResponse(client.v1.services[':serviceName:undelete'].$post(args, options))
    },
  })
}

export function usePostV1ServicesServiceNameUndelete<
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
                Awaited<ReturnType<(typeof client.v1.services)[':serviceName:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.services)[':serviceName:undelete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ServicesServiceNameUndeleteMutationOptions<
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

export function getPostV1ServicesGenerateConfigReportMutationKey() {
  return ['v1', '/v1/services:generateConfigReport', 'POST'] as const
}

export function getPostV1ServicesGenerateConfigReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['services:generateConfigReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['services:generateConfigReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicesGenerateConfigReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['services:generateConfigReport']['$post']>,
    ) {
      return parseResponse(client.v1['services:generateConfigReport'].$post(args, options))
    },
  })
}

export function usePostV1ServicesGenerateConfigReport<
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
                Awaited<ReturnType<(typeof client.v1)['services:generateConfigReport']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['services:generateConfigReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ServicesGenerateConfigReportMutationOptions<
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

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ResourceGetIamPolicyMutationKey() {
  return ['v1', '/v1/:resource:getIamPolicy', 'POST'] as const
}

export function getPostV1ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ResourceSetIamPolicyMutationKey() {
  return ['v1', '/v1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ResourceTestIamPermissionsMutationKey() {
  return ['v1', '/v1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV1ResourceTestIamPermissions<
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
                Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ResourceTestIamPermissionsMutationOptions<
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
