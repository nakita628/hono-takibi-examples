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

export function getAppsKey() {
  return ['apps'] as const
}

export function getChangepasswordKey() {
  return ['changepassword'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getRefreshKey() {
  return ['refresh'] as const
}

export function getRegisterKey() {
  return ['register'] as const
}

export function getSendpasswordKey() {
  return ['sendpassword'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getAppsQueryKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function getAppsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >({
    queryKey: getAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsMutationKey() {
  return ['apps', '/apps', 'POST'] as const
}

export function getPostAppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apps.$post>) {
      return parseResponse(client.apps.$post(args, options))
    },
  })
}

export function usePostApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
        TError,
        InferRequestType<typeof client.apps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAccessInviteAccessTokenQueryKey(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
) {
  return ['apps', '/apps/access/invite/:accessToken', args] as const
}

export function getAppsAccessInviteAccessTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAccessInviteAccessTokenQueryKey>
  >({
    queryKey: getAppsAccessInviteAccessTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.access.invite[':accessToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAccessInviteAccessToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAccessInviteAccessTokenQueryKey>
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
      ...getAppsAccessInviteAccessTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAccessInviteAccessToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAccessInviteAccessTokenQueryKey>
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
      ...getAppsAccessInviteAccessTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAppsAccessInviteAccessTokenMutationKey() {
  return ['apps', '/apps/access/invite/:accessToken', 'DELETE'] as const
}

export function getDeleteAppsAccessInviteAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAccessInviteAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$delete']>,
    ) {
      return parseResponse(client.apps.access.invite[':accessToken'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAccessInviteAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAccessInviteAccessTokenMutationOptions<
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

export function getPostAppsAccessInviteAccessTokenRegisterMutationKey() {
  return ['apps', '/apps/access/invite/:accessToken/register', 'POST'] as const
}

export function getPostAppsAccessInviteAccessTokenRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAccessInviteAccessTokenRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.access.invite)[':accessToken']['register']['$post']
      >,
    ) {
      return parseResponse(client.apps.access.invite[':accessToken'].register.$post(args, options))
    },
  })
}

export function usePostAppsAccessInviteAccessTokenRegister<
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
                ReturnType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAccessInviteAccessTokenRegisterMutationOptions<
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

export function getAppsAppIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
) {
  return ['apps', '/apps/:appId', args] as const
}

export function getAppsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.apps)[':appId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueryKey>
  >({
    queryKey: getAppsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdAccessQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
) {
  return ['apps', '/apps/:appId/access', args] as const
}

export function getAppsAppIdAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessQueryKey>
  >({
    queryKey: getAppsAppIdAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].access.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdAccessQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdAccessQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdAccessInviteQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
) {
  return ['apps', '/apps/:appId/access/invite', args] as const
}

export function getAppsAppIdAccessInviteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessInviteQueryKey>
  >({
    queryKey: getAppsAppIdAccessInviteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].access.invite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccessInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessInviteQueryKey>
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
      ...getAppsAppIdAccessInviteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccessInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessInviteQueryKey>
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
      ...getAppsAppIdAccessInviteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdAccessInviteMutationKey() {
  return ['apps', '/apps/:appId/access/invite', 'POST'] as const
}

export function getPostAppsAppIdAccessInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccessInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].access.invite.$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccessInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccessInviteMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdAccessInviteIdMutationKey() {
  return ['apps', '/apps/:appId/access/invite/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdAccessInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdAccessInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].access.invite[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdAccessInviteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdAccessInviteIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdAccessProfilesQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
) {
  return ['apps', '/apps/:appId/access/profiles', args] as const
}

export function getAppsAppIdAccessProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessProfilesQueryKey>
  >({
    queryKey: getAppsAppIdAccessProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].access.profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccessProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessProfilesQueryKey>
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
      ...getAppsAppIdAccessProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccessProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessProfilesQueryKey>
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
      ...getAppsAppIdAccessProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdAccessUserIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
) {
  return ['apps', '/apps/:appId/access/:userId', args] as const
}

export function getAppsAppIdAccessUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessUserIdQueryKey>
  >({
    queryKey: getAppsAppIdAccessUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].access[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccessUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessUserIdQueryKey>
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
      ...getAppsAppIdAccessUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccessUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccessUserIdQueryKey>
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
      ...getAppsAppIdAccessUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdAccessUserIdMutationKey() {
  return ['apps', '/apps/:appId/access/:userId', 'POST'] as const
}

export function getPostAppsAppIdAccessUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccessUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].access[':userId'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccessUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccessUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdAccessUserIdMutationKey() {
  return ['apps', '/apps/:appId/access/:userId', 'DELETE'] as const
}

export function getDeleteAppsAppIdAccessUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdAccessUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].access[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdAccessUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdAccessUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdAccountcategoriesIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/accountcategories/', args] as const
}

export function getAppsAppIdAccountcategoriesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountcategoriesIndexQueryKey>
  >({
    queryKey: getAppsAppIdAccountcategoriesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].accountcategories.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccountcategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountcategoriesIndexQueryKey>
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
      ...getAppsAppIdAccountcategoriesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccountcategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountcategoriesIndexQueryKey>
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
      ...getAppsAppIdAccountcategoriesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdAccountcategoriesIndexMutationKey() {
  return ['apps', '/apps/:appId/accountcategories/', 'POST'] as const
}

export function getPostAppsAppIdAccountcategoriesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccountcategoriesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].accountcategories.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccountcategoriesIndex<
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
                ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccountcategoriesIndexMutationOptions<
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

export function getAppsAppIdAccountcategoriesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/accountcategories/:id', args] as const
}

export function getAppsAppIdAccountcategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountcategoriesIdQueryKey>
  >({
    queryKey: getAppsAppIdAccountcategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].accountcategories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccountcategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountcategoriesIdQueryKey>
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
      ...getAppsAppIdAccountcategoriesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccountcategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountcategoriesIdQueryKey>
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
      ...getAppsAppIdAccountcategoriesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdAccountcategoriesIdMutationKey() {
  return ['apps', '/apps/:appId/accountcategories/:id', 'POST'] as const
}

export function getPostAppsAppIdAccountcategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccountcategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].accountcategories[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccountcategoriesId<
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
                ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccountcategoriesIdMutationOptions<
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

export function getDeleteAppsAppIdAccountcategoriesIdMutationKey() {
  return ['apps', '/apps/:appId/accountcategories/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdAccountcategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdAccountcategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].accountcategories[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdAccountcategoriesId<
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
                ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdAccountcategoriesIdMutationOptions<
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

export function getAppsAppIdAccountingEntriesIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/accounting_entries/', args] as const
}

export function getAppsAppIdAccountingEntriesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountingEntriesIndexQueryKey>
  >({
    queryKey: getAppsAppIdAccountingEntriesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].accounting_entries.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccountingEntriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountingEntriesIndexQueryKey>
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
      ...getAppsAppIdAccountingEntriesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccountingEntriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountingEntriesIndexQueryKey>
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
      ...getAppsAppIdAccountingEntriesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdAccountsIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/accounts/', args] as const
}

export function getAppsAppIdAccountsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountsIndexQueryKey>
  >({
    queryKey: getAppsAppIdAccountsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].accounts.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccountsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountsIndexQueryKey>
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
      ...getAppsAppIdAccountsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccountsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountsIndexQueryKey>
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
      ...getAppsAppIdAccountsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdAccountsIndexMutationKey() {
  return ['apps', '/apps/:appId/accounts/', 'POST'] as const
}

export function getPostAppsAppIdAccountsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccountsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].accounts.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccountsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccountsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdAccountsBatchMutationKey() {
  return ['apps', '/apps/:appId/accounts/batch', 'POST'] as const
}

export function getPostAppsAppIdAccountsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccountsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].accounts.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccountsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccountsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdAccountsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/accounts/:id', args] as const
}

export function getAppsAppIdAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountsIdQueryKey>
  >({
    queryKey: getAppsAppIdAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdAccountsIdMutationKey() {
  return ['apps', '/apps/:appId/accounts/:id', 'POST'] as const
}

export function getPostAppsAppIdAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].accounts[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdAccountsIdMutationKey() {
  return ['apps', '/apps/:appId/accounts/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].accounts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdApikeysQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
) {
  return ['apps', '/apps/:appId/apikeys', args] as const
}

export function getAppsAppIdApikeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdApikeysQueryKey>
  >({
    queryKey: getAppsAppIdApikeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].apikeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdApikeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdApikeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdApikeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdApikeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdApikeysMutationKey() {
  return ['apps', '/apps/:appId/apikeys', 'POST'] as const
}

export function getPostAppsAppIdApikeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['apikeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdApikeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$post']>) {
      return parseResponse(client.apps[':appId'].apikeys.$post(args, options))
    },
  })
}

export function usePostAppsAppIdApikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['apikeys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdApikeysMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdApikeysIdMutationKey() {
  return ['apps', '/apps/:appId/apikeys/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdApikeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdApikeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].apikeys[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdApikeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdApikeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdApipartnersQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
) {
  return ['apps', '/apps/:appId/apipartners', args] as const
}

export function getAppsAppIdApipartnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdApipartnersQueryKey>
  >({
    queryKey: getAppsAppIdApipartnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].apipartners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdApipartners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdApipartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdApipartnersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdApipartners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdApipartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdApipartnersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments', args] as const
}

export function getAppsAppIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsQueryKey>
  >({
    queryKey: getAppsAppIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAppsAppIdAttachmentsMutationKey() {
  return ['apps', '/apps/:appId/attachments', 'PUT'] as const
}

export function getPutAppsAppIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['attachments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppsAppIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$put']>,
    ) {
      return parseResponse(client.apps[':appId'].attachments.$put(args, options))
    },
  })
}

export function usePutAppsAppIdAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['attachments']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAppsAppIdAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdAttachmentsMutationKey() {
  return ['apps', '/apps/:appId/attachments', 'POST'] as const
}

export function getPostAppsAppIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].attachments.$post(args, options))
    },
  })
}

export function usePostAppsAppIdAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['attachments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdAttachmentsDownloadQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/download', args] as const
}

export function getAppsAppIdAttachmentsDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsDownloadQueryKey>
  >({
    queryKey: getAppsAppIdAttachmentsDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].attachments.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAttachmentsDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsDownloadQueryKey>
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
      ...getAppsAppIdAttachmentsDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAttachmentsDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsDownloadQueryKey>
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
      ...getAppsAppIdAttachmentsDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdAttachmentsSapDownloadQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/sap-download', args] as const
}

export function getAppsAppIdAttachmentsSapDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsSapDownloadQueryKey>
  >({
    queryKey: getAppsAppIdAttachmentsSapDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].attachments['sap-download'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAttachmentsSapDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsSapDownloadQueryKey>
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
      ...getAppsAppIdAttachmentsSapDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAttachmentsSapDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsSapDownloadQueryKey>
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
      ...getAppsAppIdAttachmentsSapDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdAttachmentsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/:id', args] as const
}

export function getAppsAppIdAttachmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsIdQueryKey>
  >({
    queryKey: getAppsAppIdAttachmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].attachments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsIdQueryKey>
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
      ...getAppsAppIdAttachmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsIdQueryKey>
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
      ...getAppsAppIdAttachmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdAttachmentsIdMutationKey() {
  return ['apps', '/apps/:appId/attachments/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdAttachmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdAttachmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].attachments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdAttachmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdAttachmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdAttachmentsIdPdfQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
) {
  return ['apps', '/apps/:appId/attachments/:id/pdf', args] as const
}

export function getAppsAppIdAttachmentsIdPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsIdPdfQueryKey>
  >({
    queryKey: getAppsAppIdAttachmentsIdPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].attachments[':id'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdAttachmentsIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsIdPdfQueryKey>
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
      ...getAppsAppIdAttachmentsIdPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdAttachmentsIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdAttachmentsIdPdfQueryKey>
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
      ...getAppsAppIdAttachmentsIdPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdBankdetailsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
) {
  return ['apps', '/apps/:appId/bankdetails', args] as const
}

export function getAppsAppIdBankdetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBankdetailsQueryKey>
  >({
    queryKey: getAppsAppIdBankdetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].bankdetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBankdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBankdetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdBankdetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBankdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBankdetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdBankdetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdBankdetailsMutationKey() {
  return ['apps', '/apps/:appId/bankdetails', 'POST'] as const
}

export function getPostAppsAppIdBankdetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBankdetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].bankdetails.$post(args, options))
    },
  })
}

export function usePostAppsAppIdBankdetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdBankdetailsMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdBankdetailsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/bankdetails/:id', args] as const
}

export function getAppsAppIdBankdetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBankdetailsIdQueryKey>
  >({
    queryKey: getAppsAppIdBankdetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].bankdetails[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBankdetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBankdetailsIdQueryKey>
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
      ...getAppsAppIdBankdetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBankdetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBankdetailsIdQueryKey>
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
      ...getAppsAppIdBankdetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdBankdetailsIdMutationKey() {
  return ['apps', '/apps/:appId/bankdetails/:id', 'POST'] as const
}

export function getPostAppsAppIdBankdetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBankdetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].bankdetails[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdBankdetailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdBankdetailsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdBankdetailsIdMutationKey() {
  return ['apps', '/apps/:appId/bankdetails/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdBankdetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdBankdetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].bankdetails[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdBankdetailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdBankdetailsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdBanksIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/', args] as const
}

export function getAppsAppIdBanksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIndexQueryKey>
  >({
    queryKey: getAppsAppIdBanksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].banks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBanksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdBanksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBanksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdBanksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAppsAppIdBanksIndexMutationKey() {
  return ['apps', '/apps/:appId/banks/', 'DELETE'] as const
}

export function getDeleteAppsAppIdBanksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdBanksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].banks.index.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdBanksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdBanksIndexMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdBanksConnectQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/connect', args] as const
}

export function getAppsAppIdBanksConnectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksConnectQueryKey>
  >({
    queryKey: getAppsAppIdBanksConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].banks.connect.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBanksConnect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksConnectQueryKey>
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
      ...getAppsAppIdBanksConnectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBanksConnect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksConnectQueryKey>
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
      ...getAppsAppIdBanksConnectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdBanksSynchronizeMutationKey() {
  return ['apps', '/apps/:appId/banks/synchronize', 'POST'] as const
}

export function getPostAppsAppIdBanksSynchronizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBanksSynchronizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].banks.synchronize.$post(args, options))
    },
  })
}

export function usePostAppsAppIdBanksSynchronize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdBanksSynchronizeMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdBanksIdFunnelEditQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/edit', args] as const
}

export function getAppsAppIdBanksIdFunnelEditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIdFunnelEditQueryKey>
  >({
    queryKey: getAppsAppIdBanksIdFunnelEditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].banks[':id'].funnel.edit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBanksIdFunnelEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIdFunnelEditQueryKey>
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
      ...getAppsAppIdBanksIdFunnelEditQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBanksIdFunnelEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIdFunnelEditQueryKey>
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
      ...getAppsAppIdBanksIdFunnelEditQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdBanksIdFunnelSyncQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/sync', args] as const
}

export function getAppsAppIdBanksIdFunnelSyncQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIdFunnelSyncQueryKey>
  >({
    queryKey: getAppsAppIdBanksIdFunnelSyncQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].banks[':id'].funnel.sync.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBanksIdFunnelSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIdFunnelSyncQueryKey>
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
      ...getAppsAppIdBanksIdFunnelSyncQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBanksIdFunnelSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIdFunnelSyncQueryKey>
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
      ...getAppsAppIdBanksIdFunnelSyncQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdBanksIdFunnelValidateQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/validate', args] as const
}

export function getAppsAppIdBanksIdFunnelValidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIdFunnelValidateQueryKey>
  >({
    queryKey: getAppsAppIdBanksIdFunnelValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].banks[':id'].funnel.validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdBanksIdFunnelValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIdFunnelValidateQueryKey>
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
      ...getAppsAppIdBanksIdFunnelValidateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdBanksIdFunnelValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdBanksIdFunnelValidateQueryKey>
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
      ...getAppsAppIdBanksIdFunnelValidateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdBanksIdSelectAccountsMutationKey() {
  return ['apps', '/apps/:appId/banks/:id/select_accounts', 'POST'] as const
}

export function getPostAppsAppIdBanksIdSelectAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdBanksIdSelectAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].banks[':id'].select_accounts.$post(args, options))
    },
  })
}

export function usePostAppsAppIdBanksIdSelectAccounts<
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
                  (typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']
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
  const mutationDefaults = getPostAppsAppIdBanksIdSelectAccountsMutationOptions<
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

export function getAppsAppIdCashflowsourcesIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/cashflowsources/', args] as const
}

export function getAppsAppIdCashflowsourcesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdCashflowsourcesIndexQueryKey>
  >({
    queryKey: getAppsAppIdCashflowsourcesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].cashflowsources.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdCashflowsourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdCashflowsourcesIndexQueryKey>
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
      ...getAppsAppIdCashflowsourcesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdCashflowsourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdCashflowsourcesIndexQueryKey>
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
      ...getAppsAppIdCashflowsourcesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdCashflowsourcesIndexMutationKey() {
  return ['apps', '/apps/:appId/cashflowsources/', 'POST'] as const
}

export function getPostAppsAppIdCashflowsourcesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdCashflowsourcesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].cashflowsources.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdCashflowsourcesIndex<
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
                ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdCashflowsourcesIndexMutationOptions<
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

export function getAppsAppIdCashflowsourcesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/cashflowsources/:id', args] as const
}

export function getAppsAppIdCashflowsourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdCashflowsourcesIdQueryKey>
  >({
    queryKey: getAppsAppIdCashflowsourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].cashflowsources[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdCashflowsourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdCashflowsourcesIdQueryKey>
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
      ...getAppsAppIdCashflowsourcesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdCashflowsourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdCashflowsourcesIdQueryKey>
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
      ...getAppsAppIdCashflowsourcesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdCashflowsourcesIdMutationKey() {
  return ['apps', '/apps/:appId/cashflowsources/:id', 'POST'] as const
}

export function getPostAppsAppIdCashflowsourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdCashflowsourcesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].cashflowsources[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdCashflowsourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdCashflowsourcesIdMutationOptions<
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

export function getDeleteAppsAppIdCashflowsourcesIdMutationKey() {
  return ['apps', '/apps/:appId/cashflowsources/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdCashflowsourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdCashflowsourcesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].cashflowsources[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdCashflowsourcesId<
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
                ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdCashflowsourcesIdMutationOptions<
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

export function getPostAppsAppIdContactsMergeMutationKey() {
  return ['apps', '/apps/:appId/contacts/merge', 'POST'] as const
}

export function getPostAppsAppIdContactsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdContactsMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].contacts.merge.$post(args, options))
    },
  })
}

export function usePostAppsAppIdContactsMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdContactsMergeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdEmailBatchMutationKey() {
  return ['apps', '/apps/:appId/email/batch', 'POST'] as const
}

export function getPostAppsAppIdEmailBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['email']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['email']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdEmailBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['email']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].email.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdEmailBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['email']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['email']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdEmailBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdEmailDocumentMutationKey() {
  return ['apps', '/apps/:appId/email/document', 'POST'] as const
}

export function getPostAppsAppIdEmailDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['email']['document']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['email']['document']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdEmailDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['email']['document']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].email.document.$post(args, options))
    },
  })
}

export function usePostAppsAppIdEmailDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['email']['document']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['email']['document']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdEmailDocumentMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdEstablishmentsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/establishments/:id', args] as const
}

export function getAppsAppIdEstablishmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdEstablishmentsIdQueryKey>
  >({
    queryKey: getAppsAppIdEstablishmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].establishments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdEstablishmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdEstablishmentsIdQueryKey>
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
      ...getAppsAppIdEstablishmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdEstablishmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdEstablishmentsIdQueryKey>
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
      ...getAppsAppIdEstablishmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdEstablishmentsIdMutationKey() {
  return ['apps', '/apps/:appId/establishments/:id', 'POST'] as const
}

export function getPostAppsAppIdEstablishmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdEstablishmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].establishments[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdEstablishmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdEstablishmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdEstablishmentsIdMutationKey() {
  return ['apps', '/apps/:appId/establishments/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdEstablishmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdEstablishmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].establishments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdEstablishmentsId<
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
                ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdEstablishmentsIdMutationOptions<
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

export function getAppsAppIdExportsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
) {
  return ['apps', '/apps/:appId/exports', args] as const
}

export function getAppsAppIdExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsQueryKey>
  >({
    queryKey: getAppsAppIdExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].exports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdExportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdExportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdExportsMutationKey() {
  return ['apps', '/apps/:appId/exports', 'POST'] as const
}

export function getPostAppsAppIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdExportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['exports']['$post']>) {
      return parseResponse(client.apps[':appId'].exports.$post(args, options))
    },
  })
}

export function usePostAppsAppIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['exports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdExportsMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdExportsAcdComptaQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/acd_compta', args] as const
}

export function getAppsAppIdExportsAcdComptaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsAcdComptaQueryKey>
  >({
    queryKey: getAppsAppIdExportsAcdComptaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].exports.acd_compta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdExportsAcdCompta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsAcdComptaQueryKey>
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
      ...getAppsAppIdExportsAcdComptaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdExportsAcdCompta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsAcdComptaQueryKey>
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
      ...getAppsAppIdExportsAcdComptaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdExportsAcdComptaMutationKey() {
  return ['apps', '/apps/:appId/exports/acd_compta', 'POST'] as const
}

export function getPostAppsAppIdExportsAcdComptaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdExportsAcdComptaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].exports.acd_compta.$post(args, options))
    },
  })
}

export function usePostAppsAppIdExportsAcdCompta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdExportsAcdComptaMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdExportsDownloadQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/download', args] as const
}

export function getAppsAppIdExportsDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsDownloadQueryKey>
  >({
    queryKey: getAppsAppIdExportsDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].exports.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdExportsDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsDownloadQueryKey>
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
      ...getAppsAppIdExportsDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdExportsDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsDownloadQueryKey>
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
      ...getAppsAppIdExportsDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdExportsMonthsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/months', args] as const
}

export function getAppsAppIdExportsMonthsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsMonthsQueryKey>
  >({
    queryKey: getAppsAppIdExportsMonthsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].exports.months.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdExportsMonths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsMonthsQueryKey>
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
      ...getAppsAppIdExportsMonthsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdExportsMonths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsMonthsQueryKey>
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
      ...getAppsAppIdExportsMonthsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdExportsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/exports/:id', args] as const
}

export function getAppsAppIdExportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsIdQueryKey>
  >({
    queryKey: getAppsAppIdExportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].exports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdExportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdExportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdExportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdExportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdExportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAppsAppIdExportsIdMutationKey() {
  return ['apps', '/apps/:appId/exports/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdExportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdExportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].exports[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdExportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdExportsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdInvoicesQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices', args] as const
}

export function getAppsAppIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdInvoicesMutationKey() {
  return ['apps', '/apps/:appId/invoices', 'POST'] as const
}

export function getPostAppsAppIdInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$post']>) {
      return parseResponse(client.apps[':appId'].invoices.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdInvoicesBatchMutationKey() {
  return ['apps', '/apps/:appId/invoices/batch', 'POST'] as const
}

export function getPostAppsAppIdInvoicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdInvoicesBatchMutationKey() {
  return ['apps', '/apps/:appId/invoices/batch', 'DELETE'] as const
}

export function getDeleteAppsAppIdInvoicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdInvoicesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices.batch.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdInvoicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdInvoicesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdInvoicesDownloadQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/download', args] as const
}

export function getAppsAppIdInvoicesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesDownloadQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoicesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesDownloadQueryKey>
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
      ...getAppsAppIdInvoicesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoicesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesDownloadQueryKey>
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
      ...getAppsAppIdInvoicesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdInvoicesFreshMutationKey() {
  return ['apps', '/apps/:appId/invoices/fresh', 'POST'] as const
}

export function getPostAppsAppIdInvoicesFreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesFreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices.fresh.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesFresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesFreshMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdInvoicesNextnumberQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/nextnumber', args] as const
}

export function getAppsAppIdInvoicesNextnumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesNextnumberQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesNextnumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices.nextnumber.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoicesNextnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesNextnumberQueryKey>
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
      ...getAppsAppIdInvoicesNextnumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoicesNextnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesNextnumberQueryKey>
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
      ...getAppsAppIdInvoicesNextnumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdInvoicesStatisticsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/statistics', args] as const
}

export function getAppsAppIdInvoicesStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesStatisticsQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoicesStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesStatisticsQueryKey>
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
      ...getAppsAppIdInvoicesStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoicesStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesStatisticsQueryKey>
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
      ...getAppsAppIdInvoicesStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/:id', args] as const
}

export function getAppsAppIdInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesIdQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdInvoicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdInvoicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdInvoicesIdMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdInvoicesIdMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdInvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdInvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdInvoicesIdAttachMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/attach', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].attach.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdInvoicesIdAttachMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/attach', 'DELETE'] as const
}

export function getDeleteAppsAppIdInvoicesIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdInvoicesIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].attach.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdInvoicesIdAttach<
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
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdInvoicesIdAttachMutationOptions<
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

export function getPostAppsAppIdInvoicesIdAvoidMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/avoid', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdAvoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdAvoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].avoid.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesIdAvoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesIdAvoidMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdInvoicesIdDuplicateMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/duplicate', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].duplicate.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesIdDuplicate<
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
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesIdDuplicateMutationOptions<
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

export function getPostAppsAppIdInvoicesIdFinalizeMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/finalize', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].finalize.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesIdFinalize<
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
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesIdFinalizeMutationOptions<
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

export function getAppsAppIdInvoicesIdPdfQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/:id/pdf', args] as const
}

export function getAppsAppIdInvoicesIdPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesIdPdfQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesIdPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices[':id'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoicesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesIdPdfQueryKey>
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
      ...getAppsAppIdInvoicesIdPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoicesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesIdPdfQueryKey>
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
      ...getAppsAppIdInvoicesIdPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdInvoicesIdPreviewJpgQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
) {
  return ['apps', '/apps/:appId/invoices/:id/preview.jpg', args] as const
}

export function getAppsAppIdInvoicesIdPreviewJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesIdPreviewJpgQueryKey>
  >({
    queryKey: getAppsAppIdInvoicesIdPreviewJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].invoices[':id']['preview.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdInvoicesIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesIdPreviewJpgQueryKey>
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
      ...getAppsAppIdInvoicesIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdInvoicesIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdInvoicesIdPreviewJpgQueryKey>
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
      ...getAppsAppIdInvoicesIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdInvoicesIdTagMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/tag', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].tag.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdInvoicesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdInvoicesIdTagMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/tag', 'DELETE'] as const
}

export function getDeleteAppsAppIdInvoicesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdInvoicesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].tag.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdInvoicesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdInvoicesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdInvoicesIdUpdatestatusMutationKey() {
  return ['apps', '/apps/:appId/invoices/:id/updatestatus', 'POST'] as const
}

export function getPostAppsAppIdInvoicesIdUpdatestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdInvoicesIdUpdatestatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].invoices[':id'].updatestatus.$post(args, options))
    },
  })
}

export function usePostAppsAppIdInvoicesIdUpdatestatus<
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
                  (typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']
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
  const mutationDefaults = getPostAppsAppIdInvoicesIdUpdatestatusMutationOptions<
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

export function getAppsAppIdLogsAutoreconcileIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/logs/autoreconcile/', args] as const
}

export function getAppsAppIdLogsAutoreconcileIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdLogsAutoreconcileIndexQueryKey>
  >({
    queryKey: getAppsAppIdLogsAutoreconcileIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].logs.autoreconcile.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdLogsAutoreconcileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdLogsAutoreconcileIndexQueryKey>
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
      ...getAppsAppIdLogsAutoreconcileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdLogsAutoreconcileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdLogsAutoreconcileIndexQueryKey>
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
      ...getAppsAppIdLogsAutoreconcileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdLogsAutoreconcileIndexMutationKey() {
  return ['apps', '/apps/:appId/logs/autoreconcile/', 'POST'] as const
}

export function getPostAppsAppIdLogsAutoreconcileIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdLogsAutoreconcileIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].logs.autoreconcile.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdLogsAutoreconcileIndex<
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
                  (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdLogsAutoreconcileIndexMutationOptions<
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

export function getDeleteAppsAppIdLogsAutoreconcileIndexMutationKey() {
  return ['apps', '/apps/:appId/logs/autoreconcile/', 'DELETE'] as const
}

export function getDeleteAppsAppIdLogsAutoreconcileIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdLogsAutoreconcileIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].logs.autoreconcile.index.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdLogsAutoreconcileIndex<
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
                  (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']
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
  const mutationDefaults = getDeleteAppsAppIdLogsAutoreconcileIndexMutationOptions<
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

export function getAppsAppIdOrganizationQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
) {
  return ['apps', '/apps/:appId/organization', args] as const
}

export function getAppsAppIdOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationQueryKey>
  >({
    queryKey: getAppsAppIdOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationQueryKey>
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
      ...getAppsAppIdOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationQueryKey>
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
      ...getAppsAppIdOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdOrganizationMutationKey() {
  return ['apps', '/apps/:appId/organization', 'POST'] as const
}

export function getPostAppsAppIdOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['organization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['organization']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].organization.$post(args, options))
    },
  })
}

export function usePostAppsAppIdOrganization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['organization']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdOrganizationMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdOrganizationsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
) {
  return ['apps', '/apps/:appId/organizations', args] as const
}

export function getAppsAppIdOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationsQueryKey>
  >({
    queryKey: getAppsAppIdOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].organizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationsQueryKey>
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
      ...getAppsAppIdOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationsQueryKey>
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
      ...getAppsAppIdOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdOrganizationsMutationKey() {
  return ['apps', '/apps/:appId/organizations', 'POST'] as const
}

export function getPostAppsAppIdOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['organizations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdOrganizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].organizations.$post(args, options))
    },
  })
}

export function usePostAppsAppIdOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['organizations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdOrganizationsBatchMutationKey() {
  return ['apps', '/apps/:appId/organizations/batch', 'POST'] as const
}

export function getPostAppsAppIdOrganizationsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdOrganizationsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].organizations.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdOrganizationsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdOrganizationsBatchMutationOptions<
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

export function getAppsAppIdOrganizationsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/organizations/:id', args] as const
}

export function getAppsAppIdOrganizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationsIdQueryKey>
  >({
    queryKey: getAppsAppIdOrganizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].organizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationsIdQueryKey>
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
      ...getAppsAppIdOrganizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationsIdQueryKey>
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
      ...getAppsAppIdOrganizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdOrganizationsIdMutationKey() {
  return ['apps', '/apps/:appId/organizations/:id', 'POST'] as const
}

export function getPostAppsAppIdOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdOrganizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].organizations[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdOrganizationsIdMutationKey() {
  return ['apps', '/apps/:appId/organizations/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdOrganizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].organizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdOrganizationsIdMutationOptions<
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

export function getAppsAppIdOrganizationsIdRestoreQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
) {
  return ['apps', '/apps/:appId/organizations/:id/restore', args] as const
}

export function getAppsAppIdOrganizationsIdRestoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationsIdRestoreQueryKey>
  >({
    queryKey: getAppsAppIdOrganizationsIdRestoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].organizations[':id'].restore.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdOrganizationsIdRestore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationsIdRestoreQueryKey>
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
      ...getAppsAppIdOrganizationsIdRestoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdOrganizationsIdRestore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdOrganizationsIdRestoreQueryKey>
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
      ...getAppsAppIdOrganizationsIdRestoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
) {
  return ['apps', '/apps/:appId/payments', args] as const
}

export function getAppsAppIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPaymentsQueryKey>
  >({
    queryKey: getAppsAppIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdPaymentsRecipeBookQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
) {
  return ['apps', '/apps/:appId/payments/recipe_book', args] as const
}

export function getAppsAppIdPaymentsRecipeBookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPaymentsRecipeBookQueryKey>
  >({
    queryKey: getAppsAppIdPaymentsRecipeBookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].payments.recipe_book.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPaymentsRecipeBook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPaymentsRecipeBookQueryKey>
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
      ...getAppsAppIdPaymentsRecipeBookQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPaymentsRecipeBook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPaymentsRecipeBookQueryKey>
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
      ...getAppsAppIdPaymentsRecipeBookQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/payments/:id', args] as const
}

export function getAppsAppIdPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPaymentsIdQueryKey>
  >({
    queryKey: getAppsAppIdPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].payments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPaymentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPaymentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAppsAppIdPaymentsIdMutationKey() {
  return ['apps', '/apps/:appId/payments/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdPaymentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].payments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdPersonsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
) {
  return ['apps', '/apps/:appId/persons', args] as const
}

export function getAppsAppIdPersonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPersonsQueryKey>
  >({
    queryKey: getAppsAppIdPersonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].persons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPersonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPersonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPersonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPersonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdPersonsMutationKey() {
  return ['apps', '/apps/:appId/persons', 'POST'] as const
}

export function getPostAppsAppIdPersonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['persons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPersonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['persons']['$post']>) {
      return parseResponse(client.apps[':appId'].persons.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPersons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['persons']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPersonsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdPersonsBatchMutationKey() {
  return ['apps', '/apps/:appId/persons/batch', 'POST'] as const
}

export function getPostAppsAppIdPersonsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['persons']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPersonsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['persons']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].persons.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPersonsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['persons']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPersonsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdPersonsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/persons/:id', args] as const
}

export function getAppsAppIdPersonsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPersonsIdQueryKey>
  >({
    queryKey: getAppsAppIdPersonsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].persons[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPersonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPersonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPersonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPersonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPersonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPersonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdPersonsIdMutationKey() {
  return ['apps', '/apps/:appId/persons/:id', 'POST'] as const
}

export function getPostAppsAppIdPersonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPersonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].persons[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdPersonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPersonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdPersonsIdMutationKey() {
  return ['apps', '/apps/:appId/persons/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdPersonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdPersonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].persons[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdPersonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdPersonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdPersonsIdRestoreQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
) {
  return ['apps', '/apps/:appId/persons/:id/restore', args] as const
}

export function getAppsAppIdPersonsIdRestoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPersonsIdRestoreQueryKey>
  >({
    queryKey: getAppsAppIdPersonsIdRestoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].persons[':id'].restore.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPersonsIdRestore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPersonsIdRestoreQueryKey>
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
      ...getAppsAppIdPersonsIdRestoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPersonsIdRestore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPersonsIdRestoreQueryKey>
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
      ...getAppsAppIdPersonsIdRestoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdPingQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
) {
  return ['apps', '/apps/:appId/ping', args] as const
}

export function getAppsAppIdPingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPingQueryKey>
  >({
    queryKey: getAppsAppIdPingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].ping.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppIdPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdProductcategoryQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
) {
  return ['apps', '/apps/:appId/productcategory', args] as const
}

export function getAppsAppIdProductcategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductcategoryQueryKey>
  >({
    queryKey: getAppsAppIdProductcategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].productcategory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdProductcategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductcategoryQueryKey>
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
      ...getAppsAppIdProductcategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdProductcategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductcategoryQueryKey>
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
      ...getAppsAppIdProductcategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdProductcategoryMutationKey() {
  return ['apps', '/apps/:appId/productcategory', 'POST'] as const
}

export function getPostAppsAppIdProductcategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productcategory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductcategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].productcategory.$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductcategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['productcategory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductcategoryMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdProductcategoryIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/productcategory/:id', args] as const
}

export function getAppsAppIdProductcategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductcategoryIdQueryKey>
  >({
    queryKey: getAppsAppIdProductcategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].productcategory[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdProductcategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductcategoryIdQueryKey>
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
      ...getAppsAppIdProductcategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdProductcategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductcategoryIdQueryKey>
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
      ...getAppsAppIdProductcategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdProductcategoryIdMutationKey() {
  return ['apps', '/apps/:appId/productcategory/:id', 'POST'] as const
}

export function getPostAppsAppIdProductcategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductcategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].productcategory[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductcategoryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductcategoryIdMutationOptions<
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

export function getDeleteAppsAppIdProductcategoryIdMutationKey() {
  return ['apps', '/apps/:appId/productcategory/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdProductcategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdProductcategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].productcategory[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdProductcategoryId<
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
                ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdProductcategoryIdMutationOptions<
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

export function getAppsAppIdProductsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
) {
  return ['apps', '/apps/:appId/products', args] as const
}

export function getAppsAppIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductsQueryKey>
  >({
    queryKey: getAppsAppIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdProductsMutationKey() {
  return ['apps', '/apps/:appId/products', 'POST'] as const
}

export function getPostAppsAppIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['products']['$post']>) {
      return parseResponse(client.apps[':appId'].products.$post(args, options))
    },
  })
}

export function usePostAppsAppIdProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['products']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdProductsBatchMutationKey() {
  return ['apps', '/apps/:appId/products/batch', 'POST'] as const
}

export function getPostAppsAppIdProductsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['products']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['products']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].products.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['products']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdProductsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/products/:id', args] as const
}

export function getAppsAppIdProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductsIdQueryKey>
  >({
    queryKey: getAppsAppIdProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].products[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdProductsIdMutationKey() {
  return ['apps', '/apps/:appId/products/:id', 'POST'] as const
}

export function getPostAppsAppIdProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].products[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdProductsIdMutationKey() {
  return ['apps', '/apps/:appId/products/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdProductsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].products[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdProductsIdAttachMutationKey() {
  return ['apps', '/apps/:appId/products/:id/attach', 'POST'] as const
}

export function getPostAppsAppIdProductsIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductsIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].products[':id'].attach.$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductsIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductsIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdProductsIdAttachMutationKey() {
  return ['apps', '/apps/:appId/products/:id/attach', 'DELETE'] as const
}

export function getDeleteAppsAppIdProductsIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdProductsIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['products'][':id']['attach']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].products[':id'].attach.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdProductsIdAttach<
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
                ReturnType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdProductsIdAttachMutationOptions<
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

export function getAppsAppIdProductstocksQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
) {
  return ['apps', '/apps/:appId/productstocks', args] as const
}

export function getAppsAppIdProductstocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductstocksQueryKey>
  >({
    queryKey: getAppsAppIdProductstocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].productstocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdProductstocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductstocksQueryKey>
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
      ...getAppsAppIdProductstocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdProductstocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductstocksQueryKey>
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
      ...getAppsAppIdProductstocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdProductstocksMutationKey() {
  return ['apps', '/apps/:appId/productstocks', 'POST'] as const
}

export function getPostAppsAppIdProductstocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productstocks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductstocksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].productstocks.$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductstocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['productstocks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductstocksMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdProductstocksIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/productstocks/:id', args] as const
}

export function getAppsAppIdProductstocksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductstocksIdQueryKey>
  >({
    queryKey: getAppsAppIdProductstocksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].productstocks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdProductstocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductstocksIdQueryKey>
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
      ...getAppsAppIdProductstocksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdProductstocksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdProductstocksIdQueryKey>
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
      ...getAppsAppIdProductstocksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdProductstocksIdMutationKey() {
  return ['apps', '/apps/:appId/productstocks/:id', 'POST'] as const
}

export function getPostAppsAppIdProductstocksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductstocksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].productstocks[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductstocksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdProductstocksIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdProductstocksIdMutationKey() {
  return ['apps', '/apps/:appId/productstocks/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdProductstocksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdProductstocksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].productstocks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdProductstocksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdProductstocksIdMutationOptions<
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

export function getPostAppsAppIdProductstocksIdDestructMutationKey() {
  return ['apps', '/apps/:appId/productstocks/:id/destruct', 'POST'] as const
}

export function getPostAppsAppIdProductstocksIdDestructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductstocksIdDestructMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].productstocks[':id'].destruct.$post(args, options))
    },
  })
}

export function usePostAppsAppIdProductstocksIdDestruct<
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
                  (typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']
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
  const mutationDefaults = getPostAppsAppIdProductstocksIdDestructMutationOptions<
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

export function getPostAppsAppIdProductstocksIdRentalBackMutationKey() {
  return ['apps', '/apps/:appId/productstocks/:id/rental/back', 'POST'] as const
}

export function getPostAppsAppIdProductstocksIdRentalBackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductstocksIdRentalBackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].productstocks[':id'].rental.back.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdProductstocksIdRentalBack<
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
                  (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
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
  const mutationDefaults = getPostAppsAppIdProductstocksIdRentalBackMutationOptions<
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

export function getPostAppsAppIdProductstocksIdRentalExitMutationKey() {
  return ['apps', '/apps/:appId/productstocks/:id/rental/exit', 'POST'] as const
}

export function getPostAppsAppIdProductstocksIdRentalExitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdProductstocksIdRentalExitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].productstocks[':id'].rental.exit.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdProductstocksIdRentalExit<
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
                  (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
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
  const mutationDefaults = getPostAppsAppIdProductstocksIdRentalExitMutationOptions<
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

export function getAppsAppIdPurchasesQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases', args] as const
}

export function getAppsAppIdPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPurchasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPurchasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdPurchasesMutationKey() {
  return ['apps', '/apps/:appId/purchases', 'POST'] as const
}

export function getPostAppsAppIdPurchasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPurchasesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$post']>) {
      return parseResponse(client.apps[':appId'].purchases.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPurchases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPurchasesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdPurchasesBatchMutationKey() {
  return ['apps', '/apps/:appId/purchases/batch', 'POST'] as const
}

export function getPostAppsAppIdPurchasesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPurchasesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPurchasesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPurchasesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdPurchasesBatchMutationKey() {
  return ['apps', '/apps/:appId/purchases/batch', 'DELETE'] as const
}

export function getDeleteAppsAppIdPurchasesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdPurchasesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases.batch.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdPurchasesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdPurchasesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdPurchasesDownloadQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/download', args] as const
}

export function getAppsAppIdPurchasesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesDownloadQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchasesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesDownloadQueryKey>
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
      ...getAppsAppIdPurchasesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchasesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesDownloadQueryKey>
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
      ...getAppsAppIdPurchasesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdPurchasesStatisticsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/statistics', args] as const
}

export function getAppsAppIdPurchasesStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesStatisticsQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchasesStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesStatisticsQueryKey>
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
      ...getAppsAppIdPurchasesStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchasesStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesStatisticsQueryKey>
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
      ...getAppsAppIdPurchasesStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdPurchasesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/:id', args] as const
}

export function getAppsAppIdPurchasesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdPurchasesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdPurchasesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdPurchasesIdMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id', 'POST'] as const
}

export function getPostAppsAppIdPurchasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPurchasesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdPurchasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPurchasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdPurchasesIdMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdPurchasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdPurchasesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdPurchasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdPurchasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdPurchasesIdAttachMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id/attach', 'POST'] as const
}

export function getPostAppsAppIdPurchasesIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPurchasesIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].attach.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPurchasesIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPurchasesIdAttachMutationOptions<
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

export function getDeleteAppsAppIdPurchasesIdAttachMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id/attach', 'DELETE'] as const
}

export function getDeleteAppsAppIdPurchasesIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdPurchasesIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].attach.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdPurchasesIdAttach<
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
                ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdPurchasesIdAttachMutationOptions<
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

export function getAppsAppIdPurchasesIdOriginalQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/:id/original', args] as const
}

export function getAppsAppIdPurchasesIdOriginalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdOriginalQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesIdOriginalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases[':id'].original.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchasesIdOriginal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdOriginalQueryKey>
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
      ...getAppsAppIdPurchasesIdOriginalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchasesIdOriginal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdOriginalQueryKey>
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
      ...getAppsAppIdPurchasesIdOriginalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdPurchasesIdPreviewJpgQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
) {
  return ['apps', '/apps/:appId/purchases/:id/preview.jpg', args] as const
}

export function getAppsAppIdPurchasesIdPreviewJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdPreviewJpgQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesIdPreviewJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases[':id']['preview.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchasesIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdPreviewJpgQueryKey>
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
      ...getAppsAppIdPurchasesIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchasesIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdPreviewJpgQueryKey>
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
      ...getAppsAppIdPurchasesIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdPurchasesIdTagMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id/tag', 'POST'] as const
}

export function getPostAppsAppIdPurchasesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPurchasesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].tag.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPurchasesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdPurchasesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdPurchasesIdTagMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id/tag', 'DELETE'] as const
}

export function getDeleteAppsAppIdPurchasesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdPurchasesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].tag.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdPurchasesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdPurchasesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdPurchasesIdThumbnailJpgQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
) {
  return ['apps', '/apps/:appId/purchases/:id/thumbnail.jpg', args] as const
}

export function getAppsAppIdPurchasesIdThumbnailJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdThumbnailJpgQueryKey>
  >({
    queryKey: getAppsAppIdPurchasesIdThumbnailJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].purchases[':id']['thumbnail.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdPurchasesIdThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdThumbnailJpgQueryKey>
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
      ...getAppsAppIdPurchasesIdThumbnailJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdPurchasesIdThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdPurchasesIdThumbnailJpgQueryKey>
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
      ...getAppsAppIdPurchasesIdThumbnailJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdPurchasesIdUpdatestatusMutationKey() {
  return ['apps', '/apps/:appId/purchases/:id/updatestatus', 'POST'] as const
}

export function getPostAppsAppIdPurchasesIdUpdatestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdPurchasesIdUpdatestatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].purchases[':id'].updatestatus.$post(args, options))
    },
  })
}

export function usePostAppsAppIdPurchasesIdUpdatestatus<
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
                  (typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']
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
  const mutationDefaults = getPostAppsAppIdPurchasesIdUpdatestatusMutationOptions<
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

export function getAppsAppIdQuotesQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes', args] as const
}

export function getAppsAppIdQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesQueryKey>
  >({
    queryKey: getAppsAppIdQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdQuotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdQuotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdQuotesMutationKey() {
  return ['apps', '/apps/:appId/quotes', 'POST'] as const
}

export function getPostAppsAppIdQuotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$post']>) {
      return parseResponse(client.apps[':appId'].quotes.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdQuotesBatchMutationKey() {
  return ['apps', '/apps/:appId/quotes/batch', 'POST'] as const
}

export function getPostAppsAppIdQuotesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdQuotesBatchMutationKey() {
  return ['apps', '/apps/:appId/quotes/batch', 'DELETE'] as const
}

export function getDeleteAppsAppIdQuotesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdQuotesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes.batch.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdQuotesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdQuotesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdQuotesDownloadQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/download', args] as const
}

export function getAppsAppIdQuotesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesDownloadQueryKey>
  >({
    queryKey: getAppsAppIdQuotesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesDownloadQueryKey>
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
      ...getAppsAppIdQuotesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesDownloadQueryKey>
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
      ...getAppsAppIdQuotesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdQuotesFreshMutationKey() {
  return ['apps', '/apps/:appId/quotes/fresh', 'POST'] as const
}

export function getPostAppsAppIdQuotesFreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesFreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes.fresh.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesFresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesFreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdQuotesInvoiceMutationKey() {
  return ['apps', '/apps/:appId/quotes/invoice', 'POST'] as const
}

export function getPostAppsAppIdQuotesInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes.invoice.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesInvoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesInvoiceMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdQuotesNextnumberQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/nextnumber', args] as const
}

export function getAppsAppIdQuotesNextnumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesNextnumberQueryKey>
  >({
    queryKey: getAppsAppIdQuotesNextnumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes.nextnumber.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesNextnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesNextnumberQueryKey>
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
      ...getAppsAppIdQuotesNextnumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesNextnumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesNextnumberQueryKey>
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
      ...getAppsAppIdQuotesNextnumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdQuotesStatisticsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/statistics', args] as const
}

export function getAppsAppIdQuotesStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesStatisticsQueryKey>
  >({
    queryKey: getAppsAppIdQuotesStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesStatisticsQueryKey>
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
      ...getAppsAppIdQuotesStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesStatisticsQueryKey>
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
      ...getAppsAppIdQuotesStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdQuotesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/:id', args] as const
}

export function getAppsAppIdQuotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdQueryKey>
  >({
    queryKey: getAppsAppIdQuotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdQuotesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdQuotesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdQuotesIdMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdQuotesIdMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdQuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdQuotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdQuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdQuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdQuotesIdAttachMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/attach', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].attach.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdQuotesIdAttachMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/attach', 'DELETE'] as const
}

export function getDeleteAppsAppIdQuotesIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdQuotesIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].attach.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdQuotesIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdQuotesIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdQuotesIdDownpaymentMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/downpayment', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdDownpaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdDownpaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].downpayment.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdDownpayment<
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
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdDownpaymentMutationOptions<
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

export function getPostAppsAppIdQuotesIdDuplicateMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/duplicate', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].duplicate.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdDuplicateMutationOptions<
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

export function getPostAppsAppIdQuotesIdFinalizeMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/finalize', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].finalize.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdFinalizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdQuotesIdInvoiceMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/invoice', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].invoice.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdInvoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdInvoiceMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdQuotesIdPdfQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/:id/pdf', args] as const
}

export function getAppsAppIdQuotesIdPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdPdfQueryKey>
  >({
    queryKey: getAppsAppIdQuotesIdPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdQuotesIdPdfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdQuotesIdPdfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdQuotesIdPreviewJpgQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
) {
  return ['apps', '/apps/:appId/quotes/:id/preview.jpg', args] as const
}

export function getAppsAppIdQuotesIdPreviewJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdPreviewJpgQueryKey>
  >({
    queryKey: getAppsAppIdQuotesIdPreviewJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes[':id']['preview.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdPreviewJpgQueryKey>
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
      ...getAppsAppIdQuotesIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdPreviewJpgQueryKey>
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
      ...getAppsAppIdQuotesIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdQuotesIdSituationInvoiceMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/situation_invoice', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdSituationInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdSituationInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].situation_invoice.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdQuotesIdSituationInvoice<
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
                  (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
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
  const mutationDefaults = getPostAppsAppIdQuotesIdSituationInvoiceMutationOptions<
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

export function getPostAppsAppIdQuotesIdTagMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/tag', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].tag.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdQuotesIdTagMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/tag', 'DELETE'] as const
}

export function getDeleteAppsAppIdQuotesIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdQuotesIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].tag.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdQuotesIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdQuotesIdTagMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdQuotesIdUpdatestatusMutationKey() {
  return ['apps', '/apps/:appId/quotes/:id/updatestatus', 'POST'] as const
}

export function getPostAppsAppIdQuotesIdUpdatestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdQuotesIdUpdatestatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].quotes[':id'].updatestatus.$post(args, options))
    },
  })
}

export function usePostAppsAppIdQuotesIdUpdatestatus<
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
                ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdQuotesIdUpdatestatusMutationOptions<
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

export function getAppsAppIdQuotesIdYousignPreviewJpgQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
) {
  return ['apps', '/apps/:appId/quotes/:id/yousign/preview.jpg', args] as const
}

export function getAppsAppIdQuotesIdYousignPreviewJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdYousignPreviewJpgQueryKey>
  >({
    queryKey: getAppsAppIdQuotesIdYousignPreviewJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].yousign['preview.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdQuotesIdYousignPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdYousignPreviewJpgQueryKey>
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
      ...getAppsAppIdQuotesIdYousignPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdQuotesIdYousignPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdQuotesIdYousignPreviewJpgQueryKey>
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
      ...getAppsAppIdQuotesIdYousignPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdReconcileMutationKey() {
  return ['apps', '/apps/:appId/reconcile', 'POST'] as const
}

export function getPostAppsAppIdReconcileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['reconcile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdReconcileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['reconcile']['$post']>) {
      return parseResponse(client.apps[':appId'].reconcile.$post(args, options))
    },
  })
}

export function usePostAppsAppIdReconcile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['reconcile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdReconcileMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdReconcileMutationKey() {
  return ['apps', '/apps/:appId/reconcile', 'DELETE'] as const
}

export function getDeleteAppsAppIdReconcileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['reconcile']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdReconcileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['reconcile']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].reconcile.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdReconcile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['reconcile']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdReconcileMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdReconcileBatchMutationKey() {
  return ['apps', '/apps/:appId/reconcile/batch', 'POST'] as const
}

export function getPostAppsAppIdReconcileBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdReconcileBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].reconcile.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdReconcileBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdReconcileBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdRecurringinvoicesQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
) {
  return ['apps', '/apps/:appId/recurringinvoices', args] as const
}

export function getAppsAppIdRecurringinvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesQueryKey>
  >({
    queryKey: getAppsAppIdRecurringinvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRecurringinvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesQueryKey>
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
      ...getAppsAppIdRecurringinvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRecurringinvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesQueryKey>
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
      ...getAppsAppIdRecurringinvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdRecurringinvoicesMutationKey() {
  return ['apps', '/apps/:appId/recurringinvoices', 'POST'] as const
}

export function getPostAppsAppIdRecurringinvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRecurringinvoicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].recurringinvoices.$post(args, options))
    },
  })
}

export function usePostAppsAppIdRecurringinvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRecurringinvoicesMutationOptions<
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

export function getPostAppsAppIdRecurringinvoicesBatchMutationKey() {
  return ['apps', '/apps/:appId/recurringinvoices/batch', 'POST'] as const
}

export function getPostAppsAppIdRecurringinvoicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRecurringinvoicesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].recurringinvoices.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdRecurringinvoicesBatch<
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
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRecurringinvoicesBatchMutationOptions<
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

export function getDeleteAppsAppIdRecurringinvoicesBatchMutationKey() {
  return ['apps', '/apps/:appId/recurringinvoices/batch', 'DELETE'] as const
}

export function getDeleteAppsAppIdRecurringinvoicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdRecurringinvoicesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].recurringinvoices.batch.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdRecurringinvoicesBatch<
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
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdRecurringinvoicesBatchMutationOptions<
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

export function getAppsAppIdRecurringinvoicesPeriodsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
) {
  return ['apps', '/apps/:appId/recurringinvoices/periods', args] as const
}

export function getAppsAppIdRecurringinvoicesPeriodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesPeriodsQueryKey>
  >({
    queryKey: getAppsAppIdRecurringinvoicesPeriodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices.periods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRecurringinvoicesPeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesPeriodsQueryKey>
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
      ...getAppsAppIdRecurringinvoicesPeriodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRecurringinvoicesPeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesPeriodsQueryKey>
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
      ...getAppsAppIdRecurringinvoicesPeriodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdRecurringinvoicesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/recurringinvoices/:id', args] as const
}

export function getAppsAppIdRecurringinvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesIdQueryKey>
  >({
    queryKey: getAppsAppIdRecurringinvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRecurringinvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesIdQueryKey>
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
      ...getAppsAppIdRecurringinvoicesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRecurringinvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesIdQueryKey>
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
      ...getAppsAppIdRecurringinvoicesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdRecurringinvoicesIdMutationKey() {
  return ['apps', '/apps/:appId/recurringinvoices/:id', 'POST'] as const
}

export function getPostAppsAppIdRecurringinvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRecurringinvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].recurringinvoices[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdRecurringinvoicesId<
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
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRecurringinvoicesIdMutationOptions<
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

export function getDeleteAppsAppIdRecurringinvoicesIdMutationKey() {
  return ['apps', '/apps/:appId/recurringinvoices/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdRecurringinvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdRecurringinvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].recurringinvoices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdRecurringinvoicesId<
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
                ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdRecurringinvoicesIdMutationOptions<
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

export function getAppsAppIdRecurringinvoicesIdPlanQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
) {
  return ['apps', '/apps/:appId/recurringinvoices/:id/plan', args] as const
}

export function getAppsAppIdRecurringinvoicesIdPlanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesIdPlanQueryKey>
  >({
    queryKey: getAppsAppIdRecurringinvoicesIdPlanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices[':id'].plan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRecurringinvoicesIdPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesIdPlanQueryKey>
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
      ...getAppsAppIdRecurringinvoicesIdPlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRecurringinvoicesIdPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRecurringinvoicesIdPlanQueryKey>
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
      ...getAppsAppIdRecurringinvoicesIdPlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdRelationshipsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
) {
  return ['apps', '/apps/:appId/relationships', args] as const
}

export function getAppsAppIdRelationshipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRelationshipsQueryKey>
  >({
    queryKey: getAppsAppIdRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].relationships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRelationshipsQueryKey>
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
      ...getAppsAppIdRelationshipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRelationshipsQueryKey>
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
      ...getAppsAppIdRelationshipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdRelationshipsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/relationships/:id', args] as const
}

export function getAppsAppIdRelationshipsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRelationshipsIdQueryKey>
  >({
    queryKey: getAppsAppIdRelationshipsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].relationships[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRelationshipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRelationshipsIdQueryKey>
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
      ...getAppsAppIdRelationshipsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRelationshipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRelationshipsIdQueryKey>
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
      ...getAppsAppIdRelationshipsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdRelationshipsIdMutationKey() {
  return ['apps', '/apps/:appId/relationships/:id', 'POST'] as const
}

export function getPostAppsAppIdRelationshipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRelationshipsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].relationships[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdRelationshipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRelationshipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdRelationshipsIdAttachMutationKey() {
  return ['apps', '/apps/:appId/relationships/:id/attach', 'POST'] as const
}

export function getPostAppsAppIdRelationshipsIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRelationshipsIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].relationships[':id'].attach.$post(args, options))
    },
  })
}

export function usePostAppsAppIdRelationshipsIdAttach<
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
                  (typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRelationshipsIdAttachMutationOptions<
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

export function getDeleteAppsAppIdRelationshipsIdAttachMutationKey() {
  return ['apps', '/apps/:appId/relationships/:id/attach', 'DELETE'] as const
}

export function getDeleteAppsAppIdRelationshipsIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdRelationshipsIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].relationships[':id'].attach.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdRelationshipsIdAttach<
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
                  (typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']
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
  const mutationDefaults = getDeleteAppsAppIdRelationshipsIdAttachMutationOptions<
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

export function getPostAppsAppIdResetMutationKey() {
  return ['apps', '/apps/:appId/reset', 'POST'] as const
}

export function getPostAppsAppIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['reset']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdResetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['reset']['$post']>) {
      return parseResponse(client.apps[':appId'].reset.$post(args, options))
    },
  })
}

export function usePostAppsAppIdReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['reset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdResetMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdRulesIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/rules/', args] as const
}

export function getAppsAppIdRulesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesIndexQueryKey>
  >({
    queryKey: getAppsAppIdRulesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].rules.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRulesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdRulesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRulesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdRulesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdRulesIndexMutationKey() {
  return ['apps', '/apps/:appId/rules/', 'POST'] as const
}

export function getPostAppsAppIdRulesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRulesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].rules.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdRulesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRulesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdRulesExecuteOnMutationKey() {
  return ['apps', '/apps/:appId/rules/execute_on', 'POST'] as const
}

export function getPostAppsAppIdRulesExecuteOnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRulesExecuteOnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].rules.execute_on.$post(args, options))
    },
  })
}

export function usePostAppsAppIdRulesExecuteOn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRulesExecuteOnMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdRulesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/rules/:id', args] as const
}

export function getAppsAppIdRulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesIdQueryKey>
  >({
    queryKey: getAppsAppIdRulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].rules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdRulesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdRulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdRulesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdRulesIdMutationKey() {
  return ['apps', '/apps/:appId/rules/:id', 'POST'] as const
}

export function getPostAppsAppIdRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].rules[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdRulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdRulesIdMutationKey() {
  return ['apps', '/apps/:appId/rules/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].rules[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdRulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdSalesdocumentmodelsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
) {
  return ['apps', '/apps/:appId/salesdocumentmodels', args] as const
}

export function getAppsAppIdSalesdocumentmodelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSalesdocumentmodelsQueryKey>
  >({
    queryKey: getAppsAppIdSalesdocumentmodelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].salesdocumentmodels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSalesdocumentmodels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSalesdocumentmodelsQueryKey>
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
      ...getAppsAppIdSalesdocumentmodelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSalesdocumentmodels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSalesdocumentmodelsQueryKey>
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
      ...getAppsAppIdSalesdocumentmodelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSalesdocumentmodelsMutationKey() {
  return ['apps', '/apps/:appId/salesdocumentmodels', 'POST'] as const
}

export function getPostAppsAppIdSalesdocumentmodelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSalesdocumentmodelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].salesdocumentmodels.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSalesdocumentmodels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSalesdocumentmodelsMutationOptions<
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

export function getAppsAppIdSalesdocumentmodelsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', args] as const
}

export function getAppsAppIdSalesdocumentmodelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSalesdocumentmodelsIdQueryKey>
  >({
    queryKey: getAppsAppIdSalesdocumentmodelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].salesdocumentmodels[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSalesdocumentmodelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSalesdocumentmodelsIdQueryKey>
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
      ...getAppsAppIdSalesdocumentmodelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSalesdocumentmodelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSalesdocumentmodelsIdQueryKey>
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
      ...getAppsAppIdSalesdocumentmodelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSalesdocumentmodelsIdMutationKey() {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', 'POST'] as const
}

export function getPostAppsAppIdSalesdocumentmodelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSalesdocumentmodelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdSalesdocumentmodelsId<
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
                ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSalesdocumentmodelsIdMutationOptions<
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

export function getDeleteAppsAppIdSalesdocumentmodelsIdMutationKey() {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdSalesdocumentmodelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdSalesdocumentmodelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdSalesdocumentmodelsId<
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
                ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdSalesdocumentmodelsIdMutationOptions<
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

export function getAppsAppIdSepamandatesIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/', args] as const
}

export function getAppsAppIdSepamandatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesIndexQueryKey>
  >({
    queryKey: getAppsAppIdSepamandatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].sepamandates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSepamandatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesIndexQueryKey>
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
      ...getAppsAppIdSepamandatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSepamandatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesIndexQueryKey>
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
      ...getAppsAppIdSepamandatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSepamandatesIndexMutationKey() {
  return ['apps', '/apps/:appId/sepamandates/', 'POST'] as const
}

export function getPostAppsAppIdSepamandatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSepamandatesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].sepamandates.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSepamandatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSepamandatesIndexMutationOptions<
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

export function getAppsAppIdSepamandatesCredittransferQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/credittransfer', args] as const
}

export function getAppsAppIdSepamandatesCredittransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesCredittransferQueryKey>
  >({
    queryKey: getAppsAppIdSepamandatesCredittransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].sepamandates.credittransfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSepamandatesCredittransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesCredittransferQueryKey>
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
      ...getAppsAppIdSepamandatesCredittransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSepamandatesCredittransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesCredittransferQueryKey>
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
      ...getAppsAppIdSepamandatesCredittransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSepamandatesCredittransferMutationKey() {
  return ['apps', '/apps/:appId/sepamandates/credittransfer', 'POST'] as const
}

export function getPostAppsAppIdSepamandatesCredittransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSepamandatesCredittransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].sepamandates.credittransfer.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSepamandatesCredittransfer<
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
                  (typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSepamandatesCredittransferMutationOptions<
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

export function getAppsAppIdSepamandatesDirectdebitQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/directdebit', args] as const
}

export function getAppsAppIdSepamandatesDirectdebitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesDirectdebitQueryKey>
  >({
    queryKey: getAppsAppIdSepamandatesDirectdebitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].sepamandates.directdebit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSepamandatesDirectdebit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesDirectdebitQueryKey>
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
      ...getAppsAppIdSepamandatesDirectdebitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSepamandatesDirectdebit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesDirectdebitQueryKey>
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
      ...getAppsAppIdSepamandatesDirectdebitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSepamandatesDirectdebitMutationKey() {
  return ['apps', '/apps/:appId/sepamandates/directdebit', 'POST'] as const
}

export function getPostAppsAppIdSepamandatesDirectdebitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSepamandatesDirectdebitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].sepamandates.directdebit.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSepamandatesDirectdebit<
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
                ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSepamandatesDirectdebitMutationOptions<
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

export function getAppsAppIdSepamandatesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/sepamandates/:id', args] as const
}

export function getAppsAppIdSepamandatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesIdQueryKey>
  >({
    queryKey: getAppsAppIdSepamandatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].sepamandates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSepamandatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesIdQueryKey>
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
      ...getAppsAppIdSepamandatesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSepamandatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSepamandatesIdQueryKey>
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
      ...getAppsAppIdSepamandatesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSepamandatesIdMutationKey() {
  return ['apps', '/apps/:appId/sepamandates/:id', 'POST'] as const
}

export function getPostAppsAppIdSepamandatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSepamandatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].sepamandates[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdSepamandatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSepamandatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdSepamandatesIdMutationKey() {
  return ['apps', '/apps/:appId/sepamandates/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdSepamandatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdSepamandatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].sepamandates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdSepamandatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdSepamandatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdServicesStripeWebhookQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
) {
  return ['apps', '/apps/:appId/services/stripe/webhook', args] as const
}

export function getAppsAppIdServicesStripeWebhookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdServicesStripeWebhookQueryKey>
  >({
    queryKey: getAppsAppIdServicesStripeWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].services.stripe.webhook.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdServicesStripeWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdServicesStripeWebhookQueryKey>
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
      ...getAppsAppIdServicesStripeWebhookQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdServicesStripeWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdServicesStripeWebhookQueryKey>
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
      ...getAppsAppIdServicesStripeWebhookQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdServicesStripeWebhookMutationKey() {
  return ['apps', '/apps/:appId/services/stripe/webhook', 'POST'] as const
}

export function getPostAppsAppIdServicesStripeWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdServicesStripeWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].services.stripe.webhook.$post(args, options))
    },
  })
}

export function usePostAppsAppIdServicesStripeWebhook<
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
                ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdServicesStripeWebhookMutationOptions<
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

export function getPostAppsAppIdServicesYousignWebhookMutationKey() {
  return ['apps', '/apps/:appId/services/yousign/webhook', 'POST'] as const
}

export function getPostAppsAppIdServicesYousignWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdServicesYousignWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].services.yousign.webhook.$post(args, options))
    },
  })
}

export function usePostAppsAppIdServicesYousignWebhook<
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
                  (typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdServicesYousignWebhookMutationOptions<
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

export function getAppsAppIdSettingsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
) {
  return ['apps', '/apps/:appId/settings', args] as const
}

export function getAppsAppIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSettingsQueryKey>
  >({
    queryKey: getAppsAppIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdSettingsMutationKey() {
  return ['apps', '/apps/:appId/settings', 'POST'] as const
}

export function getPostAppsAppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['settings']['$post']>) {
      return parseResponse(client.apps[':appId'].settings.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['settings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdSignatureMutationKey() {
  return ['apps', '/apps/:appId/signature', 'POST'] as const
}

export function getPostAppsAppIdSignatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['signature']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['signature']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSignatureMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['signature']['$post']>) {
      return parseResponse(client.apps[':appId'].signature.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSignature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['signature']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['signature']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSignatureMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdStatisticsChartsTypeQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
) {
  return ['apps', '/apps/:appId/statistics/charts/:type', args] as const
}

export function getAppsAppIdStatisticsChartsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsChartsTypeQueryKey>
  >({
    queryKey: getAppsAppIdStatisticsChartsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].statistics.charts[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdStatisticsChartsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsChartsTypeQueryKey>
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
      ...getAppsAppIdStatisticsChartsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdStatisticsChartsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsChartsTypeQueryKey>
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
      ...getAppsAppIdStatisticsChartsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdStatisticsTimetablePurchasesQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
) {
  return ['apps', '/apps/:appId/statistics/timetable/purchases', args] as const
}

export function getAppsAppIdStatisticsTimetablePurchasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsTimetablePurchasesQueryKey>
  >({
    queryKey: getAppsAppIdStatisticsTimetablePurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].statistics.timetable.purchases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdStatisticsTimetablePurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsTimetablePurchasesQueryKey>
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
      ...getAppsAppIdStatisticsTimetablePurchasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdStatisticsTimetablePurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsTimetablePurchasesQueryKey>
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
      ...getAppsAppIdStatisticsTimetablePurchasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdStatisticsTimetableSalesQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
) {
  return ['apps', '/apps/:appId/statistics/timetable/sales', args] as const
}

export function getAppsAppIdStatisticsTimetableSalesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsTimetableSalesQueryKey>
  >({
    queryKey: getAppsAppIdStatisticsTimetableSalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].statistics.timetable.sales.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdStatisticsTimetableSales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsTimetableSalesQueryKey>
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
      ...getAppsAppIdStatisticsTimetableSalesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdStatisticsTimetableSales<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsTimetableSalesQueryKey>
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
      ...getAppsAppIdStatisticsTimetableSalesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdStatisticsVatQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
) {
  return ['apps', '/apps/:appId/statistics/vat', args] as const
}

export function getAppsAppIdStatisticsVatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsVatQueryKey>
  >({
    queryKey: getAppsAppIdStatisticsVatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].statistics.vat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdStatisticsVat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsVatQueryKey>
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
      ...getAppsAppIdStatisticsVatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdStatisticsVat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdStatisticsVatQueryKey>
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
      ...getAppsAppIdStatisticsVatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSubscriptionAnchordateMutationKey() {
  return ['apps', '/apps/:appId/subscription/anchordate', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionAnchordateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionAnchordateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].subscription.anchordate.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSubscriptionAnchordate<
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
                ReturnType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSubscriptionAnchordateMutationOptions<
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

export function getAppsAppIdSubscriptionCheckoutAddSourceQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
) {
  return ['apps', '/apps/:appId/subscription/checkout_add_source', args] as const
}

export function getAppsAppIdSubscriptionCheckoutAddSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionCheckoutAddSourceQueryKey>
  >({
    queryKey: getAppsAppIdSubscriptionCheckoutAddSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].subscription.checkout_add_source.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSubscriptionCheckoutAddSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionCheckoutAddSourceQueryKey>
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
      ...getAppsAppIdSubscriptionCheckoutAddSourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSubscriptionCheckoutAddSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionCheckoutAddSourceQueryKey>
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
      ...getAppsAppIdSubscriptionCheckoutAddSourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSubscriptionCouponMutationKey() {
  return ['apps', '/apps/:appId/subscription/coupon', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionCouponMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionCouponMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].subscription.coupon.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSubscriptionCoupon<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSubscriptionCouponMutationOptions<
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

export function getPostAppsAppIdSubscriptionExtendTrialMutationKey() {
  return ['apps', '/apps/:appId/subscription/extend_trial', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionExtendTrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionExtendTrialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['subscription']['extend_trial']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].subscription.extend_trial.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSubscriptionExtendTrial<
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
                ReturnType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSubscriptionExtendTrialMutationOptions<
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

export function getPostAppsAppIdSubscriptionExtraStripePlanMutationKey() {
  return ['apps', '/apps/:appId/subscription/extra/:stripe_plan', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionExtraStripePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionExtraStripePlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].subscription.extra[':stripe_plan'].$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdSubscriptionExtraStripePlan<
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
                  (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
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
  const mutationDefaults = getPostAppsAppIdSubscriptionExtraStripePlanMutationOptions<
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

export function getPostAppsAppIdSubscriptionPayAllMutationKey() {
  return ['apps', '/apps/:appId/subscription/pay_all', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionPayAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionPayAllMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].subscription.pay_all.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSubscriptionPayAll<
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
                ReturnType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSubscriptionPayAllMutationOptions<
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

export function getAppsAppIdSubscriptionPlanQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
) {
  return ['apps', '/apps/:appId/subscription/plan', args] as const
}

export function getAppsAppIdSubscriptionPlanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlanQueryKey>
  >({
    queryKey: getAppsAppIdSubscriptionPlanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].subscription.plan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSubscriptionPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlanQueryKey>
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
      ...getAppsAppIdSubscriptionPlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSubscriptionPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlanQueryKey>
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
      ...getAppsAppIdSubscriptionPlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAppsAppIdSubscriptionPlanMutationKey() {
  return ['apps', '/apps/:appId/subscription/plan', 'DELETE'] as const
}

export function getDeleteAppsAppIdSubscriptionPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdSubscriptionPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].subscription.plan.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdSubscriptionPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdSubscriptionPlanMutationOptions<
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

export function getAppsAppIdSubscriptionPlansQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
) {
  return ['apps', '/apps/:appId/subscription/plans', args] as const
}

export function getAppsAppIdSubscriptionPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlansQueryKey>
  >({
    queryKey: getAppsAppIdSubscriptionPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].subscription.plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSubscriptionPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlansQueryKey>
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
      ...getAppsAppIdSubscriptionPlansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSubscriptionPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlansQueryKey>
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
      ...getAppsAppIdSubscriptionPlansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdSubscriptionPlansStripePlanQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan', args] as const
}

export function getAppsAppIdSubscriptionPlansStripePlanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanQueryKey>
  >({
    queryKey: getAppsAppIdSubscriptionPlansStripePlanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].subscription.plans[':stripe_plan'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSubscriptionPlansStripePlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanQueryKey>
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
      ...getAppsAppIdSubscriptionPlansStripePlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSubscriptionPlansStripePlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanQueryKey>
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
      ...getAppsAppIdSubscriptionPlansStripePlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSubscriptionPlansStripePlanMutationKey() {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionPlansStripePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionPlansStripePlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':appId'].subscription.plans[':stripe_plan'].$post(args, options),
      )
    },
  })
}

export function usePostAppsAppIdSubscriptionPlansStripePlan<
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
                  (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
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
  const mutationDefaults = getPostAppsAppIdSubscriptionPlansStripePlanMutationOptions<
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

export function getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan/checkout', args] as const
}

export function getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey>
  >({
    queryKey: getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].subscription.plans[':stripe_plan'].checkout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdSubscriptionPlansStripePlanCheckout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey>
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
      ...getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdSubscriptionPlansStripePlanCheckout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey>
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
      ...getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdSubscriptionSourceMutationKey() {
  return ['apps', '/apps/:appId/subscription/source', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].subscription.source.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSubscriptionSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdSubscriptionSourceMutationOptions<
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

export function getDeleteAppsAppIdSubscriptionSourceMutationKey() {
  return ['apps', '/apps/:appId/subscription/source', 'DELETE'] as const
}

export function getDeleteAppsAppIdSubscriptionSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdSubscriptionSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].subscription.source.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdSubscriptionSource<
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
                ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdSubscriptionSourceMutationOptions<
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

export function getPostAppsAppIdSubscriptionSourceDefaultMutationKey() {
  return ['apps', '/apps/:appId/subscription/source/default', 'POST'] as const
}

export function getPostAppsAppIdSubscriptionSourceDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['subscription']['source']['default']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['default']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdSubscriptionSourceDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['subscription']['source']['default']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].subscription.source.default.$post(args, options))
    },
  })
}

export function usePostAppsAppIdSubscriptionSourceDefault<
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
                  (typeof client.apps)[':appId']['subscription']['source']['default']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['subscription']['source']['default']['$post']
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
  const mutationDefaults = getPostAppsAppIdSubscriptionSourceDefaultMutationOptions<
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

export function getAppsAppIdTagsQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
) {
  return ['apps', '/apps/:appId/tags', args] as const
}

export function getAppsAppIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTagsQueryKey>
  >({
    queryKey: getAppsAppIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppsAppIdTemplatesQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
) {
  return ['apps', '/apps/:appId/templates', args] as const
}

export function getAppsAppIdTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTemplatesQueryKey>
  >({
    queryKey: getAppsAppIdTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdTemplatesMutationKey() {
  return ['apps', '/apps/:appId/templates', 'POST'] as const
}

export function getPostAppsAppIdTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':appId']['templates']['$post']>) {
      return parseResponse(client.apps[':appId'].templates.$post(args, options))
    },
  })
}

export function usePostAppsAppIdTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['templates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdTemplatesBatchMutationKey() {
  return ['apps', '/apps/:appId/templates/batch', 'POST'] as const
}

export function getPostAppsAppIdTemplatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['templates']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTemplatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['templates']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].templates.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdTemplatesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['templates']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTemplatesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdTemplatesDefaultQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
) {
  return ['apps', '/apps/:appId/templates/default', args] as const
}

export function getAppsAppIdTemplatesDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTemplatesDefaultQueryKey>
  >({
    queryKey: getAppsAppIdTemplatesDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].templates.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdTemplatesDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTemplatesDefaultQueryKey>
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
      ...getAppsAppIdTemplatesDefaultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdTemplatesDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTemplatesDefaultQueryKey>
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
      ...getAppsAppIdTemplatesDefaultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppIdTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/templates/:id', args] as const
}

export function getAppsAppIdTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTemplatesIdQueryKey>
  >({
    queryKey: getAppsAppIdTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppIdTemplatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppIdTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppIdTemplatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppIdTemplatesIdMutationKey() {
  return ['apps', '/apps/:appId/templates/:id', 'POST'] as const
}

export function getPostAppsAppIdTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].templates[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdTransactionsIndexQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
) {
  return ['apps', '/apps/:appId/transactions/', args] as const
}

export function getAppsAppIdTransactionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTransactionsIndexQueryKey>
  >({
    queryKey: getAppsAppIdTransactionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].transactions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTransactionsIndexQueryKey>
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
      ...getAppsAppIdTransactionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTransactionsIndexQueryKey>
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
      ...getAppsAppIdTransactionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdTransactionsIndexMutationKey() {
  return ['apps', '/apps/:appId/transactions/', 'POST'] as const
}

export function getPostAppsAppIdTransactionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTransactionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].transactions.index.$post(args, options))
    },
  })
}

export function usePostAppsAppIdTransactionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTransactionsIndexMutationOptions<
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

export function getPostAppsAppIdTransactionsBatchMutationKey() {
  return ['apps', '/apps/:appId/transactions/batch', 'POST'] as const
}

export function getPostAppsAppIdTransactionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTransactionsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].transactions.batch.$post(args, options))
    },
  })
}

export function usePostAppsAppIdTransactionsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTransactionsBatchMutationOptions<
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

export function getAppsAppIdTransactionsIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
) {
  return ['apps', '/apps/:appId/transactions/:id', args] as const
}

export function getAppsAppIdTransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTransactionsIdQueryKey>
  >({
    queryKey: getAppsAppIdTransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].transactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTransactionsIdQueryKey>
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
      ...getAppsAppIdTransactionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdTransactionsIdQueryKey>
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
      ...getAppsAppIdTransactionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdTransactionsIdMutationKey() {
  return ['apps', '/apps/:appId/transactions/:id', 'POST'] as const
}

export function getPostAppsAppIdTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTransactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].transactions[':id'].$post(args, options))
    },
  })
}

export function usePostAppsAppIdTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppsAppIdTransactionsIdMutationKey() {
  return ['apps', '/apps/:appId/transactions/:id', 'DELETE'] as const
}

export function getDeleteAppsAppIdTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdTransactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>,
    ) {
      return parseResponse(client.apps[':appId'].transactions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppIdTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppsAppIdTransactionsIdAttachMutationKey() {
  return ['apps', '/apps/:appId/transactions/:id/attach', 'POST'] as const
}

export function getPostAppsAppIdTransactionsIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdTransactionsIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].transactions[':id'].attach.$post(args, options))
    },
  })
}

export function usePostAppsAppIdTransactionsIdAttach<
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
                ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdTransactionsIdAttachMutationOptions<
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

export function getDeleteAppsAppIdTransactionsIdAttachMutationKey() {
  return ['apps', '/apps/:appId/transactions/:id/attach', 'DELETE'] as const
}

export function getDeleteAppsAppIdTransactionsIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppIdTransactionsIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':appId'].transactions[':id'].attach.$delete(args, options))
    },
  })
}

export function useDeleteAppsAppIdTransactionsIdAttach<
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
                  (typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']
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
  const mutationDefaults = getDeleteAppsAppIdTransactionsIdAttachMutationOptions<
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

export function getPostAppsAppIdUrssafAuthMutationKey() {
  return ['apps', '/apps/:appId/urssaf/auth', 'POST'] as const
}

export function getPostAppsAppIdUrssafAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdUrssafAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].urssaf.auth.$post(args, options))
    },
  })
}

export function usePostAppsAppIdUrssafAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdUrssafAuthMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdUrssafPaymentQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
) {
  return ['apps', '/apps/:appId/urssaf/payment', args] as const
}

export function getAppsAppIdUrssafPaymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdUrssafPaymentQueryKey>
  >({
    queryKey: getAppsAppIdUrssafPaymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].urssaf.payment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdUrssafPayment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdUrssafPaymentQueryKey>
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
      ...getAppsAppIdUrssafPaymentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdUrssafPayment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdUrssafPaymentQueryKey>
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
      ...getAppsAppIdUrssafPaymentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdUrssafPaymentMutationKey() {
  return ['apps', '/apps/:appId/urssaf/payment', 'POST'] as const
}

export function getPostAppsAppIdUrssafPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdUrssafPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>,
    ) {
      return parseResponse(client.apps[':appId'].urssaf.payment.$post(args, options))
    },
  })
}

export function usePostAppsAppIdUrssafPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdUrssafPaymentMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppIdUrssafPreviewQueryKey(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
) {
  return ['apps', '/apps/:appId/urssaf/preview', args] as const
}

export function getAppsAppIdUrssafPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdUrssafPreviewQueryKey>
  >({
    queryKey: getAppsAppIdUrssafPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':appId'].urssaf.preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppIdUrssafPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdUrssafPreviewQueryKey>
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
      ...getAppsAppIdUrssafPreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppIdUrssafPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppIdUrssafPreviewQueryKey>
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
      ...getAppsAppIdUrssafPreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppIdUrssafRegisterCustomerMutationKey() {
  return ['apps', '/apps/:appId/urssaf/register_customer', 'POST'] as const
}

export function getPostAppsAppIdUrssafRegisterCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppIdUrssafRegisterCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':appId']['urssaf']['register_customer']['$post']
      >,
    ) {
      return parseResponse(client.apps[':appId'].urssaf.register_customer.$post(args, options))
    },
  })
}

export function usePostAppsAppIdUrssafRegisterCustomer<
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
                ReturnType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppIdUrssafRegisterCustomerMutationOptions<
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

export function getPostChangepasswordMutationKey() {
  return ['changepassword', '/changepassword', 'POST'] as const
}

export function getPostChangepasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changepassword.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.changepassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangepasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.changepassword.$post>) {
      return parseResponse(client.changepassword.$post(args, options))
    },
  })
}

export function usePostChangepassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changepassword.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.changepassword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChangepasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
        TError,
        InferRequestType<typeof client.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLogoutMutationKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function getPostLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.logout.$post(undefined, options))
    },
  })
}

export function usePostLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeMutationKey() {
  return ['me', '/me', 'POST'] as const
}

export function getPostMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
    TError,
    InferRequestType<typeof client.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.$post>) {
      return parseResponse(client.me.$post(args, options))
    },
  })
}

export function usePostMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
        TError,
        InferRequestType<typeof client.me.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRefreshQueryKey() {
  return ['refresh', '/refresh'] as const
}

export function getRefreshQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRefreshQueryKey>
  >({
    queryKey: getRefreshQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.refresh.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRefresh<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRefreshQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRefresh<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRefreshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRefreshQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRegisterMutationKey() {
  return ['register', '/register', 'POST'] as const
}

export function getPostRegisterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    InferRequestType<typeof client.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.register.$post>) {
      return parseResponse(client.register.$post(args, options))
    },
  })
}

export function usePostRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegisterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSendpasswordMutationKey() {
  return ['sendpassword', '/sendpassword', 'POST'] as const
}

export function getPostSendpasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendpassword.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendpassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendpasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendpassword.$post>) {
      return parseResponse(client.sendpassword.$post(args, options))
    },
  })
}

export function usePostSendpassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendpassword.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sendpassword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendpasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostServicesCollectorMutationKey() {
  return ['services', '/services/collector', 'POST'] as const
}

export function getPostServicesCollectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.collector.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.services.collector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesCollectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.services.collector.$post>) {
      return parseResponse(client.services.collector.$post(args, options))
    },
  })
}

export function usePostServicesCollector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.services.collector.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.services.collector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServicesCollectorMutationOptions<TError, TOnMutateResult>(
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

export function getServicesViesSirenQueryKey(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
) {
  return ['services', '/services/vies/:siren', args] as const
}

export function getServicesViesSirenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesViesSirenQueryKey>
  >({
    queryKey: getServicesViesSirenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.vies[':siren'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServicesViesSiren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesViesSirenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicesViesSirenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServicesViesSiren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesViesSirenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicesViesSirenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
