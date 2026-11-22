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

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getSchemasKey() {
  return ['schemas'] as const
}

export function getSelfServiceKey() {
  return ['self-service'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getWellKnownChangePasswordQueryKey() {
  return ['.well-known', '/.well-known/change-password'] as const
}

export function getWellKnownChangePasswordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownChangePasswordQueryKey>
  >({
    queryKey: getWellKnownChangePasswordQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known']['change-password'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownChangePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownChangePasswordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellKnownChangePasswordQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellKnownChangePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownChangePasswordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellKnownChangePasswordQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWellKnownOryWebauthnJsQueryKey() {
  return ['.well-known', '/.well-known/ory/webauthn.js'] as const
}

export function getWellKnownOryWebauthnJsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownOryWebauthnJsQueryKey>
  >({
    queryKey: getWellKnownOryWebauthnJsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known'].ory['webauthn.js'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownOryWebauthnJs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownOryWebauthnJsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellKnownOryWebauthnJsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellKnownOryWebauthnJs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownOryWebauthnJsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellKnownOryWebauthnJsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAdminCourierMessagesQueryKey(
  args: InferRequestType<typeof client.admin.courier.messages.$get>,
) {
  return ['admin', '/admin/courier/messages', args] as const
}

export function getAdminCourierMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.courier.messages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCourierMessagesQueryKey>
  >({
    queryKey: getAdminCourierMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.courier.messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminCourierMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.courier.messages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminCourierMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminCourierMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminCourierMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.courier.messages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminCourierMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminCourierMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAdminCourierMessagesIdQueryKey(
  args: InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>,
) {
  return ['admin', '/admin/courier/messages/:id', args] as const
}

export function getAdminCourierMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCourierMessagesIdQueryKey>
  >({
    queryKey: getAdminCourierMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.courier.messages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminCourierMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminCourierMessagesIdQueryKey>
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
      ...getAdminCourierMessagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminCourierMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminCourierMessagesIdQueryKey>
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
      ...getAdminCourierMessagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdminIdentitiesQueryKey(
  args: InferRequestType<typeof client.admin.identities.$get>,
) {
  return ['admin', '/admin/identities', args] as const
}

export function getAdminIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.identities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesQueryKey>
  >({
    queryKey: getAdminIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.identities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.identities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.identities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminIdentitiesMutationKey() {
  return ['admin', '/admin/identities', 'POST'] as const
}

export function getPostAdminIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.identities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminIdentitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.identities.$post>) {
      return parseResponse(client.admin.identities.$post(args, options))
    },
  })
}

export function usePostAdminIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.identities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminIdentitiesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAdminIdentitiesMutationKey() {
  return ['admin', '/admin/identities', 'PATCH'] as const
}

export function getPatchAdminIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.identities.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminIdentitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.identities.$patch>) {
      return parseResponse(client.admin.identities.$patch(args, options))
    },
  })
}

export function usePatchAdminIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.identities.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdminIdentitiesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminIdentitiesByExternalExternalIDQueryKey(
  args: InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>,
) {
  return ['admin', '/admin/identities/by/external/:externalID', args] as const
}

export function getAdminIdentitiesByExternalExternalIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesByExternalExternalIDQueryKey>
  >({
    queryKey: getAdminIdentitiesByExternalExternalIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.identities.by.external[':externalID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminIdentitiesByExternalExternalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesByExternalExternalIDQueryKey>
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
      ...getAdminIdentitiesByExternalExternalIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminIdentitiesByExternalExternalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesByExternalExternalIDQueryKey>
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
      ...getAdminIdentitiesByExternalExternalIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdminIdentitiesIdQueryKey(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$get']>,
) {
  return ['admin', '/admin/identities/:id', args] as const
}

export function getAdminIdentitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesIdQueryKey>
  >({
    queryKey: getAdminIdentitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.identities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminIdentitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminIdentitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminIdentitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminIdentitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdminIdentitiesIdMutationKey() {
  return ['admin', '/admin/identities/:id', 'PUT'] as const
}

export function getPutAdminIdentitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.identities)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminIdentitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.identities)[':id']['$put']>) {
      return parseResponse(client.admin.identities[':id'].$put(args, options))
    },
  })
}

export function usePutAdminIdentitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.identities)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.identities)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminIdentitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminIdentitiesIdMutationKey() {
  return ['admin', '/admin/identities/:id', 'DELETE'] as const
}

export function getDeleteAdminIdentitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.identities)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.identities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminIdentitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.identities)[':id']['$delete']>) {
      return parseResponse(client.admin.identities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminIdentitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.identities)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.identities)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminIdentitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAdminIdentitiesIdMutationKey() {
  return ['admin', '/admin/identities/:id', 'PATCH'] as const
}

export function getPatchAdminIdentitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.identities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminIdentitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.identities)[':id']['$patch']>) {
      return parseResponse(client.admin.identities[':id'].$patch(args, options))
    },
  })
}

export function usePatchAdminIdentitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.identities)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.identities)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdminIdentitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminIdentitiesIdCredentialsTypeMutationKey() {
  return ['admin', '/admin/identities/:id/credentials/:type', 'DELETE'] as const
}

export function getDeleteAdminIdentitiesIdCredentialsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.identities)[':id']['credentials'][':type']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.identities)[':id']['credentials'][':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminIdentitiesIdCredentialsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.identities)[':id']['credentials'][':type']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.identities[':id'].credentials[':type'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminIdentitiesIdCredentialsType<
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
                    (typeof client.admin.identities)[':id']['credentials'][':type']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.admin.identities)[':id']['credentials'][':type']['$delete']
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
  const mutationDefaults = getDeleteAdminIdentitiesIdCredentialsTypeMutationOptions<
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

export function getAdminIdentitiesIdSessionsQueryKey(
  args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>,
) {
  return ['admin', '/admin/identities/:id/sessions', args] as const
}

export function getAdminIdentitiesIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesIdSessionsQueryKey>
  >({
    queryKey: getAdminIdentitiesIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.identities[':id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminIdentitiesIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesIdSessionsQueryKey>
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
      ...getAdminIdentitiesIdSessionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminIdentitiesIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminIdentitiesIdSessionsQueryKey>
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
      ...getAdminIdentitiesIdSessionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAdminIdentitiesIdSessionsMutationKey() {
  return ['admin', '/admin/identities/:id/sessions', 'DELETE'] as const
}

export function getDeleteAdminIdentitiesIdSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminIdentitiesIdSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$delete']>,
    ) {
      return parseResponse(client.admin.identities[':id'].sessions.$delete(args, options))
    },
  })
}

export function useDeleteAdminIdentitiesIdSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminIdentitiesIdSessionsMutationOptions<
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

export function getPostAdminRecoveryCodeMutationKey() {
  return ['admin', '/admin/recovery/code', 'POST'] as const
}

export function getPostAdminRecoveryCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.recovery.code.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.recovery.code.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRecoveryCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.recovery.code.$post>) {
      return parseResponse(client.admin.recovery.code.$post(args, options))
    },
  })
}

export function usePostAdminRecoveryCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.recovery.code.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.recovery.code.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminRecoveryCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminRecoveryLinkMutationKey() {
  return ['admin', '/admin/recovery/link', 'POST'] as const
}

export function getPostAdminRecoveryLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.recovery.link.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.recovery.link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRecoveryLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.recovery.link.$post>) {
      return parseResponse(client.admin.recovery.link.$post(args, options))
    },
  })
}

export function usePostAdminRecoveryLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.recovery.link.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.recovery.link.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminRecoveryLinkMutationOptions<TError, TOnMutateResult>(
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

export function getAdminSessionsQueryKey(
  args: InferRequestType<typeof client.admin.sessions.$get>,
) {
  return ['admin', '/admin/sessions', args] as const
}

export function getAdminSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSessionsQueryKey>
  >({
    queryKey: getAdminSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.sessions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.sessions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminSessionsMutationKey() {
  return ['admin', '/admin/sessions', 'POST'] as const
}

export function getPostAdminSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.sessions.$post>) {
      return parseResponse(client.admin.sessions.$post(args, options))
    },
  })
}

export function usePostAdminSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminSessionsIdQueryKey(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['$get']>,
) {
  return ['admin', '/admin/sessions/:id', args] as const
}

export function getAdminSessionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSessionsIdQueryKey>
  >({
    queryKey: getAdminSessionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.sessions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSessionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminSessionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sessions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSessionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminSessionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAdminSessionsIdMutationKey() {
  return ['admin', '/admin/sessions/:id', 'DELETE'] as const
}

export function getDeleteAdminSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.sessions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminSessionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.sessions)[':id']['$delete']>) {
      return parseResponse(client.admin.sessions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.sessions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminSessionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAdminSessionsIdExtendMutationKey() {
  return ['admin', '/admin/sessions/:id/extend', 'PATCH'] as const
}

export function getPatchAdminSessionsIdExtendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sessions)[':id']['extend']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.sessions)[':id']['extend']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminSessionsIdExtendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.sessions)[':id']['extend']['$patch']>,
    ) {
      return parseResponse(client.admin.sessions[':id'].extend.$patch(args, options))
    },
  })
}

export function usePatchAdminSessionsIdExtend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sessions)[':id']['extend']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.sessions)[':id']['extend']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdminSessionsIdExtendMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminTestLoginFlowsMutationKey() {
  return ['admin', '/admin/test-login-flows', 'POST'] as const
}

export function getPostAdminTestLoginFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['test-login-flows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['test-login-flows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTestLoginFlowsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['test-login-flows']['$post']>) {
      return parseResponse(client.admin['test-login-flows'].$post(args, options))
    },
  })
}

export function usePostAdminTestLoginFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin)['test-login-flows']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin)['test-login-flows']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminTestLoginFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getHealthAliveQueryKey() {
  return ['health', '/health/alive'] as const
}

export function getHealthAliveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthAliveQueryKey>
  >({
    queryKey: getHealthAliveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.alive.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthAlive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthAliveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthAliveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthAlive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthAliveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthAliveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >({
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSchemasQueryKey(args: InferRequestType<typeof client.schemas.$get>) {
  return ['schemas', '/schemas', args] as const
}

export function getSchemasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schemas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemasQueryKey>
  >({
    queryKey: getSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schemas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchemasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schemas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchemasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSchemasIdQueryKey(
  args: InferRequestType<(typeof client.schemas)[':id']['$get']>,
) {
  return ['schemas', '/schemas/:id', args] as const
}

export function getSchemasIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.schemas)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasIdQueryKey>
  >({
    queryKey: getSchemasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSchemasId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchemasIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchemasId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchemasIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfServiceErrorsQueryKey(
  args: InferRequestType<(typeof client)['self-service']['errors']['$get']>,
) {
  return ['self-service', '/self-service/errors', args] as const
}

export function getSelfServiceErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceErrorsQueryKey>
  >({
    queryKey: getSelfServiceErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['errors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfServiceErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfServiceErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['errors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfServiceErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfServiceFedCmParametersQueryKey() {
  return ['self-service', '/self-service/fed-cm/parameters'] as const
}

export function getSelfServiceFedCmParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceFedCmParametersQueryKey>
  >({
    queryKey: getSelfServiceFedCmParametersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service']['fed-cm'].parameters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceFedCmParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
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
              Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceFedCmParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfServiceFedCmParametersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfServiceFedCmParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
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
              Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceFedCmParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfServiceFedCmParametersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSelfServiceFedCmTokenMutationKey() {
  return ['self-service', '/self-service/fed-cm/token', 'POST'] as const
}

export function getPostSelfServiceFedCmTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['self-service']['fed-cm']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfServiceFedCmTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['self-service']['fed-cm']['token']['$post']>,
    ) {
      return parseResponse(client['self-service']['fed-cm'].token.$post(args, options))
    },
  })
}

export function usePostSelfServiceFedCmToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['self-service']['fed-cm']['token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfServiceFedCmTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostSelfServiceLoginMutationKey() {
  return ['self-service', '/self-service/login', 'POST'] as const
}

export function getPostSelfServiceLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['login']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['self-service']['login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfServiceLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['self-service']['login']['$post']>) {
      return parseResponse(client['self-service'].login.$post(args, options))
    },
  })
}

export function usePostSelfServiceLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['self-service']['login']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfServiceLoginMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceLoginApiQueryKey(
  args: InferRequestType<(typeof client)['self-service']['login']['api']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/login/api', keyArgs] as const
}

export function getSelfServiceLoginApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLoginApiQueryKey>
  >({
    queryKey: getSelfServiceLoginApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].login.api.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceLoginApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['api']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLoginApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfServiceLoginApiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfServiceLoginApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['api']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLoginApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfServiceLoginApiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfServiceLoginBrowserQueryKey(
  args: InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/login/browser', keyArgs] as const
}

export function getSelfServiceLoginBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLoginBrowserQueryKey>
  >({
    queryKey: getSelfServiceLoginBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].login.browser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceLoginBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLoginBrowserQueryKey>
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
      ...getSelfServiceLoginBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceLoginBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLoginBrowserQueryKey>
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
      ...getSelfServiceLoginBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceLoginFlowsQueryKey(
  args: InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/login/flows', keyArgs] as const
}

export function getSelfServiceLoginFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLoginFlowsQueryKey>
  >({
    queryKey: getSelfServiceLoginFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].login.flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceLoginFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLoginFlowsQueryKey>
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
      ...getSelfServiceLoginFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceLoginFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLoginFlowsQueryKey>
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
      ...getSelfServiceLoginFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSelfServiceLoginTestMutationKey() {
  return ['self-service', '/self-service/login/test', 'DELETE'] as const
}

export function getDeleteSelfServiceLoginTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['self-service']['login']['test']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['self-service']['login']['test']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfServiceLoginTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['self-service']['login']['test']['$delete']>,
    ) {
      return parseResponse(client['self-service'].login.test.$delete(args, options))
    },
  })
}

export function useDeleteSelfServiceLoginTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['login']['test']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['self-service']['login']['test']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfServiceLoginTestMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceLogoutQueryKey(
  args: InferRequestType<(typeof client)['self-service']['logout']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/logout', keyArgs] as const
}

export function getSelfServiceLogoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['logout']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLogoutQueryKey>
  >({
    queryKey: getSelfServiceLogoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].logout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['logout']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfServiceLogoutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfServiceLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['logout']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfServiceLogoutQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSelfServiceLogoutApiMutationKey() {
  return ['self-service', '/self-service/logout/api', 'DELETE'] as const
}

export function getDeleteSelfServiceLogoutApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['self-service']['logout']['api']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['self-service']['logout']['api']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfServiceLogoutApiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['self-service']['logout']['api']['$delete']>,
    ) {
      return parseResponse(client['self-service'].logout.api.$delete(args, options))
    },
  })
}

export function useDeleteSelfServiceLogoutApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['logout']['api']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['self-service']['logout']['api']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfServiceLogoutApiMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceLogoutBrowserQueryKey(
  args: InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/logout/browser', keyArgs] as const
}

export function getSelfServiceLogoutBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLogoutBrowserQueryKey>
  >({
    queryKey: getSelfServiceLogoutBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].logout.browser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceLogoutBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLogoutBrowserQueryKey>
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
      ...getSelfServiceLogoutBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceLogoutBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceLogoutBrowserQueryKey>
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
      ...getSelfServiceLogoutBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfServiceRecoveryMutationKey() {
  return ['self-service', '/self-service/recovery', 'POST'] as const
}

export function getPostSelfServiceRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['self-service']['recovery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfServiceRecoveryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['self-service']['recovery']['$post']>) {
      return parseResponse(client['self-service'].recovery.$post(args, options))
    },
  })
}

export function usePostSelfServiceRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['self-service']['recovery']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfServiceRecoveryMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceRecoveryApiQueryKey() {
  return ['self-service', '/self-service/recovery/api'] as const
}

export function getSelfServiceRecoveryApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRecoveryApiQueryKey>
  >({
    queryKey: getSelfServiceRecoveryApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].recovery.api.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceRecoveryApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
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
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRecoveryApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfServiceRecoveryApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfServiceRecoveryApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
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
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRecoveryApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfServiceRecoveryApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfServiceRecoveryBrowserQueryKey(
  args: InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>,
) {
  return ['self-service', '/self-service/recovery/browser', args] as const
}

export function getSelfServiceRecoveryBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRecoveryBrowserQueryKey>
  >({
    queryKey: getSelfServiceRecoveryBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].recovery.browser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceRecoveryBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRecoveryBrowserQueryKey>
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
      ...getSelfServiceRecoveryBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceRecoveryBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRecoveryBrowserQueryKey>
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
      ...getSelfServiceRecoveryBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceRecoveryFlowsQueryKey(
  args: InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/recovery/flows', keyArgs] as const
}

export function getSelfServiceRecoveryFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRecoveryFlowsQueryKey>
  >({
    queryKey: getSelfServiceRecoveryFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].recovery.flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceRecoveryFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRecoveryFlowsQueryKey>
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
      ...getSelfServiceRecoveryFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceRecoveryFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRecoveryFlowsQueryKey>
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
      ...getSelfServiceRecoveryFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfServiceRegistrationMutationKey() {
  return ['self-service', '/self-service/registration', 'POST'] as const
}

export function getPostSelfServiceRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['registration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['self-service']['registration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfServiceRegistrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['self-service']['registration']['$post']>,
    ) {
      return parseResponse(client['self-service'].registration.$post(args, options))
    },
  })
}

export function usePostSelfServiceRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['registration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['self-service']['registration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfServiceRegistrationMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceRegistrationApiQueryKey(
  args: InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>,
) {
  return ['self-service', '/self-service/registration/api', args] as const
}

export function getSelfServiceRegistrationApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRegistrationApiQueryKey>
  >({
    queryKey: getSelfServiceRegistrationApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].registration.api.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceRegistrationApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRegistrationApiQueryKey>
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
      ...getSelfServiceRegistrationApiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceRegistrationApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRegistrationApiQueryKey>
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
      ...getSelfServiceRegistrationApiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceRegistrationBrowserQueryKey(
  args: InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>,
) {
  return ['self-service', '/self-service/registration/browser', args] as const
}

export function getSelfServiceRegistrationBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRegistrationBrowserQueryKey>
  >({
    queryKey: getSelfServiceRegistrationBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].registration.browser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceRegistrationBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRegistrationBrowserQueryKey>
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
      ...getSelfServiceRegistrationBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceRegistrationBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRegistrationBrowserQueryKey>
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
      ...getSelfServiceRegistrationBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceRegistrationFlowsQueryKey(
  args: InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/registration/flows', keyArgs] as const
}

export function getSelfServiceRegistrationFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRegistrationFlowsQueryKey>
  >({
    queryKey: getSelfServiceRegistrationFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].registration.flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceRegistrationFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRegistrationFlowsQueryKey>
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
      ...getSelfServiceRegistrationFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceRegistrationFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceRegistrationFlowsQueryKey>
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
      ...getSelfServiceRegistrationFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfServiceSettingsMutationKey() {
  return ['self-service', '/self-service/settings', 'POST'] as const
}

export function getPostSelfServiceSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['self-service']['settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfServiceSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['self-service']['settings']['$post']>) {
      return parseResponse(client['self-service'].settings.$post(args, options))
    },
  })
}

export function usePostSelfServiceSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['self-service']['settings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfServiceSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceSettingsApiQueryKey(
  args: InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/settings/api', keyArgs] as const
}

export function getSelfServiceSettingsApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceSettingsApiQueryKey>
  >({
    queryKey: getSelfServiceSettingsApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].settings.api.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceSettingsApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceSettingsApiQueryKey>
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
      ...getSelfServiceSettingsApiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceSettingsApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceSettingsApiQueryKey>
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
      ...getSelfServiceSettingsApiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceSettingsBrowserQueryKey(
  args: InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/settings/browser', keyArgs] as const
}

export function getSelfServiceSettingsBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceSettingsBrowserQueryKey>
  >({
    queryKey: getSelfServiceSettingsBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].settings.browser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceSettingsBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceSettingsBrowserQueryKey>
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
      ...getSelfServiceSettingsBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceSettingsBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceSettingsBrowserQueryKey>
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
      ...getSelfServiceSettingsBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceSettingsFlowsQueryKey(
  args: InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/settings/flows', keyArgs] as const
}

export function getSelfServiceSettingsFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceSettingsFlowsQueryKey>
  >({
    queryKey: getSelfServiceSettingsFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].settings.flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceSettingsFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceSettingsFlowsQueryKey>
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
      ...getSelfServiceSettingsFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceSettingsFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceSettingsFlowsQueryKey>
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
      ...getSelfServiceSettingsFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfServiceVerificationMutationKey() {
  return ['self-service', '/self-service/verification', 'POST'] as const
}

export function getPostSelfServiceVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['verification']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['self-service']['verification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfServiceVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['self-service']['verification']['$post']>,
    ) {
      return parseResponse(client['self-service'].verification.$post(args, options))
    },
  })
}

export function usePostSelfServiceVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['verification']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['self-service']['verification']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfServiceVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getSelfServiceVerificationApiQueryKey(
  args: InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>,
) {
  return ['self-service', '/self-service/verification/api', args] as const
}

export function getSelfServiceVerificationApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceVerificationApiQueryKey>
  >({
    queryKey: getSelfServiceVerificationApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].verification.api.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceVerificationApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceVerificationApiQueryKey>
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
      ...getSelfServiceVerificationApiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceVerificationApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceVerificationApiQueryKey>
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
      ...getSelfServiceVerificationApiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceVerificationBrowserQueryKey(
  args: InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>,
) {
  return ['self-service', '/self-service/verification/browser', args] as const
}

export function getSelfServiceVerificationBrowserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceVerificationBrowserQueryKey>
  >({
    queryKey: getSelfServiceVerificationBrowserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].verification.browser.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceVerificationBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceVerificationBrowserQueryKey>
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
      ...getSelfServiceVerificationBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceVerificationBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceVerificationBrowserQueryKey>
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
      ...getSelfServiceVerificationBrowserQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfServiceVerificationFlowsQueryKey(
  args: InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['self-service', '/self-service/verification/flows', keyArgs] as const
}

export function getSelfServiceVerificationFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceVerificationFlowsQueryKey>
  >({
    queryKey: getSelfServiceVerificationFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['self-service'].verification.flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfServiceVerificationFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceVerificationFlowsQueryKey>
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
      ...getSelfServiceVerificationFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfServiceVerificationFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfServiceVerificationFlowsQueryKey>
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
      ...getSelfServiceVerificationFlowsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSessionsQueryKey(args: InferRequestType<typeof client.sessions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sessions', '/sessions', keyArgs] as const
}

export function getSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sessions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >({
    queryKey: getSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sessions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSessionsMutationKey() {
  return ['sessions', '/sessions', 'DELETE'] as const
}

export function getDeleteSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$delete>) {
      return parseResponse(client.sessions.$delete(args, options))
    },
  })
}

export function useDeleteSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.sessions.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSessionsTokenExchangeQueryKey(
  args: InferRequestType<(typeof client.sessions)['token-exchange']['$get']>,
) {
  return ['sessions', '/sessions/token-exchange', args] as const
}

export function getSessionsTokenExchangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)['token-exchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsTokenExchangeQueryKey>
  >({
    queryKey: getSessionsTokenExchangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions['token-exchange'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSessionsTokenExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)['token-exchange']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsTokenExchangeQueryKey>
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
      ...getSessionsTokenExchangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSessionsTokenExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)['token-exchange']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsTokenExchangeQueryKey>
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
      ...getSessionsTokenExchangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSessionsWhoamiQueryKey(
  args: InferRequestType<typeof client.sessions.whoami.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sessions', '/sessions/whoami', keyArgs] as const
}

export function getSessionsWhoamiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sessions.whoami.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsWhoamiQueryKey>
  >({
    queryKey: getSessionsWhoamiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions.whoami.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSessionsWhoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sessions.whoami.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsWhoamiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSessionsWhoamiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSessionsWhoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sessions.whoami.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsWhoamiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSessionsWhoamiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSessionsIdMutationKey() {
  return ['sessions', '/sessions/:id', 'DELETE'] as const
}

export function getDeleteSessionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sessions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':id']['$delete']>) {
      return parseResponse(client.sessions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sessions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSessionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
