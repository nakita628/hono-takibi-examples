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

export function getWellKnownKey() {
  return ['.well-known'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getCredentialsKey() {
  return ['credentials'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getUserinfoKey() {
  return ['userinfo'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getWellKnownJwksJsonQueryKey() {
  return ['.well-known', '/.well-known/jwks.json'] as const
}

export function getWellKnownJwksJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownJwksJsonQueryKey>
  >({
    queryKey: getWellKnownJwksJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known']['jwks.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownJwksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownJwksJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWellKnownJwksJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWellKnownJwksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['jwks.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownJwksJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWellKnownJwksJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWellKnownOpenidConfigurationQueryKey() {
  return ['.well-known', '/.well-known/openid-configuration'] as const
}

export function getWellKnownOpenidConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWellKnownOpenidConfigurationQueryKey>
  >({
    queryKey: getWellKnownOpenidConfigurationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['.well-known']['openid-configuration'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownOpenidConfigurationQueryKey>
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
      ...getWellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
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
              Awaited<ReturnType<(typeof client)['.well-known']['openid-configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWellKnownOpenidConfigurationQueryKey>
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
      ...getWellKnownOpenidConfigurationQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdminClientsQueryKey(args: InferRequestType<typeof client.admin.clients.$get>) {
  return ['admin', '/admin/clients', args] as const
}

export function getAdminClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminClientsQueryKey>
  >({
    queryKey: getAdminClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.clients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.clients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminClientsMutationKey() {
  return ['admin', '/admin/clients', 'POST'] as const
}

export function getPostAdminClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.clients.$post>) {
      return parseResponse(client.admin.clients.$post(args, options))
    },
  })
}

export function usePostAdminClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.clients.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.clients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminClientsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminClientsIdQueryKey(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
) {
  return ['admin', '/admin/clients/:id', args] as const
}

export function getAdminClientsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminClientsIdQueryKey>
  >({
    queryKey: getAdminClientsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.clients[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminClientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminClientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminClientsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminClientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.clients)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminClientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminClientsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdminClientsIdMutationKey() {
  return ['admin', '/admin/clients/:id', 'PUT'] as const
}

export function getPutAdminClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.clients)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.clients)[':id']['$put']>) {
      return parseResponse(client.admin.clients[':id'].$put(args, options))
    },
  })
}

export function usePutAdminClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.clients)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminClientsIdMutationKey() {
  return ['admin', '/admin/clients/:id', 'DELETE'] as const
}

export function getDeleteAdminClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.clients)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.clients)[':id']['$delete']>) {
      return parseResponse(client.admin.clients[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.clients)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.clients)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAdminClientsIdMutationKey() {
  return ['admin', '/admin/clients/:id', 'PATCH'] as const
}

export function getPatchAdminClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.clients)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.clients)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.clients)[':id']['$patch']>) {
      return parseResponse(client.admin.clients[':id'].$patch(args, options))
    },
  })
}

export function usePatchAdminClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.clients)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.clients)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdminClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdminClientsIdLifespansMutationKey() {
  return ['admin', '/admin/clients/:id/lifespans', 'PUT'] as const
}

export function getPutAdminClientsIdLifespansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.clients)[':id']['lifespans']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.clients)[':id']['lifespans']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminClientsIdLifespansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.clients)[':id']['lifespans']['$put']>,
    ) {
      return parseResponse(client.admin.clients[':id'].lifespans.$put(args, options))
    },
  })
}

export function usePutAdminClientsIdLifespans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.clients)[':id']['lifespans']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.clients)[':id']['lifespans']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminClientsIdLifespansMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminClientsIdSecretsRotateMutationKey() {
  return ['admin', '/admin/clients/:id/secrets/rotate', 'POST'] as const
}

export function getPostAdminClientsIdSecretsRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClientsIdSecretsRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>,
    ) {
      return parseResponse(client.admin.clients[':id'].secrets.rotate.$post(args, options))
    },
  })
}

export function usePostAdminClientsIdSecretsRotate<
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
                ReturnType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminClientsIdSecretsRotateMutationOptions<
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

export function getDeleteAdminClientsIdSecretsRotateMutationKey() {
  return ['admin', '/admin/clients/:id/secrets/rotate', 'DELETE'] as const
}

export function getDeleteAdminClientsIdSecretsRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClientsIdSecretsRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>,
    ) {
      return parseResponse(client.admin.clients[':id'].secrets.rotate.$delete(args, options))
    },
  })
}

export function useDeleteAdminClientsIdSecretsRotate<
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
                ReturnType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.clients)[':id']['secrets']['rotate']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminClientsIdSecretsRotateMutationOptions<
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

export function getAdminKeysSetQueryKey(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
) {
  return ['admin', '/admin/keys/:set', args] as const
}

export function getAdminKeysSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminKeysSetQueryKey>
  >({
    queryKey: getAdminKeysSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.keys[':set'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdminKeysSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminKeysSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminKeysSetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminKeysSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.keys)[':set']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminKeysSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminKeysSetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdminKeysSetMutationKey() {
  return ['admin', '/admin/keys/:set', 'PUT'] as const
}

export function getPutAdminKeysSetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.keys)[':set']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminKeysSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.keys)[':set']['$put']>) {
      return parseResponse(client.admin.keys[':set'].$put(args, options))
    },
  })
}

export function usePutAdminKeysSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.keys)[':set']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminKeysSetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdminKeysSetMutationKey() {
  return ['admin', '/admin/keys/:set', 'POST'] as const
}

export function getPostAdminKeysSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.keys)[':set']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminKeysSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.keys)[':set']['$post']>) {
      return parseResponse(client.admin.keys[':set'].$post(args, options))
    },
  })
}

export function usePostAdminKeysSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.keys)[':set']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminKeysSetMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminKeysSetMutationKey() {
  return ['admin', '/admin/keys/:set', 'DELETE'] as const
}

export function getDeleteAdminKeysSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.keys)[':set']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminKeysSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.keys)[':set']['$delete']>) {
      return parseResponse(client.admin.keys[':set'].$delete(args, options))
    },
  })
}

export function useDeleteAdminKeysSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.keys)[':set']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.keys)[':set']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminKeysSetMutationOptions<TError, TOnMutateResult>(
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

export function getAdminKeysSetKidQueryKey(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
) {
  return ['admin', '/admin/keys/:set/:kid', args] as const
}

export function getAdminKeysSetKidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminKeysSetKidQueryKey>
  >({
    queryKey: getAdminKeysSetKidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.keys[':set'][':kid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminKeysSetKid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminKeysSetKidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminKeysSetKidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminKeysSetKid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminKeysSetKidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminKeysSetKidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdminKeysSetKidMutationKey() {
  return ['admin', '/admin/keys/:set/:kid', 'PUT'] as const
}

export function getPutAdminKeysSetKidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminKeysSetKidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$put']>) {
      return parseResponse(client.admin.keys[':set'][':kid'].$put(args, options))
    },
  })
}

export function usePutAdminKeysSetKid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminKeysSetKidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminKeysSetKidMutationKey() {
  return ['admin', '/admin/keys/:set/:kid', 'DELETE'] as const
}

export function getDeleteAdminKeysSetKidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminKeysSetKidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$delete']>,
    ) {
      return parseResponse(client.admin.keys[':set'][':kid'].$delete(args, options))
    },
  })
}

export function useDeleteAdminKeysSetKid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.keys)[':set'][':kid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.admin.keys)[':set'][':kid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminKeysSetKidMutationOptions<TError, TOnMutateResult>(
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

export function getAdminOauth2AuthRequestsConsentQueryKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
) {
  return ['admin', '/admin/oauth2/auth/requests/consent', args] as const
}

export function getAdminOauth2AuthRequestsConsentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauth2AuthRequestsConsentQueryKey>
  >({
    queryKey: getAdminOauth2AuthRequestsConsentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.oauth2.auth.requests.consent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminOauth2AuthRequestsConsent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthRequestsConsentQueryKey>
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
      ...getAdminOauth2AuthRequestsConsentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminOauth2AuthRequestsConsent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthRequestsConsentQueryKey>
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
      ...getAdminOauth2AuthRequestsConsentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAdminOauth2AuthRequestsConsentAcceptMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/consent/accept', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsConsentAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsConsentAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.consent.accept.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsConsentAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.consent.accept.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsConsentAcceptMutationOptions<
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

export function getPutAdminOauth2AuthRequestsConsentRejectMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/consent/reject', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsConsentRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsConsentRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.consent.reject.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsConsentReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.consent.reject.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsConsentRejectMutationOptions<
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

export function getPutAdminOauth2AuthRequestsDeviceAcceptMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/device/accept', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsDeviceAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.device.accept.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.device.accept.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsDeviceAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.device.accept.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.device.accept.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsDeviceAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.device.accept.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.device.accept.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsDeviceAcceptMutationOptions<
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

export function getAdminOauth2AuthRequestsLoginQueryKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
) {
  return ['admin', '/admin/oauth2/auth/requests/login', args] as const
}

export function getAdminOauth2AuthRequestsLoginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauth2AuthRequestsLoginQueryKey>
  >({
    queryKey: getAdminOauth2AuthRequestsLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.oauth2.auth.requests.login.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminOauth2AuthRequestsLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthRequestsLoginQueryKey>
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
      ...getAdminOauth2AuthRequestsLoginQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminOauth2AuthRequestsLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthRequestsLoginQueryKey>
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
      ...getAdminOauth2AuthRequestsLoginQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAdminOauth2AuthRequestsLoginAcceptMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/login/accept', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsLoginAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.accept.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.login.accept.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsLoginAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.accept.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.login.accept.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsLoginAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.accept.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.login.accept.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsLoginAcceptMutationOptions<
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

export function getPutAdminOauth2AuthRequestsLoginRejectMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/login/reject', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsLoginRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.reject.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.login.reject.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsLoginRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.login.reject.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.login.reject.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsLoginReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.login.reject.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.login.reject.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsLoginRejectMutationOptions<
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

export function getAdminOauth2AuthRequestsLogoutQueryKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
) {
  return ['admin', '/admin/oauth2/auth/requests/logout', args] as const
}

export function getAdminOauth2AuthRequestsLogoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauth2AuthRequestsLogoutQueryKey>
  >({
    queryKey: getAdminOauth2AuthRequestsLogoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.oauth2.auth.requests.logout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminOauth2AuthRequestsLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthRequestsLogoutQueryKey>
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
      ...getAdminOauth2AuthRequestsLogoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminOauth2AuthRequestsLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthRequestsLogoutQueryKey>
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
      ...getAdminOauth2AuthRequestsLogoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAdminOauth2AuthRequestsLogoutAcceptMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/logout/accept', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsLogoutAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsLogoutAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.logout.accept.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsLogoutAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.logout.accept.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsLogoutAcceptMutationOptions<
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

export function getPutAdminOauth2AuthRequestsLogoutRejectMutationKey() {
  return ['admin', '/admin/oauth2/auth/requests/logout/reject', 'PUT'] as const
}

export function getPutAdminOauth2AuthRequestsLogoutRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauth2AuthRequestsLogoutRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>,
    ) {
      return parseResponse(client.admin.oauth2.auth.requests.logout.reject.$put(args, options))
    },
  })
}

export function usePutAdminOauth2AuthRequestsLogoutReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.requests.logout.reject.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminOauth2AuthRequestsLogoutRejectMutationOptions<
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

export function getAdminOauth2AuthSessionsConsentQueryKey(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
) {
  return ['admin', '/admin/oauth2/auth/sessions/consent', args] as const
}

export function getAdminOauth2AuthSessionsConsentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauth2AuthSessionsConsentQueryKey>
  >({
    queryKey: getAdminOauth2AuthSessionsConsentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.oauth2.auth.sessions.consent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminOauth2AuthSessionsConsent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthSessionsConsentQueryKey>
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
      ...getAdminOauth2AuthSessionsConsentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminOauth2AuthSessionsConsent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauth2AuthSessionsConsentQueryKey>
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
      ...getAdminOauth2AuthSessionsConsentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAdminOauth2AuthSessionsConsentMutationKey() {
  return ['admin', '/admin/oauth2/auth/sessions/consent', 'DELETE'] as const
}

export function getDeleteAdminOauth2AuthSessionsConsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOauth2AuthSessionsConsentMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$delete>,
    ) {
      return parseResponse(client.admin.oauth2.auth.sessions.consent.$delete(args, options))
    },
  })
}

export function useDeleteAdminOauth2AuthSessionsConsent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.consent.$delete>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.sessions.consent.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminOauth2AuthSessionsConsentMutationOptions<
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

export function getDeleteAdminOauth2AuthSessionsLoginMutationKey() {
  return ['admin', '/admin/oauth2/auth/sessions/login', 'DELETE'] as const
}

export function getDeleteAdminOauth2AuthSessionsLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.login.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.admin.oauth2.auth.sessions.login.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOauth2AuthSessionsLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.oauth2.auth.sessions.login.$delete>,
    ) {
      return parseResponse(client.admin.oauth2.auth.sessions.login.$delete(args, options))
    },
  })
}

export function useDeleteAdminOauth2AuthSessionsLogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.oauth2.auth.sessions.login.$delete>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.admin.oauth2.auth.sessions.login.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminOauth2AuthSessionsLoginMutationOptions<
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

export function getPostAdminOauth2IntrospectMutationKey() {
  return ['admin', '/admin/oauth2/introspect', 'POST'] as const
}

export function getPostAdminOauth2IntrospectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.introspect.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.oauth2.introspect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOauth2IntrospectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.oauth2.introspect.$post>) {
      return parseResponse(client.admin.oauth2.introspect.$post(args, options))
    },
  })
}

export function usePostAdminOauth2Introspect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.introspect.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth2.introspect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminOauth2IntrospectMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminOauth2TokensMutationKey() {
  return ['admin', '/admin/oauth2/tokens', 'DELETE'] as const
}

export function getDeleteAdminOauth2TokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.tokens.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.admin.oauth2.tokens.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOauth2TokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.oauth2.tokens.$delete>) {
      return parseResponse(client.admin.oauth2.tokens.$delete(args, options))
    },
  })
}

export function useDeleteAdminOauth2Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth2.tokens.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.admin.oauth2.tokens.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminOauth2TokensMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTrustGrantsJwtBearerIssuersQueryKey(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
) {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers', args] as const
}

export function getAdminTrustGrantsJwtBearerIssuersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTrustGrantsJwtBearerIssuersQueryKey>
  >({
    queryKey: getAdminTrustGrantsJwtBearerIssuersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.trust.grants['jwt-bearer'].issuers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminTrustGrantsJwtBearerIssuers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTrustGrantsJwtBearerIssuersQueryKey>
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
      ...getAdminTrustGrantsJwtBearerIssuersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminTrustGrantsJwtBearerIssuers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTrustGrantsJwtBearerIssuersQueryKey>
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
      ...getAdminTrustGrantsJwtBearerIssuersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdminTrustGrantsJwtBearerIssuersMutationKey() {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers', 'POST'] as const
}

export function getPostAdminTrustGrantsJwtBearerIssuersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTrustGrantsJwtBearerIssuersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>,
    ) {
      return parseResponse(client.admin.trust.grants['jwt-bearer'].issuers.$post(args, options))
    },
  })
}

export function usePostAdminTrustGrantsJwtBearerIssuers<
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
                ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminTrustGrantsJwtBearerIssuersMutationOptions<
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

export function getAdminTrustGrantsJwtBearerIssuersIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
) {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers/:id', args] as const
}

export function getAdminTrustGrantsJwtBearerIssuersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTrustGrantsJwtBearerIssuersIdQueryKey>
  >({
    queryKey: getAdminTrustGrantsJwtBearerIssuersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.trust.grants['jwt-bearer'].issuers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminTrustGrantsJwtBearerIssuersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTrustGrantsJwtBearerIssuersIdQueryKey>
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
      ...getAdminTrustGrantsJwtBearerIssuersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminTrustGrantsJwtBearerIssuersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTrustGrantsJwtBearerIssuersIdQueryKey>
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
      ...getAdminTrustGrantsJwtBearerIssuersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAdminTrustGrantsJwtBearerIssuersIdMutationKey() {
  return ['admin', '/admin/trust/grants/jwt-bearer/issuers/:id', 'DELETE'] as const
}

export function getDeleteAdminTrustGrantsJwtBearerIssuersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminTrustGrantsJwtBearerIssuersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.trust.grants['jwt-bearer'].issuers[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminTrustGrantsJwtBearerIssuersId<
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
                    (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.admin.trust.grants)['jwt-bearer']['issuers'][':id']['$delete']
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
  const mutationDefaults = getDeleteAdminTrustGrantsJwtBearerIssuersIdMutationOptions<
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

export function getPostCredentialsMutationKey() {
  return ['credentials', '/credentials', 'POST'] as const
}

export function getPostCredentialsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>>,
    TError,
    InferRequestType<typeof client.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credentials.$post>) {
      return parseResponse(client.credentials.$post(args, options))
    },
  })
}

export function usePostCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.credentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCredentialsMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getOauth2AuthQueryKey() {
  return ['oauth2', '/oauth2/auth'] as const
}

export function getOauth2AuthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauth2AuthQueryKey>
  >({
    queryKey: getOauth2AuthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauth2Auth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2AuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauth2AuthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth2Auth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.auth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2AuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauth2AuthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauth2DeviceAuthMutationKey() {
  return ['oauth2', '/oauth2/device/auth', 'POST'] as const
}

export function getPostOauth2DeviceAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.auth.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2DeviceAuthMutationKey(),
    async mutationFn() {
      return parseResponse(client.oauth2.device.auth.$post(undefined, options))
    },
  })
}

export function usePostOauth2DeviceAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.auth.$post>>>
          >
        >,
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
  const mutationDefaults = getPostOauth2DeviceAuthMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2DeviceVerifyQueryKey() {
  return ['oauth2', '/oauth2/device/verify'] as const
}

export function getOauth2DeviceVerifyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2DeviceVerifyQueryKey>
  >({
    queryKey: getOauth2DeviceVerifyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.device.verify.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOauth2DeviceVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2DeviceVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauth2DeviceVerifyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth2DeviceVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.device.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2DeviceVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauth2DeviceVerifyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauth2RegisterMutationKey() {
  return ['oauth2', '/oauth2/register', 'POST'] as const
}

export function getPostOauth2RegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2RegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.register.$post>) {
      return parseResponse(client.oauth2.register.$post(args, options))
    },
  })
}

export function usePostOauth2Register<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2RegisterMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2RegisterIdQueryKey(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
) {
  return ['oauth2', '/oauth2/register/:id', args] as const
}

export function getOauth2RegisterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2RegisterIdQueryKey>
  >({
    queryKey: getOauth2RegisterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.register[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOauth2RegisterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2RegisterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauth2RegisterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth2RegisterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth2.register)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2RegisterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauth2RegisterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOauth2RegisterIdMutationKey() {
  return ['oauth2', '/oauth2/register/:id', 'PUT'] as const
}

export function getPutOauth2RegisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2.register)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOauth2RegisterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2.register)[':id']['$put']>) {
      return parseResponse(client.oauth2.register[':id'].$put(args, options))
    },
  })
}

export function usePutOauth2RegisterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.oauth2.register)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOauth2RegisterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOauth2RegisterIdMutationKey() {
  return ['oauth2', '/oauth2/register/:id', 'DELETE'] as const
}

export function getDeleteOauth2RegisterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.oauth2.register)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOauth2RegisterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2.register)[':id']['$delete']>) {
      return parseResponse(client.oauth2.register[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOauth2RegisterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2.register)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.oauth2.register)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOauth2RegisterIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth2RevokeMutationKey() {
  return ['oauth2', '/oauth2/revoke', 'POST'] as const
}

export function getPostOauth2RevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2RevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.revoke.$post>) {
      return parseResponse(client.oauth2.revoke.$post(args, options))
    },
  })
}

export function usePostOauth2Revoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.revoke.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2RevokeMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2SessionsLogoutQueryKey() {
  return ['oauth2', '/oauth2/sessions/logout'] as const
}

export function getOauth2SessionsLogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2SessionsLogoutQueryKey>
  >({
    queryKey: getOauth2SessionsLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.sessions.logout.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOauth2SessionsLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2SessionsLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauth2SessionsLogoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauth2SessionsLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.sessions.logout.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2SessionsLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauth2SessionsLogoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauth2TokenMutationKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function getPostOauth2TokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.token.$post>) {
      return parseResponse(client.oauth2.token.$post(args, options))
    },
  })
}

export function usePostOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserinfoQueryKey() {
  return ['userinfo', '/userinfo'] as const
}

export function getUserinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserinfoQueryKey>
  >({
    queryKey: getUserinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserinfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserinfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
