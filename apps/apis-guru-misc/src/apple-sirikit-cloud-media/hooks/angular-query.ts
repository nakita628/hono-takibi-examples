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

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getIntentKey() {
  return ['intent'] as const
}

export function getQueuesKey() {
  return ['queues'] as const
}

export function getConfigurationQueryKey(args: InferRequestType<typeof client.configuration.$get>) {
  const { header: _, ...keyArgs } = args
  return ['configuration', '/configuration', keyArgs] as const
}

export function getConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.configuration.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationQueryKey>
  >({
    queryKey: getConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.configuration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.configuration.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigurationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostIntentAddMediaMutationKey() {
  return ['intent', '/intent/addMedia', 'POST'] as const
}

export function getPostIntentAddMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.addMedia.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.intent.addMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentAddMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intent.addMedia.$post>) {
      return parseResponse(client.intent.addMedia.$post(args, options))
    },
  })
}

export function injectPostIntentAddMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.addMedia.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.intent.addMedia.$post>,
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
    const mutationDefaults = getPostIntentAddMediaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIntentPlayMediaMutationKey() {
  return ['intent', '/intent/playMedia', 'POST'] as const
}

export function getPostIntentPlayMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.playMedia.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.intent.playMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentPlayMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intent.playMedia.$post>) {
      return parseResponse(client.intent.playMedia.$post(args, options))
    },
  })
}

export function injectPostIntentPlayMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intent.playMedia.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.intent.playMedia.$post>,
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
    const mutationDefaults = getPostIntentPlayMediaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIntentUpdateMediaAffinityMutationKey() {
  return ['intent', '/intent/updateMediaAffinity', 'POST'] as const
}

export function getPostIntentUpdateMediaAffinityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intent.updateMediaAffinity.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.intent.updateMediaAffinity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentUpdateMediaAffinityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intent.updateMediaAffinity.$post>) {
      return parseResponse(client.intent.updateMediaAffinity.$post(args, options))
    },
  })
}

export function injectPostIntentUpdateMediaAffinity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.intent.updateMediaAffinity.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.intent.updateMediaAffinity.$post>,
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
    const mutationDefaults = getPostIntentUpdateMediaAffinityMutationOptions<
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

export function getPostQueuesPlayMediaMutationKey() {
  return ['queues', '/queues/playMedia', 'POST'] as const
}

export function getPostQueuesPlayMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.playMedia.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.queues.playMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesPlayMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.queues.playMedia.$post>) {
      return parseResponse(client.queues.playMedia.$post(args, options))
    },
  })
}

export function injectPostQueuesPlayMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.queues.playMedia.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.queues.playMedia.$post>,
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
    const mutationDefaults = getPostQueuesPlayMediaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostQueuesUpdateActivityMutationKey() {
  return ['queues', '/queues/updateActivity', 'POST'] as const
}

export function getPostQueuesUpdateActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.queues.updateActivity.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.queues.updateActivity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesUpdateActivityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.queues.updateActivity.$post>) {
      return parseResponse(client.queues.updateActivity.$post(args, options))
    },
  })
}

export function injectPostQueuesUpdateActivity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.queues.updateActivity.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.queues.updateActivity.$post>,
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
    const mutationDefaults = getPostQueuesUpdateActivityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
