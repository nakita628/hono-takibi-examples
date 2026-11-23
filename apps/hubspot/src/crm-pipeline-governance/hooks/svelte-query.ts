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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
) {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', args] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
  args: () => InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCrmPipelinesRules202609ObjectTypeIdPipelineIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
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

export function createDeleteCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
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

export function createPatchCrmPipelinesRules202609ObjectTypeIdPipelineId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdMutationOptions<
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

export function createPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStart<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartMutationOptions<
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

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
  >,
) {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/approvals/:objectId',
    args,
  ] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals[
          ':objectId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectId<
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
  args: () => InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
  >,
) {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/stage-edit-permissions',
    args,
  ] as const
}

export function getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
          'stage-edit-permissions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
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
  args: () => InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryKey
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
      ...getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsMutationOptions<
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
