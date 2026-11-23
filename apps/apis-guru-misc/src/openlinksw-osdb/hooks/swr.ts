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

export function getGetApiV1ActionsServiceIdKey(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
) {
  return ['api', '/api/v1/actions/:serviceId', args] as const
}

export function useGetApiV1ActionsServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
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
        ? getGetApiV1ActionsServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.actions[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ActionsServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
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
        ? getGetApiV1ActionsServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.actions[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ActionsServiceIdActionIdKey(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
) {
  return ['api', '/api/v1/actions/:serviceId/:actionId', args] as const
}

export function useGetApiV1ActionsServiceIdActionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
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
        ? getGetApiV1ActionsServiceIdActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.actions[':serviceId'][':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ActionsServiceIdActionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
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
        ? getGetApiV1ActionsServiceIdActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.actions[':serviceId'][':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ActionsServiceIdActionIdExecKey() {
  return ['api', '/api/v1/actions/:serviceId/:actionId/exec', 'POST'] as const
}

export function usePostApiV1ActionsServiceIdActionIdExec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ActionsServiceIdActionIdExecKey()
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
            (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.actions[':serviceId'][':actionId'].exec.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ActionsServiceIdActionIdHelpKey(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>,
) {
  return ['api', '/api/v1/actions/:serviceId/:actionId/help', args] as const
}

export function useGetApiV1ActionsServiceIdActionIdHelp<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
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
        ? getGetApiV1ActionsServiceIdActionIdHelpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.actions[':serviceId'][':actionId'].help.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ActionsServiceIdActionIdHelp<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
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
        ? getGetApiV1ActionsServiceIdActionIdHelpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.actions[':serviceId'][':actionId'].help.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LoginKey() {
  return ['api', '/api/v1/login'] as const
}

export function useGetApiV1Login<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Login<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LogoutKey() {
  return ['api', '/api/v1/logout'] as const
}

export function useGetApiV1Logout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Logout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ServicesKey() {
  return ['api', '/api/v1/services'] as const
}

export function useGetApiV1Services<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ServicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Services<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ServicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.services.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ServicesKey() {
  return ['api', '/api/v1/services', 'POST'] as const
}

export function usePostApiV1Services<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.services.$post> }) =>
        parseResponse(client.api.v1.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ServicesServiceIdKey(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
) {
  return ['api', '/api/v1/services/:serviceId', args] as const
}

export function useGetApiV1ServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
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
        ? getGetApiV1ServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
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
        ? getGetApiV1ServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.services[':serviceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1ServicesServiceIdKey() {
  return ['api', '/api/v1/services/:serviceId', 'DELETE'] as const
}

export function useDeleteApiV1ServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']> },
      ) => parseResponse(client.api.v1.services[':serviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
