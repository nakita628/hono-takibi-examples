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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
    >
  >,
) {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', toValue(args)] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCrmPipelinesRules202609ObjectTypeIdPipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey>
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
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationKey() {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', 'PUT'] as const
}

export function getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
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
  const mutationDefaults = getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
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

export function getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationKey() {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', 'DELETE'] as const
}

export function getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
                      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
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
  const mutationDefaults = getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
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

export function getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationKey() {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', 'PATCH'] as const
}

export function getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
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
  const mutationDefaults = getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
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

export function getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartMutationKey() {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/approvals/start',
    'POST',
  ] as const
}

export function getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][
          ':pipelineId'
        ].approvals.start.$post(args, options),
      )
    },
  })
}

export function usePostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStart<
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
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
    getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartMutationOptions<
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

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/approvals/:objectId',
    toValue(args),
  ] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals[
          ':objectId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey
          >
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
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals[
            ':objectId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/stage-edit-permissions',
    toValue(args),
  ] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
          'stage-edit-permissions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey
          >
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
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
            'stage-edit-permissions'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsMutationKey() {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/stage-edit-permissions',
    'PUT',
  ] as const
}

export function getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
          'stage-edit-permissions'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
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
                    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
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
    getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsMutationOptions<
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
