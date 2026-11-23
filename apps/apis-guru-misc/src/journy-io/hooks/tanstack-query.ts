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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getLinkKey() {
  return ['link'] as const
}

export function getPropertiesKey() {
  return ['properties'] as const
}

export function getSegmentsKey() {
  return ['segments'] as const
}

export function getTrackKey() {
  return ['track'] as const
}

export function getTrackingKey() {
  return ['tracking'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getDeleteAccountsMutationKey() {
  return ['accounts', '/accounts', 'DELETE'] as const
}

export function getDeleteAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$delete>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$delete>) {
      return parseResponse(client.accounts.$delete(args, options))
    },
  })
}

export function useDeleteAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountsUpsertMutationKey() {
  return ['accounts', '/accounts/upsert', 'POST'] as const
}

export function getPostAccountsUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.upsert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.upsert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsUpsertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.upsert.$post>) {
      return parseResponse(client.accounts.upsert.$post(args, options))
    },
  })
}

export function usePostAccountsUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.upsert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.upsert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsUpsertMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountsUsersAddMutationKey() {
  return ['accounts', '/accounts/users/add', 'POST'] as const
}

export function getPostAccountsUsersAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.users.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.users.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsUsersAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.users.add.$post>) {
      return parseResponse(client.accounts.users.add.$post(args, options))
    },
  })
}

export function usePostAccountsUsersAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.users.add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounts.users.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsUsersAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountsUsersRemoveMutationKey() {
  return ['accounts', '/accounts/users/remove', 'POST'] as const
}

export function getPostAccountsUsersRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.accounts.users.remove.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.accounts.users.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsUsersRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.users.remove.$post>) {
      return parseResponse(client.accounts.users.remove.$post(args, options))
    },
  })
}

export function usePostAccountsUsersRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.users.remove.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.accounts.users.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsUsersRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getEventsQueryKey() {
  return ['events', '/events'] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEventsMutationKey() {
  return ['events', '/events', 'POST'] as const
}

export function getPostEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$post>) {
      return parseResponse(client.events.$post(args, options))
    },
  })
}

export function usePostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
        TError,
        InferRequestType<typeof client.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLinkMutationKey() {
  return ['link', '/link', 'POST'] as const
}

export function getPostLinkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.$post>>>>>,
    TError,
    InferRequestType<typeof client.link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.link.$post>) {
      return parseResponse(client.link.$post(args, options))
    },
  })
}

export function usePostLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.$post>>>>>,
        TError,
        InferRequestType<typeof client.link.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPropertiesAccountsQueryKey() {
  return ['properties', '/properties/accounts'] as const
}

export function getPropertiesAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesAccountsQueryKey>
  >({
    queryKey: getPropertiesAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.properties.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePropertiesAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPropertiesAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPropertiesAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePropertiesAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPropertiesAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPropertiesAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPropertiesUsersQueryKey() {
  return ['properties', '/properties/users'] as const
}

export function getPropertiesUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesUsersQueryKey>
  >({
    queryKey: getPropertiesUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.properties.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePropertiesUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPropertiesUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPropertiesUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePropertiesUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPropertiesUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPropertiesUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSegmentsAccountsQueryKey() {
  return ['segments', '/segments/accounts'] as const
}

export function getSegmentsAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsAccountsQueryKey>
  >({
    queryKey: getSegmentsAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSegmentsAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSegmentsUsersQueryKey() {
  return ['segments', '/segments/users'] as const
}

export function getSegmentsUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsUsersQueryKey>
  >({
    queryKey: getSegmentsUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegmentsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTrackMutationKey() {
  return ['track', '/track', 'POST'] as const
}

export function getPostTrackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$post>>>>>,
    TError,
    InferRequestType<typeof client.track.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.track.$post>) {
      return parseResponse(client.track.$post(args, options))
    },
  })
}

export function usePostTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$post>>>>>,
        TError,
        InferRequestType<typeof client.track.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTrackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrackingSnippetQueryKey(
  args: InferRequestType<typeof client.tracking.snippet.$get>,
) {
  return ['tracking', '/tracking/snippet', args] as const
}

export function getTrackingSnippetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tracking.snippet.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSnippetQueryKey>
  >({
    queryKey: getTrackingSnippetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracking.snippet.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTrackingSnippet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tracking.snippet.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingSnippetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTrackingSnippetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTrackingSnippet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tracking.snippet.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTrackingSnippetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTrackingSnippetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteUsersMutationKey() {
  return ['users', '/users', 'DELETE'] as const
}

export function getDeleteUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$delete>>>>>,
    TError,
    InferRequestType<typeof client.users.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$delete>) {
      return parseResponse(client.users.$delete(args, options))
    },
  })
}

export function useDeleteUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$delete>>>>>,
        TError,
        InferRequestType<typeof client.users.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersUpsertMutationKey() {
  return ['users', '/users/upsert', 'POST'] as const
}

export function getPostUsersUpsertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.upsert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.upsert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUpsertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.upsert.$post>) {
      return parseResponse(client.users.upsert.$post(args, options))
    },
  })
}

export function usePostUsersUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.upsert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.upsert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUpsertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getValidateQueryKey() {
  return ['validate', '/validate'] as const
}

export function getValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValidateQueryKey>
  >({
    queryKey: getValidateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.validate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getValidateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
