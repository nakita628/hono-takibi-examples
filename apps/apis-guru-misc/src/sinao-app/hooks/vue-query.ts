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

export function getAppsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>) {
  return ['apps', '/apps', toValue(args)] as const
}

export function getAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          ReturnType<typeof getAppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
          TError,
          InferRequestType<typeof client.apps.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>
  >,
) {
  return ['apps', '/apps/access/invite/:accessToken', toValue(args)] as const
}

export function getAppsAccessInviteAccessTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAccessInviteAccessTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.access.invite[':accessToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAccessInviteAccessTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.apps.access.invite)[':accessToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAccessInviteAccessTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAccessInviteAccessTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.access.invite[':accessToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.access.invite)[':accessToken']['register']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
) {
  return ['apps', '/apps/:appId', toValue(args)] as const
}

export function getAppsAppIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>
            >
          >,
          ReturnType<typeof getAppsAppIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['access']['$get']>>,
) {
  return ['apps', '/apps/:appId/access', toValue(args)] as const
}

export function getAppsAppIdAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['access']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].access.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['access']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccessQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['access']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].access.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAccessInviteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/access/invite', toValue(args)] as const
}

export function getAppsAppIdAccessInviteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccessInviteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].access.invite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccessInviteQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['invite']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessInviteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccessInviteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].access.invite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/access/profiles', toValue(args)] as const
}

export function getAppsAppIdAccessProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccessProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].access.profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccessProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['access']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccessProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].access.profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAccessUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/access/:userId', toValue(args)] as const
}

export function getAppsAppIdAccessUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccessUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].access[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccessUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['access'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccessUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccessUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].access[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/accountcategories/', toValue(args)] as const
}

export function getAppsAppIdAccountcategoriesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccountcategoriesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].accountcategories.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccountcategoriesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountcategoriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccountcategoriesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].accountcategories.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/accountcategories/:id', toValue(args)] as const
}

export function getAppsAppIdAccountcategoriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccountcategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].accountcategories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccountcategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountcategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccountcategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].accountcategories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/accounting_entries/', toValue(args)] as const
}

export function getAppsAppIdAccountingEntriesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccountingEntriesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].accounting_entries.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccountingEntriesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountingEntriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccountingEntriesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].accounting_entries.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAccountsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/accounts/', toValue(args)] as const
}

export function getAppsAppIdAccountsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccountsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].accounts.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccountsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccountsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].accounts.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/accounts/:id', toValue(args)] as const
}

export function getAppsAppIdAccountsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>>,
) {
  return ['apps', '/apps/:appId/apikeys', toValue(args)] as const
}

export function getAppsAppIdApikeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdApikeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].apikeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdApikeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['apikeys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdApikeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].apikeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>>,
) {
  return ['apps', '/apps/:appId/apipartners', toValue(args)] as const
}

export function getAppsAppIdApipartnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdApipartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].apipartners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdApipartnersQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['apipartners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdApipartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdApipartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].apipartners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>>,
) {
  return ['apps', '/apps/:appId/attachments', toValue(args)] as const
}

export function getAppsAppIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/attachments/download', toValue(args)] as const
}

export function getAppsAppIdAttachmentsDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAttachmentsDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].attachments.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAttachmentsDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAttachmentsDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].attachments.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAttachmentsSapDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/attachments/sap-download', toValue(args)] as const
}

export function getAppsAppIdAttachmentsSapDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAttachmentsSapDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].attachments['sap-download'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAttachmentsSapDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsSapDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAttachmentsSapDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].attachments['sap-download'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdAttachmentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/attachments/:id', toValue(args)] as const
}

export function getAppsAppIdAttachmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAttachmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].attachments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAttachmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAttachmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].attachments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/attachments/:id/pdf', toValue(args)] as const
}

export function getAppsAppIdAttachmentsIdPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdAttachmentsIdPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].attachments[':id'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdAttachmentsIdPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdAttachmentsIdPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdAttachmentsIdPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].attachments[':id'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdBankdetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>>,
) {
  return ['apps', '/apps/:appId/bankdetails', toValue(args)] as const
}

export function getAppsAppIdBankdetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBankdetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].bankdetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBankdetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBankdetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBankdetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].bankdetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/bankdetails/:id', toValue(args)] as const
}

export function getAppsAppIdBankdetailsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBankdetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].bankdetails[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBankdetailsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBankdetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBankdetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].bankdetails[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/banks/', toValue(args)] as const
}

export function getAppsAppIdBanksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBanksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].banks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBanksIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBanksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].banks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/banks/connect', toValue(args)] as const
}

export function getAppsAppIdBanksConnectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBanksConnectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].banks.connect.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBanksConnectQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['banks']['connect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksConnectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBanksConnectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].banks.connect.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/edit', toValue(args)] as const
}

export function getAppsAppIdBanksIdFunnelEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBanksIdFunnelEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].banks[':id'].funnel.edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
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
                    (typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']
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
                    (typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBanksIdFunnelEditQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIdFunnelEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBanksIdFunnelEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].banks[':id'].funnel.edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdBanksIdFunnelSyncQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/sync', toValue(args)] as const
}

export function getAppsAppIdBanksIdFunnelSyncQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBanksIdFunnelSyncQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].banks[':id'].funnel.sync.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
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
                    (typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']
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
                    (typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBanksIdFunnelSyncQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIdFunnelSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBanksIdFunnelSyncQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].banks[':id'].funnel.sync.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdBanksIdFunnelValidateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/banks/:id/funnel/validate', toValue(args)] as const
}

export function getAppsAppIdBanksIdFunnelValidateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdBanksIdFunnelValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].banks[':id'].funnel.validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
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
                    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
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
                    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdBanksIdFunnelValidateQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdBanksIdFunnelValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdBanksIdFunnelValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].banks[':id'].funnel.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/cashflowsources/', toValue(args)] as const
}

export function getAppsAppIdCashflowsourcesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdCashflowsourcesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].cashflowsources.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdCashflowsourcesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdCashflowsourcesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdCashflowsourcesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].cashflowsources.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/cashflowsources/:id', toValue(args)] as const
}

export function getAppsAppIdCashflowsourcesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdCashflowsourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].cashflowsources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdCashflowsourcesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdCashflowsourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdCashflowsourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].cashflowsources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/establishments/:id', toValue(args)] as const
}

export function getAppsAppIdEstablishmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdEstablishmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].establishments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdEstablishmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdEstablishmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdEstablishmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].establishments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>>,
) {
  return ['apps', '/apps/:appId/exports', toValue(args)] as const
}

export function getAppsAppIdExportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].exports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdExportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].exports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/exports/acd_compta', toValue(args)] as const
}

export function getAppsAppIdExportsAcdComptaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdExportsAcdComptaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].exports.acd_compta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdExportsAcdComptaQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsAcdComptaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdExportsAcdComptaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].exports.acd_compta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/exports/download', toValue(args)] as const
}

export function getAppsAppIdExportsDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdExportsDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].exports.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdExportsDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdExportsDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].exports.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdExportsMonthsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/exports/months', toValue(args)] as const
}

export function getAppsAppIdExportsMonthsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdExportsMonthsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].exports.months.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdExportsMonthsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports']['months']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsMonthsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdExportsMonthsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].exports.months.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdExportsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/exports/:id', toValue(args)] as const
}

export function getAppsAppIdExportsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdExportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].exports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdExportsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['exports'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdExportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdExportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].exports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>>,
) {
  return ['apps', '/apps/:appId/invoices', toValue(args)] as const
}

export function getAppsAppIdInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/invoices/download', toValue(args)] as const
}

export function getAppsAppIdInvoicesDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/invoices/nextnumber', toValue(args)] as const
}

export function getAppsAppIdInvoicesNextnumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesNextnumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices.nextnumber.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesNextnumberQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesNextnumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesNextnumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices.nextnumber.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdInvoicesStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/invoices/statistics', toValue(args)] as const
}

export function getAppsAppIdInvoicesStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdInvoicesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/invoices/:id', toValue(args)] as const
}

export function getAppsAppIdInvoicesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/invoices/:id/pdf', toValue(args)] as const
}

export function getAppsAppIdInvoicesIdPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesIdPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices[':id'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesIdPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesIdPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesIdPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices[':id'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdInvoicesIdPreviewJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/invoices/:id/preview.jpg', toValue(args)] as const
}

export function getAppsAppIdInvoicesIdPreviewJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdInvoicesIdPreviewJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].invoices[':id']['preview.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
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
                    (typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']
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
                    (typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdInvoicesIdPreviewJpgQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdInvoicesIdPreviewJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdInvoicesIdPreviewJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].invoices[':id']['preview.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/logs/autoreconcile/', toValue(args)] as const
}

export function getAppsAppIdLogsAutoreconcileIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdLogsAutoreconcileIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].logs.autoreconcile.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
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
                    (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']
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
                    (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdLogsAutoreconcileIndexQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdLogsAutoreconcileIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdLogsAutoreconcileIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].logs.autoreconcile.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>>,
) {
  return ['apps', '/apps/:appId/organization', toValue(args)] as const
}

export function getAppsAppIdOrganizationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdOrganizationQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>>,
) {
  return ['apps', '/apps/:appId/organizations', toValue(args)] as const
}

export function getAppsAppIdOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdOrganizationsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/organizations/:id', toValue(args)] as const
}

export function getAppsAppIdOrganizationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdOrganizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].organizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdOrganizationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdOrganizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].organizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/organizations/:id/restore', toValue(args)] as const
}

export function getAppsAppIdOrganizationsIdRestoreQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdOrganizationsIdRestoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].organizations[':id'].restore.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
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
                    (typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']
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
                    (typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdOrganizationsIdRestoreQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdOrganizationsIdRestoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdOrganizationsIdRestoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].organizations[':id'].restore.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>>,
) {
  return ['apps', '/apps/:appId/payments', toValue(args)] as const
}

export function getAppsAppIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPaymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPaymentsRecipeBookQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/payments/recipe_book', toValue(args)] as const
}

export function getAppsAppIdPaymentsRecipeBookQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPaymentsRecipeBookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].payments.recipe_book.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPaymentsRecipeBookQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPaymentsRecipeBookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPaymentsRecipeBookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].payments.recipe_book.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPaymentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/payments/:id', toValue(args)] as const
}

export function getAppsAppIdPaymentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPaymentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['payments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>>,
) {
  return ['apps', '/apps/:appId/persons', toValue(args)] as const
}

export function getAppsAppIdPersonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPersonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].persons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdPersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPersonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['persons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPersonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPersonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].persons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/persons/:id', toValue(args)] as const
}

export function getAppsAppIdPersonsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPersonsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].persons[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPersonsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPersonsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPersonsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].persons[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/persons/:id/restore', toValue(args)] as const
}

export function getAppsAppIdPersonsIdRestoreQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPersonsIdRestoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].persons[':id'].restore.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPersonsIdRestoreQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPersonsIdRestoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPersonsIdRestoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].persons[':id'].restore.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>>,
) {
  return ['apps', '/apps/:appId/ping', toValue(args)] as const
}

export function getAppsAppIdPingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].ping.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['ping']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].ping.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdProductcategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/productcategory', toValue(args)] as const
}

export function getAppsAppIdProductcategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdProductcategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].productcategory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdProductcategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductcategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdProductcategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].productcategory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/productcategory/:id', toValue(args)] as const
}

export function getAppsAppIdProductcategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdProductcategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].productcategory[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdProductcategoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductcategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdProductcategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].productcategory[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['products']['$get']>>,
) {
  return ['apps', '/apps/:appId/products', toValue(args)] as const
}

export function getAppsAppIdProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['products']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['products']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdProductsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/products/:id', toValue(args)] as const
}

export function getAppsAppIdProductsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdProductsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['products'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>>,
) {
  return ['apps', '/apps/:appId/productstocks', toValue(args)] as const
}

export function getAppsAppIdProductstocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdProductstocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].productstocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdProductstocksQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductstocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdProductstocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].productstocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/productstocks/:id', toValue(args)] as const
}

export function getAppsAppIdProductstocksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdProductstocksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].productstocks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdProductstocksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdProductstocksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdProductstocksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].productstocks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>>,
) {
  return ['apps', '/apps/:appId/purchases', toValue(args)] as const
}

export function getAppsAppIdPurchasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/purchases/download', toValue(args)] as const
}

export function getAppsAppIdPurchasesDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPurchasesStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/purchases/statistics', toValue(args)] as const
}

export function getAppsAppIdPurchasesStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>
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
                  ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPurchasesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/purchases/:id', toValue(args)] as const
}

export function getAppsAppIdPurchasesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/purchases/:id/original', toValue(args)] as const
}

export function getAppsAppIdPurchasesIdOriginalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesIdOriginalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases[':id'].original.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesIdOriginalQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdOriginalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesIdOriginalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases[':id'].original.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdPurchasesIdPreviewJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/purchases/:id/preview.jpg', toValue(args)] as const
}

export function getAppsAppIdPurchasesIdPreviewJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesIdPreviewJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases[':id']['preview.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
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
                    (typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']
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
                    (typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesIdPreviewJpgQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdPreviewJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesIdPreviewJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases[':id']['preview.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/purchases/:id/thumbnail.jpg', toValue(args)] as const
}

export function getAppsAppIdPurchasesIdThumbnailJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdPurchasesIdThumbnailJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].purchases[':id']['thumbnail.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
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
                    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
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
                    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdPurchasesIdThumbnailJpgQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdPurchasesIdThumbnailJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdPurchasesIdThumbnailJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].purchases[':id']['thumbnail.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>>,
) {
  return ['apps', '/apps/:appId/quotes', toValue(args)] as const
}

export function getAppsAppIdQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/quotes/download', toValue(args)] as const
}

export function getAppsAppIdQuotesDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/quotes/nextnumber', toValue(args)] as const
}

export function getAppsAppIdQuotesNextnumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesNextnumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes.nextnumber.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesNextnumberQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesNextnumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesNextnumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes.nextnumber.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdQuotesStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/quotes/statistics', toValue(args)] as const
}

export function getAppsAppIdQuotesStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdQuotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>,
) {
  return ['apps', '/apps/:appId/quotes/:id', toValue(args)] as const
}

export function getAppsAppIdQuotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/quotes/:id/pdf', toValue(args)] as const
}

export function getAppsAppIdQuotesIdPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesIdPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesIdPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesIdPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes[':id'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdQuotesIdPreviewJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/quotes/:id/preview.jpg', toValue(args)] as const
}

export function getAppsAppIdQuotesIdPreviewJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesIdPreviewJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes[':id']['preview.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesIdPreviewJpgQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdPreviewJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesIdPreviewJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes[':id']['preview.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
    >
  >,
) {
  return ['apps', '/apps/:appId/quotes/:id/yousign/preview.jpg', toValue(args)] as const
}

export function getAppsAppIdQuotesIdYousignPreviewJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdQuotesIdYousignPreviewJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].quotes[':id'].yousign['preview.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
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
                    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
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
                    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdQuotesIdYousignPreviewJpgQueryKey>
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
              (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdQuotesIdYousignPreviewJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdQuotesIdYousignPreviewJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].quotes[':id'].yousign['preview.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/recurringinvoices', toValue(args)] as const
}

export function getAppsAppIdRecurringinvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRecurringinvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRecurringinvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRecurringinvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].recurringinvoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/recurringinvoices/periods', toValue(args)] as const
}

export function getAppsAppIdRecurringinvoicesPeriodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRecurringinvoicesPeriodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices.periods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRecurringinvoicesPeriodsQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesPeriodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRecurringinvoicesPeriodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].recurringinvoices.periods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdRecurringinvoicesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/recurringinvoices/:id', toValue(args)] as const
}

export function getAppsAppIdRecurringinvoicesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRecurringinvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRecurringinvoicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRecurringinvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].recurringinvoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/recurringinvoices/:id/plan', toValue(args)] as const
}

export function getAppsAppIdRecurringinvoicesIdPlanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRecurringinvoicesIdPlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].recurringinvoices[':id'].plan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
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
                    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
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
                    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRecurringinvoicesIdPlanQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRecurringinvoicesIdPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRecurringinvoicesIdPlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].recurringinvoices[':id'].plan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdRelationshipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>>,
) {
  return ['apps', '/apps/:appId/relationships', toValue(args)] as const
}

export function getAppsAppIdRelationshipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRelationshipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].relationships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRelationshipsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['relationships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRelationshipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRelationshipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].relationships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdRelationshipsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/relationships/:id', toValue(args)] as const
}

export function getAppsAppIdRelationshipsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRelationshipsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].relationships[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRelationshipsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRelationshipsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRelationshipsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].relationships[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/rules/', toValue(args)] as const
}

export function getAppsAppIdRulesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRulesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].rules.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRulesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRulesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].rules.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>,
) {
  return ['apps', '/apps/:appId/rules/:id', toValue(args)] as const
}

export function getAppsAppIdRulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].rules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdRulesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['rules'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].rules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/salesdocumentmodels', toValue(args)] as const
}

export function getAppsAppIdSalesdocumentmodelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSalesdocumentmodelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].salesdocumentmodels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSalesdocumentmodelsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSalesdocumentmodelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSalesdocumentmodelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].salesdocumentmodels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/salesdocumentmodels/:id', toValue(args)] as const
}

export function getAppsAppIdSalesdocumentmodelsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSalesdocumentmodelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].salesdocumentmodels[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSalesdocumentmodelsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSalesdocumentmodelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSalesdocumentmodelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].salesdocumentmodels[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/sepamandates/', toValue(args)] as const
}

export function getAppsAppIdSepamandatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSepamandatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].sepamandates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSepamandatesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSepamandatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].sepamandates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/sepamandates/credittransfer', toValue(args)] as const
}

export function getAppsAppIdSepamandatesCredittransferQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSepamandatesCredittransferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].sepamandates.credittransfer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
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
                    (typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']
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
                    (typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSepamandatesCredittransferQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesCredittransferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSepamandatesCredittransferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].sepamandates.credittransfer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/sepamandates/directdebit', toValue(args)] as const
}

export function getAppsAppIdSepamandatesDirectdebitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSepamandatesDirectdebitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].sepamandates.directdebit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSepamandatesDirectdebitQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesDirectdebitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSepamandatesDirectdebitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].sepamandates.directdebit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/sepamandates/:id', toValue(args)] as const
}

export function getAppsAppIdSepamandatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSepamandatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].sepamandates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSepamandatesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSepamandatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSepamandatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].sepamandates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/services/stripe/webhook', toValue(args)] as const
}

export function getAppsAppIdServicesStripeWebhookQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdServicesStripeWebhookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].services.stripe.webhook.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
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
                    (typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']
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
                    (typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdServicesStripeWebhookQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdServicesStripeWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdServicesStripeWebhookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].services.stripe.webhook.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']
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
      Extract<
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
          InferRequestType<
            (typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>>,
) {
  return ['apps', '/apps/:appId/settings', toValue(args)] as const
}

export function getAppsAppIdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/statistics/charts/:type', toValue(args)] as const
}

export function getAppsAppIdStatisticsChartsTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdStatisticsChartsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].statistics.charts[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
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
                    (typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']
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
                    (typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdStatisticsChartsTypeQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsChartsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdStatisticsChartsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].statistics.charts[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdStatisticsTimetablePurchasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/statistics/timetable/purchases', toValue(args)] as const
}

export function getAppsAppIdStatisticsTimetablePurchasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdStatisticsTimetablePurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].statistics.timetable.purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']>
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
                    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
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
                    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdStatisticsTimetablePurchasesQueryKey>
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
              (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsTimetablePurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdStatisticsTimetablePurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].statistics.timetable.purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdStatisticsTimetableSalesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/statistics/timetable/sales', toValue(args)] as const
}

export function getAppsAppIdStatisticsTimetableSalesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdStatisticsTimetableSalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].statistics.timetable.sales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
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
                    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
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
                    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdStatisticsTimetableSalesQueryKey>
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
            ReturnType<(typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsTimetableSalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdStatisticsTimetableSalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].statistics.timetable.sales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdStatisticsVatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/statistics/vat', toValue(args)] as const
}

export function getAppsAppIdStatisticsVatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdStatisticsVatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].statistics.vat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdStatisticsVatQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdStatisticsVatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdStatisticsVatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].statistics.vat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/subscription/checkout_add_source', toValue(args)] as const
}

export function getAppsAppIdSubscriptionCheckoutAddSourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSubscriptionCheckoutAddSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].subscription.checkout_add_source.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']>
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
                    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
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
                    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSubscriptionCheckoutAddSourceQueryKey>
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
              (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionCheckoutAddSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSubscriptionCheckoutAddSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].subscription.checkout_add_source.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['subscription']['extend_trial']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/subscription/plan', toValue(args)] as const
}

export function getAppsAppIdSubscriptionPlanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSubscriptionPlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].subscription.plan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSubscriptionPlanQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSubscriptionPlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].subscription.plan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans', toValue(args)] as const
}

export function getAppsAppIdSubscriptionPlansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSubscriptionPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].subscription.plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSubscriptionPlansQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSubscriptionPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].subscription.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdSubscriptionPlansStripePlanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
    >
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan', toValue(args)] as const
}

export function getAppsAppIdSubscriptionPlansStripePlanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSubscriptionPlansStripePlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].subscription.plans[':stripe_plan'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
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
                    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
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
                    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanQueryKey>
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
              (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSubscriptionPlansStripePlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
    >
  >,
) {
  return ['apps', '/apps/:appId/subscription/plans/:stripe_plan/checkout', toValue(args)] as const
}

export function getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].subscription.plans[':stripe_plan'].checkout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
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
                    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
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
                    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey>
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
              (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdSubscriptionPlansStripePlanCheckoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].subscription.plans[':stripe_plan'].checkout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['subscription']['source']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>>,
) {
  return ['apps', '/apps/:appId/tags', toValue(args)] as const
}

export function getAppsAppIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>>,
) {
  return ['apps', '/apps/:appId/templates', toValue(args)] as const
}

export function getAppsAppIdTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/templates/default', toValue(args)] as const
}

export function getAppsAppIdTemplatesDefaultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdTemplatesDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].templates.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdTemplatesDefaultQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates']['default']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTemplatesDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdTemplatesDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].templates.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppIdTemplatesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/templates/:id', toValue(args)] as const
}

export function getAppsAppIdTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdTemplatesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['templates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/transactions/', toValue(args)] as const
}

export function getAppsAppIdTransactionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdTransactionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].transactions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdTransactionsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTransactionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdTransactionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].transactions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['transactions']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/transactions/:id', toValue(args)] as const
}

export function getAppsAppIdTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdTransactionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/urssaf/payment', toValue(args)] as const
}

export function getAppsAppIdUrssafPaymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdUrssafPaymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].urssaf.payment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdUrssafPaymentQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdUrssafPaymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdUrssafPaymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].urssaf.payment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>
  >,
) {
  return ['apps', '/apps/:appId/urssaf/preview', toValue(args)] as const
}

export function getAppsAppIdUrssafPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppIdUrssafPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':appId'].urssaf.preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppIdUrssafPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppIdUrssafPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppIdUrssafPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':appId'].urssaf.preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.changepassword.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.changepassword.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>
          >,
          TError,
          void,
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

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
          TError,
          InferRequestType<typeof client.me.$post>,
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

export function getPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          ReturnType<typeof getPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRefreshQueryKey() {
  return ['refresh', '/refresh'] as const
}

export function getRefreshQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRefreshQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.refresh.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRefresh<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>
          >,
          ReturnType<typeof getRefreshQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRefreshQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRefreshQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.refresh.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.register.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendpassword.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sendpassword.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services.vies)[':siren']['$get']>>,
) {
  return ['services', '/services/vies/:siren', toValue(args)] as const
}

export function getServicesViesSirenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services.vies)[':siren']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesViesSirenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.vies[':siren'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesViesSiren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services.vies)[':siren']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesViesSirenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.services.vies)[':siren']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesViesSirenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesViesSirenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.vies[':siren'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
