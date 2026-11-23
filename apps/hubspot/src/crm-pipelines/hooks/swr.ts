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

export function getGetCrmPipelines202609ObjectTypeKey(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType', args] as const
}

export function useGetCrmPipelines202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmPipelines202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.pipelines['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelines202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmPipelines202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.pipelines['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmPipelines202609ObjectTypeKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType', 'POST'] as const
}

export function usePostCrmPipelines202609ObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmPipelines202609ObjectTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>
        },
      ) => parseResponse(client.crm.pipelines['2026-09'][':objectType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmPipelines202609ObjectTypePipelineIdKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', args] as const
}

export function useGetCrmPipelines202609ObjectTypePipelineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelines202609ObjectTypePipelineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmPipelines202609ObjectTypePipelineIdKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', 'PUT'] as const
}

export function usePutCrmPipelines202609ObjectTypePipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmPipelines202609ObjectTypePipelineIdKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmPipelines202609ObjectTypePipelineIdKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', 'DELETE'] as const
}

export function useDeleteCrmPipelines202609ObjectTypePipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmPipelines202609ObjectTypePipelineIdKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmPipelines202609ObjectTypePipelineIdKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId', 'PATCH'] as const
}

export function usePatchCrmPipelines202609ObjectTypePipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmPipelines202609ObjectTypePipelineIdKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmPipelines202609ObjectTypePipelineIdAuditKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/audit', args] as const
}

export function useGetCrmPipelines202609ObjectTypePipelineIdAudit<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdAuditKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].audit.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelines202609ObjectTypePipelineIdAudit<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdAuditKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].audit.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmPipelines202609ObjectTypePipelineIdStagesKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages', args] as const
}

export function useGetCrmPipelines202609ObjectTypePipelineIdStages<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdStagesKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelines202609ObjectTypePipelineIdStages<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdStagesKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmPipelines202609ObjectTypePipelineIdStagesKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages', 'POST'] as const
}

export function usePostCrmPipelines202609ObjectTypePipelineIdStages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmPipelines202609ObjectTypePipelineIdStagesKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
) {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId', args] as const
}

export function useGetCrmPipelines202609ObjectTypePipelineIdStagesStageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId', 'PUT'] as const
}

export function usePutCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey() {
  return [
    'crm',
    '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId',
    'DELETE',
  ] as const
}

export function useDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey() {
  return ['crm', '/crm/pipelines/2026-09/:objectType/:pipelineId/stages/:stageId', 'PATCH'] as const
}

export function usePatchCrmPipelines202609ObjectTypePipelineIdStagesStageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmPipelines202609ObjectTypePipelineIdStagesStageIdKey()
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
            (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditKey(
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

export function useGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdAudit<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[
            ':stageId'
          ].audit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdAudit<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditKey(args)
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
                (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
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
          client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[
            ':stageId'
          ].audit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
