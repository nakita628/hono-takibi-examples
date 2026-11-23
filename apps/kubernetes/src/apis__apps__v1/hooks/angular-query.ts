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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAppsV1IndexQueryKey() {
  return ['apis', '/apis/apps/v1/'] as const
}

export function getApisAppsV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1IndexQueryKey>
  >({
    queryKey: getApisAppsV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisAppsV1IndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApisAppsV1ControllerrevisionsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
) {
  return ['apis', '/apis/apps/v1/controllerrevisions', args] as const
}

export function getApisAppsV1ControllerrevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1ControllerrevisionsQueryKey>
  >({
    queryKey: getApisAppsV1ControllerrevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.controllerrevisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1Controllerrevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1ControllerrevisionsQueryKey>
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
      ...getApisAppsV1ControllerrevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1DaemonsetsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
) {
  return ['apis', '/apis/apps/v1/daemonsets', args] as const
}

export function getApisAppsV1DaemonsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1DaemonsetsQueryKey>
  >({
    queryKey: getApisAppsV1DaemonsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.daemonsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1Daemonsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1DaemonsetsQueryKey>
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
      ...getApisAppsV1DaemonsetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1DeploymentsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
) {
  return ['apis', '/apis/apps/v1/deployments', args] as const
}

export function getApisAppsV1DeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1DeploymentsQueryKey>
  >({
    queryKey: getApisAppsV1DeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1Deployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1DeploymentsQueryKey>
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
      ...getApisAppsV1DeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', args] as const
}

export function getApisAppsV1NamespacesNamespaceControllerrevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceControllerrevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceControllerrevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApisAppsV1NamespacesNamespaceControllerrevisionsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', 'POST'] as const
}

export function getPostApisAppsV1NamespacesNamespaceControllerrevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAppsV1NamespacesNamespaceControllerrevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$post(args, options),
      )
    },
  })
}

export function injectPostApisAppsV1NamespacesNamespaceControllerrevisions<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
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
    const mutationDefaults = getPostApisAppsV1NamespacesNamespaceControllerrevisionsMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceControllerrevisions<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
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
      getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', args] as const
}

export function getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceControllerrevisionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
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
      getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationKey() {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
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
      getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', args] as const
}

export function getApisAppsV1NamespacesNamespaceDaemonsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDaemonsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDaemonsetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApisAppsV1NamespacesNamespaceDaemonsetsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', 'POST'] as const
}

export function getPostApisAppsV1NamespacesNamespaceDaemonsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisAppsV1NamespacesNamespaceDaemonsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets.$post(args, options),
      )
    },
  })
}

export function injectPostApisAppsV1NamespacesNamespaceDaemonsets<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']
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
    const mutationDefaults = getPostApisAppsV1NamespacesNamespaceDaemonsetsMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceDaemonsetsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceDaemonsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceDaemonsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets.$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceDaemonsets<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDaemonsetsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', args] as const
}

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDaemonsetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceDaemonsetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceDaemonsetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceDaemonsetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceDaemonsetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceDaemonsetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
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
    const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', args] as const
}

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', args] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDeploymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApisAppsV1NamespacesNamespaceDeploymentsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', 'POST'] as const
}

export function getPostApisAppsV1NamespacesNamespaceDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisAppsV1NamespacesNamespaceDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments.$post(args, options),
      )
    },
  })
}

export function injectPostApisAppsV1NamespacesNamespaceDeployments<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
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
    const mutationDefaults = getPostApisAppsV1NamespacesNamespaceDeploymentsMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceDeploymentsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments.$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceDeployments<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDeploymentsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', args] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDeploymentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDeploymentsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceDeploymentsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceDeploymentsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceDeploymentsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
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
    const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', args] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDeploymentsNameScale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceDeploymentsNameScale<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceDeploymentsNameScale<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/status', args] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/status', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
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
      getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/status', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', args] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceReplicasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceReplicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceReplicasetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApisAppsV1NamespacesNamespaceReplicasetsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', 'POST'] as const
}

export function getPostApisAppsV1NamespacesNamespaceReplicasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisAppsV1NamespacesNamespaceReplicasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets.$post(args, options),
      )
    },
  })
}

export function injectPostApisAppsV1NamespacesNamespaceReplicasets<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
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
    const mutationDefaults = getPostApisAppsV1NamespacesNamespaceReplicasetsMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceReplicasetsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceReplicasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceReplicasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets.$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceReplicasets<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceReplicasetsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', args] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceReplicasetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceReplicasetsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceReplicasetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceReplicasetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceReplicasetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceReplicasetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceReplicasetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
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
    const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', args] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceReplicasetsNameScale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceReplicasetsNameScale<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceReplicasetsNameScale<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', args] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
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
      getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', args] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceStatefulsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceStatefulsetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApisAppsV1NamespacesNamespaceStatefulsetsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', 'POST'] as const
}

export function getPostApisAppsV1NamespacesNamespaceStatefulsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAppsV1NamespacesNamespaceStatefulsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets.$post(args, options),
      )
    },
  })
}

export function injectPostApisAppsV1NamespacesNamespaceStatefulsets<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
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
    const mutationDefaults = getPostApisAppsV1NamespacesNamespaceStatefulsetsMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceStatefulsetsMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceStatefulsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceStatefulsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets.$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceStatefulsets<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceStatefulsetsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', args] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceStatefulsetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceStatefulsetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$put(args, options),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceStatefulsetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
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
    const mutationDefaults = getPutApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
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

export function getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', 'DELETE'] as const
}

export function getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApisAppsV1NamespacesNamespaceStatefulsetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceStatefulsetsName<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
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
    const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', args] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
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
      getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', args] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey>
  >({
    queryKey: getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey>
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
      ...getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', 'PUT'] as const
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
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
      getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationOptions<
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

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', 'PATCH'] as const
}

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
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
                  (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
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
      getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationOptions<
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

export function getApisAppsV1ReplicasetsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
) {
  return ['apis', '/apis/apps/v1/replicasets', args] as const
}

export function getApisAppsV1ReplicasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1ReplicasetsQueryKey>
  >({
    queryKey: getApisAppsV1ReplicasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.replicasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1Replicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1ReplicasetsQueryKey>
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
      ...getApisAppsV1ReplicasetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1StatefulsetsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
) {
  return ['apis', '/apis/apps/v1/statefulsets', args] as const
}

export function getApisAppsV1StatefulsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1StatefulsetsQueryKey>
  >({
    queryKey: getApisAppsV1StatefulsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.statefulsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1Statefulsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1StatefulsetsQueryKey>
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
      ...getApisAppsV1StatefulsetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchControllerrevisionsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/controllerrevisions', args] as const
}

export function getApisAppsV1WatchControllerrevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchControllerrevisionsQueryKey>
  >({
    queryKey: getApisAppsV1WatchControllerrevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.controllerrevisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchControllerrevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchControllerrevisionsQueryKey>
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
      ...getApisAppsV1WatchControllerrevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchDaemonsetsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/daemonsets', args] as const
}

export function getApisAppsV1WatchDaemonsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchDaemonsetsQueryKey>
  >({
    queryKey: getApisAppsV1WatchDaemonsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.daemonsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchDaemonsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchDaemonsetsQueryKey>
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
      ...getApisAppsV1WatchDaemonsetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchDeploymentsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/deployments', args] as const
}

export function getApisAppsV1WatchDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchDeploymentsQueryKey>
  >({
    queryKey: getApisAppsV1WatchDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchDeploymentsQueryKey>
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
      ...getApisAppsV1WatchDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceControllerrevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name',
    args,
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceControllerrevisionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/daemonsets', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceDaemonsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceDaemonsetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/deployments', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/deployments/:name', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].deployments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceDeploymentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/replicasets', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].replicasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceReplicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/replicasets/:name', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].replicasets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceReplicasetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/statefulsets', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceStatefulsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name', args] as const
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey>
  >({
    queryKey: getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchNamespacesNamespaceStatefulsetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey>
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
      ...getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchReplicasetsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/replicasets', args] as const
}

export function getApisAppsV1WatchReplicasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchReplicasetsQueryKey>
  >({
    queryKey: getApisAppsV1WatchReplicasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.replicasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchReplicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchReplicasetsQueryKey>
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
      ...getApisAppsV1WatchReplicasetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisAppsV1WatchStatefulsetsQueryKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/statefulsets', args] as const
}

export function getApisAppsV1WatchStatefulsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchStatefulsetsQueryKey>
  >({
    queryKey: getApisAppsV1WatchStatefulsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.apps.v1.watch.statefulsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisAppsV1WatchStatefulsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAppsV1WatchStatefulsetsQueryKey>
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
      ...getApisAppsV1WatchStatefulsetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
