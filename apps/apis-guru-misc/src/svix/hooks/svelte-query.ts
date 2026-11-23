import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1AppIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.app.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/', keyArgs] as const
}

export function getApiV1AppIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.app.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppIndexQueryKey>
  >({
    queryKey: getApiV1AppIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AppIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.app.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AppIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV1AppIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.app.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/', keyArgs] as const
}

export function getApiV1AppAppIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AppAppIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiV1AppAppIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AppAppIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiV1AppAppIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1AppAppIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id/', keyArgs] as const
}

export function getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdAttemptEndpointEndpointIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdAttemptEndpointEndpointIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/attempt/msg/:msg_id/', keyArgs] as const
}

export function getApiV1AppAppIdAttemptMsgMsgIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdAttemptMsgMsgIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].attempt.msg[':msg_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdAttemptMsgMsgIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdAttemptMsgMsgIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1AppAppIdEndpointIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdEndpointIndex<
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
                ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppAppIdEndpointIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointEndpointIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointEndpointIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointEndpointIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV1AppAppIdEndpointEndpointIdIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AppAppIdEndpointEndpointIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiV1AppAppIdEndpointEndpointIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1AppAppIdEndpointEndpointIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointEndpointIdHeadersIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointEndpointIdHeadersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV1AppAppIdEndpointEndpointIdHeadersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiV1AppAppIdEndpointEndpointIdHeadersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/msg/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointEndpointIdMsgIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointEndpointIdMsgIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdEndpointEndpointIdRecoverIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointEndpointIdSecretIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointEndpointIdSecretIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/stats/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointEndpointIdStatsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointEndpointIdStatsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/transformation/', keyArgs] as const
}

export function getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdEndpointEndpointIdTransformationIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdEndpointEndpointIdTransformationIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiV1AppAppIdEndpointEndpointIdTransformationIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdIntegrationIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/integration/', keyArgs] as const
}

export function getApiV1AppAppIdIntegrationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdIntegrationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdIntegrationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1AppAppIdIntegrationIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdIntegrationIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdIntegrationIndex<
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
                ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppAppIdIntegrationIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdIntegrationIntegIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', keyArgs] as const
}

export function getApiV1AppAppIdIntegrationIntegIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdIntegrationIntegIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdIntegrationIntegIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdIntegrationIntegIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV1AppAppIdIntegrationIntegIdIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AppAppIdIntegrationIntegIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiV1AppAppIdIntegrationIntegIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1AppAppIdIntegrationIntegIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/key/', keyArgs] as const
}

export function getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].integration[':integ_id'].key.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdIntegrationIntegIdKeyIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdIntegrationIntegIdKeyIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdMsgIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/', keyArgs] as const
}

export function getApiV1AppAppIdMsgIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdMsgIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdMsgIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdMsgIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdMsgIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AppAppIdMsgIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdMsgMsgIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdIndexQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdMsgMsgIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdMsgMsgIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdAttemptIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdAttemptIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdMsgMsgIdAttemptIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdMsgMsgIdAttemptIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiV1AppAppIdMsgMsgIdContentIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1AppAppIdMsgMsgIdContentIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdEndpointIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdEndpointIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AppAppIdMsgMsgIdEndpointIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdMsgMsgIdEndpointIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/attempt/', keyArgs] as const
}

export function getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].attempt.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiV1AuthAppPortalAccessAppIdIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AuthAppPortalAccessAppIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiV1AuthAppAppIdExpireAllIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AuthAppAppIdExpireAllIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiV1AuthDashboardAccessAppIdIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AuthDashboardAccessAppIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiV1AuthLogoutIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1AuthLogoutIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1BackgroundTaskIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/background-task/', keyArgs] as const
}

export function getApiV1BackgroundTaskIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BackgroundTaskIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['background-task'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BackgroundTaskIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BackgroundTaskIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1BackgroundTaskTaskIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/background-task/:task_id/', keyArgs] as const
}

export function getApiV1BackgroundTaskTaskIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BackgroundTaskTaskIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['background-task'][':task_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BackgroundTaskTaskIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['background-task'][':task_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BackgroundTaskTaskIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EventTypeIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/event-type/', keyArgs] as const
}

export function getApiV1EventTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1EventTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['event-type'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EventTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1EventTypeIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV1EventTypeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1EventTypeIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1EventTypeEventTypeNameIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/event-type/:event_type_name/', keyArgs] as const
}

export function getApiV1EventTypeEventTypeNameIndexQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1EventTypeEventTypeNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['event-type'][':event_type_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EventTypeEventTypeNameIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1EventTypeEventTypeNameIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1EventTypeEventTypeNameIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV1EventTypeEventTypeNameIndex<
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
                  (typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1EventTypeEventTypeNameIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiV1EventTypeEventTypeNameIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1EventTypeEventTypeNameIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1HealthIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.health.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/health/', keyArgs] as const
}

export function getApiV1HealthIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.health.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthIndexQueryKey>
  >({
    queryKey: getApiV1HealthIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.health.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1HealthIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.health.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1HealthIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1HealthIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
