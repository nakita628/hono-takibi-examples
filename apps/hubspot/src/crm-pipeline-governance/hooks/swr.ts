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

export function getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdKey(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
) {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', args] as const
}

export function useGetCrmPipelinesRules202609ObjectTypeIdPipelineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdKey(args)
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
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
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
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelinesRules202609ObjectTypeIdPipelineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdKey(args)
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
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
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
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdKey() {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', 'PUT'] as const
}

export function usePutCrmPipelinesRules202609ObjectTypeIdPipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdKey()
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
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdKey() {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', 'DELETE'] as const
}

export function useDeleteCrmPipelinesRules202609ObjectTypeIdPipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmPipelinesRules202609ObjectTypeIdPipelineIdKey()
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
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdKey() {
  return ['crm', '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId', 'PATCH'] as const
}

export function usePatchCrmPipelinesRules202609ObjectTypeIdPipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmPipelinesRules202609ObjectTypeIdPipelineIdKey()
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
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartKey() {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/approvals/start',
    'POST',
  ] as const
}

export function usePostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartKey()
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
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][
            ':pipelineId'
          ].approvals.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdKey(
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

export function useGetCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdKey(args)
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
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
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
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals[
            ':objectId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdKey(args)
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
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
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
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals[
            ':objectId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsKey(
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

export function useGetCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsKey(args)
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
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
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
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
            'stage-edit-permissions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsKey(args)
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
                (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
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
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
            'stage-edit-permissions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsKey() {
  return [
    'crm',
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/stage-edit-permissions',
    'PUT',
  ] as const
}

export function usePutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsKey()
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
            (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
            'stage-edit-permissions'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
