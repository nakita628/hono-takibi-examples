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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAppsV1IndexQueryKey() {
  return ['apis', '/apis/apps/v1/'] as const
}

export function getApisAppsV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisAppsV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>
            >
          >,
          ReturnType<typeof getApisAppsV1IndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisAppsV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1ControllerrevisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>>,
) {
  return ['apis', '/apis/apps/v1/controllerrevisions', toValue(args)] as const
}

export function getApisAppsV1ControllerrevisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1ControllerrevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.controllerrevisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1Controllerrevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1ControllerrevisionsQueryKey>
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
          Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1ControllerrevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1ControllerrevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.controllerrevisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1DaemonsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>>,
) {
  return ['apis', '/apis/apps/v1/daemonsets', toValue(args)] as const
}

export function getApisAppsV1DaemonsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1DaemonsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.daemonsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1Daemonsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
            >
          >,
          ReturnType<typeof getApisAppsV1DaemonsetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1DaemonsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1DaemonsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.daemonsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1DeploymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.deployments.$get>>,
) {
  return ['apis', '/apis/apps/v1/deployments', toValue(args)] as const
}

export function getApisAppsV1DeploymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.deployments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1DeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1Deployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.deployments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
            >
          >,
          ReturnType<typeof getApisAppsV1DeploymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1DeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1DeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceControllerrevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceControllerrevisions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceControllerrevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisAppsV1NamespacesNamespaceControllerrevisions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAppsV1NamespacesNamespaceControllerrevisionsMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceControllerrevisions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAppsV1NamespacesNamespaceControllerrevisionsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
    getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
    getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceControllerrevisionsName<
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
    getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceDaemonsetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDaemonsets<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey>
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
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDaemonsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisAppsV1NamespacesNamespaceDaemonsets<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAppsV1NamespacesNamespaceDaemonsetsMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceDaemonsets<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDaemonsetsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDaemonsetsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDaemonsetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceDaemonsetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceDaemonsetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceDaemonsetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDeployments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsQueryKey>
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
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisAppsV1NamespacesNamespaceDeployments<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAppsV1NamespacesNamespaceDeploymentsMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceDeployments<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDeploymentsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDeploymentsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceDeploymentsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceDeploymentsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceDeploymentsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDeploymentsNameScale<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsNameScaleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceDeploymentsNameScale<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceDeploymentsNameScale<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/deployments/:name/status',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceDeploymentsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
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
    getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceReplicasets<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsQueryKey>
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
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisAppsV1NamespacesNamespaceReplicasets<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAppsV1NamespacesNamespaceReplicasetsMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceReplicasets<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceReplicasetsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceReplicasetsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceReplicasetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceReplicasetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceReplicasetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceReplicasetsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceReplicasetsNameScale<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsNameScaleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceReplicasetsNameScale<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceReplicasetsNameScale<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceReplicasetsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
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
    getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']>
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceStatefulsets<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']>
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisAppsV1NamespacesNamespaceStatefulsets<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAppsV1NamespacesNamespaceStatefulsetsMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceStatefulsets<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceStatefulsetsMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', toValue(args)] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceStatefulsetsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceStatefulsetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
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

export function useDeleteApisAppsV1NamespacesNamespaceStatefulsetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceStatefulsetsName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
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
    getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleMutationOptions<
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

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status',
    toValue(args),
  ] as const
}

export function getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
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
                    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey>
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
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationOptions<
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

export function usePatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
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
    getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusMutationOptions<
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

export function getApisAppsV1ReplicasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.replicasets.$get>>,
) {
  return ['apis', '/apis/apps/v1/replicasets', toValue(args)] as const
}

export function getApisAppsV1ReplicasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.replicasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1ReplicasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.replicasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1Replicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.replicasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
            >
          >,
          ReturnType<typeof getApisAppsV1ReplicasetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1ReplicasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1ReplicasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.replicasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1StatefulsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>>,
) {
  return ['apis', '/apis/apps/v1/statefulsets', toValue(args)] as const
}

export function getApisAppsV1StatefulsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1StatefulsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.statefulsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1Statefulsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1StatefulsetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1StatefulsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1StatefulsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.statefulsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchControllerrevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>
  >,
) {
  return ['apis', '/apis/apps/v1/watch/controllerrevisions', toValue(args)] as const
}

export function getApisAppsV1WatchControllerrevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchControllerrevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.controllerrevisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchControllerrevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchControllerrevisionsQueryKey>
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
          Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchControllerrevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchControllerrevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.controllerrevisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchDaemonsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>>,
) {
  return ['apis', '/apis/apps/v1/watch/daemonsets', toValue(args)] as const
}

export function getApisAppsV1WatchDaemonsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchDaemonsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.daemonsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchDaemonsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchDaemonsetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchDaemonsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchDaemonsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.daemonsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchDeploymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>>,
) {
  return ['apis', '/apis/apps/v1/watch/deployments', toValue(args)] as const
}

export function getApisAppsV1WatchDeploymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchDeploymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions',
    toValue(args),
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceControllerrevisions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAppsV1WatchNamespacesNamespaceControllerrevisionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name',
    toValue(args),
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceControllerrevisionsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/daemonsets', toValue(args)] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceDaemonsets<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDaemonsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name',
    toValue(args),
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceDaemonsetsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/deployments', toValue(args)] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceDeployments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/deployments/:name',
    toValue(args),
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].deployments[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceDeploymentsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceDeploymentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].deployments[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/replicasets', toValue(args)] as const
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].replicasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceReplicasets<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceReplicasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].replicasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/replicasets/:name',
    toValue(args),
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].replicasets[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceReplicasetsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceReplicasetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].replicasets[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
    >
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/statefulsets', toValue(args)] as const
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceStatefulsets<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceStatefulsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name',
    toValue(args),
  ] as const
}

export function getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAppsV1WatchNamespacesNamespaceStatefulsetsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
                    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey>
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
              (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchReplicasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>>,
) {
  return ['apis', '/apis/apps/v1/watch/replicasets', toValue(args)] as const
}

export function getApisAppsV1WatchReplicasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchReplicasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.replicasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchReplicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchReplicasetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchReplicasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchReplicasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.replicasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAppsV1WatchStatefulsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>>,
) {
  return ['apis', '/apis/apps/v1/watch/statefulsets', toValue(args)] as const
}

export function getApisAppsV1WatchStatefulsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAppsV1WatchStatefulsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.apps.v1.watch.statefulsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAppsV1WatchStatefulsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAppsV1WatchStatefulsetsQueryKey>
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
          Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAppsV1WatchStatefulsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAppsV1WatchStatefulsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.apps.v1.watch.statefulsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
