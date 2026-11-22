import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useSmsMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sms.messages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sms.messages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSmsMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsMessagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsMessagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsMessagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsMessagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeleteSmsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmsMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchSmsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sms.messages)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSmsMessagesIdMutationOptions<TError, TOnMutateResult>(
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
