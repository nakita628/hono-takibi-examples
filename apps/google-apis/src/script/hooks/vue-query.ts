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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ProcessesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.processes.$get>>,
) {
  return ['v1', '/v1/processes', toValue(args)] as const
}

export function getV1ProcessesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.processes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProcessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.processes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Processes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.processes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.processes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.processes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.processes.$get>>>>
          >,
          ReturnType<typeof getV1ProcessesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.processes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProcessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProcessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.processes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProcessesListScriptProcessesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['processes:listScriptProcesses']['$get']>
  >,
) {
  return ['v1', '/v1/processes:listScriptProcesses', toValue(args)] as const
}

export function getV1ProcessesListScriptProcessesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['processes:listScriptProcesses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProcessesListScriptProcessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['processes:listScriptProcesses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProcessesListScriptProcesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['processes:listScriptProcesses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['processes:listScriptProcesses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['processes:listScriptProcesses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['processes:listScriptProcesses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProcessesListScriptProcessesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['processes:listScriptProcesses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProcessesListScriptProcessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProcessesListScriptProcessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['processes:listScriptProcesses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsMutationKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function getPostV1ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.projects.$post>) {
      return parseResponse(client.v1.projects.$post(args, options))
    },
  })
}

export function usePostV1Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.projects.$post>,
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
  const mutationDefaults = getPostV1ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProjectsScriptIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':scriptId']['$get']>>,
) {
  return ['v1', '/v1/projects/:scriptId', toValue(args)] as const
}

export function getV1ProjectsScriptIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':scriptId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':scriptId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsScriptIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:scriptId/content', toValue(args)] as const
}

export function getV1ProjectsScriptIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsScriptIdContentMutationKey() {
  return ['v1', '/v1/projects/:scriptId/content', 'PUT'] as const
}

export function getPutV1ProjectsScriptIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['content']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsScriptIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':scriptId'].content.$put(args, options))
    },
  })
}

export function usePutV1ProjectsScriptIdContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['content']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$put']>,
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
  const mutationDefaults = getPutV1ProjectsScriptIdContentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProjectsScriptIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:scriptId/deployments', toValue(args)] as const
}

export function getV1ProjectsScriptIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsScriptIdDeploymentsMutationKey() {
  return ['v1', '/v1/projects/:scriptId/deployments', 'POST'] as const
}

export function getPostV1ProjectsScriptIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsScriptIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':scriptId'].deployments.$post(args, options))
    },
  })
}

export function usePostV1ProjectsScriptIdDeployments<
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
                  ReturnType<(typeof client.v1.projects)[':scriptId']['deployments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsScriptIdDeploymentsMutationOptions<
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

export function getV1ProjectsScriptIdDeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:scriptId/deployments/:deploymentId', toValue(args)] as const
}

export function getV1ProjectsScriptIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdDeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].deployments[':deploymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdDeploymentsDeploymentIdQueryKey>
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
              (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdDeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].deployments[':deploymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsScriptIdDeploymentsDeploymentIdMutationKey() {
  return ['v1', '/v1/projects/:scriptId/deployments/:deploymentId', 'PUT'] as const
}

export function getPutV1ProjectsScriptIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsScriptIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':scriptId'].deployments[':deploymentId'].$put(args, options),
      )
    },
  })
}

export function usePutV1ProjectsScriptIdDeploymentsDeploymentId<
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
                    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$put']
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
  const mutationDefaults = getPutV1ProjectsScriptIdDeploymentsDeploymentIdMutationOptions<
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

export function getDeleteV1ProjectsScriptIdDeploymentsDeploymentIdMutationKey() {
  return ['v1', '/v1/projects/:scriptId/deployments/:deploymentId', 'DELETE'] as const
}

export function getDeleteV1ProjectsScriptIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsScriptIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':scriptId'].deployments[':deploymentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsScriptIdDeploymentsDeploymentId<
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
                    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsScriptIdDeploymentsDeploymentIdMutationOptions<
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

export function getV1ProjectsScriptIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:scriptId/metrics', toValue(args)] as const
}

export function getV1ProjectsScriptIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsScriptIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:scriptId/versions', toValue(args)] as const
}

export function getV1ProjectsScriptIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsScriptIdVersionsMutationKey() {
  return ['v1', '/v1/projects/:scriptId/versions', 'POST'] as const
}

export function getPostV1ProjectsScriptIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsScriptIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':scriptId'].versions.$post(args, options))
    },
  })
}

export function usePostV1ProjectsScriptIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':scriptId']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsScriptIdVersionsMutationOptions<
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

export function getV1ProjectsScriptIdVersionsVersionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:scriptId/versions/:versionNumber', toValue(args)] as const
}

export function getV1ProjectsScriptIdVersionsVersionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsScriptIdVersionsVersionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':scriptId'].versions[':versionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsScriptIdVersionsVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']>
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
                    (typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']
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
                    (typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsScriptIdVersionsVersionNumberQueryKey>
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
              (typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsScriptIdVersionsVersionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsScriptIdVersionsVersionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':scriptId'].versions[':versionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ScriptsScriptIdRunMutationKey() {
  return ['v1', '/v1/scripts/:scriptId:run', 'POST'] as const
}

export function getPostV1ScriptsScriptIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.scripts)[':scriptId:run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.scripts)[':scriptId:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScriptsScriptIdRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.scripts)[':scriptId:run']['$post']>) {
      return parseResponse(client.v1.scripts[':scriptId:run'].$post(args, options))
    },
  })
}

export function usePostV1ScriptsScriptIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.scripts)[':scriptId:run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.scripts)[':scriptId:run']['$post']>,
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
  const mutationDefaults = getPostV1ScriptsScriptIdRunMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
