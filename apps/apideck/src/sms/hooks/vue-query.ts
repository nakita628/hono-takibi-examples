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

export function getSmsKey() {
  return ['sms'] as const
}

export function getSmsMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sms.messages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sms', '/sms/messages', keyArgs] as const
}

export function getSmsMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sms.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmsMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sms.messages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSmsMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sms.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>
          >,
          ReturnType<typeof getSmsMessagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmsMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sms.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.messages.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sms.messages)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sms', '/sms/messages/:id', keyArgs] as const
}

export function getSmsMessagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sms.messages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmsMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sms.messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmsMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sms.messages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSmsMessagesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms.messages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmsMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sms.messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
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
