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

export function getWellKnownChangePasswordQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWellKnownChangePasswordQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known']['change-password'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWellKnownChangePasswordQueryKey>
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
          Awaited<ReturnType<(typeof client)['.well-known']['change-password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownChangePasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWellKnownChangePasswordQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known']['change-password'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWellKnownOryWebauthnJsQueryKey() {
  return ['.well-known', '/.well-known/ory/webauthn.js'] as const
}

export function getWellKnownOryWebauthnJsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWellKnownOryWebauthnJsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['.well-known'].ory['webauthn.js'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWellKnownOryWebauthnJsQueryKey>
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
          Awaited<ReturnType<(typeof client)['.well-known']['ory']['webauthn.js']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownOryWebauthnJsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWellKnownOryWebauthnJsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['.well-known'].ory['webauthn.js'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminCourierMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.courier.messages.$get>>,
) {
  return ['admin', '/admin/courier/messages', toValue(args)] as const
}

export function getAdminCourierMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.courier.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCourierMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.courier.messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCourierMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.courier.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>
            >
          >,
          ReturnType<typeof getAdminCourierMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.courier.messages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCourierMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCourierMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.courier.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminCourierMessagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>>,
) {
  return ['admin', '/admin/courier/messages/:id', toValue(args)] as const
}

export function getAdminCourierMessagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCourierMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.courier.messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.courier.messages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCourierMessagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.courier.messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCourierMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCourierMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.courier.messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminIdentitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.identities.$get>>,
) {
  return ['admin', '/admin/identities', toValue(args)] as const
}

export function getAdminIdentitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.identities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.identities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>
            >
          >,
          ReturnType<typeof getAdminIdentitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>
  >,
) {
  return ['admin', '/admin/identities/by/external/:externalID', toValue(args)] as const
}

export function getAdminIdentitiesByExternalExternalIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIdentitiesByExternalExternalIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.identities.by.external[':externalID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.identities.by.external)[':externalID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdminIdentitiesByExternalExternalIDQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.identities.by.external)[':externalID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesByExternalExternalIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIdentitiesByExternalExternalIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.identities.by.external[':externalID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminIdentitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.identities)[':id']['$get']>>,
) {
  return ['admin', '/admin/identities/:id', toValue(args)] as const
}

export function getAdminIdentitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.identities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIdentitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.identities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIdentitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.identities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminIdentitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.identities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIdentitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.identities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>
  >,
) {
  return ['admin', '/admin/identities/:id/sessions', toValue(args)] as const
}

export function getAdminIdentitiesIdSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminIdentitiesIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.identities[':id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminIdentitiesIdSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.identities)[':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIdentitiesIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminIdentitiesIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.identities[':id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.admin.identities)[':id']['sessions']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.identities)[':id']['sessions']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.sessions.$get>>,
) {
  return ['admin', '/admin/sessions', toValue(args)] as const
}

export function getAdminSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
          >,
          ReturnType<typeof getAdminSessionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.sessions.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.sessions)[':id']['$get']>>,
) {
  return ['admin', '/admin/sessions/:id', toValue(args)] as const
}

export function getAdminSessionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.sessions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSessionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.sessions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.sessions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminSessionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.sessions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSessionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSessionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.sessions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getHealthAliveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthAliveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.alive.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthAlive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
          >,
          ReturnType<typeof getHealthAliveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthAliveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthAliveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.alive.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          ReturnType<typeof getHealthReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schemas.$get>>,
) {
  return ['schemas', '/schemas', toValue(args)] as const
}

export function getSchemasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schemas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schemas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
          >,
          ReturnType<typeof getSchemasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemasIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':id']['$get']>>,
) {
  return ['schemas', '/schemas/:id', toValue(args)] as const
}

export function getSchemasIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemasId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSchemasIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceErrorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['errors']['$get']>>,
) {
  return ['self-service', '/self-service/errors', toValue(args)] as const
}

export function getSelfServiceErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['errors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].errors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfServiceErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['errors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceErrorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['errors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceFedCmParametersQueryKey() {
  return ['self-service', '/self-service/fed-cm/parameters'] as const
}

export function getSelfServiceFedCmParametersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfServiceFedCmParametersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service']['fed-cm'].parameters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceFedCmParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['fed-cm']['parameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceFedCmParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfServiceFedCmParametersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service']['fed-cm'].parameters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['login']['api']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/login/api', keyArgs] as const
}

export function getSelfServiceLoginApiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['login']['api']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceLoginApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].login.api.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['login']['api']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceLoginApiQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['login']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLoginApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceLoginApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].login.api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceLoginBrowserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/login/browser', keyArgs] as const
}

export function getSelfServiceLoginBrowserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceLoginBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].login.browser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['login']['browser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceLoginBrowserQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['login']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLoginBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceLoginBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].login.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceLoginFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/login/flows', keyArgs] as const
}

export function getSelfServiceLoginFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceLoginFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].login.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['login']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceLoginFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['login']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLoginFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceLoginFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].login.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['logout']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/logout', keyArgs] as const
}

export function getSelfServiceLogoutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['logout']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceLogoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].logout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelfServiceLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['self-service']['logout']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceLogoutQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['self-service']['logout']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceLogoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].logout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/logout/browser', keyArgs] as const
}

export function getSelfServiceLogoutBrowserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceLogoutBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].logout.browser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['logout']['browser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceLogoutBrowserQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['logout']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceLogoutBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceLogoutBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].logout.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSelfServiceRecoveryApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSelfServiceRecoveryApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].recovery.api.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceRecoveryApiQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRecoveryApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSelfServiceRecoveryApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].recovery.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceRecoveryBrowserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>
  >,
) {
  return ['self-service', '/self-service/recovery/browser', toValue(args)] as const
}

export function getSelfServiceRecoveryBrowserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceRecoveryBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].recovery.browser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['recovery']['browser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceRecoveryBrowserQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRecoveryBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceRecoveryBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].recovery.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceRecoveryFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/recovery/flows', keyArgs] as const
}

export function getSelfServiceRecoveryFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceRecoveryFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].recovery.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['recovery']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceRecoveryFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['recovery']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRecoveryFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceRecoveryFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].recovery.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>
  >,
) {
  return ['self-service', '/self-service/registration/api', toValue(args)] as const
}

export function getSelfServiceRegistrationApiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceRegistrationApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].registration.api.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['api']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceRegistrationApiQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['registration']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRegistrationApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceRegistrationApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].registration.api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceRegistrationBrowserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>
  >,
) {
  return ['self-service', '/self-service/registration/browser', toValue(args)] as const
}

export function getSelfServiceRegistrationBrowserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceRegistrationBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].registration.browser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['browser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfServiceRegistrationBrowserQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['registration']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRegistrationBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceRegistrationBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].registration.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceRegistrationFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/registration/flows', keyArgs] as const
}

export function getSelfServiceRegistrationFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceRegistrationFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].registration.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['registration']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>
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
                  ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfServiceRegistrationFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['registration']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceRegistrationFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceRegistrationFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].registration.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/settings/api', keyArgs] as const
}

export function getSelfServiceSettingsApiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceSettingsApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].settings.api.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['api']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceSettingsApiQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['settings']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceSettingsApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceSettingsApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].settings.api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceSettingsBrowserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/settings/browser', keyArgs] as const
}

export function getSelfServiceSettingsBrowserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceSettingsBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].settings.browser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['browser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceSettingsBrowserQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['settings']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceSettingsBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceSettingsBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].settings.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceSettingsFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/settings/flows', keyArgs] as const
}

export function getSelfServiceSettingsFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceSettingsFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].settings.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['settings']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceSettingsFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['settings']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceSettingsFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceSettingsFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].settings.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>
  >,
) {
  return ['self-service', '/self-service/verification/api', toValue(args)] as const
}

export function getSelfServiceVerificationApiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceVerificationApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].verification.api.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['api']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelfServiceVerificationApiQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['verification']['api']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceVerificationApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceVerificationApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].verification.api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceVerificationBrowserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>
  >,
) {
  return ['self-service', '/self-service/verification/browser', toValue(args)] as const
}

export function getSelfServiceVerificationBrowserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceVerificationBrowserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].verification.browser.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['browser']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfServiceVerificationBrowserQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['verification']['browser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceVerificationBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceVerificationBrowserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].verification.browser.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelfServiceVerificationFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['self-service', '/self-service/verification/flows', keyArgs] as const
}

export function getSelfServiceVerificationFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelfServiceVerificationFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['self-service'].verification.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['self-service']['verification']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>
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
                  ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSelfServiceVerificationFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)['self-service']['verification']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfServiceVerificationFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelfServiceVerificationFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['self-service'].verification.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sessions', '/sessions', keyArgs] as const
}

export function getSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>
          >,
          ReturnType<typeof getSessionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.sessions.$delete>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)['token-exchange']['$get']>>,
) {
  return ['sessions', '/sessions/token-exchange', toValue(args)] as const
}

export function getSessionsTokenExchangeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)['token-exchange']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsTokenExchangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions['token-exchange'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsTokenExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)['token-exchange']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSessionsTokenExchangeQueryKey>
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
          Awaited<ReturnType<(typeof client.sessions)['token-exchange']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsTokenExchangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsTokenExchangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions['token-exchange'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionsWhoamiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.whoami.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sessions', '/sessions/whoami', keyArgs] as const
}

export function getSessionsWhoamiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.whoami.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsWhoamiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions.whoami.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsWhoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.whoami.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>
            >
          >,
          ReturnType<typeof getSessionsWhoamiQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.whoami.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsWhoamiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsWhoamiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions.whoami.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sessions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sessions)[':id']['$delete']>,
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

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
