import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmPipelines202609ObjectTypeQueryKey(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType', args] as const
}

export function getCrmPipelines202609ObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelines202609ObjectTypeQueryKey>
  >({
    queryKey: getCrmPipelines202609ObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmPipelines202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmPipelines202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPipelines202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmPipelines202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmPipelines202609ObjectTypeMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType', 'POST'] as const
}

export function getPostCrmPipelines202609ObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmPipelines202609ObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>,
    ) {
      return parseResponse(client.crm.pipelines['2026-09'][':objectType'].$post(args, options))
    },
  })
}

export function usePostCrmPipelines202609ObjectType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmPipelines202609ObjectTypeMutationOptions<
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

export function getCrmPipelines202609ObjectTypePipelineIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', args] as const
}

export function getCrmPipelines202609ObjectTypePipelineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdQueryKey>
  >({
    queryKey: getCrmPipelines202609ObjectTypePipelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmPipelines202609ObjectTypePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPipelines202609ObjectTypePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmPipelines202609ObjectTypePipelineIdMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', 'PUT'] as const
}

export function getPutCrmPipelines202609ObjectTypePipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmPipelines202609ObjectTypePipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$put(args, options),
      )
    },
  })
}

export function usePutCrmPipelines202609ObjectTypePipelineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCrmPipelines202609ObjectTypePipelineIdMutationOptions<
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

export function getDeleteCrmPipelines202609ObjectTypePipelineIdMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', 'DELETE'] as const
}

export function getDeleteCrmPipelines202609ObjectTypePipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmPipelines202609ObjectTypePipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmPipelines202609ObjectTypePipelineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmPipelines202609ObjectTypePipelineIdMutationOptions<
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

export function getPatchCrmPipelines202609ObjectTypePipelineIdMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', 'PATCH'] as const
}

export function getPatchCrmPipelines202609ObjectTypePipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmPipelines202609ObjectTypePipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmPipelines202609ObjectTypePipelineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmPipelines202609ObjectTypePipelineIdMutationOptions<
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

export function getCrmPipelines202609ObjectTypePipelineIdAuditQueryKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/audit', args] as const
}

export function getCrmPipelines202609ObjectTypePipelineIdAuditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdAuditQueryKey>
  >({
    queryKey: getCrmPipelines202609ObjectTypePipelineIdAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].audit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmPipelines202609ObjectTypePipelineIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdAuditQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPipelines202609ObjectTypePipelineIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdAuditQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmPipelines202609ObjectTypePipelineIdStagesQueryKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages', args] as const
}

export function getCrmPipelines202609ObjectTypePipelineIdStagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesQueryKey>
  >({
    queryKey: getCrmPipelines202609ObjectTypePipelineIdStagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmPipelines202609ObjectTypePipelineIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdStagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPipelines202609ObjectTypePipelineIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdStagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmPipelines202609ObjectTypePipelineIdStagesMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages', 'POST'] as const
}

export function getPostCrmPipelines202609ObjectTypePipelineIdStagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmPipelines202609ObjectTypePipelineIdStagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$post(args, options),
      )
    },
  })
}

export function usePostCrmPipelines202609ObjectTypePipelineIdStages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmPipelines202609ObjectTypePipelineIdStagesMutationOptions<
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

export function getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId', args] as const
}

export function getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryKey>
  >({
    queryKey: getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdStagesStageIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId', 'PUT'] as const
}

export function getPutCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationOptions<
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

export function getDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationKey() {
  return [
    'crm',
    '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId',
    'DELETE',
  ] as const
}

export function getDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationOptions<
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

export function getPatchCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId', 'PATCH'] as const
}

export function getPatchCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchCrmPipelines202609ObjectTypePipelineIdStagesStageIdMutationOptions<
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

export function getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
) {
  return [
    'crm',
    '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId/audit',
    args,
  ] as const
}

export function getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryKey>
  >({
    queryKey: getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].audit.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useCrmPipelines202609ObjectTypePipelineIdStagesStageIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPipelines202609ObjectTypePipelineIdStagesStageIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
