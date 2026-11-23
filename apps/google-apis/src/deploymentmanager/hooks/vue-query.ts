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

export function getDeploymentmanagerKey() {
  return ['deploymentmanager'] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey>
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
          ':compositeType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
            ':compositeType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    'PUT',
  ] as const
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
          ':compositeType'
        ].$put(args, options),
      )
    },
  })
}

export function usePutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
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
    getPutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationOptions<
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

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    'DELETE',
  ] as const
}

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
          ':compositeType'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
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
    getDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationOptions<
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

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    'PATCH',
  ] as const
}

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
          ':compositeType'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
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
    getPatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey>
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeployments<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    'PUT',
  ] as const
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
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
    getPutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationOptions<
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

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    'DELETE',
  ] as const
}

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
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
    getDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationOptions<
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

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    'PATCH',
  ] as const
}

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
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
    getPatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentMutationOptions<
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

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/cancelPreview',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].cancelPreview.$post(args, options),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreview<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].manifests.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].manifests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests/:manifest',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].manifests[':manifest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].manifests[':manifest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].resources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources/:resource',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].resources[':resource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].resources[':resource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/stop',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].stop.$post(args, options),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStop<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/getIamPolicy',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':resource'
        ].getIamPolicy.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':resource'
          ].getIamPolicy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/setIamPolicy',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':resource'
        ].setIamPolicy.$post(args, options),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicy<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyMutationOptions<
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

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/testIamPermissions',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':resource'
        ].testIamPermissions.$post(args, options),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissions<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/operations',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey>
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.operations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/operations/:operation',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.operations[':operation'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.operations[':operation'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey>
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders',
    'POST',
  ] as const
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
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
    getPostDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    'PUT',
  ] as const
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].$put(args, options),
      )
    },
  })
}

export function usePutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
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
    getPutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationOptions<
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

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    'DELETE',
  ] as const
}

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
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
    getDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationOptions<
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

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    'PATCH',
  ] as const
}

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
      >,
    ) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
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
    getPatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderMutationOptions<
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

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].types.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types/:type',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].types[':type'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].types[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
    >
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/types',
    toValue(args),
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentmanagerV2betaProjectsProjectGlobalTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
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
                    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey>
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
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
