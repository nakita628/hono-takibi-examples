import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1OperationsQueryKey(args: InferRequestType<typeof client.v1.operations.$get>) {
  return ['v1', '/v1/operations', args] as const
}

export function getV1OperationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.operations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OperationsQueryKey>
  >({
    queryKey: getV1OperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.operations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Operations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.operations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.operations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OperationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ServicesQueryKey(args: InferRequestType<typeof client.v1.services.$get>) {
  return ['v1', '/v1/services', args] as const
}

export function getV1ServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ServicesQueryKey>
  >({
    queryKey: getV1ServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Services<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.services.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.services.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ServicesServiceNameQueryKey(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>,
) {
  return ['v1', '/v1/services/:serviceName', args] as const
}

export function getV1ServicesServiceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServicesServiceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services[':serviceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServicesServiceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServicesServiceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV1ServicesServiceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ServicesServiceNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ServicesServiceNameConfigQueryKey(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>,
) {
  return ['v1', '/v1/services/:serviceName/config', args] as const
}

export function getV1ServicesServiceNameConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServicesServiceNameConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services[':serviceName'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServicesServiceNameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServicesServiceNameConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ServicesServiceNameConfigsQueryKey(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>,
) {
  return ['v1', '/v1/services/:serviceName/configs', args] as const
}

export function getV1ServicesServiceNameConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServicesServiceNameConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services[':serviceName'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServicesServiceNameConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServicesServiceNameConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1ServicesServiceNameConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicesServiceNameConfigsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ServicesServiceNameConfigsConfigIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']
  >,
) {
  return ['v1', '/v1/services/:serviceName/configs/:configId', args] as const
}

export function getV1ServicesServiceNameConfigsConfigIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServicesServiceNameConfigsConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services[':serviceName'].configs[':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServicesServiceNameConfigsConfigId<
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
  args: () => InferRequestType<
    (typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ServicesServiceNameConfigsConfigIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServicesServiceNameConfigsConfigIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1ServicesServiceNameConfigsSubmit<
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
                ReturnType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicesServiceNameConfigsSubmitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ServicesServiceNameRolloutsQueryKey(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>,
) {
  return ['v1', '/v1/services/:serviceName/rollouts', args] as const
}

export function getV1ServicesServiceNameRolloutsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServicesServiceNameRolloutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services[':serviceName'].rollouts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServicesServiceNameRollouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServicesServiceNameRolloutsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1ServicesServiceNameRollouts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicesServiceNameRolloutsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ServicesServiceNameRolloutsRolloutIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
  >,
) {
  return ['v1', '/v1/services/:serviceName/rollouts/:rolloutId', args] as const
}

export function getV1ServicesServiceNameRolloutsRolloutIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServicesServiceNameRolloutsRolloutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.services[':serviceName'].rollouts[':rolloutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServicesServiceNameRolloutsRolloutId<
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
  args: () => InferRequestType<
    (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServicesServiceNameRolloutsRolloutIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1ServicesServiceNameUndelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicesServiceNameUndeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1ServicesGenerateConfigReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicesGenerateConfigReportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResourceTestIamPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
