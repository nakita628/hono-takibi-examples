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

export function getV1BrokersQueryKey(args: InferRequestType<typeof client.v1.brokers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/brokers', keyArgs] as const
}

export function getV1BrokersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.brokers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BrokersQueryKey>
  >({
    queryKey: getV1BrokersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.brokers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Brokers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.brokers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrokersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BrokersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Brokers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.brokers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.brokers.$post>,
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
    const mutationDefaults = getPostV1BrokersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ConfigurationsQueryKey(
  args: InferRequestType<typeof client.v1.configurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations', keyArgs] as const
}

export function getV1ConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.configurations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigurationsQueryKey>
  >({
    queryKey: getV1ConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configurations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Configurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.configurations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConfigurationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Configurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.configurations.$post>,
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
    const mutationDefaults = getPostV1ConfigurationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resource-arn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >({
    queryKey: getV1TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags[':resource-arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1BrokersBrokerIdUsersUsernameQueryKey(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/brokers/:broker-id/users/:username', keyArgs] as const
}

export function getV1BrokersBrokerIdUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1BrokersBrokerIdUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.brokers[':broker-id'].users[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BrokersBrokerIdUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1BrokersBrokerIdUsersUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1BrokersBrokerIdUsersUsername<
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
                ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>,
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
    const mutationDefaults = getPutV1BrokersBrokerIdUsersUsernameMutationOptions<
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

export function injectPostV1BrokersBrokerIdUsersUsername<
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
                ReturnType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']>,
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
    const mutationDefaults = getPostV1BrokersBrokerIdUsersUsernameMutationOptions<
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

export function injectDeleteV1BrokersBrokerIdUsersUsername<
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
                  (typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']>,
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
    const mutationDefaults = getDeleteV1BrokersBrokerIdUsersUsernameMutationOptions<
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

export function getV1BrokersBrokerIdQueryKey(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/brokers/:broker-id', keyArgs] as const
}

export function getV1BrokersBrokerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokersBrokerIdQueryKey>
  >({
    queryKey: getV1BrokersBrokerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.brokers[':broker-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BrokersBrokerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrokersBrokerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BrokersBrokerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutV1BrokersBrokerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1BrokersBrokerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV1BrokersBrokerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1BrokersBrokerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV1TagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
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

export function getV1BrokerEngineTypesQueryKey(
  args: InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/broker-engine-types', keyArgs] as const
}

export function getV1BrokerEngineTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrokerEngineTypesQueryKey>
  >({
    queryKey: getV1BrokerEngineTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['broker-engine-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BrokerEngineTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['broker-engine-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrokerEngineTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BrokerEngineTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1BrokerInstanceOptionsQueryKey(
  args: InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/broker-instance-options', keyArgs] as const
}

export function getV1BrokerInstanceOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['broker-instance-options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1BrokerInstanceOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['broker-instance-options'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BrokerInstanceOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['broker-instance-options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1BrokerInstanceOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ConfigurationsConfigurationIdQueryKey(
  args: InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations/:configuration-id', keyArgs] as const
}

export function getV1ConfigurationsConfigurationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConfigurationsConfigurationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configurations[':configuration-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConfigurationsConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configurations)[':configuration-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ConfigurationsConfigurationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1ConfigurationsConfigurationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConfigurationsConfigurationIdMutationOptions<
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

export function getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey(
  args: InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/configurations/:configuration-id/revisions/:configuration-revision',
    keyArgs,
  ] as const
}

export function getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configurations[':configuration-id'].revisions[':configuration-revision'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1ConfigurationsConfigurationIdRevisionsConfigurationRevision<
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
  args: () => InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ConfigurationsConfigurationIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations/:configuration-id/revisions', keyArgs] as const
}

export function getV1ConfigurationsConfigurationIdRevisionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConfigurationsConfigurationIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configurations[':configuration-id'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConfigurationsConfigurationIdRevisions<
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
  args: () => InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ConfigurationsConfigurationIdRevisionsQueryKey>
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
      ...getV1ConfigurationsConfigurationIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1BrokersBrokerIdUsersQueryKey(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/brokers/:broker-id/users', keyArgs] as const
}

export function getV1BrokersBrokerIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1BrokersBrokerIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.brokers[':broker-id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BrokersBrokerIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1BrokersBrokerIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1BrokersBrokerIdPromote<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BrokersBrokerIdPromoteMutationOptions<
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

export function injectPostV1BrokersBrokerIdReboot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BrokersBrokerIdRebootMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
