import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeploymentmanagerKey() {
  return ['deploymentmanager'] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
          ':compositeType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeployments<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].manifests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifests<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests/:manifest',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].manifests[':manifest'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifest<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResources<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources/:resource',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':deployment'
        ].resources[':resource'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResource<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/getIamPolicy',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.deployments[
          ':resource'
        ].getIamPolicy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicy<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/operations',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalOperations<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalOperationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/operations/:operation',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.operations[':operation'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperation<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypes<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types/:type',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
          ':typeProvider'
        ].types[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesType<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/types',
    args,
  ] as const
}

export function getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryOptions<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentmanager.v2beta.projects[':project'].global.types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentmanagerV2betaProjectsProjectGlobalTypes<
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
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDeploymentmanagerV2betaProjectsProjectGlobalTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
