import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmTaskSeries202609Key() {
  return ['crm', '/crm/task-series/2026-09', 'POST'] as const
}

export function usePostCrmTaskSeries202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm)['task-series']['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmTaskSeries202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm)['task-series']['2026-09']['$post']> },
      ) => parseResponse(client.crm['task-series']['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmTaskSeries202609TaskIdKey(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
) {
  return ['crm', '/crm/task-series/2026-09/:taskId', args] as const
}

export function useGetCrmTaskSeries202609TaskId<TError = unknown>(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
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
        ? getGetCrmTaskSeries202609TaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm['task-series']['2026-09'][':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmTaskSeries202609TaskId<TError = unknown>(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
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
        ? getGetCrmTaskSeries202609TaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm['task-series']['2026-09'][':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmTaskSeries202609TaskIdKey() {
  return ['crm', '/crm/task-series/2026-09/:taskId', 'DELETE'] as const
}

export function useDeleteCrmTaskSeries202609TaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmTaskSeries202609TaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>
        },
      ) =>
        parseResponse(client.crm['task-series']['2026-09'][':taskId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmTaskSeries202609TaskIdKey() {
  return ['crm', '/crm/task-series/2026-09/:taskId', 'PATCH'] as const
}

export function usePatchCrmTaskSeries202609TaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmTaskSeries202609TaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>
        },
      ) =>
        parseResponse(client.crm['task-series']['2026-09'][':taskId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
