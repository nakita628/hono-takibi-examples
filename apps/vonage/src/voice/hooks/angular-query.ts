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

export function getUuidKey() {
  return ['{uuid}'] as const
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.index.$post>) {
      return parseResponse(client.index.$post(args, options))
    },
  })
}

export function injectPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        InferRequestType<typeof client.index.$post>,
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
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUuidQueryKey(args: InferRequestType<(typeof client)[':uuid']['$get']>) {
  return [':uuid', '/:uuid', args] as const
}

export function getUuidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':uuid']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUuidQueryKey>
  >({
    queryKey: getUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutUuidMutationKey() {
  return [':uuid', '/:uuid', 'PUT'] as const
}

export function getPutUuidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['$put']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':uuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':uuid']['$put']>) {
      return parseResponse(client[':uuid'].$put(args, options))
    },
  })
}

export function injectPutUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['$put']>>>>
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':uuid']['$put']>,
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
    const mutationDefaults = getPutUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUuidDtmfMutationKey() {
  return [':uuid', '/:uuid/dtmf', 'PUT'] as const
}

export function getPutUuidDtmfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['dtmf']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':uuid']['dtmf']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUuidDtmfMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':uuid']['dtmf']['$put']>) {
      return parseResponse(client[':uuid'].dtmf.$put(args, options))
    },
  })
}

export function injectPutUuidDtmf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['dtmf']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':uuid']['dtmf']['$put']>,
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
    const mutationDefaults = getPutUuidDtmfMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUuidStreamMutationKey() {
  return [':uuid', '/:uuid/stream', 'PUT'] as const
}

export function getPutUuidStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['stream']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':uuid']['stream']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUuidStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':uuid']['stream']['$put']>) {
      return parseResponse(client[':uuid'].stream.$put(args, options))
    },
  })
}

export function injectPutUuidStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['stream']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':uuid']['stream']['$put']>,
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
    const mutationDefaults = getPutUuidStreamMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUuidStreamMutationKey() {
  return [':uuid', '/:uuid/stream', 'DELETE'] as const
}

export function getDeleteUuidStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['stream']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':uuid']['stream']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUuidStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':uuid']['stream']['$delete']>) {
      return parseResponse(client[':uuid'].stream.$delete(args, options))
    },
  })
}

export function injectDeleteUuidStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['stream']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':uuid']['stream']['$delete']>,
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
    const mutationDefaults = getDeleteUuidStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUuidTalkMutationKey() {
  return [':uuid', '/:uuid/talk', 'PUT'] as const
}

export function getPutUuidTalkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['talk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':uuid']['talk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUuidTalkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':uuid']['talk']['$put']>) {
      return parseResponse(client[':uuid'].talk.$put(args, options))
    },
  })
}

export function injectPutUuidTalk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['talk']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':uuid']['talk']['$put']>,
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
    const mutationDefaults = getPutUuidTalkMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUuidTalkMutationKey() {
  return [':uuid', '/:uuid/talk', 'DELETE'] as const
}

export function getDeleteUuidTalkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['talk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':uuid']['talk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUuidTalkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':uuid']['talk']['$delete']>) {
      return parseResponse(client[':uuid'].talk.$delete(args, options))
    },
  })
}

export function injectDeleteUuidTalk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':uuid']['talk']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':uuid']['talk']['$delete']>,
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
    const mutationDefaults = getDeleteUuidTalkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
