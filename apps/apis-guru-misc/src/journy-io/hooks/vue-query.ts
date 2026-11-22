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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$delete>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.upsert.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.upsert.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEventsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.$post>>>>>,
          TError,
          InferRequestType<typeof client.link.$post>,
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

export function getPropertiesAccountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPropertiesAccountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.properties.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePropertiesAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>
            >
          >,
          ReturnType<typeof getPropertiesAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPropertiesAccountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.properties.accounts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPropertiesUsersQueryKey() {
  return ['properties', '/properties/users'] as const
}

export function getPropertiesUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPropertiesUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.properties.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePropertiesUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>
            >
          >,
          ReturnType<typeof getPropertiesUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPropertiesUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.properties.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsAccountsQueryKey() {
  return ['segments', '/segments/accounts'] as const
}

export function getSegmentsAccountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSegmentsAccountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>
            >
          >,
          ReturnType<typeof getSegmentsAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSegmentsAccountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.accounts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsUsersQueryKey() {
  return ['segments', '/segments/users'] as const
}

export function getSegmentsUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSegmentsUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSegmentsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
          >,
          ReturnType<typeof getSegmentsUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSegmentsUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$post>>>>>,
          TError,
          InferRequestType<typeof client.track.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking.snippet.$get>>,
) {
  return ['tracking', '/tracking/snippet', toValue(args)] as const
}

export function getTrackingSnippetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking.snippet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackingSnippetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracking.snippet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrackingSnippet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracking.snippet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>
            >
          >,
          ReturnType<typeof getTrackingSnippetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracking.snippet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrackingSnippetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackingSnippetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracking.snippet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.users.$delete>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.upsert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.upsert.$post>,
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

export function getValidateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getValidateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.validate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          ReturnType<typeof getValidateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getValidateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.validate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
