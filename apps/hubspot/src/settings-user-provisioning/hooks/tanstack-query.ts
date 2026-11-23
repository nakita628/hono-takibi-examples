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

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSettingsUsers202609QueryKey(
  args: InferRequestType<(typeof client.settings.users)['2026-09']['$get']>,
) {
  return ['settings', '/settings/users/2026-09', args] as const
}

export function getSettingsUsers202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.users)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsUsers202609QueryKey>
  >({
    queryKey: getSettingsUsers202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.users['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsUsers202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.users)['2026-09']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsUsers202609QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsUsers202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.users)['2026-09']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsUsers202609QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSettingsUsers202609MutationKey() {
  return ['settings', '/settings/users/2026-09', 'POST'] as const
}

export function getPostSettingsUsers202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.users)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsUsers202609MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings.users)['2026-09']['$post']>) {
      return parseResponse(client.settings.users['2026-09'].$post(args, options))
    },
  })
}

export function usePostSettingsUsers202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.users)['2026-09']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsUsers202609MutationOptions<TError, TOnMutateResult>(
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

export function getSettingsUsers202609RolesQueryKey() {
  return ['settings', '/settings/users/2026-09/roles'] as const
}

export function getSettingsUsers202609RolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.users)['2026-09']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsUsers202609RolesQueryKey>
  >({
    queryKey: getSettingsUsers202609RolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.users['2026-09'].roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsUsers202609Roles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609RolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsUsers202609RolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsUsers202609Roles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609RolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsUsers202609RolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsUsers202609SeatsQueryKey() {
  return ['settings', '/settings/users/2026-09/seats'] as const
}

export function getSettingsUsers202609SeatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['seats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.users)['2026-09']['seats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsUsers202609SeatsQueryKey>
  >({
    queryKey: getSettingsUsers202609SeatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.users['2026-09'].seats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsUsers202609Seats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['seats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['seats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609SeatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsUsers202609SeatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsUsers202609Seats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['seats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['seats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609SeatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsUsers202609SeatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsUsers202609TeamsQueryKey() {
  return ['settings', '/settings/users/2026-09/teams'] as const
}

export function getSettingsUsers202609TeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.users)['2026-09']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsUsers202609TeamsQueryKey>
  >({
    queryKey: getSettingsUsers202609TeamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.users['2026-09'].teams.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsUsers202609Teams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609TeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsUsers202609TeamsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsUsers202609Teams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609TeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsUsers202609TeamsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsUsers202609UserIdQueryKey(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$get']>,
) {
  return ['settings', '/settings/users/2026-09/:userId', args] as const
}

export function getSettingsUsers202609UserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsUsers202609UserIdQueryKey>
  >({
    queryKey: getSettingsUsers202609UserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.users['2026-09'][':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsUsers202609UserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609UserIdQueryKey>
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
      ...getSettingsUsers202609UserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsUsers202609UserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsUsers202609UserIdQueryKey>
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
      ...getSettingsUsers202609UserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSettingsUsers202609UserIdMutationKey() {
  return ['settings', '/settings/users/2026-09/:userId', 'PUT'] as const
}

export function getPutSettingsUsers202609UserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsUsers202609UserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$put']>,
    ) {
      return parseResponse(client.settings.users['2026-09'][':userId'].$put(args, options))
    },
  })
}

export function usePutSettingsUsers202609UserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsUsers202609UserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSettingsUsers202609UserIdMutationKey() {
  return ['settings', '/settings/users/2026-09/:userId', 'DELETE'] as const
}

export function getDeleteSettingsUsers202609UserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsUsers202609UserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$delete']>,
    ) {
      return parseResponse(client.settings.users['2026-09'][':userId'].$delete(args, options))
    },
  })
}

export function useDeleteSettingsUsers202609UserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings.users)['2026-09'][':userId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsUsers202609UserIdMutationOptions<
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
