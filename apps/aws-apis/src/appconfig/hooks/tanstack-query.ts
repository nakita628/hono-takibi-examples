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

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getDeployementstrategiesKey() {
  return ['deployementstrategies'] as const
}

export function getDeploymentstrategiesKey() {
  return ['deploymentstrategies'] as const
}

export function getExtensionassociationsKey() {
  return ['extensionassociations'] as const
}

export function getExtensionsKey() {
  return ['extensions'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getApplicationsQueryKey(args: InferRequestType<typeof client.applications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications', keyArgs] as const
}

export function getApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplicationsQueryKey>
  >({
    queryKey: getApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.applications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.applications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApplicationsMutationKey() {
  return ['applications', '/applications', 'POST'] as const
}

export function getPostApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applications.$post>) {
      return parseResponse(client.applications.$post(args, options))
    },
  })
}

export function usePostApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getApplicationsApplicationIdConfigurationprofilesQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:ApplicationId/configurationprofiles', keyArgs] as const
}

export function getApplicationsApplicationIdConfigurationprofilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdConfigurationprofilesQueryKey>
  >({
    queryKey: getApplicationsApplicationIdConfigurationprofilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationIdConfigurationprofiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdConfigurationprofilesQueryKey>
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
      ...getApplicationsApplicationIdConfigurationprofilesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdConfigurationprofiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdConfigurationprofilesQueryKey>
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
      ...getApplicationsApplicationIdConfigurationprofilesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdConfigurationprofilesMutationKey() {
  return ['applications', '/applications/:ApplicationId/configurationprofiles', 'POST'] as const
}

export function getPostApplicationsApplicationIdConfigurationprofilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdConfigurationprofilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles.$post(args, options),
      )
    },
  })
}

export function usePostApplicationsApplicationIdConfigurationprofiles<
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
                  (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
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
  const mutationDefaults = getPostApplicationsApplicationIdConfigurationprofilesMutationOptions<
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

export function getDeploymentstrategiesQueryKey(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['deploymentstrategies', '/deploymentstrategies', keyArgs] as const
}

export function getDeploymentstrategiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deploymentstrategies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentstrategiesQueryKey>
  >({
    queryKey: getDeploymentstrategiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentstrategies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeploymentstrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentstrategiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeploymentstrategiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeploymentstrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentstrategiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeploymentstrategiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDeploymentstrategiesMutationKey() {
  return ['deploymentstrategies', '/deploymentstrategies', 'POST'] as const
}

export function getPostDeploymentstrategiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deploymentstrategies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentstrategiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deploymentstrategies.$post>) {
      return parseResponse(client.deploymentstrategies.$post(args, options))
    },
  })
}

export function usePostDeploymentstrategies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deploymentstrategies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeploymentstrategiesMutationOptions<TError, TOnMutateResult>(
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

export function getApplicationsApplicationIdEnvironmentsQueryKey(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:ApplicationId/environments', keyArgs] as const
}

export function getApplicationsApplicationIdEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEnvironmentsQueryKey>
  >({
    queryKey: getApplicationsApplicationIdEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].environments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationIdEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdEnvironmentsQueryKey>
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
      ...getApplicationsApplicationIdEnvironmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdEnvironmentsQueryKey>
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
      ...getApplicationsApplicationIdEnvironmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdEnvironmentsMutationKey() {
  return ['applications', '/applications/:ApplicationId/environments', 'POST'] as const
}

export function getPostApplicationsApplicationIdEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['environments']['$post']
      >,
    ) {
      return parseResponse(client.applications[':ApplicationId'].environments.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdEnvironments<
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
                ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsApplicationIdEnvironmentsMutationOptions<
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

export function getExtensionsQueryKey(args: InferRequestType<typeof client.extensions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['extensions', '/extensions', keyArgs] as const
}

export function getExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.extensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExtensionsQueryKey>
  >({
    queryKey: getExtensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExtensionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExtensionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostExtensionsMutationKey() {
  return ['extensions', '/extensions', 'POST'] as const
}

export function getPostExtensionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$post>>>>>,
    TError,
    InferRequestType<typeof client.extensions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtensionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensions.$post>) {
      return parseResponse(client.extensions.$post(args, options))
    },
  })
}

export function usePostExtensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.extensions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtensionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtensionassociationsQueryKey(
  args: InferRequestType<typeof client.extensionassociations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['extensionassociations', '/extensionassociations', keyArgs] as const
}

export function getExtensionassociationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensionassociations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionassociationsQueryKey>
  >({
    queryKey: getExtensionassociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensionassociations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExtensionassociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensionassociations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionassociationsQueryKey>
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
      ...getExtensionassociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExtensionassociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.extensionassociations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionassociationsQueryKey>
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
      ...getExtensionassociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostExtensionassociationsMutationKey() {
  return ['extensionassociations', '/extensionassociations', 'POST'] as const
}

export function getPostExtensionassociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.extensionassociations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtensionassociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extensionassociations.$post>) {
      return parseResponse(client.extensionassociations.$post(args, options))
    },
  })
}

export function usePostExtensionassociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.extensionassociations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtensionassociationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions#Content-Type',
    'POST',
  ] as const
}

export function getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'][
          'hostedconfigurationversions#Content-Type'
        ].$post(args, options),
      )
    },
  })
}

export function usePostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentType<
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
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
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
    getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeMutationOptions<
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

export function getApplicationsApplicationIdQueryKey(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:ApplicationId', keyArgs] as const
}

export function getApplicationsApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdQueryKey>
  >({
    queryKey: getApplicationsApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdQueryKey>
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
      ...getApplicationsApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdQueryKey>
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
      ...getApplicationsApplicationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:ApplicationId', 'DELETE'] as const
}

export function getDeleteApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':ApplicationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':ApplicationId']['$delete']>,
    ) {
      return parseResponse(client.applications[':ApplicationId'].$delete(args, options))
    },
  })
}

export function useDeleteApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.applications)[':ApplicationId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApplicationsApplicationIdMutationOptions<
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

export function getPatchApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:ApplicationId', 'PATCH'] as const
}

export function getPatchApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':ApplicationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':ApplicationId']['$patch']>,
    ) {
      return parseResponse(client.applications[':ApplicationId'].$patch(args, options))
    },
  })
}

export function usePatchApplicationsApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':ApplicationId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApplicationsApplicationIdMutationOptions<
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

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey
    >
  >({
    queryKey: getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey
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
      ...getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey
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
      ...getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
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
    getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationOptions<
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

export function getPatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    'PATCH',
  ] as const
}

export function getPatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
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
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
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
    getPatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdMutationOptions<
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

export function getDeleteDeployementstrategiesDeploymentStrategyIdMutationKey() {
  return [
    'deployementstrategies',
    '/deployementstrategies/:DeploymentStrategyId',
    'DELETE',
  ] as const
}

export function getDeleteDeployementstrategiesDeploymentStrategyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeployementstrategiesDeploymentStrategyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.deployementstrategies[':DeploymentStrategyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeployementstrategiesDeploymentStrategyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeployementstrategiesDeploymentStrategyIdMutationOptions<
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

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationIdEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey>
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
      ...getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey>
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
      ...getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdEnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
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
    getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdMutationOptions<
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

export function getPatchApplicationsApplicationIdEnvironmentsEnvironmentIdMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    'PATCH',
  ] as const
}

export function getPatchApplicationsApplicationIdEnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdEnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApplicationsApplicationIdEnvironmentsEnvironmentId<
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
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
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
    getPatchApplicationsApplicationIdEnvironmentsEnvironmentIdMutationOptions<
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

export function getExtensionsExtensionIdentifierQueryKey(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['extensions', '/extensions/:ExtensionIdentifier', keyArgs] as const
}

export function getExtensionsExtensionIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsExtensionIdentifierQueryKey>
  >({
    queryKey: getExtensionsExtensionIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions[':ExtensionIdentifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExtensionsExtensionIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsExtensionIdentifierQueryKey>
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
      ...getExtensionsExtensionIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExtensionsExtensionIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsExtensionIdentifierQueryKey>
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
      ...getExtensionsExtensionIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteExtensionsExtensionIdentifierMutationKey() {
  return ['extensions', '/extensions/:ExtensionIdentifier', 'DELETE'] as const
}

export function getDeleteExtensionsExtensionIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtensionsExtensionIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>,
    ) {
      return parseResponse(client.extensions[':ExtensionIdentifier'].$delete(args, options))
    },
  })
}

export function useDeleteExtensionsExtensionIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExtensionsExtensionIdentifierMutationOptions<
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

export function getPatchExtensionsExtensionIdentifierMutationKey() {
  return ['extensions', '/extensions/:ExtensionIdentifier', 'PATCH'] as const
}

export function getPatchExtensionsExtensionIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtensionsExtensionIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>,
    ) {
      return parseResponse(client.extensions[':ExtensionIdentifier'].$patch(args, options))
    },
  })
}

export function usePatchExtensionsExtensionIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExtensionsExtensionIdentifierMutationOptions<
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

export function getExtensionassociationsExtensionAssociationIdQueryKey(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    keyArgs,
  ] as const
}

export function getExtensionassociationsExtensionAssociationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionassociationsExtensionAssociationIdQueryKey>
  >({
    queryKey: getExtensionassociationsExtensionAssociationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extensionassociations[':ExtensionAssociationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExtensionassociationsExtensionAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionassociationsExtensionAssociationIdQueryKey>
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
      ...getExtensionassociationsExtensionAssociationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExtensionassociationsExtensionAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionassociationsExtensionAssociationIdQueryKey>
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
      ...getExtensionassociationsExtensionAssociationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteExtensionassociationsExtensionAssociationIdMutationKey() {
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    'DELETE',
  ] as const
}

export function getDeleteExtensionassociationsExtensionAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExtensionassociationsExtensionAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.extensionassociations[':ExtensionAssociationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteExtensionassociationsExtensionAssociationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
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
  const mutationDefaults = getDeleteExtensionassociationsExtensionAssociationIdMutationOptions<
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

export function getPatchExtensionassociationsExtensionAssociationIdMutationKey() {
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    'PATCH',
  ] as const
}

export function getPatchExtensionassociationsExtensionAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtensionassociationsExtensionAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']
      >,
    ) {
      return parseResponse(
        client.extensionassociations[':ExtensionAssociationId'].$patch(args, options),
      )
    },
  })
}

export function usePatchExtensionassociationsExtensionAssociationId<
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
                  (typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']
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
  const mutationDefaults = getPatchExtensionassociationsExtensionAssociationIdMutationOptions<
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

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions/:VersionNumber',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey
    >
  >({
    queryKey:
      getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].hostedconfigurationversions[':VersionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey
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
      ...getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey
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
      ...getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions/:VersionNumber',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].hostedconfigurationversions[':VersionNumber'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
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
    getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberMutationOptions<
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

export function getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:Application/environments/:Environment/configurations/:Configuration#client_id',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey
    >
  >({
    queryKey:
      getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':Application'].environments[':Environment'].configurations[
          ':Configuration#client_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey
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
      ...getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey
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
      ...getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments/:DeploymentNumber',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey
    >
  >({
    queryKey:
      getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
          ':DeploymentNumber'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey
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
      ...getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey
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
      ...getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments/:DeploymentNumber',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
          ':DeploymentNumber'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber<
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
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
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
    getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberMutationOptions<
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

export function getDeploymentstrategiesDeploymentStrategyIdQueryKey(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['deploymentstrategies', '/deploymentstrategies/:DeploymentStrategyId', keyArgs] as const
}

export function getDeploymentstrategiesDeploymentStrategyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentstrategiesDeploymentStrategyIdQueryKey>
  >({
    queryKey: getDeploymentstrategiesDeploymentStrategyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploymentstrategies[':DeploymentStrategyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeploymentstrategiesDeploymentStrategyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentstrategiesDeploymentStrategyIdQueryKey>
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
      ...getDeploymentstrategiesDeploymentStrategyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeploymentstrategiesDeploymentStrategyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentstrategiesDeploymentStrategyIdQueryKey>
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
      ...getDeploymentstrategiesDeploymentStrategyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchDeploymentstrategiesDeploymentStrategyIdMutationKey() {
  return ['deploymentstrategies', '/deploymentstrategies/:DeploymentStrategyId', 'PATCH'] as const
}

export function getPatchDeploymentstrategiesDeploymentStrategyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDeploymentstrategiesDeploymentStrategyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']
      >,
    ) {
      return parseResponse(
        client.deploymentstrategies[':DeploymentStrategyId'].$patch(args, options),
      )
    },
  })
}

export function usePatchDeploymentstrategiesDeploymentStrategyId<
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
                ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDeploymentstrategiesDeploymentStrategyIdMutationOptions<
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

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey>
  >({
    queryKey: getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey>
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
      ...getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey>
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
      ...getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments',
    'POST',
  ] as const
}

export function getPostApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments<
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
                  (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
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
    getPostApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsMutationOptions<
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

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey
    >
  >({
    queryKey:
      getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].hostedconfigurationversions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey
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
      ...getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey
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
      ...getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionMutationKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/validators#configuration_version',
    'POST',
  ] as const
}

export function getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
      >,
    ) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'][
          'validators#configuration_version'
        ].$post(args, options),
      )
    },
  })
}

export function usePostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
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
    getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionMutationOptions<
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
