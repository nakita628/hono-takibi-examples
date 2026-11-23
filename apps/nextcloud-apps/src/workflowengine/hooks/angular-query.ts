import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global', keyArgs] as const
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalQueryKey>
  >({
    queryKey: getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global', 'POST'] as const
}

export function getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$post(args, options),
      )
    },
  })
}

export function injectPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal<
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
                  (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id', keyArgs] as const
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id', 'PUT'] as const
}

export function getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$put(args, options),
      )
    },
  })
}

export function injectPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<
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
                  (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId<
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
                  (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user', keyArgs] as const
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserQueryKey>
  >({
    queryKey: getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user', 'POST'] as const
}

export function getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$post(args, options),
      )
    },
  })
}

export function injectPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser<
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
                  (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id', keyArgs] as const
}

export function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id', 'PUT'] as const
}

export function getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$put(args, options),
      )
    },
  })
}

export function injectPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<
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
                  (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId<
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
                  (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
