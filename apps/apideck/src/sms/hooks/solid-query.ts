import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSmsKey() {
  return ['sms'] as const
}

export function getSmsMessagesQueryKey(args: InferRequestType<typeof client.sms.messages.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sms', '/sms/messages', keyArgs] as const
}

export function getSmsMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sms.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsMessagesQueryKey>
  >({
    queryKey: getSmsMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sms.messages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSmsMessagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmsMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsMessagesMutationKey() {
  return ['sms', '/sms/messages', 'POST'] as const
}

export function getPostSmsMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sms.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.messages.$post>) {
      return parseResponse(client.sms.messages.$post(args, options))
    },
  })
}

export function createPostSmsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.messages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsMessagesIdQueryKey(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sms', '/sms/messages/:id', keyArgs] as const
}

export function getSmsMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsMessagesIdQueryKey>
  >({
    queryKey: getSmsMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.messages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sms.messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsMessagesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmsMessagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSmsMessagesIdMutationKey() {
  return ['sms', '/sms/messages/:id', 'DELETE'] as const
}

export function getDeleteSmsMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms.messages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmsMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms.messages)[':id']['$delete']>) {
      return parseResponse(client.sms.messages[':id'].$delete(args, options))
    },
  })
}

export function createDeleteSmsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms.messages)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms.messages)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmsMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSmsMessagesIdMutationKey() {
  return ['sms', '/sms/messages/:id', 'PATCH'] as const
}

export function getPatchSmsMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms.messages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSmsMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms.messages)[':id']['$patch']>) {
      return parseResponse(client.sms.messages[':id'].$patch(args, options))
    },
  })
}

export function createPatchSmsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms.messages)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms.messages)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSmsMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
