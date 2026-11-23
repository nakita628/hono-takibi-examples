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

export function getQueuesKey() {
  return ['queues'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getQueuesQueryKey() {
  return ['queues', '/queues'] as const
}

export function getQueuesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueuesQueryKey>
  >({
    queryKey: getQueuesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.queues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQueues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueuesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostQueuesMutationKey() {
  return ['queues', '/queues', 'POST'] as const
}

export function getPostQueuesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesMutationKey(),
    async mutationFn() {
      return parseResponse(client.queues.$post(undefined, options))
    },
  })
}

export function injectPostQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$post>>>>>,
        TError,
        void,
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
    const mutationDefaults = getPostQueuesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteQueuesQueueNameMutationKey() {
  return ['queues', '/queues/:queueName', 'DELETE'] as const
}

export function getDeleteQueuesQueueNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queueName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':queueName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueuesQueueNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queues)[':queueName']['$delete']>) {
      return parseResponse(client.queues[':queueName'].$delete(args, options))
    },
  })
}

export function injectDeleteQueuesQueueName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':queueName']['$delete']>,
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
    const mutationDefaults = getDeleteQueuesQueueNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQueuesQueueNameConfigQueryKey(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
) {
  return ['queues', '/queues/:queueName/config', args] as const
}

export function getQueuesQueueNameConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameConfigQueryKey>
  >({
    queryKey: getQueuesQueueNameConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queueName'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQueuesQueueNameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameConfigQueryKey>
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
      ...getQueuesQueueNameConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutQueuesQueueNameConfigMutationKey() {
  return ['queues', '/queues/:queueName/config', 'PUT'] as const
}

export function getPutQueuesQueueNameConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQueuesQueueNameConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
    ) {
      return parseResponse(client.queues[':queueName'].config.$put(args, options))
    },
  })
}

export function injectPutQueuesQueueNameConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
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
    const mutationDefaults = getPutQueuesQueueNameConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQueuesQueueNameDataQueueMessageIdQueryKey(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
) {
  return ['queues', '/queues/:queueName/data/:queueMessageId', args] as const
}

export function getQueuesQueueNameDataQueueMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameDataQueueMessageIdQueryKey>
  >({
    queryKey: getQueuesQueueNameDataQueueMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queueName'].data[':queueMessageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQueuesQueueNameDataQueueMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameDataQueueMessageIdQueryKey>
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
      ...getQueuesQueueNameDataQueueMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getQueuesQueueNameMessagesQueryKey(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
) {
  return ['queues', '/queues/:queueName/messages', args] as const
}

export function getQueuesQueueNameMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameMessagesQueryKey>
  >({
    queryKey: getQueuesQueueNameMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queueName'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQueuesQueueNameMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameMessagesQueryKey>
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
      ...getQueuesQueueNameMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostQueuesQueueNameMessagesMutationKey() {
  return ['queues', '/queues/:queueName/messages', 'POST'] as const
}

export function getPostQueuesQueueNameMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesQueueNameMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
    ) {
      return parseResponse(client.queues[':queueName'].messages.$post(args, options))
    },
  })
}

export function injectPostQueuesQueueNameMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
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
    const mutationDefaults = getPostQueuesQueueNameMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteQueuesQueueNameMessagesQueueMessageIdMutationKey() {
  return ['queues', '/queues/:queueName/messages/:queueMessageId', 'DELETE'] as const
}

export function getDeleteQueuesQueueNameMessagesQueueMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueuesQueueNameMessagesQueueMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.queues[':queueName'].messages[':queueMessageId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteQueuesQueueNameMessagesQueueMessageId<
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
                  (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
        >,
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
    const mutationDefaults = getDeleteQueuesQueueNameMessagesQueueMessageIdMutationOptions<
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
