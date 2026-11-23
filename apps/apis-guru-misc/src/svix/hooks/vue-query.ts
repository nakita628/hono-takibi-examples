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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1AppIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.app.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/', keyArgs] as const
}

export function getApiV1AppIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.app.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.app.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AppIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppIndexMutationKey() {
  return ['api', '/api/v1/app/', 'POST'] as const
}

export function getPostApiV1AppIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.app.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.app.index.$post>) {
      return parseResponse(client.api.v1.app.index.$post(args, options))
    },
  })
}

export function usePostApiV1AppIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.app.index.$post>,
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
  const mutationDefaults = getPostApiV1AppIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AppAppIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/', keyArgs] as const
}

export function getApiV1AppAppIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AppAppIdIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/', 'PUT'] as const
}

export function getPutApiV1AppAppIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$put']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].index.$put(args, options))
    },
  })
}

export function usePutApiV1AppAppIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$put']>,
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
  const mutationDefaults = getPutApiV1AppAppIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1AppAppIdIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1AppAppIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1AppAppIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id/', keyArgs] as const
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdAttemptEndpointEndpointIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/attempt/msg/:msg_id/', keyArgs] as const
}

export function getApiV1AppAppIdAttemptMsgMsgIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.msg[':msg_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdAttemptMsgMsgIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].attempt.msg[':msg_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdEndpointIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>
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
                  ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdEndpointIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].endpoint.index.$post(args, options))
    },
  })
}

export function usePostApiV1AppAppIdEndpointIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>,
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointIndexMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointEndpointIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AppAppIdEndpointEndpointIdIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', 'PUT'] as const
}

export function getPutApiV1AppAppIdEndpointEndpointIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdEndpointEndpointIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$put(args, options),
      )
    },
  })
}

export function usePutApiV1AppAppIdEndpointEndpointIdIndex<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
          >,
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
  const mutationDefaults = getPutApiV1AppAppIdEndpointEndpointIdIndexMutationOptions<
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

export function getDeleteApiV1AppAppIdEndpointEndpointIdIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdEndpointEndpointIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdEndpointEndpointIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdEndpointEndpointIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1AppAppIdEndpointEndpointIdIndexMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointEndpointIdHeadersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', 'PUT'] as const
}

export function getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$put(args, options),
      )
    },
  })
}

export function usePutApiV1AppAppIdEndpointEndpointIdHeadersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
          >,
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
  const mutationDefaults = getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationOptions<
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

export function getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', 'PATCH'] as const
}

export function getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AppAppIdEndpointEndpointIdHeadersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
          >,
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
  const mutationDefaults = getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/msg/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointEndpointIdMsgIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/recover/', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].recover.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AppAppIdEndpointEndpointIdRecoverIndex<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexMutationOptions<
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

export function getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/replay-missing/', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id']['replay-missing'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AppAppIdEndpointEndpointIdReplayMissingIndex<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointEndpointIdSecretIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/rotate/', 'POST'] as const
}

export function getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.rotate.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AppAppIdEndpointEndpointIdSecretRotateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexMutationOptions<
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

export function getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/stats/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointEndpointIdStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/transformation/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1AppAppIdEndpointEndpointIdTransformationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/transformation/', 'PATCH'] as const
}

export function getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1AppAppIdEndpointEndpointIdTransformationIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
          >,
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
  const mutationDefaults =
    getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexMutationOptions<
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

export function getApiV1AppAppIdIntegrationIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/integration/', keyArgs] as const
}

export function getApiV1AppAppIdIntegrationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdIntegrationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdIntegrationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
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
                  ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdIntegrationIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdIntegrationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdIntegrationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].integration.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdIntegrationIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/integration/', 'POST'] as const
}

export function getPostApiV1AppAppIdIntegrationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdIntegrationIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['integration']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].integration.index.$post(args, options))
    },
  })
}

export function usePostApiV1AppAppIdIntegrationIndex<
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
                  ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>,
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
  const mutationDefaults = getPostApiV1AppAppIdIntegrationIndexMutationOptions<
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

export function getApiV1AppAppIdIntegrationIntegIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', keyArgs] as const
}

export function getApiV1AppAppIdIntegrationIntegIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdIntegrationIntegIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdIntegrationIntegIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdIntegrationIntegIdIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdIntegrationIntegIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdIntegrationIntegIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AppAppIdIntegrationIntegIdIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', 'PUT'] as const
}

export function getPutApiV1AppAppIdIntegrationIntegIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppAppIdIntegrationIntegIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].index.$put(args, options),
      )
    },
  })
}

export function usePutApiV1AppAppIdIntegrationIntegIdIndex<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
          >,
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
  const mutationDefaults = getPutApiV1AppAppIdIntegrationIntegIdIndexMutationOptions<
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

export function getDeleteApiV1AppAppIdIntegrationIntegIdIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdIntegrationIntegIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdIntegrationIntegIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdIntegrationIntegIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1AppAppIdIntegrationIntegIdIndexMutationOptions<
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

export function getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/key/', keyArgs] as const
}

export function getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].key.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdIntegrationIntegIdKeyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].key.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/key/rotate/', 'POST'] as const
}

export function getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].key.rotate.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AppAppIdIntegrationIntegIdKeyRotateIndex<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexMutationOptions<
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

export function getApiV1AppAppIdMsgIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/msg/', keyArgs] as const
}

export function getApiV1AppAppIdMsgIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdMsgIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdMsgIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/', 'POST'] as const
}

export function getPostApiV1AppAppIdMsgIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdMsgIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>,
    ) {
      return parseResponse(client.api.v1.app[':app_id'].msg.index.$post(args, options))
    },
  })
}

export function usePostApiV1AppAppIdMsgIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>,
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
  const mutationDefaults = getPostApiV1AppAppIdMsgIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AppAppIdMsgMsgIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdMsgMsgIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdIndexQueryKey>
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
            ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdAttemptIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdMsgMsgIdAttemptIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/content/', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].content.index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
          >,
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
  const mutationDefaults =
    getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexMutationOptions<
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

export function getDeleteApiV1AppAppIdMsgMsgIdContentIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/content/', 'DELETE'] as const
}

export function getDeleteApiV1AppAppIdMsgMsgIdContentIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppAppIdMsgMsgIdContentIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].content.index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AppAppIdMsgMsgIdContentIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1AppAppIdMsgMsgIdContentIndexMutationOptions<
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

export function getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdEndpointIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppAppIdMsgMsgIdEndpointIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/attempt/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].attempt.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
    >
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
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
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey>
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
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].attempt.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexMutationKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/resend/', 'POST'] as const
}

export function getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].resend.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndex<
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
                  ReturnType<
                    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexMutationOptions<
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

export function getPostApiV1AuthAppPortalAccessAppIdIndexMutationKey() {
  return ['api', '/api/v1/auth/app-portal-access/:app_id/', 'POST'] as const
}

export function getPostApiV1AuthAppPortalAccessAppIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuthAppPortalAccessAppIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.auth['app-portal-access'][':app_id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AuthAppPortalAccessAppIdIndex<
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
                  ReturnType<
                    (typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AuthAppPortalAccessAppIdIndexMutationOptions<
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

export function getPostApiV1AuthAppAppIdExpireAllIndexMutationKey() {
  return ['api', '/api/v1/auth/app/:app_id/expire-all/', 'POST'] as const
}

export function getPostApiV1AuthAppAppIdExpireAllIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuthAppAppIdExpireAllIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.auth.app[':app_id']['expire-all'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AuthAppAppIdExpireAllIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AuthAppAppIdExpireAllIndexMutationOptions<
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

export function getPostApiV1AuthDashboardAccessAppIdIndexMutationKey() {
  return ['api', '/api/v1/auth/dashboard-access/:app_id/', 'POST'] as const
}

export function getPostApiV1AuthDashboardAccessAppIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuthDashboardAccessAppIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.auth['dashboard-access'][':app_id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AuthDashboardAccessAppIdIndex<
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
                  ReturnType<
                    (typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AuthDashboardAccessAppIdIndexMutationOptions<
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

export function getPostApiV1AuthLogoutIndexMutationKey() {
  return ['api', '/api/v1/auth/logout/', 'POST'] as const
}

export function getPostApiV1AuthLogoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.auth.logout.index.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.auth.logout.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuthLogoutIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.auth.logout.index.$post>) {
      return parseResponse(client.api.v1.auth.logout.index.$post(args, options))
    },
  })
}

export function usePostApiV1AuthLogoutIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.auth.logout.index.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.auth.logout.index.$post>,
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
  const mutationDefaults = getPostApiV1AuthLogoutIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BackgroundTaskIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/background-task/', keyArgs] as const
}

export function getApiV1BackgroundTaskIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BackgroundTaskIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['background-task'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BackgroundTaskIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BackgroundTaskIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BackgroundTaskIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BackgroundTaskIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['background-task'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BackgroundTaskTaskIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/background-task/:task_id/', keyArgs] as const
}

export function getApiV1BackgroundTaskTaskIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BackgroundTaskTaskIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['background-task'][':task_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BackgroundTaskTaskIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
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
                  ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BackgroundTaskTaskIdIndexQueryKey>
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
            ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BackgroundTaskTaskIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BackgroundTaskTaskIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['background-task'][':task_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EventTypeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/event-type/', keyArgs] as const
}

export function getApiV1EventTypeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EventTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['event-type'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EventTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EventTypeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EventTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['event-type'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1EventTypeIndexMutationKey() {
  return ['api', '/api/v1/event-type/', 'POST'] as const
}

export function getPostApiV1EventTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EventTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$post']>,
    ) {
      return parseResponse(client.api.v1['event-type'].index.$post(args, options))
    },
  })
}

export function usePostApiV1EventTypeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['event-type']['index']['$post']>,
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
  const mutationDefaults = getPostApiV1EventTypeIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EventTypeEventTypeNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/event-type/:event_type_name/', keyArgs] as const
}

export function getApiV1EventTypeEventTypeNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EventTypeEventTypeNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['event-type'][':event_type_name'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EventTypeEventTypeNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
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
                    (typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']
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
                    (typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EventTypeEventTypeNameIndexQueryKey>
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
            ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventTypeEventTypeNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EventTypeEventTypeNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['event-type'][':event_type_name'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1EventTypeEventTypeNameIndexMutationKey() {
  return ['api', '/api/v1/event-type/:event_type_name/', 'PUT'] as const
}

export function getPutApiV1EventTypeEventTypeNameIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1EventTypeEventTypeNameIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1['event-type'][':event_type_name'].index.$put(args, options),
      )
    },
  })
}

export function usePutApiV1EventTypeEventTypeNameIndex<
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
                  ReturnType<
                    (typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']
          >,
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
  const mutationDefaults = getPutApiV1EventTypeEventTypeNameIndexMutationOptions<
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

export function getDeleteApiV1EventTypeEventTypeNameIndexMutationKey() {
  return ['api', '/api/v1/event-type/:event_type_name/', 'DELETE'] as const
}

export function getDeleteApiV1EventTypeEventTypeNameIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EventTypeEventTypeNameIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1['event-type'][':event_type_name'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1EventTypeEventTypeNameIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1EventTypeEventTypeNameIndexMutationOptions<
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

export function getApiV1HealthIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.health.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/health/', keyArgs] as const
}

export function getApiV1HealthIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.health.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HealthIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.health.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HealthIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.health.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HealthIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HealthIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.health.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
