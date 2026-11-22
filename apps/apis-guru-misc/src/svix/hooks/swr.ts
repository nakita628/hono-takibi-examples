import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV1AppIndexKey(
  args: InferRequestType<typeof client.api.v1.app.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/', keyArgs] as const
}

export function useGetApiV1AppIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.app.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.app.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppIndexKey() {
  return ['api', '/api/v1/app/', 'POST'] as const
}

export function usePostApiV1AppIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.app.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.app.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.app.index.$post> }) =>
        parseResponse(client.api.v1.app.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdIndexKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdIndexKey() {
  return ['api', '/api/v1/app/:app_id/', 'PUT'] as const
}

export function usePutApiV1AppAppIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$put']> },
      ) => parseResponse(client.api.v1.app[':app_id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdIndexKey() {
  return ['api', '/api/v1/app/:app_id/', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$delete']> },
      ) => parseResponse(client.api.v1.app[':app_id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdAttemptEndpointEndpointIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdAttemptEndpointEndpointIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdAttemptEndpointEndpointIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdAttemptEndpointEndpointIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdAttemptEndpointEndpointIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdAttemptMsgMsgIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/attempt/msg/:msg_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdAttemptMsgMsgIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdAttemptMsgMsgIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].attempt.msg[':msg_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdAttemptMsgMsgIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdAttemptMsgMsgIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].attempt.msg[':msg_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointIndexKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].endpoint.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].endpoint.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>
        },
      ) => parseResponse(client.api.v1.app[':app_id'].endpoint.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdEndpointEndpointIdIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', 'PUT'] as const
}

export function usePutApiV1AppAppIdEndpointEndpointIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdEndpointEndpointIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdEndpointEndpointIdIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdEndpointEndpointIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdEndpointEndpointIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdHeadersIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdHeadersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdHeadersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdHeadersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdHeadersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', 'PUT'] as const
}

export function usePutApiV1AppAppIdEndpointEndpointIdHeadersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdEndpointEndpointIdHeadersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/', 'PATCH'] as const
}

export function usePatchApiV1AppAppIdEndpointEndpointIdHeadersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AppAppIdEndpointEndpointIdHeadersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdMsgIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/msg/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdMsgIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdMsgIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdMsgIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdMsgIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/recover/', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointEndpointIdRecoverIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointEndpointIdRecoverIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].recover.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/replay-missing/', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointEndpointIdReplayMissingIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointEndpointIdReplayMissingIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id']['replay-missing'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdSecretIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdSecretIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdSecretIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdSecretIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdSecretIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/rotate/', 'POST'] as const
}

export function usePostApiV1AppAppIdEndpointEndpointIdSecretRotateIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdEndpointEndpointIdSecretRotateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.rotate.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdStatsIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/stats/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdStatsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdStatsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdStatsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdStatsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdEndpointEndpointIdTransformationIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/transformation/', keyArgs] as const
}

export function useGetApiV1AppAppIdEndpointEndpointIdTransformationIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdTransformationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdEndpointEndpointIdTransformationIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdEndpointEndpointIdTransformationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexKey() {
  return ['api', '/api/v1/app/:app_id/endpoint/:endpoint_id/transformation/', 'PATCH'] as const
}

export function usePatchApiV1AppAppIdEndpointEndpointIdTransformationIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AppAppIdEndpointEndpointIdTransformationIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdIntegrationIndexKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/integration/', keyArgs] as const
}

export function useGetApiV1AppAppIdIntegrationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIntegrationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].integration.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdIntegrationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIntegrationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].integration.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdIntegrationIndexKey() {
  return ['api', '/api/v1/app/:app_id/integration/', 'POST'] as const
}

export function usePostApiV1AppAppIdIntegrationIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdIntegrationIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration']['index']['$post']
          >
        },
      ) => parseResponse(client.api.v1.app[':app_id'].integration.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdIntegrationIntegIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdIntegrationIntegIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIntegrationIntegIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdIntegrationIntegIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIntegrationIntegIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppAppIdIntegrationIntegIdIndexKey() {
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', 'PUT'] as const
}

export function usePutApiV1AppAppIdIntegrationIntegIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppAppIdIntegrationIntegIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdIntegrationIntegIdIndexKey() {
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdIntegrationIntegIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdIntegrationIntegIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdIntegrationIntegIdKeyIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/key/', keyArgs] as const
}

export function useGetApiV1AppAppIdIntegrationIntegIdKeyIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIntegrationIntegIdKeyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].key.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdIntegrationIntegIdKeyIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdIntegrationIntegIdKeyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].key.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexKey() {
  return ['api', '/api/v1/app/:app_id/integration/:integ_id/key/rotate/', 'POST'] as const
}

export function usePostApiV1AppAppIdIntegrationIntegIdKeyRotateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdIntegrationIntegIdKeyRotateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].integration[':integ_id'].key.rotate.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgIndexKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/', keyArgs] as const
}

export function useGetApiV1AppAppIdMsgIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].msg.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.app[':app_id'].msg.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdMsgIndexKey() {
  return ['api', '/api/v1/app/:app_id/msg/', 'POST'] as const
}

export function usePostApiV1AppAppIdMsgIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdMsgIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>
        },
      ) => parseResponse(client.api.v1.app[':app_id'].msg.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdIndexKey(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdMsgMsgIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].msg[':msg_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.app[':app_id'].msg[':msg_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdAttemptIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/', keyArgs] as const
}

export function useGetApiV1AppAppIdMsgMsgIdAttemptIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdAttemptIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdAttemptIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdAttemptIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/', keyArgs] as const
}

export function useGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/content/', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].content.index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppAppIdMsgMsgIdContentIndexKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/content/', 'DELETE'] as const
}

export function useDeleteApiV1AppAppIdMsgMsgIdContentIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppAppIdMsgMsgIdContentIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].content.index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdEndpointIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/', keyArgs] as const
}

export function useGetApiV1AppAppIdMsgMsgIdEndpointIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdEndpointIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdEndpointIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdEndpointIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexKey(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/attempt/', keyArgs] as const
}

export function useGetApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].attempt.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].attempt.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexKey() {
  return ['api', '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/resend/', 'POST'] as const
}

export function usePostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].resend.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuthAppPortalAccessAppIdIndexKey() {
  return ['api', '/api/v1/auth/app-portal-access/:app_id/', 'POST'] as const
}

export function usePostApiV1AuthAppPortalAccessAppIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuthAppPortalAccessAppIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.auth['app-portal-access'][':app_id'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuthAppAppIdExpireAllIndexKey() {
  return ['api', '/api/v1/auth/app/:app_id/expire-all/', 'POST'] as const
}

export function usePostApiV1AuthAppAppIdExpireAllIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuthAppAppIdExpireAllIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.auth.app[':app_id']['expire-all'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuthDashboardAccessAppIdIndexKey() {
  return ['api', '/api/v1/auth/dashboard-access/:app_id/', 'POST'] as const
}

export function usePostApiV1AuthDashboardAccessAppIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuthDashboardAccessAppIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.auth['dashboard-access'][':app_id'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuthLogoutIndexKey() {
  return ['api', '/api/v1/auth/logout/', 'POST'] as const
}

export function usePostApiV1AuthLogoutIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.auth.logout.index.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.auth.logout.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuthLogoutIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.auth.logout.index.$post> },
      ) => parseResponse(client.api.v1.auth.logout.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BackgroundTaskIndexKey(
  args: InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/background-task/', keyArgs] as const
}

export function useGetApiV1BackgroundTaskIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BackgroundTaskIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['background-task'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BackgroundTaskIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BackgroundTaskIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['background-task']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['background-task'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BackgroundTaskTaskIdIndexKey(
  args: InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/background-task/:task_id/', keyArgs] as const
}

export function useGetApiV1BackgroundTaskTaskIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BackgroundTaskTaskIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['background-task'][':task_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BackgroundTaskTaskIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1BackgroundTaskTaskIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['background-task'][':task_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EventTypeIndexKey(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/event-type/', keyArgs] as const
}

export function useGetApiV1EventTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EventTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['event-type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EventTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EventTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['event-type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EventTypeIndexKey() {
  return ['api', '/api/v1/event-type/', 'POST'] as const
}

export function usePostApiV1EventTypeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['event-type']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['event-type']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EventTypeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['event-type']['index']['$post']> },
      ) => parseResponse(client.api.v1['event-type'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EventTypeEventTypeNameIndexKey(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/event-type/:event_type_name/', keyArgs] as const
}

export function useGetApiV1EventTypeEventTypeNameIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EventTypeEventTypeNameIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['event-type'][':event_type_name'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EventTypeEventTypeNameIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EventTypeEventTypeNameIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['event-type'][':event_type_name'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1EventTypeEventTypeNameIndexKey() {
  return ['api', '/api/v1/event-type/:event_type_name/', 'PUT'] as const
}

export function usePutApiV1EventTypeEventTypeNameIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EventTypeEventTypeNameIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['event-type'][':event_type_name'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EventTypeEventTypeNameIndexKey() {
  return ['api', '/api/v1/event-type/:event_type_name/', 'DELETE'] as const
}

export function useDeleteApiV1EventTypeEventTypeNameIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EventTypeEventTypeNameIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['event-type'][':event_type_name'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1HealthIndexKey(
  args: InferRequestType<typeof client.api.v1.health.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/health/', keyArgs] as const
}

export function useGetApiV1HealthIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.health.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1HealthIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1HealthIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.health.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1HealthIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.health.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
