import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global', keyArgs] as const
}

export function useGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global', 'POST'] as const
}

export function usePostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalKey()
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
            (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id', keyArgs] as const
}

export function useGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id', 'PUT'] as const
}

export function usePutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user', keyArgs] as const
}

export function useGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user', 'POST'] as const
}

export function usePostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserKey()
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
            (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id', keyArgs] as const
}

export function useGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
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
        ? getGetOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
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
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id', 'PUT'] as const
}

export function usePutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
