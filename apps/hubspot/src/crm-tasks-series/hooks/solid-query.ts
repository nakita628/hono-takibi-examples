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

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmTaskSeries202609MutationKey() {
  return ['crm', '/crm/task-series/2026-09', 'POST'] as const
}

export function getPostCrmTaskSeries202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm)['task-series']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmTaskSeries202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm)['task-series']['2026-09']['$post']>,
    ) {
      return parseResponse(client.crm['task-series']['2026-09'].$post(args, options))
    },
  })
}

export function createPostCrmTaskSeries202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm)['task-series']['2026-09']['$post']>,
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
    const mutationDefaults = getPostCrmTaskSeries202609MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCrmTaskSeries202609TaskIdQueryKey(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
) {
  return ['crm', '/crm/task-series/2026-09/:taskId', args] as const
}

export function getCrmTaskSeries202609TaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmTaskSeries202609TaskIdQueryKey>
  >({
    queryKey: getCrmTaskSeries202609TaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['task-series']['2026-09'][':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmTaskSeries202609TaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrmTaskSeries202609TaskIdQueryKey>
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
    return {
      ...getCrmTaskSeries202609TaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteCrmTaskSeries202609TaskIdMutationKey() {
  return ['crm', '/crm/task-series/2026-09/:taskId', 'DELETE'] as const
}

export function getDeleteCrmTaskSeries202609TaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmTaskSeries202609TaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>,
    ) {
      return parseResponse(client.crm['task-series']['2026-09'][':taskId'].$delete(args, options))
    },
  })
}

export function createDeleteCrmTaskSeries202609TaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>,
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
    const mutationDefaults = getDeleteCrmTaskSeries202609TaskIdMutationOptions<
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

export function getPatchCrmTaskSeries202609TaskIdMutationKey() {
  return ['crm', '/crm/task-series/2026-09/:taskId', 'PATCH'] as const
}

export function getPatchCrmTaskSeries202609TaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmTaskSeries202609TaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>,
    ) {
      return parseResponse(client.crm['task-series']['2026-09'][':taskId'].$patch(args, options))
    },
  })
}

export function createPatchCrmTaskSeries202609TaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>,
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
    const mutationDefaults = getPatchCrmTaskSeries202609TaskIdMutationOptions<
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
