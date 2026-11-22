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

export function getV2alpha1Key() {
  return ['v2alpha1'] as const
}

export function getPostV2alpha1PipelinesRunMutationKey() {
  return ['v2alpha1', '/v2alpha1/pipelines:run', 'POST'] as const
}

export function getPostV2alpha1PipelinesRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha1)['pipelines:run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1PipelinesRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>) {
      return parseResponse(client.v2alpha1['pipelines:run'].$post(args, options))
    },
  })
}

export function injectPostV2alpha1PipelinesRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha1)['pipelines:run']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>,
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
    const mutationDefaults = getPostV2alpha1PipelinesRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2alpha1WorkersIdCheckInMutationKey() {
  return ['v2alpha1', '/v2alpha1/workers/:id:checkIn', 'POST'] as const
}

export function getPostV2alpha1WorkersIdCheckInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1WorkersIdCheckInMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
    ) {
      return parseResponse(client.v2alpha1.workers[':id:checkIn'].$post(args, options))
    },
  })
}

export function injectPostV2alpha1WorkersIdCheckIn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
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
    const mutationDefaults = getPostV2alpha1WorkersIdCheckInMutationOptions<
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

export function getPostV2alpha1IdCheckInMutationKey() {
  return ['v2alpha1', '/v2alpha1/:id:checkIn', 'POST'] as const
}

export function getPostV2alpha1IdCheckInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':id:checkIn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1IdCheckInMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>) {
      return parseResponse(client.v2alpha1[':id:checkIn'].$post(args, options))
    },
  })
}

export function injectPostV2alpha1IdCheckIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha1)[':id:checkIn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>,
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
    const mutationDefaults = getPostV2alpha1IdCheckInMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2alpha1NameQueryKey(
  args: InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
) {
  return ['v2alpha1', '/v2alpha1/:name', args] as const
}

export function getV2alpha1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alpha1NameQueryKey>
  >({
    queryKey: getV2alpha1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2alpha1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2alpha1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2alpha1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2alpha1NameCancelMutationKey() {
  return ['v2alpha1', '/v2alpha1/:name:cancel', 'POST'] as const
}

export function getPostV2alpha1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>) {
      return parseResponse(client.v2alpha1[':name:cancel'].$post(args, options))
    },
  })
}

export function injectPostV2alpha1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2alpha1)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV2alpha1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
