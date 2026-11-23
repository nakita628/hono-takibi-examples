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

export function getApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applications.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications', keyArgs] as const
}

export function getApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
          >,
          ReturnType<typeof getApplicationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.applications.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:ApplicationId/configurationprofiles', keyArgs] as const
}

export function getApplicationsApplicationIdConfigurationprofilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdConfigurationprofilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdConfigurationprofilesQueryKey>
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
              (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdConfigurationprofilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdConfigurationprofilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].configurationprofiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploymentstrategies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['deploymentstrategies', '/deploymentstrategies', keyArgs] as const
}

export function getDeploymentstrategiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploymentstrategies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploymentstrategiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentstrategies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentstrategies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploymentstrategies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
            >
          >,
          ReturnType<typeof getDeploymentstrategiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentstrategiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploymentstrategiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentstrategies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:ApplicationId/environments', keyArgs] as const
}

export function getApplicationsApplicationIdEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdEnvironmentsQueryKey>
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
            ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.applications)[':ApplicationId']['environments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$post']>,
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

export function getExtensionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['extensions', '/extensions', keyArgs] as const
}

export function getExtensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
          >,
          ReturnType<typeof getExtensionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.extensions.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensionassociations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['extensionassociations', '/extensionassociations', keyArgs] as const
}

export function getExtensionassociationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensionassociations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionassociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensionassociations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtensionassociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.extensionassociations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
            >
          >,
          ReturnType<typeof getExtensionassociationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionassociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionassociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensionassociations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:ApplicationId', keyArgs] as const
}

export function getApplicationsApplicationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
          InferRequestType<
            (typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
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
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
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
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey>
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
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdEnvironmentsEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['extensions', '/extensions/:ExtensionIdentifier', keyArgs] as const
}

export function getExtensionsExtensionIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionsExtensionIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensions[':ExtensionIdentifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExtensionsExtensionIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionsExtensionIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionsExtensionIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensions[':ExtensionIdentifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    keyArgs,
  ] as const
}

export function getExtensionassociationsExtensionAssociationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtensionassociationsExtensionAssociationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extensionassociations[':ExtensionAssociationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
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
                    (typeof client.extensionassociations)[':ExtensionAssociationId']['$get']
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
                    (typeof client.extensionassociations)[':ExtensionAssociationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getExtensionassociationsExtensionAssociationIdQueryKey>
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
            ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExtensionassociationsExtensionAssociationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtensionassociationsExtensionAssociationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extensionassociations[':ExtensionAssociationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions/:VersionNumber',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].hostedconfigurationversions[':VersionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions[':VersionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:Application/environments/:Environment/configurations/:Configuration#client_id',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':Application'].environments[':Environment'].configurations[
          ':Configuration#client_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
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
                    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
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
                    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':Application'].environments[':Environment'].configurations[
            ':Configuration#client_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments/:DeploymentNumber',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
          ':DeploymentNumber'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
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
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
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
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
            ':DeploymentNumber'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['deploymentstrategies', '/deploymentstrategies/:DeploymentStrategyId', keyArgs] as const
}

export function getDeploymentstrategiesDeploymentStrategyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploymentstrategiesDeploymentStrategyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentstrategies[':DeploymentStrategyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentstrategiesDeploymentStrategyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentstrategiesDeploymentStrategyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploymentstrategiesDeploymentStrategyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentstrategies[':DeploymentStrategyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
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
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
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
                    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey
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
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions',
    keyArgs,
  ] as const
}

export function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':ApplicationId'].configurationprofiles[
          ':ConfigurationProfileId'
        ].hostedconfigurationversions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
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
                    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':ResourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
