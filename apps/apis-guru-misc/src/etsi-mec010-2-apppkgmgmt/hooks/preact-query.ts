import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppPackagesKey() {
  return ['app_packages'] as const
}

export function getOnboardedAppPackagesKey() {
  return ['onboarded_app_packages'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getUserDefinedNotificationKey() {
  return ['user_defined_notification'] as const
}

export function getAppPackagesQueryKey(args: InferRequestType<typeof client.app_packages.$get>) {
  return ['app_packages', '/app_packages', args] as const
}

export function getAppPackagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app_packages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppPackagesQueryKey>
  >({
    queryKey: getAppPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app_packages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app_packages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppPackagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app_packages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppPackagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppPackagesMutationKey() {
  return ['app_packages', '/app_packages', 'POST'] as const
}

export function getPostAppPackagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.app_packages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppPackagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app_packages.$post>) {
      return parseResponse(client.app_packages.$post(args, options))
    },
  })
}

export function usePostAppPackages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app_packages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.app_packages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppPackagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppPackagesAppPkgIdQueryKey(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
) {
  return ['app_packages', '/app_packages/:appPkgId', args] as const
}

export function getAppPackagesAppPkgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppPackagesAppPkgIdQueryKey>
  >({
    queryKey: getAppPackagesAppPkgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app_packages[':appPkgId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppPackagesAppPkgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesAppPkgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppPackagesAppPkgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppPackagesAppPkgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesAppPkgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppPackagesAppPkgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAppPackagesAppPkgIdMutationKey() {
  return ['app_packages', '/app_packages/:appPkgId', 'DELETE'] as const
}

export function getDeleteAppPackagesAppPkgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.app_packages)[':appPkgId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppPackagesAppPkgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$delete']>) {
      return parseResponse(client.app_packages[':appPkgId'].$delete(args, options))
    },
  })
}

export function useDeleteAppPackagesAppPkgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.app_packages)[':appPkgId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppPackagesAppPkgIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAppPackagesAppPkgIdMutationKey() {
  return ['app_packages', '/app_packages/:appPkgId', 'PATCH'] as const
}

export function getPatchAppPackagesAppPkgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.app_packages)[':appPkgId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppPackagesAppPkgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.app_packages)[':appPkgId']['$patch']>) {
      return parseResponse(client.app_packages[':appPkgId'].$patch(args, options))
    },
  })
}

export function usePatchAppPackagesAppPkgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.app_packages)[':appPkgId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAppPackagesAppPkgIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppPackagesAppPkgIdAppdQueryKey(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
) {
  return ['app_packages', '/app_packages/:appPkgId/appd', args] as const
}

export function getAppPackagesAppPkgIdAppdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppPackagesAppPkgIdAppdQueryKey>
  >({
    queryKey: getAppPackagesAppPkgIdAppdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app_packages[':appPkgId'].appd.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppPackagesAppPkgIdAppd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesAppPkgIdAppdQueryKey>
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
      ...getAppPackagesAppPkgIdAppdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppPackagesAppPkgIdAppd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['appd']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesAppPkgIdAppdQueryKey>
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
      ...getAppPackagesAppPkgIdAppdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppPackagesAppPkgIdPackageContentQueryKey(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
) {
  return ['app_packages', '/app_packages/:appPkgId/package_content', args] as const
}

export function getAppPackagesAppPkgIdPackageContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppPackagesAppPkgIdPackageContentQueryKey>
  >({
    queryKey: getAppPackagesAppPkgIdPackageContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app_packages[':appPkgId'].package_content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppPackagesAppPkgIdPackageContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesAppPkgIdPackageContentQueryKey>
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
      ...getAppPackagesAppPkgIdPackageContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppPackagesAppPkgIdPackageContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppPackagesAppPkgIdPackageContentQueryKey>
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
      ...getAppPackagesAppPkgIdPackageContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAppPackagesAppPkgIdPackageContentMutationKey() {
  return ['app_packages', '/app_packages/:appPkgId/package_content', 'PUT'] as const
}

export function getPutAppPackagesAppPkgIdPackageContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppPackagesAppPkgIdPackageContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>,
    ) {
      return parseResponse(client.app_packages[':appPkgId'].package_content.$put(args, options))
    },
  })
}

export function usePutAppPackagesAppPkgIdPackageContent<
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
                ReturnType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.app_packages)[':appPkgId']['package_content']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAppPackagesAppPkgIdPackageContentMutationOptions<
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

export function getOnboardedAppPackagesAppDIdAppdQueryKey(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
) {
  return ['onboarded_app_packages', '/onboarded_app_packages/:appDId/appd', args] as const
}

export function getOnboardedAppPackagesAppDIdAppdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOnboardedAppPackagesAppDIdAppdQueryKey>
  >({
    queryKey: getOnboardedAppPackagesAppDIdAppdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.onboarded_app_packages[':appDId'].appd.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOnboardedAppPackagesAppDIdAppd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOnboardedAppPackagesAppDIdAppdQueryKey>
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
      ...getOnboardedAppPackagesAppDIdAppdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOnboardedAppPackagesAppDIdAppd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.onboarded_app_packages)[':appDId']['appd']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOnboardedAppPackagesAppDIdAppdQueryKey>
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
      ...getOnboardedAppPackagesAppDIdAppdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOnboardedAppPackagesAppDIdPackageContentQueryKey(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
) {
  return [
    'onboarded_app_packages',
    '/onboarded_app_packages/:appDId/package_content',
    args,
  ] as const
}

export function getOnboardedAppPackagesAppDIdPackageContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOnboardedAppPackagesAppDIdPackageContentQueryKey>
  >({
    queryKey: getOnboardedAppPackagesAppDIdPackageContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.onboarded_app_packages[':appDId'].package_content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOnboardedAppPackagesAppDIdPackageContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOnboardedAppPackagesAppDIdPackageContentQueryKey>
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
      ...getOnboardedAppPackagesAppDIdPackageContentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOnboardedAppPackagesAppDIdPackageContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.onboarded_app_packages)[':appDId']['package_content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOnboardedAppPackagesAppDIdPackageContentQueryKey>
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
      ...getOnboardedAppPackagesAppDIdPackageContentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOnboardedAppPackagesAppDIdPackageContentMutationKey() {
  return [
    'onboarded_app_packages',
    '/onboarded_app_packages/:appDId/package_content',
    'PUT',
  ] as const
}

export function getPutOnboardedAppPackagesAppDIdPackageContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOnboardedAppPackagesAppDIdPackageContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']
      >,
    ) {
      return parseResponse(
        client.onboarded_app_packages[':appDId'].package_content.$put(args, options),
      )
    },
  })
}

export function usePutOnboardedAppPackagesAppDIdPackageContent<
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
                  (typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.onboarded_app_packages)[':appDId']['package_content']['$put']
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
  const mutationDefaults = getPutOnboardedAppPackagesAppDIdPackageContentMutationOptions<
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

export function getSubscriptionsQueryKey() {
  return ['subscriptions', '/subscriptions'] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function getPostSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$post>) {
      return parseResponse(client.subscriptions.$post(args, options))
    },
  })
}

export function usePostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', args] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSubscriptionsSubscriptionIdMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function getDeleteSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].$delete(args, options))
    },
  })
}

export function useDeleteSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubscriptionsSubscriptionIdMutationOptions<
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

export function getPostUserDefinedNotificationMutationKey() {
  return ['user_defined_notification', '/user_defined_notification', 'POST'] as const
}

export function getPostUserDefinedNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_defined_notification.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.user_defined_notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserDefinedNotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_defined_notification.$post>) {
      return parseResponse(client.user_defined_notification.$post(args, options))
    },
  })
}

export function usePostUserDefinedNotification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_defined_notification.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.user_defined_notification.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserDefinedNotificationMutationOptions<TError, TOnMutateResult>(
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
